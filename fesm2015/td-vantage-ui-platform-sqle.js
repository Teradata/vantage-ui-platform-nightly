import { Injectable, Optional, SkipSelf, Component, NgModule } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, timeout, retryWhen, mergeMap, tap, mapTo, switchMap, skipWhile, take, expand, retry } from 'rxjs/operators';
import { TdHttpService } from '@covalent/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, throwError, timer, of, Subject } from 'rxjs';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
import { __awaiter } from 'tslib';
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
/**
 * @record
 */
function IQueryBands() { }
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
function IQueryResultData() { }
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
function IQueryResultSetColumn() { }
if (false) {
    /** @type {?} */
    IQueryResultSetColumn.prototype.name;
    /** @type {?} */
    IQueryResultSetColumn.prototype.type;
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
/**
 * @record
 */
function ISessionPayload() { }
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
class VantageQueryService {
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
function VANTAGE_QUERY_PROVIDER_FACTORY(parent, tdHttpService) {
    return parent || new VantageQueryService(tdHttpService);
}
/** @type {?} */
const VANTAGE_QUERY_PROVIDER = {
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
const CONNECTION_SESSION_KEY = 'vantage.connection_state';
/**
 * @record
 */
function IVantageConnectionState() { }
if (false) {
    /** @type {?|undefined} */
    IVantageConnectionState.prototype.current;
    /** @type {?} */
    IVantageConnectionState.prototype.connections;
    /** @type {?} */
    IVantageConnectionState.prototype.username;
}
/**
 * @record
 */
function IConnectOptions() { }
if (false) {
    /** @type {?} */
    IConnectOptions.prototype.timeout;
    /** @type {?} */
    IConnectOptions.prototype.attempts;
}
/**
 * @param {?} connection
 * @return {?}
 */
function generateConnectionKey(connection) {
    if (connection) {
        return `${connection.system.nickname}${connection.creds}`;
    }
}
class VantageConnectionService {
    /**
     * @param {?} _queryService
     * @param {?} _sessionService
     */
    constructor(_queryService, _sessionService) {
        this._queryService = _queryService;
        this._sessionService = _sessionService;
        this._currentConnectionSubject = new BehaviorSubject(this._getConnectionState().current);
        this._connectionsSubject = new BehaviorSubject(this._getConnectionState().connections);
        this.currentConnection$ = this._currentConnectionSubject.asObservable();
        this.connections$ = this._connectionsSubject.asObservable();
        /** @type {?} */
        const connectionState = this._getConnectionState();
        if (connectionState && connectionState.username !== this._currentUsername) {
            // mismatch, so clear
            this._connections = [];
            this._currentConnection = undefined;
        }
    }
    /**
     * @private
     * @param {?} connection
     * @return {?}
     */
    set _currentConnection(connection) {
        this._setConnectionState({
            current: connection,
            connections: this._connections,
            username: this._currentUsername,
        });
        this._currentConnectionSubject.next(connection);
    }
    /**
     * @private
     * @return {?}
     */
    get _currentConnection() {
        return this._currentConnectionSubject.getValue();
    }
    /**
     * @return {?}
     */
    get currentConnection() {
        return this._currentConnection;
    }
    /**
     * @private
     * @param {?} connections
     * @return {?}
     */
    set _connections(connections) {
        this._setConnectionState({
            current: this._currentConnection,
            connections,
            username: this._currentUsername,
        });
        this._connectionsSubject.next(connections);
    }
    /**
     * @private
     * @return {?}
     */
    get _connections() {
        return this._connectionsSubject.getValue();
    }
    /**
     * @return {?}
     */
    get connections() {
        return this._connections;
    }
    /**
     * @param {?} connection
     * @param {?=} options
     * @return {?}
     */
    addAndSetAsCurrent(connection, options) {
        if (this._getConnectionIndex(connection) > -1) {
            throw Error('Connection already exists');
        }
        else {
            return this._pingAndSave(connection, true, options);
        }
    }
    /**
     * @param {?} connection
     * @param {?=} options
     * @return {?}
     */
    add(connection, options) {
        if (this._getConnectionIndex(connection) > -1) {
            throw Error('Connection already exists');
        }
        else {
            return this._pingAndSave(connection, false, options);
        }
    }
    /**
     * @param {?} connection
     * @param {?=} options
     * @return {?}
     */
    setAsCurrent(connection, options) {
        if (this._getConnectionIndex(connection) > -1) {
            return this._pingAndSave(connection, true, options);
        }
        else {
            throw Error('Connection does not exist');
        }
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    remove(connection) {
        /** @type {?} */
        const index = this._getConnectionIndex(connection);
        if (index > -1) {
            this._connections = [...this._connections.slice(0, index), ...this._connections.slice(index + 1)];
            this._currentConnection =
                this._currentConnection && this._areEqual(this._currentConnection, connection)
                    ? undefined
                    : this._currentConnection;
            return connection;
        }
        else {
            // connection does not exist but that is fine?
            return undefined;
        }
    }
    /**
     * @return {?}
     */
    unsetAsCurrent() {
        this._currentConnection = undefined;
    }
    /**
     * @return {?}
     */
    removeAll() {
        this._connections = [];
        this._currentConnection = undefined;
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    exists(connection) {
        return this._getConnectionIndex(connection) > -1;
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    isCurrent(connection) {
        return this._areEqual(connection, this.currentConnection);
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    generateKey(connection) {
        return generateConnectionKey(connection);
    }
    /**
     * @private
     * @param {?} connection
     * @param {?} setAsCurrent
     * @param {?=} opts
     * @return {?}
     */
    _pingAndSave(connection, setAsCurrent, opts) {
        var _a;
        // test connection with SELECT 1
        return this._queryService.querySystem(connection, { query: 'SELECT 1;' }).pipe(
        // timeout connection if more than 7 seconds
        timeout(((_a = opts) === null || _a === void 0 ? void 0 : _a.timeout) || 7000), 
        // retry only after a certain number of attempts or if the error is something else than 420
        retryWhen((/**
         * @param {?} errors
         * @return {?}
         */
        (errors) => {
            return errors.pipe(mergeMap((/**
             * @param {?} error
             * @param {?} index
             * @return {?}
             */
            (error, index) => {
                var _a;
                /** @type {?} */
                const retryAttempt = index + 1;
                if (retryAttempt > (((_a = opts) === null || _a === void 0 ? void 0 : _a.attempts) || 2) || error.httpStatus === 420) {
                    return throwError(error);
                }
                return timer(0);
            })));
        })), tap((/**
         * @return {?}
         */
        () => {
            // if successful, save
            /** @type {?} */
            const index = this._getConnectionIndex(connection);
            if (index === -1) {
                this._connections = [...this._connections, connection];
            }
            if (setAsCurrent) {
                this._currentConnection = connection;
            }
        })), mapTo(connection));
    }
    /**
     * @private
     * @return {?}
     */
    get _currentUsername() {
        return this._sessionService.user && this._sessionService.user.username;
    }
    /**
     * @private
     * @param {?} connectionA
     * @param {?} connectionB
     * @return {?}
     */
    _areEqual(connectionA, connectionB) {
        return connectionA.creds === connectionB.creds && connectionA.system.nickname === connectionB.system.nickname;
    }
    /**
     * @private
     * @param {?} connection
     * @return {?}
     */
    _getConnectionIndex(connection) {
        return this.connections.findIndex((/**
         * @param {?} conn
         * @return {?}
         */
        (conn) => this._areEqual(connection, conn)));
    }
    /**
     * @private
     * @return {?}
     */
    _getConnectionState() {
        try {
            /** @type {?} */
            const connectionState = JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
            if (connectionState) {
                return connectionState;
            }
            return {
                username: undefined,
                current: undefined,
                connections: [],
            };
        }
        catch (_a) {
            return {
                username: undefined,
                current: undefined,
                connections: [],
            };
        }
    }
    /**
     * @private
     * @param {?} connectionState
     * @return {?}
     */
    _setConnectionState(connectionState) {
        sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify(connectionState));
    }
}
VantageConnectionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageConnectionService.ctorParameters = () => [
    { type: VantageQueryService },
    { type: VantageSessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._currentConnectionSubject;
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._connectionsSubject;
    /** @type {?} */
    VantageConnectionService.prototype.currentConnection$;
    /** @type {?} */
    VantageConnectionService.prototype.connections$;
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._queryService;
    /**
     * @type {?}
     * @private
     */
    VantageConnectionService.prototype._sessionService;
}
/**
 * @param {?} parent
 * @param {?} queryService
 * @param {?} sessionService
 * @return {?}
 */
function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent, queryService, sessionService) {
    return parent || new VantageConnectionService(queryService, sessionService);
}
/** @type {?} */
const VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService, VantageSessionService],
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
const MAX_INTERVAL = 10000;
/** @type {?} */
const BASE_INTERVAL = 2000;
/** @enum {string} */
const SpooledQueryState = {
    QUEUED: 'QUEUED',
    PENDING: 'PENDING',
    SUBMITTED: 'SUBMITTED',
    RESPONDING: 'RESPONDING',
    SPOOLING: 'SPOOLING',
    RESULT_SET_READY: 'RESULT_SET_READY',
};
class VantageSpooledQueryService {
    /**
     * @param {?} connectionService
     * @param {?} queryService
     * @param {?} translate
     */
    constructor(connectionService, queryService, translate) {
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
    cancelLastQuery() {
        /** @type {?} */
        const thisQuery = this.queryStack.pop();
        return this.deleteSpooledQuery(thisQuery);
    }
    /**
     * @return {?}
     */
    getRunningInfo() {
        return this.queryStatus$;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    querySystem(payload) {
        return this.queryService
            .querySystem(this.connectionService.currentConnection, Object.assign(Object.assign({}, payload), { spooledResultSet: true }))
            .pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.queryStack.push(res.id))), switchMap((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.exponentialBackOffInterval(MAX_INTERVAL, res.id))), switchMap((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.queryService.getQuery(this.connectionService.currentConnection, id.toString()).pipe(map((/**
         * @param {?} query
         * @return {?}
         */
        (query) => query.queryState)), tap((/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.queryStatus.next(val))), map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => [id, val]))))), skipWhile((/**
         * @param {?} __0
         * @return {?}
         */
        ([id, status]) => status !== SpooledQueryState.RESULT_SET_READY)), take(1), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([id]) => this.queryService.getQueryResult(this.connectionService.currentConnection, id).pipe(map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => [id, val])), tap((/**
         * @return {?}
         */
        () => this.queryStack.pop())), catchError((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return throwError((/** @type {?} */ (Object.assign(Object.assign(Object.assign({}, res), { id }), { detailMessage: `Error ${res.error.error}: ${res.error.message}` }))));
        }))))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([id, results]) => results)));
    }
    /**
     * @param {?} maxInterval
     * @param {?} returnVal
     * @return {?}
     */
    exponentialBackOffInterval(maxInterval, returnVal) {
        return of(0).pipe(expand((/**
         * @param {?} iteration
         * @return {?}
         */
        (iteration) => timer(this.calcInterval(iteration, maxInterval)).pipe(mapTo(iteration + 1)))), mapTo(returnVal));
    }
    /**
     * @param {?} iteration
     * @param {?} maxInterval
     * @return {?}
     */
    calcInterval(iteration, maxInterval) {
        /** @type {?} */
        const expo = 1.4;
        /** @type {?} */
        const interval = Math.pow(expo, iteration) * BASE_INTERVAL;
        return Math.min(interval, maxInterval);
    }
    /**
     * @param {?} queryId
     * @return {?}
     */
    deleteSpooledQuery(queryId) {
        this.queryService
            .deleteQuery(this.connectionService.currentConnection, queryId)
            .subscribe(undefined, (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            throw new Error(this.translate.instant('SPOOLED_QUERY_COULD_NOT_BE_DELETED', { error: JSON.stringify(err) }));
        }));
    }
}
VantageSpooledQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageSpooledQueryService.ctorParameters = () => [
    { type: VantageConnectionService },
    { type: VantageQueryService },
    { type: TranslateService }
];
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
const VANTAGE_SPOOLED_QUERY_PROVIDER = {
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
const sysDatabases = [
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
class VantageDictionaryService {
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
function VANTAGE_DICTIONARY_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageDictionaryService(queryService);
}
/** @type {?} */
const VANTAGE_DICTIONARY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageDictionaryService,
    deps: [[new Optional(), new SkipSelf(), VantageDictionaryService], VantageQueryService],
    useFactory: VANTAGE_DICTIONARY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageCredentialsDialogComponent {
    /**
     * @param {?} _dialogRef
     * @param {?} _connectionService
     * @param {?} _systemService
     * @param {?} _loadingService
     * @param {?} _translate
     */
    constructor(_dialogRef, _connectionService, _systemService, _loadingService, _translate) {
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
    ngOnInit() {
        // prepopulate connection type
        this.connectionType = this.basicAuthEnabled;
        // prep systems observable
        /** @type {?} */
        let queryParams = new HttpParams();
        queryParams = queryParams.append('systemType', 'TERADATA');
        this.systems$ = this._systemService.query(queryParams).pipe(retry(2), catchError((/**
         * @return {?}
         */
        () => {
            this.errorMsg = this._translate.instant('ERROR_RETRIEVE_DATA');
            return of({ data: [] });
        })), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => resp.data)), tap((/**
         * @param {?} systems
         * @return {?}
         */
        (systems) => {
            if (systems && systems.length) {
                // select first system by default if no system was prepopulated
                if (!this.system) {
                    this.system = systems[0];
                }
                // if there is only one system and basic auth disabled, we try to connect to it automagically
                if (systems.length === 1 && !this.basicAuthEnabled) {
                    this.connect();
                }
            }
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // finallize subject
        this._connectionAttempt$.complete();
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    compareSystemWith(a, b) {
        return a && b && a.nickname === b.nickname;
    }
    /**
     * @return {?}
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.errorMsg = undefined;
                // block users from closing the dialog while connecting
                this._dialogRef.disableClose = true;
                this._loadingService.register('system.connect');
                /** @type {?} */
                const connection = this.connectionType
                    ? { system: this.system, creds: btoa(this.username + ':' + this.password) }
                    : { system: this.system };
                if (this._connectionService.exists(connection)) {
                    yield this._connectionService.setAsCurrent(connection).toPromise();
                }
                else {
                    yield this._connectionService.addAndSetAsCurrent(connection).toPromise();
                }
                this._dialogRef.close(connection);
            }
            catch (error) {
                this.errorMsg = error.message;
            }
            finally {
                this._connectionAttempt$.next();
                // allow users to close dialog again
                this._dialogRef.disableClose = false;
                this._loadingService.resolve('system.connect');
            }
        });
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close();
    }
}
VantageCredentialsDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-sqle-credentials-dialog',
                template: "<div layout=\"column\" layout-fill>\n  <ng-template tdLoading=\"system.connect\" tdLoadingStrategy=\"overlay\">\n    <div *tdLoading=\"let systems; until: systems$ | async\" flex layout=\"column\">\n      <mat-card-title>{{ 'CREATE_CONNECTION' | translate }}</mat-card-title>\n      <div *ngIf=\"errorMsg\">\n        <td-message [sublabel]=\"errorMsg\" color=\"warn\" id=\"vui-credentials-dialog-invalid-message\"></td-message>\n      </div>\n      <mat-card-content class=\"pad-top pad-right-xs pad-bottom pad-left-xs\" flex>\n        <form #form=\"ngForm\">\n          <ng-container *ngIf=\"systems?.length\">\n            <div layout=\"row\">\n              <mat-form-field class=\"vui-credentials-dialog-system\" appearance=\"outline\" flex>\n                <mat-label>\n                  {{ 'SYSTEM' | translate }}\n                </mat-label>\n                <mat-select\n                  id=\"vui-credentials-dialog-system-select\"\n                  [(ngModel)]=\"system\"\n                  name=\"system\"\n                  [compareWith]=\"compareSystemWith\"\n                  required\n                >\n                  <mat-select-trigger>\n                    <div class=\"mat-body-1\">{{ system.nickname }}</div>\n                    <div class=\"mat-caption tc\">{{ system.host }}:{{ system.port }}</div>\n                  </mat-select-trigger>\n                  <mat-option\n                    [id]=\"'vui-credentials-dialog-' + sys.nickname\"\n                    *ngFor=\"let sys of systems\"\n                    [value]=\"sys\"\n                    class=\"vui-credentials-dialog-system-option\"\n                  >\n                    <div class=\"mat-body-1\">{{ sys.nickname }}</div>\n                    <div class=\"mat-caption\">{{ sys.host }}:{{ sys.port }}</div>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"basicAuthEnabled\" id=\"vui-credentials-dialog-connection\">\n              <div class=\"push-bottom\">\n                <mat-radio-group\n                  id=\"vui-credentials-dialog-connection-radio\"\n                  #radioGroup=\"matRadioGroup\"\n                  [(ngModel)]=\"connectionType\"\n                  name=\"connection\"\n                  layout=\"column\"\n                >\n                  <mat-radio-button class=\"push-xs\" [value]=\"false\">\n                    {{ 'USE_CURRENT_SESSION' | translate }}\n                  </mat-radio-button>\n                  <mat-radio-button class=\"push-xs\" [value]=\"true\">\n                    {{ 'ENTER_CREDENTIALS' | translate }}\n                  </mat-radio-button>\n                </mat-radio-group>\n              </div>\n              <ng-container *ngIf=\"connectionType\">\n                <div layout=\"row\">\n                  <mat-form-field appearance=\"outline\" flex>\n                    <mat-label>\n                      {{ 'USERNAME' | translate }}\n                    </mat-label>\n                    <input\n                      id=\"vui-credentials-dialog-username-input\"\n                      matInput\n                      (keyup.enter)=\"form.form.valid && connect()\"\n                      type=\"text\"\n                      [(ngModel)]=\"username\"\n                      name=\"username\"\n                      required\n                      cdkFocusInitial\n                    />\n                  </mat-form-field>\n                </div>\n                <div layout=\"row\">\n                  <mat-form-field appearance=\"outline\" flex>\n                    <mat-label>\n                      {{ 'PASSWORD' | translate }}\n                    </mat-label>\n                    <input\n                      id=\"vui-credentials-dialog-password-input\"\n                      matInput\n                      (keyup.enter)=\"form.form.valid && connect()\"\n                      type=\"password\"\n                      [(ngModel)]=\"password\"\n                      name=\"password\"\n                      required\n                    />\n                  </mat-form-field>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n          <div\n            *ngIf=\"systems && systems.length === 0\"\n            id=\"vui-credentials-dialog-empty-state\"\n            layout=\"column\"\n            layout-align=\"center center\"\n            flex\n            class=\"bgc-surface tc-grey-500 mat-typography pad-lg\"\n            [style.height.%]=\"100\"\n          >\n            <mat-icon matListAvatar class=\"text-super push-bottom\">dns</mat-icon>\n            <h2>{{ 'NO_SYSTEMS' | translate }}</h2>\n            <h3 class=\"text-center\">{{ 'NO_SYSTEMS.NOTE' | translate }}</h3>\n          </div>\n        </form>\n      </mat-card-content>\n      <div layout=\"row\" layout-align=\"end center\" class=\"pull-right-lg\">\n        <button\n          id=\"vui-credentials-dialog-cancel-button\"\n          mat-button\n          class=\"text-upper push-right-sm\"\n          (click)=\"cancel()\"\n        >\n          {{ 'CANCEL' | translate }}\n        </button>\n        <button\n          id=\"vui-credentials-dialog-connect-button\"\n          mat-raised-button\n          [disabled]=\"!form.valid || !systems || systems?.length === 0\"\n          color=\"primary\"\n          class=\"text-upper\"\n          (click)=\"connect()\"\n        >\n          {{ 'CONNECT' | translate }}\n        </button>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                styles: ["::ng-deep .vui-credentials-dialog-system .mat-form-field-infix{padding:.4em 0 .6em}::ng-deep .vui-credentials-dialog-system.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-6%)}::ng-deep .vui-credentials-dialog-system .vui-credentials-dialog-system-option .mat-option-text{line-height:14px}"]
            }] }
];
/** @nocollapse */
VantageCredentialsDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: VantageConnectionService },
    { type: VantageSystemService },
    { type: TdLoadingService },
    { type: TranslateService }
];
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
class VantageSQLEModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { QueryResultColumnTypes, VANTAGE_CONNECTION_PROVIDER, VANTAGE_CONNECTION_PROVIDER_FACTORY, VANTAGE_DICTIONARY_PROVIDER, VANTAGE_DICTIONARY_PROVIDER_FACTORY, VANTAGE_QUERY_PROVIDER, VANTAGE_QUERY_PROVIDER_FACTORY, VANTAGE_SPOOLED_QUERY_PROVIDER, VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY, VantageConnectionService, VantageCredentialsDialogComponent, VantageDictionaryService, VantageQueryService, VantageSQLEModule, VantageSpooledQueryService, generateConnectionKey, sysDatabases };
//# sourceMappingURL=td-vantage-ui-platform-sqle.js.map
