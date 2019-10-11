/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
import { timeout, catchError, map } from 'rxjs/operators';
/** @type {?} */
const UNAUTHORIZED = 401;
export class VantageAuthenticationGuard {
    /**
     * @param {?} _router
     * @param {?} _sessionService
     */
    constructor(_router, _sessionService) {
        this._router = _router;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        return this._sessionService.getInfo().pipe(timeout(5000)).pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            // if not logged in, go ahead and log in...otherwise logout
            // append the current path so we get redirected back upon login
            (e.status === UNAUTHORIZED) ? window.location.href = '/start-login' : this._sessionService.logout();
            throw e;
        })), map((/**
         * @return {?}
         */
        () => {
            return true;
        })));
    }
}
VantageAuthenticationGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageAuthenticationGuard.ctorParameters = () => [
    { type: Router },
    { type: VantageSessionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRXBELFlBQVksR0FBVyxHQUFHO0FBR2hDLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBRXJDLFlBQW9CLE9BQWUsRUFBVSxlQUFzQztRQUEvRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQUcsQ0FBQzs7Ozs7O0lBRXZGLFdBQVcsQ0FBQyxJQUE0QixFQUFFLEtBQTBCO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM1RCxVQUFVOzs7O1FBQUMsQ0FBQyxDQUFvQixFQUFFLEVBQUU7WUFDbEMsMkRBQTJEO1lBQzNELCtEQUErRDtZQUMvRCxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwRyxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBQyxFQUNGLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWpCRixVQUFVOzs7O1lBUndELE1BQU07WUFDaEUscUJBQXFCOzs7Ozs7O0lBVWhCLDZDQUF1Qjs7Ozs7SUFBRSxxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVmFudGFnZVNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aW1lb3V0LCBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFVOQVVUSE9SSVpFRDogbnVtYmVyID0gNDAxO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3Nlc3Npb25TZXJ2aWNlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpIHt9XG5cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fc2Vzc2lvblNlcnZpY2UuZ2V0SW5mbygpLnBpcGUodGltZW91dCg1MDAwKSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGU6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIC8vIGlmIG5vdCBsb2dnZWQgaW4sIGdvIGFoZWFkIGFuZCBsb2cgaW4uLi5vdGhlcndpc2UgbG9nb3V0XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgY3VycmVudCBwYXRoIHNvIHdlIGdldCByZWRpcmVjdGVkIGJhY2sgdXBvbiBsb2dpblxuICAgICAgICAoZS5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3RhcnQtbG9naW4nIDogdGhpcy5fc2Vzc2lvblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19