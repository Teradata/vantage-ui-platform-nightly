(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/divider'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/button'), require('@covalent/core/menu'), require('@ngx-translate/core'), require('@td-vantage/ui-platform/theme')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/app-switcher', ['exports', '@angular/core', '@angular/common', '@angular/material/divider', '@angular/material/menu', '@angular/material/icon', '@angular/material/button', '@covalent/core/menu', '@ngx-translate/core', '@td-vantage/ui-platform/theme'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform']['app-switcher'] = {}), global.ng.core, global.ng.common, global.ng.material.divider, global.ng.material.menu, global.ng.material.icon, global.ng.material.button, global.covalent.core.menu, global['ngx-translate'].core, global['td-vantage']['ui-platform'].theme));
}(this, (function (exports, core, common, divider, menu, icon, button, menu$1, core$1, theme) { 'use strict';

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
    var VantageAppSwitcherComponent = /** @class */ (function () {
        function VantageAppSwitcherComponent(_themeService) {
            this._themeService = _themeService;
        }
        VantageAppSwitcherComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-app-switcher',
                        template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-menu class=\"app-switcher-menu\">\n    <!--header-->\n    <div td-menu-header class=\"app-switcher-header\">\n      <mat-icon\n        class=\"logo-icon\"\n        *ngIf=\"_themeService.darkTheme$ | async; else lightLogo\"\n        svgIcon=\"td-logo:on-dark\"\n      ></mat-icon>\n      <ng-template #lightLogo>\n        <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:on-light\"></mat-icon>\n      </ng-template>\n      <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n    </div>\n    <!--content-->\n    <ng-container *ngFor=\"let product of productList; last as isLast\">\n      <a mat-menu-item [href]=\"product.href\">\n        <mat-icon *ngIf=\"product.svgIcon; else iconTemplate\" [svgIcon]=\"product.svgIcon\"></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon>{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        {{ product.text }}\n      </a>\n      <mat-divider *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n    <!--footer-->\n    <a mat-menu-item td-menu-footer class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </td-menu>\n</mat-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        VantageAppSwitcherComponent.ctorParameters = function () { return [
            { type: theme.VantageThemeService }
        ]; };
        VantageAppSwitcherComponent.propDecorators = {
            productList: [{ type: core.Input }],
            exploreMoreLink: [{ type: core.Input }]
        };
        return VantageAppSwitcherComponent;
    }());
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
    var VantageAppSwitcherModule = /** @class */ (function () {
        function VantageAppSwitcherModule() {
        }
        VantageAppSwitcherModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [VantageAppSwitcherComponent],
                        imports: [
                            common.CommonModule,
                            menu.MatMenuModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            divider.MatDividerModule,
                            /* covalent modules */
                            menu$1.CovalentMenuModule,
                            /* third party deps */
                            core$1.TranslateModule.forChild(),
                            /* vantage modules */
                            theme.VantageThemeModule,
                        ],
                        providers: [],
                        exports: [VantageAppSwitcherComponent],
                    },] }
        ];
        return VantageAppSwitcherModule;
    }());

    exports.VantageAppSwitcherComponent = VantageAppSwitcherComponent;
    exports.VantageAppSwitcherModule = VantageAppSwitcherModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.umd.js.map
