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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FTQzs7O0lBUkMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsOENBQXFCOztJQUNyQix1Q0FBYTs7SUFDYix1Q0FBYzs7SUFDZCwwQ0FBaUI7O0lBQ2pCLDhDQUF1Qjs7SUFDdkIsMENBQWtCOztBQUdwQixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2xELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxTQUFTLENBQUM7Q0FBUSxFQUFFO0lBQzlELE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUM7Ozs7SUFLQSxZQUFnRSxnQkFBeUI7UUFDdkYsS0FBSyxFQUFFLENBQUM7UUFEc0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO0lBRXpGLENBQUM7Ozs7SUFORCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDOzs7O0lBU0QsR0FBRztRQUNELE9BQU87SUFDVCxDQUFDOzs7WUFwQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O3lDQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOzs7QUFPdEQ7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCLENBQUM7OztvQ0FDSyxVQUFVO2lEQUVoQjs7Ozs7O0lBVFcsa0RBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVkFOVEFHRV9CQVNFX1VSTF9UT0tFTiB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2NvbW1vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhbnRhZ2VBcHBTd2l0Y2hlckl0ZW0ge1xuICBpZD86IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBzdmdJY29uPzogc3RyaW5nO1xuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdO1xuICBkaXZpZGVyPzogYm9vbGVhbjtcbn1cblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VQcm9kdWN0c1NlcnZpY2UgZXh0ZW5kcyBtaXhpbkh0dHAoY2xhc3Mge30sIHtcbiAgYmFzZVVybDogJy9hc3NldHMnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIGdldCBiYXNlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iYXNlVXJsT3ZlcnJpZGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KFZBTlRBR0VfQkFTRV9VUkxfVE9LRU4pIHByaXZhdGUgX2Jhc2VVcmxPdmVycmlkZT86IHN0cmluZykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvcHJvZHVjdHMuanNvbicsXG4gIH0pXG4gIGdldCgpOiBPYnNlcnZhYmxlPElWYW50YWdlQXBwU3dpdGNoZXJJdGVtW10+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==