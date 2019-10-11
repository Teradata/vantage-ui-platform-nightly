/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { VantageSessionService, VantageAuthenticationGuard } from '@td-vantage/ui-platform/auth';
/**
 * Guard that checks if the user is a normal user (`admin` flag `false`)
 * to block access into a particular route.
 * If `admin` flag is `false`, then we redirect to `/`
 */
export class VantageBlockUserAccessGuard {
    /**
     * @param {?} _authGuard
     * @param {?} _sessionService
     */
    constructor(_authGuard, _sessionService) {
        this._authGuard = _authGuard;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        // pipe through the VantageAuthentication guard to be able to chain guards
        return this._authGuard.canActivate(next, state).pipe(map((/**
         * @return {?}
         */
        () => {
            if (!this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    }
}
VantageBlockUserAccessGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageBlockUserAccessGuard.ctorParameters = () => [
    { type: VantageAuthenticationGuard },
    { type: VantageSessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageBlockUserAccessGuard.prototype._authGuard;
    /**
     * @type {?}
     * @private
     */
    VantageBlockUserAccessGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdXNlci1hY2Nlc3MuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hY2Nlc3MvIiwic291cmNlcyI6WyJndWFyZHMvYmxvY2stdXNlci1hY2Nlc3MuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFRakcsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFDdEMsWUFBb0IsVUFBc0MsRUFBVSxlQUFzQztRQUF0RixlQUFVLEdBQVYsVUFBVSxDQUE0QjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUU5RyxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjtRQUNsRSwwRUFBMEU7UUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNsRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBZkYsVUFBVTs7OztZQVBxQiwwQkFBMEI7WUFBakQscUJBQXFCOzs7Ozs7O0lBU2hCLGlEQUE4Qzs7Ozs7SUFBRSxzREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UsIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aCc7XG5cbi8qKlxuICogR3VhcmQgdGhhdCBjaGVja3MgaWYgdGhlIHVzZXIgaXMgYSBub3JtYWwgdXNlciAoYGFkbWluYCBmbGFnIGBmYWxzZWApXG4gKiB0byBibG9jayBhY2Nlc3MgaW50byBhIHBhcnRpY3VsYXIgcm91dGUuXG4gKiBJZiBgYWRtaW5gIGZsYWcgaXMgYGZhbHNlYCwgdGhlbiB3ZSByZWRpcmVjdCB0byBgL2BcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VCbG9ja1VzZXJBY2Nlc3NHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aEd1YXJkOiBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSkge31cblxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIC8vIHBpcGUgdGhyb3VnaCB0aGUgVmFudGFnZUF1dGhlbnRpY2F0aW9uIGd1YXJkIHRvIGJlIGFibGUgdG8gY2hhaW4gZ3VhcmRzXG4gICAgcmV0dXJuIHRoaXMuX2F1dGhHdWFyZC5jYW5BY3RpdmF0ZShuZXh0LCBzdGF0ZSkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fc2Vzc2lvblNlcnZpY2UudXNlci5hZG1pbikge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy8nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iXX0=