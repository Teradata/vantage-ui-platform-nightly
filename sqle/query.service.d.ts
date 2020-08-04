import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ISystem } from '@td-vantage/ui-platform/system';
import { TdHttpService } from '@covalent/http';
export declare enum QueryResultColumnTypes {
    'ARRAY' = "ARRAY",
    'VARRAY' = "VARRAY",
    'BLOB' = "BLOB",
    'BYTE' = "BYTE",
    'VARBYTE' = "VARBYTE",
    'BIGINT' = "BIGINT",
    'BYTEINT' = "BYTEINT",
    'DECIMAL' = "DECIMAL",
    'DOUBLE PRECISION' = "DOUBLE PRECISION",
    'FLOAT' = "FLOAT",
    'INTEGER' = "INTEGER",
    'NUMBER' = "NUMBER",
    'NUMERIC' = "NUMERIC",
    'REAL' = "REAL",
    'SMALLINT' = "SMALLINT",
    'DATE' = "DATE",
    'TIME' = "TIME",
    'TIMESTAMP' = "TIMESTAMP",
    'TIME WITH TIME ZONE' = "TIME WITH TIME ZONE",
    'TIMESTAMP WITH TIME ZONE' = "TIMESTAMP WITH TIME ZONE",
    'INTERVAL' = "INTERVAL",
    'INTERVAL DAY' = "INTERVAL DAY",
    'INTERVAL DAY TO HOUR' = "INTERVAL DAY TO HOUR",
    'INTERVAL DAY TO MINUTE' = "INTERVAL DAY TO MINUTE",
    'INTERVAL DAY TO SECOND' = "INTERVAL DAY TO SECOND",
    'INTERVAL HOUR' = "INTERVAL HOUR",
    'INTERVAL HOUR TO MINUTE' = "INTERVAL HOUR TO MINUTE",
    'INTERVAL HOUR TO SECOND' = "INTERVAL HOUR TO SECOND",
    'INTERVAL MINUTE' = "INTERVAL MINUTE",
    'INTERVAL MINUTE TO SECOND' = "INTERVAL MINUTE TO SECOND",
    'INTERVAL MONTH' = "INTERVAL MONTH",
    'INTERVAL SECOND' = "INTERVAL SECOND",
    'INTERVAL YEAR' = "INTERVAL YEAR",
    'INTERVAL YEAR TO MONTH' = "INTERVAL YEAR TO MONTH",
    'CHAR' = "CHAR",
    'CHARACTER' = "CHARACTER",
    'CHARACTER SET GRAPHIC' = "CHARACTER SET GRAPHIC",
    'CLOB' = "CLOB",
    'CHAR VARYING' = "CHAR VARYING",
    'LONG VARCHAR' = "LONG VARCHAR",
    'VARCHAR' = "VARCHAR",
    'PERIOD' = "PERIOD",
    'udt_name' = "udt_name",
    'TD_ANYTYPE' = "TD_ANYTYPE",
    'VARIANT_TYPE' = "VARIANT_TYPE"
}
export interface IQueryBands {
    ApplicationName: string;
    Version: string;
    ClientUser?: string;
    [name: string]: string;
}
export interface IQueryPayload {
    query: string;
    session?: string;
    logMech?: string;
    rowOffset?: number;
    rowLimit?: number;
    format?: string;
    includeColumns?: boolean;
    includeColumnsTypes?: boolean;
    outputNumbersAsStrings?: boolean;
    spooledResultSet?: boolean;
    clientId?: string;
    queryBands?: IQueryBands;
}
export interface IQueryResultSet {
    queueDuration: number;
    queryDuration: number;
    results: IQueryResultSetResult[];
}
export interface IQueryResultData {
    [name: string]: string | number;
}
export interface IQueryResultSetResult {
    data: IQueryResultData[];
    resultSet: boolean;
    rowCount: number;
    rowLimitExceeded: boolean;
    columns?: IQueryResultSetColumn[];
}
export interface IQueryResultSetColumn {
    name: string;
    type: keyof typeof QueryResultColumnTypes;
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
export interface ISessionPayload {
    autoCommit: string;
    transactionMode: string;
    charSet: string;
    defaultDatabase?: string;
    logMech?: string;
    queryBands?: IQueryBands;
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
    createSession(connection: ISQLEConnection, payload?: ISessionPayload): Observable<any>;
    deleteSession(connection: ISQLEConnection, sessionId: string): Observable<any>;
}
export declare function VANTAGE_QUERY_PROVIDER_FACTORY(parent: VantageQueryService, tdHttpService: TdHttpService): VantageQueryService;
export declare const VANTAGE_QUERY_PROVIDER: Provider;
