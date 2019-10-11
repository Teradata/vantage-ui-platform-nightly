/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
import { timeout, catchError, map } from 'rxjs/operators';
/** @type {?} */
var UNAUTHORIZED = 401;
var VantageAuthenticationGuard = /** @class */ (function () {
    function VantageAuthenticationGuard(_router, _sessionService) {
        this._router = _router;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    VantageAuthenticationGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        var _this = this;
        return this._sessionService.getInfo().pipe(timeout(5000)).pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // if not logged in, go ahead and log in...otherwise logout
            // append the current path so we get redirected back upon login
            (e.status === UNAUTHORIZED) ? window.location.href = '/start-login' : _this._sessionService.logout();
            throw e;
        })), map((/**
         * @return {?}
         */
        function () {
            return true;
        })));
    };
    VantageAuthenticationGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageAuthenticationGuard.ctorParameters = function () { return [
        { type: Router },
        { type: VantageSessionService }
    ]; };
    return VantageAuthenticationGuard;
}());
export { VantageAuthenticationGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageAuthenticationGuard.prototype._router;
    /**
     * @type {?}
     * @private
     */
    VantageAuthenticationGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXBELFlBQVksR0FBVyxHQUFHO0FBRWhDO0lBR0Usb0NBQW9CLE9BQWUsRUFBVSxlQUFzQztRQUEvRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQUcsQ0FBQzs7Ozs7O0lBRXZGLGdEQUFXOzs7OztJQUFYLFVBQVksSUFBNEIsRUFBRSxLQUEwQjtRQUFwRSxpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM1RCxVQUFVOzs7O1FBQUMsVUFBQyxDQUFvQjtZQUM5QiwyREFBMkQ7WUFDM0QsK0RBQStEO1lBQy9ELENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BHLE1BQU0sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7O1FBQUM7WUFDRixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFqQkYsVUFBVTs7OztnQkFSd0QsTUFBTTtnQkFDaEUscUJBQXFCOztJQXlCOUIsaUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSwwQkFBMEI7Ozs7OztJQUV6Qiw2Q0FBdUI7Ozs7O0lBQUUscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGltZW91dCwgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBVTkFVVEhPUklaRUQ6IG51bWJlciA9IDQwMTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmdldEluZm8oKS5waXBlKHRpbWVvdXQoNTAwMCkpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBpZiBub3QgbG9nZ2VkIGluLCBnbyBhaGVhZCBhbmQgbG9nIGluLi4ub3RoZXJ3aXNlIGxvZ291dFxuICAgICAgICAvLyBhcHBlbmQgdGhlIGN1cnJlbnQgcGF0aCBzbyB3ZSBnZXQgcmVkaXJlY3RlZCBiYWNrIHVwb24gbG9naW5cbiAgICAgICAgKGUuc3RhdHVzID09PSBVTkFVVEhPUklaRUQpID8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N0YXJ0LWxvZ2luJyA6IHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==