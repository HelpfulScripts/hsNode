import { Options }          from './Request';
import { IncomingMessage }  from './Request';

export abstract class Auth {
    username:string;
    password:string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

    abstract testAuth(options:Options, data:string, response:IncomingMessage): Options;
}
