import { Injectable, Optional, SkipSelf, NgModule, Inject, RendererFactory2, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { TdDialogService, CovalentDialogsModule } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TdMediaService, CovalentMediaModule } from '@covalent/core/media';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

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
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageErrorService.ctorParameters = function () { return [
        { type: TdDialogService },
        { type: TranslateService }
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
    deps: [[new Optional(), new SkipSelf(), VantageErrorService], TdDialogService, TranslateService],
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
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageToastService.ctorParameters = function () { return [
        { type: MatSnackBar },
        { type: TdMediaService }
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
    deps: [[new Optional(), new SkipSelf(), VantageToastService], MatSnackBar, [new Optional(), TdMediaService]],
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
        { type: NgModule, args: [{
                    imports: [CommonModule, MatSnackBarModule, CovalentDialogsModule, CovalentMediaModule],
                    providers: [VANTAGE_ERROR_PROVIDER, VANTAGE_TOAST_PROVIDER],
                },] }
    ];
    return VantageUserFeedbackModule;
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
/** @type {?} */
var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
var VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
var VantageThemeService = /** @class */ (function () {
    function VantageThemeService(_document, rendererFactory) {
        var _this = this;
        this._document = _document;
        this.rendererFactory = rendererFactory;
        this._activeThemeSubject = new BehaviorSubject((/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))));
        this.activeTheme$ = this._activeThemeSubject.asObservable();
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        fromEvent(window, 'storage')
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.key === THEME_LOCAL_STORAGE_KEY; })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.applyTheme((/** @type {?} */ (event.newValue))); }));
    }
    Object.defineProperty(VantageThemeService.prototype, "activeTheme", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._activeThemeSubject.getValue();
        },
        set: /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._activeThemeSubject.next(theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VantageThemeService.prototype, "darkThemeIsActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeTheme === VantageTheme.DARK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VantageThemeService.prototype, "lightThemeIsActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeTheme === VantageTheme.LIGHT;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VantageThemeService.prototype.applyLightTheme = /**
     * @return {?}
     */
    function () {
        this.applyTheme(VantageTheme.LIGHT);
    };
    /**
     * @return {?}
     */
    VantageThemeService.prototype.applyDarkTheme = /**
     * @return {?}
     */
    function () {
        this.applyTheme(VantageTheme.DARK);
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    VantageThemeService.prototype.applyTheme = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        this._renderer2.addClass(this._document.querySelector('html'), theme);
        this.activeTheme = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
    };
    VantageThemeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    VantageThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: RendererFactory2 }
    ]; };
    /** @nocollapse */ VantageThemeService.ɵprov = ɵɵdefineInjectable({ factory: function VantageThemeService_Factory() { return new VantageThemeService(ɵɵinject(DOCUMENT), ɵɵinject(RendererFactory2)); }, token: VantageThemeService, providedIn: "root" });
    return VantageThemeService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._activeThemeSubject;
    /** @type {?} */
    VantageThemeService.prototype.activeTheme$;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype.rendererFactory;
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

export { VantageError, VantageErrorService, VantageTheme, VantageThemeService, VantageToastService, VantageUserFeedbackModule, VANTAGE_ERROR_PROVIDER_FACTORY as ɵa, VANTAGE_ERROR_PROVIDER as ɵb, VANTAGE_TOAST_PROVIDER_FACTORY as ɵc, VANTAGE_TOAST_PROVIDER as ɵd };
//# sourceMappingURL=td-vantage-ui-platform-utilities.js.map
