/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { TdHttpService } from '@covalent/http';
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
     * @return {?}
     */
    VantageQueryService.prototype.createSession = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        var _a, _b, _c;
        /** @type {?} */
        var payload = {
            autoCommit: 'true',
            transactionMode: 'TERA',
            charSet: 'UTF8',
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQyxtQ0FXQzs7O0lBVkMsOEJBQWM7O0lBQ2QsZ0NBQWlCOztJQUNqQixnQ0FBaUI7O0lBQ2pCLGtDQUFtQjs7SUFDbkIsaUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHVDQUF5Qjs7SUFDekIsNENBQThCOztJQUM5Qix5Q0FBMkI7O0lBQzNCLGlDQUFrQjs7Ozs7QUFHcEIscUNBSUM7OztJQUhDLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixrQ0FBaUM7Ozs7O0FBR25DLDJDQU1DOzs7SUFMQyxxQ0FBbUM7O0lBQ25DLDBDQUFtQjs7SUFDbkIseUNBQWlCOztJQUNqQixpREFBMEI7O0lBQzFCLHdDQUF1Qzs7Ozs7QUFHekMsZ0NBS0M7OztJQUpDLDZCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiwyQkFBWTs7SUFDWiwrQkFBNEI7Ozs7O0FBRzlCLHFDQUdDOzs7SUFGQyxpQ0FBZ0I7O0lBQ2hCLGdDQUFlOztBQUdqQjtJQUVFLDZCQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRTVDLHlDQUFXOzs7OztJQUFYLFVBQVksVUFBMkIsRUFBRSxPQUFzQjs7O1lBQ3pELE9BQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUU7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LEtBQXdCO1lBQ2xDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxTQUFjO1lBQ2pCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE1TkYsVUFBVTs7OztnQkF6Q0YsYUFBYTs7SUFzUXRCLDBCQUFDO0NBQUEsQUE3TkQsSUE2TkM7U0E1TlksbUJBQW1COzs7Ozs7SUFDbEIsb0NBQTRCOzs7Ozs7O0FBNk4xQyxNQUFNLFVBQVUsOEJBQThCLENBQzVDLE1BQTJCLEVBQzNCLGFBQTRCO0lBRTVCLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUQsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxhQUFhLENBQUM7SUFDNUUsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElTeXN0ZW0gfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0nO1xuaW1wb3J0IHsgVGRIdHRwU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlQYXlsb2FkIHtcbiAgcXVlcnk6IHN0cmluZztcbiAgc2Vzc2lvbj86IHN0cmluZztcbiAgbG9nTWVjaD86IHN0cmluZztcbiAgcm93T2Zmc2V0PzogbnVtYmVyO1xuICByb3dMaW1pdD86IG51bWJlcjtcbiAgZm9ybWF0Pzogc3RyaW5nOyAvLyAoZGVmYXVsdCktb2JqZWN0LCBhcnJheSwgb3IgY3N2XG4gIGluY2x1ZGVDb2x1bW5zPzogYm9vbGVhbjtcbiAgaW5jbHVkZUNvbHVtbnNUeXBlcz86IGJvb2xlYW47XG4gIHNwb29sZWRSZXN1bHRTZXQ/OiBib29sZWFuO1xuICBjbGllbnRJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlSZXN1bHRTZXQge1xuICBxdWV1ZUR1cmF0aW9uOiBudW1iZXI7XG4gIHF1ZXJ5RHVyYXRpb246IG51bWJlcjtcbiAgcmVzdWx0czogSVF1ZXJ5UmVzdWx0U2V0UmVzdWx0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0UmVzdWx0IHtcbiAgZGF0YTogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH1bXTtcbiAgcmVzdWx0U2V0OiBib29sZWFuO1xuICByb3dDb3VudDogbnVtYmVyO1xuICByb3dMaW1pdEV4Y2VlZGVkOiBib29sZWFuO1xuICBjb2x1bW5zPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlJbmZvIHtcbiAgc3VjY2Vzcz86IGJvb2xlYW47XG4gIGxvZ1RpbWU/OiBzdHJpbmc7XG4gIGVycm9yPzogYW55O1xuICByZXN1bHRTZXQ/OiBJUXVlcnlSZXN1bHRTZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNRTEVDb25uZWN0aW9uIHtcbiAgc3lzdGVtOiBJU3lzdGVtO1xuICBjcmVkcz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VRdWVyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBUZEh0dHBTZXJ2aWNlKSB7fVxuXG4gIHF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcGF5bG9hZDogSVF1ZXJ5UGF5bG9hZCk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcz8uYXR0cmlidXRlcztcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9IGF0dHJpYnV0ZXM/LmxvZ19tZWNoIHx8IGF0dHJpYnV0ZXM/LmxvZ01lY2ggfHwgJ0RFRkFVTFQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSAnSldUJztcbiAgICB9XG4gICAgcGF5bG9hZC5jbGllbnRJZCA9ICdWQU5UQUdFLkVESVRPUic7XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzJyxcbiAgICAgIHBheWxvYWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRUYWJsZUluZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdGFibGVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgIGAvYXBpL3F1ZXJ5L3N5c3RlbXMvJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0vZGF0YWJhc2VzLyR7ZGF0YWJhc2VOYW1lfS90YWJsZXMvJHt0YWJsZU5hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFZpZXdJbmZvKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VOYW1lOiBzdHJpbmcsIHZpZXdOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgIGAvYXBpL3F1ZXJ5L3N5c3RlbXMvJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0vZGF0YWJhc2VzLyR7ZGF0YWJhc2VOYW1lfS92aWV3cy8ke3ZpZXdOYW1lfWAsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRRdWVyeShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHJlcXVlc3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcmVxdWVzdElkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcmllcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcz9zZXNzaW9uPScgKyBzZXNzaW9uSWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRRdWVyeVJlc3VsdChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHF1ZXJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHF1ZXJ5SWQgKyAnL3Jlc3VsdHMnLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlUXVlcnkoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBxdWVyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZGVsZXRlKFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzLycgKyBxdWVyeUlkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBheWxvYWQ6IGFueSA9IHtcbiAgICAgIGF1dG9Db21taXQ6ICd0cnVlJyxcbiAgICAgIHRyYW5zYWN0aW9uTW9kZTogJ1RFUkEnLFxuICAgICAgY2hhclNldDogJ1VURjgnLFxuICAgIH07XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcz8uYXR0cmlidXRlcztcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9IGF0dHJpYnV0ZXM/LmxvZ19tZWNoIHx8IGF0dHJpYnV0ZXM/LmxvZ01lY2ggfHwgJ0RFRkFVTFQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSAnSldUJztcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMvJyArIHNlc3Npb25JZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gIHRkSHR0cFNlcnZpY2U6IFRkSHR0cFNlcnZpY2UsXG4pOiBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVF1ZXJ5U2VydmljZSh0ZEh0dHBTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfUVVFUllfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVF1ZXJ5U2VydmljZV0sIFRkSHR0cFNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19