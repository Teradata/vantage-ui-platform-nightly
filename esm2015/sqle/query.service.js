/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
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
export function VANTAGE_QUERY_PROVIDER_FACTORY(parent, httpClient) {
    return parent || new VantageQueryService(httpClient);
}
/** @type {?} */
export const VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], HttpClient],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFFbEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdqRCxtQ0FXQzs7O0lBVkMsOEJBQWM7O0lBQ2QsZ0NBQWlCOztJQUNqQixnQ0FBaUI7O0lBQ2pCLGtDQUFtQjs7SUFDbkIsaUNBQWtCOztJQUNsQiwrQkFBZ0I7O0lBQ2hCLHVDQUF5Qjs7SUFDekIsNENBQThCOztJQUM5Qix5Q0FBMkI7O0lBQzNCLGlDQUFrQjs7Ozs7QUFHcEIscUNBSUM7OztJQUhDLHdDQUFzQjs7SUFDdEIsd0NBQXNCOztJQUN0QixrQ0FBaUM7Ozs7O0FBR25DLDJDQU1DOzs7SUFMQyxxQ0FBbUM7O0lBQ25DLDBDQUFtQjs7SUFDbkIseUNBQWlCOztJQUNqQixpREFBMEI7O0lBQzFCLHdDQUF1Qzs7Ozs7QUFHekMsZ0NBS0M7OztJQUpDLDZCQUFrQjs7SUFDbEIsNkJBQWlCOztJQUNqQiwyQkFBWTs7SUFDWiwrQkFBNEI7Ozs7O0FBRzlCLHFDQUdDOzs7SUFGQyxpQ0FBZ0I7O0lBQ2hCLGdDQUFlOztBQUlqQixNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQUcsQ0FBQzs7Ozs7O0lBRS9DLFdBQVcsQ0FBQyxVQUEyQixFQUFFLE9BQXNCOztZQUN6RCxPQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFO2FBQ3pDLE1BQU0sQ0FBQyxRQUFRLEVB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QUMsS0FBSyxDQUFDLENBQUM7U0FDMUU7O2NBQ0ssT0FBTyxHQUF1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FDekQsNEJBQTRCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWSxHQUFHLFNBQVMsRUFDcEYsRUFBRSxPQUFPLEVBQUUsQ0FDWjtRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FDakIsVUFBVTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRTtZQUNyQixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBMU5GLFVBQVU7Ozs7WUE1Q0YsVUFBVTs7Ozs7OztJQThDTCwwQ0FBK0I7Ozs7Ozs7QUEyTjdDLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFDM0IsVUFBc0I7SUFFdEIsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RCxDQUFDOztBQUVELE1BQU0sT0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLFVBQVUsQ0FBQztJQUN6RSxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVN5c3RlbSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3N5c3RlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGF5bG9hZCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNlc3Npb24/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG4gIHJvd09mZnNldD86IG51bWJlcjtcbiAgcm93TGltaXQ/OiBudW1iZXI7XG4gIGZvcm1hdD86IHN0cmluZzsgLy8gKGRlZmF1bHQpLW9iamVjdCwgYXJyYXksIG9yIGNzdlxuICBpbmNsdWRlQ29sdW1ucz86IGJvb2xlYW47XG4gIGluY2x1ZGVDb2x1bW5zVHlwZXM/OiBib29sZWFuO1xuICBzcG9vbGVkUmVzdWx0U2V0PzogYm9vbGVhbjtcbiAgY2xpZW50SWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0IHtcbiAgcXVldWVEdXJhdGlvbjogbnVtYmVyO1xuICBxdWVyeUR1cmF0aW9uOiBudW1iZXI7XG4gIHJlc3VsdHM6IElRdWVyeVJlc3VsdFNldFJlc3VsdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldFJlc3VsdCB7XG4gIGRhdGE6IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG4gIHJlc3VsdFNldDogYm9vbGVhbjtcbiAgcm93Q291bnQ6IG51bWJlcjtcbiAgcm93TGltaXRFeGNlZWRlZDogYm9vbGVhbjtcbiAgY29sdW1ucz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB9W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5SW5mbyB7XG4gIHN1Y2Nlc3M/OiBib29sZWFuO1xuICBsb2dUaW1lPzogc3RyaW5nO1xuICBlcnJvcj86IGFueTtcbiAgcmVzdWx0U2V0PzogSVF1ZXJ5UmVzdWx0U2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTUUxFQ29ubmVjdGlvbiB7XG4gIHN5c3RlbTogSVN5c3RlbTtcbiAgY3JlZHM/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlUXVlcnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cENsaWVudDogSHR0cENsaWVudCkge31cblxuICBxdWVyeVN5c3RlbShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHBheWxvYWQ6IElRdWVyeVBheWxvYWQpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcy5hdHRyaWJ1dGVzLmxvZ19tZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIHBheWxvYWQuY2xpZW50SWQgPSAnVkFOVEFHRS5FRElUT1InO1xuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHBDbGllbnQucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRUYWJsZUluZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdGFibGVOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmdldChcbiAgICAgIGAvYXBpL3F1ZXJ5L3N5c3RlbXMvJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0vZGF0YWJhc2VzLyR7ZGF0YWJhc2VOYW1lfS90YWJsZXMvJHt0YWJsZU5hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0Vmlld0luZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdmlld05hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0KFxuICAgICAgYC9hcGkvcXVlcnkvc3lzdGVtcy8ke2Nvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lfS9kYXRhYmFzZXMvJHtkYXRhYmFzZU5hbWV9L3ZpZXdzLyR7dmlld05hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcnkoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCByZXF1ZXN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHJlcXVlc3RJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0UXVlcmllcyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcz9zZXNzaW9uPScgKyBzZXNzaW9uSWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UmVzdWx0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCArICcvcmVzdWx0cycsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHBheWxvYWQ6IGFueSA9IHtcbiAgICAgIGF1dG9Db21taXQ6ICd0cnVlJyxcbiAgICAgIHRyYW5zYWN0aW9uTW9kZTogJ1RFUkEnLFxuICAgICAgY2hhclNldDogJ1VURjgnLFxuICAgIH07XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9IGNvbm5lY3Rpb24uc3lzdGVtLnN5c3RlbV9hdHRyaWJ1dGVzLmF0dHJpYnV0ZXMubG9nX21lY2ggfHwgJ0RFRkFVTFQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSAnSldUJztcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5wb3N0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucycsXG4gICAgICBwYXlsb2FkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBkZWxldGVTZXNzaW9uKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgc2Vzc2lvbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHBDbGllbnQuZGVsZXRlKFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9zZXNzaW9ucy8nICsgc2Vzc2lvbklkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfUVVFUllfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuKTogVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VRdWVyeVNlcnZpY2UoaHR0cENsaWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLCBIdHRwQ2xpZW50XSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==