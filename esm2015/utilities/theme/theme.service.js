/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
     * @param {?} _document
     * @param {?} rendererFactory
     */
    constructor(_document, rendererFactory) {
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
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VantageThemeService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: RendererFactory2 }
];
/** @nocollapse */ VantageThemeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VantageThemeService_Factory() { return new VantageThemeService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2)); }, token: VantageThemeService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInRoZW1lL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7TUFFckMsdUJBQXVCLEdBQVcsZUFBZTs7O0lBR3JELE1BQU8sWUFBWTtJQUNuQixPQUFRLGFBQWE7OztBQU12QixNQUFNLE9BQU8sbUJBQW1COzs7OztJQVE5QixZQUFzQyxTQUFjLEVBQVUsZUFBaUM7UUFBekQsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUw5RSx3QkFBbUIsR0FBa0MsSUFBSSxlQUFlLENBQ3ZGLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxDQUM1RCxDQUFDO1FBQ08saUJBQVksR0FBNkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDekIsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssdUJBQXVCLEVBQUMsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFjLEtBQUssQ0FBQyxRQUFRLEVBQUEsQ0FBQyxFQUFDLENBQUM7SUFDdkYsQ0FBQzs7Ozs7SUFFRCxJQUFZLFdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsSUFBWSxXQUFXLENBQUMsS0FBbUI7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7OztJQUNELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQ3BDLEtBQUssS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRSxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxDQUFDO0lBQ2pGLENBQUM7OztZQWhERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBU2MsTUFBTSxTQUFDLFFBQVE7WUF2QlUsZ0JBQWdCOzs7Ozs7OztJQWdCdEQseUNBQThCOzs7OztJQUU5QixrREFFRTs7SUFDRiwyQ0FBMEY7Ozs7O0lBRTlFLHdDQUF3Qzs7Ozs7SUFBRSw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEluamVjdCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVk6IHN0cmluZyA9ICd2YW50YWdlLnRoZW1lJztcblxuZXhwb3J0IGVudW0gVmFudGFnZVRoZW1lIHtcbiAgREFSSyA9ICdkYXJrLXRoZW1lJyxcbiAgTElHSFQgPSAnbGlnaHQtdGhlbWUnLFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVRoZW1lU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2FjdGl2ZVRoZW1lU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT4oXG4gICAgPFZhbnRhZ2VUaGVtZT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSksXG4gICk7XG4gIHJlYWRvbmx5IGFjdGl2ZVRoZW1lJDogT2JzZXJ2YWJsZTxWYW50YWdlVGhlbWU+ID0gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IGV2ZW50LmtleSA9PT0gVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFN0b3JhZ2VFdmVudCkgPT4gdGhpcy5hcHBseVRoZW1lKDxWYW50YWdlVGhlbWU+ZXZlbnQubmV3VmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGFjdGl2ZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQgYWN0aXZlVGhlbWUodGhlbWU6IFZhbnRhZ2VUaGVtZSkge1xuICAgIHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5uZXh0KHRoZW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGFya1RoZW1lSXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLO1xuICB9XG4gIHB1YmxpYyBnZXQgbGlnaHRUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuTElHSFQ7XG4gIH1cblxuICBwdWJsaWMgYXBwbHlMaWdodFRoZW1lKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwbHlUaGVtZShWYW50YWdlVGhlbWUuTElHSFQpO1xuICB9XG4gIHB1YmxpYyBhcHBseURhcmtUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkRBUkspO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlcjIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksXG4gICAgICB0aGVtZSA9PT0gVmFudGFnZVRoZW1lLkRBUksgPyBWYW50YWdlVGhlbWUuTElHSFQgOiBWYW50YWdlVGhlbWUuREFSSyxcbiAgICApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCB0aGVtZSk7XG4gICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSwgdGhlbWUpO1xuICAgIHRoaXMuYWN0aXZlVGhlbWUgPSA8VmFudGFnZVRoZW1lPmxvY2FsU3RvcmFnZS5nZXRJdGVtKFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgfVxufVxuIl19