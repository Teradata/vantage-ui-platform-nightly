/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
export class VantageAppSwitcherMenuComponent {
    /**
     * @param {?} _themeService
     */
    constructor(_themeService) {
        this._themeService = _themeService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _blockEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
VantageAppSwitcherMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher-menu',
                template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon\n      class=\"logo-icon\"\n      [svgIcon]=\"_themeService.map({ 'dark-theme': 'td-logo:on-dark', 'light-theme': 'td-logo:on-light' }) | async\"\n    ></mat-icon>\n    <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a mat-list-item class=\"text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel *ngIf=\"otherProducts?.length; else explorerMore\" class=\"other-products\">\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-list>\n    <mat-divider class=\"push-top-sm\"></mat-divider>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-menu-item class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </ng-template>\n</td-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
VantageAppSwitcherMenuComponent.ctorParameters = () => [
    { type: VantageThemeService }
];
VantageAppSwitcherMenuComponent.propDecorators = {
    products: [{ type: Input }],
    otherProducts: [{ type: Input }],
    exploreMoreLink: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsiYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVVwRSxNQUFNLE9BQU8sK0JBQStCOzs7O0lBSzFDLFlBQW1CLGFBQWtDO1FBQWxDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUFHLENBQUM7Ozs7O0lBRXpELFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw4MUVBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFUUSxtQkFBbUI7Ozt1QkFXekIsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFGTixtREFBNkM7O0lBQzdDLHdEQUFrRDs7SUFDbEQsMERBQWlDOztJQUVyQix3REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFudGFnZVRoZW1lU2VydmljZSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lJztcblxuaW1wb3J0IHsgSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW0gfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm9kdWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLWFwcC1zd2l0Y2hlci1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTd2l0Y2hlck1lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0czogSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXTtcbiAgQElucHV0KCkgb3RoZXJQcm9kdWN0czogSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXTtcbiAgQElucHV0KCkgZXhwbG9yZU1vcmVMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF90aGVtZVNlcnZpY2U6IFZhbnRhZ2VUaGVtZVNlcnZpY2UpIHt9XG5cbiAgX2Jsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19