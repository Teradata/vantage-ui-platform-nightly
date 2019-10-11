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
var VantageBlockUserAccessGuard = /** @class */ (function () {
    function VantageBlockUserAccessGuard(_authGuard, _sessionService) {
        this._authGuard = _authGuard;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    VantageBlockUserAccessGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        var _this = this;
        // pipe through the VantageAuthentication guard to be able to chain guards
        return this._authGuard.canActivate(next, state).pipe(map((/**
         * @return {?}
         */
        function () {
            if (!_this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    };
    VantageBlockUserAccessGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageBlockUserAccessGuard.ctorParameters = function () { return [
        { type: VantageAuthenticationGuard },
        { type: VantageSessionService }
    ]; };
    return VantageBlockUserAccessGuard;
}());
export { VantageBlockUserAccessGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stdXNlci1hY2Nlc3MuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hY2Nlc3MvIiwic291cmNlcyI6WyJndWFyZHMvYmxvY2stdXNlci1hY2Nlc3MuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFPakc7SUFFRSxxQ0FBb0IsVUFBc0MsRUFBVSxlQUFzQztRQUF0RixlQUFVLEdBQVYsVUFBVSxDQUE0QjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUU5RyxpREFBVzs7Ozs7SUFBWCxVQUFZLElBQTRCLEVBQUUsS0FBMEI7UUFBcEUsaUJBV0M7UUFWQywwRUFBMEU7UUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNsRCxHQUFHOzs7UUFBQztZQUNGLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFmRixVQUFVOzs7O2dCQVBxQiwwQkFBMEI7Z0JBQWpELHFCQUFxQjs7SUF1QjlCLGtDQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSwyQkFBMkI7Ozs7OztJQUMxQixpREFBOEM7Ozs7O0lBQUUsc0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVmFudGFnZVNlc3Npb25TZXJ2aWNlLCBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgnO1xuXG4vKipcbiAqIEd1YXJkIHRoYXQgY2hlY2tzIGlmIHRoZSB1c2VyIGlzIGEgbm9ybWFsIHVzZXIgKGBhZG1pbmAgZmxhZyBgZmFsc2VgKVxuICogdG8gYmxvY2sgYWNjZXNzIGludG8gYSBwYXJ0aWN1bGFyIHJvdXRlLlxuICogSWYgYGFkbWluYCBmbGFnIGlzIGBmYWxzZWAsIHRoZW4gd2UgcmVkaXJlY3QgdG8gYC9gXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQmxvY2tVc2VyQWNjZXNzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhHdWFyZDogVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQsIHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpIHt9XG5cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAvLyBwaXBlIHRocm91Z2ggdGhlIFZhbnRhZ2VBdXRoZW50aWNhdGlvbiBndWFyZCB0byBiZSBhYmxlIHRvIGNoYWluIGd1YXJkc1xuICAgIHJldHVybiB0aGlzLl9hdXRoR3VhcmQuY2FuQWN0aXZhdGUobmV4dCwgc3RhdGUpLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX3Nlc3Npb25TZXJ2aWNlLnVzZXIuYWRtaW4pIHtcbiAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19