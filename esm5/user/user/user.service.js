/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SkipSelf, Optional } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdGET, TdResponse, TdParam, TdQueryParams, } from '@covalent/http';
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
var VantageUserService = /** @class */ (function () {
    function VantageUserService() {
    }
    /**
     * get all users
     */
    /**
     * get all users
     * @param {?=} queryParams
     * @param {?=} response
     * @return {?}
     */
    VantageUserService.prototype.query = /**
     * get all users
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
    /**
     * gets a single users information
     */
    /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    VantageUserService.prototype.get = /**
     * gets a single users information
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    function (id, response) {
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
            return (/** @type {?} */ (res.body));
        })));
    };
    tslib_1.__decorate([
        TdGET({
            path: '/users',
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
    ], VantageUserService.prototype, "query", null);
    tslib_1.__decorate([
        TdGET({
            path: '/users/:username',
            options: {
                observe: 'response',
            },
        }),
        tslib_1.__param(0, TdParam('username')),
        tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageUserService.prototype, "get", null);
    VantageUserService = tslib_1.__decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({
                Accept: 'application/json',
            }),
        })
    ], VantageUserService);
    return VantageUserService;
}());
export { VantageUserService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_USER_PROVIDER_FACTORY(parent) {
    return parent || new VantageUserService();
}
/** @type {?} */
export var VANTAGE_USER_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageUserService,
    deps: [[new Optional(), new SkipSelf(), VantageUserService]],
    useFactory: VANTAGE_USER_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxhQUFhLEdBQ2QsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWpELDJCQVVDOzs7SUFUQyx5QkFBa0I7O0lBQ2xCLHlCQUFrQjs7SUFDbEIsc0JBQWU7O0lBQ2Ysc0JBQWdCOztJQUNoQixzQkFBZ0I7O0lBQ2hCLHVCQUFrQjs7SUFDbEIsNkJBQXNCOztJQUN0Qiw2QkFBc0I7O0lBQ3RCLDJCQUFvQjs7OztJQTREdEIsQ0FBQztJQWpEQzs7T0FFRzs7Ozs7OztJQU9ILGtDQUFLOzs7Ozs7SUFBTCxVQUNtQixXQUF3QixFQUMzQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQWU7WUFDekIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBc0I7WUFDekIsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBUyxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQ3hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBT0gsZ0NBQUc7Ozs7OztJQUFILFVBQ3VCLEVBQVUsRUFDakIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXdCO1lBQzNCLE9BQU8sbUJBQU8sR0FBRyxDQUFDLElBQUksRUFBQSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBdENEO1FBTkMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBRUMsbUJBQUEsYUFBYSxFQUFFLENBQUE7UUFDZixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7aURBRGtCLFVBQVU7WUFDaEIsVUFBVTtnREFDbEMsVUFBVTttREFZWjtJQVdEO1FBTkMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBRUMsbUJBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25CLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzt5REFBWSxVQUFVO2dEQUNsQyxVQUFVO2lEQVNaO0lBakRVLGtCQUFrQjtRQU45QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0IsQ0FBQztTQUNILENBQUM7T0FDVyxrQkFBa0IsQ0FtRDlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBbkRZLGtCQUFrQjs7Ozs7QUFxRC9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIFRkSHR0cCxcbiAgVGRHRVQsXG4gIFRkUmVzcG9uc2UsXG4gIFRkUGFyYW0sXG4gIFRkUXVlcnlQYXJhbXMsXG59IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBsb2NhbD86IGJvb2xlYW47XG4gIGFkbWluPzogYm9vbGVhbjtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG4gIGRpc3BsYXlfbmFtZT86IHN0cmluZztcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICBleHBpcmVzX2F0PzogbnVtYmVyO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVVzZXJTZXJ2aWNlIHtcblxuICAvKipcbiAgICogZ2V0IGFsbCB1c2Vyc1xuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3VzZXJzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcXVlcnlQYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7dG90YWw6IG51bWJlciwgZGF0YTogSVVzZXJbXX0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJVXNlcltdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIGEgc2luZ2xlIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMvOnVzZXJuYW1lJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIGdldChcbiAgICBAVGRQYXJhbSgndXNlcm5hbWUnKSBpZDogc3RyaW5nLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiA8SVVzZXI+cmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVVNFUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVVzZXJTZXJ2aWNlKTogVmFudGFnZVVzZXJTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVVzZXJTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1VTRVJfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVXNlclNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVXNlclNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9VU0VSX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19