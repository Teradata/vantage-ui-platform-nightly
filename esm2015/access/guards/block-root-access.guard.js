/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { VantageSessionService, VantageAuthenticationGuard } from '@td-vantage/ui-platform/auth';
/**
 * Guard that checks if the user is root (`admin` flag `true`)
 * to block access into a particular route.
 * If `admin` flag is `true`, then we redirect to `/`
 */
export class VantageBlockRootAccessGuard {
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
            if (this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    }
}
VantageBlockRootAccessGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageBlockRootAccessGuard.ctorParameters = () => [
    { type: VantageAuthenticationGuard },
    { type: VantageSessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageBlockRootAccessGuard.prototype._authGuard;
    /**
     * @type {?}
     * @private
     */
    VantageBlockRootAccessGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stcm9vdC1hY2Nlc3MuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hY2Nlc3MvIiwic291cmNlcyI6WyJndWFyZHMvYmxvY2stcm9vdC1hY2Nlc3MuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFRakcsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFDdEMsWUFBb0IsVUFBc0MsRUFBVSxlQUFzQztRQUF0RixlQUFVLEdBQVYsVUFBVSxDQUE0QjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUU5RyxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjtRQUNsRSwwRUFBMEU7UUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNsRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDbkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWZGLFVBQVU7Ozs7WUFQcUIsMEJBQTBCO1lBQWpELHFCQUFxQjs7Ozs7OztJQVNoQixpREFBOEM7Ozs7O0lBQUUsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVmFudGFnZVNlc3Npb25TZXJ2aWNlLCBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgnO1xuXG4vKipcbiAqIEd1YXJkIHRoYXQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIHJvb3QgKGBhZG1pbmAgZmxhZyBgdHJ1ZWApXG4gKiB0byBibG9jayBhY2Nlc3MgaW50byBhIHBhcnRpY3VsYXIgcm91dGUuXG4gKiBJZiBgYWRtaW5gIGZsYWcgaXMgYHRydWVgLCB0aGVuIHdlIHJlZGlyZWN0IHRvIGAvYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUJsb2NrUm9vdEFjY2Vzc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoR3VhcmQ6IFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkLCBwcml2YXRlIF9zZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgLy8gcGlwZSB0aHJvdWdoIHRoZSBWYW50YWdlQXV0aGVudGljYXRpb24gZ3VhcmQgdG8gYmUgYWJsZSB0byBjaGFpbiBndWFyZHNcbiAgICByZXR1cm4gdGhpcy5fYXV0aEd1YXJkLmNhbkFjdGl2YXRlKG5leHQsIHN0YXRlKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3Nlc3Npb25TZXJ2aWNlLnVzZXIuYWRtaW4pIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19