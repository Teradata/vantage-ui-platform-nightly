/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPOST, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
/**
 * @record
 */
export function IAuditLog() { }
if (false) {
    /** @type {?|undefined} */
    IAuditLog.prototype.action;
    /** @type {?|undefined} */
    IAuditLog.prototype.component;
    /** @type {?|undefined} */
    IAuditLog.prototype.correlation_id;
    /** @type {?|undefined} */
    IAuditLog.prototype.details;
    /** @type {?|undefined} */
    IAuditLog.prototype.id;
    /** @type {?|undefined} */
    IAuditLog.prototype.logtime;
    /** @type {?|undefined} */
    IAuditLog.prototype.message;
    /** @type {?|undefined} */
    IAuditLog.prototype.result;
    /** @type {?|undefined} */
    IAuditLog.prototype.username;
}
let VantageAuditService = class VantageAuditService {
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    query(params, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
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
__decorate([
    TdGET({
        path: '/audit/messages',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdQueryParams()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HttpParams,
        Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "query", null);
__decorate([
    TdPOST({
        path: '/audit/messages',
    }),
    __param(0, TdBody()), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "create", null);
__decorate([
    TdGET({
        path: '/audit/messages/:id',
    }),
    __param(0, TdParam('id')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "get", null);
__decorate([
    TdGET({
        path: '/health',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "health", null);
VantageAuditService = __decorate([
    TdHttp({
        baseUrl: '/api/audit',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageAuditService);
export { VantageAuditService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_AUDIT_PROVIDER_FACTORY(parent) {
    return parent || new VantageAuditService();
}
/** @type {?} */
export const VANTAGE_AUDIT_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAuditService,
    deps: [[new Optional(), new SkipSelf(), VantageAuditService]],
    useFactory: VANTAGE_AUDIT_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1ZGl0LyIsInNvdXJjZXMiOlsiYXVkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5HLCtCQVVDOzs7SUFUQywyQkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsbUNBQXdCOztJQUN4Qiw0QkFBaUI7O0lBQ2pCLHVCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsMkJBQWlCOztJQUNqQiw2QkFBa0I7O0lBT1AsbUJBQW1CLFNBQW5CLG1CQUFtQjs7Ozs7O0lBTzlCLEtBQUssQ0FDYyxNQUFtQixFQUN0QixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDNUIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQVcsSUFBZSxFQUFnQixRQUFnQztRQUM5RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxHQUFHLENBQWdCLEVBQW1CLEVBQWdCLFFBQWdDO1FBQ3BGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsTUFBTSxDQUFlLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUF6Q0M7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FEYSxVQUFVO1FBQ1gsVUFBVTtvQ0FDbEMsVUFBVTtnREFTWjtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLGlCQUFpQjtLQUN4QixDQUFDO0lBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFtQixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFjLFVBQVU7aURBRTVGO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUscUJBQXFCO0tBQzVCLENBQUM7SUFDRyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFjLFVBQVU7OENBRWxHO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0lBQ00sV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBc0IsVUFBVTtpREFTekU7QUEvQ1UsbUJBQW1CO0lBSi9CLE1BQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQzdELENBQUM7R0FDVyxtQkFBbUIsQ0FnRC9CO1NBaERZLG1CQUFtQjs7Ozs7QUFrRGhDLE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUEyQjtJQUN4RSxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUE9TVCwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlLCBUZFF1ZXJ5UGFyYW1zIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBdWRpdExvZyB7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xuICBjb3JyZWxhdGlvbl9pZD86IHN0cmluZztcbiAgZGV0YWlscz86IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGxvZ3RpbWU/OiBhbnk7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHJlc3VsdD86IGJvb2xlYW47XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvYXVkaXQnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBdWRpdFNlcnZpY2Uge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvYXVkaXQvbWVzc2FnZXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBdWRpdExvZ1tdIH0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElBdWRpdExvZ1tdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXVkaXQvbWVzc2FnZXMnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElBdWRpdExvZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUF1ZGl0TG9nPik6IE9ic2VydmFibGU8SUF1ZGl0TG9nPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogbnVtYmVyIHwgc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+KTogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlQXVkaXRTZXJ2aWNlKTogVmFudGFnZUF1ZGl0U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBdWRpdFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQVVESVRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXVkaXRTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUF1ZGl0U2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19