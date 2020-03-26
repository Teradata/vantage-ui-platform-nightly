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
    IVantageAppSwitcherItem.prototype.divider;
}
class VantageAppSwitcherComponent {
    /**
     * @param {?} _themeService
     */
    constructor(_themeService) {
        this._themeService = _themeService;
    }
}
VantageAppSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-menu class=\"app-switcher-menu\">\n    <!--header-->\n    <div td-menu-header class=\"app-switcher-header\">\n      <mat-icon\n        class=\"logo-icon\"\n        *ngIf=\"_themeService.darkTheme$ | async; else lightLogo\"\n        svgIcon=\"td-logo:on-dark\"\n      ></mat-icon>\n      <ng-template #lightLogo>\n        <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:on-light\"></mat-icon>\n      </ng-template>\n      <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n    </div>\n    <!--content-->\n    <ng-container *ngFor=\"let product of productList; last as isLast\">\n      <a mat-menu-item [href]=\"product.href\">\n        <mat-icon *ngIf=\"product.svgIcon; else iconTemplate\" [svgIcon]=\"product.svgIcon\"></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon>{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        {{ product.text }}\n      </a>\n      <mat-divider *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n    <!--footer-->\n    <a mat-menu-item td-menu-footer class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </td-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
VantageAppSwitcherComponent.ctorParameters = () => [
    { type: VantageThemeService }
];
VantageAppSwitcherComponent.propDecorators = {
    productList: [{ type: Input }],
    exploreMoreLink: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.productList;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype._themeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAppSwitcherModule {
}
VantageAppSwitcherModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VantageAppSwitcherComponent],
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
                exports: [VantageAppSwitcherComponent],
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

export { VantageAppSwitcherComponent, VantageAppSwitcherModule };
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.js.map
