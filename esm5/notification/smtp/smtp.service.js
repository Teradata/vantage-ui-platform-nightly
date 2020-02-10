/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPUT, TdDELETE, TdBody, TdResponse } from '@covalent/http';
/**
 * @record
 */
export function ISMTPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.port;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.reply_address;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_username;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_password;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.use_ssl;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.anon_logon;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server_timeout;
}
var VantageSMTPService = /** @class */ (function (_super) {
    __extends(VantageSMTPService, _super);
    function VantageSMTPService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.create = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.query = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.delete = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.health = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return !!res;
        })));
    };
    VantageSMTPService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdPUT({
            path: '/smtp-config',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "create", null);
    __decorate([
        TdGET({
            path: '/smtp-config',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "query", null);
    __decorate([
        TdDELETE({
            path: '/smtp-config',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "delete", null);
    __decorate([
        TdGET({
            path: '/health',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "health", null);
    return VantageSMTPService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/notification',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
export { VantageSMTPService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_SMTP_PROVIDER_FACTORY(parent) {
    return parent || new VantageSMTPService();
}
/** @type {?} */
export var VANTAGE_SMTP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSMTPService,
    deps: [[new Optional(), new SkipSelf(), VantageSMTPService]],
    useFactory: VANTAGE_SMTP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic210cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic210cC9zbXRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXZGLGlDQVNDOzs7SUFSQyw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLDhCQUFrQjs7SUFDbEIsaUNBQXFCOztJQUNyQixxQ0FBd0I7O0FBRzFCO0lBQ3dDLHNDQUd0QztJQUpGOztJQXVDQSxDQUFDOzs7Ozs7SUEvQkMsbUNBQU07Ozs7O0lBQU4sVUFBaUIsSUFBaUIsRUFBZ0IsUUFBa0M7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxrQ0FBSzs7OztJQUFMLFVBQW9CLFFBQWtDO1FBQ3BELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsbUNBQU07Ozs7SUFBTixVQUFxQixRQUEyQjtRQUM5QyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUtELG1DQUFNOzs7O0lBQU4sVUFBcUIsUUFBd0M7UUFDM0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNsQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxHQUFzQjtZQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdENGLFVBQVU7O0lBUVQ7UUFIQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFxQixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUFnQixVQUFVO29EQUVoRztJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQztRQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQWdCLFVBQVU7bURBRWxFO0lBS0Q7UUFIQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBQ00sV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBQVksVUFBVTt3Q0FBUyxVQUFVO29EQUU1RDtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQXNCLFVBQVU7b0RBU3pFO0lBQ0gseUJBQUM7Q0FBQSxBQXZDRCxDQUN3QyxTQUFTO0lBQUM7SUFBTyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBUixLQUFVO0lBQzFELE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDN0QsQ0FBQyxHQW1DRDtTQXRDWSxrQkFBa0I7Ozs7O0FBd0MvQixNQUFNLFVBQVUsNkJBQTZCLENBQUMsTUFBMEI7SUFDdEUsT0FBTyxNQUFNLElBQUksSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQzVDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUFhOztJQUU3QyxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDNUQsVUFBVSxFQUFFLDZCQUE2QjtDQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkR0VULCBUZFBVVCwgVGRERUxFVEUsIFRkQm9keSwgVGRSZXNwb25zZSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJU01UUENvbmZpZyB7XG4gIHNlcnZlcj86IHN0cmluZztcbiAgcG9ydD86IG51bWJlcjtcbiAgcmVwbHlfYWRkcmVzcz86IHN0cmluZztcbiAgc210cF91c2VybmFtZT86IHN0cmluZztcbiAgc210cF9wYXNzd29yZD86IHN0cmluZztcbiAgdXNlX3NzbD86IGJvb2xlYW47XG4gIGFub25fbG9nb24/OiBib29sZWFuO1xuICBzZXJ2ZXJfdGltZW91dD86IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTTVRQU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2FwaS9ub3RpZmljYXRpb24nLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIEBUZFBVVCh7XG4gICAgcGF0aDogJy9zbXRwLWNvbmZpZycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgYm9keTogSVNNVFBDb25maWcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPik6IE9ic2VydmFibGU8SVNNVFBDb25maWc+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvc210cC1jb25maWcnLFxuICB9KVxuICBxdWVyeShAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4pOiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TTVRQX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU01UUFNlcnZpY2UpOiBWYW50YWdlU01UUFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU01UUFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU01UUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTTVRQU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTTVRQU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NNVFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=