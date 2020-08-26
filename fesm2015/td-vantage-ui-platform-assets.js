import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate, __param, __metadata } from 'tslib';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { mixinHttp, TdGET, TdResponse } from '@covalent/http';
import { of, Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IHelpAssets() { }
class VantageAssetsService extends mixinHttp(class {
}, {
    baseUrl: '/ui-assets',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
}) {
    /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    getHelpJSON(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.body;
        })));
    }
}
VantageAssetsService.decorators = [
    { type: Injectable }
];
__decorate([
    TdGET({
        path: '/json/help/help.json',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageAssetsService.prototype, "getHelpJSON", null);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_ASSETS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAssetsService();
}
/** @type {?} */
const VANTAGE_ASSETS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAssetsService,
    deps: [[new Optional(), new SkipSelf(), VantageAssetsService]],
    useFactory: VANTAGE_ASSETS_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAssetsModule {
}
VantageAssetsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_ASSETS_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VANTAGE_ASSETS_PROVIDER, VANTAGE_ASSETS_PROVIDER_FACTORY, VantageAssetsModule, VantageAssetsService };
//# sourceMappingURL=td-vantage-ui-platform-assets.js.map
