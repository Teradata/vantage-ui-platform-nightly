import { Provider } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IAuditLog {
    action?: string;
    component?: string;
    correlation_id?: string;
    details?: string;
    id?: number;
    logtime?: any;
    message?: string;
    result?: boolean;
    username?: string;
}
declare const VantageAuditService_base: new (...args: any[]) => any;
export declare class VantageAuditService extends VantageAuditService_base {
    query(params?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: IAuditLog[];
    }>;
    create(body: IAuditLog, response?: Observable<IAuditLog>): Observable<IAuditLog>;
    get(id: number | string, response?: Observable<IAuditLog>): Observable<IAuditLog>;
    health(response?: Observable<HttpResponse<any>>): Observable<boolean>;
}
export declare function VANTAGE_AUDIT_PROVIDER_FACTORY(parent: VantageAuditService): VantageAuditService;
export declare const VANTAGE_AUDIT_PROVIDER: Provider;
export {};
