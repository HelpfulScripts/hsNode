"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const url_1 = require("url");
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
        if (!response.headers['www-authenticate']) {
            return Promise.resolve({ response: response, data: data });
        }
        log.debug(`received ${response.statusCode} www-authenticate request for ${options.host}`);
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
        return request(options);
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
function request(options, postData) {
    let auth = false;
    if (options.headers && options.headers.Authorization) {
        auth = true;
    }
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
        .then((res) => options.myDigest ? options.myDigest.testDigestAuth(options, res.data, res.response) : res);
}
exports.request = request;
function get(url) {
    let options;
    if (typeof url === 'string') {
        const Url = new url_1.URL(url);
        options = {
            host: Url.host,
            hostname: Url.hostname,
            port: Url.port,
            method: 'GET',
            path: Url.pathname + Url.search,
            protocol: Url.protocol,
            headers: {
                'User-Agent': 'helpful scripts'
            },
            myDigest: (Url.username && Url.password) ? new Digest(Url.username, Url.password) : undefined
        };
    }
    else {
        options = url;
        options.myDigest = (url.username) ? new Digest(url.username, url.password) : undefined;
    }
    if (!options.headers) {
        options.headers = { 'User-Agent': 'helpful scripts' };
    }
    return request(options);
}
exports.get = get;
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
function decodeXmlResult(xml) {
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
                result[tag] = this.decodeXmlResult(content);
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
exports.decodeXmlResult = decodeXmlResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaHR0cFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxNQUFPLElBQUksR0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsNkJBQWlDO0FBQ2pDLG1DQUFvQztBQUNwQywrQkFBbUM7QUFBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQXNCcEU7SUFLSSxZQUFZLFFBQWUsRUFBRSxRQUFlO1FBSjVDLE9BQUUsR0FBRyxDQUFDLENBQUM7UUFLSCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBS0QsUUFBUTtRQUNKLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNuQixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQU1ELGNBQWMsQ0FBQyxHQUFVO1FBQ3JCLElBQUksTUFBVSxDQUFDO1FBQ2YsSUFBSSxFQUFTLENBQUM7UUFFZCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUN6QixJQUFJLFVBQVUsR0FBRyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEQsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQVcsRUFBRSxJQUFXLEVBQUUsUUFBd0I7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7U0FBRTtRQUN0RyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksUUFBUSxDQUFDLFVBQVUsaUNBQWlDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTFGLElBQUksU0FBUyxHQUFPLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksR0FBRyxHQUFHLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsbUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLElBQUksRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLEdBQUcsbUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLE1BQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN2RyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2xCLElBQUksVUFBVSxHQUFPO1lBQ2pCLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJO1lBQ2pCLEdBQUcsRUFBRSxTQUFTLENBQUMsR0FBRztZQUNsQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQy9CLENBQUM7UUFFRixVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxDLElBQUksTUFBTSxFQUFFO1lBQ1IsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbkIsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDOUI7UUFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKO0FBNUVELHdCQTRFQztBQUVELGtCQUFrQixJQUFRO0lBS3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQU1ELHVCQUF1QixNQUFVO0lBQzdCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1FBQ2xCLElBQUksT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ2pDLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7S0FDSjtJQUNELE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQU1ELHlCQUF5QixLQUFZO0lBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsNkJBQTZCLFlBQW1CO0lBQzVDLFlBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1FBQzVDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWtCLFdBQWtCO0lBQ2hDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsV0FBVyxFQUFLLEtBQUs7UUFDckIsWUFBWSxFQUFJLEtBQUs7UUFDckIsWUFBWSxFQUFJLElBQUk7UUFDcEIsV0FBVyxFQUFLLElBQUk7S0FDdkIsQ0FBQztJQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNsRCxDQUFDO0FBV0QsaUJBQXdCLE9BQVcsRUFBRSxRQUFhO0lBQzlDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNqQixJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQUU7SUFDdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQWdDLEVBQUUsTUFBdUIsRUFBRSxFQUFFO1FBQzdFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLElBQUksQ0FBQSxDQUFDLENBQUMscUJBQXFCLENBQUEsQ0FBQyxDQUFBLEVBQUUsT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0SSxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFO1lBQzFDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDdkUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLEdBQUcsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3RDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtRQUNwRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDZCxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxHQUFnQixFQUFFLEVBQUUsQ0FDdkIsT0FBTyxDQUFDLFFBQVEsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDNUY7QUFDTCxDQUFDO0FBdEJELDBCQXNCQztBQVFELGFBQW9CLEdBQWM7SUFDOUIsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN6QixNQUFNLEdBQUcsR0FBTyxJQUFJLFNBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixPQUFPLEdBQUc7WUFDTixJQUFJLEVBQVEsR0FBRyxDQUFDLElBQUk7WUFDcEIsUUFBUSxFQUFJLEdBQUcsQ0FBQyxRQUFRO1lBQ3hCLElBQUksRUFBUSxHQUFHLENBQUMsSUFBSTtZQUNwQixNQUFNLEVBQU0sS0FBSztZQUNqQixJQUFJLEVBQVEsR0FBRyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsTUFBTTtZQUNuQyxRQUFRLEVBQUksR0FBRyxDQUFDLFFBQVE7WUFDeEIsT0FBTyxFQUFLO2dCQUNSLFlBQVksRUFBRSxpQkFBaUI7YUFDbEM7WUFDRCxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDL0YsQ0FBQztLQUNMO1NBQU07UUFDSCxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztLQUN6RjtJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQUUsT0FBTyxDQUFDLE9BQU8sR0FBQyxFQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxDQUFDO0tBQUU7SUFDNUUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQXRCRCxrQkFzQkM7QUFFRCx1QkFBdUIsR0FBVSxFQUFFLE1BQVU7SUFDekMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ3hELEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEU7S0FDSjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUVELHlCQUFnQyxHQUFVO0lBQ3RDLElBQUksTUFBVSxDQUFDO0lBQ2YsT0FBTSxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRTtRQUNoQixJQUFJLEdBQUcsR0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQ3RCLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksR0FBRyxHQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtnQkFDVCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2hEO2lCQUFNO2dCQUVILEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEQ7U0FDSjthQUFNO1lBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNaO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBeEJELDBDQXdCQyJ9