/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { tap, mapTo } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
const CONNECTION_SESSION_KEY = 'vantage.editor.connection';
export class VantageConnectionService {
    /**
     * @param {?} _queryService
     */
    constructor(_queryService) {
        this._queryService = _queryService;
    }
    /**
     * @return {?}
     */
    get current() {
        try {
            return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
        }
        catch (_a) {
            return undefined;
        }
    }
    /**
     * @return {?}
     */
    disconnect() {
        sessionStorage.removeItem(CONNECTION_SESSION_KEY);
    }
    /**
     * @param {?} connection
     * @return {?}
     */
    connect(connection) {
        // clear connection before starting a new one
        this.disconnect();
        // test connection with SELECT 1
        return this._queryService.querySystem(connection, { query: 'SELECT 1;' }).pipe(tap((/**
         * @return {?}
         */
        () => this.store(connection))), // if successful, save
        mapTo(connection));
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    store({ system, creds }) {
        sessionStorage.setItem(CONNECTION_SESSION_KEY, JSON.stringify({ system, creds }));
    }
}
VantageConnectionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageConnectionService.ctorParameters = () => [
    { type: VantageQueryService }
];
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
export const VANTAGE_CONNECTION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageConnectionService,
    deps: [[new Optional(), new SkipSelf(), VantageConnectionService], VantageQueryService],
    useFactory: VANTAGE_CONNECTION_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLGlCQUFpQixDQUFDOztNQUVqRSxzQkFBc0IsR0FBVywyQkFBMkI7QUFHbEUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNuQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFBRyxDQUFDOzs7O0lBRTFELElBQVcsT0FBTztRQUNoQixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBQUMsV0FBTTtZQUNOLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsVUFBMkI7UUFDeEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixnQ0FBZ0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVFLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFBRSxzQkFBc0I7UUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBbUI7UUFDOUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUE1QkYsVUFBVTs7OztZQUpGLG1CQUFtQjs7Ozs7OztJQU1kLGlEQUEwQzs7Ozs7OztBQTZCeEQsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCxNQUFnQyxFQUNoQyxZQUFpQztJQUVqQyxPQUFPLE1BQU0sSUFBSSxJQUFJLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELENBQUM7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQixHQUFhOztJQUVuRCxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLENBQUM7SUFDdkYsVUFBVSxFQUFFLG1DQUFtQztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBWYW50YWdlUXVlcnlTZXJ2aWNlLCBJU1FMRUNvbm5lY3Rpb24gfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuXG5jb25zdCBDT05ORUNUSU9OX1NFU1NJT05fS0VZOiBzdHJpbmcgPSAndmFudGFnZS5lZGl0b3IuY29ubmVjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IElTUUxFQ29ubmVjdGlvbiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogT2JzZXJ2YWJsZTxJU1FMRUNvbm5lY3Rpb24+IHtcbiAgICAvLyBjbGVhciBjb25uZWN0aW9uIGJlZm9yZSBzdGFydGluZyBhIG5ldyBvbmVcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAvLyB0ZXN0IGNvbm5lY3Rpb24gd2l0aCBTRUxFQ1QgMVxuICAgIHJldHVybiB0aGlzLl9xdWVyeVNlcnZpY2UucXVlcnlTeXN0ZW0oY29ubmVjdGlvbiwgeyBxdWVyeTogJ1NFTEVDVCAxOycgfSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnN0b3JlKGNvbm5lY3Rpb24pKSwgLy8gaWYgc3VjY2Vzc2Z1bCwgc2F2ZVxuICAgICAgbWFwVG8oY29ubmVjdGlvbiksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoeyBzeXN0ZW0sIGNyZWRzIH06IElTUUxFQ29ubmVjdGlvbik6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSwgSlNPTi5zdHJpbmdpZnkoeyBzeXN0ZW0sIGNyZWRzIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZV0sIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=