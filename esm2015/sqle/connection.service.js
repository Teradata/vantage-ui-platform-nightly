/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { tap, mapTo } from 'rxjs/operators';
import { VantageQueryService } from './query.service';
/** @type {?} */
const CONNECTION_SESSION_KEY = 'vantage.editor.connection';
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
        return current();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLGlCQUFpQixDQUFDOztNQUVqRSxzQkFBc0IsR0FBVywyQkFBMkI7Ozs7QUFFbEUsTUFBTSxVQUFVLE9BQU87SUFDckIsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUFDLFdBQU07UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW9CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUFHLENBQUM7Ozs7SUFFMUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsVUFBMkI7UUFDeEMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixnQ0FBZ0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVFLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUMsRUFBRSxzQkFBc0I7UUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBbUI7UUFDOUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7WUF4QkYsVUFBVTs7OztZQVpGLG1CQUFtQjs7Ozs7OztJQWNkLGlEQUEwQzs7Ozs7OztBQXlCeEQsTUFBTSxVQUFVLG1DQUFtQyxDQUNqRCxNQUFnQyxFQUNoQyxZQUFpQztJQUVqQyxPQUFPLE1BQU0sSUFBSSxJQUFJLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELENBQUM7O0FBRUQsTUFBTSxPQUFPLDJCQUEyQixHQUFhOztJQUVuRCxPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHdCQUF3QixDQUFDLEVBQUUsbUJBQW1CLENBQUM7SUFDdkYsVUFBVSxFQUFFLG1DQUFtQztDQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBWYW50YWdlUXVlcnlTZXJ2aWNlLCBJU1FMRUNvbm5lY3Rpb24gfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuXG5jb25zdCBDT05ORUNUSU9OX1NFU1NJT05fS0VZOiBzdHJpbmcgPSAndmFudGFnZS5lZGl0b3IuY29ubmVjdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50KCk6IElTUUxFQ29ubmVjdGlvbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZKSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnQoKTogSVNRTEVDb25uZWN0aW9uIHtcbiAgICByZXR1cm4gY3VycmVudCgpO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0KGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbik6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgLy8gY2xlYXIgY29ubmVjdGlvbiBiZWZvcmUgc3RhcnRpbmcgYSBuZXcgb25lXG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4gdGhpcy5zdG9yZShjb25uZWN0aW9uKSksIC8vIGlmIHN1Y2Nlc3NmdWwsIHNhdmVcbiAgICAgIG1hcFRvKGNvbm5lY3Rpb24pLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHN0b3JlKHsgc3lzdGVtLCBjcmVkcyB9OiBJU1FMRUNvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KHsgc3lzdGVtLCBjcmVkcyB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuKTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlKHF1ZXJ5U2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19