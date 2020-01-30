import { Injectable, RendererFactory2, Inject, Optional, SkipSelf, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    function VantageThemeService(rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this._document = _document;
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
     * @return {?}
     */
    VantageThemeService.prototype.toggleTheme = /**
     * @return {?}
     */
    function () {
        this.activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
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
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageThemeService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
    VantageThemeService.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype._document;
}
/**
 * @param {?} parent
 * @param {?} rendererFactory
 * @param {?} _document
 * @return {?}
 */
function VANTAGE_THEME_PROVIDER_FACTORY(parent, rendererFactory, _document) {
    return parent || new VantageThemeService(rendererFactory, _document);
}
/** @type {?} */
var VANTAGE_THEME_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageThemeService,
    deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
    useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageThemeModule = /** @class */ (function () {
    function VantageThemeModule() {
    }
    VantageThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_THEME_PROVIDER],
                },] }
    ];
    return VantageThemeModule;
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

export { VANTAGE_THEME_PROVIDER, VANTAGE_THEME_PROVIDER_FACTORY, VantageTheme, VantageThemeModule, VantageThemeService };
//# sourceMappingURL=td-vantage-ui-platform-theme.js.map
