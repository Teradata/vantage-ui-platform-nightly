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
        window.location.href = '/api/user/logout';
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
            return (/** @type {?} */ (res.body));
        })));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCwyQkFVQzs7O0lBVEMseUJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHNCQUFlOztJQUNmLHNCQUFnQjs7SUFDaEIsc0JBQWdCOztJQUNoQix1QkFBa0I7O0lBQ2xCLDZCQUFzQjs7SUFDdEIsNkJBQXNCOztJQUN0QiwyQkFBb0I7Ozs7O0FBR3RCLGtDQU1DOzs7SUFMQyw0QkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDZCQUFnQjs7SUFDaEIsOEJBQWtCOztJQUNsQixrQ0FBb0I7O0lBU1QscUJBQXFCLFNBQXJCLHFCQUFxQjs7OztJQUloQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDckIsU0FBUzs7OztZQUFDLENBQUMsV0FBeUIsRUFBRSxFQUFFO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztnQkFBQyxDQUFDLENBQVEsRUFBRSxFQUFFO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFXTyxJQUFJLENBQ0ksUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUErQixFQUFFLEVBQUU7WUFDdEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVdPLFFBQVEsQ0FDTyxFQUFVLEVBQ2pCLFFBQXdDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsR0FBd0IsRUFBRSxFQUFFO1lBQy9CLE9BQU8sbUJBQU8sR0FBRyxDQUFDLElBQUksRUFBQSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhDQztJQU5DLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxvQ0FBb0M7UUFDMUMsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUMsbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7NENBQ2xDLFVBQVU7aURBTVo7QUFXRDtJQU5DLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUMsbUJBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ25CLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVOzRDQUNsQyxVQUFVO3FEQVNaO0FBcEVVLHFCQUFxQjtJQU5qQyxNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsV0FBVztRQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7WUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtTQUMzQixDQUFDO0tBQ0gsQ0FBQztHQUNXLHFCQUFxQixDQXFFakM7U0FyRVkscUJBQXFCOzs7Ozs7SUFFaEMsc0NBQXFCOzs7Ozs7QUFxRXZCLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FBQyxNQUE2QjtJQUM1RSxPQUFPLE1BQU0sSUFBSSxJQUFJLHFCQUFxQixFQUFFLENBQUM7QUFDL0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMvRCxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUmVzcG9uc2UsIFRkUE9TVCwgVGRQYXJhbSB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRhcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgbG9jYWw/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBkaXNwbGF5X25hbWU/OiBzdHJpbmc7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2Vzc2lvblVzZXIge1xuICB1c2VyPzogc3RyaW5nO1xuICB2YWxpZD86IGJvb2xlYW47XG4gIGFkbWluPzogYm9vbGVhbjtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG4gIGV4cGlyZXNfYXQ/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU2Vzc2lvblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3VzZXI6IElVc2VyO1xuXG4gIGdldCB1c2VyKCk6IElVc2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGdldEluZm8oKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldCgpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoc2Vzc2lvblVzZXI6IElTZXNzaW9uVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRVc2VyKHNlc3Npb25Vc2VyLnVzZXIpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKHU6IElVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzZXNzaW9uVXNlciwgdSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICkpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih0aGlzLl91c2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvdXNlci9sb2dvdXQnO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgdGhlIGN1cnJlbnQgc3NvIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbi92YWxpZGl0eT9maWVsZHM9dXNlcixncm91cHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0KFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVNlc3Npb25Vc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgYSBzaW5nbGUgdXNlcnMgaW5mb3JtYXRpb25cbiAgICovXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy91c2Vycy86dXNlcm5hbWUnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0VXNlcihcbiAgICBAVGRQYXJhbSgndXNlcm5hbWUnKSBpZDogc3RyaW5nLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiA8SVVzZXI+cmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSk6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTZXNzaW9uU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVNlc3Npb25TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==