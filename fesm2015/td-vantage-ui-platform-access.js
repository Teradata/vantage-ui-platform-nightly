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
class VantageBlockRootAccessGuard {
    /**
     * @param {?} _authGuard
     * @param {?} _sessionService
     */
    constructor(_authGuard, _sessionService) {
        this._authGuard = _authGuard;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        // pipe through the VantageAuthentication guard to be able to chain guards
        return this._authGuard.canActivate(next, state).pipe(map((/**
         * @return {?}
         */
        () => {
            if (this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    }
}
VantageBlockRootAccessGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageBlockRootAccessGuard.ctorParameters = () => [
    { type: VantageAuthenticationGuard },
    { type: VantageSessionService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Guard that checks if the user is a normal user (`admin` flag `false`)
 * to block access into a particular route.
 * If `admin` flag is `false`, then we redirect to `/`
 */
class VantageBlockUserAccessGuard {
    /**
     * @param {?} _authGuard
     * @param {?} _sessionService
     */
    constructor(_authGuard, _sessionService) {
        this._authGuard = _authGuard;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        // pipe through the VantageAuthentication guard to be able to chain guards
        return this._authGuard.canActivate(next, state).pipe(map((/**
         * @return {?}
         */
        () => {
            if (!this._sessionService.user.admin) {
                location.replace('/');
                return false;
            }
            return true;
        })));
    }
}
VantageBlockUserAccessGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageBlockUserAccessGuard.ctorParameters = () => [
    { type: VantageAuthenticationGuard },
    { type: VantageSessionService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAccessModule {
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

export { VantageAccessModule, VantageBlockRootAccessGuard, VantageBlockUserAccessGuard };
//# sourceMappingURL=td-vantage-ui-platform-access.js.map
