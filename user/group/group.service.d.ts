import { Provider } from '@angular/core';
import { HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IGroup {
    name?: string;
    description?: string;
    id?: string;
    display_name?: string;
    users?: string[];
}
export declare class VantageGroupService {
    /**
     * get groups in paginated form via query string
     */
    query(queryParams?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: IGroup[];
    }>;
}
export declare function VANTAGE_GROUP_PROVIDER_FACTORY(parent: VantageGroupService): VantageGroupService;
export declare const VANTAGE_GROUP_PROVIDER: Provider;
