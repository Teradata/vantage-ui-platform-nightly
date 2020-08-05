/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject, fromEventPattern, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
export const THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
const VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
export { VantageTheme };
/**
 * @record
 */
export function IVantageThemeMap() { }
if (false) {
    /* Skipping unnamed member:
    [VantageTheme.DARK]?: any;*/
    /* Skipping unnamed member:
    [VantageTheme.LIGHT]?: any;*/
}
export class VantageThemeService {
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
export function VANTAGE_THEME_PROVIDER_FACTORY(parent, rendererFactory, _document) {
    return parent || new VantageThemeService(rendererFactory, _document);
}
/** @type {?} */
export const VANTAGE_THEME_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageThemeService,
    deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
    useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lLyIsInNvdXJjZXMiOlsidGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyx1QkFBdUIsR0FBVyxlQUFlOzs7SUFHNUQsTUFBTyxZQUFZO0lBQ25CLE9BQVEsYUFBYTs7Ozs7O0FBR3ZCLHNDQUdDOzs7Ozs7O0FBR0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFVOUIsWUFBb0IsZUFBaUMsRUFBNEIsU0FBYztRQUEzRSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFBNEIsY0FBUyxHQUFULFNBQVMsQ0FBSztRQU45RSx5QkFBb0IsR0FBbUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztjQU9sRyxZQUFZLEdBQWlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUV2RixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBZSxZQUFZLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZ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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmcm9tRXZlbnRQYXR0ZXJuLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UudGhlbWUnO1xuXG5leHBvcnQgZW51bSBWYW50YWdlVGhlbWUge1xuICBEQVJLID0gJ2RhcmstdGhlbWUnLFxuICBMSUdIVCA9ICdsaWdodC10aGVtZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbnRhZ2VUaGVtZU1hcCB7XG4gIFtWYW50YWdlVGhlbWUuREFSS10/OiBhbnk7XG4gIFtWYW50YWdlVGhlbWUuTElHSFRdPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZVRoZW1lU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT47XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJlZmVyRGFya01lZGlhUXVlcnk6IE1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcblxuICBwdWJsaWMgYWN0aXZlVGhlbWUkOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT47XG4gIHB1YmxpYyBkYXJrVGhlbWUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwdWJsaWMgbGlnaHRUaGVtZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgICBjb25zdCBpbml0aWFsVmFsdWU6IFZhbnRhZ2VUaGVtZSA9IHRoaXMubG9jYWxTdG9yYWdlVGhlbWUoKSB8fCB0aGlzLmNoZWNrT1NQcmVmZXJlbmNlKCk7XG5cbiAgICB0aGlzLl9yZW5kZXJlcjIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VmFudGFnZVRoZW1lPihpbml0aWFsVmFsdWUpO1xuXG4gICAgdGhpcy5hY3RpdmVUaGVtZSQgPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5kYXJrVGhlbWUkID0gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0XG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKG1hcCgodGhlbWU6IFZhbnRhZ2VUaGVtZSkgPT4gdGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLKSk7XG4gICAgdGhpcy5saWdodFRoZW1lJCA9IHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShtYXAoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQpKTtcblxuICAgIC8vIGFwcGx5IGluaXRpYWwgdGhlbWVcbiAgICB0aGlzLmFwcGx5VGhlbWUoaW5pdGlhbFZhbHVlLCBmYWxzZSk7XG5cbiAgICAvLyBvYnNlcnZlIG1lZGlhIHF1ZXJ5IGNoYW5nZSBldmVudHNcbiAgICBjb25zdCBtZWRpYU9ic2VydmVyOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT4gPSBmcm9tRXZlbnRQYXR0ZXJuPE1lZGlhUXVlcnlMaXN0RXZlbnQ+KFxuICAgICAgdGhpcy5wcmVmZXJEYXJrTWVkaWFRdWVyeS5hZGRMaXN0ZW5lci5iaW5kKHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkpLFxuICAgICAgdGhpcy5wcmVmZXJEYXJrTWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lci5iaW5kKHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkpLFxuICAgICkucGlwZShcbiAgICAgIG1hcCgoZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm1hdGNoZXMgPyBWYW50YWdlVGhlbWUuREFSSyA6IFZhbnRhZ2VUaGVtZS5MSUdIVDtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICAvLyBhY2NvdW50IGZvciBzdG9yYWdlIGV2ZW50cyBpbiBvdGhlciBicm93c2VyIHRhYnNcbiAgICBjb25zdCBzdG9yYWdlT2JzZXJ2ZXI6IE9ic2VydmFibGU8VmFudGFnZVRoZW1lPiA9IGZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJykucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gZXZlbnQua2V5ID09PSBUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSksXG4gICAgICBtYXAoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IChldmVudC5uZXdWYWx1ZSA/IChldmVudC5uZXdWYWx1ZSBhcyBWYW50YWdlVGhlbWUpIDogdGhpcy5jaGVja09TUHJlZmVyZW5jZSgpKSksXG4gICAgKTtcblxuICAgIC8vIGFwcGx5IHRoZW1lIG9uIHN0b3JhZ2Ugb3IgbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAgbWVyZ2Uoc3RvcmFnZU9ic2VydmVyLCBtZWRpYU9ic2VydmVyKS5zdWJzY3JpYmUoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoaXMuYXBwbHlUaGVtZSh0aGVtZSkpO1xuXG4gICAgLy8gYWNjb3VudCBmb3IgY2FjaGVkIG5hdmlnYXRpb25cbiAgICAvLyBuZWVkZWQgZm9yIEZpcmVmb3ggQkZDYWNoZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIChwYWdlVHJhbnNpdGlvbjogUGFnZVRyYW5zaXRpb25FdmVudCkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlVGhlbWU6IFZhbnRhZ2VUaGVtZSA9IHRoaXMubG9jYWxTdG9yYWdlVGhlbWUoKTtcbiAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZURpZmZlcnNBY3RpdmVUaGVtZTogYm9vbGVhbiA9IGxvY2FsU3RvcmFnZVRoZW1lICYmIGxvY2FsU3RvcmFnZVRoZW1lICE9PSB0aGlzLl9hY3RpdmVUaGVtZTtcblxuICAgICAgaWYgKHBhZ2VUcmFuc2l0aW9uLnBlcnNpc3RlZCAmJiBsb2NhbFN0b3JhZ2VEaWZmZXJzQWN0aXZlVGhlbWUpIHtcbiAgICAgICAgdGhpcy5hcHBseVRoZW1lKGxvY2FsU3RvcmFnZVRoZW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9hY3RpdmVUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IF9hY3RpdmVUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lKSB7XG4gICAgdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0Lm5leHQodGhlbWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXJrVGhlbWVJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLO1xuICB9XG4gIHB1YmxpYyBnZXQgbGlnaHRUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG5cbiAgcHVibGljIGFjdGl2ZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lO1xuICB9XG5cbiAgcHVibGljIGFwcGx5TGlnaHRUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkxJR0hUKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseURhcmtUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkRBUkspO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSyA/IHRoaXMuYXBwbHlMaWdodFRoZW1lKCkgOiB0aGlzLmFwcGx5RGFya1RoZW1lKCk7XG4gIH1cblxuICBwdWJsaWMgbWFwKG1hcE9iamVjdDogSVZhbnRhZ2VUaGVtZU1hcCwgZmFsbGJhY2s/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lJC5waXBlKG1hcCgodmFsdWU6IFZhbnRhZ2VUaGVtZSkgPT4gKHZhbHVlIGluIG1hcE9iamVjdCA/IG1hcE9iamVjdFt2YWx1ZV0gOiBmYWxsYmFjaykpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9jYWxTdG9yYWdlVGhlbWUoKTogVmFudGFnZVRoZW1lIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpIGFzIFZhbnRhZ2VUaGVtZTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lLCBzYXZlU2V0dGluZzogYm9vbGVhbiA9IHRydWUpOiBWYW50YWdlVGhlbWUge1xuICAgIHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSxcbiAgICAgIHRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSyA/IFZhbnRhZ2VUaGVtZS5MSUdIVCA6IFZhbnRhZ2VUaGVtZS5EQVJLLFxuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSwgdGhlbWUpO1xuXG4gICAgaWYgKHNhdmVTZXR0aW5nKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSwgdGhlbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fYWN0aXZlVGhlbWUgPSB0aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrT1NQcmVmZXJlbmNlKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgLy8gaXQgc2hvdWxkIG5vdyBiZSBsaWdodC1ieS1kZWZhdWx0XG4gICAgcmV0dXJuIHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkubWF0Y2hlcyA/IFZhbnRhZ2VUaGVtZS5EQVJLIDogVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1RIRU1FX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZVRoZW1lU2VydmljZSxcbiAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICBfZG9jdW1lbnQ6IGFueSxcbik6IFZhbnRhZ2VUaGVtZVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVGhlbWVTZXJ2aWNlKHJlbmRlcmVyRmFjdG9yeSwgX2RvY3VtZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVEhFTUVfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVGhlbWVTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRoZW1lU2VydmljZV0sIFtSZW5kZXJlckZhY3RvcnkyXSwgW0RPQ1VNRU5UXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVEhFTUVfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=