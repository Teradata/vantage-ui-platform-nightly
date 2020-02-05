import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { TdDialogService, CovalentDialogsModule } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TdMediaService, CovalentMediaModule } from '@covalent/core/media';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageError {
}
if (false) {
    /** @type {?} */
    VantageError.prototype.message;
    /** @type {?} */
    VantageError.prototype.error;
}
class VantageErrorService {
    /**
     * @param {?} _dialogService
     * @param {?} _translate
     */
    constructor(_dialogService, _translate) {
        this._dialogService = _dialogService;
        this._translate = _translate;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    open(error) {
        if (error) {
            /** @type {?} */
            const config = {
                title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                message: error.message,
                disableClose: true,
                closeButton: this._translate.instant('CLOSE'),
            };
            if (error.error) {
                config.message += ` (${error.error.toString()})`;
            }
            if (config.message || config.title) {
                return this._dialogService.openAlert(config);
            }
        }
    }
}
VantageErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageErrorService.ctorParameters = () => [
    { type: TdDialogService },
    { type: TranslateService }
];
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
const VANTAGE_ERROR_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageErrorService,
    deps: [[new Optional(), new SkipSelf(), VantageErrorService], TdDialogService, TranslateService],
    useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageToastService {
    /**
     * @param {?} _snackBarService
     * @param {?} _media
     */
    constructor(_snackBarService, _media) {
        this._snackBarService = _snackBarService;
        this._media = _media;
    }
    /**
     * @param {?} message
     * @param {?=} time
     * @return {?}
     */
    open(message, time = 3000) {
        if (message) {
            this._snackBarService.open(message, undefined, {
                duration: time,
                horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
            });
        }
    }
}
VantageToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageToastService.ctorParameters = () => [
    { type: MatSnackBar },
    { type: TdMediaService }
];
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
const VANTAGE_TOAST_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageToastService,
    deps: [[new Optional(), new SkipSelf(), VantageToastService], MatSnackBar, [new Optional(), TdMediaService]],
    useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageUserFeedbackModule {
}
VantageUserFeedbackModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatSnackBarModule, CovalentDialogsModule, CovalentMediaModule],
                providers: [VANTAGE_ERROR_PROVIDER, VANTAGE_TOAST_PROVIDER],
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
// TD_PRE_LOADER_COUNT variable is defined inside pre-loader.html
/**
 * @return {?}
 */
function showPreLoader() {
    if (((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT !== undefined) {
        ((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT++;
        updatePreLoaderVisibility();
    }
}
/**
 * @return {?}
 */
function hidePreLoader() {
    if (((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT !== undefined) {
        ((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT--;
        updatePreLoaderVisibility();
    }
}
/**
 * @return {?}
 */
function updatePreLoaderVisibility() {
    /** @type {?} */
    const loader = document.getElementById('td-pre-loader');
    if (loader) {
        loader.style.height = ((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT > 0 ? '100%' : '0';
        loader.style.opacity = ((/** @type {?} */ (window))).TD_PRE_LOADER_COUNT > 0 ? '1' : '0';
    }
}

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VantageError, VantageErrorService, VantageToastService, VantageUserFeedbackModule, hidePreLoader, showPreLoader, VANTAGE_ERROR_PROVIDER_FACTORY as ɵa, VANTAGE_ERROR_PROVIDER as ɵb, VANTAGE_TOAST_PROVIDER_FACTORY as ɵc, VANTAGE_TOAST_PROVIDER as ɵd };
//# sourceMappingURL=td-vantage-ui-platform-utilities.js.map
