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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hc3NldHMvIiwic291cmNlcyI6WyJhc3NldHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJdEMsaUNBSUM7QUFFRDtJQUMwQyx3Q0FLeEM7SUFORjs7SUEwQkEsQ0FBQztJQW5CQzs7T0FFRzs7Ozs7O0lBT0gsMENBQVc7Ozs7O0lBQVgsVUFBMEIsUUFBd0M7UUFDaEUsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQThCO1lBQ2pDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFVBQVU7O0lBZ0JUO1FBTkMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBQ1csV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBQVksVUFBVTt3Q0FBc0IsVUFBVTsyREFTOUU7SUFDSCwyQkFBQztDQUFBLEFBMUJELENBQzBDLFNBQVM7SUFBQztJQUFPLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUFSLEtBQVU7SUFDNUQsT0FBTyxFQUFFLFlBQVk7SUFDckIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0IsQ0FBQztDQUNILENBQUMsR0FvQkQ7U0F6Qlksb0JBQW9COzs7OztBQTJCakMsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRSZXNwb25zZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElNZW51SXRlbSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2R5bmFtaWMtbWVudSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhlbHBBc3NldHMge1xuICBbbmFtZTogc3RyaW5nXToge1xuICAgIGxpbmtzOiBJTWVudUl0ZW1bXTtcbiAgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBc3NldHNTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvdWktYXNzZXRzJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSkge1xuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGhlbHAgSlNPTiBkZWZpbml0aW9uIGFzc2V0XG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvanNvbi9oZWxwL2hlbHAuanNvbicsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBnZXRIZWxwSlNPTihAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPElIZWxwQXNzZXRzPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJSGVscEFzc2V0cz4pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9BU1NFVFNfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VBc3NldHNTZXJ2aWNlKTogVmFudGFnZUFzc2V0c1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQXNzZXRzU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9BU1NFVFNfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXNzZXRzU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VBc3NldHNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfQVNTRVRTX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19