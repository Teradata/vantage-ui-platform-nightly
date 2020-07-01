/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata } from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VANTAGE_BASE_URL_TOKEN } from '@td-vantage/ui-platform/common';
import * as i0 from "@angular/core";
import * as i1 from "@td-vantage/ui-platform/common";
/**
 * @record
 */
export function IVantageAppSwitcherItem() { }
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
import { mixinHttp, TdGET } from '@covalent/http';
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    VantageProductsService.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [VANTAGE_BASE_URL_TOKEN,] }] }
    ]; };
    /** @nocollapse */ VantageProductsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VantageProductsService_Factory() { return new VantageProductsService(i0.ɵɵinject(i1.VANTAGE_BASE_URL_TOKEN, 8)); }, token: VantageProductsService, providedIn: "root" });
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
    return VantageProductsService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/assets',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
export { VantageProductsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageProductsService.prototype._baseUrlOverride;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FVQzs7O0lBVEMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsOENBQXFCOztJQUNyQix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFDdkIsMENBQWtCOztJQUNsQix5Q0FBaUI7O0FBR25CLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQ7SUFHNEMsMENBRzFDO0lBS0EsZ0NBQWdFLGdCQUF5QjtRQUF6RixZQUNFLGlCQUFPLFNBQ1I7UUFGK0Qsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFTOztJQUV6RixDQUFDO0lBTkQsc0JBQUksNENBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBOzs7O0lBU0Qsb0NBQUc7OztJQUFIO1FBQ0UsT0FBTztJQUNULENBQUM7Ozs7SUFLRCx5Q0FBUTs7O0lBQVI7UUFDRSxPQUFPO0lBQ1QsQ0FBQzs7Z0JBM0JGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7NkNBU2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7OztJQU90RDtRQUhDLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxnQkFBZ0I7U0FDdkIsQ0FBQzs7O3dDQUNLLFVBQVU7cURBRWhCO0lBS0Q7UUFIQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsc0JBQXNCO1NBQzdCLENBQUM7Ozt3Q0FDVSxVQUFVOzBEQUVyQjtpQ0FoREg7Q0FpREMsQUE1QkQsQ0FHNEMsU0FBUztJQUFDO0lBQU8sQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBQVIsS0FBVTtJQUM5RCxPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDLEdBc0JEO1NBekJZLHNCQUFzQjs7Ozs7O0lBUXJCLGtEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZBTlRBR0VfQkFTRV9VUkxfVE9LRU4gfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgc3ZnSWNvbj86IHN0cmluZztcbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgZGl2aWRlcj86IGJvb2xlYW47XG4gIG5ld1RhYj86IGJvb2xlYW47XG59XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlUHJvZHVjdHNTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXNzZXRzJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSkge1xuICBnZXQgYmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVVybE92ZXJyaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChWQU5UQUdFX0JBU0VfVVJMX1RPS0VOKSBwcml2YXRlIF9iYXNlVXJsT3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3Byb2R1Y3RzLmpzb24nLFxuICB9KVxuICBnZXQoKTogT2JzZXJ2YWJsZTxJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL290aGVyLXByb2R1Y3RzLmpzb24nLFxuICB9KVxuICBnZXRPdGhlcigpOiBPYnNlcnZhYmxlPElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==