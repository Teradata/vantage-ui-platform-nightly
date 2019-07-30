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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        // check the validity to see if already logged in
                        return [4 /*yield*/, this._sessionService.getInfo().pipe(timeout(5000)).toPromise()];
                    case 1:
                        // check the validity to see if already logged in
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        // if not logged in, go ahead and log in...otherwise logout
                        // append the current path so we get redirected back upon login
                        (e_1.status === UNAUTHORIZED) ? window.location.href = '/start-login' : this._sessionService.logout();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQTRELE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFbkMsWUFBWSxHQUFXLEdBQUc7QUFDaEM7SUFHRSxvQ0FBb0IsT0FBZSxFQUFVLGVBQXNDO1FBQS9ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7SUFBRyxDQUFDOzs7Ozs7SUFFakYsZ0RBQVc7Ozs7O0lBQWpCLFVBQWtCLElBQTRCLEVBQUUsS0FBMEI7Ozs7Ozs7d0JBRXRFLGlEQUFpRDt3QkFDakQscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQURwRSxpREFBaUQ7d0JBQ2pELFNBQW9FLENBQUM7Ozs7d0JBRXJFLDJEQUEyRDt3QkFDM0QsK0RBQStEO3dCQUMvRCxDQUFDLEdBQUMsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDcEcsc0JBQU8sS0FBSyxFQUFDOzRCQUVmLHNCQUFPLElBQUksRUFBQzs7OztLQUNiOztnQkFoQkYsVUFBVTs7OztnQkFMd0QsTUFBTTtnQkFDaEUscUJBQXFCOztJQXFCOUIsaUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSwwQkFBMEI7Ozs7OztJQUV6Qiw2Q0FBdUI7Ozs7O0lBQUUscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBVTkFVVEhPUklaRUQ6IG51bWJlciA9IDQwMTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc2Vzc2lvblNlcnZpY2U6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSkge31cblxuICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBjaGVjayB0aGUgdmFsaWRpdHkgdG8gc2VlIGlmIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgICBhd2FpdCB0aGlzLl9zZXNzaW9uU2VydmljZS5nZXRJbmZvKCkucGlwZSh0aW1lb3V0KDUwMDApKS50b1Byb21pc2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiBub3QgbG9nZ2VkIGluLCBnbyBhaGVhZCBhbmQgbG9nIGluLi4ub3RoZXJ3aXNlIGxvZ291dFxuICAgICAgLy8gYXBwZW5kIHRoZSBjdXJyZW50IHBhdGggc28gd2UgZ2V0IHJlZGlyZWN0ZWQgYmFjayB1cG9uIGxvZ2luXG4gICAgICAoZS5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3RhcnQtbG9naW4nIDogdGhpcy5fc2Vzc2lvblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=