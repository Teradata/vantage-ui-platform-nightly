/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { map, catchError } from 'rxjs/operators';
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { TdHttp, TdGET, TdResponse, TdPOST, TdParam } from '@covalent/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this._logout().toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        window.location.reload();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
     * @private
     * @param {?=} response
     * @return {?}
     */
    VantageSessionService.prototype._logout = /**
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
            return res;
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
            return (/** @type {?} */ (res.body));
        })));
    };
    tslib_1.__decorate([
        TdPOST({
            path: '/token/validity?fields=user,groups',
            options: {
                observe: 'response',
            },
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_get", null);
    tslib_1.__decorate([
        TdGET({
            path: '/logout?session=true',
            options: {
                observe: 'response',
            },
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_logout", null);
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
    ], VantageSessionService.prototype, "_getUser", null);
    VantageSessionService = tslib_1.__decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCwyQkFVQzs7O0lBVEMseUJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHNCQUFlOztJQUNmLHNCQUFnQjs7SUFDaEIsc0JBQWdCOztJQUNoQix1QkFBa0I7O0lBQ2xCLDZCQUFzQjs7SUFDdEIsNkJBQXNCOztJQUN0QiwyQkFBb0I7Ozs7O0FBR3RCLGtDQU1DOzs7SUFMQyw0QkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDZCQUFnQjs7SUFDaEIsOEJBQWtCOztJQUNsQixrQ0FBb0I7Ozs7SUFxR3RCLENBQUM7SUF4RkMsc0JBQUksdUNBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTs7OztJQUVELHVDQUFPOzs7SUFBUDtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUs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QXFCOzs7Ozs7SUFFaEMsc0NBQXFCOzs7Ozs7QUE0RnZCLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FBQyxNQUE2QjtJQUM1RSxPQUFPLE1BQU0sSUFBSSxJQUFJLHFCQUFxQixFQUFFLENBQUM7QUFDL0MsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMvRCxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUE9TVCwgVGRQYXJhbSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBkaXNwbGF5X25hbWU/OiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2Vzc2lvblVzZXIge1xuICB1c2VyPzogc3RyaW5nO1xuICB2YWxpZD86IGJvb2xlYW47XG4gIGFkbWluPzogYm9vbGVhbjtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG4gIGV4cGlyZXNfYXQ/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU2Vzc2lvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3VzZXI6IElVc2VyO1xuXG4gIGdldCB1c2VyKCk6IElVc2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGdldEluZm8oKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldCgpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoc2Vzc2lvblVzZXI6IElTZXNzaW9uVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRVc2VyKHNlc3Npb25Vc2VyLnVzZXIpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKHU6IElVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzZXNzaW9uVXNlciwgdSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih0aGlzLl91c2VyKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2dvdXQoKS50b1Byb21pc2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZ25vcmUgZXJyb3JcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gJ1hTUkYtVE9LRU49O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyB0aGUgY3VycmVudCBzc28gbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rva2VuL3ZhbGlkaXR5P2ZpZWxkcz11c2VyLGdyb3VwcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBwcml2YXRlIF9nZXQoXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJU2Vzc2lvblVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvbG9nb3V0P3Nlc3Npb249dHJ1ZScsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBwcml2YXRlIF9sb2dvdXQoXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgYSBzaW5nbGUgdXNlcnMgaW5mb3JtYXRpb25cbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy91c2Vycy86dXNlcm5hbWUnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0VXNlcihcbiAgICBAVGRQYXJhbSgndXNlcm5hbWUnKSBpZDogc3RyaW5nLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiA8SVVzZXI+cmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSk6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTZXNzaW9uU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVNlc3Npb25TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==