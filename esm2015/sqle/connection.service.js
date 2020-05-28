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
export function stringify(connection) {
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
    stringify(connection) {
        return stringify(connection);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBYyxVQUFVLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7TUFFL0Qsc0JBQXNCLEdBQVcsMEJBQTBCOzs7O0FBRWpFLHNDQUlDOzs7SUFIQywwQ0FBMEI7O0lBQzFCLDhDQUErQjs7SUFDL0IsMkNBQWlCOzs7OztBQUduQixxQ0FHQzs7O0lBRkMsa0NBQWdCOztJQUNoQixtQ0FBaUI7Ozs7OztBQUduQixNQUFNLFVBQVUsU0FBUyxDQUFDLFVBQTJCO0lBQ25ELElBQUksVUFBVSxFQUFFO1FBQ2QsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQVVuQyxZQUFvQixhQUFrQyxFQUFVLGVBQXNDO1FBQWxGLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVRyRiw4QkFBeUIsR0FBcUMsSUFBSSxlQUFlLENBQ2hHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sQ0FDbkMsQ0FBQztRQUNlLHdCQUFtQixHQUF1QyxJQUFJLGVBQWUsQ0FDNUYsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsV0FBVyxDQUN2QyxDQUFDO1FBQ0ssdUJBQWtCLEdBQWdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNoRyxpQkFBWSxHQUFrQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7O2NBR3JGLGVBQWUsR0FBNEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBQzNFLElBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pFLHFCQUFxQjtZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsSUFBWSxrQkFBa0IsQ0FBQyxVQUEyQjtRQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkIsT0FBTyxFQUFFLFVBQVU7WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzlCLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFDRCxJQUFZLGtCQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuRCxDQUFDOzs7O0lBQ0QsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsSUFBWSxZQUFZLENBQUMsV0FBOEI7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQ2hDLFdBQVc7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBQ0QsSUFBWSxZQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFDRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVNLGtCQUFrQixDQUFDLFVBQTJCLEVBQUUsT0FBeUI7UUFDOUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0MsTUFBTSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsVUFBMkIsRUFBRSxPQUF5QjtRQUMvRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM3QyxNQUFNLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7Ozs7OztJQUVNLFlBQVksQ0FBQyxVQUEyQixFQUFFLE9BQXlCO1FBQ3hFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxNQUFNLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsVUFBMkI7O2NBQ2pDLEtBQUssR0FBVyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1FBQzFELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEcsSUFBSSxDQUFDLGtCQUFrQjtnQkFDckIsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQztvQkFDNUUsQ0FBQyxDQUFDLFNBQVM7b0JBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUM5QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsOENBQThDO1lBQzlDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVNLGNBQWM7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsVUFBMkI7UUFDdkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsVUFBMkI7UUFDMUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVNLFNBQVMsQ0FBQyxVQUEyQjtRQUMxQyxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUVPLFlBQVksQ0FDbEIsVUFBMkIsRUFDM0IsWUFBcUIsRUFDckIsSUFBc0I7O1FBRXRCLGdDQUFnQztRQUNoQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDNUUsNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxPQUFBLElBQUksMENBQUUsT0FBTyxLQUFJLElBQUksQ0FBQztRQUM5QiwyRkFBMkY7UUFDM0YsU0FBUzs7OztRQUFDLENBQUMsTUFBMEMsRUFBRSxFQUFFO1lBQ3ZELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsUUFBUTs7Ozs7WUFBQyxDQUFDLEtBQTZCLEVBQUUsS0FBYSxFQUFFLEVBQUU7OztzQkFDbEQsWUFBWSxHQUFXLEtBQUssR0FBRyxDQUFDO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxDQUFDLE9BQUEsSUFBSSwwQ0FBRSxRQUFRLEtBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7b0JBQ3BFLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7O1FBQUMsR0FBRyxFQUFFOzs7a0JBRUQsS0FBSyxHQUFXLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7WUFDMUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDeEQ7WUFDRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQzthQUN0QztRQUNILENBQUMsRUFBQyxFQUNGLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFBWSxnQkFBZ0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekUsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxXQUE0QixFQUFFLFdBQTRCO1FBQzFFLE9BQU8sV0FBVyxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBSyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2hILENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFVBQTJCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBRU8sbUJBQW1CO1FBQ3pCLElBQUk7O2tCQUNJLGVBQWUsR0FBNEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDM0csSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1lBQ0QsT0FBTztnQkFDTCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFdBQVcsRUFBRSxFQUFFO2FBQ2hCLENBQUM7U0FDSDtRQUFDLFdBQU07WUFDTixPQUFPO2dCQUNMLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsV0FBVyxFQUFFLEVBQUU7YUFDaEIsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsZUFBd0M7UUFDbEUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7O1lBbkxGLFVBQVU7Ozs7WUF0QkYsbUJBQW1CO1lBQ25CLHFCQUFxQjs7Ozs7OztJQXVCNUIsNkRBRUU7Ozs7O0lBQ0YsdURBRUU7O0lBQ0Ysc0RBQXVHOztJQUN2RyxnREFBNkY7Ozs7O0lBRWpGLGlEQUEwQzs7Ozs7SUFBRSxtREFBOEM7Ozs7Ozs7O0FBMkt4RyxNQUFNLFVBQVUsbUNBQW1DLENBQ2pELE1BQWdDLEVBQ2hDLFlBQWlDLEVBQ2pDLGNBQXFDO0lBRXJDLE9BQU8sTUFBTSxJQUFJLElBQUksd0JBQXdCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQixHQUFhOztJQUVuRCxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7SUFDOUcsVUFBVSxFQUFFLG1DQUFtQztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIHRpbWVyLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCByZXRyeVdoZW4sIHRhcCwgdGltZW91dCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBWYW50YWdlUXVlcnlTZXJ2aWNlLCBJU1FMRUNvbm5lY3Rpb24gfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFudGFnZVNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aCc7XG5cbmNvbnN0IENPTk5FQ1RJT05fU0VTU0lPTl9LRVk6IHN0cmluZyA9ICd2YW50YWdlLmNvbm5lY3Rpb25fc3RhdGUnO1xuXG5pbnRlcmZhY2UgSVZhbnRhZ2VDb25uZWN0aW9uU3RhdGUge1xuICBjdXJyZW50PzogSVNRTEVDb25uZWN0aW9uO1xuICBjb25uZWN0aW9uczogSVNRTEVDb25uZWN0aW9uW107XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbm5lY3RPcHRpb25zIHtcbiAgdGltZW91dDogbnVtYmVyO1xuICBhdHRlbXB0czogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IHN0cmluZyB7XG4gIGlmIChjb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuIGAke2Nvbm5lY3Rpb24uc3lzdGVtLm5pY2tuYW1lfSR7Y29ubmVjdGlvbi5jcmVkc31gO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50Q29ubmVjdGlvblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxJU1FMRUNvbm5lY3Rpb24+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJU1FMRUNvbm5lY3Rpb24+KFxuICAgIHRoaXMuX2dldENvbm5lY3Rpb25TdGF0ZSgpLmN1cnJlbnQsXG4gICk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Nvbm5lY3Rpb25zU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PElTUUxFQ29ubmVjdGlvbltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVNRTEVDb25uZWN0aW9uW10+KFxuICAgIHRoaXMuX2dldENvbm5lY3Rpb25TdGF0ZSgpLmNvbm5lY3Rpb25zLFxuICApO1xuICBwdWJsaWMgY3VycmVudENvbm5lY3Rpb24kOiBPYnNlcnZhYmxlPElTUUxFQ29ubmVjdGlvbj4gPSB0aGlzLl9jdXJyZW50Q29ubmVjdGlvblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIHB1YmxpYyBjb25uZWN0aW9ucyQ6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uW10+ID0gdGhpcy5fY29ubmVjdGlvbnNTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZTogSVZhbnRhZ2VDb25uZWN0aW9uU3RhdGUgPSB0aGlzLl9nZXRDb25uZWN0aW9uU3RhdGUoKTtcbiAgICBpZiAoY29ubmVjdGlvblN0YXRlICYmIGNvbm5lY3Rpb25TdGF0ZS51c2VybmFtZSAhPT0gdGhpcy5fY3VycmVudFVzZXJuYW1lKSB7XG4gICAgICAvLyBtaXNtYXRjaCwgc28gY2xlYXJcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25zID0gW107XG4gICAgICB0aGlzLl9jdXJyZW50Q29ubmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldCBfY3VycmVudENvbm5lY3Rpb24oY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKSB7XG4gICAgdGhpcy5fc2V0Q29ubmVjdGlvblN0YXRlKHtcbiAgICAgIGN1cnJlbnQ6IGNvbm5lY3Rpb24sXG4gICAgICBjb25uZWN0aW9uczogdGhpcy5fY29ubmVjdGlvbnMsXG4gICAgICB1c2VybmFtZTogdGhpcy5fY3VycmVudFVzZXJuYW1lLFxuICAgIH0pO1xuICAgIHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uU3ViamVjdC5uZXh0KGNvbm5lY3Rpb24pO1xuICB9XG4gIHByaXZhdGUgZ2V0IF9jdXJyZW50Q29ubmVjdGlvbigpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q29ubmVjdGlvblN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IGN1cnJlbnRDb25uZWN0aW9uKCk6IElTUUxFQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb25uZWN0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQgX2Nvbm5lY3Rpb25zKGNvbm5lY3Rpb25zOiBJU1FMRUNvbm5lY3Rpb25bXSkge1xuICAgIHRoaXMuX3NldENvbm5lY3Rpb25TdGF0ZSh7XG4gICAgICBjdXJyZW50OiB0aGlzLl9jdXJyZW50Q29ubmVjdGlvbixcbiAgICAgIGNvbm5lY3Rpb25zLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuX2N1cnJlbnRVc2VybmFtZSxcbiAgICB9KTtcbiAgICB0aGlzLl9jb25uZWN0aW9uc1N1YmplY3QubmV4dChjb25uZWN0aW9ucyk7XG4gIH1cbiAgcHJpdmF0ZSBnZXQgX2Nvbm5lY3Rpb25zKCk6IElTUUxFQ29ubmVjdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdGlvbnNTdWJqZWN0LmdldFZhbHVlKCk7XG4gIH1cbiAgcHVibGljIGdldCBjb25uZWN0aW9ucygpOiBJU1FMRUNvbm5lY3Rpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpb25zO1xuICB9XG5cbiAgcHVibGljIGFkZEFuZFNldEFzQ3VycmVudChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIG9wdGlvbnM/OiBJQ29ubmVjdE9wdGlvbnMpOiBPYnNlcnZhYmxlPElTUUxFQ29ubmVjdGlvbj4ge1xuICAgIGlmICh0aGlzLl9nZXRDb25uZWN0aW9uSW5kZXgoY29ubmVjdGlvbikgPiAtMSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Nvbm5lY3Rpb24gYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3BpbmdBbmRTYXZlKGNvbm5lY3Rpb24sIHRydWUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uLCBvcHRpb25zPzogSUNvbm5lY3RPcHRpb25zKTogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+IHtcbiAgICBpZiAodGhpcy5fZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb24pID4gLTEpIHtcbiAgICAgIHRocm93IEVycm9yKCdDb25uZWN0aW9uIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLl9waW5nQW5kU2F2ZShjb25uZWN0aW9uLCBmYWxzZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldEFzQ3VycmVudChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sIG9wdGlvbnM/OiBJQ29ubmVjdE9wdGlvbnMpOiBPYnNlcnZhYmxlPElTUUxFQ29ubmVjdGlvbj4ge1xuICAgIGlmICh0aGlzLl9nZXRDb25uZWN0aW9uSW5kZXgoY29ubmVjdGlvbikgPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BpbmdBbmRTYXZlKGNvbm5lY3Rpb24sIHRydWUsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignQ29ubmVjdGlvbiBkb2VzIG5vdCBleGlzdCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogSVNRTEVDb25uZWN0aW9uIHtcbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5fZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb24pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9jb25uZWN0aW9ucyA9IFsuLi50aGlzLl9jb25uZWN0aW9ucy5zbGljZSgwLCBpbmRleCksIC4uLnRoaXMuX2Nvbm5lY3Rpb25zLnNsaWNlKGluZGV4ICsgMSldO1xuICAgICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPVxuICAgICAgICB0aGlzLl9jdXJyZW50Q29ubmVjdGlvbiAmJiB0aGlzLl9hcmVFcXVhbCh0aGlzLl9jdXJyZW50Q29ubmVjdGlvbiwgY29ubmVjdGlvbilcbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogdGhpcy5fY3VycmVudENvbm5lY3Rpb247XG4gICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29ubmVjdGlvbiBkb2VzIG5vdCBleGlzdCBidXQgdGhhdCBpcyBmaW5lP1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdW5zZXRBc0N1cnJlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX2Nvbm5lY3Rpb25zID0gW107XG4gICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZXhpc3RzKGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9nZXRDb25uZWN0aW9uSW5kZXgoY29ubmVjdGlvbikgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBpc0N1cnJlbnQoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FyZUVxdWFsKGNvbm5lY3Rpb24sIHRoaXMuY3VycmVudENvbm5lY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIHN0cmluZ2lmeShjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHJpbmdpZnkoY29ubmVjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIF9waW5nQW5kU2F2ZShcbiAgICBjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sXG4gICAgc2V0QXNDdXJyZW50OiBib29sZWFuLFxuICAgIG9wdHM/OiBJQ29ubmVjdE9wdGlvbnMsXG4gICk6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pLnBpcGUoXG4gICAgICAvLyB0aW1lb3V0IGNvbm5lY3Rpb24gaWYgbW9yZSB0aGFuIDcgc2Vjb25kc1xuICAgICAgdGltZW91dChvcHRzPy50aW1lb3V0IHx8IDcwMDApLFxuICAgICAgLy8gcmV0cnkgb25seSBhZnRlciBhIGNlcnRhaW4gbnVtYmVyIG9mIGF0dGVtcHRzIG9yIGlmIHRoZSBlcnJvciBpcyBzb21ldGhpbmcgZWxzZSB0aGFuIDQyMFxuICAgICAgcmV0cnlXaGVuKChlcnJvcnM6IE9ic2VydmFibGU8eyBodHRwU3RhdHVzOiBudW1iZXIgfT4pID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9ycy5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKChlcnJvcjogeyBodHRwU3RhdHVzOiBudW1iZXIgfSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmV0cnlBdHRlbXB0OiBudW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICBpZiAocmV0cnlBdHRlbXB0ID4gKG9wdHM/LmF0dGVtcHRzIHx8IDIpIHx8IGVycm9yLmh0dHBTdGF0dXMgPT09IDQyMCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGltZXIoMCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNhdmVcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dldENvbm5lY3Rpb25JbmRleChjb25uZWN0aW9uKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25zID0gWy4uLnRoaXMuX2Nvbm5lY3Rpb25zLCBjb25uZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0QXNDdXJyZW50KSB7XG4gICAgICAgICAgdGhpcy5fY3VycmVudENvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcFRvKGNvbm5lY3Rpb24pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfY3VycmVudFVzZXJuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLnVzZXIgJiYgdGhpcy5fc2Vzc2lvblNlcnZpY2UudXNlci51c2VybmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FyZUVxdWFsKGNvbm5lY3Rpb25BOiBJU1FMRUNvbm5lY3Rpb24sIGNvbm5lY3Rpb25COiBJU1FMRUNvbm5lY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29ubmVjdGlvbkEuY3JlZHMgPT09IGNvbm5lY3Rpb25CLmNyZWRzICYmIGNvbm5lY3Rpb25BLnN5c3RlbS5uaWNrbmFtZSA9PT0gY29ubmVjdGlvbkIuc3lzdGVtLm5pY2tuYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q29ubmVjdGlvbkluZGV4KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbnMuZmluZEluZGV4KChjb25uOiBJU1FMRUNvbm5lY3Rpb24pID0+IHRoaXMuX2FyZUVxdWFsKGNvbm5lY3Rpb24sIGNvbm4pKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvbm5lY3Rpb25TdGF0ZSgpOiBJVmFudGFnZUNvbm5lY3Rpb25TdGF0ZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZTogSVZhbnRhZ2VDb25uZWN0aW9uU3RhdGUgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSkpO1xuICAgICAgaWYgKGNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvblN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0aW9uczogW10sXG4gICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcm5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudDogdW5kZWZpbmVkLFxuICAgICAgICBjb25uZWN0aW9uczogW10sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldENvbm5lY3Rpb25TdGF0ZShjb25uZWN0aW9uU3RhdGU6IElWYW50YWdlQ29ubmVjdGlvblN0YXRlKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeShjb25uZWN0aW9uU3RhdGUpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gIHNlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlLCBzZXNzaW9uU2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlLCBWYW50YWdlU2Vzc2lvblNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=