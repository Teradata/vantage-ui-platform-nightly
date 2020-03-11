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
export class VantageQueryService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
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
        const request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/queries', payload, { headers });
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
        const request = this._http.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/tables/${tableName}`, { headers });
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
        const request = this._http.get(`/api/query/systems/${connection.system.nickname}/databases/${databaseName}/views/${viewName}`, { headers });
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
        const request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + requestId, { headers });
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
        const request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries?session=' + sessionId, { headers });
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
        const request = this._http.get('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId + '/results', { headers });
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
        const request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/queries/' + queryId, { headers });
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
        const request = this._http.post('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions', payload, { headers });
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
        const request = this._http.delete('/api/query/tdrest/systems/' + connection.system.nickname + '/sessions/' + sessionId, { headers });
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
    { type: TdHttpService }
];
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
export const VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], TdHttpService],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUUvQyxtQ0FXQzs7O0lBVkMsOEJBQWM7O0lBQ2QsZ0NBQWlCOztJQUNqQixnQ0FBaUI7O0lBQ2pCLGtDQUFtQjs7SUFDbkIsaUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHVDQUF5Qjs7SUFDekIsNENBQThCOztJQUM5Qix5Q0FBMkI7O0lBQzNCLGlDQUFrQjs7Ozs7QUFHcEIscUNBSUM7OztJQUhDLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixrQ0FBaUM7Ozs7O0FBR25DLDJDQU1DOzs7SUFMQyxxQ0FBbUM7O0lBQ25DLDBDQUFtQjs7SUFDbkIseUNBQWlCOztJQUNqQixpREFBMEI7O0lBQzFCLHdDQUF1Qzs7Ozs7QUFHekMsZ0NBS0M7OztJQUpDLDZCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiwyQkFBWTs7SUFDWiwrQkFBNEI7Ozs7O0FBRzlCLHFDQUdDOzs7SUFGQyxpQ0FBZ0I7O0lBQ2hCLGdDQUFlOztBQUlqQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLFlBQW9CLEtBQW9CO1FBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7SUFBRyxDQUFDOzs7Ozs7SUFFNUMsV0FBVyxDQUFDLFVBQTJCLEVBQUUsT0FBc0I7O1lBQ3pELE9BQU8sR0FBZ0IsSUFBSSxX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QUMsb0JBQW9CLEVBQUUsUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRTs7Y0FDSyxPQUFPLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNuRCw0QkFBNEIsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsU0FBUyxFQUNwRixFQUFFLE9BQU8sRUFBRSxDQUNaO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixVQUFVOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdEMsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLFNBQWMsRUFBRSxFQUFFO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUExTkYsVUFBVTs7OztZQXpDRixhQUFhOzs7Ozs7O0lBMkNSLG9DQUE0Qjs7Ozs7OztBQTJOMUMsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixhQUE0QjtJQUU1QixPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFELENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsYUFBYSxDQUFDO0lBQzVFLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJU3lzdGVtIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3lzdGVtJztcbmltcG9ydCB7IFRkSHR0cFNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGF5bG9hZCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNlc3Npb24/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG4gIHJvd09mZnNldD86IG51bWJlcjtcbiAgcm93TGltaXQ/OiBudW1iZXI7XG4gIGZvcm1hdD86IHN0cmluZzsgLy8gKGRlZmF1bHQpLW9iamVjdCwgYXJyYXksIG9yIGNzdlxuICBpbmNsdWRlQ29sdW1ucz86IGJvb2xlYW47XG4gIGluY2x1ZGVDb2x1bW5zVHlwZXM/OiBib29sZWFuO1xuICBzcG9vbGVkUmVzdWx0U2V0PzogYm9vbGVhbjtcbiAgY2xpZW50SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0IHtcbiAgcXVldWVEdXJhdGlvbjogbnVtYmVyO1xuICBxdWVyeUR1cmF0aW9uOiBudW1iZXI7XG4gIHJlc3VsdHM6IElRdWVyeVJlc3VsdFNldFJlc3VsdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldFJlc3VsdCB7XG4gIGRhdGE6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG4gIHJlc3VsdFNldDogYm9vbGVhbjtcbiAgcm93Q291bnQ6IG51bWJlcjtcbiAgcm93TGltaXRFeGNlZWRlZDogYm9vbGVhbjtcbiAgY29sdW1ucz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5SW5mbyB7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBsb2dUaW1lPzogc3RyaW5nO1xuICBlcnJvcj86IGFueTtcbiAgcmVzdWx0U2V0PzogSVF1ZXJ5UmVzdWx0U2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTUUxFQ29ubmVjdGlvbiB7XG4gIHN5c3RlbTogSVN5c3RlbTtcbiAgY3JlZHM/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogVGRIdHRwU2VydmljZSkge31cblxuICBxdWVyeVN5c3RlbShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHBheWxvYWQ6IElRdWVyeVBheWxvYWQpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcy5hdHRyaWJ1dGVzLmxvZ19tZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIHBheWxvYWQuY2xpZW50SWQgPSAnVkFOVEFHRS5FRElUT1InO1xuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRUYWJsZUluZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdGFibGVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgIGAvYXBpL3F1ZXJ5L3N5c3RlbXMvJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0vZGF0YWJhc2VzLyR7ZGF0YWJhc2VOYW1lfS90YWJsZXMvJHt0YWJsZU5hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0Vmlld0luZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdmlld05hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgYC9hcGkvcXVlcnkvc3lzdGVtcy8ke2Nvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lfS9kYXRhYmFzZXMvJHtkYXRhYmFzZU5hbWV9L3ZpZXdzLyR7dmlld05hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnkoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHJlcXVlc3RJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcmllcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcz9zZXNzaW9uPScgKyBzZXNzaW9uSWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UmVzdWx0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCArICcvcmVzdWx0cycsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBheWxvYWQ6IGFueSA9IHtcbiAgICAgIGF1dG9Db21taXQ6ICd0cnVlJyxcbiAgICAgIHRyYW5zYWN0aW9uTW9kZTogJ1RFUkEnLFxuICAgICAgY2hhclNldDogJ1VURjgnLFxuICAgIH07XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9IGNvbm5lY3Rpb24uc3lzdGVtLnN5c3RlbV9hdHRyaWJ1dGVzLmF0dHJpYnV0ZXMubG9nX21lY2ggfHwgJ0RFRkFVTFQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSAnSldUJztcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5wb3N0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBkZWxldGVTZXNzaW9uKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgc2Vzc2lvbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZGVsZXRlKFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucy8nICsgc2Vzc2lvbklkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfUVVFUllfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICB0ZEh0dHBTZXJ2aWNlOiBUZEh0dHBTZXJ2aWNlLFxuKTogVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VRdWVyeVNlcnZpY2UodGRIdHRwU2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLCBUZEh0dHBTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==