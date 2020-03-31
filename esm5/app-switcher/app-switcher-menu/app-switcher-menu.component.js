/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
var VantageAppSwitcherMenuComponent = /** @class */ (function () {
    function VantageAppSwitcherMenuComponent(_themeService) {
        this._themeService = _themeService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    VantageAppSwitcherMenuComponent.prototype._blockEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    VantageAppSwitcherMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher-menu',
                    template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon\n      class=\"logo-icon\"\n      [svgIcon]=\"_themeService.map({ 'dark-theme': 'td-logo:on-dark', 'light-theme': 'td-logo:on-light' }) | async\"\n    ></mat-icon>\n    <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a mat-list-item class=\"app-switcher-list-item text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel *ngIf=\"otherProducts?.length; else explorerMore\" class=\"other-products\">\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-list>\n    <mat-divider class=\"push-top-sm\"></mat-divider>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-menu-item class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </ng-template>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .app-switcher-list-item .mat-icon::ng-deep>svg{height:24px;width:24px}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    VantageAppSwitcherMenuComponent.ctorParameters = function () { return [
        { type: VantageThemeService }
    ]; };
    VantageAppSwitcherMenuComponent.propDecorators = {
        products: [{ type: Input }],
        otherProducts: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherMenuComponent;
}());
export { VantageAppSwitcherMenuComponent };
if (false) {
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype._themeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsiYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUlwRTtJQVdFLHlDQUFtQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7SUFBRyxDQUFDOzs7OztJQUV6RCxxREFBVzs7OztJQUFYLFVBQVksS0FBWTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMscTNFQUFpRDtvQkFFakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUUSxtQkFBbUI7OzsyQkFXekIsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7O0lBUVIsc0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLCtCQUErQjs7O0lBQzFDLG1EQUE2Qzs7SUFDN0Msd0RBQWtEOztJQUNsRCwwREFBaUM7O0lBRXJCLHdEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYW50YWdlVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdGhlbWUnO1xuXG5pbXBvcnQgeyBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtc3dpdGNoZXItbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBvdGhlclByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBleHBsb3JlTW9yZUxpbms6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3RoZW1lU2VydmljZTogVmFudGFnZVRoZW1lU2VydmljZSkge31cblxuICBfYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=