/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
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
        this._activeThemeSubject = new BehaviorSubject((/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))));
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
        this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
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
        this._activeTheme = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lLyIsInNvdXJjZXMiOlsidGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFckMsdUJBQXVCLEdBQVcsZUFBZTs7O0lBR3JELE1BQU8sWUFBWTtJQUNuQixPQUFRLGFBQWE7Ozs7OztBQUd2QixzQ0FHQzs7Ozs7OztBQUVEO0lBZ0JFLDZCQUFvQixlQUFpQyxFQUE0QixTQUFjO1FBQS9GLGlCQUtDO1FBTG1CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUE0QixjQUFTLEdBQVQsU0FBUyxDQUFLO1FBWjlFLHdCQUFtQixHQUFrQyxJQUFJLGVBQWUsQ0FDdkYsbUJBQWMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFBLENBQzVELENBQUM7UUFFYyxpQkFBWSxHQUE2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakYsZUFBVSxHQUF3QixJQUFJLENBQUMsbUJBQW1CO2FBQ3ZFLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFtQixJQUFLLE9BQUEsS0FBSyxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQTNCLENBQTJCLEVBQUMsQ0FBQyxDQUFDO1FBQ25ELGdCQUFXLEdBQXdCLElBQUksQ0FBQyxtQkFBbUI7YUFDeEUsWUFBWSxF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WUFBWSxHQUFHLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxDQUFDO0lBQ2xGLENBQUM7O2dCQWxFRixVQUFVOzs7O2dCQWpCNkIsZ0JBQWdCO2dEQWlDRSxNQUFNLFNBQUMsUUFBUTs7SUFtRHpFLDBCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FsRVksbUJBQW1COzs7Ozs7SUFDOUIseUNBQThCOzs7OztJQUU5QixrREFFRTs7SUFFRiwyQ0FBaUc7O0lBQ2pHLHlDQUVtRTs7SUFDbkUsMENBRW9FOzs7OztJQUV4RCw4Q0FBeUM7Ozs7O0lBQUUsd0NBQXdDOzs7Ozs7OztBQXFEakcsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixlQUFpQyxFQUNqQyxTQUFjO0lBRWQsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDdkUsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RixVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVk6IHN0cmluZyA9ICd2YW50YWdlLnRoZW1lJztcblxuZXhwb3J0IGVudW0gVmFudGFnZVRoZW1lIHtcbiAgREFSSyA9ICdkYXJrLXRoZW1lJyxcbiAgTElHSFQgPSAnbGlnaHQtdGhlbWUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlVGhlbWVNYXAge1xuICBbVmFudGFnZVRoZW1lLkRBUktdPzogYW55O1xuICBbVmFudGFnZVRoZW1lLkxJR0hUXT86IGFueTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUaGVtZVNlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9hY3RpdmVUaGVtZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxWYW50YWdlVGhlbWU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWYW50YWdlVGhlbWU+KFxuICAgIDxWYW50YWdlVGhlbWU+bG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpLFxuICApO1xuXG4gIHB1YmxpYyByZWFkb25seSBhY3RpdmVUaGVtZSQ6IE9ic2VydmFibGU8VmFudGFnZVRoZW1lPiA9IHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgcHVibGljIHJlYWRvbmx5IGRhcmtUaGVtZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3RcbiAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZShtYXAoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSykpO1xuICBwdWJsaWMgcmVhZG9ubHkgbGlnaHRUaGVtZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3RcbiAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZShtYXAoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKVxuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogU3RvcmFnZUV2ZW50KSA9PiBldmVudC5rZXkgPT09IFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuYXBwbHlUaGVtZSg8VmFudGFnZVRoZW1lPmV2ZW50Lm5ld1ZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfYWN0aXZlVGhlbWUoKTogVmFudGFnZVRoZW1lIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0LmdldFZhbHVlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldCBfYWN0aXZlVGhlbWUodGhlbWU6IFZhbnRhZ2VUaGVtZSkge1xuICAgIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5uZXh0KHRoZW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGFya1RoZW1lSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSztcbiAgfVxuICBwdWJsaWMgZ2V0IGxpZ2h0VGhlbWVJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5MSUdIVDtcbiAgfVxuXG4gIHB1YmxpYyBhY3RpdmVUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseUxpZ2h0VGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseVRoZW1lKFZhbnRhZ2VUaGVtZS5MSUdIVCk7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlEYXJrVGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseVRoZW1lKFZhbnRhZ2VUaGVtZS5EQVJLKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkRBUksgPyB0aGlzLmFwcGx5TGlnaHRUaGVtZSgpIDogdGhpcy5hcHBseURhcmtUaGVtZSgpO1xuICB9XG5cbiAgcHVibGljIG1hcChtYXBPYmplY3Q6IElWYW50YWdlVGhlbWVNYXAsIGZhbGxiYWNrPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUaGVtZSQucGlwZShtYXAoKHZhbHVlOiBWYW50YWdlVGhlbWUpID0+ICh2YWx1ZSBpbiBtYXBPYmplY3QgPyBtYXBPYmplY3RbdmFsdWVdIDogZmFsbGJhY2spKSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5VGhlbWUodGhlbWU6IFZhbnRhZ2VUaGVtZSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSxcbiAgICAgIHRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSyA/IFZhbnRhZ2VUaGVtZS5MSUdIVCA6IFZhbnRhZ2VUaGVtZS5EQVJLLFxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVksIHRoZW1lKTtcbiAgICB0aGlzLl9yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLCB0aGVtZSk7XG4gICAgdGhpcy5fYWN0aXZlVGhlbWUgPSA8VmFudGFnZVRoZW1lPmxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9USEVNRV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VUaGVtZVNlcnZpY2UsXG4gIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgX2RvY3VtZW50OiBhbnksXG4pOiBWYW50YWdlVGhlbWVTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVRoZW1lU2VydmljZShyZW5kZXJlckZhY3RvcnksIF9kb2N1bWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RIRU1FX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRoZW1lU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUaGVtZVNlcnZpY2VdLCBbUmVuZGVyZXJGYWN0b3J5Ml0sIFtET0NVTUVOVF1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RIRU1FX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19