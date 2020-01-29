/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
export var sysDatabases = [
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
var VantageDictionaryService = /** @class */ (function () {
    function VantageDictionaryService(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} view
     * @return {?}
     */
    VantageDictionaryService.prototype.getViewHelp = /**
     * @param {?} connection
     * @param {?} database
     * @param {?} view
     * @return {?}
     */
    function (connection, database, view) {
        var _this = this;
        /** @type {?} */
        var queryStr = "\n      LOCK ROW FOR ACCESS\n      SELECT CAST(COUNT(*) AS BIGINT) as cnt\n      FROM " + database + "." + view + ";\n      SHOW VIEW " + database + "." + view + ";\n    ";
        return this._queryService.getViewInfo(connection, database, view).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
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
        function (viewInfo) {
            return _this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                /** @type {?} */
                var ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                var count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    count = row.cnt;
                }));
                /** @type {?} */
                var columns = viewInfo.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database: database,
                    view: view,
                    columns: columns,
                    count: count,
                    ddlStatement: ddlStatement,
                };
            })));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} database
     * @param {?} table
     * @return {?}
     */
    VantageDictionaryService.prototype.getTableHelp = /**
     * @param {?} connection
     * @param {?} database
     * @param {?} table
     * @return {?}
     */
    function (connection, database, table) {
        var _this = this;
        /** @type {?} */
        var queryStr = "\n      LOCK ROW FOR ACCESS\n      SELECT CAST(COUNT(*) AS BIGINT) as cnt\n      FROM " + database + "." + table + ";\n      SHOW TABLE " + database + "." + table + ";\n    ";
        return this._queryService.getTableInfo(connection, database, table).pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.columns.map((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
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
        function (info) {
            return _this._queryService
                .querySystem(connection, {
                query: queryStr,
            })
                .pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                /** @type {?} */
                var ddlStatement = '';
                resultSet.results[1].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    ddlStatement += row['Request Text'];
                }));
                /** @type {?} */
                var count;
                resultSet.results[0].data.forEach((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    count = row.cnt;
                }));
                /** @type {?} */
                var columns = info.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) {
                    return {
                        columnName: row.name,
                        type: row.columnType,
                    };
                }));
                return {
                    database: database,
                    table: table,
                    columns: columns,
                    count: count,
                    ddlStatement: ddlStatement,
                };
            })));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} funcName
     * @return {?}
     */
    VantageDictionaryService.prototype.getDatabaseFunction = /**
     * @param {?} connection
     * @param {?} funcName
     * @return {?}
     */
    function (connection, funcName) {
        /** @type {?} */
        var queryStr = "\n      HELP 'SQL " + funcName + "';\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            /** @type {?} */
            var stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return row['On-Line Help'];
            }));
            return stringArray.join(' ');
        })));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getDatabaseFunctions = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      HELP 'SQL';\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            /** @type {?} */
            var stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return row['On-Line Help'];
            }));
            /** @type {?} */
            var sqlHelp = stringArray.join(' ');
            /** @type {?} */
            var index = sqlHelp.indexOf('FUNCTIONS') + 12;
            sqlHelp = sqlHelp.substr(index, sqlHelp.length);
            return sqlHelp
                .split(' ')
                .filter((/**
             * @param {?} func
             * @return {?}
             */
            function (func) {
                return func;
            }))
                .map((/**
             * @param {?} func
             * @return {?}
             */
            function (func) {
                return {
                    name: func,
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getAnalyticalFunctions = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      HELP FOREIGN SCHEMA \"public\"@coprocessor;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.objectname,
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} analyticalFunction
     * @return {?}
     */
    VantageDictionaryService.prototype.getAnalyticalFunction = /**
     * @param {?} connection
     * @param {?} analyticalFunction
     * @return {?}
     */
    function (connection, analyticalFunction) {
        /** @type {?} */
        var queryStr = "\n      HELP FOREIGN FUNCTION \"public\".\"" + analyticalFunction + "\"@coprocessor;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            /** @type {?} */
            var functionName = '';
            /** @type {?} */
            var shortDescription = '';
            /** @type {?} */
            var longDescription = '';
            /** @type {?} */
            var usageSyntax = '';
            /** @type {?} */
            var inputColumns = '';
            /** @type {?} */
            var outputColumns = '';
            /** @type {?} */
            var functionOwner = '';
            /** @type {?} */
            var creationTime = '';
            /** @type {?} */
            var functionVersion = '';
            /** @type {?} */
            var interfacesImplemented = '';
            /** @type {?} */
            var stringArray = resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return row['Function Help'];
            }));
            for (var index = 0; index < stringArray.length; index++) {
                /** @type {?} */
                var value = stringArray[index];
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
                functionName: functionName,
                shortDescription: shortDescription,
                longDescription: longDescription,
                usageSyntax: usageSyntax,
                inputColumns: inputColumns,
                outputColumns: outputColumns,
            };
        })));
    };
    /**
     * @param {?} resultSet
     * @return {?}
     */
    VantageDictionaryService.prototype.resultSetPredicate = /**
     * @param {?} resultSet
     * @return {?}
     */
    function (resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            return {
                name: row.TableName,
                requestText: row.RequestText,
                comment: row.CommentString,
                kind: row.TableKind,
            };
        }));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getStoredProcedures = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'P'\n      ORDER BY TableName ASC;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getExternalStoredProcedures = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'E'\n      ORDER BY TableName ASC;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getMacros = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT DataBaseName, TableName, TableKind, RequestText, CommentString FROM dbc.tablesvx\n      WHERE TableKind = 'M'\n      ORDER BY TableName ASC;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.resultSetPredicate));
    };
    /**
     * @param {?} resultSet
     * @return {?}
     */
    VantageDictionaryService.prototype.functionsvxPredicate = /**
     * @param {?} resultSet
     * @return {?}
     */
    function (resultSet) {
        return resultSet.results[0].data.map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
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
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getTableOperators = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,\n      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind\n      FROM dbc.functionsvx as func\n      INNER JOIN dbc.tablesvx as tbl\n      ON tbl.TableName = func.SpecificName\n      AND tbl.DataBaseName = func.DatabaseName\n      WHERE FunctionType = 'L'\n      ORDER BY func.FunctionName ASC;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getTableFunctions = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT func.DatabaseName, func.FunctionName, func.SpecificName, func.NumParameters,\n      func.ParameterDataTypes, tbl.RequestText, tbl.CommentString, tbl.TableKind\n      FROM dbc.functionsvx as func\n      INNER JOIN dbc.tablesvx as tbl\n      ON tbl.TableName = func.SpecificName\n      AND tbl.DataBaseName = func.DatabaseName\n      WHERE FunctionType = 'R'\n      ORDER BY func.FunctionName ASC;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map(this.functionsvxPredicate));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getForeignServers = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = "\n      SELECT TableName, TableKind FROM DBC.TABLESVX\n      WHERE DATABASENAME = 'TD_SERVER_DB' AND\n      TABLEKIND = 'K' AND\n      TableName <> 'coprocesor';\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.TableName,
                    kind: row.TableKind,
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @return {?}
     */
    VantageDictionaryService.prototype.getForeignSchemas = /**
     * @param {?} connection
     * @param {?} foreignServer
     * @return {?}
     */
    function (connection, foreignServer) {
        /** @type {?} */
        var queryStr = "\n      HELP FOREIGN SERVER " + foreignServer + ";\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.Schema,
                    kind: 'NONE',
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @return {?}
     */
    VantageDictionaryService.prototype.getForeignTables = /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @return {?}
     */
    function (connection, foreignServer, schema) {
        /** @type {?} */
        var queryStr = "\n      HELP FOREIGN DATABASE \"" + schema + "\"@" + foreignServer + ";\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.Table,
                    kind: 'NONE',
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @param {?} table
     * @return {?}
     */
    VantageDictionaryService.prototype.getForeignColumns = /**
     * @param {?} connection
     * @param {?} foreignServer
     * @param {?} schema
     * @param {?} table
     * @return {?}
     */
    function (connection, foreignServer, schema, table) {
        /** @type {?} */
        var queryStr = "\n      HELP FOREIGN TABLE \"" + schema + "\".\"" + table + "\"@" + foreignServer + ";\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                return {
                    name: row.Column,
                    type: row.Type,
                };
            }));
        })));
    };
    /**
     * @param {?} connection
     * @return {?}
     */
    VantageDictionaryService.prototype.getDatabases = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        /** @type {?} */
        var queryStr = 'SELECT databasename, PermSpace, SpoolSpace, TempSpace, CommentString, DBKind FROM dbc.databasesVX ORDER BY databasename;';
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
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
    };
    /**
     * @param {?} connection
     * @param {?} databaseId
     * @return {?}
     */
    VantageDictionaryService.prototype.getDatabaseObjects = /**
     * @param {?} connection
     * @param {?} databaseId
     * @return {?}
     */
    function (connection, databaseId) {
        /** @type {?} */
        var queryStr = "SELECT DataBaseName, TableName, TableKind, CommentString FROM dbc.tablesvx\n       WHERE TableKind in ('T', 'O', 'V') AND DataBaseName = '" + databaseId + "' ORDER BY TableName ASC;";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var type = row.TableKind || row.tablekind;
                return {
                    kind: row.TableKind || row.tablekind,
                    type: type === 'V' ? 'view' : 'table',
                    name: row.TableName || row.tablename,
                    database: row.DataBaseName || row.databasename,
                    comment: row.CommentString,
                };
            }));
        })));
    };
    /**
     * @param {?} type
     * @param {?} connection
     * @param {?} databaseId
     * @param {?} tableId
     * @return {?}
     */
    VantageDictionaryService.prototype.getTableColumns = /**
     * @param {?} type
     * @param {?} connection
     * @param {?} databaseId
     * @param {?} tableId
     * @return {?}
     */
    function (type, connection, databaseId, tableId) {
        if (type === 'table') {
            return this._queryService.getTableInfo(connection, databaseId, tableId).pipe(map((/**
             * @param {?} resultSet
             * @return {?}
             */
            function (resultSet) {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
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
            function (resultSet) {
                return resultSet.columns.map((/**
                 * @param {?} column
                 * @return {?}
                 */
                function (column) {
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
    };
    /**
     * @param {?} connection
     * @param {?} searchStr
     * @param {?=} options
     * @return {?}
     */
    VantageDictionaryService.prototype.search = /**
     * @param {?} connection
     * @param {?} searchStr
     * @param {?=} options
     * @return {?}
     */
    function (connection, searchStr, options) {
        if (options === void 0) { options = {
            databases: true,
            objects: true,
            columns: true,
        }; }
        /** @type {?} */
        var queries = [];
        if (options.databases) {
            /** @type {?} */
            var dbQuery = "\n        SELECT\n            DatabaseName as objectName,\n            'database' as objectType,\n            DBKind as kind,\n            CommentString\n        FROM dbc.databasesvx\n        WHERE DatabaseName LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
            queries.push(dbQuery);
        }
        if (options.objects) {
            /** @type {?} */
            var objectQuery = "\n        SELECT\n            DataBaseName || '~|~' || TableName as objectName,\n            'object' as objectType,\n            TableKind as kind,\n            CommentString\n        FROM dbc.tablesvx\n        WHERE TableKind in ('T', 'O', 'V')\n        AND TableName LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
            queries.push(objectQuery);
        }
        if (options.objects) {
            /** @type {?} */
            var columnQuery = "\n        SELECT\n            DataBaseName || '~|~' || TableName || '~|~' || ColumnName as objectName,\n            'column' as objectType,\n            ColumnType as kind,\n            CommentString\n        FROM dbc.columnsVX\n        WHERE columnname LIKE '%" + searchStr + "%'\n        AND DataBaseName NOT IN ('" + sysDatabases.join("', '") + "')\n      ";
            queries.push(columnQuery);
        }
        /** @type {?} */
        var unionJoin = queries.join('UNION');
        /** @type {?} */
        var queryStr = "\n      WITH quick_search AS (\n          " + unionJoin + "\n      )\n      SELECT * FROM quick_search\n      ORDER BY 1\n      SAMPLE 100;\n    ";
        return this._queryService
            .querySystem(connection, {
            query: queryStr,
        })
            .pipe(map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet.results[0].data.map((/**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                /** @type {?} */
                var kind = row.kind;
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
                var newParent = [];
                // split name and parents..
                /** @type {?} */
                var nameSplit = row.objectName.split('~|~');
                for (var index = 0; index < nameSplit.length - 1; index++) {
                    newParent.push('"' + nameSplit[index] + '"');
                }
                return {
                    parent: newParent.join('.'),
                    name: nameSplit[nameSplit.length - 1],
                    kind: kind,
                    type: row.objectType,
                    comment: row.CommentString,
                };
            }));
        })));
    };
    VantageDictionaryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageDictionaryService.ctorParameters = function () { return [
        { type: VantageQueryService }
    ]; };
    return VantageDictionaryService;
}());
export { VantageDictionaryService };
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
export var VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImRpY3Rpb25hcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBR3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFvQyxNQUFNLGlCQUFpQixDQUFDOztBQUV4RixNQUFNLEtBQU8sWUFBWSxHQUFhO0lBQ3BDLEtBQUs7SUFDTCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0NBQ2Y7Ozs7QUFFRCx1Q0FXQzs7O0lBVkMscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLGlDQUFjOztJQUNkLHNDQUFtQjs7SUFDbkIscUNBQWtCOztJQUNsQiw2Q0FBMEI7O0lBQzFCLG9DQUFrQjs7SUFDbEIseUNBQXNCOztJQUN0QiwwQ0FBd0I7O0lBQ3hCLHFDQUFrQjs7Ozs7QUFHcEIseUNBT0M7OztJQU5DLDBDQUFxQjs7SUFDckIseUNBQW9COztJQUNwQix3Q0FBbUI7O0lBQ25CLG1DQUFjOztJQUNkLGlDQUFZOztJQUNaLG1DQUFjOzs7OztBQUdoQiwrQ0FRQzs7O0lBUEMsOENBQW1COztJQUNuQixnREFBcUI7O0lBQ3JCLHVDQUFZOztJQUNaLHlDQUFjOztJQUNkLCtDQUFvQjs7SUFDcEIseUNBQWM7O0lBQ2QsZ0RBQXFCOzs7OztBQUd2Qiw0Q0FNQzs7O0lBTEMsMkNBQW1COztJQUNuQiw2Q0FBcUI7O0lBQ3JCLDBDQUFr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S0FBTywyQkFBMkIsR0FBYTs7SUFFbkQsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO0lBQ3ZGLFVBQVUsRUFBRSxtQ0FBbUM7Q0FDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBTa2lwU2VsZiwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWYW50YWdlUXVlcnlTZXJ2aWNlLCBJUXVlcnlSZXN1bHRTZXQsIElTUUxFQ29ubmVjdGlvbiB9IGZyb20gJy4vcXVlcnkuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBzeXNEYXRhYmFzZXM6IHN0cmluZ1tdID0gW1xuICAnREJDJyxcbiAgJ2RiY21uZ3InLFxuICAnU1FMSicsXG4gICdTeXN0ZW1GZScsXG4gICdTeXNBZG1pbicsXG4gICdTWVNCQVInLFxuICAnU1lTSkRCQycsXG4gICdTWVNMSUInLFxuICAnU1lTVURUTElCJyxcbiAgJ1RETWFwcycsXG4gICdURF9TRVJWRVJfREInLFxuICAnVERfU1lTRk5MSUInLFxuICAnVERfU1lTWE1MJyxcbiAgJ1N5c19DYWxlbmRhcicsXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEaWN0aW9uYXJ5U3lzdGVtIHtcbiAgaG9zdG5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1faWQ/OiBzdHJpbmc7XG4gIGxhc3RfcnVuPzogc3RyaW5nO1xuICBpbnRlcnZhbF9taW51dGVzPzogbnVtYmVyO1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgbGFzdF9hdHRlbXB0Pzogc3RyaW5nO1xuICBpbl9jb2xsZWN0aW9uPzogYm9vbGVhbjtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Rpb25hcnlEYXRhYmFzZSB7XG4gIHBhcmVudF9uYW1lPzogc3RyaW5nO1xuICBzaXplX2J5dGVzPzogbnVtYmVyO1xuICBzeXN0ZW1faWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWN0aW9uYXJ5RGF0YWJhc2VPYmplY3Qge1xuICBzeXN0ZW1faWQ/OiBzdHJpbmc7XG4gIGRhdGFiYXNlX2lkPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc2l6ZV9ieXRlcz86IG51bWJlcjtcbiAgdHlwZT86IHN0cmluZztcbiAgY3JlYXRlX3RleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpY3Rpb25hcnlUYWJsZUNvbHVtbiB7XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgZGF0YWJhc2VfaWQ/OiBzdHJpbmc7XG4gIHRhYmxlX2lkPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBGdW5jdGlvblR5cGVcbiAqIEEgLSBBZ2dyZWdhdGVcbiAqIEIgLSBBZ2dyZWdhdGUgYW5kIHN0YXRpc3RpY2FsXG4gKiBDIC0gQ29udHJhY3QgZnVuY3Rpb25cbiAqIEQgLSBFeHRlcm5hbCBzdG9yZWQgcHJvY2VkdXJlXG4gKiBGIC0gU2NhbGFyXG4gKiBIIC0gVXNlciBkZWZpbmVkIG1ldGhvZFxuICogSSAtIEludGVybmFsIHR5cGUgbWV0aG9kXG4gKiBMIC0gVGFibGUgb3BlcmF0b3JcbiAqIFIgLSBUYWJsZSBGdW5jdGlvblxuICogUyAtIFN0YXRpc3RpY2FsXG4gKi9cblxuLyoqXG4gKiBUYWJsZUtpbmQgZm9yIGRiYy50YWJsZXN2eDtcbiAqIEEgLSBBZ2dyZWdhdGUgZnVuY3Rpb25cbiAqIEIgLSBDb21iaW5lZCBhZ2dyZWdhdGUgYW5kIG9yZGVyZWQgYW5hbHl0aWNhbCBmdW5jdGlvblxuICogQyAtIFRhYmxlIG9wZXJhdG9yIHBhcnNlciBjb250cmFjdCBmdW5jdGlvblxuICogRCAtIEpBUlxuICogRSAtIEV4dGVybmFsIFN0b3JlZCBQcm9jZWR1cmVcbiAqIEYgLSBTdGFuZGFyZCBGdW5jdGlvblxuICogRyAtIFRyaWdnZXJcbiAqIEggLSBJbnN0YW5jZSBvciBjb250cnVjdG9yIG1ldGhvZFxuICogSSAtIEpvaW4gSW5kZXhcbiAqIEogLSBKb3VybmFsXG4gKiBLIC0gRm9yZWlnbiBTZXJ2ZXIgT2JqZWN0XG4gKiBMIC0gVXNlciBkZWZpbmVkIHRhYmxlIG9wZXJhdG9yXG4gKiBNIC0gTWFjcm9cbiAqIE4gLSBIYXNoIGluZGV4XG4gKiBPIC0gVGFibGUgd2l0aCBubyBwcmltYXJ5IGluZGV4IGFuZCBubyBwYXJ0aXRpb25pbmdcbiAqIFAgLSBTdG9yZWQgUHJvY2VkdXJlXG4gKiBRIC0gUXVldWUgdGFibGVcbiAqIFIgLSBUYWJsZSBmdW5jdGlvblxuICogUyAtIE9yZGVyZWQgQW5hbHl0aWNhbCBmdW5jdGlvblxuICogVCAtIHRhYmxlIHdpdGggYSBwcmltYXJ5IGluZGV4IG9yIHByaW1hcnkgQU1QIGluZGV4LCBwYXJ0aXRpb25pbmcgb3IgYm90aC4gT3IgYSBwYXJ0aW9uZWQgdGFibGUgd2l0aCBOb1BJO1xuICogVSAtIFVzZXIgZGVmaW5lZCB0eXBlXG4gKiBWIC0gVmlld1xuICogWCAtIEF1dGhvcml6YXRpb25cbiAqIFkgLSBHTE9QIHNldFxuICogWiAtIFVJRiAtIFVzZXIgSW5zdGFsbGVkIEZpbGVcbiAqIDEgLSBBIERBVEFTRVQgc2NoZW1hIG9iamVjdCBjcmVhdGVkIGJ5IENSRUFURSBTQ0hFTUFcbiAqIDIgLSBGdW5jdG9uIGFsaWFzIG9iamVjdFxuICovXG5cbi8qKlxuICogZGJjLmV4dGVybmFsU1BzXG4gKiBkYmMuc2Vzc2lvbkluZm92eFxuICovXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlRGljdGlvbmFyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UpIHt9XG5cbiAgZ2V0Vmlld0hlbHAoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZTogc3RyaW5nLCB2aWV3OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBMT0NLIFJPVyBGT1IgQUNDRVNTXG4gICAgICBTRUxFQ1QgQ0FTVChDT1VOVCgqKSBBUyBCSUdJTlQpIGFzIGNudFxuICAgICAgRlJPTSAke2RhdGFiYXNlfS4ke3ZpZXd9O1xuICAgICAgU0hPVyBWSUVXICR7ZGF0YWJhc2V9LiR7dmlld307XG4gICAgYDtcblxuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2UuZ2V0Vmlld0luZm8oY29ubmVjdGlvbiwgZGF0YWJhc2UsIHZpZXcpLnBpcGUoXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQuY29sdW1ucy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbW1lbnQ6IGNvbHVtbi5yZW1hcmtzLFxuICAgICAgICAgICAgdHlwZTogJ2NvbHVtbicsXG4gICAgICAgICAgICBjb2x1bW5UeXBlOiBjb2x1bW4udHlwZSxcbiAgICAgICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICAgICAgZGF0YWJhc2U6IHJlc3VsdFNldC5kYXRhYmFzZSxcbiAgICAgICAgICAgIHRhYmxlOiByZXN1bHRTZXQubmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgc3dpdGNoTWFwKCh2aWV3SW5mbzogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBkZGxTdGF0ZW1lbnQ6IHN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICByZXN1bHRTZXQucmVzdWx0c1sxXS5kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgZGRsU3RhdGVtZW50ICs9IHJvd1snUmVxdWVzdCBUZXh0J107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBsZXQgY291bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gcm93LmNudDtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY29uc3QgY29sdW1uczogYW55W10gPSB2aWV3SW5mby5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgICAgICAgICAgdHlwZTogcm93LmNvbHVtblR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhYmFzZSxcbiAgICAgICAgICAgICAgICB2aWV3LFxuICAgICAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgZGRsU3RhdGVtZW50LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRUYWJsZUhlbHAoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZTogc3RyaW5nLCB0YWJsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgTE9DSyBST1cgRk9SIEFDQ0VTU1xuICAgICAgU0VMRUNUIENBU1QoQ09VTlQoKikgQVMgQklHSU5UKSBhcyBjbnRcbiAgICAgIEZST00gJHtkYXRhYmFzZX0uJHt0YWJsZX07XG4gICAgICBTSE9XIFRBQkxFICR7ZGF0YWJhc2V9LiR7dGFibGV9O1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZS5nZXRUYWJsZUluZm8oY29ubmVjdGlvbiwgZGF0YWJhc2UsIHRhYmxlKS5waXBlKFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0LmNvbHVtbnMubWFwKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb21tZW50OiBjb2x1bW4ucmVtYXJrcyxcbiAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nLFxuICAgICAgICAgICAgY29sdW1uVHlwZTogY29sdW1uLnR5cGUsXG4gICAgICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgICAgIGRhdGFiYXNlOiByZXN1bHRTZXQuZGF0YWJhc2UsXG4gICAgICAgICAgICB0YWJsZTogcmVzdWx0U2V0Lm5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIHN3aXRjaE1hcCgoaW5mbzogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBkZGxTdGF0ZW1lbnQ6IHN0cmluZyA9ICcnO1xuICAgICAgICAgICAgICByZXN1bHRTZXQucmVzdWx0c1sxXS5kYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgZGRsU3RhdGVtZW50ICs9IHJvd1snUmVxdWVzdCBUZXh0J107XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBsZXQgY291bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gcm93LmNudDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnM6IGFueVtdID0gaW5mby5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgICAgICAgICAgdHlwZTogcm93LmNvbHVtblR5cGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YWJhc2UsXG4gICAgICAgICAgICAgICAgdGFibGUsXG4gICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBkZGxTdGF0ZW1lbnQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGFiYXNlRnVuY3Rpb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBmdW5jTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgSEVMUCAnU1FMICR7ZnVuY05hbWV9JztcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9IHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvd1snT24tTGluZSBIZWxwJ107XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHN0cmluZ0FycmF5LmpvaW4oJyAnKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0RGF0YWJhc2VGdW5jdGlvbnMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgSEVMUCAnU1FMJztcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0cmluZ0FycmF5OiBzdHJpbmdbXSA9IHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJvd1snT24tTGluZSBIZWxwJ107XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHNxbEhlbHA6IHN0cmluZyA9IHN0cmluZ0FycmF5LmpvaW4oJyAnKTtcbiAgICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gc3FsSGVscC5pbmRleE9mKCdGVU5DVElPTlMnKSArIDEyO1xuICAgICAgICAgIHNxbEhlbHAgPSBzcWxIZWxwLnN1YnN0cihpbmRleCwgc3FsSGVscC5sZW5ndGgpO1xuICAgICAgICAgIHJldHVybiBzcWxIZWxwXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLmZpbHRlcigoZnVuYzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoKGZ1bmM6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZ1bmMsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0QW5hbHl0aWNhbEZ1bmN0aW9ucyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQIEZPUkVJR04gU0NIRU1BIFwicHVibGljXCJAY29wcm9jZXNzb3I7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiByb3cub2JqZWN0bmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldEFuYWx5dGljYWxGdW5jdGlvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGFuYWx5dGljYWxGdW5jdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgSEVMUCBGT1JFSUdOIEZVTkNUSU9OIFwicHVibGljXCIuXCIke2FuYWx5dGljYWxGdW5jdGlvbn1cIkBjb3Byb2Nlc3NvcjtcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIGxldCBmdW5jdGlvbk5hbWU6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGxldCBzaG9ydERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBsZXQgbG9uZ0Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBsZXQgdXNhZ2VTeW50YXg6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGxldCBpbnB1dENvbHVtbnM6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGxldCBvdXRwdXRDb2x1bW5zOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBjb25zdCBmdW5jdGlvbk93bmVyOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBjb25zdCBjcmVhdGlvblRpbWU6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uVmVyc2lvbjogc3RyaW5nID0gJyc7XG4gICAgICAgICAgY29uc3QgaW50ZXJmYWNlc0ltcGxlbWVudGVkOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICBjb25zdCBzdHJpbmdBcnJheTogc3RyaW5nW10gPSByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByb3dbJ0Z1bmN0aW9uIEhlbHAnXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCBzdHJpbmdBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBzdHJpbmdBcnJheVtpbmRleF07XG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZignRnVuY3Rpb24gTmFtZTonKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGZvciAoaW5kZXgrKzsgaW5kZXggPCBzdHJpbmdBcnJheS5pbmRleE9mKCcnKTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSArPSBzdHJpbmdBcnJheVtpbmRleF0gKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdTaG9ydCBEZXNjcmlwdGlvbjonKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGZvciAoaW5kZXgrKzsgaW5kZXggPCBzdHJpbmdBcnJheS5pbmRleE9mKCcnKTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHNob3J0RGVzY3JpcHRpb24gKz0gc3RyaW5nQXJyYXlbaW5kZXhdICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaW5kZXhPZignTG9uZyBEZXNjcmlwdGlvbjonKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGZvciAoaW5kZXgrKzsgaW5kZXggPCBzdHJpbmdBcnJheS5pbmRleE9mKCcnKTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxvbmdEZXNjcmlwdGlvbiArPSBzdHJpbmdBcnJheVtpbmRleF0gKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdVc2FnZSBTeW50YXg6JykgPiAtMSkge1xuICAgICAgICAgICAgICBmb3IgKGluZGV4Kys7IGluZGV4IDwgc3RyaW5nQXJyYXkuaW5kZXhPZignJyk7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB1c2FnZVN5bnRheCArPSBzdHJpbmdBcnJheVtpbmRleF0gKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCdJbnB1dCBDb2x1bW5zOicpID4gLTEpIHtcbiAgICAgICAgICAgICAgZm9yIChpbmRleCsrOyBpbmRleCA8IHN0cmluZ0FycmF5LmluZGV4T2YoJycpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRDb2x1bW5zICs9IHN0cmluZ0FycmF5W2luZGV4XSArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmluZGV4T2YoJ091dHB1dCBDb2x1bW5zOicpID4gLTEpIHtcbiAgICAgICAgICAgICAgZm9yIChpbmRleCsrOyBpbmRleCA8IHN0cmluZ0FycmF5LmluZGV4T2YoJycpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0Q29sdW1ucyArPSBzdHJpbmdBcnJheVtpbmRleF0gKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gRnVuY3Rpb24gT3duZXI6XG4gICAgICAgICAgICAgIC8vIENyZWF0aW9uIFRpbWU6XG4gICAgICAgICAgICAgIC8vIEZ1bmN0aW9uIFZlcnNpb246XG4gICAgICAgICAgICAgIC8vIEludGVyZmFjZXMgSW1wbGVtZW50ZWQ6XG4gICAgICAgICAgICAgIGlmIChzdHJpbmdBcnJheS5pbmRleE9mKCcnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBzdHJpbmdBcnJheS5pbmRleE9mKCcnKTtcbiAgICAgICAgICAgICAgICBzdHJpbmdBcnJheVtpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBsb25nRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB1c2FnZVN5bnRheCxcbiAgICAgICAgICAgIGlucHV0Q29sdW1ucyxcbiAgICAgICAgICAgIG91dHB1dENvbHVtbnMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgcmVzdWx0U2V0UHJlZGljYXRlKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KTogYW55IHtcbiAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiByb3cuVGFibGVOYW1lLFxuICAgICAgICByZXF1ZXN0VGV4dDogcm93LlJlcXVlc3RUZXh0LFxuICAgICAgICBjb21tZW50OiByb3cuQ29tbWVudFN0cmluZyxcbiAgICAgICAga2luZDogcm93LlRhYmxlS2luZCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRTdG9yZWRQcm9jZWR1cmVzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIFNFTEVDVCBEYXRhQmFzZU5hbWUsIFRhYmxlTmFtZSwgVGFibGVLaW5kLCBSZXF1ZXN0VGV4dCwgQ29tbWVudFN0cmluZyBGUk9NIGRiYy50YWJsZXN2eFxuICAgICAgV0hFUkUgVGFibGVLaW5kID0gJ1AnXG4gICAgICBPUkRFUiBCWSBUYWJsZU5hbWUgQVNDO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcCh0aGlzLnJlc3VsdFNldFByZWRpY2F0ZSkpO1xuICB9XG5cbiAgZ2V0RXh0ZXJuYWxTdG9yZWRQcm9jZWR1cmVzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIFNFTEVDVCBEYXRhQmFzZU5hbWUsIFRhYmxlTmFtZSwgVGFibGVLaW5kLCBSZXF1ZXN0VGV4dCwgQ29tbWVudFN0cmluZyBGUk9NIGRiYy50YWJsZXN2eFxuICAgICAgV0hFUkUgVGFibGVLaW5kID0gJ0UnXG4gICAgICBPUkRFUiBCWSBUYWJsZU5hbWUgQVNDO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcCh0aGlzLnJlc3VsdFNldFByZWRpY2F0ZSkpO1xuICB9XG5cbiAgZ2V0TWFjcm9zKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIFNFTEVDVCBEYXRhQmFzZU5hbWUsIFRhYmxlTmFtZSwgVGFibGVLaW5kLCBSZXF1ZXN0VGV4dCwgQ29tbWVudFN0cmluZyBGUk9NIGRiYy50YWJsZXN2eFxuICAgICAgV0hFUkUgVGFibGVLaW5kID0gJ00nXG4gICAgICBPUkRFUiBCWSBUYWJsZU5hbWUgQVNDO1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcCh0aGlzLnJlc3VsdFNldFByZWRpY2F0ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb25zdnhQcmVkaWNhdGUocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpOiBhbnkge1xuICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFiYXNlOiByb3cuRGF0YWJhc2VOYW1lLFxuICAgICAgICBuYW1lOiByb3cuU3BlY2lmaWNOYW1lLFxuICAgICAgICBwYXJhbU51bWJlcjogcm93Lk51bVBhcmFtZXRlcnMsXG4gICAgICAgIHBhcmFtRGF0YVR5cGVzOiByb3cuUGFyYW1ldGVyRGF0YVR5cGVzLFxuICAgICAgICByZXF1ZXN0VGV4dDogcm93LlJlcXVlc3RUZXh0LFxuICAgICAgICBjb21tZW50U3RyaW5nOiByb3cuQ29tbWVudFN0cmluZyxcbiAgICAgICAga2luZDogcm93LlRhYmxlS2luZCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRUYWJsZU9wZXJhdG9ycyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBTRUxFQ1QgZnVuYy5EYXRhYmFzZU5hbWUsIGZ1bmMuRnVuY3Rpb25OYW1lLCBmdW5jLlNwZWNpZmljTmFtZSwgZnVuYy5OdW1QYXJhbWV0ZXJzLFxuICAgICAgZnVuYy5QYXJhbWV0ZXJEYXRhVHlwZXMsIHRibC5SZXF1ZXN0VGV4dCwgdGJsLkNvbW1lbnRTdHJpbmcsIHRibC5UYWJsZUtpbmRcbiAgICAgIEZST00gZGJjLmZ1bmN0aW9uc3Z4IGFzIGZ1bmNcbiAgICAgIElOTkVSIEpPSU4gZGJjLnRhYmxlc3Z4IGFzIHRibFxuICAgICAgT04gdGJsLlRhYmxlTmFtZSA9IGZ1bmMuU3BlY2lmaWNOYW1lXG4gICAgICBBTkQgdGJsLkRhdGFCYXNlTmFtZSA9IGZ1bmMuRGF0YWJhc2VOYW1lXG4gICAgICBXSEVSRSBGdW5jdGlvblR5cGUgPSAnTCdcbiAgICAgIE9SREVSIEJZIGZ1bmMuRnVuY3Rpb25OYW1lIEFTQztcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShtYXAodGhpcy5mdW5jdGlvbnN2eFByZWRpY2F0ZSkpO1xuICB9XG5cbiAgZ2V0VGFibGVGdW5jdGlvbnMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgU0VMRUNUIGZ1bmMuRGF0YWJhc2VOYW1lLCBmdW5jLkZ1bmN0aW9uTmFtZSwgZnVuYy5TcGVjaWZpY05hbWUsIGZ1bmMuTnVtUGFyYW1ldGVycyxcbiAgICAgIGZ1bmMuUGFyYW1ldGVyRGF0YVR5cGVzLCB0YmwuUmVxdWVzdFRleHQsIHRibC5Db21tZW50U3RyaW5nLCB0YmwuVGFibGVLaW5kXG4gICAgICBGUk9NIGRiYy5mdW5jdGlvbnN2eCBhcyBmdW5jXG4gICAgICBJTk5FUiBKT0lOIGRiYy50YWJsZXN2eCBhcyB0YmxcbiAgICAgIE9OIHRibC5UYWJsZU5hbWUgPSBmdW5jLlNwZWNpZmljTmFtZVxuICAgICAgQU5EIHRibC5EYXRhQmFzZU5hbWUgPSBmdW5jLkRhdGFiYXNlTmFtZVxuICAgICAgV0hFUkUgRnVuY3Rpb25UeXBlID0gJ1InXG4gICAgICBPUkRFUiBCWSBmdW5jLkZ1bmN0aW9uTmFtZSBBU0M7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHRoaXMuZnVuY3Rpb25zdnhQcmVkaWNhdGUpKTtcbiAgfVxuXG4gIGdldEZvcmVpZ25TZXJ2ZXJzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgU0VMRUNUIFRhYmxlTmFtZSwgVGFibGVLaW5kIEZST00gREJDLlRBQkxFU1ZYXG4gICAgICBXSEVSRSBEQVRBQkFTRU5BTUUgPSAnVERfU0VSVkVSX0RCJyBBTkRcbiAgICAgIFRBQkxFS0lORCA9ICdLJyBBTkRcbiAgICAgIFRhYmxlTmFtZSA8PiAnY29wcm9jZXNvcic7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiByb3cuVGFibGVOYW1lLFxuICAgICAgICAgICAgICBraW5kOiByb3cuVGFibGVLaW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgZ2V0Rm9yZWlnblNjaGVtYXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBmb3JlaWduU2VydmVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgcXVlcnlTdHI6IHN0cmluZyA9IGBcbiAgICAgIEhFTFAgRk9SRUlHTiBTRVJWRVIgJHtmb3JlaWduU2VydmVyfTtcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiB7IFNjaGVtYTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6IHJvdy5TY2hlbWEsXG4gICAgICAgICAgICAgIGtpbmQ6ICdOT05FJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldEZvcmVpZ25UYWJsZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBmb3JlaWduU2VydmVyOiBzdHJpbmcsIHNjaGVtYTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQIEZPUkVJR04gREFUQUJBU0UgXCIke3NjaGVtYX1cIkAke2ZvcmVpZ25TZXJ2ZXJ9O1xuICAgIGA7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IHsgVGFibGU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiByb3cuVGFibGUsXG4gICAgICAgICAgICAgIGtpbmQ6ICdOT05FJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldEZvcmVpZ25Db2x1bW5zKFxuICAgIGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbixcbiAgICBmb3JlaWduU2VydmVyOiBzdHJpbmcsXG4gICAgc2NoZW1hOiBzdHJpbmcsXG4gICAgdGFibGU6IHN0cmluZyxcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPSBgXG4gICAgICBIRUxQIEZPUkVJR04gVEFCTEUgXCIke3NjaGVtYX1cIi5cIiR7dGFibGV9XCJAJHtmb3JlaWduU2VydmVyfTtcbiAgICBgO1xuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVN0cixcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQucmVzdWx0c1swXS5kYXRhLm1hcCgocm93OiB7IENvbHVtbjogc3RyaW5nOyBUeXBlOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogcm93LkNvbHVtbixcbiAgICAgICAgICAgICAgdHlwZTogcm93LlR5cGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBnZXREYXRhYmFzZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyOiBzdHJpbmcgPVxuICAgICAgJ1NFTEVDVCBkYXRhYmFzZW5hbWUsIFBlcm1TcGFjZSwgU3Bvb2xTcGFjZSwgVGVtcFNwYWNlLCBDb21tZW50U3RyaW5nLCBEQktpbmQgRlJPTSBkYmMuZGF0YWJhc2VzVlggT1JERVIgQlkgZGF0YWJhc2VuYW1lOyc7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFNldC5yZXN1bHRzWzBdLmRhdGEubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogcm93LkRhdGFiYXNlTmFtZSB8fCByb3cuc2NoZW1hbmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogcm93LkRCS2luZCA9PT0gJ1UnID8gJ3VzZXInIDogJ2RhdGFiYXNlJyxcbiAgICAgICAgICAgICAgcGVybVNwYWNlOiByb3cuUGVybVNwYWNlLFxuICAgICAgICAgICAgICBzcG9vbFNwYWNlOiByb3cuU3Bvb2xTcGFjZSxcbiAgICAgICAgICAgICAgdGVtcFNwYWNlOiByb3cuVGVtcFNwYWNlLFxuICAgICAgICAgICAgICBjb21tZW50OiByb3cuQ29tbWVudFN0cmluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgfVxuXG4gIGdldERhdGFiYXNlT2JqZWN0cyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFNFTEVDVCBEYXRhQmFzZU5hbWUsIFRhYmxlTmFtZSwgVGFibGVLaW5kLCBDb21tZW50U3RyaW5nIEZST00gZGJjLnRhYmxlc3Z4XG4gICAgICAgV0hFUkUgVGFibGVLaW5kIGluICgnVCcsICdPJywgJ1YnKSBBTkQgRGF0YUJhc2VOYW1lID0gJyR7ZGF0YWJhc2VJZH0nIE9SREVSIEJZIFRhYmxlTmFtZSBBU0M7YDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlOiBzdHJpbmcgPSByb3cuVGFibGVLaW5kIHx8IHJvdy50YWJsZWtpbmQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBraW5kOiByb3cuVGFibGVLaW5kIHx8IHJvdy50YWJsZWtpbmQsXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUgPT09ICdWJyA/ICd2aWV3JyA6ICd0YWJsZScsXG4gICAgICAgICAgICAgIG5hbWU6IHJvdy5UYWJsZU5hbWUgfHwgcm93LnRhYmxlbmFtZSxcbiAgICAgICAgICAgICAgZGF0YWJhc2U6IHJvdy5EYXRhQmFzZU5hbWUgfHwgcm93LmRhdGFiYXNlbmFtZSxcbiAgICAgICAgICAgICAgY29tbWVudDogcm93LkNvbW1lbnRTdHJpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cblxuICBnZXRUYWJsZUNvbHVtbnModHlwZTogc3RyaW5nLCBjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlSWQ6IHN0cmluZywgdGFibGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5U2VydmljZS5nZXRUYWJsZUluZm8oY29ubmVjdGlvbiwgZGF0YWJhc2VJZCwgdGFibGVJZCkucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHRTZXQuY29sdW1ucy5tYXAoKGNvbHVtbjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjb21tZW50OiBjb2x1bW4ucmVtYXJrcyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIGNvbHVtblR5cGU6IGNvbHVtbi50eXBlLFxuICAgICAgICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcbiAgICAgICAgICAgICAgZGF0YWJhc2U6IHJlc3VsdFNldC5kYXRhYmFzZSxcbiAgICAgICAgICAgICAgdGFibGU6IHJlc3VsdFNldC5uYW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZpZXcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLmdldFZpZXdJbmZvKGNvbm5lY3Rpb24sIGRhdGFiYXNlSWQsIHRhYmxlSWQpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LmNvbHVtbnMubWFwKChjb2x1bW46IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY29tbWVudDogY29sdW1uLnJlbWFya3MsXG4gICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBjb2x1bW5UeXBlOiBjb2x1bW4udHlwZSxcbiAgICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgICAgICAgIGRhdGFiYXNlOiByZXN1bHRTZXQuZGF0YWJhc2UsXG4gICAgICAgICAgICAgIHRhYmxlOiByZXN1bHRTZXQubmFtZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2goXG4gICAgY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLFxuICAgIHNlYXJjaFN0cjogc3RyaW5nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGRhdGFiYXNlczogYm9vbGVhbjtcbiAgICAgIG9iamVjdHM6IGJvb2xlYW47XG4gICAgICBjb2x1bW5zOiBib29sZWFuO1xuICAgIH0gPSB7XG4gICAgICBkYXRhYmFzZXM6IHRydWUsXG4gICAgICBvYmplY3RzOiB0cnVlLFxuICAgICAgY29sdW1uczogdHJ1ZSxcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgY29uc3QgcXVlcmllczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAob3B0aW9ucy5kYXRhYmFzZXMpIHtcbiAgICAgIGNvbnN0IGRiUXVlcnk6IHN0cmluZyA9IGBcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgICBEYXRhYmFzZU5hbWUgYXMgb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICdkYXRhYmFzZScgYXMgb2JqZWN0VHlwZSxcbiAgICAgICAgICAgIERCS2luZCBhcyBraW5kLFxuICAgICAgICAgICAgQ29tbWVudFN0cmluZ1xuICAgICAgICBGUk9NIGRiYy5kYXRhYmFzZXN2eFxuICAgICAgICBXSEVSRSBEYXRhYmFzZU5hbWUgTElLRSAnJSR7c2VhcmNoU3RyfSUnXG4gICAgICAgIEFORCBEYXRhQmFzZU5hbWUgTk9UIElOICgnJHtzeXNEYXRhYmFzZXMuam9pbihcIicsICdcIil9JylcbiAgICAgIGA7XG4gICAgICBxdWVyaWVzLnB1c2goZGJRdWVyeSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9iamVjdHMpIHtcbiAgICAgIGNvbnN0IG9iamVjdFF1ZXJ5OiBzdHJpbmcgPSBgXG4gICAgICAgIFNFTEVDVFxuICAgICAgICAgICAgRGF0YUJhc2VOYW1lIHx8ICd+fH4nIHx8IFRhYmxlTmFtZSBhcyBvYmplY3ROYW1lLFxuICAgICAgICAgICAgJ29iamVjdCcgYXMgb2JqZWN0VHlwZSxcbiAgICAgICAgICAgIFRhYmxlS2luZCBhcyBraW5kLFxuICAgICAgICAgICAgQ29tbWVudFN0cmluZ1xuICAgICAgICBGUk9NIGRiYy50YWJsZXN2eFxuICAgICAgICBXSEVSRSBUYWJsZUtpbmQgaW4gKCdUJywgJ08nLCAnVicpXG4gICAgICAgIEFORCBUYWJsZU5hbWUgTElLRSAnJSR7c2VhcmNoU3RyfSUnXG4gICAgICAgIEFORCBEYXRhQmFzZU5hbWUgTk9UIElOICgnJHtzeXNEYXRhYmFzZXMuam9pbihcIicsICdcIil9JylcbiAgICAgIGA7XG4gICAgICBxdWVyaWVzLnB1c2gob2JqZWN0UXVlcnkpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vYmplY3RzKSB7XG4gICAgICBjb25zdCBjb2x1bW5RdWVyeTogc3RyaW5nID0gYFxuICAgICAgICBTRUxFQ1RcbiAgICAgICAgICAgIERhdGFCYXNlTmFtZSB8fCAnfnx+JyB8fCBUYWJsZU5hbWUgfHwgJ358ficgfHwgQ29sdW1uTmFtZSBhcyBvYmplY3ROYW1lLFxuICAgICAgICAgICAgJ2NvbHVtbicgYXMgb2JqZWN0VHlwZSxcbiAgICAgICAgICAgIENvbHVtblR5cGUgYXMga2luZCxcbiAgICAgICAgICAgIENvbW1lbnRTdHJpbmdcbiAgICAgICAgRlJPTSBkYmMuY29sdW1uc1ZYXG4gICAgICAgIFdIRVJFIGNvbHVtbm5hbWUgTElLRSAnJSR7c2VhcmNoU3RyfSUnXG4gICAgICAgIEFORCBEYXRhQmFzZU5hbWUgTk9UIElOICgnJHtzeXNEYXRhYmFzZXMuam9pbihcIicsICdcIil9JylcbiAgICAgIGA7XG4gICAgICBxdWVyaWVzLnB1c2goY29sdW1uUXVlcnkpO1xuICAgIH1cbiAgICBjb25zdCB1bmlvbkpvaW46IHN0cmluZyA9IHF1ZXJpZXMuam9pbignVU5JT04nKTtcbiAgICBjb25zdCBxdWVyeVN0cjogc3RyaW5nID0gYFxuICAgICAgV0lUSCBxdWlja19zZWFyY2ggQVMgKFxuICAgICAgICAgICR7dW5pb25Kb2lufVxuICAgICAgKVxuICAgICAgU0VMRUNUICogRlJPTSBxdWlja19zZWFyY2hcbiAgICAgIE9SREVSIEJZIDFcbiAgICAgIFNBTVBMRSAxMDA7XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwge1xuICAgICAgICBxdWVyeTogcXVlcnlTdHIsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0U2V0LnJlc3VsdHNbMF0uZGF0YS5tYXAoKHJvdzogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQga2luZDogc3RyaW5nID0gcm93LmtpbmQ7XG4gICAgICAgICAgICAvLyBtYXAgdG8gcHJvcGVyIHR5cGUva2luZFxuICAgICAgICAgICAgaWYgKHJvdy5vYmplY3RUeXBlID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICBraW5kID0gJ2NvbHVtbic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJvdy5vYmplY3RUeXBlID09PSAnZGF0YWJhc2UnKSB7XG4gICAgICAgICAgICAgIGtpbmQgPSBraW5kID09PSAnRCcgPyAnZGF0YWJhc2UnIDogJ3VzZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAga2luZCA9IGtpbmQgPT09ICdWJyA/ICd2aWV3JyA6ICd0YWJsZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnQ6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICAvLyBzcGxpdCBuYW1lIGFuZCBwYXJlbnRzLi5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVTcGxpdDogc3RyaW5nW10gPSByb3cub2JqZWN0TmFtZS5zcGxpdCgnfnx+Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCBuYW1lU3BsaXQubGVuZ3RoIC0gMTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBuZXdQYXJlbnQucHVzaCgnXCInICsgbmFtZVNwbGl0W2luZGV4XSArICdcIicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgcGFyZW50OiBuZXdQYXJlbnQuam9pbignLicpLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lU3BsaXRbbmFtZVNwbGl0Lmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICB0eXBlOiByb3cub2JqZWN0VHlwZSxcbiAgICAgICAgICAgICAgY29tbWVudDogcm93LkNvbW1lbnRTdHJpbmcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfRElDVElPTkFSWV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VEaWN0aW9uYXJ5U2VydmljZSxcbiAgcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuKTogVmFudGFnZURpY3Rpb25hcnlTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZURpY3Rpb25hcnlTZXJ2aWNlKHF1ZXJ5U2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0RJQ1RJT05BUllfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlRGljdGlvbmFyeVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlRGljdGlvbmFyeVNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9ESUNUSU9OQVJZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19