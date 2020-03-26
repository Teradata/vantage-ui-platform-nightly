/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject, fromEventPattern, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
export var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
var VantageTheme = {
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
export { VantageThemeService };
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
export var VANTAGE_THEME_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageThemeService,
    deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
    useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lLyIsInNvdXJjZXMiOlsidGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE1BQU0sS0FBTyx1QkFBdUIsR0FBVyxlQUFlOzs7SUFHNUQsTUFBTyxZQUFZO0lBQ25CLE9BQVEsYUFBYTs7Ozs7O0FBR3ZCLHNDQUdDOzs7Ozs7O0FBRUQ7SUFXRSw2QkFBb0IsZUFBaUMsRUFBNEIsU0FBYztRQUEvRixpQkFvQ0M7UUFwQ21CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUE0QixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBTjlFLHlCQUFvQixHQUFtQixNQUFNLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUM7O1lBT2xHLFlBQVksR0FDaEIsbUJBQWMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRXpGLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFD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LCtDQUFpQjs7OztJQUF6QjtRQUNFLG9DQUFvQztRQUNwQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDcEYsQ0FBQzs7Z0JBckdGLFVBQVU7Ozs7Z0JBakI2QixnQkFBZ0I7Z0RBNEJFLE1BQU0sU0FBQyxRQUFROztJQTJGekUsMEJBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXJHWSxtQkFBbUI7Ozs7OztJQUM5Qix5Q0FBOEI7Ozs7O0lBRTlCLGtEQUFvRTs7Ozs7SUFDcEUsbURBQTBHOztJQUUxRywyQ0FBOEM7O0lBQzlDLHlDQUF1Qzs7SUFDdkMsMENBQXdDOzs7OztJQUU1Qiw4Q0FBeUM7Ozs7O0lBQUUsd0NBQXdDOzs7Ozs7OztBQTZGakcsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixlQUFpQyxFQUNqQyxTQUFjO0lBRWQsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkUsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RixVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmcm9tRXZlbnRQYXR0ZXJuLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UudGhlbWUnO1xuXG5leHBvcnQgZW51bSBWYW50YWdlVGhlbWUge1xuICBEQVJLID0gJ2RhcmstdGhlbWUnLFxuICBMSUdIVCA9ICdsaWdodC10aGVtZScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbnRhZ2VUaGVtZU1hcCB7XG4gIFtWYW50YWdlVGhlbWUuREFSS10/OiBhbnk7XG4gIFtWYW50YWdlVGhlbWUuTElHSFRdPzogYW55O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZVRoZW1lU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT47XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJlZmVyRGFya01lZGlhUXVlcnk6IE1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcblxuICBwdWJsaWMgYWN0aXZlVGhlbWUkOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT47XG4gIHB1YmxpYyBkYXJrVGhlbWUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwdWJsaWMgbGlnaHRUaGVtZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgICBjb25zdCBpbml0aWFsVmFsdWU6IFZhbnRhZ2VUaGVtZSA9XG4gICAgICA8VmFudGFnZVRoZW1lPmxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKSB8fCB0aGlzLmNoZWNrT1NQcmVmZXJlbmNlKCk7XG5cbiAgICB0aGlzLl9yZW5kZXJlcjIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VmFudGFnZVRoZW1lPihpbml0aWFsVmFsdWUpO1xuXG4gICAgdGhpcy5hY3RpdmVUaGVtZSQgPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5kYXJrVGhlbWUkID0gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0XG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKG1hcCgodGhlbWU6IFZhbnRhZ2VUaGVtZSkgPT4gdGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLKSk7XG4gICAgdGhpcy5saWdodFRoZW1lJCA9IHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShtYXAoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQpKTtcblxuICAgIC8vIGFwcGx5IGluaXRpYWwgdGhlbWVcbiAgICB0aGlzLmFwcGx5VGhlbWUoaW5pdGlhbFZhbHVlLCBmYWxzZSk7XG5cbiAgICAvLyBvYnNlcnZlIG1lZGlhIHF1ZXJ5IGNoYW5nZSBldmVudHNcbiAgICBjb25zdCBtZWRpYU9ic2VydmVyOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT4gPSBmcm9tRXZlbnRQYXR0ZXJuPE1lZGlhUXVlcnlMaXN0RXZlbnQ+KFxuICAgICAgdGhpcy5wcmVmZXJEYXJrTWVkaWFRdWVyeS5hZGRMaXN0ZW5lci5iaW5kKHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkpLFxuICAgICAgdGhpcy5wcmVmZXJEYXJrTWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lci5iaW5kKHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkpLFxuICAgICkucGlwZShcbiAgICAgIG1hcCgoZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm1hdGNoZXMgPyBWYW50YWdlVGhlbWUuREFSSyA6IFZhbnRhZ2VUaGVtZS5MSUdIVDtcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICAvLyBhY2NvdW50IGZvciBzdG9yYWdlIGV2ZW50cyBpbiBvdGhlciBicm93c2VyIHRhYnNcbiAgICBjb25zdCBzdG9yYWdlT2JzZXJ2ZXI6IE9ic2VydmFibGU8VmFudGFnZVRoZW1lPiA9IGZyb21FdmVudCh3aW5kb3csICdzdG9yYWdlJykucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gZXZlbnQua2V5ID09PSBUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSksXG4gICAgICBtYXAoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IChldmVudC5uZXdWYWx1ZSA/IChldmVudC5uZXdWYWx1ZSBhcyBWYW50YWdlVGhlbWUpIDogdGhpcy5jaGVja09TUHJlZmVyZW5jZSgpKSksXG4gICAgKTtcblxuICAgIC8vIGFwcGx5IHRoZW1lIG9uIHN0b3JhZ2Ugb3IgbWVkaWEgcXVlcnkgY2hhbmdlXG4gICAgbWVyZ2Uoc3RvcmFnZU9ic2VydmVyLCBtZWRpYU9ic2VydmVyKS5zdWJzY3JpYmUoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoaXMuYXBwbHlUaGVtZSh0aGVtZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2FjdGl2ZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQgX2FjdGl2ZVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUpIHtcbiAgICB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QubmV4dCh0aGVtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhcmtUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkRBUks7XG4gIH1cbiAgcHVibGljIGdldCBsaWdodFRoZW1lSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQ7XG4gIH1cblxuICBwdWJsaWMgYWN0aXZlVGhlbWUoKTogVmFudGFnZVRoZW1lIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWU7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlMaWdodFRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlUaGVtZShWYW50YWdlVGhlbWUuTElHSFQpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RGFya1RoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlUaGVtZShWYW50YWdlVGhlbWUuREFSSyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVGhlbWUoKTogVmFudGFnZVRoZW1lIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLID8gdGhpcy5hcHBseUxpZ2h0VGhlbWUoKSA6IHRoaXMuYXBwbHlEYXJrVGhlbWUoKTtcbiAgfVxuXG4gIHB1YmxpYyBtYXAobWFwT2JqZWN0OiBJVmFudGFnZVRoZW1lTWFwLCBmYWxsYmFjaz86IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGhlbWUkLnBpcGUobWFwKCh2YWx1ZTogVmFudGFnZVRoZW1lKSA9PiAodmFsdWUgaW4gbWFwT2JqZWN0ID8gbWFwT2JqZWN0W3ZhbHVlXSA6IGZhbGxiYWNrKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUsIHNhdmVTZXR0aW5nOiBib29sZWFuID0gdHJ1ZSk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyLnJlbW92ZUNsYXNzKFxuICAgICAgdGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgdGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLID8gVmFudGFnZVRoZW1lLkxJR0hUIDogVmFudGFnZVRoZW1lLkRBUkssXG4gICAgKTtcbiAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLCB0aGVtZSk7XG5cbiAgICBpZiAoc2F2ZVNldHRpbmcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCB0aGVtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh0aGlzLl9hY3RpdmVUaGVtZSA9IHRoZW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tPU1ByZWZlcmVuY2UoKTogVmFudGFnZVRoZW1lIHtcbiAgICAvLyBpdCBzaG91bGQgbm93IGJlIGxpZ2h0LWJ5LWRlZmF1bHRcbiAgICByZXR1cm4gdGhpcy5wcmVmZXJEYXJrTWVkaWFRdWVyeS5tYXRjaGVzID8gVmFudGFnZVRoZW1lLkRBUksgOiBWYW50YWdlVGhlbWUuTElHSFQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVEhFTUVfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlVGhlbWVTZXJ2aWNlLFxuICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gIF9kb2N1bWVudDogYW55LFxuKTogVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUaGVtZVNlcnZpY2UocmVuZGVyZXJGYWN0b3J5LCBfZG9jdW1lbnQpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9USEVNRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUaGVtZVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVGhlbWVTZXJ2aWNlXSwgW1JlbmRlcmVyRmFjdG9yeTJdLCBbRE9DVU1FTlRdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9USEVNRV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==