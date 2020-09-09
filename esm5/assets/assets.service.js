/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { map, catchError } from 'rxjs/operators';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { mixinHttp, TdGET, TdResponse } from '@covalent/http';
import { Observable, of } from 'rxjs';
/**
 * @record
 */
export function IHelpAssets() { }
var VantageAssetsService = /** @class */ (function (_super) {
    __extends(VantageAssetsService, _super);
    function VantageAssetsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve the help JSON definition asset
     */
    /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    VantageAssetsService.prototype.getHelpJSON = /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.body;
        })));
    };
    VantageAssetsService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/json/help/help.json',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAssetsService.prototype, "getHelpJSON", null);
    return VantageAssetsService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/ui-assets',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
export { VantageAssetsService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_ASSETS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAssetsService();
}
/** @type {?} */
export var VANTAGE_ASSETS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAssetsService,
    deps: [[new Optional(), new SkipSelf(), VantageAssetsService]],
    useFactory: VANTAGE_ASSETS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hc3NldHMvIiwic291cmNlcyI6WyJhc3NldHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJdEMsaUNBS0M7QUFFRDtJQUMwQyx3Q0FLeEM7SUFORjs7SUEwQkEsQ0FBQztJQW5CQzs7T0FFRzs7Ozs7O0lBT0gsMENBQVc7Ozs7O0lBQVgsVUFBMEIsUUFBd0M7UUFDaEUsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQThCO1lBQ2pDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFVBQVU7O0lBZ0JUO1FBTkMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBQ1csV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBQVksVUFBVTt3Q0FBc0IsVUFBVTsyREFTOUU7SUFDSCwyQkFBQztDQUFBLEFBMUJELENBQzBDLFNBQVM7SUFBQztJQUFPLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUFSLEtBQVU7SUFDNUQsT0FBTyxFQUFFLFlBQVk7SUFDckIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0IsQ0FBQztDQUNILENBQUMsR0FvQkQ7U0F6Qlksb0JBQW9COzs7OztBQTJCakMsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRSZXNwb25zZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElNZW51SXRlbSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhlbHBBc3NldHMge1xuICBbbmFtZTogc3RyaW5nXToge1xuICAgIGxpbmtzOiBJTWVudUl0ZW1bXTtcbiAgICBsZWFybj86IElNZW51SXRlbVtdO1xuICB9O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUFzc2V0c1NlcnZpY2UgZXh0ZW5kcyBtaXhpbkh0dHAoY2xhc3Mge30sIHtcbiAgYmFzZVVybDogJy91aS1hc3NldHMnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSksXG59KSB7XG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgaGVscCBKU09OIGRlZmluaXRpb24gYXNzZXRcbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9qc29uL2hlbHAvaGVscC5qc29uJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIGdldEhlbHBKU09OKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8SUhlbHBBc3NldHM+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElIZWxwQXNzZXRzPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FTU0VUU19QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUFzc2V0c1NlcnZpY2UpOiBWYW50YWdlQXNzZXRzU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBc3NldHNTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FTU0VUU19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VBc3NldHNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFzc2V0c1NlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BU1NFVFNfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=