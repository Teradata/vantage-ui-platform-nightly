(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/divider'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/expansion'), require('@angular/material/list'), require('@covalent/core/menu'), require('@ngx-translate/core'), require('@td-vantage/ui-platform/theme')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/app-switcher', ['exports', '@angular/core', '@angular/common', '@angular/material/divider', '@angular/material/menu', '@angular/material/icon', '@angular/material/button', '@angular/material/expansion', '@angular/material/list', '@covalent/core/menu', '@ngx-translate/core', '@td-vantage/ui-platform/theme'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform']['app-switcher'] = {}), global.ng.core, global.ng.common, global.ng.material.divider, global.ng.material.menu, global.ng.material.icon, global.ng.material.button, global.ng.material.expansion, global.ng.material.list, global.covalent.core.menu, global['ngx-translate'].core, global['td-vantage']['ui-platform'].theme));
}(this, (function (exports, core, common, divider, menu, icon, button, expansion, list, menu$1, core$1, theme) { 'use strict';

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
        /**
         * @param {?} event
         * @return {?}
         */
        VantageAppSwitcherMenuComponent.prototype._blockEvent = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        VantageAppSwitcherMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-app-switcher-menu',
                        template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon\n      class=\"logo-icon\"\n      [svgIcon]=\"_themeService.map({ 'dark-theme': 'td-logo:on-dark', 'light-theme': 'td-logo:on-light' }) | async\"\n    ></mat-icon>\n    <div class=\"app-switcher-header-title mat-body-2\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a mat-list-item class=\"text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel *ngIf=\"otherProducts?.length; else explorerMore\" class=\"other-products\">\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-list>\n    <mat-divider class=\"push-top-sm\"></mat-divider>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-menu-item class=\"explore-more\" [href]=\"exploreMoreLink\">\n      <span class=\"mat-caption\">{{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}</span>\n      <mat-icon>launch</mat-icon>\n    </a>\n  </ng-template>\n</td-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".app-switcher-menu{min-width:250px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .logo-icon{width:100px;margin-bottom:8px}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .explore-more{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.app-switcher-menu .explore-more .mat-icon{font-size:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        VantageAppSwitcherMenuComponent.ctorParameters = function () { return [
            { type: theme.VantageThemeService }
        ]; };
        VantageAppSwitcherMenuComponent.propDecorators = {
            products: [{ type: core.Input }],
            otherProducts: [{ type: core.Input }],
            exploreMoreLink: [{ type: core.Input }]
        };
        return VantageAppSwitcherMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        VantageAppSwitcherMenuComponent.prototype.products;
        /** @type {?} */
        VantageAppSwitcherMenuComponent.prototype.otherProducts;
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
            { type: core.Component, args: [{
                        selector: 'vui-app-switcher',
                        template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <vui-app-switcher-menu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        VantageAppSwitcherComponent.propDecorators = {
            products: [{ type: core.Input }],
            otherProducts: [{ type: core.Input }],
            exploreMoreLink: [{ type: core.Input }]
        };
        return VantageAppSwitcherComponent;
    }());
    if (false) {
        /** @type {?} */
        VantageAppSwitcherComponent.prototype.products;
        /** @type {?} */
        VantageAppSwitcherComponent.prototype.otherProducts;
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
            { type: core.NgModule, args: [{
                        declarations: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                        imports: [
                            common.CommonModule,
                            menu.MatMenuModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            list.MatListModule,
                            /* covalent modules */
                            menu$1.CovalentMenuModule,
                            /* third party deps */
                            core$1.TranslateModule.forChild(),
                            /* vantage modules */
                            theme.VantageThemeModule,
                        ],
                        providers: [],
                        exports: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                    },] }
        ];
        return VantageAppSwitcherModule;
    }());

    exports.VantageAppSwitcherComponent = VantageAppSwitcherComponent;
    exports.VantageAppSwitcherMenuComponent = VantageAppSwitcherMenuComponent;
    exports.VantageAppSwitcherModule = VantageAppSwitcherModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.umd.js.map
