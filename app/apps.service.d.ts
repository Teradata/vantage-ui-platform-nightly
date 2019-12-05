import { Provider } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare enum AppType {
    SQL = "sql",
    BTEQ = "bteq",
    JAVA = "java",
    CUSTOM = "custom"
}
export interface IApp {
    app_id?: string;
    app_type?: AppType;
    app_code?: string;
    collaborators?: IAppPermissions;
    color?: string;
    config?: any;
    cpus?: number;
    description?: string;
    dockerImageName?: string;
    icon?: string;
    install_time?: string;
    installed_by?: string;
    last_updated_by?: string;
    last_updated_time?: string;
    memory?: number;
    name?: string;
    owners?: IAppPermissions;
    public?: boolean;
    results_config?: any;
    versions?: any;
    last_version_status?: string;
    database?: string;
    system_name?: string;
    username?: string;
    password?: string;
    param_name?: string;
    ephemeral?: boolean;
    can_execute?: boolean;
    web_root?: string;
    access_url?: string;
    tag_names?: any[];
    exposedPorts?: any[];
    system_id?: string;
    containerPort?: number;
    favorite?: boolean;
}
export interface IAppConfiguration {
    id: string;
    name?: string;
    type?: 'text' | 'number' | 'boolean' | 'date';
    min?: number | Date;
    max?: number | Date;
    required?: boolean;
    default?: any;
}
export interface IAppPermissions {
    users?: string[];
    groups?: string[];
}
export declare class VantageAppsService {
    query(params?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: IApp[];
    }>;
    get(id: string, response?: Observable<IApp>): Observable<IApp>;
    create(body: IApp, response?: Observable<IApp>): Observable<IApp>;
    update(id: string, body: IApp, response?: Observable<IApp>): Observable<IApp>;
    delete(id: string, response?: Observable<IApp>): Observable<IApp>;
    uploadFile(id: string, formData: FormData, response?: Observable<HttpResponse<any>>): Observable<boolean>;
}
export declare function VANTAGE_APPS_PROVIDER_FACTORY(parent: VantageAppsService): VantageAppsService;
export declare const VANTAGE_APPS_PROVIDER: Provider;
