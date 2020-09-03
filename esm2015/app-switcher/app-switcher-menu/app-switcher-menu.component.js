/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ElementRef, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
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
                template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:logo-wordmark\"></mat-icon>\n    <div class=\"app-switcher-header-title\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-action-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a\n        *ngIf=\"product.newTab\"\n        mat-list-item\n        class=\"app-switcher-list-item text-nodecoration new-tab\"\n        target=\"_blank\"\n        [href]=\"product.href\"\n      >\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n        <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n      </a>\n      <a *ngIf=\"!product.newTab\" mat-list-item class=\"app-switcher-list-item text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-action-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel\n    #expansionPanel\n    *ngIf=\"otherProducts?.length; else explorerMore\"\n    class=\"other-products\"\n    (afterExpand)=\"scrollToBottom()\"\n    (afterCollapse)=\"scrollToBottom()\"\n    (opened)=\"scrollToBottom()\"\n    (closed)=\"scrollToBottom()\"\n  >\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-action-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a\n          *ngIf=\"other.newTab === undefined || other.newTab === true\"\n          mat-list-item\n          class=\"text-nodecoration new-tab\"\n          target=\"_blank\"\n          [href]=\"other.href\"\n        >\n          <span matLine>{{ other.text }}</span>\n          <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n        </a>\n        <a *ngIf=\"other.newTab === false\" mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-action-list>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-button class=\"explore-more\" color=\"accent\" [href]=\"exploreMoreLink\" target=\"_blank\">\n      {{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}\n    </a>\n  </ng-template>\n</td-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".app-switcher-menu{min-width:256px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .mat-icon[svgicon=\"td-logo:logo-wordmark\"]{height:24px;width:auto;margin-bottom:12px}.app-switcher-menu .app-switcher-list-item .mat-icon::ng-deep>svg{height:40px;width:40px}.app-switcher-menu .other-products{box-shadow:none;margin:8px 0}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .new-tab ::ng-deep .mat-list-item-content{padding-right:12px}.app-switcher-menu .explore-more{margin:6px 8px}.app-switcher-menu ::ng-deep .td-menu-content+.mat-divider{display:none}"]
            }] }
];
/** @nocollapse */
VantageAppSwitcherMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
VantageAppSwitcherMenuComponent.propDecorators = {
    products: [{ type: Input }],
    otherProducts: [{ type: Input }],
    exploreMoreLink: [{ type: Input }],
    expansionPanel: [{ type: ViewChild, args: ['expansionPanel',] }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.expansionPanel;
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherMenuComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLXN3aXRjaGVyLyIsInNvdXJjZXMiOlsiYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBVWhFLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFPMUMsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFHLENBQUM7Ozs7O0lBRXpDLFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNSLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1lBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsNmdIQUFpRDtnQkFFakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBWG1ELFVBQVU7Ozt1QkFhM0QsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBRUwsU0FBUyxTQUFDLGdCQUFnQjs7OztJQUozQixtREFBNkM7O0lBQzdDLHdEQUFrRDs7SUFDbEQsMERBQWlDOztJQUVqQyx5REFBK0Q7Ozs7O0lBRW5ELGdEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RXhwYW5zaW9uUGFuZWwgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuXG5pbXBvcnQgeyBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtc3dpdGNoZXItbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBvdGhlclByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBleHBsb3JlTW9yZUxpbms6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdleHBhbnNpb25QYW5lbCcpIGV4cGFuc2lvblBhbmVsOiBNYXRFeHBhbnNpb25QYW5lbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIF9ibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW06IEhUTUxFbGVtZW50ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZC1tZW51LWNvbnRlbnQnKTtcbiAgICAgIGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHQ7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==