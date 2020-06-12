import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentUserProfileModule } from '@covalent/core/user-profile';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageUserProfileComponent {
    /**
     * @param {?} themeService
     * @param {?} sessionService
     */
    constructor(themeService, sessionService) {
        this.themeService = themeService;
        this.sessionService = sessionService;
    }
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
VantageUserProfileComponent.ctorParameters = () => [
    { type: VantageThemeService },
    { type: VantageSessionService }
];
if (false) {
    /** @type {?} */
    VantageUserProfileComponent.prototype.themeService;
    /** @type {?} */
    VantageUserProfileComponent.prototype.sessionService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageUserProfileModule {
}
VantageUserProfileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VantageUserProfileComponent],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatDividerModule,
                    MatListModule,
                    CovalentCommonModule,
                    CovalentUserProfileModule,
                    TranslateModule.forRoot(),
                ],
                exports: [VantageUserProfileComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VantageUserProfileComponent, VantageUserProfileModule };
//# sourceMappingURL=td-vantage-ui-platform-user-profile.js.map
