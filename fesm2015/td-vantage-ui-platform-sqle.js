import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, switchMap, timeout, retry } from 'rxjs/operators';
import { __awaiter } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SystemType = {
    Teradata: 'TERADATA',
    // TODO: remove the following 2
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
/**
 * @record
 */
function ISystemAttributes() { }
if (false) {
    /** @type {?|undefined} */
    ISystemAttributes.prototype.attributes;
}
/**
 * @record
 */
function IAbstractSystem() { }
if (false) {
    /** @type {?|undefined} */
    IAbstractSystem.prototype.host;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.port;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.system_type;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.catalog;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.schema;
}
/**
 * @record
 */
function ISystem() { }
if (false) {
    /** @type {?|undefined} */
    ISystem.prototype.attributes;
    /** @type {?|undefined} */
    ISystem.prototype.data_center;
    /** @type {?|undefined} */
    ISystem.prototype.environment;
    /** @type {?|undefined} */
    ISystem.prototype.id;
    /** @type {?|undefined} */
    ISystem.prototype.nickname;
    /** @type {?|undefined} */
    ISystem.prototype.platform_id;
    /** @type {?|undefined} */
    ISystem.prototype.system_attributes;
    /** @type {?|undefined} */
    ISystem.prototype.version;
}
/**
 * @record
 */
function IQueryPayload() { }
if (false) {
    /** @type {?} */
    IQueryPayload.prototype.query;
    /** @type {?|undefined} */
    IQueryPayload.prototype.session;
    /** @type {?|undefined} */
    IQueryPayload.prototype.logMech;
    /** @type {?|undefined} */
    IQueryPayload.prototype.rowOffset;
    /** @type {?|undefined} */
    IQueryPayload.prototype.rowLimit;
    /** @type {?|undefined} */
    IQueryPayload.prototype.format;
    /** @type {?|undefined} */
    IQueryPayload.prototype.includeColumns;
    /** @type {?|undefined} */
    IQueryPayload.prototype.includeColumnsTypes;
    /** @type {?|undefined} */
    IQueryPayload.prototype.spooledResultSet;
    /** @type {?|undefined} */
    IQueryPayload.prototype.clientId;
}
/**
 * @record
 */
function IQueryResultSet() { }
if (false) {
    /** @type {?} */
    IQueryResultSet.prototype.queueDuration;
    /** @type {?} */
    IQueryResultSet.prototype.queryDuration;
    /** @type {?} */
    IQueryResultSet.prototype.results;
}
/**
 * @record
 */
function IQueryResultSetResult() { }
if (false) {
    /** @type {?} */
    IQueryResultSetResult.prototype.data;
    /** @type {?} */
    IQueryResultSetResult.prototype.resultSet;
    /** @type {?} */
    IQueryResultSetResult.prototype.rowCount;
    /** @type {?} */
    IQueryResultSetResult.prototype.rowLimitExceeded;
    /** @type {?|undefined} */
    IQueryResultSetResult.prototype.columns;
}
/**
 * @record
 */
function IQueryInfo() { }
if (false) {
    /** @type {?|undefined} */
    IQueryInfo.prototype.success;
    /** @type {?|undefined} */
    IQueryInfo.prototype.logTime;
    /** @type {?|undefined} */
    IQueryInfo.prototype.error;
    /** @type {?|undefined} */
    IQueryInfo.prototype.resultSet;
}
/**
 * @record
 */
function ISQLEConnection() { }
if (false) {
    /** @type {?} */
    ISQLEConnection.prototype.system;
    /** @type {?|undefined} */
    ISQLEConnection.prototype.creds;
}
class VantageQueryService {
    /**
     * @param {?} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * @param {?} connection
     * @param {?} payload
     * @return {?}
     */
    querySystem(connection, payload) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            payload.logMech = connection.system.system_attributes.attributes.log_mech || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        payload.clientId = 'VANTAGE.EDITOR';
        /** @type {?} */
        const request = this._httpClient.post('/api/query/tdrest/systems/' + connection.system.nickname + '/queries', payload, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} tableName
     * @return {?}
     */
    getTableInfo(connection, databaseName, tableName) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/tables/${tableName}`, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} viewName
     * @return {?}
     */
    getViewInfo(connection, databaseName, viewName) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/views/${viewName}`, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} requestId
     * @return {?}
     */
    getQuery(connection, requestId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + requestId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    getQueries(connection, sessionId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries?session=' + sessionId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    getQueryResult(connection, queryId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId + '/results', { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    deleteQuery(connection, queryId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    createSession(connection) {
        /** @type {?} */
        const payload = {
            autoCommit: 'true',
            transactionMode: 'TERA',
            charSet: 'UTF8',
        };
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            payload.logMech = connection.system.system_attributes.attributes.log_mech || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        /** @type {?} */
        const request = this._httpClient.post('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions', payload, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    deleteSession(connection, sessionId) {
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        const request = this._httpClient.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions/' + sessionId, { headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            throw error.error;
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet;
        })));
    }
}
VantageQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageQueryService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageQueryService.prototype._httpClient;
}
/**
 * @param {?} parent
 * @param {?} httpClient
 * @return {?}
 */
function VANTAGE_QUERY_PROVIDER_FACTORY(parent, httpClient) {
    return parent || new VantageQueryService(httpClient);
}
/** @type {?} */
const VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], HttpClient],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sysDatabases = [
    'DBC',
    'dbcmngr',
    'SQLJ',
    'SystemFe',
    'SysAdmin',
    'SYSBAR',
    'SYSJDBC',
    'SYSLIB',
    'SYSUDTLIB',
    'TDMaps',
    'TD_SERVER_DB',
    'TD_SYSFNLIB',
    'TD_SYSXML',
    'Sys_Calendar',
];
/**
 * @record
 */
function IDictionarySystem() { }
if (false) {
    /** @type {?|undefined} */
    IDictionarySystem.prototype.hostname;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.password;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.port;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.system_id;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.last_run;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.interval_minutes;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.enabled;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.last_attempt;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.in_collection;
    /** @type {?|undefined} */
    IDictionarySystem.prototype.username;
}
/**
 * @record
 */
function IDictionaryDatabase() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.parent_name;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.size_bytes;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.name;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.id;
    /** @type {?|undefined} */
    IDictionaryDatabase.prototype.type;
}
/**
 * @record
 */
function IDictionaryDatabaseObject() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.database_id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.id;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.name;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.size_bytes;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.type;
    /** @type {?|undefined} */
    IDictionaryDatabaseObject.prototype.create_text;
}
/**
 * @record
 */
function IDictionaryTableColumn() { }
if (false) {
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.system_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.database_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.table_id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.id;
    /** @type {?|undefined} */
    IDictionaryTableColumn.prototype.name;
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
class VantageDictionaryService {
    /**
     * @param {?} _queryService
     */
    constructor(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} view
     * @return {?}
     */
    getViewHelp(connection, database, view) {
        /** @type {?} */
        const queryStr = `
      LOCK ROW FOR ACCESS
      SELECT CAST(COUNT(*) AS BIGINT) as cnt
      FROM ${database}.${view};
      SHOW VIEW ${database}.${view};
    `;
        return this._queryService.getViewInfo(connection, database, view).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return {
                    comment: column.remarks,
                    type: 'column',
                    columnType: column.type,
                    name: column.name,
                    database: resultSet.database,
                    table: resultSet.name,
                };
            }));
        })), switchMap((/**
         * @param {?} viewInfo
         * @return {?}
         */
        (viewInfo) => {
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                /** @type {?} */
                let ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                let count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    count = row.cnt;
                }));
                /** @type {?} */
                const columns = viewInfo.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database,
                    view,
                    columns,
                    count,
                    ddlStatement,
                };
            })));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} table
     * @return {?}
     */
    getTableHelp(connection, database, table) {
        /** @type {?} */
        const queryStr = `
      LOCK ROW FOR ACCESS
      SELECT CAST(COUNT(*) AS BIGINT) as cnt
      FROM ${database}.${table};
      SHOW TABLE ${database}.${table};
    `;
        return this._queryService.getTableInfo(connection, database, table).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                return {
                    comment: column.remarks,
                    type: 'column',
                    columnType: column.type,
                    name: column.name,
                    database: resultSet.database,
                    table: resultSet.name,
                };
            }));
        })), switchMap((/**
         * @param {?} info
         * @return {?}
         */
        (info) => {
            return this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                /** @type {?} */
                let ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                let count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    count = row.cnt;
                }));
                /** @type {?} */
                const columns = info.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database,
                    table,
                    columns,
                    count,
                    ddlStatement,
                };
            })));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} funcName
     * @return {?}
     */
    getDatabaseFunction(connection, funcName) {
        /** @type {?} */
        const queryStr = `
      HELP 'SQL ${funcName}';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['On-Line Help'];
            }));
            return stringArray.join(' ');
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getDatabaseFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      HELP 'SQL';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['On-Line Help'];
            }));
            /** @type {?} */
            let sqlHelp = stringArray.join(' ');
            /** @type {?} */
            const index = sqlHelp.indexOf('FUNCTIONS') + 12;
            sqlHelp = sqlHelp.substr(index, sqlHelp.length);
            return sqlHelp
                .split(' ')
                .filter((/**
             * @param {?} func
             * @return {?}
             */
            (func) => {
                return func;
            }))
                .map((/**
             * @param {?} func
             * @return {?}
             */
            (func) => {
                return {
                    name: func,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getAnalyticalFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN SCHEMA "public"@coprocessor;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.objectname,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} analyticalFunction
     * @return {?}
     */
    getAnalyticalFunction(connection, analyticalFunction) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN FUNCTION "public"."${analyticalFunction}"@coprocessor;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            /** @type {?} */
            let functionName = '';
            /** @type {?} */
            let shortDescription = '';
            /** @type {?} */
            let longDescription = '';
            /** @type {?} */
            let usageSyntax = '';
            /** @type {?} */
            let inputColumns = '';
            /** @type {?} */
            let outputColumns = '';
            /** @type {?} */
            const functionOwner = '';
            /** @type {?} */
            const creationTime = '';
            /** @type {?} */
            const functionVersion = '';
            /** @type {?} */
            const interfacesImplemented = '';
            /** @type {?} */
            const stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return row['Function Help'];
            }));
            for (let index = 0; index < stringArray.length; index++) {
                /** @type {?} */
                const value = stringArray[index];
                if (value.indexOf('Function Name:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        functionName += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Short Description:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        shortDescription += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Long Description:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        longDescription += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Usage Syntax:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        usageSyntax += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Input Columns:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        inputColumns += stringArray[index] + '\n';
                    }
                }
                else if (value.indexOf('Output Columns:') > -1) {
                    for (index++; index < stringArray.indexOf(''); index++) {
                        outputColumns += stringArray[index] + '\n';
                    }
                }
                else {
                    // Function Owner:
                    // Creation Time:
                    // Function Version:
                    // Interfaces Implemented:
                    if (stringArray.indexOf('') > -1) {
                        index = stringArray.indexOf('');
                        stringArray[index] = undefined;
                    }
                }
            }
            return {
                functionName,
                shortDescription,
                longDescription,
                usageSyntax,
                inputColumns,
                outputColumns,
            };
        })));
    }
    /**
     * @param {?} resultSet
     * @return {?}
     */
    resultSetPredicate(resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            return {
                name: row.TableName,
                requestText: row.RequestText,
                comment: row.CommentString,
                kind: row.TableKind,
            };
        }));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getStoredProcedures(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'P'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getExternalStoredProcedures(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'E'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getMacros(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx
      WHERE TableKind = 'M'
      ORDER BY TableName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    }
    /**
     * @param {?} resultSet
     * @return {?}
     */
    functionsvxPredicate(resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        (row) => {
            return {
                database: row.DatabaseName,
                name: row.SpecificName,
                paramNumber: row.NumParameters,
                paramDataTypes: row.ParameterDataTypes,
                requestText: row.RequestText,
                commentString: row.CommentString,
                kind: row.TableKind,
            };
        }));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getTableOperators(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,
      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind
      FROM dbc.functionsvx as func
      INNER JOIN dbc.tablesvx as tbl
      ON tbl.TableName = func.SpecificName
      AND tbl.DataBaseName = func.DatabaseName
      WHERE FunctionType = 'L'
      ORDER BY func.FunctionName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getTableFunctions(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,
      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind
      FROM dbc.functionsvx as func
      INNER JOIN dbc.tablesvx as tbl
      ON tbl.TableName = func.SpecificName
      AND tbl.DataBaseName = func.DatabaseName
      WHERE FunctionType = 'R'
      ORDER BY func.FunctionName ASC;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getForeignServers(connection) {
        /** @type {?} */
        const queryStr = `
      SELECT TableName, TableKind FROM DBC.TABLESVX
      WHERE DATABASENAME = 'TD_SERVER_DB' AND
      TABLEKIND = 'K' AND
      TableName <> 'coprocesor';
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.TableName,
                    kind: row.TableKind,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @return {?}
     */
    getForeignSchemas(connection, foreignServer) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN SERVER ${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Schema,
                    kind: 'NONE',
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @return {?}
     */
    getForeignTables(connection, foreignServer, schema) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN DATABASE "${schema}"@${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Table,
                    kind: 'NONE',
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @param {?} table
     * @return {?}
     */
    getForeignColumns(connection, foreignServer, schema, table) {
        /** @type {?} */
        const queryStr = `
      HELP FOREIGN TABLE "${schema}"."${table}"@${foreignServer};
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.Column,
                    type: row.Type,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    getDatabases(connection) {
        /** @type {?} */
        const queryStr = 'SELECT databasename, PermSpace, SpoolSpace, TempSpace, CommentString, DBKind FROM dbc.databasesVX ORDER BY databasename;';
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                return {
                    name: row.DatabaseName || row.schemaname,
                    type: row.DBKind === 'U' ? 'user' : 'database',
                    permSpace: row.PermSpace,
                    spoolSpace: row.SpoolSpace,
                    tempSpace: row.TempSpace,
                    comment: row.CommentString,
                };
            }));
        })));
    }
    /**
     * @param {?} connection
     * @param {?} databaseId
     * @return {?}
     */
    getDatabaseObjects(connection, databaseId) {
        /** @type {?} */
        const queryStr = `SELECT DataBaseName, TableName, TableKind, CommentString FROM dbc.tablesvx
       WHERE TableKind in ('T', 'O', 'V') AND DataBaseName = '${databaseId}' ORDER BY TableName ASC;`;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                /** @type {?} */
                const type = row.TableKind || row.tablekind;
                return {
                    kind: row.TableKind || row.tablekind,
                    type: type === 'V' ? 'view' : 'table',
                    name: row.TableName || row.tablename,
                    database: row.DataBaseName || row.databasename,
                    comment: row.CommentString,
                };
            }));
        })));
    }
    /**
     * @param {?} type
     * @param {?} connection
     * @param {?} databaseId
     * @param {?} tableId
     * @return {?}
     */
    getTableColumns(type, connection, databaseId, tableId) {
        if (type === 'table') {
            return this._queryService.getTableInfo(connection, databaseId, tableId).pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })));
        }
        else if (type === 'view') {
            return this._queryService.getViewInfo(connection, databaseId, tableId).pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            (resultSet) => {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    return {
                        comment: column.remarks,
                        type: 'column',
                        columnType: column.type,
                        name: column.name,
                        database: resultSet.database,
                        table: resultSet.name,
                    };
                }));
            })));
        }
    }
    /**
     * @param {?} connection
     * @param {?} searchStr
     * @param {?=} options
     * @return {?}
     */
    search(connection, searchStr, options = {
        databases: true,
        objects: true,
        columns: true,
    }) {
        /** @type {?} */
        const queries = [];
        if (options.databases) {
            /** @type {?} */
            const dbQuery = `
        SELECT
            DatabaseName as objectName,
            'database' as objectType,
            DBKind as kind,
            CommentString
        FROM dbc.databasesvx
        WHERE DatabaseName LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(dbQuery);
        }
        if (options.objects) {
            /** @type {?} */
            const objectQuery = `
        SELECT
            DataBaseName || '~|~' || TableName as objectName,
            'object' as objectType,
            TableKind as kind,
            CommentString
        FROM dbc.tablesvx
        WHERE TableKind in ('T', 'O', 'V')
        AND TableName LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(objectQuery);
        }
        if (options.objects) {
            /** @type {?} */
            const columnQuery = `
        SELECT
            DataBaseName || '~|~' || TableName || '~|~' || ColumnName as objectName,
            'column' as objectType,
            ColumnType as kind,
            CommentString
        FROM dbc.columnsVX
        WHERE columnname LIKE '%${searchStr}%'
        AND DataBaseName NOT IN ('${sysDatabases.join("', '")}')
      `;
            queries.push(columnQuery);
        }
        /** @type {?} */
        const unionJoin = queries.join('UNION');
        /** @type {?} */
        const queryStr = `
      WITH quick_search AS (
          ${unionJoin}
      )
      SELECT * FROM quick_search
      ORDER BY 1
      SAMPLE 100;
    `;
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        (resultSet) => {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            (row) => {
                /** @type {?} */
                let kind = row.kind;
                // map to proper type/kind
                if (row.objectType === 'column') {
                    kind = 'column';
                }
                else if (row.objectType === 'database') {
                    kind = kind === 'D' ? 'database' : 'user';
                }
                else {
                    kind = kind === 'V' ? 'view' : 'table';
                }
                /** @type {?} */
                const newParent = [];
                // split name and parents..
                /** @type {?} */
                const nameSplit = row.objectName.split('~|~');
                for (let index = 0; index < nameSplit.length - 1; index++) {
                    newParent.push('"' + nameSplit[index] + '"');
                }
                return {
                    parent: newParent.join('.'),
                    name: nameSplit[nameSplit.length - 1],
                    kind,
                    type: row.objectType,
                    comment: row.CommentString,
                };
            }));
        })));
    }
}
VantageDictionaryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageDictionaryService.ctorParameters = () => [
    { type: VantageQueryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageDictionaryService.prototype._queryService;
}
/**
 * @param {?} parent
 * @param {?} queryService
 * @return {?}
 */
function VANTAGE_DICTIONARY_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageDictionaryService(queryService);
}
/** @type {?} */
const VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CONNECTION_SESSION_KEY = 'vantage.editor.connection';
class VantageConnectionService {
    /**
     * @param {?} _queryService
     */
    constructor(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @return {?}
     */
    get current() {
        return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
    }
    /**
     * @return {?}
     */
    disconnect() {
        sessionStorage.removeItem(CONNECTION_SESSION_KEY);
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    connect(connection) {
        return __awaiter(this, void 0, void 0, function* () {
            // clear connection before starting a new one
            this.disconnect();
            // test connection with SELECT 1
            yield this._queryService
                .querySystem(connection, { query: 'SELECT 1;' })
                .pipe(timeout(7000), retry(1))
                .toPromise();
            // if successful, save
            this.store(connection);
        });
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    store({ system, creds }) {
        sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify({ system, creds }));
    }
}
VantageConnectionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageConnectionService.ctorParameters = () => [
    { type: VantageQueryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._queryService;
}
/**
 * @param {?} parent
 * @param {?} queryService
 * @return {?}
 */
function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageConnectionService(queryService);
}
/** @type {?} */
const VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageSQLEModule {
}
VantageSQLEModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_CONNECTION_PROVIDER, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_QUERY_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VANTAGE_CONNECTION_PROVIDER, VANTAGE_CONNECTION_PROVIDER_FACTORY, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_DICTIONARY_PROVIDER_FACTORY, VANTAGE_QUERY_PROVIDER, VANTAGE_QUERY_PROVIDER_FACTORY, VantageConnectionService, VantageDictionaryService, VantageQueryService, VantageSQLEModule, sysDatabases };
//# sourceMappingURL=td-vantage-ui-platform-sqle.js.map
