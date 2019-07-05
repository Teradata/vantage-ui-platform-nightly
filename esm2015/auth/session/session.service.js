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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this._logout().toPromise();
            }
            catch (e) {
                // ignore error
            }
            finally {
                document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.reload();
            }
        });
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
     * @private
     * @param {?=} response
     * @return {?}
     */
    _logout(response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCwyQkFVQzs7O0lBVEMseUJBQWtCOztJQUNsQix5QkFBa0I7O0lBQ2xCLHNCQUFlOztJQUNmLHNCQUFnQjs7SUFDaEIsc0JBQWdCOztJQUNoQix1QkFBa0I7O0lBQ2xCLDZCQUFzQjs7SUFDdEIsNkJBQXNCOztJQUN0QiwyQkFBb0I7Ozs7O0FBR3RCLGtDQU1DOzs7SUFMQyw0QkFBYzs7SUFDZCw2QkFBZ0I7O0lBQ2hCLDZCQUFnQjs7SUFDaEIsOEJBQWtCOztJQUNsQixrQ0FBb0I7O0lBU1QscUJBQXFCLFNBQXJCLHFCQUFxQjs7OztJQUloQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDckIsU0FB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Qjs7Ozs7O0lBRWhDLHNDQUFxQjs7Ozs7O0FBNEZ2QixNQUFNLFVBQVUsZ0NBQWdDLENBQUMsTUFBNkI7SUFDNUUsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0FBQy9DLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLGdDQUFnQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFJlc3BvbnNlLCBUZFBPU1QsIFRkUGFyYW0gfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlciB7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIGxvY2FsPzogYm9vbGVhbjtcbiAgYWRtaW4/OiBib29sZWFuO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbiAgZGlzcGxheV9uYW1lPzogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG4gIGV4cGlyZXNfYXQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlc3Npb25Vc2VyIHtcbiAgdXNlcj86IHN0cmluZztcbiAgdmFsaWQ/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVNlc3Npb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIF91c2VyOiBJVXNlcjtcblxuICBnZXQgdXNlcigpOiBJVXNlciB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXRJbmZvKCk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHNlc3Npb25Vc2VyOiBJU2Vzc2lvblVzZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0VXNlcihzZXNzaW9uVXNlci51c2VyKS5waXBlKFxuICAgICAgICAgICAgdGFwKCh1OiBJVXNlcikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbih7fSwgc2Vzc2lvblVzZXIsIHUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5fdXNlcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbG9nb3V0KCkudG9Qcm9taXNlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWdub3JlIGVycm9yXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdYU1JGLVRPS0VOPTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgdGhlIGN1cnJlbnQgc3NvIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbi92YWxpZGl0eT9maWVsZHM9dXNlcixncm91cHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0KFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVNlc3Npb25Vc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2xvZ291dD9zZXNzaW9uPXRydWUnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfbG9nb3V0KFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIGEgc2luZ2xlIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMvOnVzZXJuYW1lJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHByaXZhdGUgX2dldFVzZXIoXG4gICAgQFRkUGFyYW0oJ3VzZXJuYW1lJykgaWQ6IHN0cmluZyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElVc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gPElVc2VyPnJlcy5ib2R5O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU2Vzc2lvblNlcnZpY2UpOiBWYW50YWdlU2Vzc2lvblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU2Vzc2lvblNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTZXNzaW9uU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=