/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var VantageAccountProfileMenuComponent = /** @class */ (function () {
    function VantageAccountProfileMenuComponent() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    VantageAccountProfileMenuComponent.prototype._blockEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    VantageAccountProfileMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-account-profile-menu',
                    template: "<td-menu class=\"account-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine  *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[account-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[account-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".account-profile-menu [td-menu-header]{text-align:left;padding-bottom:0}::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:0 0}.mat-action-list{padding-top:0}::ng-deep .mat-action-list .mat-divider,::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep mat-divider:last-child{display:none}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}td-menu{margin-bottom:0}"]
                }] }
    ];
    VantageAccountProfileMenuComponent.propDecorators = {
        email: [{ type: Input }],
        name: [{ type: Input }]
    };
    return VantageAccountProfileMenuComponent;
}());
export { VantageAccountProfileMenuComponent };
if (false) {
    /** @type {?} */
    VantageAccountProfileMenuComponent.prototype.email;
    /** @type {?} */
    VantageAccountProfileMenuComponent.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1wcm9maWxlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYWNjb3VudC1wcm9maWxlLyIsInNvdXJjZXMiOlsiYWNjb3VudC1wcm9maWxlLW1lbnUvYWNjb3VudC1wcm9maWxlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRTtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFKQyx3REFBVzs7OztJQUFYLFVBQVksS0FBWTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxrbEJBQW9EO29CQUVwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7d0JBRUUsS0FBSzt1QkFDTCxLQUFLOztJQU1SLHlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBUlksa0NBQWtDOzs7SUFDN0MsbURBQXVCOztJQUN2QixrREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktYWNjb3VudC1wcm9maWxlLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3VudC1wcm9maWxlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvdW50LXByb2ZpbGUtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFjY291bnRQcm9maWxlTWVudUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICBfYmxvY2tFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=