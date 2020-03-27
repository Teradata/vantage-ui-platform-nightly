import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CovalentMenuModule } from '@covalent/core/menu';
import { TranslateModule } from '@ngx-translate/core';
import { VantageThemeService, VantageThemeModule } from '@td-vantage/ui-platform/theme';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IVantageAppSwitcherItem() { }
if (false) {
    /** @type {?} */
    IVantageAppSwitcherItem.prototype.text;
    /** @type {?} */
    IVantageAppSwitcherItem.prototype.href;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.icon;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.svgIcon;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.iconClasses;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.divider;
}
var VantageAppSwitcherMenuComponent = /** @class */ (function () {
    function VantageAppSwitcherMenuComponent(_themeService) {
        this._themeService = _themeService;
    }
    VantageAppSwitcherMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher-menu',
                    template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\">\n    <mat-icon\n      class=\"logo-icon\"\n      [svgIcon]=\"_themeService.map({ 'dark-theme': 'td-logo:on-dark', 'light-theme': 'td-logo:on-light' }) | async\"\n    ></mat-icon>\n    <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <ng-container *ngFor=\"let product of productList; last as isLast\">\n    <a mat-menu-item [href]=\"product.href\">\n      <mat-icon\n        [class]=\"product.iconClasses\"\n        *ngIf=\"product.svgIcon; else iconTemplate\"\n        [svgIcon]=\"product.svgIcon\"\n      ></mat-icon>\n      <ng-template #iconTemplate>\n        <mat-icon [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n      </ng-template>\n      {{ product.text }}\n    </a>\n    <mat-divider *ngIf=\"product.divider && !isLast\"></mat-divider>\n  </ng-container>\n  <!--footer-->\n  <a mat-menu-item td-menu-footer class=\"explore-more\" [href]=\"exploreMoreLink\">\n    <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n    <mat-icon>launch</mat-icon>\n  </a>\n</td-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    VantageAppSwitcherMenuComponent.ctorParameters = function () { return [
        { type: VantageThemeService }
    ]; };
    VantageAppSwitcherMenuComponent.propDecorators = {
        productList: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherMenuComponent;
}());
if (false) {
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype._themeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageAppSwitcherComponent = /** @class */ (function () {
    function VantageAppSwitcherComponent() {
    }
    VantageAppSwitcherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-app-switcher',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-app-switcher-menu [productList]=\"productList\" [exploreMoreLink]=\"exploreMoreLink\"></vui-app-switcher-menu>\n</mat-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    VantageAppSwitcherComponent.propDecorators = {
        productList: [{ type: Input }],
        exploreMoreLink: [{ type: Input }]
    };
    return VantageAppSwitcherComponent;
}());
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageAppSwitcherModule = /** @class */ (function () {
    function VantageAppSwitcherModule() {
    }
    VantageAppSwitcherModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                    imports: [
                        CommonModule,
                        MatMenuModule,
                        MatIconModule,
                        MatButtonModule,
                        MatDividerModule,
                        /* covalent modules */
                        CovalentMenuModule,
                        /* third party deps */
                        TranslateModule.forChild(),
                        /* vantage modules */
                        VantageThemeModule,
                    ],
                    providers: [],
                    exports: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                },] }
    ];
    return VantageAppSwitcherModule;
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

export { VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent, VantageAppSwitcherModule };
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.js.map
