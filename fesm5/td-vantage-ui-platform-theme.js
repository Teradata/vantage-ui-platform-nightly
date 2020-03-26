import { Injectable, RendererFactory2, Inject, Optional, SkipSelf, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, fromEventPattern, fromEvent, merge } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
/**
 * @record
 */
function IVantageThemeMap() { }
if (false) {
    /* Skipping unnamed member:
    [VantageTheme.DARK]?: any;*/
    /* Skipping unnamed member:
    [VantageTheme.LIGHT]?: any;*/
}
var VantageThemeService = /** @class */ (function () {
    function VantageThemeService(rendererFactory, _document) {
        var _this = this;
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this.preferDarkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        /** @type {?} */
        var initialValue = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))) || this.checkOSPreference();
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        this._activeThemeSubject = new BehaviorSubject(initialValue);
        this.activeTheme$ = this._activeThemeSubject.asObservable();
        this.darkTheme$ = this._activeThemeSubject
            .asObservable()
            .pipe(map((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) { return theme === VantageTheme.DARK; })));
        this.lightTheme$ = this._activeThemeSubject
            .asObservable()
            .pipe(map((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) { return theme === VantageTheme.LIGHT; })));
        // apply initial theme
        this.applyTheme(initialValue, false);
        // observe media query change events
        /** @type {?} */
        var mediaObserver = fromEventPattern(this.preferDarkMediaQuery.addListener.bind(this.preferDarkMediaQuery), this.preferDarkMediaQuery.removeListener.bind(this.preferDarkMediaQuery)).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
        })));
        // account for storage events in other browser tabs
        /** @type {?} */
        var storageObserver = fromEvent(window, 'storage').pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.key === THEME_LOCAL_STORAGE_KEY; })), map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return (event.newValue ? ((/** @type {?} */ (event.newValue))) : _this.checkOSPreference()); })));
        // apply theme on storage or media query change
        merge(storageObserver, mediaObserver).subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        function (theme) { return _this.applyTheme(theme); }));
    }
    Object.defineProperty(VantageThemeService.prototype, "_activeTheme", {
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
            return this._activeTheme === VantageTheme.DARK;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VantageThemeService.prototype, "lightThemeIsActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeTheme === VantageTheme.LIGHT;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VantageThemeService.prototype.activeTheme = /**
     * @return {?}
     */
    function () {
        return this._activeTheme;
    };
    /**
     * @return {?}
     */
    VantageThemeService.prototype.applyLightTheme = /**
     * @return {?}
     */
    function () {
        return this.applyTheme(VantageTheme.LIGHT);
    };
    /**
     * @return {?}
     */
    VantageThemeService.prototype.applyDarkTheme = /**
     * @return {?}
     */
    function () {
        return this.applyTheme(VantageTheme.DARK);
    };
    /**
     * @return {?}
     */
    VantageThemeService.prototype.toggleTheme = /**
     * @return {?}
     */
    function () {
        return this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
    };
    /**
     * @param {?} mapObject
     * @param {?=} fallback
     * @return {?}
     */
    VantageThemeService.prototype.map = /**
     * @param {?} mapObject
     * @param {?=} fallback
     * @return {?}
     */
    function (mapObject, fallback) {
        return this.activeTheme$.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (value in mapObject ? mapObject[value] : fallback); })));
    };
    /**
     * @private
     * @param {?} theme
     * @param {?=} saveSetting
     * @return {?}
     */
    VantageThemeService.prototype.applyTheme = /**
     * @private
     * @param {?} theme
     * @param {?=} saveSetting
     * @return {?}
     */
    function (theme, saveSetting) {
        if (saveSetting === void 0) { saveSetting = true; }
        this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
        this._renderer2.addClass(this._document.querySelector('html'), theme);
        if (saveSetting) {
            localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        }
        return (this._activeTheme = theme);
    };
    /**
     * @private
     * @return {?}
     */
    VantageThemeService.prototype.checkOSPreference = /**
     * @private
     * @return {?}
     */
    function () {
        // it should now be light-by-default
        return this.preferDarkMediaQuery.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
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
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype.preferDarkMediaQuery;
    /** @type {?} */
    VantageThemeService.prototype.activeTheme$;
    /** @type {?} */
    VantageThemeService.prototype.darkTheme$;
    /** @type {?} */
    VantageThemeService.prototype.lightTheme$;
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

export { THEME_LOCAL_STORAGE_KEY, VANTAGE_THEME_PROVIDER, VANTAGE_THEME_PROVIDER_FACTORY, VantageTheme, VantageThemeModule, VantageThemeService };
//# sourceMappingURL=td-vantage-ui-platform-theme.js.map
