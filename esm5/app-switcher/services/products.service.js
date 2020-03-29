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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2R1Y3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7OztBQUV4RSw2Q0FRQzs7O0lBUEMscUNBQVk7O0lBQ1osdUNBQWE7O0lBQ2IsdUNBQWE7O0lBQ2IsdUNBQWM7O0lBQ2QsMENBQWlCOztJQUNqQiw4Q0FBdUI7O0lBQ3ZCLDBDQUFrQjs7QUFHcEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRDtJQUc0QywwQ0FHMUM7SUFLQSxnQ0FBZ0UsZ0JBQXlCO1FBQXpGLFlBQ0UsaUJBQU8sU0FDUjtRQUYrRCxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVM7O0lBRXpGLENBQUM7SUFORCxzQkFBSSw0Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7Ozs7SUFTRCxvQ0FBRzs7O0lBQUg7UUFDRSxPQUFPO0lBQ1QsQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7NkNBU2MsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7OztJQU90RDtRQUhDLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxnQkFBZ0I7U0FDdkIsQ0FBQzs7O3dDQUNLLFVBQVU7cURBRWhCO2lDQXZDSDtDQXdDQyxBQXJCRCxDQUc0QyxTQUFTO0lBQUM7SUFBTyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBUixLQUFVO0lBQzlELE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUMsR0FlRDtTQWxCWSxzQkFBc0I7Ozs7OztJQVFyQixrREFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBWQU5UQUdFX0JBU0VfVVJMX1RPS0VOIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vY29tbW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBJVmFudGFnZUFwcFN3aXRjaGVySXRlbSB7XG4gIGlkPzogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgc3ZnSWNvbj86IHN0cmluZztcbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgZGl2aWRlcj86IGJvb2xlYW47XG59XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlUHJvZHVjdHNTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXNzZXRzJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSkge1xuICBnZXQgYmFzZVBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVVybE92ZXJyaWRlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChWQU5UQUdFX0JBU0VfVVJMX1RPS0VOKSBwcml2YXRlIF9iYXNlVXJsT3ZlcnJpZGU/OiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3Byb2R1Y3RzLmpzb24nLFxuICB9KVxuICBnZXQoKTogT2JzZXJ2YWJsZTxJVmFudGFnZUFwcFN3aXRjaGVySXRlbVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=