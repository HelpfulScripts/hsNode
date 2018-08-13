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
    payloads.forEach(p => payLoad[p.path] = { code:p.code, content: p.content});
    // console.log(`defined payloads:\n${payloads.map(p => JSON.stringify(p)).join('\n')}`);
}

function request(options, callBack) {
// console.log(`http-mock: request`);
// console.log(options);
    let enc = 'utf8';
    const eventCallbacks = {};
    const file = options.pathname;
    const extIndex = file.lastIndexOf('.');
    const fileExt = (extIndex>0)? file.substr(extIndex) : '';
    const cType = contentTypes[fileExt];
    if (!cType) { console.log(`http mock encountered unknown filetype '${fileExt}' for path '${options.path}'`); }
    const pl = payLoad[options.path];
    if (!pl) { console.log(`no payload entry found for '${options.path}'`); }
    const resultProcessor = {
        headers: {
            'content-type': cType || 'text/html'
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
// console.log(`http-mock: 400`);
// console.log(options.headers);        
        if (options.headers.Authorization) {
            resultProcessor.Authorization = options.headers.Authorization;
            resultProcessor.status = 200;
        } else {
            resultProcessor.headers['www-authenticate'] = 'Digest realm="IPCamera Login", nonce="cc6e4ead42917cb50548b4f94b4752fd", qop="auth"'; 
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
                // console.log(`recalling '${options.path}'`); 
                eventCallbacks['data'](pl? pl.content : undefined);
                eventCallbacks['end']();
            })
    };
}

http.__setPayLoads = __setPayLoads;
http.request = request;

module.exports = http;
