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
var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
/** @enum {string} */
var VantageTheme = {
    DARK: 'dark-theme',
    LIGHT: 'light-theme',
};
export { VantageTheme };
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
    /** @nocollapse */ VantageThemeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VantageThemeService_Factory() { return new VantageThemeService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.RendererFactory2)); }, token: VantageThemeService, providedIn: "root" });
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
    VantageThemeService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    VantageThemeService.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInRoZW1lL3RoZW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7SUFFckMsdUJBQXVCLEdBQVcsZUFBZTs7O0lBR3JELE1BQU8sWUFBWTtJQUNuQixPQUFRLGFBQWE7OztBQUd2QjtJQVdFLDZCQUFzQyxTQUFjLEVBQVUsZUFBaUM7UUFBL0YsaUJBS0M7UUFMcUMsY0FBUyxHQUFULFNBQVMsQ0FBSztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUw5RSx3QkFBbUIsR0FBa0MsSUFBSSxlQUFlLENBQ3ZGLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxDQUM1RCxDQUFDO1FBQ08saUJBQVksR0FBNkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3hGLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDekIsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEtBQW1CLElBQUssT0FBQSxLQUFLLENBQUMsR0FBRyxLQUFLLHVCQUF1QixFQUFyQyxDQUFxQyxFQUFDLENBQUM7YUFDNUUsU0FBUzs7OztRQUFDLFVBQUMsS0FBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsbUJBQWMsS0FBSyxDQUFDLFFBQVEsRUFBQSxDQUFDLEVBQTdDLENBQTZDLEVBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0JBQVksNENBQVc7Ozs7O1FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0MsQ0FBQzs7Ozs7O1FBRUQsVUFBd0IsS0FBbUI7WUFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLGtEQUFpQjs7OztRQUE1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsbURBQWtCOzs7O1FBQTdCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7Ozs7SUFFTSw2Q0FBZTs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUNNLDRDQUFjOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFTyx3Q0FBVTs7Ozs7SUFBbEIsVUFBbUIsS0FBbUI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUNwQyxLQUFLLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDckUsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBYyxZQUFZLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUEsQ0FBQztJQUNqRixDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFTYyxNQUFNLFNBQUMsUUFBUTtnQkF2QlUsZ0JBQWdCOzs7OEJBQXhEO0NBNkRDLEFBakRELElBaURDO1NBOUNZLG1CQUFtQjs7Ozs7O0lBQzlCLHlDQUE4Qjs7Ozs7SUFFOUIsa0RBRUU7O0lBQ0YsMkNBQTBGOzs7OztJQUU5RSx3Q0FBd0M7Ozs7O0lBQUUsOENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBJbmplY3QsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmNvbnN0IFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZOiBzdHJpbmcgPSAndmFudGFnZS50aGVtZSc7XG5cbmV4cG9ydCBlbnVtIFZhbnRhZ2VUaGVtZSB7XG4gIERBUksgPSAnZGFyay10aGVtZScsXG4gIExJR0hUID0gJ2xpZ2h0LXRoZW1lJyxcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUaGVtZVNlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9hY3RpdmVUaGVtZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxWYW50YWdlVGhlbWU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWYW50YWdlVGhlbWU+KFxuICAgIDxWYW50YWdlVGhlbWU+bG9jYWxTdG9yYWdlLmdldEl0ZW0oVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpLFxuICApO1xuICByZWFkb25seSBhY3RpdmVUaGVtZSQ6IE9ic2VydmFibGU8VmFudGFnZVRoZW1lPiA9IHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LCBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMuX3JlbmRlcmVyMiA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcih1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3N0b3JhZ2UnKVxuICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogU3RvcmFnZUV2ZW50KSA9PiBldmVudC5rZXkgPT09IFRIRU1FX0xPQ0FMX1NUT1JBR0VfS0VZKSlcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IHRoaXMuYXBwbHlUaGVtZSg8VmFudGFnZVRoZW1lPmV2ZW50Lm5ld1ZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBhY3RpdmVUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IGFjdGl2ZVRoZW1lKHRoZW1lOiBWYW50YWdlVGhlbWUpIHtcbiAgICB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QubmV4dCh0aGVtZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhcmtUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSztcbiAgfVxuICBwdWJsaWMgZ2V0IGxpZ2h0VGhlbWVJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG5cbiAgcHVibGljIGFwcGx5TGlnaHRUaGVtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkxJR0hUKTtcbiAgfVxuICBwdWJsaWMgYXBwbHlEYXJrVGhlbWUoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBseVRoZW1lKFZhbnRhZ2VUaGVtZS5EQVJLKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIyLnJlbW92ZUNsYXNzKFxuICAgICAgdGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLFxuICAgICAgdGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLID8gVmFudGFnZVRoZW1lLkxJR0hUIDogVmFudGFnZVRoZW1lLkRBUkssXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSwgdGhlbWUpO1xuICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksIHRoZW1lKTtcbiAgICB0aGlzLmFjdGl2ZVRoZW1lID0gPFZhbnRhZ2VUaGVtZT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIH1cbn1cbiJdfQ==