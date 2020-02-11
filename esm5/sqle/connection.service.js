/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { tap, mapTo } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
var CONNECTION_SESSION_KEY = 'vantage.editor.connection';
var VantageConnectionService = /** @class */ (function () {
    function VantageConnectionService(_queryService) {
        this._queryService = _queryService;
    }
    Object.defineProperty(VantageConnectionService.prototype, "current", {
        get: /**
         * @return {?}
         */
        function () {
            try {
                return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
            }
            catch (_a) {
                return undefined;
            }
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
     * @return {?}
     */
    VantageConnectionService.prototype.connect = /**
     * @param {?} connection
     * @return {?}
     */
    function (connection) {
        var _this = this;
        // clear connection before starting a new one
        this.disconnect();
        // test connection with SELECT 1
        return this._queryService.querySystem(connection, { query: 'SELECT 1;' }).pipe(tap((/**
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
export { VantageConnectionService };
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
export function VANTAGE_CONNECTION_PROVIDER_FACTORY(parent, queryService) {
    return parent || new VantageConnectionService(queryService);
}
/** @type {?} */
export var VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLGlCQUFpQixDQUFDOztJQUVqRSxzQkFBc0IsR0FBVywyQkFBMkI7QUFFbEU7SUFFRSxrQ0FBb0IsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQUcsQ0FBQztJQUUxRCxzQkFBVyw2Q0FBTzs7OztRQUFsQjtZQUNFLElBQUk7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1lBQUMsV0FBTTtnQkFDTixPQUFPLFNBQVMsQ0FBQzthQUNsQjtRQUNILENBQUM7OztPQUFBOzs7O0lBRU0sNkNBQVU7OztJQUFqQjtRQUNFLGNBQWMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVNLDBDQUFPOzs7O0lBQWQsVUFBZSxVQUEyQjtRQUExQyxpQkFRQztRQVBDLDZDQUE2QztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsZ0NBQWdDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1RSxHQUFHOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxFQUFFLHNCQUFzQjtRQUN6RCxLQUFLLENBQUMsVUFBVSxDQUFDLENBQ2xCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyx3Q0FBSzs7Ozs7SUFBYixVQUFjLEVBQWtDO1lBQWhDLGtCQUFNLEVBQUUsZ0JBQUs7UUFDM0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Z0JBNUJGLFVBQVU7Ozs7Z0JBSkYsbUJBQW1COztJQWlDNUIsK0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSx3QkFBd0I7Ozs7OztJQUN2QixpREFBMEM7Ozs7Ozs7QUE2QnhELE1BQU0sVUFBVSxtQ0FBbUMsQ0FDakQsTUFBZ0MsRUFDaEMsWUFBaUM7SUFFakMsT0FBTyxNQUFNLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RCxDQUFDOztBQUVELE1BQU0sS0FBTywyQkFBMkIsR0FBYTs7SUFFbkQsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO0lBQ3ZGLFVBQVUsRUFBRSxtQ0FBbUM7Q0FDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVmFudGFnZVF1ZXJ5U2VydmljZSwgSVNRTEVDb25uZWN0aW9uIH0gZnJvbSAnLi9xdWVyeS5zZXJ2aWNlJztcblxuY29uc3QgQ09OTkVDVElPTl9TRVNTSU9OX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UuZWRpdG9yLmNvbm5lY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudCgpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgLy8gY2xlYXIgY29ubmVjdGlvbiBiZWZvcmUgc3RhcnRpbmcgYSBuZXcgb25lXG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5zdG9yZShjb25uZWN0aW9uKSksIC8vIGlmIHN1Y2Nlc3NmdWwsIHNhdmVcbiAgICAgIG1hcFRvKGNvbm5lY3Rpb24pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0b3JlKHsgc3lzdGVtLCBjcmVkcyB9OiBJU1FMRUNvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KHsgc3lzdGVtLCBjcmVkcyB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuKTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlKHF1ZXJ5U2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19