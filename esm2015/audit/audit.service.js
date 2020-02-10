/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPOST, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
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
export class VantageAuditService extends mixinHttp(class {
}, {
    baseUrl: '/api/audit',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
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
}
VantageAuditService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1ZGl0LyIsInNvdXJjZXMiOlsiYXVkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0RywrQkFVQzs7O0lBVEMsMkJBQWdCOztJQUNoQiw4QkFBbUI7O0lBQ25CLG1DQUF3Qjs7SUFDeEIsNEJBQWlCOztJQUNqQix1QkFBWTs7SUFDWiw0QkFBYzs7SUFDZCw0QkFBaUI7O0lBQ2pCLDJCQUFpQjs7SUFDakIsNkJBQWtCOztBQUlwQixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUMzRCxPQUFPLEVBQUUsWUFBWTtJQUNyQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDOzs7Ozs7SUFPQSxLQUFLLENBQ2MsTUFBbUIsRUFDdEIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQzVCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFXLElBQWUsRUFBZ0IsUUFBZ0M7UUFDOUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsR0FBRyxDQUFnQixFQUFtQixFQUFnQixRQUFnQztRQUNwRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUtELE1BQU0sQ0FBZSxRQUF3QztRQUMzRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQW5ERixVQUFVOztBQVdUO0lBTkMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFFQyxXQUFBLGFBQWEsRUFBRSxDQUFBO0lBQ2YsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBRGEsVUFBVTtRQUNYLFVBQVU7b0NBQ2xDLFVBQVU7Z0RBU1o7QUFLRDtJQUhDLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxpQkFBaUI7S0FDeEIsQ0FBQztJQUNNLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBbUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBYyxVQUFVO2lEQUU1RjtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLHFCQUFxQjtLQUM1QixDQUFDO0lBQ0csV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBdUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBYyxVQUFVOzhDQUVsRztBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQztJQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FDQUFZLFVBQVU7b0NBQXNCLFVBQVU7aURBU3pFOzs7OztBQUdILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUEyQjtJQUN4RSxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQsIFRkUE9TVCwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlLCBUZFF1ZXJ5UGFyYW1zIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBdWRpdExvZyB7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xuICBjb3JyZWxhdGlvbl9pZD86IHN0cmluZztcbiAgZGV0YWlscz86IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGxvZ3RpbWU/OiBhbnk7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHJlc3VsdD86IGJvb2xlYW47XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1ZGl0U2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2FwaS9hdWRpdCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJQXVkaXRMb2dbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXVkaXRMb2dbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXVkaXRMb2csIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBdWRpdExvZz4pOiBPYnNlcnZhYmxlPElBdWRpdExvZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hdWRpdC9tZXNzYWdlcy86aWQnLFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ2lkJykgaWQ6IG51bWJlciB8IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUF1ZGl0TG9nPik6IE9ic2VydmFibGU8SUF1ZGl0TG9nPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9BVURJVF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUF1ZGl0U2VydmljZSk6IFZhbnRhZ2VBdWRpdFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQXVkaXRTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FVRElUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUF1ZGl0U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VBdWRpdFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BVURJVF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==