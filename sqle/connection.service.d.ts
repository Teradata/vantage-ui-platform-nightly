import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { VantageQueryService, ISQLEConnection } from './query.service';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
export interface IConnectOptions {
    timeout: number;
    attempts: number;
}
export declare function generateConnectionKey(connection: ISQLEConnection): string;
export declare class VantageConnectionService {
    private _queryService;
    private _sessionService;
    private readonly _currentConnectionSubject;
    private readonly _connectionsSubject;
    currentConnection$: Observable<ISQLEConnection>;
    connections$: Observable<ISQLEConnection[]>;
    constructor(_queryService: VantageQueryService, _sessionService: VantageSessionService);
    private set _currentConnection(value);
    private get _currentConnection();
    get currentConnection(): ISQLEConnection;
    private set _connections(value);
    private get _connections();
    get connections(): ISQLEConnection[];
    addAndSetAsCurrent(connection: ISQLEConnection, options?: IConnectOptions): Observable<ISQLEConnection>;
    add(connection: ISQLEConnection, options?: IConnectOptions): Observable<ISQLEConnection>;
    setAsCurrent(connection: ISQLEConnection, options?: IConnectOptions): Observable<ISQLEConnection>;
    remove(connection: ISQLEConnection): ISQLEConnection;
    unsetAsCurrent(): void;
    removeAll(): void;
    exists(connection: ISQLEConnection): boolean;
    isCurrent(connection: ISQLEConnection): boolean;
    generateKey(connection: ISQLEConnection): string;
    private _pingAndSave;
    private get _currentUsername();
    private _areEqual;
    private _getConnectionIndex;
    private _getConnectionState;
    private _setConnectionState;
}
export declare function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent: VantageConnectionService, queryService: VantageQueryService, sessionService: VantageSessionService): VantageConnectionService;
export declare const VANTAGE_CONNECTION_PROVIDER: Provider;
