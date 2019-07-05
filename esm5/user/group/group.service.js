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
var VantageGroupService = /** @class */ (function () {
    function VantageGroupService() {
    }
    /**
     * get groups in paginated form via query string
     */
    /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    VantageGroupService.prototype.query = /**
     * get groups in paginated form via query string
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    function (queryParams, response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
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
    return VantageGroupService;
}());
export { VantageGroupService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_GROUP_PROVIDER_FACTORY(parent) {
    return parent || new VantageGroupService();
}
/** @type {?} */
export var VANTAGE_GROUP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageGroupService,
    deps: [[new Optional(), new SkipSelf(), VantageGroupService]],
    useFactory: VANTAGE_GROUP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL3VzZXIvIiwic291cmNlcyI6WyJncm91cC9ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFakQsNEJBTUM7OztJQUxDLHNCQUFjOztJQUNkLDZCQUFxQjs7SUFDckIsb0JBQVk7O0lBQ1osOEJBQXNCOztJQUN0Qix1QkFBaUI7Ozs7SUFvQ25CLENBQUM7SUF6QkM7O09BRUc7Ozs7Ozs7SUFPSCxtQ0FBSzs7Ozs7O0lBQUwsVUFDbUIsV0FBd0IsRUFDM0IsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXNCO1lBQ3pCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsbUJBQVUsR0FBRyxDQUFDLElBQUksRUFBQTthQUN6QixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFmRDtRQU5DLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUVDLG1CQUFBLGFBQWEsRUFBRSxDQUFBO1FBQ2YsbUJBQUEsVUFBVSxFQUFFLENBQUE7O2lEQURrQixVQUFVO1lBQ2hCLFVBQVU7Z0RBQ2xDLFVBQVU7b0RBWVo7SUExQlUsbUJBQW1CO1FBTi9CLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDM0IsTUFBTSxFQUFFLGtCQUFrQjthQUMzQixDQUFDO1NBQ0gsQ0FBQztPQUNXLG1CQUFtQixDQTJCL0I7SUFBRCwwQkFBQztDQUFBLElBQUE7U0EzQlksbUJBQW1COzs7OztBQTZCaEMsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQTJCO0lBQ3hFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUM3QyxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgVGRIdHRwLFxuICBUZEdFVCxcbiAgVGRSZXNwb25zZSxcbiAgVGRRdWVyeVBhcmFtcyxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXAge1xuICBuYW1lPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZT86IHN0cmluZztcbiAgdXNlcnM/OiBzdHJpbmdbXTtcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VHcm91cFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBnZXQgZ3JvdXBzIGluIHBhZ2luYXRlZCBmb3JtIHZpYSBxdWVyeSBzdHJpbmdcbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9ncm91cHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBxdWVyeVBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPHt0b3RhbDogbnVtYmVyLCBkYXRhOiBJR3JvdXBbXX0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJR3JvdXBbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfR1JPVVBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VHcm91cFNlcnZpY2UpOiBWYW50YWdlR3JvdXBTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUdyb3VwU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9HUk9VUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VHcm91cFNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlR3JvdXBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfR1JPVVBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=