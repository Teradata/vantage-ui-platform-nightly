/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
/* 4XX errors */
/** @type {?} */
var UNAUTHORIZED = 401;
/** @type {?} */
var PAYLOAD_TOO_LARGE = 413;
/* 5XX errors */
/** @type {?} */
var SERVICE_UNAVAILABLE = 503;
/** @type {?} */
var GATEWAY_TIMEOUT = 504;
var VantageAuthenticationInterceptor = /** @class */ (function () {
    function VantageAuthenticationInterceptor() {
    }
    /**
     * @param {?} error
     * @return {?}
     */
    VantageAuthenticationInterceptor.prototype.onResponseError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error.status === UNAUTHORIZED) {
            // expire the xsrf cookie and reload page
            document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            window.location.reload();
        }
        return error;
    };
    /**
     * @param {?} observable
     * @return {?}
     */
    VantageAuthenticationInterceptor.prototype.handleResponse = /**
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // check error and do something
            if (e instanceof HttpErrorResponse) {
                // do something if its response error
                return _this.onResponseError(e);
            }
        })));
    };
    VantageAuthenticationInterceptor.decorators = [
        { type: Injectable }
    ];
    return VantageAuthenticationInterceptor;
}());
export { VantageAuthenticationInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiaW50ZXJjZXB0b3JzL2F1dGhlbnRpY2F0aW9uLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBS3RDLFlBQVksR0FBVyxHQUFHOztJQUMxQixpQkFBaUIsR0FBVyxHQUFHOzs7SUFHL0IsbUJBQW1CLEdBQVcsR0FBRzs7SUFDakMsZUFBZSxHQUFXLEdBQUc7QUFFbkM7SUFBQTtJQXVCQSxDQUFDOzs7OztJQXBCQywwREFBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRTtZQUNqQyx5Q0FBeUM7WUFDekMsUUFBUSxDQUFDLE1BQU0sR0FBRyxvREFBb0QsQ0FBQztZQUN2RSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELHlEQUFjOzs7O0lBQWQsVUFBZSxVQUEyQjtRQUExQyxpQkFVQztRQVRDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FDcEIsVUFBVTs7OztRQUFDLFVBQUMsQ0FBTTtZQUNoQiwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ2xDLHFDQUFxQztnQkFDdEMsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixVQUFVOztJQXVCWCx1Q0FBQztDQUFBLEFBdkJELElBdUJDO1NBdEJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJVGRIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbi8qIDRYWCBlcnJvcnMgKi9cbmNvbnN0IFVOQVVUSE9SSVpFRDogbnVtYmVyID0gNDAxO1xuY29uc3QgUEFZTE9BRF9UT09fTEFSR0U6IG51bWJlciA9IDQxMztcblxuLyogNVhYIGVycm9ycyAqL1xuY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRTogbnVtYmVyID0gNTAzO1xuY29uc3QgR0FURVdBWV9USU1FT1VUOiBudW1iZXIgPSA1MDQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25JbnRlcmNlcHRvciBpbXBsZW1lbnRzIElUZEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgb25SZXNwb25zZUVycm9yKGVycm9yOiBhbnkpOiBhbnkge1xuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRCkge1xuICAgICAgLy8gZXhwaXJlIHRoZSB4c3JmIGNvb2tpZSBhbmQgcmVsb2FkIHBhZ2VcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdYU1JGLVRPS0VOPTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSBcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgZXJyb3IgYW5kIGRvIHNvbWV0aGluZ1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gZG8gc29tZXRoaW5nIGlmIGl0cyByZXNwb25zZSBlcnJvclxuICAgICAgICAgcmV0dXJuIHRoaXMub25SZXNwb25zZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iXX0=