import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ISystem } from '@td-vantage/ui-platform/system';
import { TdHttpService } from '@covalent/http';
export interface IQueryPayload {
    query: string;
    session?: string;
    logMech?: string;
    rowOffset?: number;
    rowLimit?: number;
    format?: string;
    includeColumns?: boolean;
    includeColumnsTypes?: boolean;
    spooledResultSet?: boolean;
    clientId?: string;
}
export interface IQueryResultSet {
    queueDuration: number;
    queryDuration: number;
    results: IQueryResultSetResult[];
}
export interface IQueryResultSetResult {
    data: {
        [name: string]: string;
    }[];
    resultSet: boolean;
    rowCount: number;
    rowLimitExceeded: boolean;
    columns?: {
        [name: string]: string;
    }[];
}
export interface IQueryInfo {
    success?: boolean;
    logTime?: string;
    error?: any;
    resultSet?: IQueryResultSet;
}
export interface ISQLEConnection {
    system: ISystem;
    creds?: string;
}
export declare class VantageQueryService {
    private _http;
    constructor(_http: TdHttpService);
    querySystem(connection: ISQLEConnection, payload: IQueryPayload): Observable<IQueryResultSet>;
    getTableInfo(connection: ISQLEConnection, databaseName: string, tableName: string): Observable<any>;
    getViewInfo(connection: ISQLEConnection, databaseName: string, viewName: string): Observable<any>;
    getQuery(connection: ISQLEConnection, requestId: string): Observable<any>;
    getQueries(connection: ISQLEConnection, sessionId: string): Observable<IQueryResultSet>;
    getQueryResult(connection: ISQLEConnection, queryId: string): Observable<IQueryResultSet>;
    deleteQuery(connection: ISQLEConnection, queryId: string): Observable<IQueryResultSet>;
    createSession(connection: ISQLEConnection): Observable<any>;
    deleteSession(connection: ISQLEConnection, sessionId: string): Observable<any>;
}
export declare function VANTAGE_QUERY_PROVIDER_FACTORY(parent: VantageQueryService, tdHttpService: TdHttpService): VantageQueryService;
export declare const VANTAGE_QUERY_PROVIDER: Provider;
