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
var VantageTokenService = /** @class */ (function () {
    function VantageTokenService() {
    }
    /**
     * @param {?} user
     * @param {?=} response
     * @return {?}
     */
    VantageTokenService.prototype.create = /**
     * @param {?} user
     * @param {?=} response
     * @return {?}
     */
    function (user, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var data = res.body;
            /** @type {?} */
            var token = res.headers.get('X-AUTH-TOKEN') || data.access_token;
            return { data: data, token: token };
        })));
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
    return VantageTokenService;
}());
export { VantageTokenService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_TOKEN_PROVIDER_FACTORY(parent) {
    return parent || new VantageTokenService();
}
/** @type {?} */
export var VANTAGE_TOKEN_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageTokenService,
    deps: [[new Optional(), new SkipSelf(), VantageTokenService]],
    useFactory: VANTAGE_TOKEN_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFcEUsNEJBT0M7OztJQU5DLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2Qiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsNEJBQW9COztJQUNwQiwwQkFBa0I7Ozs7SUEwQnBCLENBQUM7Ozs7OztJQVpDLG9DQUFNOzs7OztJQUFOLFVBQ1ksSUFBNEMsRUFDeEMsUUFBMkM7UUFFekQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsVUFBQyxHQUF5Qjs7Z0JBQ3RCLElBQUksR0FBVyxHQUFHLENBQUMsSUFBSTs7Z0JBQ3ZCLEtBQUssR0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUMxRSxPQUFPLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQVhEO1FBTkMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFVBQVU7YUFDcEI7U0FDRixDQUFDO1FBRUMsV0FBQSxNQUFNLEVBQUUsQ0FBQTtRQUNSLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQ2xDLFVBQVU7cURBUVo7SUFsQlUsbUJBQW1CO1FBSi9CLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FDVyxtQkFBbUIsQ0FtQi9CO0lBQUQsMEJBQUM7Q0FBQSxJQUFBO1NBbkJZLG1CQUFtQjs7Ozs7QUFxQmhDLE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUEyQjtJQUN4RSxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkUE9TVCwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgcmVmcmVzaF90b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IHN0cmluZztcbiAgdG9rZW5fdHlwZT86IHN0cmluZztcbiAgZXhwaXJlc19pbj86IG51bWJlcjtcbiAgdG9rZW5faW4/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlVG9rZW5TZXJ2aWNlIHtcbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbicsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBjcmVhdGUoXG4gICAgQFRkQm9keSgpIHVzZXI6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9LFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxJVG9rZW4+PixcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVRva2VuPikgPT4ge1xuICAgICAgICBjb25zdCBkYXRhOiBJVG9rZW4gPSByZXMuYm9keTtcbiAgICAgICAgY29uc3QgdG9rZW46IHN0cmluZyA9IHJlcy5oZWFkZXJzLmdldCgnWC1BVVRILVRPS0VOJykgfHwgZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHJldHVybiB7IGRhdGEsIHRva2VuIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1RPS0VOX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlVG9rZW5TZXJ2aWNlKTogVmFudGFnZVRva2VuU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUb2tlblNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVE9LRU5fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVG9rZW5TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRva2VuU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RPS0VOX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19