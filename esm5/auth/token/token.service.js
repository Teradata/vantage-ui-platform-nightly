/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mixinHttp, TdPOST, TdBody, TdResponse } from '@covalent/http';
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
var VantageTokenService = /** @class */ (function (_super) {
    __extends(VantageTokenService, _super);
    function VantageTokenService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    VantageTokenService.decorators = [
        { type: Injectable }
    ];
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
    return VantageTokenService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXZFLDRCQU9DOzs7SUFOQyw4QkFBc0I7O0lBQ3RCLCtCQUF1Qjs7SUFDdkIsNEJBQW9COztJQUNwQiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsMEJBQWtCOztBQUdwQjtJQUN5Qyx1Q0FHdkM7SUFKRjs7SUF1QkEsQ0FBQzs7Ozs7O0lBWkMsb0NBQU07Ozs7O0lBQU4sVUFDWSxJQUE0QyxFQUN4QyxRQUEyQztRQUV6RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQXlCOztnQkFDdEIsSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJOztnQkFDdkIsS0FBSyxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZO1lBQzFFLE9BQU8sRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF0QkYsVUFBVTs7SUFXVDtRQU5DLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUVDLFdBQUEsTUFBTSxFQUFFLENBQUE7UUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUNsQyxVQUFVO3FEQVFaO0lBQ0gsMEJBQUM7Q0FBQSxBQXZCRCxDQUN5QyxTQUFTO0lBQUM7SUFBTyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBUixLQUFVO0lBQzNELE9BQU8sRUFBRSxXQUFXO0lBQ3BCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUMsR0FtQkQ7U0F0QlksbUJBQW1COzs7OztBQXdCaEMsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQTJCO0lBQ3hFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUM3QyxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IG1peGluSHR0cCwgVGRQT1NULCBUZEJvZHksIFRkUmVzcG9uc2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VuIHtcbiAgYWNjZXNzX3Rva2VuPzogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICBleHBpcmVzX2F0Pzogc3RyaW5nO1xuICB0b2tlbl90eXBlPzogc3RyaW5nO1xuICBleHBpcmVzX2luPzogbnVtYmVyO1xuICB0b2tlbl9pbj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUb2tlblNlcnZpY2UgZXh0ZW5kcyBtaXhpbkh0dHAoY2xhc3Mge30sIHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90b2tlbicsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBjcmVhdGUoXG4gICAgQFRkQm9keSgpIHVzZXI6IHsgdXNlcm5hbWU6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9LFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxJVG9rZW4+PixcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVRva2VuPikgPT4ge1xuICAgICAgICBjb25zdCBkYXRhOiBJVG9rZW4gPSByZXMuYm9keTtcbiAgICAgICAgY29uc3QgdG9rZW46IHN0cmluZyA9IHJlcy5oZWFkZXJzLmdldCgnWC1BVVRILVRPS0VOJykgfHwgZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHJldHVybiB7IGRhdGEsIHRva2VuIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1RPS0VOX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlVG9rZW5TZXJ2aWNlKTogVmFudGFnZVRva2VuU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUb2tlblNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVE9LRU5fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVG9rZW5TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRva2VuU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RPS0VOX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19