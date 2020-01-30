/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2, Optional, SkipSelf } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
const THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
const VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
export { VantageTheme };
export class VantageThemeService {
    /**
     * @param {?} rendererFactory
     * @param {?} _document
     */
    constructor(rendererFactory, _document) {
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
        (event) => event.key === THEME_LOCAL_STORAGE_KEY)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.applyTheme((/** @type {?} */ (event.newValue)))));
    }
    /**
     * @private
     * @return {?}
     */
    get activeTheme() {
        return this._activeThemeSubject.getValue();
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    set activeTheme(theme) {
        this._activeThemeSubject.next(theme);
    }
    /**
     * @return {?}
     */
    get darkThemeIsActive() {
        return this.activeTheme === VantageTheme.DARK;
    }
    /**
     * @return {?}
     */
    get lightThemeIsActive() {
        return this.activeTheme === VantageTheme.LIGHT;
    }
    /**
     * @return {?}
     */
    applyLightTheme() {
        this.applyTheme(VantageTheme.LIGHT);
    }
    /**
     * @return {?}
     */
    applyDarkTheme() {
        this.applyTheme(VantageTheme.DARK);
    }
    /**
     * @return {?}
     */
    toggleTheme() {
        this.activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    applyTheme(theme) {
        this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
        this._renderer2.addClass(this._document.querySelector('html'), theme);
        this.activeTheme = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
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
export const VANTAGE_THEME_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageThemeService,
    deps: [[new Optional(), new SkipSelf(), VantageThemeService], [RendererFactory2], [DOCUMENT]],
    useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtLyIsInNvdXJjZXMiOlsidGhlbWUvdGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztNQUVyQyx1QkFBdUIsR0FBVyxlQUFlOzs7SUFHckQsTUFBTyxZQUFZO0lBQ25CLE9BQVEsYUFBYTs7O0FBSXZCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTzlCLFlBQW9CLGVBQWlDLEVBQTRCLFNBQWM7UUFBM0Usb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQTRCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFKOUUsd0JBQW1CLEdBQWtDLElBQUksZUFBZSxDQUN2RixtQkFBYyxZQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUEsQ0FDNUQsQ0FBQztRQUNPLGlCQUFZLEdBQTZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4RixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO2FBQ3pCLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLHVCQUF1QixFQUFDLENBQUM7YUFDNUUsU0FBUzs7OztRQUFDLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBYyxLQUFLLENBQUMsUUFBUSxFQUFBLENBQUMsRUFBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsSUFBWSxXQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUVELElBQVksV0FBVyxDQUFDLEtBQW1CO1FBQ3pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFDRCxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQ3BDLEtBQUssS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRSxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxDQUFDO0lBQ2pGLENBQUM7OztZQWxERixVQUFVOzs7O1lBWjZCLGdCQUFnQjs0Q0FvQkUsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7SUFOdkUseUNBQThCOzs7OztJQUU5QixrREFFRTs7SUFDRiwyQ0FBMEY7Ozs7O0lBQzlFLDhDQUF5Qzs7Ozs7SUFBRSx3Q0FBd0M7Ozs7Ozs7O0FBNkNqRyxNQUFNLFVBQVUsOEJBQThCLENBQzVDLE1BQTJCLEVBQzNCLGVBQWlDLEVBQ2pDLFNBQWM7SUFFZCxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2RSxDQUFDOztBQUVELE1BQU0sT0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdGLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgUmVuZGVyZXJGYWN0b3J5MiwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVk6IHN0cmluZyA9ICd2YW50YWdlLnRoZW1lJztcblxuZXhwb3J0IGVudW0gVmFudGFnZVRoZW1lIHtcbiAgREFSSyA9ICdkYXJrLXRoZW1lJyxcbiAgTElHSFQgPSAnbGlnaHQtdGhlbWUnLFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZVRoZW1lU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT4oXG4gICAgPFZhbnRhZ2VUaGVtZT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSksXG4gICk7XG4gIHJlYWRvbmx5IGFjdGl2ZVRoZW1lJDogT2JzZXJ2YWJsZTxWYW50YWdlVGhlbWU+ID0gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKVxuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogU3RvcmFnZUV2ZW50KSA9PiBldmVudC5rZXkgPT09IFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuYXBwbHlUaGVtZSg8VmFudGFnZVRoZW1lPmV2ZW50Lm5ld1ZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBhY3RpdmVUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGFjdGl2ZVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUpIHtcbiAgICB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QubmV4dCh0aGVtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhcmtUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSztcbiAgfVxuICBwdWJsaWMgZ2V0IGxpZ2h0VGhlbWVJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG5cbiAgcHVibGljIGFwcGx5TGlnaHRUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkxJR0hUKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseURhcmtUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkRBUkspO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLID8gdGhpcy5hcHBseUxpZ2h0VGhlbWUoKSA6IHRoaXMuYXBwbHlEYXJrVGhlbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIyLnJlbW92ZUNsYXNzKFxuICAgICAgdGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgdGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLID8gVmFudGFnZVRoZW1lLkxJR0hUIDogVmFudGFnZVRoZW1lLkRBUkssXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSwgdGhlbWUpO1xuICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksIHRoZW1lKTtcbiAgICB0aGlzLmFjdGl2ZVRoZW1lID0gPFZhbnRhZ2VUaGVtZT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVEhFTUVfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlVGhlbWVTZXJ2aWNlLFxuICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gIF9kb2N1bWVudDogYW55LFxuKTogVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUaGVtZVNlcnZpY2UocmVuZGVyZXJGYWN0b3J5LCBfZG9jdW1lbnQpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9USEVNRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUaGVtZVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVGhlbWVTZXJ2aWNlXSwgW1JlbmRlcmVyRmFjdG9yeTJdLCBbRE9DVU1FTlRdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9USEVNRV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==