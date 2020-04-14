/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class VantageAccountProfileMenuComponent {
    /**
     * @param {?} event
     * @return {?}
     */
    _blockEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
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
if (false) {
    /** @type {?} */
    VantageAccountProfileMenuComponent.prototype.email;
    /** @type {?} */
    VantageAccountProfileMenuComponent.prototype.name;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1wcm9maWxlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYWNjb3VudC1wcm9maWxlLyIsInNvdXJjZXMiOlsiYWNjb3VudC1wcm9maWxlLW1lbnUvYWNjb3VudC1wcm9maWxlLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVExRSxNQUFNLE9BQU8sa0NBQWtDOzs7OztJQUk3QyxXQUFXLENBQUMsS0FBWTtRQUN0QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxrbEJBQW9EO2dCQUVwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztvQkFFRSxLQUFLO21CQUNMLEtBQUs7Ozs7SUFETixtREFBdUI7O0lBQ3ZCLGtEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Z1aS1hY2NvdW50LXByb2ZpbGUtbWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvdW50LXByb2ZpbGUtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjY291bnQtcHJvZmlsZS1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQWNjb3VudFByb2ZpbGVNZW51Q29tcG9uZW50IHtcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuXG4gIF9ibG9ja0V2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==