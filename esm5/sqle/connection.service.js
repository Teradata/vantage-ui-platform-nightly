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
            return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFakUsc0JBQXNCLEdBQVcsMkJBQTJCO0FBRWxFO0lBRUUsa0NBQW9CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUFHLENBQUM7SUFFMUQsc0JBQVcsNkNBQU87Ozs7UUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7Ozs7SUFFTSw2Q0FBVTs7O0lBQWpCO1FBQ0UsY0FBYyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRVksMENBQU87Ozs7SUFBcEIsVUFBcUIsVUFBMkI7Ozs7O3dCQUM5Qyw2Q0FBNkM7d0JBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEIsZ0NBQWdDO3dCQUNoQyxxQkFBTSxJQUFJLENBQUMsYUFBYTtpQ0FDckIsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQztpQ0FDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUNBQzdCLFNBQVMsRUFBRSxFQUFBOzt3QkFKZCxnQ0FBZ0M7d0JBQ2hDLFNBR2MsQ0FBQzt3QkFDZixzQkFBc0I7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7O0tBQ3hCOzs7Ozs7SUFFTyx3Q0FBSzs7Ozs7SUFBYixVQUFjLEVBQWtDO1lBQWhDLGtCQUFNLEVBQUUsZ0JBQUs7UUFDM0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Z0JBMUJGLFVBQVU7Ozs7Z0JBSmUsbUJBQW1COztJQStCN0MsK0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSx3QkFBd0I7Ozs7OztJQUN2QixpREFBMEM7Ozs7Ozs7QUEyQnhELE1BQU0sVUFBVSxtQ0FBbUMsQ0FDakQsTUFBZ0MsRUFDaEMsWUFBaUM7SUFFakMsT0FBTyxNQUFNLElBQUksSUFBSSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM5RCxDQUFDOztBQUVELE1BQU0sS0FBTywyQkFBMkIsR0FBYTs7SUFFbkQsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLG1CQUFtQixDQUFDO0lBQ3ZGLFVBQVUsRUFBRSxtQ0FBbUM7Q0FDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZXRyeSwgdGltZW91dCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElTUUxFQ29ubmVjdGlvbiwgVmFudGFnZVF1ZXJ5U2VydmljZSB9IGZyb20gJy4vcXVlcnkuc2VydmljZSc7XG5cbmNvbnN0IENPTk5FQ1RJT05fU0VTU0lPTl9LRVk6IHN0cmluZyA9ICd2YW50YWdlLmVkaXRvci5jb25uZWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnQoKTogSVNRTEVDb25uZWN0aW9uIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY29ubmVjdChjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBjbGVhciBjb25uZWN0aW9uIGJlZm9yZSBzdGFydGluZyBhIG5ldyBvbmVcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAvLyB0ZXN0IGNvbm5lY3Rpb24gd2l0aCBTRUxFQ1QgMVxuICAgIGF3YWl0IHRoaXMuX3F1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pXG4gICAgICAucGlwZSh0aW1lb3V0KDcwMDApLCByZXRyeSgxKSlcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgICAvLyBpZiBzdWNjZXNzZnVsLCBzYXZlXG4gICAgdGhpcy5zdG9yZShjb25uZWN0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoeyBzeXN0ZW0sIGNyZWRzIH06IElTUUxFQ29ubmVjdGlvbik6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSwgSlNPTi5zdHJpbmdpZnkoeyBzeXN0ZW0sIGNyZWRzIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZV0sIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=