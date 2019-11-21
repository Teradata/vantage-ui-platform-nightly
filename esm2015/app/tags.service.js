/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdQueryParams, TdResponse, TdGET } from '@covalent/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function ITag() { }
if (false) {
    /** @type {?|undefined} */
    ITag.prototype.tag_id;
    /** @type {?|undefined} */
    ITag.prototype.tag;
}
let VantageTagsService = class VantageTagsService {
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
};
VantageTagsService.decorators = [
    { type: Injectable }
];
tslib_1.__decorate([
    TdGET({
        path: '/tags',
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
], VantageTagsService.prototype, "query", null);
VantageTagsService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/app',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageTagsService);
export { VantageTagsService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_TAGS_PROVIDER_FACTORY(parent) {
    return parent || new VantageTagsService();
}
/** @type {?} */
export const VANTAGE_TAGS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageTagsService,
    deps: [[new Optional(), new SkipSelf(), VantageTagsService]],
    useFactory: VANTAGE_TAGS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsidGFncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFckMsMEJBR0M7OztJQUZDLHNCQUFnQjs7SUFDaEIsbUJBQWE7O0lBUUYsa0JBQWtCLFNBQWxCLGtCQUFrQjs7Ozs7O0lBTzdCLEtBQUssQ0FDYyxNQUFtQixFQUN0QixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDdkIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFyQkEsVUFBVTs7QUFRVDtJQU5DLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUMsbUJBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBRGEsVUFBVTtRQUNYLFVBQVU7NENBQ2xDLFVBQVU7K0NBU1o7QUFuQlUsa0JBQWtCO0lBTDlCLE1BQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQzdELENBQUM7R0FFVyxrQkFBa0IsQ0FvQjlCO1NBcEJZLGtCQUFrQjs7Ozs7QUFzQi9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwLCBUZFF1ZXJ5UGFyYW1zLCBUZFJlc3BvbnNlLCBUZEdFVCB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWcge1xuICB0YWdfaWQ/OiBzdHJpbmc7XG4gIHRhZz86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL2FwcCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVRhZ3NTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3RhZ3MnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElUYWdbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJVGFnW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1RBR1NfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VUYWdzU2VydmljZSk6IFZhbnRhZ2VUYWdzU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUYWdzU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9UQUdTX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRhZ3NTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRhZ3NTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVEFHU19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==