/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class VantageAppSwitcherComponent {
}
VantageAppSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-app-switcher-menu [productList]=\"productList\" [exploreMoreLink]=\"exploreMoreLink\"></vui-app-switcher-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
VantageAppSwitcherComponent.propDecorators = {
    productList: [{ type: Input }],
    exploreMoreLink: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTFFLE1BQU0sT0FBTywyQkFBMkI7OztZQU52QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsOFRBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzswQkFFRSxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFETixrREFBZ0Q7O0lBQ2hELHNEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIH0gZnJvbSAnLi9hcHAtc3dpdGNoZXItbWVudS9hcHAtc3dpdGNoZXItbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdExpc3Q6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIGV4cGxvcmVNb3JlTGluazogc3RyaW5nO1xufVxuIl19