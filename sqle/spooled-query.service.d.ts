import { Provider } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VantageConnectionService } from './connection.service';
import { VantageQueryService, IQueryPayload, IQueryResultSet } from './query.service';
declare enum SpooledQueryState {
    QUEUED = "QUEUED",
    PENDING = "PENDING",
    SUBMITTED = "SUBMITTED",
    RESPONDING = "RESPONDING",
    SPOOLING = "SPOOLING",
    RESULT_SET_READY = "RESULT_SET_READY"
}
export declare class VantageSpooledQueryService {
    private connectionService;
    private queryService;
    private translate;
    queryStatus: BehaviorSubject<SpooledQueryState>;
    queryStatus$: Observable<SpooledQueryState>;
    queryStack: string[];
    constructor(connectionService: VantageConnectionService, queryService: VantageQueryService, translate: TranslateService);
    cancelLastQuery(): void;
    getRunningInfo(): Observable<SpooledQueryState>;
    querySystem(payload: IQueryPayload): Observable<IQueryResultSet>;
    exponentialBackOffInterval(maxInterval: number, returnVal: any): Observable<number>;
    calcInterval(iteration: number, maxInterval: number): number;
    deleteSpooledQuery(queryId: string): void;
}
export declare function VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY(parent: VantageSpooledQueryService, connectionService: VantageConnectionService, queryService: VantageQueryService, translate: TranslateService): VantageSpooledQueryService;
export declare const VANTAGE_SPOOLED_QUERY_PROVIDER: Provider;
export {};
