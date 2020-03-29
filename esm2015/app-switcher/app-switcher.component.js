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
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTFFLE1BQU0sT0FBTywyQkFBMkI7OztZQU52QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNldBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozt1QkFFRSxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7OztJQUZOLCtDQUE2Qzs7SUFDN0Msb0RBQWtEOztJQUNsRCxzREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB9IGZyb20gJy4vc2VydmljZXMvcHJvZHVjdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Z1aS1hcHAtc3dpdGNoZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXBwU3dpdGNoZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0czogSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXTtcbiAgQElucHV0KCkgb3RoZXJQcm9kdWN0czogSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXTtcbiAgQElucHV0KCkgZXhwbG9yZU1vcmVMaW5rOiBzdHJpbmc7XG59XG4iXX0=