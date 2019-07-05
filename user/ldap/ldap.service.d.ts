import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
export declare enum LDAPEncription {
    None = "NONE"
}
export interface ILDAPConfig {
    allowed_groups?: string[];
    base_dn?: string;
    config_id?: number;
    connectionUrl?: string;
    email_field?: string;
    encryption?: LDAPEncription;
    group_id_field?: string;
    groups_base_dn?: string;
    id_field?: string;
    member_field?: string;
    member_of_field?: string;
    name_field?: string;
    port?: number;
    search_pass?: string;
    search_user?: string;
    server?: string;
    url?: string;
}
export declare class VantageLDAPService {
    query(response?: Observable<ILDAPConfig[]>): Observable<ILDAPConfig[]>;
    create(body: ILDAPConfig, response?: Observable<ILDAPConfig>): Observable<ILDAPConfig>;
    update(id: string | number, body: ILDAPConfig, response?: Observable<ILDAPConfig>): Observable<ILDAPConfig>;
    delete(id: string | number, response?: Observable<void>): Observable<void>;
    test(body: ILDAPConfig, response?: Observable<boolean>): Observable<boolean>;
}
export declare function VANTAGE_LDAP_PROVIDER_FACTORY(parent: VantageLDAPService): VantageLDAPService;
export declare const VANTAGE_LDAP_PROVIDER: Provider;
