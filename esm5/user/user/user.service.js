/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { SkipSelf, Optional } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdGET, TdResponse, TdParam, TdQueryParams } from '@covalent/http';
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
            return res.body;
        })));
    };
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
    VantageUserService = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWpELDJCQVVDOzs7SUFUQyx5QkFBa0I7O0lBQ2xCLHlCQUFrQjs7SUFDbEIsc0JBQWU7O0lBQ2Ysc0JBQWdCOztJQUNoQixzQkFBZ0I7O0lBQ2hCLHVCQUFrQjs7SUFDbEIsNkJBQXNCOztJQUN0Qiw2QkFBc0I7O0lBQ3RCLDJCQUFvQjs7OztJQXVEdEIsQ0FBQztJQTdDQzs7T0FFRzs7Ozs7OztJQU9ILGtDQUFLOzs7Ozs7SUFBTCxVQUNtQixXQUF3QixFQUMzQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQWU7WUFDekIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBc0I7WUFDekIsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLElBQUksRUFBRSxtQkFBUyxHQUFHLENBQUMsSUFBSSxFQUFBO2FBQ3hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBT0gsZ0NBQUc7Ozs7OztJQUFILFVBQXlCLEVBQVUsRUFBZ0IsUUFBd0M7UUFDekYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXdCO1lBQzNCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQW5DRDtRQU5DLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7UUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOzt5Q0FEa0IsVUFBVTtZQUNoQixVQUFVO3dDQUNsQyxVQUFVO21EQVlaO0lBV0Q7UUFOQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFDRyxXQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQSxFQUFjLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQXNCLFVBQVU7aURBU3ZHO0lBN0NVLGtCQUFrQjtRQU45QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0IsQ0FBQztTQUNILENBQUM7T0FDVyxrQkFBa0IsQ0E4QzlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBOUNZLGtCQUFrQjs7Ozs7QUFnRC9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUGFyYW0sIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBkaXNwbGF5X25hbWU/OiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IG51bWJlcjtcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VVc2VyU2VydmljZSB7XG4gIC8qKlxuICAgKiBnZXQgYWxsIHVzZXJzXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBxdWVyeVBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPHsgdG90YWw6IG51bWJlcjsgZGF0YTogSVVzZXJbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVVzZXJbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBhIHNpbmdsZSB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3VzZXJzLzp1c2VybmFtZScsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ3VzZXJuYW1lJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVVNFUl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVVzZXJTZXJ2aWNlKTogVmFudGFnZVVzZXJTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVVzZXJTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1VTRVJfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVXNlclNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVXNlclNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9VU0VSX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19