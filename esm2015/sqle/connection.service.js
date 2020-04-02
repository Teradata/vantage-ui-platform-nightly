/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { throwError, timer } from 'rxjs';
import { mergeMap, retryWhen, tap, timeout, mapTo } from 'rxjs/operators';
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
     * @param {?=} opts
     * @return {?}
     */
    connect(connection, opts) {
        var _a;
        // clear connection before starting a new one
        this.disconnect();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBYyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFtQixNQUFNLGlCQUFpQixDQUFDOztNQUVqRSxzQkFBc0IsR0FBVywyQkFBMkI7Ozs7QUFFbEUsTUFBTSxVQUFVLE9BQU87SUFDckIsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztLQUNuRTtJQUFDLFdBQU07UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUFHRCxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBQ25DLFlBQW9CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUFHLENBQUM7Ozs7SUFFMUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixjQUFjLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU0sT0FBTyxDQUNaLFVBQTJCLEVBQzNCLElBQTRDOztRQUU1Qyw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLGdDQUFnQztRQUNoQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUk7UUFDNUUsNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxPQUFBLElBQUksMENBQUUsT0FBTyxLQUFJLElBQUksQ0FBQztRQUM5QiwyRkFBMkY7UUFDM0YsU0FBUzs7OztRQUFDLENBQUMsTUFBMEMsRUFBRSxFQUFFO1lBQ3ZELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FDaEIsUUFBUTs7Ozs7WUFBQyxDQUFDLEtBQTZCLEVBQUUsS0FBYSxFQUFFLEVBQUU7OztzQkFDbEQsWUFBWSxHQUFXLEtBQUssR0FBRyxDQUFDO2dCQUN0QyxJQUFJLFlBQVksR0FBRyxDQUFDLE9BQUEsSUFBSSwwQ0FBRSxRQUFRLEtBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7b0JBQ3BFLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBQyxFQUFFLHNCQUFzQjtRQUN6RCxLQUFLLENBQUMsVUFBVSxDQUFDLENBQ2xCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFtQjtRQUM5QyxjQUFjLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7OztZQXpDRixVQUFVOzs7O1lBWkYsbUJBQW1COzs7Ozs7O0lBY2QsaURBQTBDOzs7Ozs7O0FBMEN4RCxNQUFNLFVBQVUsbUNBQW1DLENBQ2pELE1BQWdDLEVBQ2hDLFlBQWlDO0lBRWpDLE9BQU8sTUFBTSxJQUFJLElBQUksd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCLEdBQWE7O0lBRW5ELE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsd0JBQXdCLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztJQUN2RixVQUFVLEVBQUUsbUNBQW1DO0NBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIHJldHJ5V2hlbiwgdGFwLCB0aW1lb3V0LCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVmFudGFnZVF1ZXJ5U2VydmljZSwgSVNRTEVDb25uZWN0aW9uIH0gZnJvbSAnLi9xdWVyeS5zZXJ2aWNlJztcblxuY29uc3QgQ09OTkVDVElPTl9TRVNTSU9OX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UuZWRpdG9yLmNvbm5lY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudCgpOiBJU1FMRUNvbm5lY3Rpb24ge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSkpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IElTUUxFQ29ubmVjdGlvbiB7XG4gICAgcmV0dXJuIGN1cnJlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdChcbiAgICBjb25uZWN0aW9uOiBJU1FMRUNvbm5lY3Rpb24sXG4gICAgb3B0cz86IHsgdGltZW91dDogbnVtYmVyOyBhdHRlbXB0czogbnVtYmVyIH0sXG4gICk6IE9ic2VydmFibGU8SVNRTEVDb25uZWN0aW9uPiB7XG4gICAgLy8gY2xlYXIgY29ubmVjdGlvbiBiZWZvcmUgc3RhcnRpbmcgYSBuZXcgb25lXG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgLy8gdGVzdCBjb25uZWN0aW9uIHdpdGggU0VMRUNUIDFcbiAgICByZXR1cm4gdGhpcy5fcXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKGNvbm5lY3Rpb24sIHsgcXVlcnk6ICdTRUxFQ1QgMTsnIH0pLnBpcGUoXG4gICAgICAvLyB0aW1lb3V0IGNvbm5lY3Rpb24gaWYgbW9yZSB0aGFuIDcgc2Vjb25kc1xuICAgICAgdGltZW91dChvcHRzPy50aW1lb3V0IHx8IDcwMDApLFxuICAgICAgLy8gcmV0cnkgb25seSBhZnRlciBhIGNlcnRhaW4gbnVtYmVyIG9mIGF0dGVtcHRzIG9yIGlmIHRoZSBlcnJvciBpcyBzb21ldGhpbmcgZWxzZSB0aGFuIDQyMFxuICAgICAgcmV0cnlXaGVuKChlcnJvcnM6IE9ic2VydmFibGU8eyBodHRwU3RhdHVzOiBudW1iZXIgfT4pID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9ycy5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKChlcnJvcjogeyBodHRwU3RhdHVzOiBudW1iZXIgfSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmV0cnlBdHRlbXB0OiBudW1iZXIgPSBpbmRleCArIDE7XG4gICAgICAgICAgICBpZiAocmV0cnlBdHRlbXB0ID4gKG9wdHM/LmF0dGVtcHRzIHx8IDIpIHx8IGVycm9yLmh0dHBTdGF0dXMgPT09IDQyMCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGltZXIoMCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIHRhcCgoKSA9PiB0aGlzLnN0b3JlKGNvbm5lY3Rpb24pKSwgLy8gaWYgc3VjY2Vzc2Z1bCwgc2F2ZVxuICAgICAgbWFwVG8oY29ubmVjdGlvbiksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoeyBzeXN0ZW0sIGNyZWRzIH06IElTUUxFQ29ubmVjdGlvbik6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQ09OTkVDVElPTl9TRVNTSU9OX0tFWSwgSlNPTi5zdHJpbmdpZnkoeyBzeXN0ZW0sIGNyZWRzIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICBxdWVyeVNlcnZpY2U6IFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4pOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UocXVlcnlTZXJ2aWNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZV0sIFZhbnRhZ2VRdWVyeVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0NPTk5FQ1RJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=