/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SkipSelf, Optional } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdGET, TdResponse, TdQueryParams, } from '@covalent/http';
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
let VantageGroupService = class VantageGroupService {
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
};
tslib_1.__decorate([
    TdGET({
        path: '/groups',
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
], VantageGroupService.prototype, "query", null);
VantageGroupService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/user',
        baseHeaders: new HttpHeaders({
            Accept: 'application/json',
        }),
    })
], VantageGroupService);
export { VantageGroupService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL3VzZXIvIiwic291cmNlcyI6WyJncm91cC9ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFakQsNEJBTUM7OztJQUxDLHNCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIsb0JBQVk7O0lBQ1osOEJBQXNCOztJQUN0Qix1QkFBaUI7O0lBU04sbUJBQW1CLFNBQW5CLG1CQUFtQjs7Ozs7OztJQVc5QixLQUFLLENBQ2MsV0FBd0IsRUFDM0IsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsQ0FBQyxLQUFlLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBVSxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQ3pCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFoQkM7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLG1CQUFBLGFBQWEsRUFBRSxDQUFBO0lBQ2YsbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZDQURrQixVQUFVO1FBQ2hCLFVBQVU7NENBQ2xDLFVBQVU7Z0RBWVo7QUExQlUsbUJBQW1CO0lBTi9CLE1BQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQztZQUMzQixNQUFNLEVBQUUsa0JBQWtCO1NBQzNCLENBQUM7S0FDSCxDQUFDO0dBQ1csbUJBQW1CLENBMkIvQjtTQTNCWSxtQkFBbUI7Ozs7O0FBNkJoQyxNQUFNLFVBQVUsOEJBQThCLENBQUMsTUFBMkI7SUFDeEUsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQzdDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBUZEh0dHAsXG4gIFRkR0VULFxuICBUZFJlc3BvbnNlLFxuICBUZFF1ZXJ5UGFyYW1zLFxufSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cCB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgZGlzcGxheV9uYW1lPzogc3RyaW5nO1xuICB1c2Vycz86IHN0cmluZ1tdO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUdyb3VwU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIGdldCBncm91cHMgaW4gcGFnaW5hdGVkIGZvcm0gdmlhIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2dyb3VwcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBxdWVyeShcbiAgICBAVGRRdWVyeVBhcmFtcygpIHF1ZXJ5UGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8e3RvdGFsOiBudW1iZXIsIGRhdGE6IElHcm91cFtdfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElHcm91cFtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9HUk9VUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUdyb3VwU2VydmljZSk6IFZhbnRhZ2VHcm91cFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlR3JvdXBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0dST1VQX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUdyb3VwU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VHcm91cFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9HUk9VUF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==