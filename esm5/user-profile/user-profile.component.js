/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
var VantageUserProfileComponent = /** @class */ (function () {
    function VantageUserProfileComponent(themeService, sessionService) {
        this.themeService = themeService;
        this.sessionService = sessionService;
    }
    VantageUserProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-user-profile',
                    template: "<td-user-profile\n  [name]=\"sessionService.user?.display_name\"\n  [email]=\"sessionService.user?.email\"\n  [matTooltip]=\"'USER_PROFILE.TOOLTIP' | translate\"\n  matTooltipShowDelay=\"0\"\n>\n  <ng-container td-user-action-list>\n    <button mat-list-item (click)=\"themeService.toggleTheme()\">\n      <mat-icon matListAvatar>\n        {{ themeService.map({ 'dark-theme': 'brightness_high', 'light-theme': 'brightness_low' }) | async }}\n      </mat-icon>\n      <span matLine>\n        {{\n          themeService.map({ 'dark-theme': 'USER_PROFILE.LIGHT_MODE', 'light-theme': 'USER_PROFILE.DARK_MODE' })\n            | async\n            | translate\n        }}\n      </span>\n    </button>\n\n    <ng-content></ng-content>\n\n    <mat-divider></mat-divider>\n    <button mat-list-item (click)=\"sessionService.logout()\">\n      <mat-icon matListAvatar>exit_to_app</mat-icon>\n      <span matLine>{{ 'USER_PROFILE.SIGN_OUT' | translate }}</span>\n    </button>\n  </ng-container>\n</td-user-profile>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    VantageUserProfileComponent.ctorParameters = function () { return [
        { type: VantageThemeService },
        { type: VantageSessionService }
    ]; };
    return VantageUserProfileComponent;
}());
export { VantageUserProfileComponent };
if (false) {
    /** @type {?} */
    VantageUserProfileComponent.prototype.themeService;
    /** @type {?} */
    VantageUserProfileComponent.prototype.sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3VzZXItcHJvZmlsZS8iLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFckU7SUFPRSxxQ0FBbUIsWUFBaUMsRUFBUyxjQUFxQztRQUEvRSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFBRyxDQUFDOztnQkFQdkcsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDIvQkFBNEM7b0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBUlEsbUJBQW1CO2dCQUNuQixxQkFBcUI7O0lBVTlCLGtDQUFDO0NBQUEsQUFSRCxJQVFDO1NBRlksMkJBQTJCOzs7SUFDMUIsbURBQXdDOztJQUFFLHFEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbnRhZ2VUaGVtZVNlcnZpY2UgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS90aGVtZSc7XG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndnVpLXVzZXItcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VVc2VyUHJvZmlsZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aGVtZVNlcnZpY2U6IFZhbnRhZ2VUaGVtZVNlcnZpY2UsIHB1YmxpYyBzZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxufVxuIl19