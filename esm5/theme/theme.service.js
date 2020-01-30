/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
var VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
export { VantageTheme };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lLyIsInNvdXJjZXMiOlsidGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQUVyQyx1QkFBdUIsR0FBVyxlQUFlOzs7SUFHckQsTUFBTyxZQUFZO0lBQ25CLE9BQVEsYUFBYTs7O0FBR3ZCO0lBUUUsNkJBQW9CLGVBQWlDLEVBQTRCLFNBQWM7UUFBL0YsaUJBS0M7UUFMbUIsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQTRCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFKOUUsd0JBQW1CLEdBQWtDLElBQUksZUFBZSxDQUN2RixtQkFBYyxZQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUEsQ0FDNUQsQ0FBQztRQUNPLGlCQUFZLEdBQTZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4RixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO2FBQ3pCLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFtQixJQUFLLE9BQUEsS0FBSyxDQUFDLEdBQUcsS0FBSyx1QkFBdUIsRUFBckMsQ0FBcUMsRUFBQyxDQUFDO2FBQzVFLFNBQVM7Ozs7UUFBQyxVQUFD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cmVyMiwgSW5qZWN0LCBSZW5kZXJlckZhY3RvcnkyLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWTogc3RyaW5nID0gJ3ZhbnRhZ2UudGhlbWUnO1xuXG5leHBvcnQgZW51bSBWYW50YWdlVGhlbWUge1xuICBEQVJLID0gJ2RhcmstdGhlbWUnLFxuICBMSUdIVCA9ICdsaWdodC10aGVtZScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlVGhlbWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVuZGVyZXIyOiBSZW5kZXJlcjI7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfYWN0aXZlVGhlbWVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8VmFudGFnZVRoZW1lPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VmFudGFnZVRoZW1lPihcbiAgICA8VmFudGFnZVRoZW1lPmxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKSxcbiAgKTtcbiAgcmVhZG9ubHkgYWN0aXZlVGhlbWUkOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT4gPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IGV2ZW50LmtleSA9PT0gVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy5hcHBseVRoZW1lKDxWYW50YWdlVGhlbWU+ZXZlbnQubmV3VmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGFjdGl2ZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQgYWN0aXZlVGhlbWUodGhlbWU6IFZhbnRhZ2VUaGVtZSkge1xuICAgIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5uZXh0KHRoZW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGFya1RoZW1lSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLO1xuICB9XG4gIHB1YmxpYyBnZXQgbGlnaHRUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlMaWdodFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlUaGVtZShWYW50YWdlVGhlbWUuTElHSFQpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5RGFya1RoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlUaGVtZShWYW50YWdlVGhlbWUuREFSSyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkRBUksgPyB0aGlzLmFwcGx5TGlnaHRUaGVtZSgpIDogdGhpcy5hcHBseURhcmtUaGVtZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlcjIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksXG4gICAgICB0aGVtZSA9PT0gVmFudGFnZVRoZW1lLkRBUksgPyBWYW50YWdlVGhlbWUuTElHSFQgOiBWYW50YWdlVGhlbWUuREFSSyxcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCB0aGVtZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSwgdGhlbWUpO1xuICAgIHRoaXMuYWN0aXZlVGhlbWUgPSA8VmFudGFnZVRoZW1lPmxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9USEVNRV9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VUaGVtZVNlcnZpY2UsXG4gIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgX2RvY3VtZW50OiBhbnksXG4pOiBWYW50YWdlVGhlbWVTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVRoZW1lU2VydmljZShyZW5kZXJlckZhY3RvcnksIF9kb2N1bWVudCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RIRU1FX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRoZW1lU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUaGVtZVNlcnZpY2VdLCBbUmVuZGVyZXJGYWN0b3J5Ml0sIFtET0NVTUVOVF1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RIRU1FX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19