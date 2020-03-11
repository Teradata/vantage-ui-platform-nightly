/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { tap, mapTo } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
var CONNECTION_SESSION_KEY = 'vantage.editor.connection';
/**
 * @return {?}
 */
export function current() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLGlCQUFpQixDQUFDOztJQUVqRSxzQkFBc0IsR0FBVywyQkFBMkI7Ozs7QUFFbEUsTUFBTSxVQUFVLE9BQU87SUFDckIsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUFDLFdBQU07UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUFFRDtJQUVFLGtDQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFBRyxDQUFDO0lBRTFELHNCQUFXLDZDQUFPOzs7O1FBQWxCO1lBQ0UsT0FBTyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDOzs7T0FBQTs7OztJQUVNLDZDQUFVOzs7SUFBakI7UUFDRSxjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSwwQ0FBTzs7OztJQUFkLFVBQWUsVUFBMkI7UUFBMUMsaUJBUUM7UUFQQyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLGdDQUFnQztRQUNoQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUUsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQXRCLENBQXNCLEVBQUMsRUFBRSxzQkFBc0I7UUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sd0NBQUs7Ozs7O0lBQWIsVUFBYyxFQUFrQztZQUFoQyxrQkFBTSxFQUFFLGdCQUFLO1FBQzNCLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7O2dCQXhCRixVQUFVOzs7O2dCQVpGLG1CQUFtQjs7SUFxQzVCLCtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4Qlksd0JBQXdCOzs7Ozs7SUFDdkIsaURBQTBDOzs7Ozs7O0FBeUJ4RCxNQUFNLFVBQVUsbUNBQW1DLENBQ2pELE1BQWdDLEVBQ2hDLFlBQWlDO0lBRWpDLE9BQU8sTUFBTSxJQUFJLElBQUksd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sMkJBQTJCLEdBQWE7O0lBRW5ELE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztJQUN2RixVQUFVLEVBQUUsbUNBQW1DO0NBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZhbnRhZ2VRdWVyeVNlcnZpY2UsIElTUUxFQ29ubmVjdGlvbiB9IGZyb20gJy4vcXVlcnkuc2VydmljZSc7XG5cbmNvbnN0IENPTk5FQ1RJT05fU0VTU0lPTl9LRVk6IHN0cmluZyA9ICd2YW50YWdlLmVkaXRvci5jb25uZWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnQoKTogSVNRTEVDb25uZWN0aW9uIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBnZXQgY3VycmVudCgpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICAgIHJldHVybiBjdXJyZW50KCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+IHtcbiAgICAvLyBjbGVhciBjb25uZWN0aW9uIGJlZm9yZSBzdGFydGluZyBhIG5ldyBvbmVcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAvLyB0ZXN0IGNvbm5lY3Rpb24gd2l0aCBTRUxFQ1QgMVxuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2UucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwgeyBxdWVyeTogJ1NFTEVDVCAxOycgfSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnN0b3JlKGNvbm5lY3Rpb24pKSwgLy8gaWYgc3VjY2Vzc2Z1bCwgc2F2ZVxuICAgICAgbWFwVG8oY29ubmVjdGlvbiksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoeyBzeXN0ZW0sIGNyZWRzIH06IElTUUxFQ29ubmVjdGlvbik6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSwgSlNPTi5zdHJpbmdpZnkoeyBzeXN0ZW0sIGNyZWRzIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZV0sIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=