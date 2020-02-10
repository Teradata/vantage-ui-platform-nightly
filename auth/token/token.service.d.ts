import { Provider } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IToken {
    access_token?: string;
    refresh_token?: string;
    expires_at?: string;
    token_type?: string;
    expires_in?: number;
    token_in?: string;
}
declare const VantageTokenService_base: new (...args: any[]) => any;
export declare class VantageTokenService extends VantageTokenService_base {
    create(user: {
        username: string;
        password: string;
    }, response?: Observable<HttpResponse<IToken>>): Observable<any>;
}
export declare function VANTAGE_TOKEN_PROVIDER_FACTORY(parent: VantageTokenService): VantageTokenService;
export declare const VANTAGE_TOKEN_PROVIDER: Provider;
export {};
