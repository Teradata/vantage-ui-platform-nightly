/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TdHttp, TdPOST, TdBody, TdResponse, } from '@covalent/http';
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
            let data = res.body;
            /** @type {?} */
            let token = res.headers.get('X-AUTH-TOKEN') || data.access_token;
            return { data: data, token: token };
        })));
    }
};
tslib_1.__decorate([
    TdPOST({
        path: '/token',
        options: {
            observe: 'response',
        },
    }),
    tslib_1.__param(0, TdBody()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageTokenService.prototype, "create", null);
VantageTokenService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/user',
        baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEIsNEJBT0M7OztJQU5DLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2Qiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsNEJBQW9COztJQUNwQiwwQkFBa0I7O0lBT1AsbUJBQW1CLFNBQW5CLG1CQUFtQjs7Ozs7O0lBUTlCLE1BQU0sQ0FBVyxJQUE0QyxFQUN4QyxRQUEyQztRQUM5RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXlCLEVBQUUsRUFBRTs7Z0JBQzVCLElBQUksR0FBVyxHQUFHLENBQUMsSUFBSTs7Z0JBQ3ZCLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBVkM7SUFOQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUNNLG1CQUFBLE1BQU0sRUFBRSxDQUFBO0lBQ1IsbUJBQUEsVUFBVSxFQUFFLENBQUE7O3FEQUFZLFVBQVU7NENBQXlCLFVBQVU7aURBUTVFO0FBakJVLG1CQUFtQjtJQUovQixNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsV0FBVztRQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUMvRCxDQUFDO0dBQ1csbUJBQW1CLENBa0IvQjtTQWxCWSxtQkFBbUI7Ozs7O0FBb0JoQyxNQUFNLFVBQVUsOEJBQThCLENBQUMsTUFBMkI7SUFDeEUsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQzdDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgVGRIdHRwLFxuICBUZFBPU1QsXG4gIFRkQm9keSxcbiAgVGRSZXNwb25zZSxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgcmVmcmVzaF90b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IHN0cmluZztcbiAgdG9rZW5fdHlwZT86IHN0cmluZztcbiAgZXhwaXJlc19pbj86IG51bWJlcjtcbiAgdG9rZW5faW4/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUb2tlblNlcnZpY2Uge1xuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdG9rZW4nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSB1c2VyOiB7IHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfSxcbiAgICAgICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxJVG9rZW4+Pik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElUb2tlbj4pID0+IHtcbiAgICAgICAgbGV0IGRhdGE6IElUb2tlbiA9IHJlcy5ib2R5O1xuICAgICAgICBsZXQgdG9rZW46IHN0cmluZyA9IHJlcy5oZWFkZXJzLmdldCgnWC1BVVRILVRPS0VOJykgfHwgZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIHRva2VuOiB0b2tlbiB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9UT0tFTl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVRva2VuU2VydmljZSk6IFZhbnRhZ2VUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVG9rZW5TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RPS0VOX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRva2VuU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUb2tlblNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9UT0tFTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==