import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { TdGET, TdResponse, mixinHttp } from '@covalent/http';
import { of, Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ILearnLinkItem() { }
if (false) {
    /** @type {?|undefined} */
    ILearnLinkItem.prototype.description;
}
/**
 * @record
 */
function IHelpAssets() { }
var VantageAssetsService = /** @class */ (function (_super) {
    __extends(VantageAssetsService, _super);
    function VantageAssetsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve the help JSON definition asset
     */
    /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    VantageAssetsService.prototype.getHelpJSON = /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.body;
        })));
    };
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
    return VantageAssetsService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/ui-assets',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_ASSETS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAssetsService();
}
/** @type {?} */
var VANTAGE_ASSETS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAssetsService,
    deps: [[new Optional(), new SkipSelf(), VantageAssetsService]],
    useFactory: VANTAGE_ASSETS_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageAssetsModule = /** @class */ (function () {
    function VantageAssetsModule() {
    }
    VantageAssetsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_ASSETS_PROVIDER],
                },] }
    ];
    return VantageAssetsModule;
}());

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
