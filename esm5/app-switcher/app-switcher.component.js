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
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-app-switcher-menu [productList]=\"productList\" [exploreMoreLink]=\"exploreMoreLink\"></vui-app-switcher-menu>\n</mat-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFFO0lBQUE7SUFTQSxDQUFDOztnQkFUQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsOFRBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7OEJBRUUsS0FBSztrQ0FDTCxLQUFLOztJQUNSLGtDQUFDO0NBQUEsQUFURCxJQVNDO1NBSFksMkJBQTJCOzs7SUFDdEMsa0RBQWdEOztJQUNoRCxzREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB9IGZyb20gJy4vYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLWFwcC1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtc3dpdGNoZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTd2l0Y2hlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3RMaXN0OiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBleHBsb3JlTW9yZUxpbms6IHN0cmluZztcbn1cbiJdfQ==