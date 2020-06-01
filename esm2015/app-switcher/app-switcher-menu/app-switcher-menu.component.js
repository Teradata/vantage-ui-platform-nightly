/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ElementRef } from '@angular/core';
export class VantageAppSwitcherMenuComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _blockEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const elem = this.elRef.nativeElement.querySelector('.td-menu-content');
            elem.scrollTop = elem.scrollHeight;
        }));
    }
}
VantageAppSwitcherMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher-menu',
                template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:logo-wordmark\"></mat-icon>\n    <div class=\"app-switcher-header-title\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-action-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a mat-list-item class=\"app-switcher-list-item text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-action-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel\n    *ngIf=\"otherProducts?.length; else explorerMore\"\n    class=\"other-products\"\n    (afterExpand)=\"scrollToBottom()\"\n    (afterCollapse)=\"scrollToBottom()\"\n    (opened)=\"scrollToBottom()\"\n    (closed)=\"scrollToBottom()\"\n  >\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-action-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-action-list>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-button class=\"explore-more\" color=\"accent\" [href]=\"exploreMoreLink\" target=\"_blank\">\n      {{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}\n    </a>\n  </ng-template>\n</td-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".app-switcher-menu{min-width:256px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .mat-icon[svgicon=\"td-logo:logo-wordmark\"]{height:24px;width:auto;margin-bottom:12px}.app-switcher-menu .app-switcher-list-item .mat-icon::ng-deep>svg{height:40px;width:40px}.app-switcher-menu .other-products{box-shadow:none;margin:8px 0}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .explore-more{margin:6px 8px}.app-switcher-menu ::ng-deep .td-menu-content+.mat-divider{display:none}"]
            }] }
];
/** @nocollapse */
VantageAppSwitcherMenuComponent.ctorParameters = () => [
    { type: ElementRef }
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
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherMenuComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsiYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVdEYsTUFBTSxPQUFPLCtCQUErQjs7OztJQUsxQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFekMsV0FBVyxDQUFDLEtBQVk7UUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsY0FBYztRQUNaLFVBQVU7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ1IsSUFBSSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7WUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2MkVBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFUbUQsVUFBVTs7O3VCQVczRCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQUZOLG1EQUE2Qzs7SUFDN0Msd0RBQWtEOztJQUNsRCwwREFBaUM7Ozs7O0lBRXJCLGdEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIH0gZnJvbSAnLi4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Z1aS1hcHAtc3dpdGNoZXItbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc3dpdGNoZXItbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1zd2l0Y2hlci1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXBwU3dpdGNoZXJNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIG90aGVyUHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIGV4cGxvcmVNb3JlTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgX2Jsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbTogSFRNTEVsZW1lbnQgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRkLW1lbnUtY29udGVudCcpO1xuICAgICAgZWxlbS5zY3JvbGxUb3AgPSBlbGVtLnNjcm9sbEhlaWdodDtcbiAgICB9KTtcbiAgfVxufVxuIl19