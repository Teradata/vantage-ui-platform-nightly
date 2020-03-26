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
        const initialValue = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))) || this.checkOSPreference();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lLyIsInNvdXJjZXMiOlsidGhlbWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLEVBQUUsZ0JBQWdCLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBYyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTNDLE1BQU0sT0FBTyx1QkFBdUIsR0FBVyxlQUFlOzs7SUFHNUQsTUFBTyxZQUFZO0lBQ25CLE9BQVEsYUFBYTs7Ozs7O0FBR3ZCLHNDQUdDOzs7Ozs7O0FBR0QsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFVOUIsWUFBb0IsZUFBaUMsRUFBNEIsU0FBYztRQUEzRSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFBNEIsY0FBUyxHQUFULFNBQVMsQ0FBSztRQU45RSx5QkFBb0IsR0FBbUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOztjQU9sRyxZQUFZLEdBQ2hCLG1CQUFjLFlBQVksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUV6RixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBZSxZQUFZLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsWUFBWSxHQUFHLElB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Q0FBQzs7O1lBckdGLFVBQVU7Ozs7WUFqQjZCLGdCQUFnQjs0Q0E0QkUsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7SUFUdkUseUNBQThCOzs7OztJQUU5QixrREFBb0U7Ozs7O0lBQ3BFLG1EQUEwRzs7SUFFMUcsMkNBQThDOztJQUM5Qyx5Q0FBdUM7O0lBQ3ZDLDBDQUF3Qzs7Ozs7SUFFNUIsOENBQXlDOzs7OztJQUFFLHdDQUF3Qzs7Ozs7Ozs7QUE2RmpHLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFDM0IsZUFBaUMsRUFDakMsU0FBYztJQUVkLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0YsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgSW5qZWN0LCBSZW5kZXJlckZhY3RvcnkyLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50UGF0dGVybiwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVk6IHN0cmluZyA9ICd2YW50YWdlLnRoZW1lJztcblxuZXhwb3J0IGVudW0gVmFudGFnZVRoZW1lIHtcbiAgREFSSyA9ICdkYXJrLXRoZW1lJyxcbiAgTElHSFQgPSAnbGlnaHQtdGhlbWUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlVGhlbWVNYXAge1xuICBbVmFudGFnZVRoZW1lLkRBUktdPzogYW55O1xuICBbVmFudGFnZVRoZW1lLkxJR0hUXT86IGFueTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUaGVtZVNlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlcjI6IFJlbmRlcmVyMjtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9hY3RpdmVUaGVtZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxWYW50YWdlVGhlbWU+O1xuICBwcml2YXRlIHJlYWRvbmx5IHByZWZlckRhcmtNZWRpYVF1ZXJ5OiBNZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG5cbiAgcHVibGljIGFjdGl2ZVRoZW1lJDogT2JzZXJ2YWJsZTxWYW50YWdlVGhlbWU+O1xuICBwdWJsaWMgZGFya1RoZW1lJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVibGljIGxpZ2h0VGhlbWUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlOiBWYW50YWdlVGhlbWUgPVxuICAgICAgPFZhbnRhZ2VUaGVtZT5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSkgfHwgdGhpcy5jaGVja09TUHJlZmVyZW5jZSgpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFZhbnRhZ2VUaGVtZT4oaW5pdGlhbFZhbHVlKTtcblxuICAgIHRoaXMuYWN0aXZlVGhlbWUkID0gdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuZGFya1RoZW1lJCA9IHRoaXMuX2FjdGl2ZVRoZW1lU3ViamVjdFxuICAgICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAucGlwZShtYXAoKHRoZW1lOiBWYW50YWdlVGhlbWUpID0+IHRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSykpO1xuICAgIHRoaXMubGlnaHRUaGVtZSQgPSB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3RcbiAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUobWFwKCh0aGVtZTogVmFudGFnZVRoZW1lKSA9PiB0aGVtZSA9PT0gVmFudGFnZVRoZW1lLkxJR0hUKSk7XG5cbiAgICAvLyBhcHBseSBpbml0aWFsIHRoZW1lXG4gICAgdGhpcy5hcHBseVRoZW1lKGluaXRpYWxWYWx1ZSwgZmFsc2UpO1xuXG4gICAgLy8gb2JzZXJ2ZSBtZWRpYSBxdWVyeSBjaGFuZ2UgZXZlbnRzXG4gICAgY29uc3QgbWVkaWFPYnNlcnZlcjogT2JzZXJ2YWJsZTxWYW50YWdlVGhlbWU+ID0gZnJvbUV2ZW50UGF0dGVybjxNZWRpYVF1ZXJ5TGlzdEV2ZW50PihcbiAgICAgIHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkuYWRkTGlzdGVuZXIuYmluZCh0aGlzLnByZWZlckRhcmtNZWRpYVF1ZXJ5KSxcbiAgICAgIHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkucmVtb3ZlTGlzdGVuZXIuYmluZCh0aGlzLnByZWZlckRhcmtNZWRpYVF1ZXJ5KSxcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBldmVudC5tYXRjaGVzID8gVmFudGFnZVRoZW1lLkRBUksgOiBWYW50YWdlVGhlbWUuTElHSFQ7XG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgLy8gYWNjb3VudCBmb3Igc3RvcmFnZSBldmVudHMgaW4gb3RoZXIgYnJvd3NlciB0YWJzXG4gICAgY29uc3Qgc3RvcmFnZU9ic2VydmVyOiBPYnNlcnZhYmxlPFZhbnRhZ2VUaGVtZT4gPSBmcm9tRXZlbnQod2luZG93LCAnc3RvcmFnZScpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBTdG9yYWdlRXZlbnQpID0+IGV2ZW50LmtleSA9PT0gVEhFTUVfTE9DQUxfU1RPUkFHRV9LRVkpLFxuICAgICAgbWFwKChldmVudDogU3RvcmFnZUV2ZW50KSA9PiAoZXZlbnQubmV3VmFsdWUgPyAoZXZlbnQubmV3VmFsdWUgYXMgVmFudGFnZVRoZW1lKSA6IHRoaXMuY2hlY2tPU1ByZWZlcmVuY2UoKSkpLFxuICAgICk7XG5cbiAgICAvLyBhcHBseSB0aGVtZSBvbiBzdG9yYWdlIG9yIG1lZGlhIHF1ZXJ5IGNoYW5nZVxuICAgIG1lcmdlKHN0b3JhZ2VPYnNlcnZlciwgbWVkaWFPYnNlcnZlcikuc3Vic2NyaWJlKCh0aGVtZTogVmFudGFnZVRoZW1lKSA9PiB0aGlzLmFwcGx5VGhlbWUodGhlbWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9hY3RpdmVUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZVN1YmplY3QuZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0IF9hY3RpdmVUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lKSB7XG4gICAgdGhpcy5fYWN0aXZlVGhlbWVTdWJqZWN0Lm5leHQodGhlbWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBkYXJrVGhlbWVJc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlVGhlbWUgPT09IFZhbnRhZ2VUaGVtZS5EQVJLO1xuICB9XG4gIHB1YmxpYyBnZXQgbGlnaHRUaGVtZUlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVUaGVtZSA9PT0gVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG5cbiAgcHVibGljIGFjdGl2ZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lO1xuICB9XG5cbiAgcHVibGljIGFwcGx5TGlnaHRUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkxJR0hUKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseURhcmtUaGVtZSgpOiBWYW50YWdlVGhlbWUge1xuICAgIHJldHVybiB0aGlzLmFwcGx5VGhlbWUoVmFudGFnZVRoZW1lLkRBUkspO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZVRoZW1lKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSyA/IHRoaXMuYXBwbHlMaWdodFRoZW1lKCkgOiB0aGlzLmFwcGx5RGFya1RoZW1lKCk7XG4gIH1cblxuICBwdWJsaWMgbWFwKG1hcE9iamVjdDogSVZhbnRhZ2VUaGVtZU1hcCwgZmFsbGJhY2s/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVRoZW1lJC5waXBlKG1hcCgodmFsdWU6IFZhbnRhZ2VUaGVtZSkgPT4gKHZhbHVlIGluIG1hcE9iamVjdCA/IG1hcE9iamVjdFt2YWx1ZV0gOiBmYWxsYmFjaykpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZSh0aGVtZTogVmFudGFnZVRoZW1lLCBzYXZlU2V0dGluZzogYm9vbGVhbiA9IHRydWUpOiBWYW50YWdlVGhlbWUge1xuICAgIHRoaXMuX3JlbmRlcmVyMi5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSxcbiAgICAgIHRoZW1lID09PSBWYW50YWdlVGhlbWUuREFSSyA/IFZhbnRhZ2VUaGVtZS5MSUdIVCA6IFZhbnRhZ2VUaGVtZS5EQVJLLFxuICAgICk7XG4gICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSwgdGhlbWUpO1xuXG4gICAgaWYgKHNhdmVTZXR0aW5nKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUSEVNRV9MT0NBTF9TVE9SQUdFX0tFWSwgdGhlbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5fYWN0aXZlVGhlbWUgPSB0aGVtZSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrT1NQcmVmZXJlbmNlKCk6IFZhbnRhZ2VUaGVtZSB7XG4gICAgLy8gaXQgc2hvdWxkIG5vdyBiZSBsaWdodC1ieS1kZWZhdWx0XG4gICAgcmV0dXJuIHRoaXMucHJlZmVyRGFya01lZGlhUXVlcnkubWF0Y2hlcyA/IFZhbnRhZ2VUaGVtZS5EQVJLIDogVmFudGFnZVRoZW1lLkxJR0hUO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1RIRU1FX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZVRoZW1lU2VydmljZSxcbiAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICBfZG9jdW1lbnQ6IGFueSxcbik6IFZhbnRhZ2VUaGVtZVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVGhlbWVTZXJ2aWNlKHJlbmRlcmVyRmFjdG9yeSwgX2RvY3VtZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVEhFTUVfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVGhlbWVTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRoZW1lU2VydmljZV0sIFtSZW5kZXJlckZhY3RvcnkyXSwgW0RPQ1VNRU5UXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVEhFTUVfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=