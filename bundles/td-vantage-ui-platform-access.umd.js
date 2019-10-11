(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('@td-vantage/ui-platform/auth'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/access', ['exports', '@angular/core', 'rxjs/operators', '@td-vantage/ui-platform/auth', '@angular/common'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].access = {}), global.ng.core, global.rxjs.operators, global['td-vantage']['ui-platform'].auth, global.ng.common));
}(this, function (exports, core, operators, auth, common) { 'use strict';

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
            return this._authGuard.canActivate(next, state).pipe(operators.map((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageBlockRootAccessGuard.ctorParameters = function () { return [
            { type: auth.VantageAuthenticationGuard },
            { type: auth.VantageSessionService }
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
            return this._authGuard.canActivate(next, state).pipe(operators.map((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageBlockUserAccessGuard.ctorParameters = function () { return [
            { type: auth.VantageAuthenticationGuard },
            { type: auth.VantageSessionService }
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VantageBlockRootAccessGuard,
                            VantageBlockUserAccessGuard,
                        ],
                    },] }
        ];
        return VantageAccessModule;
    }());

    exports.VantageAccessModule = VantageAccessModule;
    exports.VantageBlockRootAccessGuard = VantageBlockRootAccessGuard;
    exports.VantageBlockUserAccessGuard = VantageBlockUserAccessGuard;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=td-vantage-ui-platform-access.umd.js.map
