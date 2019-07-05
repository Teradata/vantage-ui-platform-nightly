/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPUT, TdDELETE, TdBody, TdResponse, } from '@covalent/http';
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
var VantageSMTPService = /** @class */ (function () {
    function VantageSMTPService() {
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
    tslib_1.__decorate([
        TdPUT({
            path: '/smtp-config',
        }),
        tslib_1.__param(0, TdBody()),
        tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "create", null);
    tslib_1.__decorate([
        TdGET({
            path: '/smtp-config',
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "query", null);
    tslib_1.__decorate([
        TdDELETE({
            path: '/smtp-config',
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "delete", null);
    tslib_1.__decorate([
        TdGET({
            path: '/health',
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "health", null);
    VantageSMTPService = tslib_1.__decorate([
        TdHttp({
            baseUrl: '/api/notification',
            baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
        })
    ], VantageSMTPService);
    return VantageSMTPService;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic210cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic210cC9zbXRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEIsaUNBU0M7OztJQVJDLDZCQUFnQjs7SUFDaEIsMkJBQWM7O0lBQ2Qsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLG9DQUF1Qjs7SUFDdkIsOEJBQWtCOztJQUNsQixpQ0FBcUI7O0lBQ3JCLHFDQUF3Qjs7OztJQTZDMUIsQ0FBQzs7Ozs7O0lBakNDLG1DQUFNOzs7OztJQUFOLFVBQWlCLElBQWlCLEVBQ2IsUUFBa0M7UUFFckQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxrQ0FBSzs7OztJQUFMLFVBQW9CLFFBQWtDO1FBQ3BELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsbUNBQU07Ozs7SUFBTixVQUFxQixRQUEyQjtRQUM5QyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUtELG1DQUFNOzs7O0lBQU4sVUFBcUIsUUFBd0M7UUFDM0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNsQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxHQUFzQjtZQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQWhDRDtRQUhDLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7UUFDTSxtQkFBQSxNQUFNLEVBQUUsQ0FBQTtRQUNSLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzt5REFBWSxVQUFVO2dEQUNqQyxVQUFVO29EQUVsQjtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQztRQUNLLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO2dEQUFnQixVQUFVO21EQUVsRTtJQUtEO1FBSEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQztRQUNNLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO2dEQUFTLFVBQVU7b0RBRTVEO0lBS0Q7UUFIQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO1FBQ00sbUJBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7Z0RBQXNCLFVBQVU7b0RBU3pFO0lBckNVLGtCQUFrQjtRQUo5QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQy9ELENBQUM7T0FDVyxrQkFBa0IsQ0FzQzlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBdENZLGtCQUFrQjs7Ozs7QUF3Qy9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFRkSHR0cCxcbiAgVGRHRVQsXG4gIFRkUFVULFxuICBUZERFTEVURSxcbiAgVGRCb2R5LFxuICBUZFJlc3BvbnNlLFxufSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNNVFBDb25maWcge1xuICBzZXJ2ZXI/OiBzdHJpbmc7XG4gIHBvcnQ/OiBudW1iZXI7XG4gIHJlcGx5X2FkZHJlc3M/OiBzdHJpbmc7XG4gIHNtdHBfdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHNtdHBfcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHVzZV9zc2w/OiBib29sZWFuO1xuICBhbm9uX2xvZ29uPzogYm9vbGVhbjtcbiAgc2VydmVyX3RpbWVvdXQ/OiBudW1iZXI7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9ub3RpZmljYXRpb24nLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVNNVFBTZXJ2aWNlIHtcblxuICBAVGRQVVQoe1xuICAgIHBhdGg6ICcvc210cC1jb25maWcnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElTTVRQQ29uZmlnLFxuICAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+LFxuICAgICAgICApOiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgcXVlcnkoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+KTogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICBcbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TTVRQX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU01UUFNlcnZpY2UpOiBWYW50YWdlU01UUFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU01UUFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU01UUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTTVRQU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTTVRQU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NNVFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=