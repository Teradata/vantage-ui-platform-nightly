/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var VantageAppSwitcherComponent = /** @class */ (function () {
    function VantageAppSwitcherComponent() {
    }
    VantageAppSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-app-switcher-menu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    VantageAppSwitcherComponent.propDecorators = {
        products: [{ type: Input }],
        otherProducts: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherComponent;
}());
export { VantageAppSwitcherComponent };
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFFO0lBQUE7SUFVQSxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNldBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7MkJBRUUsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7O0lBQ1Isa0NBQUM7Q0FBQSxBQVZELElBVUM7U0FKWSwyQkFBMkI7OztJQUN0QywrQ0FBNkM7O0lBQzdDLG9EQUFrRDs7SUFDbEQsc0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW0gfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYXBwLXN3aXRjaGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcFN3aXRjaGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIG90aGVyUHJvZHVjdHM6IElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW107XG4gIEBJbnB1dCgpIGV4cGxvcmVNb3JlTGluazogc3RyaW5nO1xufVxuIl19