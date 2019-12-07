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
        return this._sessionService
            .getInfo()
            .pipe(timeout(5000))
            .pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // if not logged in, go ahead and log in...otherwise logout
            // append the current path so we get redirected back upon login
            e.status === UNAUTHORIZED
                ? (window.location.href = '/start-login?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000))
                : _this._sessionService.logout();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXBELFlBQVksR0FBVyxHQUFHO0FBRWhDO0lBRUUsb0NBQW9CLE9BQWUsRUFBVSxlQUFzQztRQUEvRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQUcsQ0FBQzs7Ozs7O0lBRXZGLGdEQUFXOzs7OztJQUFYLFVBQVksSUFBNEIsRUFBRSxLQUEwQjtRQUFwRSxpQkFpQkM7UUFoQkMsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN4QixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CLElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsVUFBQyxDQUFvQjtZQUM5QiwyREFBMkQ7WUFDM0QsK0RBQStEO1lBQy9ELENBQUMsQ0FBQyxNQUFNLEtBQUssWUFBWTtnQkFDdkIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RyxDQUFDLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQyxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBQyxFQUNGLEdBQUc7OztRQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Z0JBckJGLFVBQVU7Ozs7Z0JBUndELE1BQU07Z0JBQ2hFLHFCQUFxQjs7SUE2QjlCLGlDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksMEJBQTBCOzs7Ozs7SUFDekIsNkNBQXVCOzs7OztJQUFFLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRpbWVvdXQsIGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgVU5BVVRIT1JJWkVEOiBudW1iZXIgPSA0MDE7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpIHt9XG5cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblNlcnZpY2VcbiAgICAgIC5nZXRJbmZvKClcbiAgICAgIC5waXBlKHRpbWVvdXQoNTAwMCkpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZTogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyBpZiBub3QgbG9nZ2VkIGluLCBnbyBhaGVhZCBhbmQgbG9nIGluLi4ub3RoZXJ3aXNlIGxvZ291dFxuICAgICAgICAgIC8vIGFwcGVuZCB0aGUgY3VycmVudCBwYXRoIHNvIHdlIGdldCByZWRpcmVjdGVkIGJhY2sgdXBvbiBsb2dpblxuICAgICAgICAgIGUuc3RhdHVzID09PSBVTkFVVEhPUklaRURcbiAgICAgICAgICAgID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdGFydC1sb2dpbj9ub25jZT0nICsgTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApKVxuICAgICAgICAgICAgOiB0aGlzLl9zZXNzaW9uU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG59XG4iXX0=