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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FTQzs7O0lBUkMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsOENBQXFCOztJQUNyQix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFDdkIsMENBQWtCOztBQUdwQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxEO0lBRzRDLDBDQUcxQztJQUtBLGdDQUFnRSxnQkFBeUI7UUFBekYsWUFDRSxpQkFBTyxTQUNSO1FBRitELHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUzs7SUFFekYsQ0FBQztJQU5ELHNCQUFJLDRDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTs7OztJQVNELG9DQUFHOzs7SUFBSDtRQUNFLE9BQU87SUFDVCxDQUFDOzs7O0lBS0QseUNBQVE7OztJQUFSO1FBQ0UsT0FBTztJQUNULENBQUM7O2dCQTNCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzZDQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOzs7SUFPdEQ7UUFIQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsZ0JBQWdCO1NBQ3ZCLENBQUM7Ozt3Q0FDSyxVQUFVO3FEQUVoQjtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLHNCQUFzQjtTQUM3QixDQUFDOzs7d0NBQ1UsVUFBVTswREFFckI7aUNBL0NIO0NBZ0RDLEFBNUJELENBRzRDLFNBQVM7SUFBQztJQUFPLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUFSLEtBQVU7SUFDOUQsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDN0QsQ0FBQyxHQXNCRDtTQXpCWSxzQkFBc0I7Ozs7OztJQVFyQixrREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWQU5UQUdFX0JBU0VfVVJMX1RPS0VOIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB7XG4gIGlkPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHN2Z0ljb24/OiBzdHJpbmc7XG4gIGljb25DbGFzc2VzPzogc3RyaW5nW107XG4gIGRpdmlkZXI/OiBib29sZWFuO1xufVxuXG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkR0VUIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVByb2R1Y3RzU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2Fzc2V0cycsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgZ2V0IGJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VVcmxPdmVycmlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoVkFOVEFHRV9CQVNFX1VSTF9UT0tFTikgcHJpdmF0ZSBfYmFzZVVybE92ZXJyaWRlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9wcm9kdWN0cy5qc29uJyxcbiAgfSlcbiAgZ2V0KCk6IE9ic2VydmFibGU8SVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9vdGhlci1wcm9kdWN0cy5qc29uJyxcbiAgfSlcbiAgZ2V0T3RoZXIoKTogT2JzZXJ2YWJsZTxJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=