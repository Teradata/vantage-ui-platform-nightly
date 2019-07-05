/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { VantageSessionService } from '../session/session.service';
var VantageAuthenticationGuard = /** @class */ (function () {
    function VantageAuthenticationGuard(_sessionService) {
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    VantageAuthenticationGuard.prototype.getCookiebyName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return !!pair ? pair[1] : undefined;
    };
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
            var xsrfToken, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xsrfToken = this.getCookiebyName('XSRF-TOKEN');
                        if (!!xsrfToken) return [3 /*break*/, 1];
                        window.location.href = '/start-login';
                        return [2 /*return*/, false];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sessionService.getInfo().toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this._sessionService.logout();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    VantageAuthenticationGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageAuthenticationGuard.ctorParameters = function () { return [
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
    VantageAuthenticationGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQUdFLG9DQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7SUFBRyxDQUFDOzs7OztJQUU5RCxvREFBZTs7OztJQUFmLFVBQWdCLElBQVk7O1lBQ3RCLElBQUksR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7SUFFSyxnREFBVzs7Ozs7SUFBakIsVUFBa0IsSUFBNEIsRUFBRSxLQUEwQjs7Ozs7O3dCQUNwRSxTQUFTLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7NkJBQ3RELENBQUMsU0FBUyxFQUFWLHdCQUFVO3dCQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQzt3QkFDdEMsc0JBQU8sS0FBSyxFQUFDOzs7d0JBR1gscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWhELFNBQWdELENBQUM7Ozs7d0JBRWpELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQzlCLHNCQUFPLEtBQUssRUFBQzs0QkFHakIsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2I7O2dCQXhCRixVQUFVOzs7O2dCQUZGLHFCQUFxQjs7SUEyQjlCLGlDQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F4QlksMEJBQTBCOzs7Ozs7SUFFekIscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIGdldENvb2tpZWJ5TmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBwYWlyOiBzdHJpbmdbXSA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKG5hbWUgKyAnPShbXjtdKyknKSk7XG4gICAgcmV0dXJuICEhcGFpciA/IHBhaXJbMV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCB4c3JmVG9rZW46IHN0cmluZyA9IHRoaXMuZ2V0Q29va2llYnlOYW1lKCdYU1JGLVRPS0VOJyk7XG4gICAgaWYgKCF4c3JmVG9rZW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdGFydC1sb2dpbic7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuX3Nlc3Npb25TZXJ2aWNlLmdldEluZm8oKS50b1Byb21pc2UoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5fc2Vzc2lvblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==