/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { VantageAppSwitcherMenuComponent } from './app-switcher-menu/app-switcher-menu.component';
var VantageAppSwitcherComponent = /** @class */ (function () {
    function VantageAppSwitcherComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    /**
     * @return {?}
     */
    VantageAppSwitcherComponent.prototype.menuClosed = /**
     * @return {?}
     */
    function () {
        this.appSwitcherMenu.expansionPanel.close();
        this._changeDetectorRef.detectChanges();
    };
    VantageAppSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\" (closed)=\"menuClosed()\">\n  <vui-app-switcher-menu\n    #appSwitcherMenu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VantageAppSwitcherComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    VantageAppSwitcherComponent.propDecorators = {
        products: [{ type: Input }],
        otherProducts: [{ type: Input }],
        exploreMoreLink: [{ type: Input }],
        appSwitcherMenu: [{ type: ViewChild, args: ['appSwitcherMenu', { static: true },] }]
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
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.appSwitcherMenu;
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVsRztJQVlFLHFDQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7Ozs7SUFFN0QsZ0RBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsNlpBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVY4RCxpQkFBaUI7OzsyQkFZN0UsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFRaEQsa0NBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLDJCQUEyQjs7O0lBQ3RDLCtDQUE2Qzs7SUFDN0Msb0RBQWtEOztJQUNsRCxzREFBaUM7O0lBQ2pDLHNEQUFpRzs7Ozs7SUFFckYseURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW0gfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLWFwcC1zd2l0Y2hlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc3dpdGNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAtc3dpdGNoZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTd2l0Y2hlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBvdGhlclByb2R1Y3RzOiBJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdO1xuICBASW5wdXQoKSBleHBsb3JlTW9yZUxpbms6IHN0cmluZztcbiAgQFZpZXdDaGlsZCgnYXBwU3dpdGNoZXJNZW51JywgeyBzdGF0aWM6IHRydWUgfSkgYXBwU3dpdGNoZXJNZW51OiBWYW50YWdlQXBwU3dpdGNoZXJNZW51Q29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBtZW51Q2xvc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwU3dpdGNoZXJNZW51LmV4cGFuc2lvblBhbmVsLmNsb3NlKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=