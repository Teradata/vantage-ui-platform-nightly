/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
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
export class VantageTokenService extends mixinHttp(class {
}, {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2F1dGgvIiwic291cmNlcyI6WyJ0b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXZFLDRCQU9DOzs7SUFOQyw4QkFBc0I7O0lBQ3RCLCtCQUF1Qjs7SUFDdkIsNEJBQW9COztJQUNwQiw0QkFBb0I7O0lBQ3BCLDRCQUFvQjs7SUFDcEIsMEJBQWtCOztBQUlwQixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUMzRCxPQUFPLEVBQUUsV0FBVztJQUNwQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDOzs7Ozs7SUFPQSxNQUFNLENBQ00sSUFBNEMsRUFDeEMsUUFBMkM7UUFFekQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUF5QixFQUFFLEVBQUU7O2tCQUMxQixJQUFJLEdBQVcsR0FBRyxDQUFDLElBQUk7O2tCQUN2QixLQUFLLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVk7WUFDMUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFVBQVU7O0FBV1Q7SUFOQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUNsQyxVQUFVO2lEQVFaOzs7OztBQUdILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUEyQjtJQUN4RSxPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDN0MsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkUE9TVCwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbiB7XG4gIGFjY2Vzc190b2tlbj86IHN0cmluZztcbiAgcmVmcmVzaF90b2tlbj86IHN0cmluZztcbiAgZXhwaXJlc19hdD86IHN0cmluZztcbiAgdG9rZW5fdHlwZT86IHN0cmluZztcbiAgZXhwaXJlc19pbj86IG51bWJlcjtcbiAgdG9rZW5faW4/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlVG9rZW5TZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXInLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdG9rZW4nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgY3JlYXRlKFxuICAgIEBUZEJvZHkoKSB1c2VyOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8SVRva2VuPj4sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElUb2tlbj4pID0+IHtcbiAgICAgICAgY29uc3QgZGF0YTogSVRva2VuID0gcmVzLmJvZHk7XG4gICAgICAgIGNvbnN0IHRva2VuOiBzdHJpbmcgPSByZXMuaGVhZGVycy5nZXQoJ1gtQVVUSC1UT0tFTicpIHx8IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgICByZXR1cm4geyBkYXRhLCB0b2tlbiB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9UT0tFTl9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVRva2VuU2VydmljZSk6IFZhbnRhZ2VUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVG9rZW5TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RPS0VOX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRva2VuU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUb2tlblNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9UT0tFTl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==