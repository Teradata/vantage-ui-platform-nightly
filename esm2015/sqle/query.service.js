/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
/** @enum {string} */
const SystemType = {
    Teradata: 'TERADATA',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQXFCLE1BQU0sc0JBQXNCLENBQUM7QUFFbEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBUy9DLFVBQVcsVUFBVTs7Ozs7QUFFdkIsZ0NBRUM7OztJQURDLHVDQUFpQjs7Ozs7QUFFbkIsOEJBTUM7OztJQUxDLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLHNDQUF5Qjs7SUFDekIsa0NBQWlCOztJQUNqQixpQ0FBZ0I7Ozs7O0FBRWxCLHNCQVNDOzs7SUFSQyw2QkFBb0I7O0lBQ3BCLDhCQUFxQjs7SUFDckIsOEJBQXFCOztJQUNyQixxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsb0NBQXNDOztJQUN0QywwQkFBaUI7Ozs7O0FBR25CLG1DQVdDOzs7SUFWQyw4QkFBYzs7SUFDZCxnQ0FBaUI7O0lBQ2pCLGdDQUFpQjs7SUFDakIsa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLCtCQUFnQjs7SUFDaEIsdUNBQXlCOztJQUN6Qiw0Q0FBOEI7O0lBQzlCLHlDQUEyQjs7SUFDM0IsaUNBQWtCOzs7OztBQUdwQixxQ0FJQzs7O0lBSEMsd0NBQXNCOztJQUN0Qix3Q0FBc0I7O0lBQ3RCLGtDQUFpQzs7Ozs7QUFHbkMsMkNBTUM7OztJQUxDLHFDQUFtQzs7SUFDbkMsMENBQW1COztJQUNuQix5Q0FBaUI7O0lBQ2pCLGlEQUEwQjs7SUFDMUIsd0NBQXVDOzs7OztBQUd6QyxnQ0FLQzs7O0lBSkMsNkJBQWtCOztJ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LG1CQUFtQixDQUFDLEVBQUUsVUFBVSxDQUFDO0lBQ3pFLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qXG4gKiBUaGVzZSBpbnRlcmZhY2VzIGFyZSBkdXBsaWNhdGVkIGluIHRoZSBzeXN0ZW0gYW5kIHRoZSBxdWVyeSBzZXJ2aWNlLlxuICogSG93ZXZlciwgd2l0aGluIHRoZSBzeXN0ZW0gc2VydmljZSwgU3lzdGVtVHlwZSBpbmNsdWRlcyBBc3RlciAmIFByZXN0by5cbiAqIFdoZXJlYXMgaW4gdGhlIHF1ZXJ5IHNlcnZpY2UsIHRoZXkgYXJlIGV4Y2x1ZGVkLlxuICogVE9ETzogRFJZIHRoaXMgdXBcbiAqL1xuZW51bSBTeXN0ZW1UeXBlIHtcbiAgVGVyYWRhdGEgPSAnVEVSQURBVEEnLFxufVxuaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cbmludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cbmludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVBheWxvYWQge1xuICBxdWVyeTogc3RyaW5nO1xuICBzZXNzaW9uPzogc3RyaW5nO1xuICBsb2dNZWNoPzogc3RyaW5nO1xuICByb3dPZmZzZXQ/OiBudW1iZXI7XG4gIHJvd0xpbWl0PzogbnVtYmVyO1xuICBmb3JtYXQ/OiBzdHJpbmc7IC8vIChkZWZhdWx0KS1vYmplY3QsIGFycmF5LCBvciBjc3ZcbiAgaW5jbHVkZUNvbHVtbnM/OiBib29sZWFuO1xuICBpbmNsdWRlQ29sdW1uc1R5cGVzPzogYm9vbGVhbjtcbiAgc3Bvb2xlZFJlc3VsdFNldD86IGJvb2xlYW47XG4gIGNsaWVudElkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldCB7XG4gIHF1ZXVlRHVyYXRpb246IG51bWJlcjtcbiAgcXVlcnlEdXJhdGlvbjogbnVtYmVyO1xuICByZXN1bHRzOiBJUXVlcnlSZXN1bHRTZXRSZXN1bHRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlSZXN1bHRTZXRSZXN1bHQge1xuICBkYXRhOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfVtdO1xuICByZXN1bHRTZXQ6IGJvb2xlYW47XG4gIHJvd0NvdW50OiBudW1iZXI7XG4gIHJvd0xpbWl0RXhjZWVkZWQ6IGJvb2xlYW47XG4gIGNvbHVtbnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeUluZm8ge1xuICBzdWNjZXNzPzogYm9vbGVhbjtcbiAgbG9nVGltZT86IHN0cmluZztcbiAgZXJyb3I/OiBhbnk7XG4gIHJlc3VsdFNldD86IElRdWVyeVJlc3VsdFNldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU1FMRUNvbm5lY3Rpb24ge1xuICBzeXN0ZW06IElTeXN0ZW07XG4gIGNyZWRzPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHt9XG5cbiAgcXVlcnlTeXN0ZW0oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBwYXlsb2FkOiBJUXVlcnlQYXlsb2FkKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gY29ubmVjdGlvbi5zeXN0ZW0uc3lzdGVtX2F0dHJpYnV0ZXMuYXR0cmlidXRlcy5sb2dfbWVjaCB8fCAnREVGQVVMVCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9ICdKV1QnO1xuICAgIH1cbiAgICBwYXlsb2FkLmNsaWVudElkID0gJ1ZBTlRBR0UuRURJVE9SJztcbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LnBvc3QoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMnLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0VGFibGVJbmZvKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VOYW1lOiBzdHJpbmcsIHRhYmxlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5nZXQoXG4gICAgICBgL2FwaS9xdWVyeS9zeXN0ZW1zLyR7Y29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWV9L2RhdGFiYXNlcy8ke2RhdGFiYXNlTmFtZX0vdGFibGVzLyR7dGFibGVOYW1lfWAsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFZpZXdJbmZvKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgZGF0YWJhc2VOYW1lOiBzdHJpbmcsIHZpZXdOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmdldChcbiAgICAgIGAvYXBpL3F1ZXJ5L3N5c3RlbXMvJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0vZGF0YWJhc2VzLyR7ZGF0YWJhc2VOYW1lfS92aWV3cy8ke3ZpZXdOYW1lfWAsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcmVxdWVzdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHBDbGllbnQuZ2V0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzLycgKyByZXF1ZXN0SWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJpZXMoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBzZXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXM/c2Vzc2lvbj0nICsgc2Vzc2lvbklkLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRRdWVyeVJlc3VsdChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHF1ZXJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5nZXQoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHF1ZXJ5SWQgKyAnL3Jlc3VsdHMnLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3IuZXJyb3I7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBkZWxldGVRdWVyeShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHF1ZXJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cENsaWVudC5kZWxldGUoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHF1ZXJ5SWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvci5lcnJvcjtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZVNlc3Npb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXlsb2FkOiBhbnkgPSB7XG4gICAgICBhdXRvQ29tbWl0OiAndHJ1ZScsXG4gICAgICB0cmFuc2FjdGlvbk1vZGU6ICdURVJBJyxcbiAgICAgIGNoYXJTZXQ6ICdVVEY4JyxcbiAgICB9O1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBjb25uZWN0aW9uLnN5c3RlbS5zeXN0ZW1fYXR0cmlidXRlcy5hdHRyaWJ1dGVzLmxvZ19tZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHBDbGllbnQucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMnLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlU2Vzc2lvbihjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHNlc3Npb25JZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwQ2xpZW50LmRlbGV0ZShcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMvJyArIHNlc3Npb25JZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IGVycm9yLmVycm9yO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgaHR0cENsaWVudDogSHR0cENsaWVudCxcbik6IFZhbnRhZ2VRdWVyeVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlUXVlcnlTZXJ2aWNlKGh0dHBDbGllbnQpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9RVUVSWV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlUXVlcnlTZXJ2aWNlXSwgSHR0cENsaWVudF0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfUVVFUllfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=