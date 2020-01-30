(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@covalent/core/dialogs'), require('@ngx-translate/core'), require('@angular/material/snack-bar'), require('@covalent/core/media'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/utilities', ['exports', '@angular/core', '@covalent/core/dialogs', '@ngx-translate/core', '@angular/material/snack-bar', '@covalent/core/media', '@angular/common'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].utilities = {}), global.ng.core, global.covalent.core.dialogs, global['ngx-translate'].core, global.ng.material['snack-bar'], global.covalent.core.media, global.ng.common));
}(this, (function (exports, core, dialogs, core$1, snackBar, media, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageError = /** @class */ (function () {
        function VantageError() {
        }
        return VantageError;
    }());
    if (false) {
        /** @type {?} */
        VantageError.prototype.message;
        /** @type {?} */
        VantageError.prototype.error;
    }
    var VantageErrorService = /** @class */ (function () {
        function VantageErrorService(_dialogService, _translate) {
            this._dialogService = _dialogService;
            this._translate = _translate;
        }
        /**
         * @param {?} error
         * @return {?}
         */
        VantageErrorService.prototype.open = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error) {
                /** @type {?} */
                var config = {
                    title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                    message: error.message,
                    disableClose: true,
                    closeButton: this._translate.instant('CLOSE'),
                };
                if (error.error) {
                    config.message += " (" + error.error.toString() + ")";
                }
                if (config.message || config.title) {
                    return this._dialogService.openAlert(config);
                }
            }
        };
        VantageErrorService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageErrorService.ctorParameters = function () { return [
            { type: dialogs.TdDialogService },
            { type: core$1.TranslateService }
        ]; };
        return VantageErrorService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageErrorService.prototype._dialogService;
        /**
         * @type {?}
         * @private
         */
        VantageErrorService.prototype._translate;
    }
    /**
     * @param {?} parent
     * @param {?} dialogService
     * @param {?} translate
     * @return {?}
     */
    function VANTAGE_ERROR_PROVIDER_FACTORY(parent, dialogService, translate) {
        return parent || new VantageErrorService(dialogService, translate);
    }
    /** @type {?} */
    var VANTAGE_ERROR_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageErrorService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageErrorService], dialogs.TdDialogService, core$1.TranslateService],
        useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageToastService = /** @class */ (function () {
        function VantageToastService(_snackBarService, _media) {
            this._snackBarService = _snackBarService;
            this._media = _media;
        }
        /**
         * @param {?} message
         * @param {?=} time
         * @return {?}
         */
        VantageToastService.prototype.open = /**
         * @param {?} message
         * @param {?=} time
         * @return {?}
         */
        function (message, time) {
            if (time === void 0) { time = 3000; }
            if (message) {
                this._snackBarService.open(message, undefined, {
                    duration: time,
                    horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
                });
            }
        };
        VantageToastService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageToastService.ctorParameters = function () { return [
            { type: snackBar.MatSnackBar },
            { type: media.TdMediaService }
        ]; };
        return VantageToastService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageToastService.prototype._snackBarService;
        /**
         * @type {?}
         * @private
         */
        VantageToastService.prototype._media;
    }
    /**
     * @param {?} parent
     * @param {?} snackBar
     * @param {?} media
     * @return {?}
     */
    function VANTAGE_TOAST_PROVIDER_FACTORY(parent, snackBar, media) {
        return parent || new VantageToastService(snackBar, media);
    }
    /** @type {?} */
    var VANTAGE_TOAST_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageToastService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageToastService], snackBar.MatSnackBar, [new core.Optional(), media.TdMediaService]],
        useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageUserFeedbackModule = /** @class */ (function () {
        function VantageUserFeedbackModule() {
        }
        VantageUserFeedbackModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, snackBar.MatSnackBarModule, dialogs.CovalentDialogsModule, media.CovalentMediaModule],
                        providers: [VANTAGE_ERROR_PROVIDER, VANTAGE_TOAST_PROVIDER],
                    },] }
        ];
        return VantageUserFeedbackModule;
    }());

    exports.VantageError = VantageError;
    exports.VantageErrorService = VantageErrorService;
    exports.VantageToastService = VantageToastService;
    exports.VantageUserFeedbackModule = VantageUserFeedbackModule;
    exports.ɵa = VANTAGE_ERROR_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_ERROR_PROVIDER;
    exports.ɵc = VANTAGE_TOAST_PROVIDER_FACTORY;
    exports.ɵd = VANTAGE_TOAST_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-utilities.umd.js.map
