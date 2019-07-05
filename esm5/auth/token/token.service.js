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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEIsNEJBT0M7OztJQU5DLDhCQUFzQjs7SUFDdEIsK0JBQXVCOztJQUN2Qiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsNEJBQW9COztJQUNwQiwwQkFBa0I7Ozs7SUF5QnBCLENBQUM7Ozs7OztJQVZDLG9DQUFNOzs7OztJQUFOLFVBQWlCLElBQTRDLEVBQ3hDLFFBQTJDO1FBQzlELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLFVBQUMsR0FBeUI7O2dCQUN4QixJQUFJLEdBQVcsR0FBRyxDQUFDLElBQUk7O2dCQUN2QixLQUFLLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFDeEUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBVEQ7UUFOQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFDTSxtQkFBQSxNQUFNLEVBQUUsQ0FBQTtRQUNSLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzt5REFBWSxVQUFVO2dEQUF5QixVQUFVO3FEQVE1RTtJQWpCVSxtQkFBbUI7UUFKL0IsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDL0QsQ0FBQztPQUNXLG1CQUFtQixDQWtCL0I7SUFBRCwwQkFBQztDQUFBLElBQUE7U0FsQlksbUJBQW1COzs7OztBQW9CaEMsTUFBTSxVQUFVLDhCQUE4QixDQUFDLE1BQTJCO0lBQ3hFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUM3QyxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdELFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIFRkSHR0cCxcbiAgVGRQT1NULFxuICBUZEJvZHksXG4gIFRkUmVzcG9uc2UsXG59IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW4ge1xuICBhY2Nlc3NfdG9rZW4/OiBzdHJpbmc7XG4gIHJlZnJlc2hfdG9rZW4/OiBzdHJpbmc7XG4gIGV4cGlyZXNfYXQ/OiBzdHJpbmc7XG4gIHRva2VuX3R5cGU/OiBzdHJpbmc7XG4gIGV4cGlyZXNfaW4/OiBudW1iZXI7XG4gIHRva2VuX2luPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlcicsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlVG9rZW5TZXJ2aWNlIHtcblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rva2VuJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgdXNlcjogeyB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0sXG4gICAgICAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8SVRva2VuPj4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJVG9rZW4+KSA9PiB7XG4gICAgICAgIGxldCBkYXRhOiBJVG9rZW4gPSByZXMuYm9keTtcbiAgICAgICAgbGV0IHRva2VuOiBzdHJpbmcgPSByZXMuaGVhZGVycy5nZXQoJ1gtQVVUSC1UT0tFTicpIHx8IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgICByZXR1cm4geyBkYXRhOiBkYXRhLCB0b2tlbjogdG9rZW4gfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVE9LRU5fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VUb2tlblNlcnZpY2UpOiBWYW50YWdlVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVRva2VuU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9UT0tFTl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUb2tlblNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlVG9rZW5TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVE9LRU5fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=