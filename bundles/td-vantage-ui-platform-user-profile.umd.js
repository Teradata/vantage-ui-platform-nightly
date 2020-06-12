(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@td-vantage/ui-platform/theme'), require('@td-vantage/ui-platform/auth'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/tooltip'), require('@covalent/core/common'), require('@covalent/core/user-profile'), require('@ngx-translate/core'), require('@angular/material/divider'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/user-profile', ['exports', '@angular/core', '@td-vantage/ui-platform/theme', '@td-vantage/ui-platform/auth', '@angular/common', '@angular/material/button', '@angular/material/icon', '@angular/material/tooltip', '@covalent/core/common', '@covalent/core/user-profile', '@ngx-translate/core', '@angular/material/divider', '@angular/material/list'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform']['user-profile'] = {}), global.ng.core, global['td-vantage']['ui-platform'].theme, global['td-vantage']['ui-platform'].auth, global.ng.common, global.ng.material.button, global.ng.material.icon, global.ng.material.tooltip, global.common$1, global.userProfile, global.core$1, global.ng.material.divider, global.ng.material.list));
}(this, (function (exports, core, theme, auth, common, button, icon, tooltip, common$1, userProfile, core$1, divider, list) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageUserProfileComponent = /** @class */ (function () {
        function VantageUserProfileComponent(themeService, sessionService) {
            this.themeService = themeService;
            this.sessionService = sessionService;
        }
        VantageUserProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-user-profile',
                        template: "<td-user-profile\n  [name]=\"sessionService.user?.display_name\"\n  [email]=\"sessionService.user?.email\"\n  [matTooltip]=\"'USER_PROFILE.TOOLTIP' | translate\"\n  matTooltipShowDelay=\"0\"\n>\n  <ng-container td-user-action-list>\n    <button mat-list-item (click)=\"themeService.toggleTheme()\">\n      <mat-icon matListAvatar>\n        {{ themeService.map({ 'dark-theme': 'brightness_high', 'light-theme': 'brightness_low' }) | async }}\n      </mat-icon>\n      <span matLine>\n        {{\n          themeService.map({ 'dark-theme': 'USER_PROFILE.LIGHT_MODE', 'light-theme': 'USER_PROFILE.DARK_MODE' })\n            | async\n            | translate\n        }}\n      </span>\n    </button>\n\n    <ng-content></ng-content>\n\n    <mat-divider></mat-divider>\n    <button mat-list-item (click)=\"sessionService.logout()\">\n      <mat-icon matListAvatar>exit_to_app</mat-icon>\n      <span matLine>{{ 'USER_PROFILE.SIGN_OUT' | translate }}</span>\n    </button>\n  </ng-container>\n</td-user-profile>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        VantageUserProfileComponent.ctorParameters = function () { return [
            { type: theme.VantageThemeService },
            { type: auth.VantageSessionService }
        ]; };
        return VantageUserProfileComponent;
    }());
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
    var VantageUserProfileModule = /** @class */ (function () {
        function VantageUserProfileModule() {
        }
        VantageUserProfileModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [VantageUserProfileComponent],
                        imports: [
                            common.CommonModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            tooltip.MatTooltipModule,
                            divider.MatDividerModule,
                            list.MatListModule,
                            common$1.CovalentCommonModule,
                            userProfile.CovalentUserProfileModule,
                            core$1.TranslateModule.forRoot(),
                        ],
                        exports: [VantageUserProfileComponent],
                    },] }
        ];
        return VantageUserProfileModule;
    }());

    exports.VantageUserProfileComponent = VantageUserProfileComponent;
    exports.VantageUserProfileModule = VantageUserProfileModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-user-profile.umd.js.map
