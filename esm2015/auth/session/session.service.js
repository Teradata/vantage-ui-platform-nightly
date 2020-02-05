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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXV0aC8iLCJzb3VyY2VzIjpbInNlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQVksUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVoRCxrQ0FNQzs7O0lBTEMsNEJBQWM7O0lBQ2QsNkJBQWdCOztJQUNoQiw2QkFBZ0I7O0lBQ2hCLDhCQUFrQjs7SUFDbEIsa0NBQW9COztJQVNULHFCQUFxQixTQUFyQixxQkFBcUI7Ozs7SUFHaEMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQ3JCLFNBQVM7Ozs7WUFBQyxDQUFDLFdBQXlCLEVBQUUsRUFBRTtnQkFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ3pDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxFQUFDLENBQ0gsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUNILENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVNLE1BQU07UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDekcsQ0FBQzs7Ozs7OztJQVdPLElBQUksQ0FBZSxRQUF3QztRQUNqRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQStCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7O0lBV08sUUFBUSxDQUNPLEVBQVUsRUFDakIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixVQUFVOzs7O1FBQUMsQ0FBQyxLQUFlLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUF3QixFQUFFLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTlCQztJQU5DLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxvQ0FBb0M7UUFDMUMsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBQ1ksV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBc0IsVUFBVTtpREFNL0U7QUFXRDtJQU5DLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBRUMsV0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbkIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FDbEMsVUFBVTtxREFTWjtBQWpFVSxxQkFBcUI7SUFOakMsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLFdBQVc7UUFDcEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxrQkFBa0I7U0FDM0IsQ0FBQztLQUNILENBQUM7R0FDVyxxQkFBcUIsQ0FrRWpDO1NBbEVZLHFCQUFxQjs7Ozs7O0lBQ2hDLHNDQUFxQjs7Ozs7O0FBbUV2QixNQUFNLFVBQVUsZ0NBQWdDLENBQUMsTUFBNkI7SUFDNUUsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsRUFBRSxDQUFDO0FBQy9DLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLGdDQUFnQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFJlc3BvbnNlLCBUZFBPU1QsIFRkUGFyYW0gfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS91c2VyJztcblxuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlc3Npb25Vc2VyIHtcbiAgdXNlcj86IHN0cmluZztcbiAgdmFsaWQ/OiBib29sZWFuO1xuICBhZG1pbj86IGJvb2xlYW47XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVNlc3Npb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcjogSVVzZXI7XG5cbiAgZ2V0IHVzZXIoKTogSVVzZXIge1xuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgZ2V0SW5mbygpOiBPYnNlcnZhYmxlPElVc2VyPiB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChzZXNzaW9uVXNlcjogSVNlc3Npb25Vc2VyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVzZXIoc2Vzc2lvblVzZXIudXNlcikucGlwZShcbiAgICAgICAgICAgIHRhcCgodTogSVVzZXIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oe30sIHNlc3Npb25Vc2VyLCB1KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS91c2VyL2xvZ291dD9ub25jZT0nICsgTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgdGhlIGN1cnJlbnQgc3NvIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvblxuICAgKi9cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbi92YWxpZGl0eT9maWVsZHM9dXNlcixncm91cHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcHJpdmF0ZSBfZ2V0KEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElTZXNzaW9uVXNlcj4pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRzIGEgc2luZ2xlIHVzZXJzIGluZm9ybWF0aW9uXG4gICAqL1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvdXNlcnMvOnVzZXJuYW1lJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHByaXZhdGUgX2dldFVzZXIoXG4gICAgQFRkUGFyYW0oJ3VzZXJuYW1lJykgaWQ6IHN0cmluZyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8SVVzZXI+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElVc2VyPikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLmJvZHk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NFU1NJT05fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSk6IFZhbnRhZ2VTZXNzaW9uU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTZXNzaW9uU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVNlc3Npb25TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==