/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
/**
 * @record
 */
export function IVantageAppSwitcherItem() { }
if (false) {
    /** @type {?} */
    IVantageAppSwitcherItem.prototype.text;
    /** @type {?} */
    IVantageAppSwitcherItem.prototype.href;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.icon;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.svgIcon;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.iconClasses;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.divider;
}
var VantageAppSwitcherMenuComponent = /** @class */ (function () {
    function VantageAppSwitcherMenuComponent(_themeService) {
        this._themeService = _themeService;
    }
    VantageAppSwitcherMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher-menu',
                    template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\">\n    <mat-icon\n      class=\"logo-icon\"\n      [svgIcon]=\"_themeService.map({ 'dark-theme': 'td-logo:on-dark', 'light-theme': 'td-logo:on-light' }) | async\"\n    ></mat-icon>\n    <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <ng-container *ngFor=\"let product of productList; last as isLast\">\n    <a mat-menu-item [href]=\"product.href\">\n      <mat-icon\n        [class]=\"product.iconClasses\"\n        *ngIf=\"product.svgIcon; else iconTemplate\"\n        [svgIcon]=\"product.svgIcon\"\n      ></mat-icon>\n      <ng-template #iconTemplate>\n        <mat-icon [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n      </ng-template>\n      {{ product.text }}\n    </a>\n    <mat-divider *ngIf=\"product.divider && !isLast\"></mat-divider>\n  </ng-container>\n  <!--footer-->\n  <a mat-menu-item td-menu-footer class=\"explore-more\" [href]=\"exploreMoreLink\">\n    <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n    <mat-icon>launch</mat-icon>\n  </a>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    VantageAppSwitcherMenuComponent.ctorParameters = function () { return [
        { type: VantageThemeService }
    ]; };
    VantageAppSwitcherMenuComponent.propDecorators = {
        productList: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherMenuComponent;
}());
export { VantageAppSwitcherMenuComponent };
if (false) {
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype._themeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsiYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUVwRSw2Q0FPQzs7O0lBTkMsdUNBQWE7O0lBQ2IsdUNBQWE7O0lBQ2IsdUNBQWM7O0lBQ2QsMENBQWlCOztJQUNqQiw4Q0FBdUI7O0lBQ3ZCLDBDQUFrQjs7QUFHcEI7SUFVRSx5Q0FBbUIsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQUcsQ0FBQzs7Z0JBVjFELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxxdENBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWhCUSxtQkFBbUI7Ozs4QkFrQnpCLEtBQUs7a0NBQ0wsS0FBSzs7SUFHUixzQ0FBQztDQUFBLEFBWEQsSUFXQztTQUxZLCtCQUErQjs7O0lBQzFDLHNEQUFnRDs7SUFDaEQsMERBQWlDOztJQUVyQix3REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFudGFnZVRoZW1lU2VydmljZSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBzdmdJY29uPzogc3RyaW5nO1xuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdO1xuICBkaXZpZGVyPzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLWFwcC1zd2l0Y2hlci1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTd2l0Y2hlck1lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0TGlzdDogSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXTtcbiAgQElucHV0KCkgZXhwbG9yZU1vcmVMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF90aGVtZVNlcnZpY2U6IFZhbnRhZ2VUaGVtZVNlcnZpY2UpIHt9XG59XG4iXX0=