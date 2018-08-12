"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const crypto_1 = require("crypto");
const log_1 = require("./log");
const log = new log_1.Log('httpUtil');
class Digest {
    constructor(username, password) {
        this.nc = 0;
        this.username = username;
        this.password = password;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = crypto_1.createHash('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testDigestAuth(options, data, response) {
        log.info(`received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = crypto_1.createHash('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = crypto_1.createHash('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = crypto_1.createHash('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
        options.headers.Authorization = compileParams(authParams);
        return requestOptions(options);
    }
}
exports.Digest = Digest;
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.split(',').forEach((part) => {
        const kv = part.split('=').map((v) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
    });
    return params;
}
function isBinary(contentType) {
    const binary = {
        'text/html': false,
        'text/plain': false,
        'image/jpeg': true,
        'image/png': true
    };
    const result = binary[contentType];
    return (result === undefined) ? false : result;
}
function getAttributes(tag, result) {
    let fields = tag.split(/(?=([^"]*"[^"]*")*[^"]*$)\s+/g);
    tag = fields[0].trim();
    result[tag] = {};
    if (fields.length > 0) {
        for (let i = 1; i < fields.length; i++) {
            let attrs = fields[i].split('=');
            result[tag].attrs = result[tag].attrs || {};
            result[tag].attrs[attrs[0].trim()] = attrs[1].split('"')[1].trim();
        }
    }
    return tag;
}
function request(url, user, referer, postData) {
    let options = {
        method: postData ? 'POST' : 'GET',
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        path: url.pathname + (url.search || ''),
        headers: { 'User-Agent': 'helpful scripts' },
    };
    if (referer) {
        options.headers.referer = referer;
    }
    return requestOptions(options, user, postData);
}
exports.request = request;
function requestOptions(options, user, postData) {
    let auth = (options.headers && options.headers.Authorization);
    log.debug(`requesting ${log.inspect(options, 4)}`);
    return new Promise((resolve, reject) => {
        let data = '';
        log.debug(`sending request ${auth ? 'with authorization ' : ''}for ${options.protocol}//${options.host}:${options.port}${options.path}`);
        const req = http.request(options, (res) => {
            const encoding = isBinary(res.headers['content-type']) ? 'binary' : 'utf8';
            log.debug(`receiving...${res.headers['content-type']} => ${encoding}`);
            res.setEncoding(encoding);
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => { log.debug(`received ${encoding}`); resolve({ data: data, response: res }); });
        });
        req.on('error', (e) => reject(e));
        if (postData !== undefined) {
            req.write(postData);
        }
        req.end();
    })
        .then((res) => {
        if (user && res.response.headers['www-authenticate']) {
            return user.testDigestAuth(options, res.data, res.response);
        }
        else {
            return res;
        }
    });
}
function xml2json(xml) {
    let result;
    while (xml.length > 0) {
        let tag = xml.match(/<.*?>/);
        if (tag && tag.length > 0) {
            tag = tag[0].substring(1, tag[0].length - 1);
            result = result || {};
            tag = getAttributes(tag, result);
            let start = xml.indexOf(`<${tag}`);
            let end = xml.indexOf(`</${tag}>`);
            if (end > 0) {
                let content = xml.substring(start + tag.length + 2, end).trim();
                result[tag] = this.xml2json(content);
                xml = xml.substring(end + tag.length + 3).trim();
            }
            else {
                xml = xml.substring(xml.indexOf('>') + 1).trim();
            }
        }
        else {
            result = xml.slice(0);
            xml = '';
        }
    }
    return result;
}
exports.xml2json = xml2json;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaHR0cFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxNQUFPLElBQUksR0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFL0IsbUNBQW9DO0FBQ3BDLCtCQUFtQztBQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBd0JwRTtJQUtJLFlBQVksUUFBZSxFQUFFLFFBQWU7UUFKNUMsT0FBRSxHQUFHLENBQUMsQ0FBQztRQUtILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFLRCxRQUFRO1FBQ0osSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBTUQsY0FBYyxDQUFDLEdBQVU7UUFDckIsSUFBSSxNQUFVLENBQUM7UUFDZixJQUFJLEVBQVMsQ0FBQztRQUVkLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLElBQUksVUFBVSxHQUFHLG1CQUFVLENBQUMsS0FB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