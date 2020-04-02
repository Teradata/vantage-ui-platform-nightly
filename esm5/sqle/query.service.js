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
        /** @type {?} */
        var headers = new HttpHeaders()
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
            payload.logMech = connection.system.system_attributes.attributes.log_mech || 'DEFAULT';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQyxtQ0FXQzs7O0lBVkMsOEJBQWM7O0lBQ2QsZ0NBQWlCOztJQUNqQixnQ0FBaUI7O0lBQ2pCLGtDQUFtQjs7SUFDbkIsaUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHVDQUF5Qjs7SUFDekIsNENBQThCOztJQUM5Qix5Q0FBMkI7O0lBQzNCLGlDQUFrQjs7Ozs7QUFHcEIscUNBSUM7OztJQUhDLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixrQ0FBaUM7Ozs7O0FBR25DLDJDQU1DOzs7SUFMQyxxQ0FBbUM7O0lBQ25DLDBDQUFtQjs7SUFDbkIseUNBQWlCOztJQUNqQixpREFBMEI7O0lBQzFCLHdDQUF1Qzs7Ozs7QUFHekMsZ0NBS0M7OztJQUpDLDZCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiwyQkFBWTs7SUFDWiwrQkFBNEI7Ozs7O0FBRzlCLHFDQUdDOzs7SUFGQyxpQ0FBZ0I7O0lBQ2hCLGdDQUFlOztBQUdqQjtJQUVFLDZCQUFvQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQUcsQ0FBQzs7Ozs7O0lBRTVDLHlDQUFXOzs7OztJQUFYLFVBQVksVUFBMkIsRUFBRSxPQUFzQjs7WUFDekQsT0FBTyxHQUFnQixJQUFJLFdBQVcsRUFBRTth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ckUsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsU0FBYztZQUNqQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBMU5GLFVBQVU7Ozs7Z0JBekNGLGFBQWE7O0lBb1F0QiwwQkFBQztDQUFBLEFBM05ELElBMk5DO1NBMU5ZLG1CQUFtQjs7Ozs7O0lBQ2xCLG9DQUE0Qjs7Ozs7OztBQTJOMUMsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixhQUE0QjtJQUU1QixPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFELENBQUM7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsYUFBYSxDQUFDO0lBQzVFLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJU3lzdGVtIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3lzdGVtJztcbmltcG9ydCB7IFRkSHR0cFNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGF5bG9hZCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNlc3Npb24/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG4gIHJvd09mZnNldD86IG51bWJlcjtcbiAgcm93TGltaXQ/OiBudW1iZXI7XG4gIGZvcm1hdD86IHN0cmluZzsgLy8gKGRlZmF1bHQpLW9iamVjdCwgYXJyYXksIG9yIGNzdlxuICBpbmNsdWRlQ29sdW1ucz86IGJvb2xlYW47XG4gIGluY2x1ZGVDb2x1bW5zVHlwZXM/OiBib29sZWFuO1xuICBzcG9vbGVkUmVzdWx0U2V0PzogYm9vbGVhbjtcbiAgY2xpZW50SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0IHtcbiAgcXVldWVEdXJhdGlvbjogbnVtYmVyO1xuICBxdWVyeUR1cmF0aW9uOiBudW1iZXI7XG4gIHJlc3VsdHM6IElRdWVyeVJlc3VsdFNldFJlc3VsdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldFJlc3VsdCB7XG4gIGRhdGE6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG4gIHJlc3VsdFNldDogYm9vbGVhbjtcbiAgcm93Q291bnQ6IG51bWJlcjtcbiAgcm93TGltaXRFeGNlZWRlZDogYm9vbGVhbjtcbiAgY29sdW1ucz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5SW5mbyB7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBsb2dUaW1lPzogc3RyaW5nO1xuICBlcnJvcj86IGFueTtcbiAgcmVzdWx0U2V0PzogSVF1ZXJ5UmVzdWx0U2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTUUxFQ29ubmVjdGlvbiB7XG4gIHN5c3RlbTogSVN5c3RlbTtcbiAgY3JlZHM/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogVGRIdHRwU2VydmljZSkge31cblxuICBxdWVyeVN5c3RlbShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHBheWxvYWQ6IElRdWVyeVBheWxvYWQpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcy5hdHRyaWJ1dGVzLmxvZ19tZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIHBheWxvYWQuY2xpZW50SWQgPSAnVkFOVEFHRS5FRElUT1InO1xuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFibGVJbmZvKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VOYW1lOiBzdHJpbmcsIHRhYmxlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgL2FwaS9xdWVyeS9zeXN0ZW1zLyR7Y29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWV9L2RhdGFiYXNlcy8ke2RhdGFiYXNlTmFtZX0vdGFibGVzLyR7dGFibGVOYW1lfWAsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRWaWV3SW5mbyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlTmFtZTogc3RyaW5nLCB2aWV3TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgL2FwaS9xdWVyeS9zeXN0ZW1zLyR7Y29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWV9L2RhdGFiYXNlcy8ke2RhdGFiYXNlTmFtZX0vdmlld3MvJHt2aWV3TmFtZX1gLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnkoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHJlcXVlc3RJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJpZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBzZXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXM/c2Vzc2lvbj0nICsgc2Vzc2lvbklkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnlSZXN1bHQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBxdWVyeUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzLycgKyBxdWVyeUlkICsgJy9yZXN1bHRzJyxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVNlc3Npb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXlsb2FkOiBhbnkgPSB7XG4gICAgICBhdXRvQ29tbWl0OiAndHJ1ZScsXG4gICAgICB0cmFuc2FjdGlvbk1vZGU6ICdURVJBJyxcbiAgICAgIGNoYXJTZXQ6ICdVVEY4JyxcbiAgICB9O1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcy5hdHRyaWJ1dGVzLmxvZ19tZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMnLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVNlc3Npb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBzZXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5kZWxldGUoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3Nlc3Npb25zLycgKyBzZXNzaW9uSWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfUVVFUllfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICB0ZEh0dHBTZXJ2aWNlOiBUZEh0dHBTZXJ2aWNlLFxuKTogVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VRdWVyeVNlcnZpY2UodGRIdHRwU2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLCBUZEh0dHBTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==