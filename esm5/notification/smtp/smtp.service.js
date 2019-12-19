/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPUT, TdDELETE, TdBody, TdResponse } from '@covalent/http';
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
    VantageSMTPService = __decorate([
        TdHttp({
            baseUrl: '/api/notification',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic210cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic210cC9zbXRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFcEYsaUNBU0M7OztJQVJDLDZCQUFnQjs7SUFDaEIsMkJBQWM7O0lBQ2Qsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLG9DQUF1Qjs7SUFDdkIsOEJBQWtCOztJQUNsQixpQ0FBcUI7O0lBQ3JCLHFDQUF3Qjs7OztJQTBDMUIsQ0FBQzs7Ozs7O0lBL0JDLG1DQUFNOzs7OztJQUFOLFVBQWlCLElBQWlCLEVBQWdCLFFBQWtDO1FBQ2xGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0Qsa0NBQUs7Ozs7SUFBTCxVQUFvQixRQUFrQztRQUNwRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUtELG1DQUFNOzs7O0lBQU4sVUFBcUIsUUFBMkI7UUFDOUMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxtQ0FBTTs7OztJQUFOLFVBQXFCLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbEMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBc0I7WUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUE5QkQ7UUFIQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFxQixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUFnQixVQUFVO29EQUVoRztJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQztRQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQWdCLFVBQVU7bURBRWxFO0lBS0Q7UUFIQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBQ00sV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBQVksVUFBVTt3Q0FBUyxVQUFVO29EQUU1RDtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQXNCLFVBQVU7b0RBU3pFO0lBbENVLGtCQUFrQjtRQUo5QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FDVyxrQkFBa0IsQ0FtQzlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBbkNZLGtCQUFrQjs7Ozs7QUFxQy9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUFVULCBUZERFTEVURSwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTTVRQQ29uZmlnIHtcbiAgc2VydmVyPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICByZXBseV9hZGRyZXNzPzogc3RyaW5nO1xuICBzbXRwX3VzZXJuYW1lPzogc3RyaW5nO1xuICBzbXRwX3Bhc3N3b3JkPzogc3RyaW5nO1xuICB1c2Vfc3NsPzogYm9vbGVhbjtcbiAgYW5vbl9sb2dvbj86IGJvb2xlYW47XG4gIHNlcnZlcl90aW1lb3V0PzogbnVtYmVyO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvbm90aWZpY2F0aW9uJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU01UUFNlcnZpY2Uge1xuICBAVGRQVVQoe1xuICAgIHBhdGg6ICcvc210cC1jb25maWcnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElTTVRQQ29uZmlnLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4pOiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgcXVlcnkoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+KTogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9zbXRwLWNvbmZpZycsXG4gIH0pXG4gIGRlbGV0ZShAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9oZWFsdGgnLFxuICB9KVxuICBoZWFsdGgoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiAhIXJlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfU01UUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVNNVFBTZXJ2aWNlKTogVmFudGFnZVNNVFBTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVNNVFBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NNVFBfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU01UUFNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU01UUFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TTVRQX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19