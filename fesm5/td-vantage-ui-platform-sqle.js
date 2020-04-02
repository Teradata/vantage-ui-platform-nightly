import { Injectable, Optional, SkipSelf, Component, NgModule } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, timeout, retryWhen, mergeMap, tap, mapTo, switchMap, skipWhile, take, expand, retry } from 'rxjs/operators';
import { TdHttpService } from '@covalent/http';
import { __assign, __read, __awaiter, __generator } from 'tslib';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { throwError, timer, BehaviorSubject, of, Subject } from 'rxjs';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { TdLoadingService, CovalentLoadingModule } from '@covalent/core/loading';
import { VantageSystemService, VantageSystemModule } from '@td-vantage/ui-platform/system';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CovalentMessageModule } from '@covalent/core/message';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
function VANTAGE_QUERY_PROVIDER_FACTORY(parent, tdHttpService) {
    return parent || new VantageQueryService(tdHttpService);
}
/** @type {?} */
var VANTAGE_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageQueryService,
    deps: [[new Optional(), new SkipSelf(), VantageQueryService], TdHttpService],
    useFactory: VANTAGE_QUERY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CONNECTION_SESSION_KEY = 'vantage.editor.connection';
/**
 * @return {?}
 */
function current() {
    try {
        return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
    }
    catch (_a) {
        return undefined;
    }
}
var VantageConnectionService = /** @class */ (function () {
    function VantageConnectionService(_queryService) {
        this._queryService = _queryService;
    }
    Object.defineProperty(VantageConnectionService.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            return current();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VantageConnectionService.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        sessionStorage.removeItem(CONNECTION_SESSION_KEY);
    };
    /**
     * @param {?} connection
     * @param {?=} opts
     * @return {?}
     */
    VantageConnectionService.prototype.connect = /**
     * @param {?} connection
     * @param {?=} opts
     * @return {?}
     */
    function (connection, opts) {
        var _this = this;
        var _a;
        // clear connection before starting a new one
        this.disconnect();
        // test connection with SELECT 1
        return this._queryService.querySystem(connection, { query: 'SELECT 1;' }).pipe(
        // timeout connection if more than 7 seconds
        timeout(((_a = opts) === null || _a === void 0 ? void 0 : _a.timeout) || 7000), 
        // retry only after a certain number of attempts or if the error is something else than 420
        retryWhen((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            return errors.pipe(mergeMap((/**
             * @param {?} error
             * @param {?} index
             * @return {?}
             */
            function (error, index) {
                var _a;
                /** @type {?} */
                var retryAttempt = index + 1;
                if (retryAttempt > (((_a = opts) === null || _a === void 0 ? void 0 : _a.attempts) || 2) || error.httpStatus === 420) {
                    return throwError(error);
                }
                return timer(0);
            })));
        })), tap((/**
         * @return {?}
         */
        function () { return _this.store(connection); })), // if successful, save
        mapTo(connection));
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    VantageConnectionService.prototype.store = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var system = _a.system, creds = _a.creds;
        sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify({ system: system, creds: creds }));
    };
    VantageConnectionService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageConnectionService.ctorParameters = function () { return [
        { type: VantageQueryService }
    ]; };
    return VantageConnectionService;
}());
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
var VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISpooledQueryError() { }
if (false) {
    /** @type {?} */
    ISpooledQueryError.prototype.id;
    /** @type {?} */
    ISpooledQueryError.prototype.detailMessage;
}
/** @type {?} */
var MAX_INTERVAL = 10000;
/** @type {?} */
var BASE_INTERVAL = 2000;
/** @enum {string} */
var SpooledQueryState = {
    QUEUED: 'QUEUED',
    PENDING: 'PENDING',
    SUBMITTED: 'SUBMITTED',
    RESPONDING: 'RESPONDING',
    SPOOLING: 'SPOOLING',
    RESULT_SET_READY: 'RESULT_SET_READY',
};
var VantageSpooledQueryService = /** @class */ (function () {
    function VantageSpooledQueryService(connectionService, queryService, translate) {
        this.connectionService = connectionService;
        this.queryService = queryService;
        this.translate = translate;
        this.queryStatus = new BehaviorSubject(undefined);
        this.queryStatus$ = this.queryStatus.asObservable();
        this.queryStack = [];
    }
    /**
     * @return {?}
     */
    VantageSpooledQueryService.prototype.cancelLastQuery = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var thisQuery = this.queryStack.pop();
        return this.deleteSpooledQuery(thisQuery);
    };
    /**
     * @return {?}
     */
    VantageSpooledQueryService.prototype.getRunningInfo = /**
     * @return {?}
     */
    function () {
        return this.queryStatus$;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    VantageSpooledQueryService.prototype.querySystem = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        var _this = this;
        return this.queryService.querySystem(this.connectionService.current, __assign(__assign({}, payload), { spooledResultSet: true })).pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.queryStack.push(res.id); })), switchMap((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.exponentialBackOffInterval(MAX_INTERVAL, res.id); })), switchMap((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            return _this.queryService.getQuery(_this.connectionService.current, id.toString()).pipe(map((/**
             * @param {?} query
             * @return {?}
             */
            function (query) { return query.queryState; })), tap((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.queryStatus.next(val); })), map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return [id, val]; })));
        })), skipWhile((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), id = _b[0], status = _b[1];
            return status !== SpooledQueryState.RESULT_SET_READY;
        })), take(1), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 1), id = _b[0];
            return _this.queryService.getQueryResult(_this.connectionService.current, id).pipe(map((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return [id, val]; })), tap((/**
             * @return {?}
             */
            function () { return _this.queryStack.pop(); })), catchError((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return throwError((/** @type {?} */ (__assign(__assign(__assign({}, res), { id: id }), { detailMessage: "Error " + res.error.error + ": " + res.error.message }))));
            })));
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), id = _b[0], results = _b[1];
            return results;
        })));
    };
    /**
     * @param {?} maxInterval
     * @param {?} returnVal
     * @return {?}
     */
    VantageSpooledQueryService.prototype.exponentialBackOffInterval = /**
     * @param {?} maxInterval
     * @param {?} returnVal
     * @return {?}
     */
    function (maxInterval, returnVal) {
        var _this = this;
        return of(0).pipe(expand((/**
         * @param {?} iteration
         * @return {?}
         */
        function (iteration) { return timer(_this.calcInterval(iteration, maxInterval)).pipe(mapTo(iteration + 1)); })), mapTo(returnVal));
    };
    /**
     * @param {?} iteration
     * @param {?} maxInterval
     * @return {?}
     */
    VantageSpooledQueryService.prototype.calcInterval = /**
     * @param {?} iteration
     * @param {?} maxInterval
     * @return {?}
     */
    function (iteration, maxInterval) {
        /** @type {?} */
        var expo = 1.4;
        /** @type {?} */
        var interval = Math.pow(expo, iteration) * BASE_INTERVAL;
        return Math.min(interval, maxInterval);
    };
    /**
     * @param {?} queryId
     * @return {?}
     */
    VantageSpooledQueryService.prototype.deleteSpooledQuery = /**
     * @param {?} queryId
     * @return {?}
     */
    function (queryId) {
        var _this = this;
        this.queryService.deleteQuery(this.connectionService.current, queryId).subscribe(undefined, (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            throw new Error(_this.translate.instant('SPOOLED_QUERY_COULD_NOT_BE_DELETED', { error: JSON.stringify(err) }));
        }));
    };
    VantageSpooledQueryService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageSpooledQueryService.ctorParameters = function () { return [
        { type: VantageConnectionService },
        { type: VantageQueryService },
        { type: TranslateService }
    ]; };
    return VantageSpooledQueryService;
}());
if (false) {
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStatus;
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStatus$;
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStack;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.connectionService;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.queryService;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.translate;
}
/**
 * @param {?} parent
 * @param {?} connectionService
 * @param {?} queryService
 * @param {?} translate
 * @return {?}
 */
function VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY(parent, connectionService, queryService, translate) {
    return parent || new VantageSpooledQueryService(connectionService, queryService, translate);
}
/** @type {?} */
var VANTAGE_SPOOLED_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSpooledQueryService,
    deps: [
        [new Optional(), new SkipSelf(), VantageSpooledQueryService],
        VantageConnectionService,
        VantageQueryService,
        TranslateService,
    ],
    useFactory: VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var sysDatabases = [
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
var VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageCredentialsDialogComponent = /** @class */ (function () {
    function VantageCredentialsDialogComponent(_dialogRef, _connectionService, _systemService, _loadingService, _translate) {
        this._dialogRef = _dialogRef;
        this._connectionService = _connectionService;
        this._systemService = _systemService;
        this._loadingService = _loadingService;
        this._translate = _translate;
        // listens to times we try to connect regardless
        this._connectionAttempt$ = new Subject();
        this.connectionAttempt$ = this._connectionAttempt$.asObservable();
        this.basicAuthEnabled = false;
        this.connectionType = false;
    }
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // prepopulate connection type
        this.connectionType = this.basicAuthEnabled;
        // prep systems observable
        /** @type {?} */
        var queryParams = new HttpParams();
        queryParams = queryParams.append('systemType', 'TERADATA');
        this.systems$ = this._systemService.query(queryParams).pipe(retry(2), catchError((/**
         * @return {?}
         */
        function () {
            _this.errorMsg = _this._translate.instant('ERROR_RETRIEVE_DATA');
            return of({ data: [] });
        })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return resp.data; })), tap((/**
         * @param {?} systems
         * @return {?}
         */
        function (systems) {
            if (systems && systems.length) {
                // select first system by default if no system was prepopulated
                if (!_this.system) {
                    _this.system = systems[0];
                }
                // if there is only one system and basic auth disabled, we try to connect to it automagically
                if (systems.length === 1 && !_this.basicAuthEnabled) {
                    _this.connect();
                }
            }
        })));
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // finallize subject
        this._connectionAttempt$.complete();
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.compareSystemWith = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return a && b && a.nickname === b.nickname;
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.connect = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        this.errorMsg = undefined;
                        // block users from closing the dialog while connecting
                        this._dialogRef.disableClose = true;
                        this._loadingService.register('system.connect');
                        connection = this.connectionType
                            ? { system: this.system, creds: btoa(this.username + ':' + this.password) }
                            : { system: this.system };
                        return [4 /*yield*/, this._connectionService.connect(connection).toPromise()];
                    case 1:
                        _a.sent();
                        this._dialogRef.close(connection);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        this.errorMsg = error_1.message;
                        return [3 /*break*/, 4];
                    case 3:
                        this._connectionAttempt$.next();
                        // allow users to close dialog again
                        this._dialogRef.disableClose = false;
                        this._loadingService.resolve('system.connect');
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close();
    };
    VantageCredentialsDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-sqle-credentials-dialog',
                    template: "<div layout=\"column\" layout-fill>\n  <ng-template tdLoading=\"system.connect\" tdLoadingStrategy=\"overlay\">\n    <div *tdLoading=\"let systems; until: systems$ | async\" flex layout=\"column\">\n      <mat-card-title>{{ 'CREATE_CONNECTION' | translate }}</mat-card-title>\n      <div *ngIf=\"errorMsg\">\n        <td-message [sublabel]=\"errorMsg\" color=\"warn\" id=\"vui-credentials-dialog-invalid-message\"></td-message>\n      </div>\n      <mat-card-content class=\"pad-top pad-right-xs pad-bottom pad-left-xs\" flex>\n        <form #form=\"ngForm\">\n          <ng-container *ngIf=\"systems?.length\">\n            <div layout=\"row\">\n              <mat-form-field class=\"vui-credentials-dialog-system\" appearance=\"outline\" flex>\n                <mat-label>\n                  {{ 'SYSTEM' | translate }}\n                </mat-label>\n                <mat-select\n                  id=\"vui-credentials-dialog-system-select\"\n                  [(ngModel)]=\"system\"\n                  name=\"system\"\n                  [compareWith]=\"compareSystemWith\"\n                  required\n                >\n                  <mat-select-trigger>\n                    <div class=\"mat-body-1\">{{ system.nickname }}</div>\n                    <div class=\"mat-caption tc\">{{ system.host }}:{{ system.port }}</div>\n                  </mat-select-trigger>\n                  <mat-option\n                    [id]=\"'vui-credentials-dialog-' + sys.nickname\"\n                    *ngFor=\"let sys of systems\"\n                    [value]=\"sys\"\n                    class=\"vui-credentials-dialog-system-option\"\n                  >\n                    <div class=\"mat-body-1\">{{ sys.nickname }}</div>\n                    <div class=\"mat-caption\">{{ sys.host }}:{{ sys.port }}</div>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"basicAuthEnabled\" class=\"push-bottom\">\n              <mat-radio-group\n                id=\"vui-credentials-dialog-connection-radio\"\n                #radioGroup=\"matRadioGroup\"\n                [(ngModel)]=\"connectionType\"\n                name=\"connection\"\n                layout=\"column\"\n              >\n                <mat-radio-button class=\"push-xs\" [value]=\"false\">\n                  {{ 'USE_CURRENT_SESSION' | translate }}\n                </mat-radio-button>\n                <mat-radio-button class=\"push-xs\" [value]=\"true\">\n                  {{ 'ENTER_CREDENTIALS' | translate }}\n                </mat-radio-button>\n              </mat-radio-group>\n            </div>\n            <ng-container *ngIf=\"connectionType\">\n              <div layout=\"row\">\n                <mat-form-field appearance=\"outline\" flex>\n                  <mat-label>\n                    {{ 'USERNAME' | translate }}\n                  </mat-label>\n                  <input\n                    id=\"vui-credentials-dialog-username-input\"\n                    matInput\n                    (keyup.enter)=\"form.form.valid && connect()\"\n                    type=\"text\"\n                    [(ngModel)]=\"username\"\n                    name=\"username\"\n                    required\n                    cdkFocusInitial\n                  />\n                </mat-form-field>\n              </div>\n              <div layout=\"row\">\n                <mat-form-field appearance=\"outline\" flex>\n                  <mat-label>\n                    {{ 'PASSWORD' | translate }}\n                  </mat-label>\n                  <input\n                    id=\"vui-credentials-dialog-password-input\"\n                    matInput\n                    (keyup.enter)=\"form.form.valid && connect()\"\n                    type=\"password\"\n                    [(ngModel)]=\"password\"\n                    name=\"password\"\n                    required\n                  />\n                </mat-form-field>\n              </div>\n            </ng-container>\n          </ng-container>\n          <div\n            *ngIf=\"systems && systems.length === 0\"\n            id=\"vui-credentials-dialog-empty-state\"\n            layout=\"column\"\n            layout-align=\"center center\"\n            flex\n            class=\"bgc-surface tc-grey-500 mat-typography pad-lg\"\n            [style.height.%]=\"100\"\n          >\n            <mat-icon matListAvatar class=\"text-super push-bottom\">dns</mat-icon>\n            <h2>{{ 'NO_SYSTEMS' | translate }}</h2>\n            <h3 class=\"text-center\">{{ 'NO_SYSTEMS.NOTE' | translate }}</h3>\n          </div>\n        </form>\n      </mat-card-content>\n      <div layout=\"row\" layout-align=\"end center\" class=\"pull-right-lg\">\n        <button\n          id=\"vui-credentials-dialog-cancel-button\"\n          mat-button\n          class=\"text-upper push-right-sm\"\n          (click)=\"cancel()\"\n        >\n          {{ 'CANCEL' | translate }}\n        </button>\n        <button\n          id=\"vui-credentials-dialog-connect-button\"\n          mat-raised-button\n          [disabled]=\"!form.valid || !systems || systems?.length === 0\"\n          color=\"primary\"\n          class=\"text-upper\"\n          (click)=\"connect()\"\n        >\n          {{ 'CONNECT' | translate }}\n        </button>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                    styles: ["::ng-deep .vui-credentials-dialog-system .mat-form-field-infix{padding:.4em 0 .6em}::ng-deep .vui-credentials-dialog-system.mat-form-field-appearance-outline .mat-select-arrow-wrapper{-webkit-transform:translateY(-6%);transform:translateY(-6%)}::ng-deep .vui-credentials-dialog-system .vui-credentials-dialog-system-option .mat-option-text{line-height:14px}"]
                }] }
    ];
    /** @nocollapse */
    VantageCredentialsDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: VantageConnectionService },
        { type: VantageSystemService },
        { type: TdLoadingService },
        { type: TranslateService }
    ]; };
    return VantageCredentialsDialogComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._connectionAttempt$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.connectionAttempt$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.basicAuthEnabled;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.systems$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.system;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.connectionType;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.username;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.password;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.errorMsg;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._dialogRef;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._connectionService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._systemService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._loadingService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._translate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageSQLEModule = /** @class */ (function () {
    function VantageSQLEModule() {
    }
    VantageSQLEModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [VantageCredentialsDialogComponent],
                    exports: [VantageCredentialsDialogComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatCardModule,
                        MatButtonModule,
                        MatDialogModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatRadioModule,
                        MatIconModule,
                        CovalentLoadingModule,
                        CovalentMessageModule,
                        VantageSystemModule,
                        TranslateModule,
                    ],
                    providers: [
                        VANTAGE_CONNECTION_PROVIDER,
                        VANTAGE_DICTIONARY_PROVIDER,
                        VANTAGE_QUERY_PROVIDER,
                        VANTAGE_SPOOLED_QUERY_PROVIDER,
                    ],
                },] }
    ];
    return VantageSQLEModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VANTAGE_CONNECTION_PROVIDER, VANTAGE_CONNECTION_PROVIDER_FACTORY, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_DICTIONARY_PROVIDER_FACTORY, VANTAGE_QUERY_PROVIDER, VANTAGE_QUERY_PROVIDER_FACTORY, VANTAGE_SPOOLED_QUERY_PROVIDER, VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY, VantageConnectionService, VantageCredentialsDialogComponent, VantageDictionaryService, VantageQueryService, VantageSQLEModule, VantageSpooledQueryService, current, sysDatabases };
//# sourceMappingURL=td-vantage-ui-platform-sqle.js.map
