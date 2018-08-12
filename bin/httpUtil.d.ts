/// <reference types="node" />
import { URL } from 'url';
export interface IncomingMessage {
    headers: any;
    httpVersion: string;
    method: string;
    rawHeaders: string[];
    rawTrailers: string[];
    statusCode: number;
    statusMessage: string;
    url: string;
    setEncoding: (enc: string) => void;
    on: (event: string, callback: any) => void;
    caseless: any;
    _headers: any;
}
export interface HttpResponse {
    response: any;
    data: string;
    body?: any;
}
export declare class Digest {
    nc: number;
    username: string;
    password: string;
    constructor(username: string, password: string);
    updateNC(): string;
    generateCNONCE(qop: string): {
        cnonce: any;
        nc: string;
    };
    testDigestAuth(options: any, data: string, response: IncomingMessage): Promise<HttpResponse | string>;
}
export declare function request(url: URL, user?: Digest, referer?: string, postData?: any): Promise<HttpResponse | string>;
export declare function xml2json(xml: string): any;
