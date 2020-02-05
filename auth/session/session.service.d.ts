import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@td-vantage/ui-platform/user';
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
    logout(): void;
    /**
     * gets the current sso logged in users information
     */
    private _get;
    /**
     * gets a single users information
     */
    private _getUser;
}
export declare function VANTAGE_SESSION_PROVIDER_FACTORY(parent: VantageSessionService): VantageSessionService;
export declare const VANTAGE_SESSION_PROVIDER: Provider;
