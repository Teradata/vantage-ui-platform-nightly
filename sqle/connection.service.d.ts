import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { VantageQueryService, ISQLEConnection } from './query.service';
export declare function current(): ISQLEConnection;
export declare class VantageConnectionService {
    private _queryService;
    constructor(_queryService: VantageQueryService);
    get current(): ISQLEConnection;
    disconnect(): void;
    connect(connection: ISQLEConnection): Observable<ISQLEConnection>;
    private store;
}
export declare function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent: VantageConnectionService, queryService: VantageQueryService): VantageConnectionService;
export declare const VANTAGE_CONNECTION_PROVIDER: Provider;
