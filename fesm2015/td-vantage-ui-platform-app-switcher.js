import { Component, ChangeDetectionStrategy, ElementRef, Input, ViewChild, ChangeDetectorRef, NgModule, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';
import { TranslateModule } from '@ngx-translate/core';
import { VantageThemeModule } from '@td-vantage/ui-platform/theme';
import { __decorate, __metadata } from 'tslib';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VANTAGE_BASE_URL_TOKEN } from '@td-vantage/ui-platform/common';
import { mixinHttp, TdGET } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAppSwitcherMenuComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _blockEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    scrollToBottom() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const elem = this.elRef.nativeElement.querySelector('.td-menu-content');
            elem.scrollTop = elem.scrollHeight;
        }));
    }
}
VantageAppSwitcherMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher-menu',
                template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:logo-wordmark\"></mat-icon>\n    <div class=\"app-switcher-header-title\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-action-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a\n        *ngIf=\"product.newTab\"\n        mat-list-item\n        class=\"app-switcher-list-item text-nodecoration new-tab\"\n        target=\"_blank\"\n        [href]=\"product.href\"\n      >\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n        <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n      </a>\n      <a *ngIf=\"!product.newTab\" mat-list-item class=\"app-switcher-list-item text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-action-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel\n    #expansionPanel\n    *ngIf=\"otherProducts?.length; else explorerMore\"\n    class=\"other-products\"\n    (afterExpand)=\"scrollToBottom()\"\n    (afterCollapse)=\"scrollToBottom()\"\n    (opened)=\"scrollToBottom()\"\n    (closed)=\"scrollToBottom()\"\n  >\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-action-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a\n          *ngIf=\"other.newTab === undefined || other.newTab === true\"\n          mat-list-item\n          class=\"text-nodecoration new-tab\"\n          target=\"_blank\"\n          [href]=\"other.href\"\n        >\n          <span matLine>{{ other.text }}</span>\n          <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n        </a>\n        <a *ngIf=\"other.newTab === false\" mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-action-list>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-button class=\"explore-more\" color=\"accent\" [href]=\"exploreMoreLink\" target=\"_blank\">\n      {{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}\n    </a>\n  </ng-template>\n</td-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".app-switcher-menu{min-width:256px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .mat-icon[svgicon=\"td-logo:logo-wordmark\"]{height:24px;width:auto;margin-bottom:12px}.app-switcher-menu .app-switcher-list-item .mat-icon::ng-deep>svg{height:40px;width:40px}.app-switcher-menu .other-products{box-shadow:none;margin:8px 0}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .new-tab ::ng-deep .mat-list-item-content{padding-right:12px}.app-switcher-menu .explore-more{margin:6px 8px}.app-switcher-menu ::ng-deep .td-menu-content+.mat-divider{display:none}"]
            }] }
];
/** @nocollapse */
VantageAppSwitcherMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
VantageAppSwitcherMenuComponent.propDecorators = {
    products: [{ type: Input }],
    otherProducts: [{ type: Input }],
    exploreMoreLink: [{ type: Input }],
    expansionPanel: [{ type: ViewChild, args: ['expansionPanel',] }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherMenuComponent.prototype.expansionPanel;
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherMenuComponent.prototype.elRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAppSwitcherComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    /**
     * @return {?}
     */
    menuClosed() {
        this.appSwitcherMenu.expansionPanel.close();
        this._changeDetectorRef.detectChanges();
    }
}
VantageAppSwitcherComponent.decorators = [
    { type: Component, args: [{
                selector: 'vui-app-switcher',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\" (closed)=\"menuClosed()\">\n  <vui-app-switcher-menu\n    #appSwitcherMenu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
VantageAppSwitcherComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
VantageAppSwitcherComponent.propDecorators = {
    products: [{ type: Input }],
    otherProducts: [{ type: Input }],
    exploreMoreLink: [{ type: Input }],
    appSwitcherMenu: [{ type: ViewChild, args: ['appSwitcherMenu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.products;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.otherProducts;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.exploreMoreLink;
    /** @type {?} */
    VantageAppSwitcherComponent.prototype.appSwitcherMenu;
    /**
     * @type {?}
     * @private
     */
    VantageAppSwitcherComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAppSwitcherModule {
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
                    MatExpansionModule,
                    MatListModule,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IVantageAppSwitcherItem() { }
if (false) {
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.id;
    /** @type {?} */
    IVantageAppSwitcherItem.prototype.text;
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.description;
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
    /** @type {?|undefined} */
    IVantageAppSwitcherItem.prototype.newTab;
}
class VantageProductsService extends mixinHttp(class {
}, {
    baseUrl: '/assets',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
    /**
     * @param {?=} _baseUrlOverride
     */
    constructor(_baseUrlOverride) {
        super();
        this._baseUrlOverride = _baseUrlOverride;
    }
    /**
     * @return {?}
     */
    get basePath() {
        return this._baseUrlOverride;
    }
    /**
     * @return {?}
     */
    get() {
        return;
    }
    /**
     * @return {?}
     */
    getOther() {
        return;
    }
}
VantageProductsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
VantageProductsService.ctorParameters = () => [
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [VANTAGE_BASE_URL_TOKEN,] }] }
];
/** @nocollapse */ VantageProductsService.ɵprov = ɵɵdefineInjectable({ factory: function VantageProductsService_Factory() { return new VantageProductsService(ɵɵinject(VANTAGE_BASE_URL_TOKEN, 8)); }, token: VantageProductsService, providedIn: "root" });
__decorate([
    TdGET({
        path: '/products.json',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], VantageProductsService.prototype, "get", null);
__decorate([
    TdGET({
        path: '/other-products.json',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable)
], VantageProductsService.prototype, "getOther", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageProductsService.prototype._baseUrlOverride;
}

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

export { VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent, VantageAppSwitcherModule, VantageProductsService };
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.js.map
