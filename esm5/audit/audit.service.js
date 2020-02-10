/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
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
var VantageAuditService = /** @class */ (function (_super) {
    __extends(VantageAuditService, _super);
    function VantageAuditService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    VantageAuditService.prototype.query = /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    function (params, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    };
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageAuditService.prototype.create = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response;
    };
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    VantageAuditService.prototype.get = /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    function (id, response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageAuditService.prototype.health = /**
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
    return VantageAuditService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/audit',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
export { VantageAuditService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_AUDIT_PROVIDER_FACTORY(parent) {
    return parent || new VantageAuditService();
}
/** @type {?} */
export var VANTAGE_AUDIT_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAuditService,
    deps: [[new Optional(), new SkipSelf(), VantageAuditService]],
    useFactory: VANTAGE_AUDIT_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1ZGl0LyIsInNvdXJjZXMiOlsiYXVkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0RywrQkFVQzs7O0lBVEMsMkJBQWdCOztJQUNoQiw4QkFBbUI7O0lBQ25CLG1DQUF3Qjs7SUFDeEIsNEJBQWlCOztJQUNqQix1QkFBWTs7SUFDWiw0QkFBYzs7SUFDZCw0QkFBaUI7O0lBQ2pCLDJCQUFpQjs7SUFDakIsNkJBQWtCOztBQUdwQjtJQUN5Qyx1Q0FHdkM7SUFKRjs7SUFvREEsQ0FBQzs7Ozs7O0lBekNDLG1DQUFLOzs7OztJQUFMLFVBQ21CLE1BQW1CLEVBQ3RCLFFBQXdDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBc0I7WUFDekIsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBYSxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQzVCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS0Qsb0NBQU07Ozs7O0lBQU4sVUFBaUIsSUFBZSxFQUFnQixRQUFnQztRQUM5RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxpQ0FBRzs7Ozs7SUFBSCxVQUFtQixFQUFtQixFQUFnQixRQUFnQztRQUNwRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7OztJQUtELG9DQUFNOzs7O0lBQU4sVUFBcUIsUUFBd0M7UUFDM0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNsQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsVUFBQyxHQUFzQjtZQUN6QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBbkRGLFVBQVU7O0lBV1Q7UUFOQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFFQyxXQUFBLGFBQWEsRUFBRSxDQUFBO1FBQ2YsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBRGEsVUFBVTtZQUNYLFVBQVU7d0NBQ2xDLFVBQVU7b0RBU1o7SUFLRDtRQUhDLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxpQkFBaUI7U0FDeEIsQ0FBQztRQUNNLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBbUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBYyxVQUFVO3FEQUU1RjtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBQ0csV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBdUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBYyxVQUFVO2tEQUVsRztJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQXNCLFVBQVU7cURBU3pFO0lBQ0gsMEJBQUM7Q0FBQSxBQXBERCxDQUN5QyxTQUFTO0lBQUM7SUFBTyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBUixLQUFVO0lBQzNELE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUMsR0FnREQ7U0FuRFksbUJBQW1COzs7OztBQXFEaEMsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQTJCO0lBQ3hFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUM3QyxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRQT1NULCBUZFBhcmFtLCBUZEJvZHksIFRkUmVzcG9uc2UsIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1ZGl0TG9nIHtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBjb21wb25lbnQ/OiBzdHJpbmc7XG4gIGNvcnJlbGF0aW9uX2lkPzogc3RyaW5nO1xuICBkZXRhaWxzPzogc3RyaW5nO1xuICBpZD86IG51bWJlcjtcbiAgbG9ndGltZT86IGFueTtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgcmVzdWx0PzogYm9vbGVhbjtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXVkaXRTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL2F1ZGl0JyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSkge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvYXVkaXQvbWVzc2FnZXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBdWRpdExvZ1tdIH0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElBdWRpdExvZ1tdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXVkaXQvbWVzc2FnZXMnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElBdWRpdExvZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUF1ZGl0TG9nPik6IE9ic2VydmFibGU8SUF1ZGl0TG9nPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogbnVtYmVyIHwgc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+KTogT2JzZXJ2YWJsZTxJQXVkaXRMb2c+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlQXVkaXRTZXJ2aWNlKTogVmFudGFnZUF1ZGl0U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBdWRpdFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQVVESVRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXVkaXRTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUF1ZGl0U2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0FVRElUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19