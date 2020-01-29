/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
export const sysDatabases = [
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
export function IDictionarySystem() { }
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
export function IDictionaryDatabase() { }
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
export function IDictionaryDatabaseObject() { }
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
export function IDictionaryTableColumn() { }
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
export class VantageDictionaryService {
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
export function VANTAGE_DICTIONARY_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageDictionaryService(queryService);
}
/** @type {?} */
export const VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImRpY3Rpb25hcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBR3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFvQyxNQUFNLGlCQUFpQixDQUFDOztBQUV4RixNQUFNLE9BQU8sWUFBWSxHQUFhO0lBQ3BDLEtBQUs7SUFDTCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0NBQ2Y7Ozs7QUFFRCx1Q0FXQzs7O0lBVkMscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLGlDQUFjOztJQUNkLHNDQUFtQjs7SUFDbkIscUNBQWtCOztJQUNsQiw2Q0FBMEI7O0lBQzFCLG9DQUFrQjs7SUFDbEIseUNBQXNCOztJQUN0QiwwQ0FBd0I7O0lBQ3hCLHFDQUFrQjs7Ozs7QUFHcEIseUNBT0M7OztJQU5DLDBDQUFxQjs7SUFDckIseUNBQW9COztJQUNwQix3Q0FBbUI7O0lBQ25CLG1DQUFjOztJQUNkLGlDQUFZOztJQUNaLG1DQUFjOzs7OztBQUdoQiwrQ0FRQzs7O0lBUEMsOENBQW1COztJQUNuQixnREFBcUI7O0lBQ3JCLHVDQUFZOztJQUNaLHlDQUFjOztJQUNkLCtDQUFvQjs7SUFDcEIseUNBQWM7O0lBQ2QsZ0RBQXFCOzs7OztBQUd2Qiw0Q0FNQzs7O0lBTEMsMkNBQW1COztJQUNuQiw2Q0FBcUI7O0lBQ3JCLDBDQUFr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LG1DQUFtQyxDQUNqRCxNQUFnQyxFQUNoQyxZQUFpQztJQUVqQyxPQUFPLE1BQU0sSUFBSSxJQUFJLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELENBQUM7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQixHQUFhOztJQUVuRCxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLENBQUM7SUFDdkYsVUFBVSxFQUFFLG1DQUFtQztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFNraXBTZWxmLCBPcHRpb25hbCwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFZhbnRhZ2VRdWVyeVNlcnZpY2UsIElRdWVyeVJlc3VsdFNldCwgSVNRTEVDb25uZWN0aW9uIH0gZnJvbSAnLi9xdWVyeS5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IHN5c0RhdGFiYXNlczogc3RyaW5nW10gPSBbXG4gICdEQkMnLFxuICAnZGJjbW5ncicsXG4gICdTUUxKJyxcbiAgJ1N5c3RlbUZlJyxcbiAgJ1N5c0FkbWluJyxcbiAgJ1NZU0JBUicsXG4gICdTWVNKREJDJyxcbiAgJ1NZU0xJQicsXG4gICdTWVNVRFRMSUInLFxuICAnVERNYXBzJyxcbiAgJ1REX1NFUlZFUl9EQicsXG4gICdURF9TWVNGTkxJQicsXG4gICdURF9TWVNYTUwnLFxuICAnU3lzX0NhbGVuZGFyJyxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Rpb25hcnlTeXN0ZW0ge1xuICBob3N0bmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBvcnQ/OiBudW1iZXI7XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgbGFzdF9ydW4/OiBzdHJpbmc7XG4gIGludGVydmFsX21pbnV0ZXM/OiBudW1iZXI7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xuICBsYXN0X2F0dGVtcHQ/OiBzdHJpbmc7XG4gIGluX2NvbGxlY3Rpb24/OiBib29sZWFuO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGljdGlvbmFyeURhdGFiYXNlIHtcbiAgcGFyZW50X25hbWU/OiBzdHJpbmc7XG4gIHNpemVfYnl0ZXM/OiBudW1iZXI7XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Rpb25hcnlEYXRhYmFzZU9iamVjdCB7XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgZGF0YWJhc2VfaWQ/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBzaXplX2J5dGVzPzogbnVtYmVyO1xuICB0eXBlPzogc3RyaW5nO1xuICBjcmVhdGVfdGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGljdGlvbmFyeVRhYmxlQ29sdW1uIHtcbiAgc3lzdGVtX2lkPzogc3RyaW5nO1xuICBkYXRhYmFzZV9pZD86IHN0cmluZztcbiAgdGFibGVfaWQ/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uVHlwZVxuICogQSAtIEFnZ3JlZ2F0ZVxuICogQiAtIEFnZ3JlZ2F0ZSBhbmQgc3RhdGlzdGljYWxcbiAqIEMgLSBDb250cmFjdCBmdW5jdGlvblxuICogRCAtIEV4dGVybmFsIHN0b3JlZCBwcm9jZWR1cmVcbiAqIEYgLSBTY2FsYXJcbiAqIEggLSBVc2VyIGRlZmluZWQgbWV0aG9kXG4gKiBJIC0gSW50ZXJuYWwgdHlwZSBtZXRob2RcbiAqIEwgLSBUYWJsZSBvcGVyYXRvclxuICogUiAtIFRhYmxlIEZ1bmN0aW9uXG4gKiBTIC0gU3RhdGlzdGljYWxcbiAqL1xuXG4vKipcbiAqIFRhYmxlS2luZCBmb3IgZGJjLnRhYmxlc3Z4O1xuICogQSAtIEFnZ3JlZ2F0ZSBmdW5jdGlvblxuICogQiAtIENvbWJpbmVkIGFnZ3JlZ2F0ZSBhbmQgb3JkZXJlZCBhbmFseXRpY2FsIGZ1bmN0aW9uXG4gKiBDIC0gVGFibGUgb3BlcmF0b3IgcGFyc2VyIGNvbnRyYWN0IGZ1bmN0aW9uXG4gKiBEIC0gSkFSXG4gKiBFIC0gRXh0ZXJuYWwgU3RvcmVkIFByb2NlZHVyZVxuICogRiAtIFN0YW5kYXJkIEZ1bmN0aW9uXG4gKiBHIC0gVHJpZ2dlclxuICogSCAtIEluc3RhbmNlIG9yIGNvbnRydWN0b3IgbWV0aG9kXG4gKiBJIC0gSm9pbiBJbmRleFxuICogSiAtIEpvdXJuYWxcbiAqIEsgLSBGb3JlaWduIFNlcnZlciBPYmplY3RcbiAqIEwgLSBVc2VyIGRlZmluZWQgdGFibGUgb3BlcmF0b3JcbiAqIE0gLSBNYWNyb1xuICogTiAtIEhhc2ggaW5kZXhcbiAqIE8gLSBUYWJsZSB3aXRoIG5vIHByaW1hcnkgaW5kZXggYW5kIG5vIHBhcnRpdGlvbmluZ1xuICogUCAtIFN0b3JlZCBQcm9jZWR1cmVcbiAqIFEgLSBRdWV1ZSB0YWJsZVxuICogUiAtIFRhYmxlIGZ1bmN0aW9uXG4gKiBTIC0gT3JkZXJlZCBBbmFseXRpY2FsIGZ1bmN0aW9uXG4gKiBUIC0gdGFibGUgd2l0aCBhIHByaW1hcnkgaW5kZXggb3IgcHJpbWFyeSBBTVAgaW5kZXgsIHBhcnRpdGlvbmluZyBvciBib3RoLiBPciBhIHBhcnRpb25lZCB0YWJsZSB3aXRoIE5vUEk7XG4gKiBVIC0gVXNlciBkZWZpbmVkIHR5cGVcbiAqIFYgLSBWaWV3XG4gKiBYIC0gQXV0aG9yaXphdGlvblxuICogWSAtIEdMT1Agc2V0XG4gKiBaIC0gVUlGIC0gVXNlciBJbnN0YWxsZWQgRmlsZVxuICogMSAtIEEgREFUQVNFVCBzY2hlbWEgb2JqZWN0IGNyZWF0ZWQgYnkgQ1JFQVRFIFNDSEVNQVxuICogMiAtIEZ1bmN0b24gYWxpYXMgb2JqZWN0XG4gKi9cblxuLyoqXG4gKiBkYmMuZXh0ZXJuYWxTUHNcbiAqIGRiYy5zZXNzaW9uSW5mb3Z4XG4gKi9cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VEaWN0aW9uYXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSkge31cblxuICBnZXRWaWV3SGVscChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlOiBzdHJpbmcsIHZpZXc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIExPQ0sgUk9XIEZPUiBBQ0NFU1NcbiAgICAgIFNFTEVDVCBDQVNUKENPVU5UKCopIEFTIEJJR0lOVCkgYXMgY250XG4gICAgICBGUk9NICR7ZGF0YWJhc2V9LiR7dmlld307XG4gICAgICBTSE9XIFZJRVcgJHtkYXRhYmFzZX0uJHt2aWV3fTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZS5nZXRWaWV3SW5mbyhjb25uZWN0aW9uLCBkYXRhYmFzZSwgdmlldykucGlwZShcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5jb2x1bW5zLm1hcCgoY29sdW1uOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29tbWVudDogY29sdW1uLnJlbWFya3MsXG4gICAgICAgICAgICB0eXBlOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGNvbHVtblR5cGU6IGNvbHVtbi50eXBlLFxuICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgICAgICBkYXRhYmFzZTogcmVzdWx0U2V0LmRhdGFiYXNlLFxuICAgICAgICAgICAgdGFibGU6IHJlc3VsdFNldC5uYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHZpZXdJbmZvOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGRkbFN0YXRlbWVudDogc3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgIHJlc3VsdFNldC5yZXN1bHRzWzFdLmRhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBkZGxTdGF0ZW1lbnQgKz0gcm93WydSZXF1ZXN0IFRleHQnXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGxldCBjb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQgPSByb3cuY250O1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zOiBhbnlbXSA9IHZpZXdJbmZvLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZTogcm93Lm5hbWUsXG4gICAgICAgICAgICAgICAgICB0eXBlOiByb3cuY29sdW1uVHlwZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGFiYXNlLFxuICAgICAgICAgICAgICAgIHZpZXcsXG4gICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBkZGxTdGF0ZW1lbnQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhYmxlSGVscChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlOiBzdHJpbmcsIHRhYmxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBMT0NLIFJPVyBGT1IgQUNDRVNTXG4gICAgICBTRUxFQ1QgQ0FTVChDT1VOVCgqKSBBUyBCSUdJTlQpIGFzIGNudFxuICAgICAgRlJPTSAke2RhdGFiYXNlfS4ke3RhYmxlfTtcbiAgICAgIFNIT1cgVEFCTEUgJHtkYXRhYmFzZX0uJHt0YWJsZX07XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLmdldFRhYmxlSW5mbyhjb25uZWN0aW9uLCBkYXRhYmFzZSwgdGFibGUpLnBpcGUoXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQuY29sdW1ucy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbHVtbi5yZW1hcmtzLFxuICAgICAgICAgICAgdHlwZTogJ2NvbHVtbicsXG4gICAgICAgICAgICBjb2x1bW5UeXBlOiBjb2x1bW4udHlwZSxcbiAgICAgICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICAgICAgZGF0YWJhc2U6IHJlc3VsdFNldC5kYXRhYmFzZSxcbiAgICAgICAgICAgIHRhYmxlOiByZXN1bHRTZXQubmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKChpbmZvOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGRkbFN0YXRlbWVudDogc3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgIHJlc3VsdFNldC5yZXN1bHRzWzFdLmRhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBkZGxTdGF0ZW1lbnQgKz0gcm93WydSZXF1ZXN0IFRleHQnXTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGxldCBjb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQgPSByb3cuY250O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY29uc3QgY29sdW1uczogYW55W10gPSBpbmZvLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZTogcm93Lm5hbWUsXG4gICAgICAgICAgICAgICAgICB0eXBlOiByb3cuY29sdW1uVHlwZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhYmFzZSxcbiAgICAgICAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgIGRkbFN0YXRlbWVudCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0YWJhc2VGdW5jdGlvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGZ1bmNOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQICdTUUwgJHtmdW5jTmFtZX0nO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nQXJyYXk6IHN0cmluZ1tdID0gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm93WydPbi1MaW5lIEhlbHAnXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gc3RyaW5nQXJyYXkuam9pbignICcpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBnZXREYXRhYmFzZUZ1bmN0aW9ucyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQICdTUUwnO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nQXJyYXk6IHN0cmluZ1tdID0gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm93WydPbi1MaW5lIEhlbHAnXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgc3FsSGVscDogc3RyaW5nID0gc3RyaW5nQXJyYXkuam9pbignICcpO1xuICAgICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBzcWxIZWxwLmluZGV4T2YoJ0ZVTkNUSU9OUycpICsgMTI7XG4gICAgICAgICAgc3FsSGVscCA9IHNxbEhlbHAuc3Vic3RyKGluZGV4LCBzcWxIZWxwLmxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIHNxbEhlbHBcbiAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAuZmlsdGVyKChmdW5jOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcCgoZnVuYzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogZnVuYyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBnZXRBbmFseXRpY2FsRnVuY3Rpb25zKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIEhFTFAgRk9SRUlHTiBTQ0hFTUEgXCJwdWJsaWNcIkBjb3Byb2Nlc3NvcjtcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IHJvdy5vYmplY3RuYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0QW5hbHl0aWNhbEZ1bmN0aW9uKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgYW5hbHl0aWNhbEZ1bmN0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQIEZPUkVJR04gRlVOQ1RJT04gXCJwdWJsaWNcIi5cIiR7YW5hbHl0aWNhbEZ1bmN0aW9ufVwiQGNvcHJvY2Vzc29yO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgbGV0IGZ1bmN0aW9uTmFtZTogc3RyaW5nID0gJyc7XG4gICAgICAgICAgbGV0IHNob3J0RGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGxldCBsb25nRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGxldCB1c2FnZVN5bnRheDogc3RyaW5nID0gJyc7XG4gICAgICAgICAgbGV0IGlucHV0Q29sdW1uczogc3RyaW5nID0gJyc7XG4gICAgICAgICAgbGV0IG91dHB1dENvbHVtbnM6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uT3duZXI6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGNvbnN0IGNyZWF0aW9uVGltZTogc3RyaW5nID0gJyc7XG4gICAgICAgICAgY29uc3QgZnVuY3Rpb25WZXJzaW9uOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBjb25zdCBpbnRlcmZhY2VzSW1wbGVtZW50ZWQ6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9IHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvd1snRnVuY3Rpb24gSGVscCddO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHN0cmluZ0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHN0cmluZ0FycmF5W2luZGV4XTtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdGdW5jdGlvbiBOYW1lOicpID4gLTEpIHtcbiAgICAgICAgICAgICAgZm9yIChpbmRleCsrOyBpbmRleCA8IHN0cmluZ0FycmF5LmluZGV4T2YoJycpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lICs9IHN0cmluZ0FycmF5W2luZGV4XSArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ1Nob3J0IERlc2NyaXB0aW9uOicpID4gLTEpIHtcbiAgICAgICAgICAgICAgZm9yIChpbmRleCsrOyBpbmRleCA8IHN0cmluZ0FycmF5LmluZGV4T2YoJycpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbiArPSBzdHJpbmdBcnJheVtpbmRleF0gKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdMb25nIERlc2NyaXB0aW9uOicpID4gLTEpIHtcbiAgICAgICAgICAgICAgZm9yIChpbmRleCsrOyBpbmRleCA8IHN0cmluZ0FycmF5LmluZGV4T2YoJycpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uICs9IHN0cmluZ0FycmF5W2luZGV4XSArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ1VzYWdlIFN5bnRheDonKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGZvciAoaW5kZXgrKzsgaW5kZXggPCBzdHJpbmdBcnJheS5pbmRleE9mKCcnKTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHVzYWdlU3ludGF4ICs9IHN0cmluZ0FycmF5W2luZGV4XSArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ0lucHV0IENvbHVtbnM6JykgPiAtMSkge1xuICAgICAgICAgICAgICBmb3IgKGluZGV4Kys7IGluZGV4IDwgc3RyaW5nQXJyYXkuaW5kZXhPZignJyk7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBpbnB1dENvbHVtbnMgKz0gc3RyaW5nQXJyYXlbaW5kZXhdICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignT3V0cHV0IENvbHVtbnM6JykgPiAtMSkge1xuICAgICAgICAgICAgICBmb3IgKGluZGV4Kys7IGluZGV4IDwgc3RyaW5nQXJyYXkuaW5kZXhPZignJyk7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRDb2x1bW5zICs9IHN0cmluZ0FycmF5W2luZGV4XSArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBGdW5jdGlvbiBPd25lcjpcbiAgICAgICAgICAgICAgLy8gQ3JlYXRpb24gVGltZTpcbiAgICAgICAgICAgICAgLy8gRnVuY3Rpb24gVmVyc2lvbjpcbiAgICAgICAgICAgICAgLy8gSW50ZXJmYWNlcyBJbXBsZW1lbnRlZDpcbiAgICAgICAgICAgICAgaWYgKHN0cmluZ0FycmF5LmluZGV4T2YoJycpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHN0cmluZ0FycmF5LmluZGV4T2YoJycpO1xuICAgICAgICAgICAgICAgIHN0cmluZ0FycmF5W2luZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2hvcnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGxvbmdEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVzYWdlU3ludGF4LFxuICAgICAgICAgICAgaW5wdXRDb2x1bW5zLFxuICAgICAgICAgICAgb3V0cHV0Q29sdW1ucyxcbiAgICAgICAgICB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICByZXN1bHRTZXRQcmVkaWNhdGUocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpOiBhbnkge1xuICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHJvdy5UYWJsZU5hbWUsXG4gICAgICAgIHJlcXVlc3RUZXh0OiByb3cuUmVxdWVzdFRleHQsXG4gICAgICAgIGNvbW1lbnQ6IHJvdy5Db21tZW50U3RyaW5nLFxuICAgICAgICBraW5kOiByb3cuVGFibGVLaW5kLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0b3JlZFByb2NlZHVyZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgU0VMRUNUIERhdGFCYXNlTmFtZSwgVGFibGVOYW1lLCBUYWJsZUtpbmQsIFJlcXVlc3RUZXh0LCBDb21tZW50U3RyaW5nIEZST00gZGJjLnRhYmxlc3Z4XG4gICAgICBXSEVSRSBUYWJsZUtpbmQgPSAnUCdcbiAgICAgIE9SREVSIEJZIFRhYmxlTmFtZSBBU0M7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHRoaXMucmVzdWx0U2V0UHJlZGljYXRlKSk7XG4gIH1cblxuICBnZXRFeHRlcm5hbFN0b3JlZFByb2NlZHVyZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgU0VMRUNUIERhdGFCYXNlTmFtZSwgVGFibGVOYW1lLCBUYWJsZUtpbmQsIFJlcXVlc3RUZXh0LCBDb21tZW50U3RyaW5nIEZST00gZGJjLnRhYmxlc3Z4XG4gICAgICBXSEVSRSBUYWJsZUtpbmQgPSAnRSdcbiAgICAgIE9SREVSIEJZIFRhYmxlTmFtZSBBU0M7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHRoaXMucmVzdWx0U2V0UHJlZGljYXRlKSk7XG4gIH1cblxuICBnZXRNYWNyb3MoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgU0VMRUNUIERhdGFCYXNlTmFtZSwgVGFibGVOYW1lLCBUYWJsZUtpbmQsIFJlcXVlc3RUZXh0LCBDb21tZW50U3RyaW5nIEZST00gZGJjLnRhYmxlc3Z4XG4gICAgICBXSEVSRSBUYWJsZUtpbmQgPSAnTSdcbiAgICAgIE9SREVSIEJZIFRhYmxlTmFtZSBBU0M7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHRoaXMucmVzdWx0U2V0UHJlZGljYXRlKSk7XG4gIH1cblxuICBmdW5jdGlvbnN2eFByZWRpY2F0ZShyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCk6IGFueSB7XG4gICAgcmV0dXJuIHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YWJhc2U6IHJvdy5EYXRhYmFzZU5hbWUsXG4gICAgICAgIG5hbWU6IHJvdy5TcGVjaWZpY05hbWUsXG4gICAgICAgIHBhcmFtTnVtYmVyOiByb3cuTnVtUGFyYW1ldGVycyxcbiAgICAgICAgcGFyYW1EYXRhVHlwZXM6IHJvdy5QYXJhbWV0ZXJEYXRhVHlwZXMsXG4gICAgICAgIHJlcXVlc3RUZXh0OiByb3cuUmVxdWVzdFRleHQsXG4gICAgICAgIGNvbW1lbnRTdHJpbmc6IHJvdy5Db21tZW50U3RyaW5nLFxuICAgICAgICBraW5kOiByb3cuVGFibGVLaW5kLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhYmxlT3BlcmF0b3JzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIFNFTEVDVCBmdW5jLkRhdGFiYXNlTmFtZSwgZnVuYy5GdW5jdGlvbk5hbWUsIGZ1bmMuU3BlY2lmaWNOYW1lLCBmdW5jLk51bVBhcmFtZXRlcnMsXG4gICAgICBmdW5jLlBhcmFtZXRlckRhdGFUeXBlcywgdGJsLlJlcXVlc3RUZXh0LCB0YmwuQ29tbWVudFN0cmluZywgdGJsLlRhYmxlS2luZFxuICAgICAgRlJPTSBkYmMuZnVuY3Rpb25zdnggYXMgZnVuY1xuICAgICAgSU5ORVIgSk9JTiBkYmMudGFibGVzdnggYXMgdGJsXG4gICAgICBPTiB0YmwuVGFibGVOYW1lID0gZnVuYy5TcGVjaWZpY05hbWVcbiAgICAgIEFORCB0YmwuRGF0YUJhc2VOYW1lID0gZnVuYy5EYXRhYmFzZU5hbWVcbiAgICAgIFdIRVJFIEZ1bmN0aW9uVHlwZSA9ICdMJ1xuICAgICAgT1JERVIgQlkgZnVuYy5GdW5jdGlvbk5hbWUgQVNDO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcCh0aGlzLmZ1bmN0aW9uc3Z4UHJlZGljYXRlKSk7XG4gIH1cblxuICBnZXRUYWJsZUZ1bmN0aW9ucyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBTRUxFQ1QgZnVuYy5EYXRhYmFzZU5hbWUsIGZ1bmMuRnVuY3Rpb25OYW1lLCBmdW5jLlNwZWNpZmljTmFtZSwgZnVuYy5OdW1QYXJhbWV0ZXJzLFxuICAgICAgZnVuYy5QYXJhbWV0ZXJEYXRhVHlwZXMsIHRibC5SZXF1ZXN0VGV4dCwgdGJsLkNvbW1lbnRTdHJpbmcsIHRibC5UYWJsZUtpbmRcbiAgICAgIEZST00gZGJjLmZ1bmN0aW9uc3Z4IGFzIGZ1bmNcbiAgICAgIElOTkVSIEpPSU4gZGJjLnRhYmxlc3Z4IGFzIHRibFxuICAgICAgT04gdGJsLlRhYmxlTmFtZSA9IGZ1bmMuU3BlY2lmaWNOYW1lXG4gICAgICBBTkQgdGJsLkRhdGFCYXNlTmFtZSA9IGZ1bmMuRGF0YWJhc2VOYW1lXG4gICAgICBXSEVSRSBGdW5jdGlvblR5cGUgPSAnUidcbiAgICAgIE9SREVSIEJZIGZ1bmMuRnVuY3Rpb25OYW1lIEFTQztcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShtYXAodGhpcy5mdW5jdGlvbnN2eFByZWRpY2F0ZSkpO1xuICB9XG5cbiAgZ2V0Rm9yZWlnblNlcnZlcnMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBTRUxFQ1QgVGFibGVOYW1lLCBUYWJsZUtpbmQgRlJPTSBEQkMuVEFCTEVTVlhcbiAgICAgIFdIRVJFIERBVEFCQVNFTkFNRSA9ICdURF9TRVJWRVJfREInIEFORFxuICAgICAgVEFCTEVLSU5EID0gJ0snIEFORFxuICAgICAgVGFibGVOYW1lIDw+ICdjb3Byb2Nlc29yJztcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IHJvdy5UYWJsZU5hbWUsXG4gICAgICAgICAgICAgIGtpbmQ6IHJvdy5UYWJsZUtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBnZXRGb3JlaWduU2NoZW1hcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGZvcmVpZ25TZXJ2ZXI6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgSEVMUCBGT1JFSUdOIFNFUlZFUiAke2ZvcmVpZ25TZXJ2ZXJ9O1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IHsgU2NoZW1hOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogcm93LlNjaGVtYSxcbiAgICAgICAgICAgICAga2luZDogJ05PTkUnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0Rm9yZWlnblRhYmxlcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGZvcmVpZ25TZXJ2ZXI6IHN0cmluZywgc2NoZW1hOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIEhFTFAgRk9SRUlHTiBEQVRBQkFTRSBcIiR7c2NoZW1hfVwiQCR7Zm9yZWlnblNlcnZlcn07XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogeyBUYWJsZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IHJvdy5UYWJsZSxcbiAgICAgICAgICAgICAga2luZDogJ05PTkUnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0Rm9yZWlnbkNvbHVtbnMoXG4gICAgY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLFxuICAgIGZvcmVpZ25TZXJ2ZXI6IHN0cmluZyxcbiAgICBzY2hlbWE6IHN0cmluZyxcbiAgICB0YWJsZTogc3RyaW5nLFxuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIEhFTFAgRk9SRUlHTiBUQUJMRSBcIiR7c2NoZW1hfVwiLlwiJHt0YWJsZX1cIkAke2ZvcmVpZ25TZXJ2ZXJ9O1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IHsgQ29sdW1uOiBzdHJpbmc7IFR5cGU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiByb3cuQ29sdW1uLFxuICAgICAgICAgICAgICB0eXBlOiByb3cuVHlwZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldERhdGFiYXNlcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9XG4gICAgICAnU0VMRUNUIGRhdGFiYXNlbmFtZSwgUGVybVNwYWNlLCBTcG9vbFNwYWNlLCBUZW1wU3BhY2UsIENvbW1lbnRTdHJpbmcsIERCS2luZCBGUk9NIGRiYy5kYXRhYmFzZXNWWCBPUkRFUiBCWSBkYXRhYmFzZW5hbWU7JztcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiByb3cuRGF0YWJhc2VOYW1lIHx8IHJvdy5zY2hlbWFuYW1lLFxuICAgICAgICAgICAgICB0eXBlOiByb3cuREJLaW5kID09PSAnVScgPyAndXNlcicgOiAnZGF0YWJhc2UnLFxuICAgICAgICAgICAgICBwZXJtU3BhY2U6IHJvdy5QZXJtU3BhY2UsXG4gICAgICAgICAgICAgIHNwb29sU3BhY2U6IHJvdy5TcG9vbFNwYWNlLFxuICAgICAgICAgICAgICB0ZW1wU3BhY2U6IHJvdy5UZW1wU3BhY2UsXG4gICAgICAgICAgICAgIGNvbW1lbnQ6IHJvdy5Db21tZW50U3RyaW5nLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0RGF0YWJhc2VPYmplY3RzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgU0VMRUNUIERhdGFCYXNlTmFtZSwgVGFibGVOYW1lLCBUYWJsZUtpbmQsIENvbW1lbnRTdHJpbmcgRlJPTSBkYmMudGFibGVzdnhcbiAgICAgICBXSEVSRSBUYWJsZUtpbmQgaW4gKCdUJywgJ08nLCAnVicpIEFORCBEYXRhQmFzZU5hbWUgPSAnJHtkYXRhYmFzZUlkfScgT1JERVIgQlkgVGFibGVOYW1lIEFTQztgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGU6IHN0cmluZyA9IHJvdy5UYWJsZUtpbmQgfHwgcm93LnRhYmxla2luZDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtpbmQ6IHJvdy5UYWJsZUtpbmQgfHwgcm93LnRhYmxla2luZCxcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSA9PT0gJ1YnID8gJ3ZpZXcnIDogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgbmFtZTogcm93LlRhYmxlTmFtZSB8fCByb3cudGFibGVuYW1lLFxuICAgICAgICAgICAgICBkYXRhYmFzZTogcm93LkRhdGFCYXNlTmFtZSB8fCByb3cuZGF0YWJhc2VuYW1lLFxuICAgICAgICAgICAgICBjb21tZW50OiByb3cuQ29tbWVudFN0cmluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldFRhYmxlQ29sdW1ucyh0eXBlOiBzdHJpbmcsIGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VJZDogc3RyaW5nLCB0YWJsZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmICh0eXBlID09PSAndGFibGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLmdldFRhYmxlSW5mbyhjb25uZWN0aW9uLCBkYXRhYmFzZUlkLCB0YWJsZUlkKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5jb2x1bW5zLm1hcCgoY29sdW1uOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNvbW1lbnQ6IGNvbHVtbi5yZW1hcmtzLFxuICAgICAgICAgICAgICB0eXBlOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgY29sdW1uVHlwZTogY29sdW1uLnR5cGUsXG4gICAgICAgICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICAgICAgICBkYXRhYmFzZTogcmVzdWx0U2V0LmRhdGFiYXNlLFxuICAgICAgICAgICAgICB0YWJsZTogcmVzdWx0U2V0Lm5hbWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlldycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2UuZ2V0Vmlld0luZm8oY29ubmVjdGlvbiwgZGF0YWJhc2VJZCwgdGFibGVJZCkucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQuY29sdW1ucy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb21tZW50OiBjb2x1bW4ucmVtYXJrcyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGNvbHVtblR5cGU6IGNvbHVtbi50eXBlLFxuICAgICAgICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgICAgICAgZGF0YWJhc2U6IHJlc3VsdFNldC5kYXRhYmFzZSxcbiAgICAgICAgICAgICAgdGFibGU6IHJlc3VsdFNldC5uYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaChcbiAgICBjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sXG4gICAgc2VhcmNoU3RyOiBzdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgZGF0YWJhc2VzOiBib29sZWFuO1xuICAgICAgb2JqZWN0czogYm9vbGVhbjtcbiAgICAgIGNvbHVtbnM6IGJvb2xlYW47XG4gICAgfSA9IHtcbiAgICAgIGRhdGFiYXNlczogdHJ1ZSxcbiAgICAgIG9iamVjdHM6IHRydWUsXG4gICAgICBjb2x1bW5zOiB0cnVlLFxuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBxdWVyaWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChvcHRpb25zLmRhdGFiYXNlcykge1xuICAgICAgY29uc3QgZGJRdWVyeTogc3RyaW5nID0gYFxuICAgICAgICBTRUxFQ1RcbiAgICAgICAgICAgIERhdGFiYXNlTmFtZSBhcyBvYmplY3ROYW1lLFxuICAgICAgICAgICAgJ2RhdGFiYXNlJyBhcyBvYmplY3RUeXBlLFxuICAgICAgICAgICAgREJLaW5kIGFzIGtpbmQsXG4gICAgICAgICAgICBDb21tZW50U3RyaW5nXG4gICAgICAgIEZST00gZGJjLmRhdGFiYXNlc3Z4XG4gICAgICAgIFdIRVJFIERhdGFiYXNlTmFtZSBMSUtFICclJHtzZWFyY2hTdHJ9JSdcbiAgICAgICAgQU5EIERhdGFCYXNlTmFtZSBOT1QgSU4gKCcke3N5c0RhdGFiYXNlcy5qb2luKFwiJywgJ1wiKX0nKVxuICAgICAgYDtcbiAgICAgIHF1ZXJpZXMucHVzaChkYlF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub2JqZWN0cykge1xuICAgICAgY29uc3Qgb2JqZWN0UXVlcnk6IHN0cmluZyA9IGBcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgICBEYXRhQmFzZU5hbWUgfHwgJ358ficgfHwgVGFibGVOYW1lIGFzIG9iamVjdE5hbWUsXG4gICAgICAgICAgICAnb2JqZWN0JyBhcyBvYmplY3RUeXBlLFxuICAgICAgICAgICAgVGFibGVLaW5kIGFzIGtpbmQsXG4gICAgICAgICAgICBDb21tZW50U3RyaW5nXG4gICAgICAgIEZST00gZGJjLnRhYmxlc3Z4XG4gICAgICAgIFdIRVJFIFRhYmxlS2luZCBpbiAoJ1QnLCAnTycsICdWJylcbiAgICAgICAgQU5EIFRhYmxlTmFtZSBMSUtFICclJHtzZWFyY2hTdHJ9JSdcbiAgICAgICAgQU5EIERhdGFCYXNlTmFtZSBOT1QgSU4gKCcke3N5c0RhdGFiYXNlcy5qb2luKFwiJywgJ1wiKX0nKVxuICAgICAgYDtcbiAgICAgIHF1ZXJpZXMucHVzaChvYmplY3RRdWVyeSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9iamVjdHMpIHtcbiAgICAgIGNvbnN0IGNvbHVtblF1ZXJ5OiBzdHJpbmcgPSBgXG4gICAgICAgIFNFTEVDVFxuICAgICAgICAgICAgRGF0YUJhc2VOYW1lIHx8ICd+fH4nIHx8IFRhYmxlTmFtZSB8fCAnfnx+JyB8fCBDb2x1bW5OYW1lIGFzIG9iamVjdE5hbWUsXG4gICAgICAgICAgICAnY29sdW1uJyBhcyBvYmplY3RUeXBlLFxuICAgICAgICAgICAgQ29sdW1uVHlwZSBhcyBraW5kLFxuICAgICAgICAgICAgQ29tbWVudFN0cmluZ1xuICAgICAgICBGUk9NIGRiYy5jb2x1bW5zVlhcbiAgICAgICAgV0hFUkUgY29sdW1ubmFtZSBMSUtFICclJHtzZWFyY2hTdHJ9JSdcbiAgICAgICAgQU5EIERhdGFCYXNlTmFtZSBOT1QgSU4gKCcke3N5c0RhdGFiYXNlcy5qb2luKFwiJywgJ1wiKX0nKVxuICAgICAgYDtcbiAgICAgIHF1ZXJpZXMucHVzaChjb2x1bW5RdWVyeSk7XG4gICAgfVxuICAgIGNvbnN0IHVuaW9uSm9pbjogc3RyaW5nID0gcXVlcmllcy5qb2luKCdVTklPTicpO1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBXSVRIIHF1aWNrX3NlYXJjaCBBUyAoXG4gICAgICAgICAgJHt1bmlvbkpvaW59XG4gICAgICApXG4gICAgICBTRUxFQ1QgKiBGUk9NIHF1aWNrX3NlYXJjaFxuICAgICAgT1JERVIgQlkgMVxuICAgICAgU0FNUExFIDEwMDtcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBraW5kOiBzdHJpbmcgPSByb3cua2luZDtcbiAgICAgICAgICAgIC8vIG1hcCB0byBwcm9wZXIgdHlwZS9raW5kXG4gICAgICAgICAgICBpZiAocm93Lm9iamVjdFR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIGtpbmQgPSAnY29sdW1uJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm93Lm9iamVjdFR5cGUgPT09ICdkYXRhYmFzZScpIHtcbiAgICAgICAgICAgICAga2luZCA9IGtpbmQgPT09ICdEJyA/ICdkYXRhYmFzZScgOiAndXNlcic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBraW5kID0ga2luZCA9PT0gJ1YnID8gJ3ZpZXcnIDogJ3RhYmxlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIC8vIHNwbGl0IG5hbWUgYW5kIHBhcmVudHMuLlxuICAgICAgICAgICAgY29uc3QgbmFtZVNwbGl0OiBzdHJpbmdbXSA9IHJvdy5vYmplY3ROYW1lLnNwbGl0KCd+fH4nKTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IG5hbWVTcGxpdC5sZW5ndGggLSAxOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIG5ld1BhcmVudC5wdXNoKCdcIicgKyBuYW1lU3BsaXRbaW5kZXhdICsgJ1wiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwYXJlbnQ6IG5ld1BhcmVudC5qb2luKCcuJyksXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVTcGxpdFtuYW1lU3BsaXQubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgIHR5cGU6IHJvdy5vYmplY3RUeXBlLFxuICAgICAgICAgICAgICBjb21tZW50OiByb3cuQ29tbWVudFN0cmluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9ESUNUSU9OQVJZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZURpY3Rpb25hcnlTZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4pOiBWYW50YWdlRGljdGlvbmFyeVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlRGljdGlvbmFyeVNlcnZpY2UocXVlcnlTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfRElDVElPTkFSWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VEaWN0aW9uYXJ5U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VEaWN0aW9uYXJ5U2VydmljZV0sIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0RJQ1RJT05BUllfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=