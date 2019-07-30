/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
import { timeout } from 'rxjs/operators';
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                // check the validity to see if already logged in
                yield this._sessionService.getInfo().pipe(timeout(5000)).toPromise();
            }
            catch (e) {
                // if not logged in, go ahead and log in...otherwise logout
                // append the current path so we get redirected back upon login
                (e.status === UNAUTHORIZED) ? window.location.href = '/start-login' : this._sessionService.logout();
                return false;
            }
            return true;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFbkMsWUFBWSxHQUFXLEdBQUc7QUFFaEMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFckMsWUFBb0IsT0FBZSxFQUFVLGVBQXNDO1FBQS9ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7SUFBRyxDQUFDOzs7Ozs7SUFFakYsV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7O1lBQ3hFLElBQUk7Z0JBQ0YsaURBQWlEO2dCQUNqRCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RFO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsMkRBQTJEO2dCQUMzRCwrREFBK0Q7Z0JBQy9ELENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwRyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7OztZQWhCRixVQUFVOzs7O1lBTHdELE1BQU07WUFDaEUscUJBQXFCOzs7Ozs7O0lBT2hCLDZDQUF1Qjs7Ozs7SUFBRSxxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFVOQVVUSE9SSVpFRDogbnVtYmVyID0gNDAxO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGNoZWNrIHRoZSB2YWxpZGl0eSB0byBzZWUgaWYgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICAgIGF3YWl0IHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmdldEluZm8oKS5waXBlKHRpbWVvdXQoNTAwMCkpLnRvUHJvbWlzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIGlmIG5vdCBsb2dnZWQgaW4sIGdvIGFoZWFkIGFuZCBsb2cgaW4uLi5vdGhlcndpc2UgbG9nb3V0XG4gICAgICAvLyBhcHBlbmQgdGhlIGN1cnJlbnQgcGF0aCBzbyB3ZSBnZXQgcmVkaXJlY3RlZCBiYWNrIHVwb24gbG9naW5cbiAgICAgIChlLnN0YXR1cyA9PT0gVU5BVVRIT1JJWkVEKSA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdGFydC1sb2dpbicgOiB0aGlzLl9zZXNzaW9uU2VydmljZS5sb2dvdXQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==