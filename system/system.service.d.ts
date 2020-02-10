import { Provider } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare enum SystemType {
    Teradata = "TERADATA",
    Aster = "ASTER",
    Presto = "PRESTO"
}
export declare const VANTAGE_SYSTEMS_TYPES: SystemType[];
export interface ISystemAttributes {
    attributes?: any;
}
export interface IAbstractSystem {
    host?: string;
    port?: number;
    system_type?: SystemType;
    catalog?: string;
    schema?: string;
}
export interface ISystem extends IAbstractSystem {
    attributes?: string;
    data_center?: string;
    environment?: string;
    id?: string;
    nickname?: string;
    platform_id?: number;
    system_attributes?: ISystemAttributes;
    version?: string;
}
export interface ITestSystem extends IAbstractSystem {
    account?: string;
    default_char_set?: string;
    default_database?: string;
    log_mech?: string;
    password?: string;
    username?: string;
}
declare const VantageSystemService_base: new (...args: any[]) => any;
export declare class VantageSystemService extends VantageSystemService_base {
    health(response?: Observable<HttpResponse<any>>): Observable<boolean>;
    query(params?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: ISystem[];
    }>;
    get(id: string | number, response?: Observable<ISystem>): Observable<ISystem>;
    create(system: ISystem, response?: Observable<ISystem>): Observable<ISystem>;
    update(id: string, system: ISystem, response?: Observable<ISystem>): Observable<ISystem>;
    delete(id: string, response?: Observable<void>): Observable<void>;
    test(system: ITestSystem, response?: Observable<HttpResponse<any>>): Observable<boolean>;
}
export declare function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent: VantageSystemService): VantageSystemService;
export declare const VANTAGE_SYSTEM_PROVIDER: Provider;
export {};
