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
let VantageSessionService = class VantageSessionService {
    /**
     * @return {?}
     */
    get user() {
        return this._user;
    }
    /**
     * @return {?}
     */
    getInfo() {
        if (!this._user) {
            return this._get().pipe(switchMap((/**
             * @param {?} sessionUser
             * @return {?}
             */
            (sessionUser) => {
                return this._getUser(sessionUser.user).pipe(tap((/**
                 * @param {?} u
                 * @return {?}
                 */
                (u) => {
                    this._user = Object.assign({}, sessionUser, u);
                })));
            })));
        }
        else {
            return of(this._user);
        }
    }
    /**
     * @return {?}
     */
    logout() {
        window.location.href = '/api/user/logout?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000);
    }
    /**
     * gets the current sso logged in users information
     * @private
     * @param {?=} response
     * @return {?}
     */
    _get(response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.body;
        })));
    }
    /**
     * gets a single users information
     * @private
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    _getUser(id, response) {
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
export const VANTAGE_SESSION_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSessionService,
    deps: [[new Optional(), new SkipSelf(), VantageSessionService]],
    useFactory: VANTAGE_SESSION_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCwyQkFVQzs7O0lBVEMseUJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHNCQUFlOztJQUNmLHNCQUFnQjs7SUFDaEIsc0JBQWdCOztJQUNoQix1QkFBa0I7O0lBQ2xCLDZCQUFzQjs7SUFDdEIsNkJBQXNCOztJQUN0QiwyQkFBb0I7Ozs7O0FBR3RCLGtDQU1DOzs7SUFMQyw0QkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDZCQUFnQjs7SUFDaEIsOEJBQWtCOztJQUNsQixrQ0FBb0I7O0lBU1QscUJBQXFCLFNBQXJCLHFCQUFxQjs7OztJQUdoQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDckIsU0FBUzs7OztZQUFDLENBQUMsV0FBeUIsRUFBRSxFQUFFO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztnQkFBQyxDQUFDLENBQVEsRUFBRSxFQUFFO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN6RyxDQUFDOzs7Ozs7O0lBV08sSUFBSSxDQUFlLFFBQXdDO1FBQ2pFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBK0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFXTyxRQUFRLENBQ08sRUFBVSxFQUNqQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXdCLEVBQUUsRUFBRTtZQUMvQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBOUJDO0lBTkMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLG9DQUFvQztRQUMxQyxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFDWSxXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FBWSxVQUFVO29DQUFzQixVQUFVO2lEQU0vRTtBQVdEO0lBTkMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFFQyxXQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNuQixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUNsQyxVQUFVO3FEQVNaO0FBakVVLHFCQUFxQjtJQU5qQyxNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsV0FBVztRQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7WUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtTQUMzQixDQUFDO0tBQ0gsQ0FBQztHQUNXLHFCQUFxQixDQWtFakM7U0FsRVkscUJBQXFCOzs7Ozs7SUFDaEMsc0NBQXFCOzs7Ozs7QUFtRXZCLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FBQyxNQUE2QjtJQUM1RSxPQUFPLE1BQU0sSUFBSSxJQUFJLHFCQUFxQixFQUFFLENBQUM7QUFDL0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMvRCxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUE9TVCwgVGRQYXJhbSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBkaXNwbGF5X25hbWU/OiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2Vzc2lvblVzZXIge1xuICB1c2VyPzogc3RyaW5nO1xuICB2YWxpZD86IGJvb2xlYW47XG4gIGFkbWluPzogYm9vbGVhbjtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG4gIGV4cGlyZXNfYXQ/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU2Vzc2lvblNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VyOiBJVXNlcjtcblxuICBnZXQgdXNlcigpOiBJVXNlciB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXRJbmZvKCk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHNlc3Npb25Vc2VyOiBJU2Vzc2lvblVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0VXNlcihzZXNzaW9uVXNlci51c2VyKS5waXBlKFxuICAgICAgICAgICAgdGFwKCh1OiBJVXNlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgc2Vzc2lvblVzZXIsIHUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5fdXNlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvZ291dCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL3VzZXIvbG9nb3V0P25vbmNlPScgKyBNYXRoLmZsb29yKDEwMDAwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogOTAwMDAwMDAwMCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyB0aGUgY3VycmVudCBzc28gbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rva2VuL3ZhbGlkaXR5P2ZpZWxkcz11c2VyLGdyb3VwcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBwcml2YXRlIF9nZXQoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVNlc3Npb25Vc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgYSBzaW5nbGUgdXNlcnMgaW5mb3JtYXRpb25cbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy91c2Vycy86dXNlcm5hbWUnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0VXNlcihcbiAgICBAVGRQYXJhbSgndXNlcm5hbWUnKSBpZDogc3RyaW5nLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVNlc3Npb25TZXJ2aWNlKTogVmFudGFnZVNlc3Npb25TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVNlc3Npb25TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NFU1NJT05fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU2Vzc2lvblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU2Vzc2lvblNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19