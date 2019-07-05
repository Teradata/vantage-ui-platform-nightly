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
let VantageSMTPService = class VantageSMTPService {
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    query(response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    delete(response) {
        return response;
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    health(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return !!res;
        })));
    }
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
export { VantageSMTPService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_SMTP_PROVIDER_FACTORY(parent) {
    return parent || new VantageSMTPService();
}
/** @type {?} */
export const VANTAGE_SMTP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSMTPService,
    deps: [[new Optional(), new SkipSelf(), VantageSMTPService]],
    useFactory: VANTAGE_SMTP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic210cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZhbnRhZ2UvdWktcGxhdGZvcm0vbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic210cC9zbXRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEIsaUNBU0M7OztJQVJDLDZCQUFnQjs7SUFDaEIsMkJBQWM7O0lBQ2Qsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLG9DQUF1Qjs7SUFDdkIsOEJBQWtCOztJQUNsQixpQ0FBcUI7O0lBQ3JCLHFDQUF3Qjs7SUFPYixrQkFBa0IsU0FBbEIsa0JBQWtCOzs7Ozs7SUFLN0IsTUFBTSxDQUFXLElBQWlCLEVBQ2IsUUFBa0M7UUFFckQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxLQUFLLENBQWUsUUFBa0M7UUFDcEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxNQUFNLENBQWUsUUFBMkI7UUFDOUMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxNQUFNLENBQWUsUUFBd0M7UUFDM0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdEMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWpDQztJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUM7SUFDTSxtQkFBQSxNQUFNLEVBQUUsQ0FBQTtJQUNSLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVOzRDQUNqQyxVQUFVO2dEQUVsQjtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUNLLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVOzRDQUFnQixVQUFVOytDQUVsRTtBQUtEO0lBSEMsUUFBUSxDQUFDO1FBQ1IsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUNNLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVOzRDQUFTLFVBQVU7Z0RBRTVEO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0lBQ00sbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7NENBQXNCLFVBQVU7Z0RBU3pFO0FBckNVLGtCQUFrQjtJQUo5QixNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQy9ELENBQUM7R0FDVyxrQkFBa0IsQ0FzQzlCO1NBdENZLGtCQUFrQjs7Ozs7QUF3Qy9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFRkSHR0cCxcbiAgVGRHRVQsXG4gIFRkUFVULFxuICBUZERFTEVURSxcbiAgVGRCb2R5LFxuICBUZFJlc3BvbnNlLFxufSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNNVFBDb25maWcge1xuICBzZXJ2ZXI/OiBzdHJpbmc7XG4gIHBvcnQ/OiBudW1iZXI7XG4gIHJlcGx5X2FkZHJlc3M/OiBzdHJpbmc7XG4gIHNtdHBfdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHNtdHBfcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHVzZV9zc2w/OiBib29sZWFuO1xuICBhbm9uX2xvZ29uPzogYm9vbGVhbjtcbiAgc2VydmVyX3RpbWVvdXQ/OiBudW1iZXI7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9ub3RpZmljYXRpb24nLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVNNVFBTZXJ2aWNlIHtcblxuICBAVGRQVVQoe1xuICAgIHBhdGg6ICcvc210cC1jb25maWcnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElTTVRQQ29uZmlnLFxuICAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+LFxuICAgICAgICApOiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgcXVlcnkoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+KTogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuICBcbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TTVRQX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU01UUFNlcnZpY2UpOiBWYW50YWdlU01UUFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU01UUFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU01UUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTTVRQU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTTVRQU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NNVFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=