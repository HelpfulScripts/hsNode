const http = jest.genMockFromModule('http');

const contentTypes = {
    'jpg':  'image/jpeg',
    'png':  'image/png',
    'html': 'text/html',
    '':     'text/html'
}

const payLoad = {
};

function __setPayLoads(payloads) {
    payloads.forEach(p => payLoad[p.path] = p);
}

function request(options, callBack) {
// console.log(`http-mock: request`);
// console.log(options);
    let enc = 'utf8';
    const eventCallbacks = {};
    const file = options.pathname;
    const extIndex = file.lastIndexOf('.');
    const fileExt = (extIndex>0)? file.substr(extIndex+1) : '';
    const cType = contentTypes[fileExt];
    if (!cType) { console.log(`http mock encountered unknown filetype '${fileExt}' for path '${options.path}'`); }
    const pl = payLoad[options.path];
    if (!pl) { console.log(`no payload entry found for '${options.path}'`); }
    const resultProcessor = {
        headers: {
            'content-type': cType || 'text/html',
            'www-authenticate': pl.authenticate || undefined
        },
        request: options,
        setEncoding: (_enc) => {
            if (_enc === 'binary' || _enc === 'utf8') { enc = _enc; }
            else { console.log(`unknown encoding '${_enc}'`); }
        },
        on: (event, cb) => { eventCallbacks[event] = cb; },
        status: pl? pl.code : undefined
    };
    if (resultProcessor.status > 400) { 
        if (options.headers.Authorization) {
            resultProcessor.Authorization = options.headers.Authorization;
            resultProcessor.headers['www-authenticate'] = undefined;
            resultProcessor.status = 200;
        } else {
            resultProcessor.headers['www-authenticate'] = 
                pl.authenticate==='Digest'? 'Digest realm="IPCamera Login", nonce="cc6e4ead42917cb50548b4f94b4752fd", qop="auth"' :
                pl.authenticate==='Basic'? 'Basic realm="User Visible Realm"' : undefined; 
        }
    }
    return {
        on: (event, cb) => {    // e.g. to signal 'error'
        },   
        write: (data) => {
        },
        end: () => Promise.resolve()
            // pass back the results object in the callback
            .then(() => callBack(resultProcessor))
            // now start feeding the event callbacks
            .then(() => { 
                eventCallbacks['data'](pl? pl.content : undefined);
                eventCallbacks['end']();
            })
    };
}

http.__setPayLoads = __setPayLoads;
http.request = jest.fn((options, callBack) => request(options, callBack));

module.exports = http;
