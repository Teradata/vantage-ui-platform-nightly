/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
export class VantageProductsService extends mixinHttp(class {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageProductsService.prototype._baseUrlOverride;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FVQzs7O0lBVEMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsOENBQXFCOztJQUNyQix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFDdkIsMENBQWtCOztJQUNsQix5Q0FBaUI7O0FBR25CLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLbEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFNBQVMsQ0FBQztDQUFRLEVBQUU7SUFDOUQsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDN0QsQ0FBQzs7OztJQUtBLFlBQWdFLGdCQUF5QjtRQUN2RixLQUFLLEVBQUUsQ0FBQztRQURzRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVM7SUFFekYsQ0FBQzs7OztJQU5ELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7SUFTRCxHQUFHO1FBQ0QsT0FBTztJQUNULENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sT0FBTztJQUNULENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7eUNBU2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7OztBQU90RDtJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxnQkFBZ0I7S0FDdkIsQ0FBQzs7O29DQUNLLFVBQVU7aURBRWhCO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsc0JBQXNCO0tBQzdCLENBQUM7OztvQ0FDVSxVQUFVO3NEQUVyQjs7Ozs7O0lBaEJXLGtEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZBTlRBR0VfQkFTRV9VUkxfVE9LRU4gfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgc3ZnSWNvbj86IHN0cmluZztcbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgZGl2aWRlcj86IGJvb2xlYW47XG4gIG5ld1RhYj86IGJvb2xlYW47XG59XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlUHJvZHVjdHNTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXNzZXRzJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSkge1xuICBnZXQgYmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVVybE92ZXJyaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChWQU5UQUdFX0JBU0VfVVJMX1RPS0VOKSBwcml2YXRlIF9iYXNlVXJsT3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3Byb2R1Y3RzLmpzb24nLFxuICB9KVxuICBnZXQoKTogT2JzZXJ2YWJsZTxJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL290aGVyLXByb2R1Y3RzLmpzb24nLFxuICB9KVxuICBnZXRPdGhlcigpOiBPYnNlcnZhYmxlPElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==