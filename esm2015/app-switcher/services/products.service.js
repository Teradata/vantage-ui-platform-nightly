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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FTQzs7O0lBUkMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsOENBQXFCOztJQUNyQix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFDdkIsMENBQWtCOztBQUdwQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2xELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxTQUFTLENBQUM7Q0FBUSxFQUFFO0lBQzlELE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUM7Ozs7SUFLQSxZQUFnRSxnQkFBeUI7UUFDdkYsS0FBSyxFQUFFLENBQUM7UUFEc0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO0lBRXpGLENBQUM7Ozs7SUFORCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBU0QsR0FBRztRQUNELE9BQU87SUFDVCxDQUFDOzs7O0lBS0QsUUFBUTtRQUNOLE9BQU87SUFDVCxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O3lDQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOzs7QUFPdEQ7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCLENBQUM7OztvQ0FDSyxVQUFVO2lEQUVoQjtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLHNCQUFzQjtLQUM3QixDQUFDOzs7b0NBQ1UsVUFBVTtzREFFckI7Ozs7OztJQWhCVyxrREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWQU5UQUdFX0JBU0VfVVJMX1RPS0VOIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB7XG4gIGlkPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIHN2Z0ljb24/OiBzdHJpbmc7XG4gIGljb25DbGFzc2VzPzogc3RyaW5nW107XG4gIGRpdmlkZXI/OiBib29sZWFuO1xufVxuXG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkR0VUIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVByb2R1Y3RzU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2Fzc2V0cycsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgZ2V0IGJhc2VQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VVcmxPdmVycmlkZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoVkFOVEFHRV9CQVNFX1VSTF9UT0tFTikgcHJpdmF0ZSBfYmFzZVVybE92ZXJyaWRlPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9wcm9kdWN0cy5qc29uJyxcbiAgfSlcbiAgZ2V0KCk6IE9ic2VydmFibGU8SVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW1bXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9vdGhlci1wcm9kdWN0cy5qc29uJyxcbiAgfSlcbiAgZ2V0T3RoZXIoKTogT2JzZXJ2YWJsZTxJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=