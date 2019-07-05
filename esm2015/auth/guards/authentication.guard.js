/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { VantageSessionService } from '../session/session.service';
export class VantageAuthenticationGuard {
    /**
     * @param {?} _sessionService
     */
    constructor(_sessionService) {
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getCookiebyName(name) {
        /** @type {?} */
        let pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return !!pair ? pair[1] : undefined;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let xsrfToken = this.getCookiebyName('XSRF-TOKEN');
            if (!xsrfToken) {
                window.location.href = '/start-login';
                return false;
            }
            else {
                try {
                    yield this._sessionService.getInfo().toPromise();
                }
                catch (e) {
                    this._sessionService.logout();
                    return false;
                }
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
    { type: VantageSessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageAuthenticationGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUduRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXJDLFlBQW9CLGVBQXNDO1FBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtJQUFHLENBQUM7Ozs7O0lBRTlELGVBQWUsQ0FBQyxJQUFZOztZQUN0QixJQUFJLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRUssV0FBVyxDQUFDLElBQTRCLEVBQUUsS0FBMEI7OztnQkFDcEUsU0FBUyxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLElBQUk7b0JBQ0YsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNsRDtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDVixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7OztZQXhCRixVQUFVOzs7O1lBRkYscUJBQXFCOzs7Ozs7O0lBS2hCLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVmFudGFnZVNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSkge31cblxuICBnZXRDb29raWVieU5hbWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcGFpcjogc3RyaW5nW10gPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChuYW1lICsgJz0oW147XSspJykpO1xuICAgIHJldHVybiAhIXBhaXIgPyBwYWlyWzFdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgeHNyZlRva2VuOiBzdHJpbmcgPSB0aGlzLmdldENvb2tpZWJ5TmFtZSgnWFNSRi1UT0tFTicpO1xuICAgIGlmICgheHNyZlRva2VuKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3RhcnQtbG9naW4nO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZXNzaW9uU2VydmljZS5nZXRJbmZvKCkudG9Qcm9taXNlKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=