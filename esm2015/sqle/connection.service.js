/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { throwError, timer, BehaviorSubject } from 'rxjs';
import { mergeMap, retryWhen, tap, timeout, mapTo } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
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
export function IConnectOptions() { }
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
export function generateConnectionKey(connection) {
    if (connection) {
        return `${connection.system.nickname}${connection.creds}`;
    }
}
export class VantageConnectionService {
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
export function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent, queryService, sessionService) {
    return parent || new VantageConnectionService(queryService, sessionService);
}
/** @type {?} */
export const VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService, VantageSessionService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBYyxVQUFVLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7TUFFL0Qsc0JBQXNCLEdBQVcsMEJBQTBCOzs7O0FBRWpFLHNDQUlDOzs7SUFIQywwQ0FBMEI7O0lBQzFCLDhDQUErQjs7SUFDL0IsMkNBQWlCOzs7OztBQUduQixxQ0FHQzs7O0lBRkMsa0NBQWdCOztJQUNoQixtQ0FBaUI7Ozs7OztBQUduQixNQUFNLFVBQVUscUJBQXFCLENBQUMsVUFBMkI7SUFDL0QsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUdELE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBVW5DLFlBQW9CLGFBQWtDLEVBQVUsZUFBc0M7UUFBbEYsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBVHJGLDhCQUF5QixHQUFxQyxJQUFJLGVBQWUsQ0FDaEcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FB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O1FBQ2xFLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7OztZQW5MRixVQUFVOzs7O1lBdEJGLG1CQUFtQjtZQUNuQixxQkFBcUI7Ozs7Ozs7SUF1QjVCLDZEQUVFOzs7OztJQUNGLHVEQUVFOztJQUNGLHNEQUF1Rzs7SUFDdkcsZ0RBQTZGOzs7OztJQUVqRixpREFBMEM7Ozs7O0lBQUUsbURBQThDOzs7Ozs7OztBQTJLeEcsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCxNQUFnQyxFQUNoQyxZQUFpQyxFQUNqQyxjQUFxQztJQUVyQyxPQUFPLE1BQU0sSUFBSSxJQUFJLHdCQUF3QixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM5RSxDQUFDOztBQUVELE1BQU0sT0FBTywyQkFBMkIsR0FBYTs7SUFFbkQsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO0lBQzlHLFVBQVUsRUFBRSxtQ0FBbUM7Q0FDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCB0aW1lciwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgcmV0cnlXaGVuLCB0YXAsIHRpbWVvdXQsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVmFudGFnZVF1ZXJ5U2VydmljZSwgSVNRTEVDb25uZWN0aW9uIH0gZnJvbSAnLi9xdWVyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgnO1xuXG5jb25zdCBDT05ORUNUSU9OX1NFU1NJT05fS0VZOiBzdHJpbmcgPSAndmFudGFnZS5jb25uZWN0aW9uX3N0YXRlJztcblxuaW50ZXJmYWNlIElWYW50YWdlQ29ubmVjdGlvblN0YXRlIHtcbiAgY3VycmVudD86IElTUUxFQ29ubmVjdGlvbjtcbiAgY29ubmVjdGlvbnM6IElTUUxFQ29ubmVjdGlvbltdO1xuICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25uZWN0T3B0aW9ucyB7XG4gIHRpbWVvdXQ6IG51bWJlcjtcbiAgYXR0ZW1wdHM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29ubmVjdGlvbktleShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBzdHJpbmcge1xuICBpZiAoY29ubmVjdGlvbikge1xuICAgIHJldHVybiBgJHtjb25uZWN0aW9uLnN5c3RlbS5uaWNrbmFtZX0ke2Nvbm5lY3Rpb24uY3JlZHN9YDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudENvbm5lY3Rpb25TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8SVNRTEVDb25uZWN0aW9uPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVNRTEVDb25uZWN0aW9uPihcbiAgICB0aGlzLl9nZXRDb25uZWN0aW9uU3RhdGUoKS5jdXJyZW50LFxuICApO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25uZWN0aW9uc1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxJU1FMRUNvbm5lY3Rpb25bXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElTUUxFQ29ubmVjdGlvbltdPihcbiAgICB0aGlzLl9nZXRDb25uZWN0aW9uU3RhdGUoKS5jb25uZWN0aW9ucyxcbiAgKTtcbiAgcHVibGljIGN1cnJlbnRDb25uZWN0aW9uJDogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+ID0gdGhpcy5fY3VycmVudENvbm5lY3Rpb25TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICBwdWJsaWMgY29ubmVjdGlvbnMkOiBPYnNlcnZhYmxlPElTUUxFQ29ubmVjdGlvbltdPiA9IHRoaXMuX2Nvbm5lY3Rpb25zU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsIHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uU3RhdGU6IElWYW50YWdlQ29ubmVjdGlvblN0YXRlID0gdGhpcy5fZ2V0Q29ubmVjdGlvblN0YXRlKCk7XG4gICAgaWYgKGNvbm5lY3Rpb25TdGF0ZSAmJiBjb25uZWN0aW9uU3RhdGUudXNlcm5hbWUgIT09IHRoaXMuX2N1cnJlbnRVc2VybmFtZSkge1xuICAgICAgLy8gbWlzbWF0Y2gsIHNvIGNsZWFyXG4gICAgICB0aGlzLl9jb25uZWN0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXQgX2N1cnJlbnRDb25uZWN0aW9uKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbikge1xuICAgIHRoaXMuX3NldENvbm5lY3Rpb25TdGF0ZSh7XG4gICAgICBjdXJyZW50OiBjb25uZWN0aW9uLFxuICAgICAgY29ubmVjdGlvbnM6IHRoaXMuX2Nvbm5lY3Rpb25zLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuX2N1cnJlbnRVc2VybmFtZSxcbiAgICB9KTtcbiAgICB0aGlzLl9jdXJyZW50Q29ubmVjdGlvblN1YmplY3QubmV4dChjb25uZWN0aW9uKTtcbiAgfVxuICBwcml2YXRlIGdldCBfY3VycmVudENvbm5lY3Rpb24oKTogSVNRTEVDb25uZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENvbm5lY3Rpb25TdWJqZWN0LmdldFZhbHVlKCk7XG4gIH1cbiAgcHVibGljIGdldCBjdXJyZW50Q29ubmVjdGlvbigpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q29ubmVjdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IF9jb25uZWN0aW9ucyhjb25uZWN0aW9uczogSVNRTEVDb25uZWN0aW9uW10pIHtcbiAgICB0aGlzLl9zZXRDb25uZWN0aW9uU3RhdGUoe1xuICAgICAgY3VycmVudDogdGhpcy5fY3VycmVudENvbm5lY3Rpb24sXG4gICAgICBjb25uZWN0aW9ucyxcbiAgICAgIHVzZXJuYW1lOiB0aGlzLl9jdXJyZW50VXNlcm5hbWUsXG4gICAgfSk7XG4gICAgdGhpcy5fY29ubmVjdGlvbnNTdWJqZWN0Lm5leHQoY29ubmVjdGlvbnMpO1xuICB9XG4gIHByaXZhdGUgZ2V0IF9jb25uZWN0aW9ucygpOiBJU1FMRUNvbm5lY3Rpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25zU3ViamVjdC5nZXRWYWx1ZSgpO1xuICB9XG4gIHB1YmxpYyBnZXQgY29ubmVjdGlvbnMoKTogSVNRTEVDb25uZWN0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBhZGRBbmRTZXRBc0N1cnJlbnQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBvcHRpb25zPzogSUNvbm5lY3RPcHRpb25zKTogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+IHtcbiAgICBpZiAodGhpcy5fZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb24pID4gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDb25uZWN0aW9uIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9waW5nQW5kU2F2ZShjb25uZWN0aW9uLCB0cnVlLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiwgb3B0aW9ucz86IElDb25uZWN0T3B0aW9ucyk6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgaWYgKHRoaXMuX2dldENvbm5lY3Rpb25JbmRleChjb25uZWN0aW9uKSA+IC0xKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGluZ0FuZFNhdmUoY29ubmVjdGlvbiwgZmFsc2UsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRBc0N1cnJlbnQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBvcHRpb25zPzogSUNvbm5lY3RPcHRpb25zKTogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+IHtcbiAgICBpZiAodGhpcy5fZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb24pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waW5nQW5kU2F2ZShjb25uZWN0aW9uLCB0cnVlLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Nvbm5lY3Rpb24gZG9lcyBub3QgZXhpc3QnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IElTUUxFQ29ubmVjdGlvbiB7XG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dldENvbm5lY3Rpb25JbmRleChjb25uZWN0aW9uKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fY29ubmVjdGlvbnMgPSBbLi4udGhpcy5fY29ubmVjdGlvbnMuc2xpY2UoMCwgaW5kZXgpLCAuLi50aGlzLl9jb25uZWN0aW9ucy5zbGljZShpbmRleCArIDEpXTtcbiAgICAgIHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uID1cbiAgICAgICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gJiYgdGhpcy5fYXJlRXF1YWwodGhpcy5fY3VycmVudENvbm5lY3Rpb24sIGNvbm5lY3Rpb24pXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uO1xuICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbm5lY3Rpb24gZG9lcyBub3QgZXhpc3QgYnV0IHRoYXQgaXMgZmluZT9cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVuc2V0QXNDdXJyZW50KCk6IHZvaWQge1xuICAgIHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb25uZWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGV4aXN0cyhjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb24pID4gLTE7XG4gIH1cblxuICBwdWJsaWMgaXNDdXJyZW50KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hcmVFcXVhbChjb25uZWN0aW9uLCB0aGlzLmN1cnJlbnRDb25uZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZUtleShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBnZW5lcmF0ZUNvbm5lY3Rpb25LZXkoY29ubmVjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIF9waW5nQW5kU2F2ZShcbiAgICBjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sXG4gICAgc2V0QXNDdXJyZW50OiBib29sZWFuLFxuICAgIG9wdHM/OiBJQ29ubmVjdE9wdGlvbnMsXG4gICk6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pLnBpcGUoXG4gICAgICAvLyB0aW1lb3V0IGNvbm5lY3Rpb24gaWYgbW9yZSB0aGFuIDcgc2Vjb25kc1xuICAgICAgdGltZW91dChvcHRzPy50aW1lb3V0IHx8IDcwMDApLFxuICAgICAgLy8gcmV0cnkgb25seSBhZnRlciBhIGNlcnRhaW4gbnVtYmVyIG9mIGF0dGVtcHRzIG9yIGlmIHRoZSBlcnJvciBpcyBzb21ldGhpbmcgZWxzZSB0aGFuIDQyMFxuICAgICAgcmV0cnlXaGVuKChlcnJvcnM6IE9ic2VydmFibGU8eyBodHRwU3RhdHVzOiBudW1iZXIgfT4pID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9ycy5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKChlcnJvcjogeyBodHRwU3RhdHVzOiBudW1iZXIgfSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmV0cnlBdHRlbXB0OiBudW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICBpZiAocmV0cnlBdHRlbXB0ID4gKG9wdHM/LmF0dGVtcHRzIHx8IDIpIHx8IGVycm9yLmh0dHBTdGF0dXMgPT09IDQyMCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGltZXIoMCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNhdmVcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dldENvbm5lY3Rpb25JbmRleChjb25uZWN0aW9uKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25zID0gWy4uLnRoaXMuX2Nvbm5lY3Rpb25zLCBjb25uZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0QXNDdXJyZW50KSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcFRvKGNvbm5lY3Rpb24pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfY3VycmVudFVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLnVzZXIgJiYgdGhpcy5fc2Vzc2lvblNlcnZpY2UudXNlci51c2VybmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZUVxdWFsKGNvbm5lY3Rpb25BOiBJU1FMRUNvbm5lY3Rpb24sIGNvbm5lY3Rpb25COiBJU1FMRUNvbm5lY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29ubmVjdGlvbkEuY3JlZHMgPT09IGNvbm5lY3Rpb25CLmNyZWRzICYmIGNvbm5lY3Rpb25BLnN5c3RlbS5uaWNrbmFtZSA9PT0gY29ubmVjdGlvbkIuc3lzdGVtLm5pY2tuYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZmluZEluZGV4KChjb25uOiBJU1FMRUNvbm5lY3Rpb24pID0+IHRoaXMuX2FyZUVxdWFsKGNvbm5lY3Rpb24sIGNvbm4pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbm5lY3Rpb25TdGF0ZSgpOiBJVmFudGFnZUNvbm5lY3Rpb25TdGF0ZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZTogSVZhbnRhZ2VDb25uZWN0aW9uU3RhdGUgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSkpO1xuICAgICAgaWYgKGNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvblN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0aW9uczogW10sXG4gICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0aW9uczogW10sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldENvbm5lY3Rpb25TdGF0ZShjb25uZWN0aW9uU3RhdGU6IElWYW50YWdlQ29ubmVjdGlvblN0YXRlKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeShjb25uZWN0aW9uU3RhdGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gIHNlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlLCBzZXNzaW9uU2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlLCBWYW50YWdlU2Vzc2lvblNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=