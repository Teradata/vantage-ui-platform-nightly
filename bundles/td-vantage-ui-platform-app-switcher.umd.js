(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/divider'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/expansion'), require('@angular/material/list'), require('@covalent/core/menu'), require('@ngx-translate/core'), require('@td-vantage/ui-platform/theme'), require('@angular/common/http'), require('rxjs'), require('@td-vantage/ui-platform/common'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/app-switcher', ['exports', '@angular/core', '@angular/common', '@angular/material/divider', '@angular/material/menu', '@angular/material/icon', '@angular/material/button', '@angular/material/expansion', '@angular/material/list', '@covalent/core/menu', '@ngx-translate/core', '@td-vantage/ui-platform/theme', '@angular/common/http', 'rxjs', '@td-vantage/ui-platform/common', '@covalent/http'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform']['app-switcher'] = {}), global.ng.core, global.ng.common, global.ng.material.divider, global.ng.material.menu, global.ng.material.icon, global.ng.material.button, global.ng.material.expansion, global.ng.material.list, global.covalent.core.menu, global['ngx-translate'].core, global['td-vantage']['ui-platform'].theme, global.ng.common.http, global.rxjs, global['td-vantage']['ui-platform'].common, global.covalent.http));
}(this, (function (exports, core, common, divider, menu, icon, button, expansion, list, menu$1, core$1, theme, http, rxjs, common$1, http$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAppSwitcherMenuComponent = /** @class */ (function () {
        function VantageAppSwitcherMenuComponent(elRef) {
            this.elRef = elRef;
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
        /**
         * @return {?}
         */
        VantageAppSwitcherMenuComponent.prototype.scrollToBottom = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var elem = _this.elRef.nativeElement.querySelector('.td-menu-content');
                elem.scrollTop = elem.scrollHeight;
            }));
        };
        VantageAppSwitcherMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-app-switcher-menu',
                        template: "<td-menu class=\"app-switcher-menu\">\n  <!--header-->\n  <div td-menu-header class=\"app-switcher-header\" (click)=\"_blockEvent($event)\">\n    <mat-icon class=\"logo-icon\" svgIcon=\"td-logo:logo-wordmark\"></mat-icon>\n    <div class=\"app-switcher-header-title\">{{ 'APP_SWITCHER.HEADER' | translate }}</div>\n  </div>\n  <!--content-->\n  <mat-action-list>\n    <ng-container *ngFor=\"let product of products; last as isLast\">\n      <a\n        *ngIf=\"product.newTab\"\n        mat-list-item\n        class=\"app-switcher-list-item text-nodecoration new-tab\"\n        target=\"_blank\"\n        [href]=\"product.href\"\n      >\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n        <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n      </a>\n      <a *ngIf=\"!product.newTab\" mat-list-item class=\"app-switcher-list-item text-nodecoration\" [href]=\"product.href\">\n        <mat-icon\n          matListAvatar\n          [class]=\"product.iconClasses\"\n          *ngIf=\"product.svgIcon; else iconTemplate\"\n          [svgIcon]=\"product.svgIcon\"\n        ></mat-icon>\n        <ng-template #iconTemplate>\n          <mat-icon matListAvatar [class]=\"product.iconClasses\">{{ product.icon || 'apps' }}</mat-icon>\n        </ng-template>\n        <span matLine>{{ product.text }}</span>\n      </a>\n      <mat-divider class=\"push-top-sm push-bottom-sm\" *ngIf=\"product.divider && !isLast\"></mat-divider>\n    </ng-container>\n  </mat-action-list>\n  <mat-divider class=\"push-top-sm\"></mat-divider>\n  <mat-expansion-panel\n    #expansionPanel\n    *ngIf=\"otherProducts?.length; else explorerMore\"\n    class=\"other-products\"\n    (afterExpand)=\"scrollToBottom()\"\n    (afterCollapse)=\"scrollToBottom()\"\n    (opened)=\"scrollToBottom()\"\n    (closed)=\"scrollToBottom()\"\n  >\n    <mat-expansion-panel-header\n      collapsedHeight=\"48px\"\n      expandedHeight=\"48px\"\n      class=\"other-products-header\"\n      (click)=\"_blockEvent($event)\"\n    >\n      <mat-panel-description>\n        {{ 'APP_SWITCHER.OTHER_PRODUCTS' | translate }}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-action-list [style.padding-top.px]=\"0\">\n      <ng-container *ngFor=\"let other of otherProducts\">\n        <a\n          *ngIf=\"other.newTab === undefined || other.newTab === true\"\n          mat-list-item\n          class=\"text-nodecoration new-tab\"\n          target=\"_blank\"\n          [href]=\"other.href\"\n        >\n          <span matLine>{{ other.text }}</span>\n          <mat-icon class=\"text-lg\" [style.margin-right.px]=\"0\">launch</mat-icon>\n        </a>\n        <a *ngIf=\"other.newTab === false\" mat-list-item class=\"text-nodecoration\" [href]=\"other.href\">\n          <span matLine>{{ other.text }}</span>\n        </a>\n      </ng-container>\n    </mat-action-list>\n    <ng-template [ngTemplateOutlet]=\"explorerMore\"></ng-template>\n  </mat-expansion-panel>\n  <ng-template #explorerMore>\n    <a mat-button class=\"explore-more\" color=\"accent\" [href]=\"exploreMoreLink\" target=\"_blank\">\n      {{ 'APP_SWITCHER.EXPLORE_MORE' | translate }}\n    </a>\n  </ng-template>\n</td-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".app-switcher-menu{min-width:256px}.app-switcher-menu .app-switcher-header[td-menu-header]{padding:24px 0}.app-switcher-menu .app-switcher-header[td-menu-header] .mat-icon[svgicon=\"td-logo:logo-wordmark\"]{height:24px;width:auto;margin-bottom:12px}.app-switcher-menu .app-switcher-list-item .mat-icon::ng-deep>svg{height:40px;width:40px}.app-switcher-menu .other-products{box-shadow:none;margin:8px 0}.app-switcher-menu .other-products .other-products-header{padding:0 16px}.app-switcher-menu .other-products ::ng-deep .mat-expansion-panel-body{padding:0}.app-switcher-menu .new-tab ::ng-deep .mat-list-item-content{padding-right:12px}.app-switcher-menu .explore-more{margin:6px 8px}.app-switcher-menu ::ng-deep .td-menu-content+.mat-divider{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        VantageAppSwitcherMenuComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        VantageAppSwitcherMenuComponent.propDecorators = {
            products: [{ type: core.Input }],
            otherProducts: [{ type: core.Input }],
            exploreMoreLink: [{ type: core.Input }],
            expansionPanel: [{ type: core.ViewChild, args: ['expansionPanel',] }]
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
    var VantageAppSwitcherComponent = /** @class */ (function () {
        function VantageAppSwitcherComponent(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        /**
         * @return {?}
         */
        VantageAppSwitcherComponent.prototype.menuClosed = /**
         * @return {?}
         */
        function () {
            this.appSwitcherMenu.expansionPanel.close();
            this._changeDetectorRef.detectChanges();
        };
        VantageAppSwitcherComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'vui-app-switcher',
                        template: "<button mat-icon-button [matMenuTriggerFor]=\"applicationMenu\">\n  <mat-icon>apps</mat-icon>\n</button>\n<mat-menu #applicationMenu=\"matMenu\" [overlapTrigger]=\"false\" (closed)=\"menuClosed()\">\n  <vui-app-switcher-menu\n    #appSwitcherMenu\n    [products]=\"products\"\n    [otherProducts]=\"otherProducts\"\n    [exploreMoreLink]=\"exploreMoreLink\"\n  ></vui-app-switcher-menu>\n</mat-menu>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        VantageAppSwitcherComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        VantageAppSwitcherComponent.propDecorators = {
            products: [{ type: core.Input }],
            otherProducts: [{ type: core.Input }],
            exploreMoreLink: [{ type: core.Input }],
            appSwitcherMenu: [{ type: core.ViewChild, args: ['appSwitcherMenu', { static: true },] }]
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
    var VantageProductsService = /** @class */ (function (_super) {
        __extends(VantageProductsService, _super);
        function VantageProductsService(_baseUrlOverride) {
            var _this = _super.call(this) || this;
            _this._baseUrlOverride = _baseUrlOverride;
            return _this;
        }
        Object.defineProperty(VantageProductsService.prototype, "basePath", {
            get: /**
             * @return {?}
             */
            function () {
                return this._baseUrlOverride;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VantageProductsService.prototype.get = /**
         * @return {?}
         */
        function () {
            return;
        };
        /**
         * @return {?}
         */
        VantageProductsService.prototype.getOther = /**
         * @return {?}
         */
        function () {
            return;
        };
        VantageProductsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        VantageProductsService.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common$1.VANTAGE_BASE_URL_TOKEN,] }] }
        ]; };
        /** @nocollapse */ VantageProductsService.ɵprov = core.ɵɵdefineInjectable({ factory: function VantageProductsService_Factory() { return new VantageProductsService(core.ɵɵinject(common$1.VANTAGE_BASE_URL_TOKEN, 8)); }, token: VantageProductsService, providedIn: "root" });
        __decorate([
            http$1.TdGET({
                path: '/products.json',
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageProductsService.prototype, "get", null);
        __decorate([
            http$1.TdGET({
                path: '/other-products.json',
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageProductsService.prototype, "getOther", null);
        return VantageProductsService;
    }(http$1.mixinHttp(/** @class */ (function () {
        function class_1() {
        }
        return class_1;
    }()), {
        baseUrl: '/assets',
        baseHeaders: new http.HttpHeaders({ Accept: 'application/json' }),
    })));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageProductsService.prototype._baseUrlOverride;
    }

    exports.VantageAppSwitcherComponent = VantageAppSwitcherComponent;
    exports.VantageAppSwitcherMenuComponent = VantageAppSwitcherMenuComponent;
    exports.VantageAppSwitcherModule = VantageAppSwitcherModule;
    exports.VantageProductsService = VantageProductsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-app-switcher.umd.js.map
