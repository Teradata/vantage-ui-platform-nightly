import { Injectable, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { VantageAuthenticationGuard, VantageSessionService } from '@td-vantage/ui-platform/auth';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageAccessModule = /** @class */ (function () {
    function VantageAccessModule() {
    }
    VantageAccessModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    providers: [
                        VantageBlockRootAccessGuard,
                        VantageBlockUserAccessGuard,
                    ],
                },] }
    ];
    return VantageAccessModule;
}());

export { VantageAccessModule, VantageBlockRootAccessGuard, VantageBlockUserAccessGuard };
//# sourceMappingURL=td-vantage-ui-platform-access.js.map
