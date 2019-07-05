import { Provider } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface ISMTPConfig {
    server?: string;
    port?: number;
    reply_address?: string;
    smtp_username?: string;
    smtp_password?: string;
    use_ssl?: boolean;
    anon_logon?: boolean;
    server_timeout?: number;
}
export declare class VantageSMTPService {
    create(body: ISMTPConfig, response?: Observable<ISMTPConfig>): Observable<ISMTPConfig>;
    query(response?: Observable<ISMTPConfig>): Observable<ISMTPConfig>;
    delete(response?: Observable<void>): Observable<void>;
    health(response?: Observable<HttpResponse<any>>): Observable<boolean>;
}
export declare function VANTAGE_SMTP_PROVIDER_FACTORY(parent: VantageSMTPService): VantageSMTPService;
export declare const VANTAGE_SMTP_PROVIDER: Provider;
