/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPOST, TdParam, TdBody, TdResponse, TdQueryParams, } from '@covalent/http';
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
tslib_1.__decorate([
    TdGET({
        path: '/audit/messages',
        options: {
            observe: 'response',
        },
    }),
    tslib_1.__param(0, TdQueryParams()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [HttpParams,
        Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAuditService.prototype, "query", null);
tslib_1.__decorate([
    TdPOST({
        path: '/audit/messages',
    }),
    tslib_1.__param(0, TdBody()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAuditService.prototype, "create", null);
tslib_1.__decorate([
    TdGET({
        path: '/audit/messages/:id',
    }),
    tslib_1.__param(0, TdParam('id')),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAuditService.prototype, "get", null);
tslib_1.__decorate([
    TdGET({
        path: '/health',
    }),
    tslib_1.__param(0, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAuditService.prototype, "health", null);
VantageAuditService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/audit',
        baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL2F1ZGl0LyIsInNvdXJjZXMiOlsiYXVkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXhCLCtCQVVDOzs7SUFUQywyQkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsbUNBQXdCOztJQUN4Qiw0QkFBaUI7O0lBQ2pCLHVCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsMkJBQWlCOztJQUNqQiw2QkFBa0I7O0lBT1AsbUJBQW1CLFNBQW5CLG1CQUFtQjs7Ozs7O0lBUTlCLEtBQUssQ0FBa0IsTUFBbUIsRUFDdEIsUUFBd0M7UUFDMUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQzVCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFXLElBQWUsRUFDVixRQUFnQztRQUVwRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxHQUFHLENBQWdCLEVBQW1CLEVBQ3BCLFFBQWdDO1FBQ2hELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBS0QsTUFBTSxDQUFlLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUExQ0M7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUNLLG1CQUFBLGFBQWEsRUFBRSxDQUFBO0lBQ2YsbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZDQURhLFVBQVU7UUFDWCxVQUFVOzRDQUFzQixVQUFVO2dEQVN4RTtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLGlCQUFpQjtLQUN4QixDQUFDO0lBQ00sbUJBQUEsTUFBTSxFQUFFLENBQUE7SUFDUCxtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7cURBQVksVUFBVTs0Q0FDbEMsVUFBVTtpREFFbEI7QUFLRDtJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxxQkFBcUI7S0FDNUIsQ0FBQztJQUNHLG1CQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVOzRDQUFjLFVBQVU7OENBRTlEO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0lBQ00sbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7NENBQXNCLFVBQVU7aURBU3pFO0FBakRVLG1CQUFtQjtJQUovQixNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsWUFBWTtRQUNyQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUMvRCxDQUFDO0dBQ1csbUJBQW1CLENBa0QvQjtTQWxEWSxtQkFBbUI7Ozs7O0FBb0RoQyxNQUFNLFVBQVUsOEJBQThCLENBQUMsTUFBMkI7SUFDeEUsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQzdDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBUZEh0dHAsXG4gIFRkR0VULFxuICBUZFBPU1QsXG4gIFRkUGFyYW0sXG4gIFRkQm9keSxcbiAgVGRSZXNwb25zZSxcbiAgVGRRdWVyeVBhcmFtcyxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBdWRpdExvZyB7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xuICBjb3JyZWxhdGlvbl9pZD86IHN0cmluZztcbiAgZGV0YWlscz86IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGxvZ3RpbWU/OiBhbnk7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHJlc3VsdD86IGJvb2xlYW47XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvYXVkaXQnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1ZGl0U2VydmljZSB7XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTx7dG90YWw6IG51bWJlciwgZGF0YTogSUF1ZGl0TG9nW119PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXVkaXRMb2dbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXVkaXRMb2csXG4gICAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUF1ZGl0TG9nPixcbiAgICAgICAgKTogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvYXVkaXQvbWVzc2FnZXMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBudW1iZXIgfCBzdHJpbmcsXG4gICAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+KTogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlQXVkaXRTZXJ2aWNlKTogVmFudGFnZUF1ZGl0U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBdWRpdFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQVVESVRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXVkaXRTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUF1ZGl0U2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19