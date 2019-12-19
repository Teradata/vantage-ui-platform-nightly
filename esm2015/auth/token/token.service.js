/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TdHttp, TdPOST, TdBody, TdResponse } from '@covalent/http';
/**
 * @record
 */
export function IToken() { }
if (false) {
    /** @type {?|undefined} */
    IToken.prototype.access_token;
    /** @type {?|undefined} */
    IToken.prototype.refresh_token;
    /** @type {?|undefined} */
    IToken.prototype.expires_at;
    /** @type {?|undefined} */
    IToken.prototype.token_type;
    /** @type {?|undefined} */
    IToken.prototype.expires_in;
    /** @type {?|undefined} */
    IToken.prototype.token_in;
}
let VantageTokenService = class VantageTokenService {
    /**
     * @param {?} user
     * @param {?=} response
     * @return {?}
     */
    create(user, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            /** @type {?} */
            const data = res.body;
            /** @type {?} */
            const token = res.headers.get('X-AUTH-TOKEN') || data.access_token;
            return { data, token };
        })));
    }
};
__decorate([
    TdPOST({
        path: '/token',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdBody()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageTokenService.prototype, "create", null);
VantageTokenService = __decorate([
    TdHttp({
        baseUrl: '/api/user',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageTokenService);
export { VantageTokenService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_TOKEN_PROVIDER_FACTORY(parent) {
    return parent || new VantageTokenService();
}
/** @type {?} */
export const VANTAGE_TOKEN_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageTokenService,
    deps: [[new Optional(), new SkipSelf(), VantageTokenService]],
    useFactory: VANTAGE_TOKEN_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFcEUsNEJBT0M7OztJQU5DLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2Qiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsNEJBQW9COztJQUNwQiwwQkFBa0I7O0lBT1AsbUJBQW1CLFNBQW5CLG1CQUFtQjs7Ozs7O0lBTzlCLE1BQU0sQ0FDTSxJQUE0QyxFQUN4QyxRQUEyQztRQUV6RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXlCLEVBQUUsRUFBRTs7a0JBQzFCLElBQUksR0FBVyxHQUFHLENBQUMsSUFBSTs7a0JBQ3ZCLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpDO0lBTkMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFFQyxXQUFBLE1BQU0sRUFBRSxDQUFBO0lBQ1IsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FDbEMsVUFBVTtpREFRWjtBQWxCVSxtQkFBbUI7SUFKL0IsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLFdBQVc7UUFDcEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7S0FDN0QsQ0FBQztHQUNXLG1CQUFtQixDQW1CL0I7U0FuQlksbUJBQW1COzs7OztBQXFCaEMsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQTJCO0lBQ3hFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUM3QyxDQUFDOztBQUVELE1BQU0sT0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRQT1NULCBUZEJvZHksIFRkUmVzcG9uc2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuIHtcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xuICB0b2tlbl90eXBlPzogc3RyaW5nO1xuICBleHBpcmVzX2luPzogbnVtYmVyO1xuICB0b2tlbl9pbj86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUb2tlblNlcnZpY2Uge1xuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rva2VuJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIGNyZWF0ZShcbiAgICBAVGRCb2R5KCkgdXNlcjogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0sXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPElUb2tlbj4+LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJVG9rZW4+KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGE6IElUb2tlbiA9IHJlcy5ib2R5O1xuICAgICAgICBjb25zdCB0b2tlbjogc3RyaW5nID0gcmVzLmhlYWRlcnMuZ2V0KCdYLUFVVEgtVE9LRU4nKSB8fCBkYXRhLmFjY2Vzc190b2tlbjtcbiAgICAgICAgcmV0dXJuIHsgZGF0YSwgdG9rZW4gfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVE9LRU5fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VUb2tlblNlcnZpY2UpOiBWYW50YWdlVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVRva2VuU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9UT0tFTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUb2tlblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVG9rZW5TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVE9LRU5fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=