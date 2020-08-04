/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { TdHttpService } from '@covalent/http';
/** @enum {string} */
const QueryResultColumnTypes = {
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
export function IQueryBands() { }
if (false) {
    /** @type {?} */
    IQueryBands.prototype.ApplicationName;
    /** @type {?} */
    IQueryBands.prototype.Version;
    /** @type {?|undefined} */
    IQueryBands.prototype.ClientUser;
    /* Skipping unhandled member: [name: string]: string;*/
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
    IQueryPayload.prototype.outputNumbersAsStrings;
    /** @type {?|undefined} */
    IQueryPayload.prototype.spooledResultSet;
    /** @type {?|undefined} */
    IQueryPayload.prototype.clientId;
    /** @type {?|undefined} */
    IQueryPayload.prototype.queryBands;
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
    /** @type {?|undefined} */
    ISessionPayload.prototype.queryBands;
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
        var _a, _b, _c;
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            /** @type {?} */
            const attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
            payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
     * @param {?=} payload
     * @return {?}
     */
    createSession(connection, payload = { autoCommit: 'true', transactionMode: 'TERA', charSet: 'UTF8' }) {
        var _a, _b, _c;
        /** @type {?} */
        let headers = new HttpHeaders()
            .append('Accept', 'application/vnd.com.teradata.rest-v1.0+json')
            .append('Content-Type', 'application/json');
        if (connection.creds) {
            headers = headers.set('X-Auth-Credentials', 'Basic ' + connection.creds);
            /** @type {?} */
            const attributes = (_a = connection.system.system_attributes) === null || _a === void 0 ? void 0 : _a.attributes;
            payload.logMech = ((_b = attributes) === null || _b === void 0 ? void 0 : _b.log_mech) || ((_c = attributes) === null || _c === void 0 ? void 0 : _c.logMech) || 'DEFAULT';
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
            throw Object.assign({}, error.error, { httpStatus: error.status });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJxdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBRzdDLFFBQVE7SUFDUixTQUFVLE9BQU87SUFDakIsVUFBVyxRQUFRO0lBRW5CLE9BQU87SUFDUCxRQUFTLE1BQU07SUFDZixRQUFTLE1BQU07SUFDZixXQUFZLFNBQVM7SUFFckIsVUFBVTtJQUNWLFVBQVcsUUFBUTtJQUNuQixXQUFZLFNBQVM7SUFDckIsV0FBWSxTQUFTO0lBQ3JCLG9CQUFxQixrQkFBa0I7SUFDdkMsU0FBVSxPQUFPO0lBQ2pCLFdBQVksU0FBUztJQUNyQixVQUFXLFFBQVE7SUFDbkIsV0FBWSxTQUFTO0lBQ3JCLFFBQVMsTUFBTTtJQUNmLFlBQWEsVUFBVTtJQUV2QixXQUFXO0lBQ1gsUUFBUyxNQUFNO0lBQ2YsUUFBUyxNQUFNO0lBQ2YsYUFBYyxXQUFXO0lBQ3pCLHVCQUF3QixxQkFBcUI7SUFDN0MsNEJBQTZCLDBCQUEwQjtJQUV2RCxXQUFXO0lBQ1gsWUFBYSxVQUFVO0lBRXZCLGdCQUFpQixjQUFjO0lBQy9CLHdCQUF5QixzQkFBc0I7SUFDL0MsMEJBQTJCLHdCQUF3QjtJQUNuRCwwQkFBMkIsd0JBQXdCO0lBRW5ELGlCQUFrQixlQUFlO0lBQ2pDLDJCQUE0Qix5QkFBeUI7SUFDckQsMkJBQTRCLHlCQUF5QjtJQUVyRCxtQkFBb0IsaUJBQWlCO0lB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ZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJU3lzdGVtIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3lzdGVtJztcbmltcG9ydCB7IFRkSHR0cFNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIFF1ZXJ5UmVzdWx0Q29sdW1uVHlwZXMge1xuICAvLyBBcnJheVxuICAnQVJSQVknID0gJ0FSUkFZJyxcbiAgJ1ZBUlJBWScgPSAnVkFSUkFZJyxcblxuICAvLyBCeXRlXG4gICdCTE9CJyA9ICdCTE9CJyxcbiAgJ0JZVEUnID0gJ0JZVEUnLFxuICAnVkFSQllURScgPSAnVkFSQllURScsXG5cbiAgLy8gTnVtZXJpY1xuICAnQklHSU5UJyA9ICdCSUdJTlQnLFxuICAnQllURUlOVCcgPSAnQllURUlOVCcsXG4gICdERUNJTUFMJyA9ICdERUNJTUFMJyxcbiAgJ0RPVUJMRSBQUkVDSVNJT04nID0gJ0RPVUJMRSBQUkVDSVNJT04nLFxuICAnRkxPQVQnID0gJ0ZMT0FUJyxcbiAgJ0lOVEVHRVInID0gJ0lOVEVHRVInLFxuICAnTlVNQkVSJyA9ICdOVU1CRVInLFxuICAnTlVNRVJJQycgPSAnTlVNRVJJQycsXG4gICdSRUFMJyA9ICdSRUFMJyxcbiAgJ1NNQUxMSU5UJyA9ICdTTUFMTElOVCcsXG5cbiAgLy8gRGF0ZVRJbWVcbiAgJ0RBVEUnID0gJ0RBVEUnLFxuICAnVElNRScgPSAnVElNRScsXG4gICdUSU1FU1RBTVAnID0gJ1RJTUVTVEFNUCcsXG4gICdUSU1FIFdJVEggVElNRSBaT05FJyA9ICdUSU1FIFdJVEggVElNRSBaT05FJyxcbiAgJ1RJTUVTVEFNUCBXSVRIIFRJTUUgWk9ORScgPSAnVElNRVNUQU1QIFdJVEggVElNRSBaT05FJyxcblxuICAvLyBJbnRlcnZhbFxuICAnSU5URVJWQUwnID0gJ0lOVEVSVkFMJyxcblxuICAnSU5URVJWQUwgREFZJyA9ICdJTlRFUlZBTCBEQVknLFxuICAnSU5URVJWQUwgREFZIFRPIEhPVVInID0gJ0lOVEVSVkFMIERBWSBUTyBIT1VSJyxcbiAgJ0lOVEVSVkFMIERBWSBUTyBNSU5VVEUnID0gJ0lOVEVSVkFMIERBWSBUTyBNSU5VVEUnLFxuICAnSU5URVJWQUwgREFZIFRPIFNFQ09ORCcgPSAnSU5URVJWQUwgREFZIFRPIFNFQ09ORCcsXG5cbiAgJ0lOVEVSVkFMIEhPVVInID0gJ0lOVEVSVkFMIEhPVVInLFxuICAnSU5URVJWQUwgSE9VUiBUTyBNSU5VVEUnID0gJ0lOVEVSVkFMIEhPVVIgVE8gTUlOVVRFJyxcbiAgJ0lOVEVSVkFMIEhPVVIgVE8gU0VDT05EJyA9ICdJTlRFUlZBTCBIT1VSIFRPIFNFQ09ORCcsXG5cbiAgJ0lOVEVSVkFMIE1JTlVURScgPSAnSU5URVJWQUwgTUlOVVRFJyxcbiAgJ0lOVEVSVkFMIE1JTlVURSBUTyBTRUNPTkQnID0gJ0lOVEVSVkFMIE1JTlVURSBUTyBTRUNPTkQnLFxuXG4gICdJTlRFUlZBTCBNT05USCcgPSAnSU5URVJWQUwgTU9OVEgnLFxuICAnSU5URVJWQUwgU0VDT05EJyA9ICdJTlRFUlZBTCBTRUNPTkQnLFxuICAnSU5URVJWQUwgWUVBUicgPSAnSU5URVJWQUwgWUVBUicsXG4gICdJTlRFUlZBTCBZRUFSIFRPIE1PTlRIJyA9ICdJTlRFUlZBTCBZRUFSIFRPIE1PTlRIJyxcblxuICAvLyBDaGFyYWN0ZXJcbiAgJ0NIQVInID0gJ0NIQVInLFxuICAnQ0hBUkFDVEVSJyA9ICdDSEFSQUNURVInLFxuICAnQ0hBUkFDVEVSIFNFVCBHUkFQSElDJyA9ICdDSEFSQUNURVIgU0VUIEdSQVBISUMnLFxuICAnQ0xPQicgPSAnQ0xPQicsXG4gICdDSEFSIFZBUllJTkcnID0gJ0NIQVIgVkFSWUlORycsXG4gICdMT05HIFZBUkNIQVInID0gJ0xPTkcgVkFSQ0hBUicsXG4gICdWQVJDSEFSJyA9ICdWQVJDSEFSJyxcblxuICAvLyBQZXJpb2RcbiAgJ1BFUklPRCcgPSAnUEVSSU9EJyxcblxuICAvLyBVRFRcbiAgJ3VkdF9uYW1lJyA9ICd1ZHRfbmFtZScsXG5cbiAgLy8gUGFyYW1ldGVyXG4gICdURF9BTllUWVBFJyA9ICdURF9BTllUWVBFJyxcbiAgJ1ZBUklBTlRfVFlQRScgPSAnVkFSSUFOVF9UWVBFJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlCYW5kcyB7XG4gIEFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xuICBWZXJzaW9uOiBzdHJpbmc7XG4gIENsaWVudFVzZXI/OiBzdHJpbmc7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGF5bG9hZCB7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHNlc3Npb24/OiBzdHJpbmc7XG4gIGxvZ01lY2g/OiBzdHJpbmc7XG4gIHJvd09mZnNldD86IG51bWJlcjtcbiAgcm93TGltaXQ/OiBudW1iZXI7XG4gIGZvcm1hdD86IHN0cmluZzsgLy8gKGRlZmF1bHQpLW9iamVjdCwgYXJyYXksIG9yIGNzdlxuICBpbmNsdWRlQ29sdW1ucz86IGJvb2xlYW47XG4gIGluY2x1ZGVDb2x1bW5zVHlwZXM/OiBib29sZWFuO1xuICBvdXRwdXROdW1iZXJzQXNTdHJpbmdzPzogYm9vbGVhbjtcbiAgc3Bvb2xlZFJlc3VsdFNldD86IGJvb2xlYW47XG4gIGNsaWVudElkPzogc3RyaW5nO1xuICBxdWVyeUJhbmRzPzogSVF1ZXJ5QmFuZHM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0IHtcbiAgcXVldWVEdXJhdGlvbjogbnVtYmVyO1xuICBxdWVyeUR1cmF0aW9uOiBudW1iZXI7XG4gIHJlc3VsdHM6IElRdWVyeVJlc3VsdFNldFJlc3VsdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdERhdGEge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElRdWVyeVJlc3VsdFNldFJlc3VsdCB7XG4gIGRhdGE6IElRdWVyeVJlc3VsdERhdGFbXTtcbiAgcmVzdWx0U2V0OiBib29sZWFuO1xuICByb3dDb3VudDogbnVtYmVyO1xuICByb3dMaW1pdEV4Y2VlZGVkOiBib29sZWFuO1xuICBjb2x1bW5zPzogSVF1ZXJ5UmVzdWx0U2V0Q29sdW1uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UmVzdWx0U2V0Q29sdW1uIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBrZXlvZiB0eXBlb2YgUXVlcnlSZXN1bHRDb2x1bW5UeXBlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlJbmZvIHtcbiAgc3VjY2Vzcz86IGJvb2xlYW47XG4gIGxvZ1RpbWU/OiBzdHJpbmc7XG4gIGVycm9yPzogYW55O1xuICByZXN1bHRTZXQ/OiBJUXVlcnlSZXN1bHRTZXQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNRTEVDb25uZWN0aW9uIHtcbiAgc3lzdGVtOiBJU3lzdGVtO1xuICBjcmVkcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2Vzc2lvblBheWxvYWQge1xuICBhdXRvQ29tbWl0OiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uTW9kZTogc3RyaW5nO1xuICBjaGFyU2V0OiBzdHJpbmc7XG4gIGRlZmF1bHREYXRhYmFzZT86IHN0cmluZztcbiAgbG9nTWVjaD86IHN0cmluZztcbiAgcXVlcnlCYW5kcz86IElRdWVyeUJhbmRzO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IFRkSHR0cFNlcnZpY2UpIHt9XG5cbiAgcXVlcnlTeXN0ZW0oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBwYXlsb2FkOiBJUXVlcnlQYXlsb2FkKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgICAgY29uc3QgYXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IGNvbm5lY3Rpb24uc3lzdGVtLnN5c3RlbV9hdHRyaWJ1dGVzPy5hdHRyaWJ1dGVzO1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gYXR0cmlidXRlcz8ubG9nX21lY2ggfHwgYXR0cmlidXRlcz8ubG9nTWVjaCB8fCAnREVGQVVMVCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBheWxvYWQubG9nTWVjaCA9ICdKV1QnO1xuICAgIH1cbiAgICBwYXlsb2FkLmNsaWVudElkID0gJ1ZBTlRBR0UuRURJVE9SJztcbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLnBvc3QoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMnLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhYmxlSW5mbyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIGRhdGFiYXNlTmFtZTogc3RyaW5nLCB0YWJsZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgYC9hcGkvcXVlcnkvc3lzdGVtcy8ke2Nvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lfS9kYXRhYmFzZXMvJHtkYXRhYmFzZU5hbWV9L3RhYmxlcy8ke3RhYmxlTmFtZX1gLFxuICAgICAgeyBoZWFkZXJzIH0sXG4gICAgKTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhyb3cgT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IuZXJyb3IsIHsgaHR0cFN0YXR1czogZXJyb3Iuc3RhdHVzIH0pO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlc3VsdFNldDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHRTZXQ7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgZ2V0Vmlld0luZm8oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBkYXRhYmFzZU5hbWU6IHN0cmluZywgdmlld05hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgYC9hcGkvcXVlcnkvc3lzdGVtcy8ke2Nvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lfS9kYXRhYmFzZXMvJHtkYXRhYmFzZU5hbWV9L3ZpZXdzLyR7dmlld05hbWV9YCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcmVxdWVzdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzLycgKyByZXF1ZXN0SWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBnZXRRdWVyaWVzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgc2Vzc2lvbklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAuZ2V0KFxuICAgICAgJy9hcGkvcXVlcnkvdGRyZXN0L3N5c3RlbXMvJyArIGNvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lICsgJy9xdWVyaWVzP3Nlc3Npb249JyArIHNlc3Npb25JZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IElRdWVyeVJlc3VsdFNldCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGdldFF1ZXJ5UmVzdWx0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgcXVlcnlJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJUXVlcnlSZXN1bHRTZXQ+IHtcbiAgICBsZXQgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL3ZuZC5jb20udGVyYWRhdGEucmVzdC12MS4wK2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBpZiAoY29ubmVjdGlvbi5jcmVkcykge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUF1dGgtQ3JlZGVudGlhbHMnLCAnQmFzaWMgJyArIGNvbm5lY3Rpb24uY3JlZHMpO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0OiBPYnNlcnZhYmxlPG9iamVjdD4gPSB0aGlzLl9odHRwLmdldChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvcXVlcmllcy8nICsgcXVlcnlJZCArICcvcmVzdWx0cycsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBkZWxldGVRdWVyeShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIHF1ZXJ5SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5kZWxldGUoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3F1ZXJpZXMvJyArIHF1ZXJ5SWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBJUXVlcnlSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBjcmVhdGVTZXNzaW9uKFxuICAgIGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbixcbiAgICBwYXlsb2FkOiBJU2Vzc2lvblBheWxvYWQgPSB7IGF1dG9Db21taXQ6ICd0cnVlJywgdHJhbnNhY3Rpb25Nb2RlOiAnVEVSQScsIGNoYXJTZXQ6ICdVVEY4JyB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBoZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vdm5kLmNvbS50ZXJhZGF0YS5yZXN0LXYxLjAranNvbicpXG4gICAgICAuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGlmIChjb25uZWN0aW9uLmNyZWRzKSB7XG4gICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQXV0aC1DcmVkZW50aWFscycsICdCYXNpYyAnICsgY29ubmVjdGlvbi5jcmVkcyk7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gY29ubmVjdGlvbi5zeXN0ZW0uc3lzdGVtX2F0dHJpYnV0ZXM/LmF0dHJpYnV0ZXM7XG4gICAgICBwYXlsb2FkLmxvZ01lY2ggPSBhdHRyaWJ1dGVzPy5sb2dfbWVjaCB8fCBhdHRyaWJ1dGVzPy5sb2dNZWNoIHx8ICdERUZBVUxUJztcbiAgICB9IGVsc2Uge1xuICAgICAgcGF5bG9hZC5sb2dNZWNoID0gJ0pXVCc7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3Q6IE9ic2VydmFibGU8b2JqZWN0PiA9IHRoaXMuX2h0dHAucG9zdChcbiAgICAgICcvYXBpL3F1ZXJ5L3RkcmVzdC9zeXN0ZW1zLycgKyBjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZSArICcvc2Vzc2lvbnMnLFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHsgaGVhZGVycyB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRocm93IE9iamVjdC5hc3NpZ24oe30sIGVycm9yLmVycm9yLCB7IGh0dHBTdGF0dXM6IGVycm9yLnN0YXR1cyB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXN1bHRTZXQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0U2V0O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZVNlc3Npb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBzZXNzaW9uSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi92bmQuY29tLnRlcmFkYXRhLnJlc3QtdjEuMCtqc29uJylcbiAgICAgIC5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgaWYgKGNvbm5lY3Rpb24uY3JlZHMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BdXRoLUNyZWRlbnRpYWxzJywgJ0Jhc2ljICcgKyBjb25uZWN0aW9uLmNyZWRzKTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdDogT2JzZXJ2YWJsZTxvYmplY3Q+ID0gdGhpcy5faHR0cC5kZWxldGUoXG4gICAgICAnL2FwaS9xdWVyeS90ZHJlc3Qvc3lzdGVtcy8nICsgY29ubmVjdGlvbi5zeXN0ZW0ubmlja25hbWUgKyAnL3Nlc3Npb25zLycgKyBzZXNzaW9uSWQsXG4gICAgICB7IGhlYWRlcnMgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aHJvdyBPYmplY3QuYXNzaWduKHt9LCBlcnJvci5lcnJvciwgeyBodHRwU3RhdHVzOiBlcnJvci5zdGF0dXMgfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzdWx0U2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFNldDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfUVVFUllfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICB0ZEh0dHBTZXJ2aWNlOiBUZEh0dHBTZXJ2aWNlLFxuKTogVmFudGFnZVF1ZXJ5U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VRdWVyeVNlcnZpY2UodGRIdHRwU2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLCBUZEh0dHBTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9RVUVSWV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==