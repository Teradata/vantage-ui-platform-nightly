/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var VantageAccountProfileComponent = /** @class */ (function () {
    function VantageAccountProfileComponent() {
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
    return VantageAccountProfileComponent;
}());
export { VantageAccountProfileComponent };
if (false) {
    /** @type {?} */
    VantageAccountProfileComponent.prototype.name;
    /** @type {?} */
    VantageAccountProfileComponent.prototype.email;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FjY291bnQtcHJvZmlsZS8iLCJzb3VyY2VzIjpbImFjY291bnQtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isc2NBQStDO29CQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7O0lBQ1IscUNBQUM7Q0FBQSxBQVJELElBUUM7U0FIWSw4QkFBOEI7OztJQUN6Qyw4Q0FBc0I7O0lBQ3RCLCtDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Z1aS1hY2NvdW50LXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3VudC1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBY2NvdW50UHJvZmlsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbn1cbiJdfQ==