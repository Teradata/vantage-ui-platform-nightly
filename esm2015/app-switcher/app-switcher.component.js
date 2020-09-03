/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { VantageAppSwitcherMenuComponent } from './app-switcher-menu/app-switcher-menu.component';
export class VantageAppSwitcherComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    /**
     * @return {?}
     */
    menuClosed() {
        this.appSwitcherMenu.expansionPanel.close();
        this._changeDetectorRef.detectChanges();
    }
}
VantageAppSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\" (closed)=\"menuClosed()\">\n  <vui-app-switcher-menu\n    #appSwitcherMenu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
VantageAppSwitcherComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
VantageAppSwitcherComponent.propDecorators = {
    products: [{ type: Input }],
    otherProducts: [{ type: Input }],
    exploreMoreLink: [{ type: Input }],
    appSwitcherMenu: [{ type: ViewChild, args: ['appSwitcherMenu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.appSwitcherMenu;
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVFsRyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBTXRDLFlBQW9CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQzs7OztJQUU3RCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNlpBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFWOEQsaUJBQWlCOzs7dUJBWTdFLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFIOUMsK0NBQTZDOztJQUM3QyxvREFBa0Q7O0lBQ2xELHNEQUFpQzs7SUFDakMsc0RBQWlHOzs7OztJQUVyRix5REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB9IGZyb20gJy4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5pbXBvcnQgeyBWYW50YWdlQXBwU3dpdGNoZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc3dpdGNoZXItbWVudS9hcHAtc3dpdGNoZXItbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIG90aGVyUHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIGV4cGxvcmVNb3JlTGluazogc3RyaW5nO1xuICBAVmlld0NoaWxkKCdhcHBTd2l0Y2hlck1lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBhcHBTd2l0Y2hlck1lbnU6IFZhbnRhZ2VBcHBTd2l0Y2hlck1lbnVDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG1lbnVDbG9zZWQoKTogdm9pZCB7XG4gICAgdGhpcy5hcHBTd2l0Y2hlck1lbnUuZXhwYW5zaW9uUGFuZWwuY2xvc2UoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==