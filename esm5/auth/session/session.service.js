/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { map, catchError } from 'rxjs/operators';
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TdHttp, TdGET, TdResponse, TdPOST, TdParam } from '@covalent/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
/**
 * @record
 */
export function ISessionUser() { }
if (false) {
    /** @type {?|undefined} */
    ISessionUser.prototype.user;
    /** @type {?|undefined} */
    ISessionUser.prototype.valid;
    /** @type {?|undefined} */
    ISessionUser.prototype.admin;
    /** @type {?|undefined} */
    ISessionUser.prototype.groups;
    /** @type {?|undefined} */
    ISessionUser.prototype.expires_at;
}
var VantageSessionService = /** @class */ (function () {
    function VantageSessionService() {
    }
    Object.defineProperty(VantageSessionService.prototype, "user", {
        get: /**
         * @return {?}
         */
        function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    VantageSessionService.prototype.getInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._user) {
            return this._get().pipe(switchMap((/**
             * @param {?} sessionUser
             * @return {?}
             */
            function (sessionUser) {
                return _this._getUser(sessionUser.user).pipe(tap((/**
                 * @param {?} u
                 * @return {?}
                 */
                function (u) {
                    _this._user = Object.assign({}, sessionUser, u);
                })));
            })));
        }
        else {
            return of(this._user);
        }
    };
    /**
     * @return {?}
     */
    VantageSessionService.prototype.logout = /**
     * @return {?}
     */
    function () {
        window.location.href = '/api/user/logout?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000);
    };
    /**
     * gets the current sso logged in users information
     */
    /**
     * gets the current sso logged in users information
     * @private
     * @param {?=} response
     * @return {?}
     */
    VantageSessionService.prototype._get = /**
     * gets the current sso logged in users information
     * @private
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.body;
        })));
    };
    /**
     * gets a single users information
     */
    /**
     * gets a single users information
     * @private
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    VantageSessionService.prototype._getUser = /**
     * gets a single users information
     * @private
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
        TdPOST({
            path: '/token/validity?fields=user,groups',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_get", null);
    __decorate([
        TdGET({
            path: '/users/:username',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdParam('username')),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_getUser", null);
    VantageSessionService = __decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({
                Accept: 'application/json',
            }),
        })
    ], VantageSessionService);
    return VantageSessionService;
}());
export { VantageSessionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageSessionService.prototype._user;
}
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_SESSION_PROVIDER_FACTORY(parent) {
    return parent || new VantageSessionService();
}
/** @type {?} */
export var VANTAGE_SESSION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSessionService,
    deps: [[new Optional(), new SkipSelf(), VantageSessionService]],
    useFactory: VANTAGE_SESSION_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCxrQ0FNQzs7O0lBTEMsNEJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw2QkFBZ0I7O0lBQ2hCLDhCQUFrQjs7SUFDbEIsa0NBQW9COzs7O0lBMkV0QixDQUFDO0lBL0RDLHNCQUFJLHVDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUNyQixTQUFTOzs7O1lBQUMsVUFBQyxXQUF5QjtnQkFDbEMsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUc7Ozs7Z0JBQUMsVUFBQyxDQUFRO29CQUNYLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRU0sc0NBQU07OztJQUFiO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQU9LLG9DQUFJOzs7Ozs7SUFBWixVQUEyQixRQUF3QztRQUNqRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQStCO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQU9LLHdDQUFROzs7Ozs7O0lBQWhCLFVBQ3VCLEVBQVUsRUFDakIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFlO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXdCO1lBQzNCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQTdCRDtRQU5DLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxvQ0FBb0M7WUFDMUMsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUNZLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQXNCLFVBQVU7cURBTS9FO0lBV0Q7UUFOQyxLQUFLLENBQUM7WUFDTCxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFFQyxXQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNuQixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUNsQyxVQUFVO3lEQVNaO0lBakVVLHFCQUFxQjtRQU5qQyxNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQzNCLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0IsQ0FBQztTQUNILENBQUM7T0FDVyxxQkFBcUIsQ0FrRWpDO0lBQUQsNEJBQUM7Q0FBQSxJQUFBO1NBbEVZLHFCQUFxQjs7Ozs7O0lBQ2hDLHNDQUFxQjs7Ozs7O0FBbUV2QixNQUFNLFVBQVUsZ0NBQWdDLENBQUMsTUFBNkI7SUFDNUUsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0FBQy9DLENBQUM7O0FBRUQsTUFBTSxLQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLGdDQUFnQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFJlc3BvbnNlLCBUZFBPU1QsIFRkUGFyYW0gfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS91c2VyJztcblxuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlc3Npb25Vc2VyIHtcbiAgdXNlcj86IHN0cmluZztcbiAgdmFsaWQ/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVNlc3Npb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcjogSVVzZXI7XG5cbiAgZ2V0IHVzZXIoKTogSVVzZXIge1xuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgZ2V0SW5mbygpOiBPYnNlcnZhYmxlPElVc2VyPiB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChzZXNzaW9uVXNlcjogSVNlc3Npb25Vc2VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVzZXIoc2Vzc2lvblVzZXIudXNlcikucGlwZShcbiAgICAgICAgICAgIHRhcCgodTogSVVzZXIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHNlc3Npb25Vc2VyLCB1KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS91c2VyL2xvZ291dD9ub25jZT0nICsgTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgdGhlIGN1cnJlbnQgc3NvIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbi92YWxpZGl0eT9maWVsZHM9dXNlcixncm91cHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0KEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElTZXNzaW9uVXNlcj4pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIGEgc2luZ2xlIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMvOnVzZXJuYW1lJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHByaXZhdGUgX2dldFVzZXIoXG4gICAgQFRkUGFyYW0oJ3VzZXJuYW1lJykgaWQ6IHN0cmluZyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElVc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSk6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTZXNzaW9uU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVNlc3Npb25TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==