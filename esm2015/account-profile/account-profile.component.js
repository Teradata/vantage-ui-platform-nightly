/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class VantageAccountProfileComponent {
}
VantageAccountProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-account-profile',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"accountMenu\">\n  <mat-icon>person</mat-icon>\n</button>\n\n<mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-account-profile-menu [name]=\"name\" [email]=\"email\">\n    <ng-content select=\"[account-info-list]\" account-info-list></ng-content>\n    <ng-content select=\"[account-action-list]\" account-action-list></ng-content>\n  </vui-account-profile-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
VantageAccountProfileComponent.propDecorators = {
    name: [{ type: Input }],
    email: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VantageAccountProfileComponent.prototype.name;
    /** @type {?} */
    VantageAccountProfileComponent.prototype.email;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FjY291bnQtcHJvZmlsZS8iLCJzb3VyY2VzIjpbImFjY291bnQtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFFLE1BQU0sT0FBTyw4QkFBOEI7OztZQUwxQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isc2NBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLDhDQUFzQjs7SUFDdEIsK0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLWFjY291bnQtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvdW50LXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUFjY291bnRQcm9maWxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xufVxuIl19