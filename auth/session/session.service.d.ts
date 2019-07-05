import { Provider } from '@angular/core';
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
export interface ISessionUser {
    user?: string;
    valid?: boolean;
    admin?: boolean;
    groups?: string[];
    expires_at?: string;
}
export declare class VantageSessionService {
    private _user;
    readonly user: IUser;
    getInfo(): Observable<IUser>;
    logout(): Promise<void>;
    /**
     * gets the current sso logged in users information
     */
    private _get;
    private _logout;
    /**
     * gets a single users information
     */
    private _getUser;
}
export declare function VANTAGE_SESSION_PROVIDER_FACTORY(parent: VantageSessionService): VantageSessionService;
export declare const VANTAGE_SESSION_PROVIDER: Provider;
