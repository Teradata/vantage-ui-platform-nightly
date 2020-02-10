/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
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
export class VantageSessionService extends mixinHttp(class {
}, {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
}) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFaEQsa0NBTUM7OztJQUxDLDRCQUFjOztJQUNkLDZCQUFnQjs7SUFDaEIsNkJBQWdCOztJQUNoQiw4QkFBa0I7O0lBQ2xCLGtDQUFvQjs7QUFJdEIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFNBQVMsQ0FBQztDQUFRLEVBQUU7SUFDN0QsT0FBTyxFQUFFLFdBQVc7SUFDcEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQzNCLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0IsQ0FBQztDQUNILENBQUM7Ozs7SUFHQSxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDckIsU0FBUzs7OztZQUFDLENBQUMsV0FBeUIsRUFBRSxFQUFFO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDekMsR0FBRzs7OztnQkFBQyxDQUFDLENBQVEsRUFBRSxFQUFFO29CQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN6RyxDQUFDOzs7Ozs7O0lBV08sSUFBSSxDQUFlLFFBQXdDO1FBQ2pFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBK0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFXTyxRQUFRLENBQ08sRUFBVSxFQUNqQixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQWUsRUFBRSxFQUFFO1lBQzdCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXdCLEVBQUUsRUFBRTtZQUMvQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXZFRixVQUFVOztBQTBDVDtJQU5DLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxvQ0FBb0M7UUFDMUMsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBQ1ksV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBc0IsVUFBVTtpREFNL0U7QUFXRDtJQU5DLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUMsV0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbkIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FDbEMsVUFBVTtxREFTWjs7Ozs7O0lBaEVELHNDQUFxQjs7Ozs7O0FBbUV2QixNQUFNLFVBQVUsZ0NBQWdDLENBQUMsTUFBNkI7SUFDNUUsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0FBQy9DLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLGdDQUFnQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkR0VULCBUZFJlc3BvbnNlLCBUZFBPU1QsIFRkUGFyYW0gfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS91c2VyJztcblxuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlc3Npb25Vc2VyIHtcbiAgdXNlcj86IHN0cmluZztcbiAgdmFsaWQ/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVNlc3Npb25TZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSksXG59KSB7XG4gIHByaXZhdGUgX3VzZXI6IElVc2VyO1xuXG4gIGdldCB1c2VyKCk6IElVc2VyIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGdldEluZm8oKTogT2JzZXJ2YWJsZTxJVXNlcj4ge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldCgpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoc2Vzc2lvblVzZXI6IElTZXNzaW9uVXNlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRVc2VyKHNlc3Npb25Vc2VyLnVzZXIpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKHU6IElVc2VyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzZXNzaW9uVXNlciwgdSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvZih0aGlzLl91c2VyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbG9nb3V0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hcGkvdXNlci9sb2dvdXQ/bm9uY2U9JyArIE1hdGguZmxvb3IoMTAwMDAwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDAwMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIHRoZSBjdXJyZW50IHNzbyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb25cbiAgICovXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdG9rZW4vdmFsaWRpdHk/ZmllbGRzPXVzZXIsZ3JvdXBzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHByaXZhdGUgX2dldChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJU2Vzc2lvblVzZXI+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBhIHNpbmdsZSB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3VzZXJzLzp1c2VybmFtZScsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBwcml2YXRlIF9nZXRVc2VyKFxuICAgIEBUZFBhcmFtKCd1c2VybmFtZScpIGlkOiBzdHJpbmcsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPElVc2VyPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJVXNlcj4pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpOiBWYW50YWdlU2Vzc2lvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU2Vzc2lvblNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTZXNzaW9uU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=