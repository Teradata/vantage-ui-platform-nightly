import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';

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
        { type: Component, args: [{
                    selector: 'vui-account-profile-menu',
                    template: "<td-menu class=\"account-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine  *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[account-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[account-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".account-profile-menu{padding-bottom:8px}.account-profile-menu [td-menu-header]{text-align:left;padding-bottom:0}.account-profile-menu .mat-action-list{padding-top:0}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}:host ::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],:host ::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:0 0}:host ::ng-deep .mat-action-list .mat-divider,:host ::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep .td-menu-content+.mat-divider{display:none}"]
                }] }
    ];
    VantageAccountProfileMenuComponent.propDecorators = {
        email: [{ type: Input }],
        name: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [VantageAccountProfileComponent, VantageAccountProfileMenuComponent],
                    imports: [
                        CommonModule,
                        MatMenuModule,
                        MatIconModule,
                        MatButtonModule,
                        MatListModule,
                        /* covalent modules */
                        CovalentMenuModule,
                    ],
                    providers: [],
                    exports: [VantageAccountProfileComponent, VantageAccountProfileMenuComponent],
                },] }
    ];
    return VantageAccountProfileModule;
}());

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

export { VantageAccountProfileComponent, VantageAccountProfileMenuComponent, VantageAccountProfileModule };
//# sourceMappingURL=td-vantage-ui-platform-account-profile.js.map
