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
var VantageAuditService = /** @class */ (function () {
    function VantageAuditService() {
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
    return VantageAuditService;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1ZGl0LyIsInNvdXJjZXMiOlsiYXVkaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRW5HLCtCQVVDOzs7SUFUQywyQkFBZ0I7O0lBQ2hCLDhCQUFtQjs7SUFDbkIsbUNBQXdCOztJQUN4Qiw0QkFBaUI7O0lBQ2pCLHVCQUFZOztJQUNaLDRCQUFjOztJQUNkLDRCQUFpQjs7SUFDakIsMkJBQWlCOztJQUNqQiw2QkFBa0I7Ozs7SUF1RHBCLENBQUM7Ozs7OztJQXpDQyxtQ0FBSzs7Ozs7SUFBTCxVQUNtQixNQUFtQixFQUN0QixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXNCO1lBQ3pCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsbUJBQWEsR0FBRyxDQUFDLElBQUksRUFBQTthQUM1QixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELG9DQUFNOzs7OztJQUFOLFVBQWlCLElBQWUsRUFBZ0IsUUFBZ0M7UUFDOUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsaUNBQUc7Ozs7O0lBQUgsVUFBbUIsRUFBbUIsRUFBZ0IsUUFBZ0M7UUFDcEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFLRCxvQ0FBTTs7OztJQUFOLFVBQXFCLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbEMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBc0I7WUFDekIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUF4Q0Q7UUFOQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFFQyxXQUFBLGFBQWEsRUFBRSxDQUFBO1FBQ2YsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7eUNBRGEsVUFBVTtZQUNYLFVBQVU7d0NBQ2xDLFVBQVU7b0RBU1o7SUFLRDtRQUhDLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxpQkFBaUI7U0FDeEIsQ0FBQztRQUNNLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBbUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBYyxVQUFVO3FEQUU1RjtJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBQ0csV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBdUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBYyxVQUFVO2tEQUVsRztJQUtEO1FBSEMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQztRQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQXNCLFVBQVU7cURBU3pFO0lBL0NVLG1CQUFtQjtRQUovQixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsWUFBWTtZQUNyQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUM3RCxDQUFDO09BQ1csbUJBQW1CLENBZ0QvQjtJQUFELDBCQUFDO0NBQUEsSUFBQTtTQWhEWSxtQkFBbUI7Ozs7O0FBa0RoQyxNQUFNLFVBQVUsOEJBQThCLENBQUMsTUFBMkI7SUFDeEUsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQzdDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFBPU1QsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXVkaXRMb2cge1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIGNvbXBvbmVudD86IHN0cmluZztcbiAgY29ycmVsYXRpb25faWQ/OiBzdHJpbmc7XG4gIGRldGFpbHM/OiBzdHJpbmc7XG4gIGlkPzogbnVtYmVyO1xuICBsb2d0aW1lPzogYW55O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICByZXN1bHQ/OiBib29sZWFuO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL2F1ZGl0JyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXVkaXRTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJQXVkaXRMb2dbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXVkaXRMb2dbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2F1ZGl0L21lc3NhZ2VzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXVkaXRMb2csIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBdWRpdExvZz4pOiBPYnNlcnZhYmxlPElBdWRpdExvZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hdWRpdC9tZXNzYWdlcy86aWQnLFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ2lkJykgaWQ6IG51bWJlciB8IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUF1ZGl0TG9nPik6IE9ic2VydmFibGU8SUF1ZGl0TG9nPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9BVURJVF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUF1ZGl0U2VydmljZSk6IFZhbnRhZ2VBdWRpdFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQXVkaXRTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FVRElUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUF1ZGl0U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VBdWRpdFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BVURJVF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==