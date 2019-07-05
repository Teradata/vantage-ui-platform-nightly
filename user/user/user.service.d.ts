import { Provider } from '@angular/core';
import { HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IUser {
    username?: string;
    password?: string;
    email?: string;
    local?: boolean;
    admin?: boolean;
    groups?: string[];
    display_name?: string;
    access_token?: string;
    expires_at?: number;
}
export declare class VantageUserService {
    /**
     * get all users
     */
    query(queryParams?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: IUser[];
    }>;
    /**
     * gets a single users information
     */
    get(id: string, response?: Observable<HttpResponse<any>>): Observable<IUser>;
}
export declare function VANTAGE_USER_PROVIDER_FACTORY(parent: VantageUserService): VantageUserService;
export declare const VANTAGE_USER_PROVIDER: Provider;
