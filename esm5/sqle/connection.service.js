/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __generator } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { retry, timeout } from 'rxjs/operators';
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // clear connection before starting a new one
                        this.disconnect();
                        // test connection with SELECT 1
                        return [4 /*yield*/, this._queryService
                                .querySystem(connection, { query: 'SELECT 1;' })
                                .pipe(timeout(7000), retry(1))
                                .toPromise()];
                    case 1:
                        // test connection with SELECT 1
                        _a.sent();
                        // if successful, save
                        this.store(connection);
                        return [2 /*return*/];
                }
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFakUsc0JBQXNCLEdBQVcsMkJBQTJCO0FBRWxFO0lBRUUsa0NBQW9CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUFHLENBQUM7SUFFMUQsc0JBQVcsNkNBQU87Ozs7UUFBbEI7WUFDRSxJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQzthQUNuRTtZQUFDLFdBQU07Z0JBQ04sT0FBTyxTQUFTLENBQUM7YUFDbEI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQUVNLDZDQUFVOzs7SUFBakI7UUFDRSxjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFWSwwQ0FBTzs7OztJQUFwQixVQUFxQixVQUEyQjs7Ozs7d0JBQzlDLDZDQUE2Qzt3QkFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNsQixnQ0FBZ0M7d0JBQ2hDLHFCQUFNLElBQUksQ0FBQyxhQUFhO2lDQUNyQixXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO2lDQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDN0IsU0FBUyxFQUFFLEVBQUE7O3dCQUpkLGdDQUFnQzt3QkFDaEMsU0FHYyxDQUFDO3dCQUNmLHNCQUFzQjt3QkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7S0FDeEI7Ozs7OztJQUVPLHdDQUFLOzs7OztJQUFiLFVBQWMsRUFBa0M7WUFBaEMsa0JBQU0sRUFBRSxnQkFBSztRQUMzQixjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOztnQkE5QkYsVUFBVTs7OztnQkFKZSxtQkFBbUI7O0lBbUM3QywrQkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLHdCQUF3Qjs7Ozs7O0lBQ3ZCLGlEQUEwQzs7Ozs7OztBQStCeEQsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCxNQUFnQyxFQUNoQyxZQUFpQztJQUVqQyxPQUFPLE1BQU0sSUFBSSxJQUFJLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELENBQUM7O0FBRUQsTUFBTSxLQUFPLDJCQUEyQixHQUFhOztJQUVuRCxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLENBQUM7SUFDdkYsVUFBVSxFQUFFLG1DQUFtQztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJldHJ5LCB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSVNRTEVDb25uZWN0aW9uLCBWYW50YWdlUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi9xdWVyeS5zZXJ2aWNlJztcblxuY29uc3QgQ09OTkVDVElPTl9TRVNTSU9OX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UuZWRpdG9yLmNvbm5lY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudCgpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb25uZWN0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIGNsZWFyIGNvbm5lY3Rpb24gYmVmb3JlIHN0YXJ0aW5nIGEgbmV3IG9uZVxuICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIC8vIHRlc3QgY29ubmVjdGlvbiB3aXRoIFNFTEVDVCAxXG4gICAgYXdhaXQgdGhpcy5fcXVlcnlTZXJ2aWNlXG4gICAgICAucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwgeyBxdWVyeTogJ1NFTEVDVCAxOycgfSlcbiAgICAgIC5waXBlKHRpbWVvdXQoNzAwMCksIHJldHJ5KDEpKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIC8vIGlmIHN1Y2Nlc3NmdWwsIHNhdmVcbiAgICB0aGlzLnN0b3JlKGNvbm5lY3Rpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9yZSh7IHN5c3RlbSwgY3JlZHMgfTogSVNRTEVDb25uZWN0aW9uKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZLCBKU09OLnN0cmluZ2lmeSh7IHN5c3RlbSwgY3JlZHMgfSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIHF1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbik6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZShxdWVyeVNlcnZpY2UpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlXSwgVmFudGFnZVF1ZXJ5U2VydmljZV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==