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
    IVantageAppSwitcherItem.prototype.divider;
}
var VantageAppSwitcherComponent = /** @class */ (function () {
    function VantageAppSwitcherComponent(_themeService) {
        this._themeService = _themeService;
    }
    VantageAppSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-menu class=\"app-switcher-menu\">\n    <!--header-->\n    <div td-menu-header class=\"app-switcher-header\">\n      <mat-icon\n        class=\"logo-icon\"\n        *ngIf=\"_themeService.darkTheme$ | async; else lightLogo\"\n        svgIcon=\"td-logo:on-dark\"\n      ></mat-icon>\n      <ng-template #lightLogo>\n        <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:on-light\"></mat-icon>\n      </ng-template>\n      <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n    </div>\n    <!--content-->\n    <ng-container *ngFor=\"let product of productList; last as isLast\">\n      <a mat-menu-item [href]=\"product.href\">\n        <mat-icon *ngIf=\"product.svgIcon; else iconTemplate\" [svgIcon]=\"product.svgIcon\"></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon>{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        {{ product.text }}\n      </a>\n      <mat-divider *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n    <!--footer-->\n    <a mat-menu-item td-menu-footer class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </td-menu>\n</mat-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    VantageAppSwitcherComponent.ctorParameters = function () { return [
        { type: VantageThemeService }
    ]; };
    VantageAppSwitcherComponent.propDecorators = {
        productList: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherComponent;
}());
export { VantageAppSwitcherComponent };
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype._themeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXBFLDZDQU1DOzs7SUFMQyx1Q0FBYTs7SUFDYix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDBDQUFrQjs7QUFHcEI7SUFVRSxxQ0FBbUIsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBQUcsQ0FBQzs7Z0JBVjFELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix1OUNBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWZRLG1CQUFtQjs7OzhCQWlCekIsS0FBSztrQ0FDTCxLQUFLOztJQUdSLGtDQUFDO0NBQUEsQUFYRCxJQVdDO1NBTFksMkJBQTJCOzs7SUFDdEMsa0RBQWdEOztJQUNoRCxzREFBaUM7O0lBRXJCLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYW50YWdlVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdGhlbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIHtcbiAgdGV4dDogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHN2Z0ljb24/OiBzdHJpbmc7XG4gIGRpdmlkZXI/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdExpc3Q6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIGV4cGxvcmVNb3JlTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdGhlbWVTZXJ2aWNlOiBWYW50YWdlVGhlbWVTZXJ2aWNlKSB7fVxufVxuIl19