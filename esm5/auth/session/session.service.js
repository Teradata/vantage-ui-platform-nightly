/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { map, catchError } from 'rxjs/operators';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { mixinHttp, TdGET, TdResponse, TdPOST, TdParam } from '@covalent/http';
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
var VantageSessionService = /** @class */ (function (_super) {
    __extends(VantageSessionService, _super);
    function VantageSessionService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    VantageSessionService.decorators = [
        { type: Injectable }
    ];
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
    return VantageSessionService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFaEQsa0NBTUM7OztJQUxDLDRCQUFjOztJQUNkLDZCQUFnQjs7SUFDaEIsNkJBQWdCOztJQUNoQiw4QkFBa0I7O0lBQ2xCLGtDQUFvQjs7QUFHdEI7SUFDMkMseUNBS3pDO0lBTkY7O0lBd0VBLENBQUM7SUEvREMsc0JBQUksdUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQUVELHVDQUFPOzs7SUFBUDtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3JCLFNBQVM7Ozs7WUFBQyxVQUFDLFdBQXlCO2dCQUNsQyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztnQkFBQyxVQUFDLENBQVE7b0JBQ1gsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUMsRUFBQyxDQUNILENBQUM7WUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFFTSxzQ0FBTTs7O0lBQWI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBT0ssb0NBQUk7Ozs7OztJQUFaLFVBQTJCLFFBQXdDO1FBQ2pFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBK0I7WUFDbEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBT0ssd0NBQVE7Ozs7Ozs7SUFBaEIsVUFDdUIsRUFBVSxFQUNqQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQWU7WUFDekIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUMsR0FBd0I7WUFDM0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF2RUYsVUFBVTs7SUEwQ1Q7UUFOQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsb0NBQW9DO1lBQzFDLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFDWSxXQUFBLFVBQVUsRUFBRSxDQUFBOzt5Q0FBWSxVQUFVO3dDQUFzQixVQUFVO3FEQU0vRTtJQVdEO1FBTkMsS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLGtCQUFrQjtZQUN4QixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBRUMsV0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FDbEMsVUFBVTt5REFTWjtJQUNILDRCQUFDO0NBQUEsQUF4RUQsQ0FDMkMsU0FBUztJQUFDO0lBQU8sQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBQVIsS0FBVTtJQUM3RCxPQUFPLEVBQUUsV0FBVztJQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7UUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQixDQUFDO0NBQ0gsQ0FBQyxHQWtFRDtTQXZFWSxxQkFBcUI7Ozs7OztJQU1oQyxzQ0FBcUI7Ozs7OztBQW1FdkIsTUFBTSxVQUFVLGdDQUFnQyxDQUFDLE1BQTZCO0lBQzVFLE9BQU8sTUFBTSxJQUFJLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUMvQyxDQUFDOztBQUVELE1BQU0sS0FBTyx3QkFBd0IsR0FBYTs7SUFFaEQsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9ELFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRSZXNwb25zZSwgVGRQT1NULCBUZFBhcmFtIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlcic7XG5cbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXNzaW9uVXNlciB7XG4gIHVzZXI/OiBzdHJpbmc7XG4gIHZhbGlkPzogYm9vbGVhbjtcbiAgYWRtaW4/OiBib29sZWFuO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbiAgZXhwaXJlc19hdD86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTZXNzaW9uU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSkge1xuICBwcml2YXRlIF91c2VyOiBJVXNlcjtcblxuICBnZXQgdXNlcigpOiBJVXNlciB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXRJbmZvKCk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHNlc3Npb25Vc2VyOiBJU2Vzc2lvblVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0VXNlcihzZXNzaW9uVXNlci51c2VyKS5waXBlKFxuICAgICAgICAgICAgdGFwKCh1OiBJVXNlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgc2Vzc2lvblVzZXIsIHUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5fdXNlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL3VzZXIvbG9nb3V0P25vbmNlPScgKyBNYXRoLmZsb29yKDEwMDAwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwMDAwMCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyB0aGUgY3VycmVudCBzc28gbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rva2VuL3ZhbGlkaXR5P2ZpZWxkcz11c2VyLGdyb3VwcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBwcml2YXRlIF9nZXQoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVNlc3Npb25Vc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgYSBzaW5nbGUgdXNlcnMgaW5mb3JtYXRpb25cbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy91c2Vycy86dXNlcm5hbWUnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0VXNlcihcbiAgICBAVGRQYXJhbSgndXNlcm5hbWUnKSBpZDogc3RyaW5nLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVNlc3Npb25TZXJ2aWNlKTogVmFudGFnZVNlc3Npb25TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVNlc3Npb25TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NFU1NJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU2Vzc2lvblNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19