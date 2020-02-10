/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { mixinHttp, TdGET, TdResponse, TdQueryParams } from '@covalent/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/**
 * @record
 */
export function IGroup() { }
if (false) {
    /** @type {?|undefined} */
    IGroup.prototype.name;
    /** @type {?|undefined} */
    IGroup.prototype.description;
    /** @type {?|undefined} */
    IGroup.prototype.id;
    /** @type {?|undefined} */
    IGroup.prototype.display_name;
    /** @type {?|undefined} */
    IGroup.prototype.users;
}
export class VantageGroupService extends mixinHttp(class {
}, {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
}) {
    /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    query(queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
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
}
VantageGroupService.decorators = [
    { type: Injectable }
];
__decorate([
    TdGET({
        path: '/groups',
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
], VantageGroupService.prototype, "query", null);
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_GROUP_PROVIDER_FACTORY(parent) {
    return parent || new VantageGroupService();
}
/** @type {?} */
export const VANTAGE_GROUP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageGroupService,
    deps: [[new Optional(), new SkipSelf(), VantageGroupService]],
    useFactory: VANTAGE_GROUP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3VzZXIvIiwic291cmNlcyI6WyJncm91cC9ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWpELDRCQU1DOzs7SUFMQyxzQkFBYzs7SUFDZCw2QkFBcUI7O0lBQ3JCLG9CQUFZOztJQUNaLDhCQUFzQjs7SUFDdEIsdUJBQWlCOztBQUluQixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUMzRCxPQUFPLEVBQUUsV0FBVztJQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7UUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQixDQUFDO0NBQ0gsQ0FBQzs7Ozs7OztJQVVBLEtBQUssQ0FDYyxXQUF3QixFQUMzQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDekIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUEvQkYsVUFBVTs7QUFnQlQ7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FEa0IsVUFBVTtRQUNoQixVQUFVO29DQUNsQyxVQUFVO2dEQVlaOzs7OztBQUdILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUEyQjtJQUN4RSxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1peGluSHR0cCwgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgZGlzcGxheV9uYW1lPzogc3RyaW5nO1xuICB1c2Vycz86IHN0cmluZ1tdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUdyb3VwU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSkge1xuICAvKipcbiAgICogZ2V0IGdyb3VwcyBpbiBwYWdpbmF0ZWQgZm9ybSB2aWEgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvZ3JvdXBzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcXVlcnlQYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElHcm91cFtdIH0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJR3JvdXBbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfR1JPVVBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VHcm91cFNlcnZpY2UpOiBWYW50YWdlR3JvdXBTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUdyb3VwU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9HUk9VUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VHcm91cFNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlR3JvdXBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfR1JPVVBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=