/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { retry, timeout } from 'rxjs/operators';
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
        return JSON.parse(sessionStorage.getItem(CONNECTION_SESSION_KEY));
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
        return __awaiter(this, void 0, void 0, function* () {
            // clear connection before starting a new one
            this.disconnect();
            // test connection with SELECT 1
            yield this._queryService
                .querySystem(connection, { query: 'SELECT 1;' })
                .pipe(timeout(7000), retry(1))
                .toPromise();
            // if successful, save
            this.store(connection);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBbUIsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFakUsc0JBQXNCLEdBQVcsMkJBQTJCO0FBR2xFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFDbkMsWUFBb0IsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQUcsQ0FBQzs7OztJQUUxRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsY0FBYyxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRVksT0FBTyxDQUFDLFVBQTJCOztZQUM5Qyw2Q0FBNkM7WUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLGdDQUFnQztZQUNoQyxNQUFNLElBQUksQ0FBQyxhQUFhO2lCQUNyQixXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDO2lCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0IsU0FBUyxFQUFFLENBQUM7WUFDZixzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQUE7Ozs7OztJQUVPLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQW1CO1FBQzlDLGNBQWMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7O1lBMUJGLFVBQVU7Ozs7WUFKZSxtQkFBbUI7Ozs7Ozs7SUFNL0IsaURBQTBDOzs7Ozs7O0FBMkJ4RCxNQUFNLFVBQVUsbUNBQW1DLENBQ2pELE1BQWdDLEVBQ2hDLFlBQWlDO0lBRWpDLE9BQU8sTUFBTSxJQUFJLElBQUksd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCLEdBQWE7O0lBRW5ELE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztJQUN2RixVQUFVLEVBQUUsbUNBQW1DO0NBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmV0cnksIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJU1FMRUNvbm5lY3Rpb24sIFZhbnRhZ2VRdWVyeVNlcnZpY2UgfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuXG5jb25zdCBDT05ORUNUSU9OX1NFU1NJT05fS0VZOiBzdHJpbmcgPSAndmFudGFnZS5lZGl0b3IuY29ubmVjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IElTUUxFQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShDT05ORUNUSU9OX1NFU1NJT05fS0VZKSk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVkpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNvbm5lY3QoY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gY2xlYXIgY29ubmVjdGlvbiBiZWZvcmUgc3RhcnRpbmcgYSBuZXcgb25lXG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICBhd2FpdCB0aGlzLl9xdWVyeVNlcnZpY2VcbiAgICAgIC5xdWVyeVN5c3RlbShjb25uZWN0aW9uLCB7IHF1ZXJ5OiAnU0VMRUNUIDE7JyB9KVxuICAgICAgLnBpcGUodGltZW91dCg3MDAwKSwgcmV0cnkoMSkpXG4gICAgICAudG9Qcm9taXNlKCk7XG4gICAgLy8gaWYgc3VjY2Vzc2Z1bCwgc2F2ZVxuICAgIHRoaXMuc3RvcmUoY29ubmVjdGlvbik7XG4gIH1cblxuICBwcml2YXRlIHN0b3JlKHsgc3lzdGVtLCBjcmVkcyB9OiBJU1FMRUNvbm5lY3Rpb24pOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKENPTk5FQ1RJT05fU0VTU0lPTl9LRVksIEpTT04uc3RyaW5naWZ5KHsgc3lzdGVtLCBjcmVkcyB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuKTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlKHF1ZXJ5U2VydmljZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2VdLCBWYW50YWdlUXVlcnlTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19