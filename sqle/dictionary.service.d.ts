import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { VantageQueryService, IQueryResultSet, ISQLEConnection } from './query.service';
export declare const sysDatabases: string[];
export interface IDictionarySystem {
    hostname?: string;
    password?: string;
    port?: number;
    system_id?: string;
    last_run?: string;
    interval_minutes?: number;
    enabled?: boolean;
    last_attempt?: string;
    in_collection?: boolean;
    username?: string;
}
export interface IDictionaryDatabase {
    parent_name?: string;
    size_bytes?: number;
    system_id?: string;
    name?: string;
    id?: string;
    type?: string;
}
export interface IDictionaryDatabaseObject {
    system_id?: string;
    database_id?: string;
    id?: string;
    name?: string;
    size_bytes?: number;
    type?: string;
    create_text?: string;
}
export interface IDictionaryTableColumn {
    system_id?: string;
    database_id?: string;
    table_id?: string;
    id?: string;
    name?: string;
}
/**
 * FunctionType
 * A - Aggregate
 * B - Aggregate and statistical
 * C - Contract function
 * D - External stored procedure
 * F - Scalar
 * H - User defined method
 * I - Internal type method
 * L - Table operator
 * R - Table Function
 * S - Statistical
 */
/**
 * TableKind for dbc.tablesvx;
 * A - Aggregate function
 * B - Combined aggregate and ordered analytical function
 * C - Table operator parser contract function
 * D - JAR
 * E - External Stored Procedure
 * F - Standard Function
 * G - Trigger
 * H - Instance or contructor method
 * I - Join Index
 * J - Journal
 * K - Foreign Server Object
 * L - User defined table operator
 * M - Macro
 * N - Hash index
 * O - Table with no primary index and no partitioning
 * P - Stored Procedure
 * Q - Queue table
 * R - Table function
 * S - Ordered Analytical function
 * T - table with a primary index or primary AMP index, partitioning or both. Or a partioned table with NoPI;
 * U - User defined type
 * V - View
 * X - Authorization
 * Y - GLOP set
 * Z - UIF - User Installed File
 * 1 - A DATASET schema object created by CREATE SCHEMA
 * 2 - Functon alias object
 */
/**
 * dbc.externalSPs
 * dbc.sessionInfovx
 */
export declare class VantageDictionaryService {
    private _queryService;
    constructor(_queryService: VantageQueryService);
    getViewHelp(connection: ISQLEConnection, database: string, view: string): Observable<any>;
    getTableHelp(connection: ISQLEConnection, database: string, table: string): Observable<any>;
    getDatabaseFunction(connection: ISQLEConnection, funcName: string): Observable<any>;
    getDatabaseFunctions(connection: ISQLEConnection): Observable<any>;
    getAnalyticalFunctions(connection: ISQLEConnection): Observable<any>;
    getAnalyticalFunction(connection: ISQLEConnection, analyticalFunction: string): Observable<any>;
    resultSetPredicate(resultSet: IQueryResultSet): any;
    getStoredProcedures(connection: ISQLEConnection): Observable<any>;
    getExternalStoredProcedures(connection: ISQLEConnection): Observable<any>;
    getMacros(connection: ISQLEConnection): Observable<any>;
    functionsvxPredicate(resultSet: IQueryResultSet): any;
    getTableOperators(connection: ISQLEConnection): Observable<any>;
    getTableFunctions(connection: ISQLEConnection): Observable<any>;
    getForeignServers(connection: ISQLEConnection): Observable<any[]>;
    getForeignSchemas(connection: ISQLEConnection, foreignServer: string): Observable<any[]>;
    getForeignTables(connection: ISQLEConnection, foreignServer: string, schema: string): Observable<any[]>;
    getForeignColumns(connection: ISQLEConnection, foreignServer: string, schema: string, table: string): Observable<any[]>;
    getDatabases(connection: ISQLEConnection): Observable<any[]>;
    getDatabaseObjects(connection: ISQLEConnection, databaseId: string): Observable<any[]>;
    getTableColumns(type: string, connection: ISQLEConnection, databaseId: string, tableId: string): Observable<any>;
    search(connection: ISQLEConnection, searchStr: string, options?: {
        databases: boolean;
        objects: boolean;
        columns: boolean;
    }): Observable<any[]>;
}
export declare function VANTAGE_DICTIONARY_PROVIDER_FACTORY(parent: VantageDictionaryService, queryService: VantageQueryService): VantageDictionaryService;
export declare const VANTAGE_DICTIONARY_PROVIDER: Provider;
