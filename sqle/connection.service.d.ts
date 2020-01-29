import { Provider } from '@angular/core';
import { ISQLEConnection, VantageQueryService } from './query.service';
export declare class VantageConnectionService {
    private _queryService;
    constructor(_queryService: VantageQueryService);
    readonly current: ISQLEConnection;
    disconnect(): void;
    connect(connection: ISQLEConnection): Promise<void>;
    private store;
}
export declare function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent: VantageConnectionService, queryService: VantageQueryService): VantageConnectionService;
export declare const VANTAGE_CONNECTION_PROVIDER: Provider;
