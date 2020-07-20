/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { TdHttpService } from '@covalent/http';
/** @enum {string} */
var QueryResultColumnTypes = {
    // Array
    'ARRAY': 'ARRAY',
    'VARRAY': 'VARRAY',
    // Byte
    'BLOB': 'BLOB',
    'BYTE': 'BYTE',
    'VARBYTE': 'VARBYTE',
    // Numeric
    'BIGINT': 'BIGINT',
    'BYTEINT': 'BYTEINT',
    'DECIMAL': 'DECIMAL',
    'DOUBLE PRECISION': 'DOUBLE PRECISION',
    'FLOAT': 'FLOAT',
    'INTEGER': 'INTEGER',
    'NUMBER': 'NUMBER',
    'NUMERIC': 'NUMERIC',
    'REAL': 'REAL',
    'SMALLINT': 'SMALLINT',
    // DateTIme
    'DATE': 'DATE',
    'TIME': 'TIME',
    'TIMESTAMP': 'TIMESTAMP',
    'TIME WITH TIME ZONE': 'TIME WITH TIME ZONE',
    'TIMESTAMP WITH TIME ZONE': 'TIMESTAMP WITH TIME ZONE',
    // Interval
    'INTERVAL': 'INTERVAL',
    'INTERVAL DAY': 'INTERVAL DAY',
    'INTERVAL DAY TO HOUR': 'INTERVAL DAY TO HOUR',
    'INTERVAL DAY TO MINUTE': 'INTERVAL DAY TO MINUTE',
    'INTERVAL DAY TO SECOND': 'INTERVAL DAY TO SECOND',
    'INTERVAL HOUR': 'INTERVAL HOUR',
    'INTERVAL HOUR TO MINUTE': 'INTERVAL HOUR TO MINUTE',
    'INTERVAL HOUR TO SECOND': 'INTERVAL HOUR TO SECOND',
    'INTERVAL MINUTE': 'INTERVAL MINUTE',
    'INTERVAL MINUTE TO SECOND': 'INTERVAL MINUTE TO SECOND',
    'INTERVAL MONTH': 'INTERVAL MONTH',
    'INTERVAL SECOND': 'INTERVAL SECOND',
    'INTERVAL YEAR': 'INTERVAL YEAR',
    'INTERVAL YEAR TO MONTH': 'INTERVAL YEAR TO MONTH',
    // Character
    'CHAR': 'CHAR',
    'CHARACTER': 'CHARACTER',
    'CHARACTER SET GRAPHIC': 'CHARACTER SET GRAPHIC',
    'CLOB': 'CLOB',
    'CHAR VARYING': 'CHAR VARYING',
    'LONG VARCHAR': 'LONG VARCHAR',
    'VARCHAR': 'VARCHAR',
    // Period
    'PERIOD': 'PERIOD',
    // UDT
    'udt_name': 'udt_name',
    // Parameter
    'TD_ANYTYPE': 'TD_ANYTYPE',
    'VARIANT_TYPE': 'VARIANT_TYPE',
};
export { QueryResultColumnTypes };
/**
 * @record
 */
export function IQueryPayload() { }
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
    IQueryPayload.prototype.outputNumbersAsStrings;
    /** @type {?|undefined} */
    IQueryPayload.prototype.spooledResultSet;
    /** @type {?|undefined} */
    IQueryPayload.prototype.clientId;
}
/**
 * @record
 */
export function IQueryResultSet() { }
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
export function IQueryResultData() { }
/**
 * @record
 */
export function IQueryResultSetResult() { }
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
export function IQueryResultSetColumn() { }
if (false) {
    /** @type {?} */
    IQueryResultSetColumn.prototype.name;
    /** @type {?} */
    IQueryResultSetColumn.prototype.type;
}
/**
 * @record
 */
export function IQueryInfo() { }
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
export function ISQLEConnection() { }
if (false) {
    /** @type {?} */
    ISQLEConnection.prototype.system;
    /** @type {?|undefined} */
    ISQLEConnection.prototype.creds;
}
/**
 * @record
 */
export function ISessionPayload() { }
if (false) {
    /** @type {?} */
    ISessionPayload.prototype.autoCommit;
    /** @type {?} */
    ISessionPayload.prototype.transactionMode;
    /** @type {?} */
    ISessionPayload.prototype.charSet;
    /** @type {?|undefined} */
    ISessionPayload.prototype.defaultDatabase;
    /** @type {?|undefined} */
    ISessionPayload.prototype.logMech;
}
var VantageQueryService = /** @class */ (function () {
    function VantageQueryService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} connection
     * @param {?} payload
     * @return {?}
     */
    VantageQueryService.prototype.querySystem = /**
     * @param {?} connection
     * @param {?} payload
     * @return {?}
     */
    function (connection, payload) {
        var _a, _b, _c;
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            /** @type {?} */
            var attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
            payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        payload.clientId = 'VANTAGE.EDITOR';
        /** @type {?} */
        var request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/queries', payload, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} tableName
     * @return {?}
     */
    VantageQueryService.prototype.getTableInfo = /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} tableName
     * @return {?}
     */
    function (connection, databaseName, tableName) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.get("/api/query/systems/" + connection.system.nickname + "/databases/" + databaseName + "/tables/" + tableName, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} viewName
     * @return {?}
     */
    VantageQueryService.prototype.getViewInfo = /**
     * @param {?} connection
     * @param {?} databaseName
     * @param {?} viewName
     * @return {?}
     */
    function (connection, databaseName, viewName) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.get("/api/query/systems/" + connection.system.nickname + "/databases/" + databaseName + "/views/" + viewName, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} requestId
     * @return {?}
     */
    VantageQueryService.prototype.getQuery = /**
     * @param {?} connection
     * @param {?} requestId
     * @return {?}
     */
    function (connection, requestId) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + requestId, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    VantageQueryService.prototype.getQueries = /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    function (connection, sessionId) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries?session=' + sessionId, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    VantageQueryService.prototype.getQueryResult = /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    function (connection, queryId) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId + '/results', { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    VantageQueryService.prototype.deleteQuery = /**
     * @param {?} connection
     * @param {?} queryId
     * @return {?}
     */
    function (connection, queryId) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?=} payload
     * @return {?}
     */
    VantageQueryService.prototype.createSession = /**
     * @param {?} connection
     * @param {?=} payload
     * @return {?}
     */
    function (connection, payload) {
        if (payload === void 0) { payload = { autoCommit: 'true', transactionMode: 'TERA', charSet: 'UTF8' }; }
        var _a, _b, _c;
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            /** @type {?} */
            var attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
            payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
        }
        else {
            payload.logMech = 'JWT';
        }
        /** @type {?} */
        var request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions', payload, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    VantageQueryService.prototype.deleteSession = /**
     * @param {?} connection
     * @param {?} sessionId
     * @return {?}
     */
    function (connection, sessionId) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
        }
        /** @type {?} */
        var request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions/' + sessionId, { headers: headers });
        return request.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            throw Object.assign({}, error.error, { httpStatus: error.status });
        })), map((/**
         * @param {?} resultSet
         * @return {?}
         */
        function (resultSet) {
            return resultSet;
        })));
    };
    VantageQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageQueryService.ctorParameters = function () { return [
        { type: TdHttpService }
    ]; };
    return VantageQueryService;
}());
export { VantageQueryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageQueryService.prototype._http;
}
/**
 * @param {?} parent
 * @param {?} tdHttpService
 * @return {?}
 */
export function VANTAGE_QUERY_PROVIDER_FACTORY(parent, tdHttpService) {
    return parent || new VantageQueryService(tdHttpService);
}
/** @type {?} */
export var VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], TdHttpService],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzdDLFFBQVE7SUFDUixTQUFVLE9BQU87SUFDakIsVUFBVyxRQUFRO0lBRW5CLE9BQU87SUFDUCxRQUFTLE1BQU07SUFDZixRQUFTLE1BQU07SUFDZixXQUFZLFNBQVM7SUFFckIsVUFBVTtJQUNWLFVBQVcsUUFBUTtJQUNuQixXQUFZLFNBQVM7SUFDckIsV0FBWSxTQUFTO0lBQ3JCLG9CQUFxQixrQkFBa0I7SUFDdkMsU0FBVSxPQUFPO0lBQ2pCLFdBQVksU0FBUztJQUNyQixVQUFXLFFBQVE7SUFDbkIsV0FBWSxTQUFTO0lBQ3JCLFFBQVMsTUFBTTtJQUNmLFlBQWEsVUFBVTtJQUV2QixXQUFXO0lBQ1gsUUFBUyxNQUFNO0lBQ2YsUUFBUyxNQUFNO0lBQ2YsYUFBYyxXQUFXO0lBQ3pCLHVCQUF3QixxQkFBcUI7SUFDN0MsNEJBQTZCLDBCQUEwQjtJQUV2RCxXQUFXO0lBQ1gsWUFBYSxVQUFVO0lBRXZCLGdCQUFpQixjQUFjO0lBQy9CLHdCQUF5QixzQkFBc0I7SUFDL0MsMEJBQTJCLHdCQUF3QjtJQUNuRCwwQkFBMkIsd0JBQXdCO0lBRW5ELGlCQUFrQixlQUFlO0lBQ2pDLDJCQUE0Qix5QkFBeUI7SUFDckQsMkJBQTRCLHlCQUF5QjtJQUVyRCxtQkFBb0IsaUJBQWlCO0lB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LENBQ25ELDRCQUE0QixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxTQUFTLEVBQ3BGLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FDWjtRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsVUFBVTs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbEMsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQWM7WUFDakIsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQTFORixVQUFVOzs7O2dCQWhJRixhQUFhOztJQTJWdEIsMEJBQUM7Q0FBQSxBQTNORCxJQTJOQztTQTFOWSxtQkFBbUI7Ozs7OztJQUNsQixvQ0FBNEI7Ozs7Ozs7QUEyTjFDLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFDM0IsYUFBNEI7SUFFNUIsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxRCxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLGFBQWEsQ0FBQztJQUM1RSxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVN5c3RlbSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3N5c3RlbSc7XG5pbXBvcnQgeyBUZEh0dHBTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBRdWVyeVJlc3VsdENvbHVtblR5cGVzIHtcbiAgLy8gQXJyYXlcbiAgJ0FSUkFZJyA9ICdBUlJBWScsXG4gICdWQVJSQVknID0gJ1ZBUlJBWScsXG5cbiAgLy8gQnl0ZVxuICAnQkxPQicgPSAnQkxPQicsXG4gICdCWVRFJyA9ICdCWVRFJyxcbiAgJ1ZBUkJZVEUnID0gJ1ZBUkJZVEUnLFxuXG4gIC8vIE51bWVyaWNcbiAgJ0JJR0lOVCcgPSAnQklHSU5UJyxcbiAgJ0JZVEVJTlQnID0gJ0JZVEVJTlQnLFxuICAnREVDSU1BTCcgPSAnREVDSU1BTCcsXG4gICdET1VCTEUgUFJFQ0lTSU9OJyA9ICdET1VCTEUgUFJFQ0lTSU9OJyxcbiAgJ0ZMT0FUJyA9ICdGTE9BVCcsXG4gICdJTlRFR0VSJyA9ICdJTlRFR0VSJyxcbiAgJ05VTUJFUicgPSAnTlVNQkVSJyxcbiAgJ05VTUVSSUMnID0gJ05VTUVSSUMnLFxuICAnUkVBTCcgPSAnUkVBTCcsXG4gICdTTUFMTElOVCcgPSAnU01BTExJTlQnLFxuXG4gIC8vIERhdGVUSW1lXG4gICdEQVRFJyA9ICdEQVRFJyxcbiAgJ1RJTUUnID0gJ1RJTUUnLFxuICAnVElNRVNUQU1QJyA9ICdUSU1FU1RBTVAnLFxuICAnVElNRSBXSVRIIFRJTUUgWk9ORScgPSAnVElNRSBXSVRIIFRJTUUgWk9ORScsXG4gICdUSU1FU1RBTVAgV0lUSCBUSU1FIFpPTkUnID0gJ1RJTUVTVEFNUCBXSVRIIFRJTUUgWk9ORScsXG5cbiAgLy8gSW50ZXJ2YWxcbiAgJ0lOVEVSVkFMJyA9ICdJTlRFUlZBTCcsXG5cbiAgJ0lOVEVSVkFMIERBWScgPSAnSU5URVJWQUwgREFZJyxcbiAgJ0lOVEVSVkFMIERBWSBUTyBIT1VSJyA9ICdJTlRFUlZBTCBEQVkgVE8gSE9VUicsXG4gICdJTlRFUlZBTCBEQVkgVE8gTUlOVVRFJyA9ICdJTlRFUlZBTCBEQVkgVE8gTUlOVVRFJyxcbiAgJ0lOVEVSVkFMIERBWSBUTyBTRUNPTkQnID0gJ0lOVEVSVkFMIERBWSBUTyBTRUNPTkQnLFxuXG4gICdJTlRFUlZBTCBIT1VSJyA9ICdJTlRFUlZBTCBIT1VSJyxcbiAgJ0lOVEVSVkFMIEhPVVIgVE8gTUlOVVRFJyA9ICdJTlRFUlZBTCBIT1VSIFRPIE1JTlVURScsXG4gICdJTlRFUlZBTCBIT1VSIFRPIFNFQ09ORCcgPSAnSU5URVJWQUwgSE9VUiBUTyBTRUNPTkQnLFxuXG4gICdJTlRFUlZBTCBNSU5VVEUnID0gJ0lOVEVSVkFMIE1JTlVURScsXG4gICdJTlRFUlZBTCBNSU5VVEUgVE8gU0VDT05EJyA9ICdJTlRFUlZBTCBNSU5VVEUgVE8gU0VDT05EJyxcblxuICAnSU5URVJWQUwgTU9OVEgnID0gJ0lOVEVSVkFMIE1PTlRIJyxcbiAgJ0lOVEVSVkFMIFNFQ09ORCcgPSAnSU5URVJWQUwgU0VDT05EJyxcbiAgJ0lOVEVSVkFMIFlFQVInID0gJ0lOVEVSVkFMIFlFQVInLFxuICAnSU5URVJWQUwgWUVBUiBUTyBNT05USCcgPSAnSU5URVJWQUwgWUVBUiBUTyBNT05USCcsXG5cbiAgLy8gQ2hhcmFjdGVyXG4gICdDSEFSJyA9ICdDSEFSJyxcbiAgJ0NIQVJBQ1RFUicgPSAnQ0hBUkFDVEVSJyxcbiAgJ0NIQVJBQ1RFUiBTRVQgR1JBUEhJQycgPSAnQ0hBUkFDVEVSIFNFVCBHUkFQSElDJyxcbiAgJ0NMT0InID0gJ0NMT0InLFxuICAnQ0hBUiBWQVJZSU5HJyA9ICdDSEFSIFZBUllJTkcnLFxuICAnTE9ORyBWQVJDSEFSJyA9ICdMT05HIFZBUkNIQVInLFxuICAnVkFSQ0hBUicgPSAnVkFSQ0hBUicsXG5cbiAgLy8gUGVyaW9kXG4gICdQRVJJT0QnID0gJ1BFUklPRCcsXG5cbiAgLy8gVURUXG4gICd1ZHRfbmFtZScgPSAndWR0X25hbWUnLFxuXG4gIC8vIFBhcmFtZXRlclxuICAnVERfQU5ZVFlQRScgPSAnVERfQU5ZVFlQRScsXG4gICdWQVJJQU5UX1RZUEUnID0gJ1ZBUklBTlRfVFlQRScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGF5bG9hZCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNlc3Npb24/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG4gIHJvd09mZnNldD86IG51bWJlcjtcbiAgcm93TGltaXQ/OiBudW1iZXI7XG4gIGZvcm1hdD86IHN0cmluZzsgLy8gKGRlZmF1bHQpLW9iamVjdCwgYXJyYXksIG9yIGNzdlxuICBpbmNsdWRlQ29sdW1ucz86IGJvb2xlYW47XG4gIGluY2x1ZGVDb2x1bW5zVHlwZXM/OiBib29sZWFuO1xuICBvdXRwdXROdW1iZXJzQXNTdHJpbmdzPzogYm9vbGVhbjtcbiAgc3Bvb2xlZFJlc3VsdFNldD86IGJvb2xlYW47XG4gIGNsaWVudElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldCB7XG4gIHF1ZXVlRHVyYXRpb246IG51bWJlcjtcbiAgcXVlcnlEdXJhdGlvbjogbnVtYmVyO1xuICByZXN1bHRzOiBJUXVlcnlSZXN1bHRTZXRSZXN1bHRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlSZXN1bHREYXRhIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlSZXN1bHRTZXRSZXN1bHQge1xuICBkYXRhOiBJUXVlcnlSZXN1bHREYXRhW107XG4gIHJlc3VsdFNldDogYm9vbGVhbjtcbiAgcm93Q291bnQ6IG51bWJlcjtcbiAgcm93TGltaXRFeGNlZWRlZDogYm9vbGVhbjtcbiAgY29sdW1ucz86IElRdWVyeVJlc3VsdFNldENvbHVtbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldENvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZToga2V5b2YgdHlwZW9mIFF1ZXJ5UmVzdWx0Q29sdW1uVHlwZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5SW5mbyB7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBsb2dUaW1lPzogc3RyaW5nO1xuICBlcnJvcj86IGFueTtcbiAgcmVzdWx0U2V0PzogSVF1ZXJ5UmVzdWx0U2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTUUxFQ29ubmVjdGlvbiB7XG4gIHN5c3RlbTogSVN5c3RlbTtcbiAgY3JlZHM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlc3Npb25QYXlsb2FkIHtcbiAgYXV0b0NvbW1pdDogc3RyaW5nO1xuICB0cmFuc2FjdGlvbk1vZGU6IHN0cmluZztcbiAgY2hhclNldDogc3RyaW5nO1xuICBkZWZhdWx0RGF0YWJhc2U/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogVGRIdHRwU2VydmljZSkge31cblxuICBxdWVyeVN5c3RlbShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHBheWxvYWQ6IElRdWVyeVBheWxvYWQpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gY29ubmVjdGlvbi5zeXN0ZW0uc3lzdGVtX2F0dHJpYnV0ZXM/LmF0dHJpYnV0ZXM7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBhdHRyaWJ1dGVzPy5sb2dfbWVjaCB8fCBhdHRyaWJ1dGVzPy5sb2dNZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIHBheWxvYWQuY2xpZW50SWQgPSAnVkFOVEFHRS5FRElUT1InO1xuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFibGVJbmZvKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VOYW1lOiBzdHJpbmcsIHRhYmxlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgL2FwaS9xdWVyeS9zeXN0ZW1zLyR7Y29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWV9L2RhdGFiYXNlcy8ke2RhdGFiYXNlTmFtZX0vdGFibGVzLyR7dGFibGVOYW1lfWAsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRWaWV3SW5mbyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlTmFtZTogc3RyaW5nLCB2aWV3TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgL2FwaS9xdWVyeS9zeXN0ZW1zLyR7Y29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWV9L2RhdGFiYXNlcy8ke2RhdGFiYXNlTmFtZX0vdmlld3MvJHt2aWV3TmFtZX1gLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnkoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHJlcXVlc3RJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJpZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBzZXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXM/c2Vzc2lvbj0nICsgc2Vzc2lvbklkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnlSZXN1bHQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBxdWVyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzLycgKyBxdWVyeUlkICsgJy9yZXN1bHRzJyxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVNlc3Npb24oXG4gICAgY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLFxuICAgIHBheWxvYWQ6IElTZXNzaW9uUGF5bG9hZCA9IHsgYXV0b0NvbW1pdDogJ3RydWUnLCB0cmFuc2FjdGlvbk1vZGU6ICdURVJBJywgY2hhclNldDogJ1VURjgnIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcz8uYXR0cmlidXRlcztcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9IGF0dHJpYnV0ZXM/LmxvZ19tZWNoIHx8IGF0dHJpYnV0ZXM/LmxvZ01lY2ggfHwgJ0RFRkFVTFQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSAnSldUJztcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMvJyArIHNlc3Npb25JZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gIHRkSHR0cFNlcnZpY2U6IFRkSHR0cFNlcnZpY2UsXG4pOiBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVF1ZXJ5U2VydmljZSh0ZEh0dHBTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfUVVFUllfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVF1ZXJ5U2VydmljZV0sIFRkSHR0cFNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19