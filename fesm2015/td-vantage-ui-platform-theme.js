import { Injectable, RendererFactory2, Inject, Optional, SkipSelf, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject, fromEventPattern, fromEvent, merge } from 'rxjs';
import { map, filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
const VantageTheme = {
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
class VantageThemeService {
    /**
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(rendererFactory, _document) {
        this.rendererFactory = rendererFactory;
        this._document = _document;
        this.preferDarkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        /** @type {?} */
        const initialValue = this.localStorageTheme() || this.checkOSPreference();
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
        this._activeThemeSubject = new BehaviorSubject(initialValue);
        this.activeTheme$ = this._activeThemeSubject.asObservable();
        this.darkTheme$ = this._activeThemeSubject
            .asObservable()
            .pipe(map((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => theme === VantageTheme.DARK)));
        this.lightTheme$ = this._activeThemeSubject
            .asObservable()
            .pipe(map((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => theme === VantageTheme.LIGHT)));
        // apply initial theme
        this.applyTheme(initialValue, false);
        // observe media query change events
        /** @type {?} */
        const mediaObserver = fromEventPattern(this.preferDarkMediaQuery.addListener.bind(this.preferDarkMediaQuery), this.preferDarkMediaQuery.removeListener.bind(this.preferDarkMediaQuery)).pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return event.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
        })));
        // account for storage events in other browser tabs
        /** @type {?} */
        const storageObserver = fromEvent(window, 'storage').pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event.key === THEME_LOCAL_STORAGE_KEY)), map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => (event.newValue ? ((/** @type {?} */ (event.newValue))) : this.checkOSPreference()))));
        // apply theme on storage or media query change
        merge(storageObserver, mediaObserver).subscribe((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => this.applyTheme(theme)));
        // account for cached navigation
        // needed for Firefox BFCache
        window.addEventListener('pageshow', (/**
         * @param {?} pageTransition
         * @return {?}
         */
        (pageTransition) => {
            /** @type {?} */
            const localStorageTheme = this.localStorageTheme();
            /** @type {?} */
            const localStorageDiffersActiveTheme = localStorageTheme && localStorageTheme !== this._activeTheme;
            if (pageTransition.persisted && localStorageDiffersActiveTheme) {
                this.applyTheme(localStorageTheme);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    get _activeTheme() {
        return this._activeThemeSubject.getValue();
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    set _activeTheme(theme) {
        this._activeThemeSubject.next(theme);
    }
    /**
     * @return {?}
     */
    get darkThemeIsActive() {
        return this._activeTheme === VantageTheme.DARK;
    }
    /**
     * @return {?}
     */
    get lightThemeIsActive() {
        return this._activeTheme === VantageTheme.LIGHT;
    }
    /**
     * @return {?}
     */
    activeTheme() {
        return this._activeTheme;
    }
    /**
     * @return {?}
     */
    applyLightTheme() {
        return this.applyTheme(VantageTheme.LIGHT);
    }
    /**
     * @return {?}
     */
    applyDarkTheme() {
        return this.applyTheme(VantageTheme.DARK);
    }
    /**
     * @return {?}
     */
    toggleTheme() {
        return this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
    }
    /**
     * @param {?} mapObject
     * @param {?=} fallback
     * @return {?}
     */
    map(mapObject, fallback) {
        return this.activeTheme$.pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => (value in mapObject ? mapObject[value] : fallback))));
    }
    /**
     * @private
     * @return {?}
     */
    localStorageTheme() {
        return (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
    }
    /**
     * @private
     * @param {?} theme
     * @param {?=} saveSetting
     * @return {?}
     */
    applyTheme(theme, saveSetting = true) {
        this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
        this._renderer2.addClass(this._document.querySelector('html'), theme);
        if (saveSetting) {
            localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        }
        return (this._activeTheme = theme);
    }
    /**
     * @private
     * @return {?}
     */
    checkOSPreference() {
        // it should now be light-by-default
        return this.preferDarkMediaQuery.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
    }
}
VantageThemeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageThemeService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
const VANTAGE_THEME_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageThemeService,
    deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
    useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageThemeModule {
}
VantageThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_THEME_PROVIDER],
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

export { THEME_LOCAL_STORAGE_KEY, VANTAGE_THEME_PROVIDER, VANTAGE_THEME_PROVIDER_FACTORY, VantageTheme, VantageThemeModule, VantageThemeService };
//# sourceMappingURL=td-vantage-ui-platform-theme.js.map
