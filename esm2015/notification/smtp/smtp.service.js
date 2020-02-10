/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
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
export class VantageSMTPService extends mixinHttp(class {
}, {
    baseUrl: '/api/notification',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic210cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vbm90aWZpY2F0aW9uLyIsInNvdXJjZXMiOlsic210cC9zbXRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXZGLGlDQVNDOzs7SUFSQyw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLG9DQUF1Qjs7SUFDdkIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLDhCQUFrQjs7SUFDbEIsaUNBQXFCOztJQUNyQixxQ0FBd0I7O0FBSTFCLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxTQUFTLENBQUM7Q0FBUSxFQUFFO0lBQzFELE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDN0QsQ0FBQzs7Ozs7O0lBSUEsTUFBTSxDQUFXLElBQWlCLEVBQWdCLFFBQWtDO1FBQ2xGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsS0FBSyxDQUFlLFFBQWtDO1FBQ3BELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsTUFBTSxDQUFlLFFBQTJCO1FBQzlDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsTUFBTSxDQUFlLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdENGLFVBQVU7O0FBUVQ7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFxQixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFnQixVQUFVO2dEQUVoRztBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FDQUFZLFVBQVU7b0NBQWdCLFVBQVU7K0NBRWxFO0FBS0Q7SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ00sV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBUyxVQUFVO2dEQUU1RDtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQztJQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FDQUFZLFVBQVU7b0NBQXNCLFVBQVU7Z0RBU3pFOzs7OztBQUdILE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQsIFRkUFVULCBUZERFTEVURSwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTTVRQQ29uZmlnIHtcbiAgc2VydmVyPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICByZXBseV9hZGRyZXNzPzogc3RyaW5nO1xuICBzbXRwX3VzZXJuYW1lPzogc3RyaW5nO1xuICBzbXRwX3Bhc3N3b3JkPzogc3RyaW5nO1xuICB1c2Vfc3NsPzogYm9vbGVhbjtcbiAgYW5vbl9sb2dvbj86IGJvb2xlYW47XG4gIHNlcnZlcl90aW1lb3V0PzogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVNNVFBTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL25vdGlmaWNhdGlvbicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkUFVUKHtcbiAgICBwYXRoOiAnL3NtdHAtY29uZmlnJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJU01UUENvbmZpZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVNNVFBDb25maWc+KTogT2JzZXJ2YWJsZTxJU01UUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zbXRwLWNvbmZpZycsXG4gIH0pXG4gIHF1ZXJ5KEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTTVRQQ29uZmlnPik6IE9ic2VydmFibGU8SVNNVFBDb25maWc+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvc210cC1jb25maWcnLFxuICB9KVxuICBkZWxldGUoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8dm9pZD4pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NNVFBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTTVRQU2VydmljZSk6IFZhbnRhZ2VTTVRQU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTTVRQU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TTVRQX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNNVFBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVNNVFBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU01UUF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==