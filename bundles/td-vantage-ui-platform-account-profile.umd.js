(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/list'), require('@covalent/core/menu')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/account-profile', ['exports', '@angular/core', '@angular/common', '@angular/material/menu', '@angular/material/icon', '@angular/material/button', '@angular/material/list', '@covalent/core/menu'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform']['account-profile'] = {}), global.ng.core, global.ng.common, global.ng.material.menu, global.ng.material.icon, global.ng.material.button, global.ng.material.list, global.covalent.core.menu));
}(this, (function (exports, core, common, menu, icon, button, list, menu$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'vui-account-profile-menu',
                        template: "<td-menu class=\"account-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine  *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[account-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[account-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".account-profile-menu [td-menu-header]{text-align:left;padding-bottom:0}::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:0 0}.mat-action-list{padding-top:0}::ng-deep .mat-action-list .mat-divider,::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep mat-divider:last-child{display:none}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}td-menu{margin-bottom:0}"]
                    }] }
        ];
        VantageAccountProfileMenuComponent.propDecorators = {
            email: [{ type: core.Input }],
            name: [{ type: core.Input }]
        };
        return VantageAccountProfileMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        VantageAccountProfileMenuComponent.prototype.email;
        /** @type {?} */
        VantageAccountProfileMenuComponent.prototype.name;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAccountProfileComponent = /** @class */ (function () {
        function VantageAccountProfileComponent() {
        }
        VantageAccountProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-account-profile',
                        template: "<button mat-icon-button [matMenuTriggerFor]=\"accountMenu\">\n  <mat-icon>person</mat-icon>\n</button>\n\n<mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-account-profile-menu [name]=\"name\" [email]=\"email\">\n    <ng-content select=\"[account-info-list]\" account-info-list></ng-content>\n    <ng-content select=\"[account-action-list]\" account-action-list></ng-content>\n  </vui-account-profile-menu>\n</mat-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        VantageAccountProfileComponent.propDecorators = {
            name: [{ type: core.Input }],
            email: [{ type: core.Input }]
        };
        return VantageAccountProfileComponent;
    }());
    if (false) {
        /** @type {?} */
        VantageAccountProfileComponent.prototype.name;
        /** @type {?} */
        VantageAccountProfileComponent.prototype.email;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAccountProfileModule = /** @class */ (function () {
        function VantageAccountProfileModule() {
        }
        VantageAccountProfileModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [VantageAccountProfileComponent, VantageAccountProfileMenuComponent],
                        imports: [
                            common.CommonModule,
                            menu.MatMenuModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            list.MatListModule,
                            /* covalent modules */
                            menu$1.CovalentMenuModule,
                        ],
                        providers: [],
                        exports: [VantageAccountProfileComponent, VantageAccountProfileMenuComponent],
                    },] }
        ];
        return VantageAccountProfileModule;
    }());

    exports.VantageAccountProfileComponent = VantageAccountProfileComponent;
    exports.VantageAccountProfileMenuComponent = VantageAccountProfileMenuComponent;
    exports.VantageAccountProfileModule = VantageAccountProfileModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-account-profile.umd.js.map
