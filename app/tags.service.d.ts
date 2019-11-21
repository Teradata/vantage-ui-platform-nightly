import { Provider } from '@angular/core';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface ITag {
    tag_id?: string;
    tag?: string;
}
export declare class VantageTagsService {
    query(params?: HttpParams, response?: Observable<HttpResponse<any>>): Observable<{
        total: number;
        data: ITag[];
    }>;
}
export declare function VANTAGE_TAGS_PROVIDER_FACTORY(parent: VantageTagsService): VantageTagsService;
export declare const VANTAGE_TAGS_PROVIDER: Provider;
