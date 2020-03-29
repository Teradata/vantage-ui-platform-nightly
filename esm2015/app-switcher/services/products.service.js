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
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageProductsService.prototype._baseUrlOverride;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FRQzs7O0lBUEMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsdUNBQWE7O0lBQ2IsdUNBQWM7O0lBQ2QsMENBQWlCOztJQUNqQiw4Q0FBdUI7O0lBQ3ZCLDBDQUFrQjs7QUFHcEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtsRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUM5RCxPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDOzs7O0lBS0EsWUFBZ0UsZ0JBQXlCO1FBQ3ZGLEtBQUssRUFBRSxDQUFDO1FBRHNELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUztJQUV6RixDQUFDOzs7O0lBTkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7OztJQVNELEdBQUc7UUFDRCxPQUFPO0lBQ1QsQ0FBQzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozt5Q0FTYyxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs7O0FBT3REO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGdCQUFnQjtLQUN2QixDQUFDOzs7b0NBQ0ssVUFBVTtpREFFaEI7Ozs7OztJQVRXLGtEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFZBTlRBR0VfQkFTRV9VUkxfVE9LRU4gfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9jb21tb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYW50YWdlQXBwU3dpdGNoZXJJdGVtIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBzdmdJY29uPzogc3RyaW5nO1xuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdO1xuICBkaXZpZGVyPzogYm9vbGVhbjtcbn1cblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VQcm9kdWN0c1NlcnZpY2UgZXh0ZW5kcyBtaXhpbkh0dHAoY2xhc3Mge30sIHtcbiAgYmFzZVVybDogJy9hc3NldHMnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIGdldCBiYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iYXNlVXJsT3ZlcnJpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFZBTlRBR0VfQkFTRV9VUkxfVE9LRU4pIHByaXZhdGUgX2Jhc2VVcmxPdmVycmlkZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvcHJvZHVjdHMuanNvbicsXG4gIH0pXG4gIGdldCgpOiBPYnNlcnZhYmxlPElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==