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
var VantageBlockRootAccessGuard = /** @class */ (function () {
    function VantageBlockRootAccessGuard(_authGuard, _sessionService) {
        this._authGuard = _authGuard;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    VantageBlockRootAccessGuard.prototype.canActivate = /**
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
            if (_this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    };
    VantageBlockRootAccessGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageBlockRootAccessGuard.ctorParameters = function () { return [
        { type: VantageAuthenticationGuard },
        { type: VantageSessionService }
    ]; };
    return VantageBlockRootAccessGuard;
}());
export { VantageBlockRootAccessGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stcm9vdC1hY2Nlc3MuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hY2Nlc3MvIiwic291cmNlcyI6WyJndWFyZHMvYmxvY2stcm9vdC1hY2Nlc3MuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFPakc7SUFFRSxxQ0FBb0IsVUFBc0MsRUFBVSxlQUFzQztRQUF0RixlQUFVLEdBQVYsVUFBVSxDQUE0QjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUU5RyxpREFBVzs7Ozs7SUFBWCxVQUFZLElBQTRCLEVBQUUsS0FBMEI7UUFBcEUsaUJBV0M7UUFWQywwRUFBMEU7UUFDMUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNsRCxHQUFHOzs7UUFBQztZQUNGLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNuQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsVUFBVTs7OztnQkFQcUIsMEJBQTBCO2dCQUFqRCxxQkFBcUI7O0lBdUI5QixrQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksMkJBQTJCOzs7Ozs7SUFDMUIsaURBQThDOzs7OztJQUFFLHNEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFZhbnRhZ2VTZXNzaW9uU2VydmljZSwgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoJztcblxuLyoqXG4gKiBHdWFyZCB0aGF0IGNoZWNrcyBpZiB0aGUgdXNlciBpcyByb290IChgYWRtaW5gIGZsYWcgYHRydWVgKVxuICogdG8gYmxvY2sgYWNjZXNzIGludG8gYSBwYXJ0aWN1bGFyIHJvdXRlLlxuICogSWYgYGFkbWluYCBmbGFnIGlzIGB0cnVlYCwgdGhlbiB3ZSByZWRpcmVjdCB0byBgL2BcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VCbG9ja1Jvb3RBY2Nlc3NHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aEd1YXJkOiBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSkge31cblxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIC8vIHBpcGUgdGhyb3VnaCB0aGUgVmFudGFnZUF1dGhlbnRpY2F0aW9uIGd1YXJkIHRvIGJlIGFibGUgdG8gY2hhaW4gZ3VhcmRzXG4gICAgcmV0dXJuIHRoaXMuX2F1dGhHdWFyZC5jYW5BY3RpdmF0ZShuZXh0LCBzdGF0ZSkucGlwZShcbiAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9zZXNzaW9uU2VydmljZS51c2VyLmFkbWluKSB7XG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSgnLycpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==