/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdGET, TdResponse, TdParam, TdQueryParams, mixinHttp } from '@covalent/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/**
 * @record
 */
export function IUser() { }
if (false) {
    /** @type {?|undefined} */
    IUser.prototype.username;
    /** @type {?|undefined} */
    IUser.prototype.password;
    /** @type {?|undefined} */
    IUser.prototype.email;
    /** @type {?|undefined} */
    IUser.prototype.local;
    /** @type {?|undefined} */
    IUser.prototype.admin;
    /** @type {?|undefined} */
    IUser.prototype.groups;
    /** @type {?|undefined} */
    IUser.prototype.display_name;
    /** @type {?|undefined} */
    IUser.prototype.access_token;
    /** @type {?|undefined} */
    IUser.prototype.expires_at;
}
export class VantageUserService extends mixinHttp(class {
}, {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
}) {
    /**
     * get all users
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
    /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
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
            return res.body;
        })));
    }
}
VantageUserService.decorators = [
    { type: Injectable }
];
__decorate([
    TdGET({
        path: '/users',
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
], VantageUserService.prototype, "query", null);
__decorate([
    TdGET({
        path: '/users/:username',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdParam('username')), __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Observable]),
    __metadata("design:returntype", Observable)
], VantageUserService.prototype, "get", null);
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_USER_PROVIDER_FACTORY(parent) {
    return parent || new VantageUserService();
}
/** @type {?} */
export const VANTAGE_USER_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageUserService,
    deps: [[new Optional(), new SkipSelf(), VantageUserService]],
    useFactory: VANTAGE_USER_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVqRCwyQkFVQzs7O0lBVEMseUJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHNCQUFlOztJQUNmLHNCQUFnQjs7SUFDaEIsc0JBQWdCOztJQUNoQix1QkFBa0I7O0lBQ2xCLDZCQUFzQjs7SUFDdEIsNkJBQXNCOztJQUN0QiwyQkFBb0I7O0FBSXRCLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxTQUFTLENBQUM7Q0FBUSxFQUFFO0lBQzFELE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQztRQUMzQixNQUFNLEVBQUUsa0JBQWtCO0tBQzNCLENBQUM7Q0FDSCxDQUFDOzs7Ozs7O0lBVUEsS0FBSyxDQUNjLFdBQXdCLEVBQzNCLFFBQXdDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO1lBQzdCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsbUJBQVMsR0FBRyxDQUFDLElBQUksRUFBQTthQUN4QixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFXRCxHQUFHLENBQXNCLEVBQVUsRUFBZ0IsUUFBd0M7UUFDekYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsQ0FBQyxLQUFlLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUF3QixFQUFFLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFuREYsVUFBVTs7QUFnQlQ7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FEa0IsVUFBVTtRQUNoQixVQUFVO29DQUNsQyxVQUFVOytDQVlaO0FBV0Q7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUNHLFdBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBLEVBQWMsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBc0IsVUFBVTs2Q0FTdkc7Ozs7O0FBR0gsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE1BQTBCO0lBQ3RFLE9BQU8sTUFBTSxJQUFJLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUM1QyxDQUFDOztBQUVELE1BQU0sT0FBTyxxQkFBcUIsR0FBYTs7SUFFN0MsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELFVBQVUsRUFBRSw2QkFBNkI7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUGFyYW0sIFRkUXVlcnlQYXJhbXMsIG1peGluSHR0cCB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBsb2NhbD86IGJvb2xlYW47XG4gIGFkbWluPzogYm9vbGVhbjtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG4gIGRpc3BsYXlfbmFtZT86IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICBleHBpcmVzX2F0PzogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVVzZXJTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSksXG59KSB7XG4gIC8qKlxuICAgKiBnZXQgYWxsIHVzZXJzXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBxdWVyeVBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPHsgdG90YWw6IG51bWJlcjsgZGF0YTogSVVzZXJbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVVzZXJbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBhIHNpbmdsZSB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3VzZXJzLzp1c2VybmFtZScsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ3VzZXJuYW1lJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVVNFUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVVzZXJTZXJ2aWNlKTogVmFudGFnZVVzZXJTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVVzZXJTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1VTRVJfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVXNlclNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVXNlclNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9VU0VSX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19