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
            // if logged in, go ahead an expire the cooke and reload the page
            if (!error.url.includes('/token/validity')) {
                document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.reload();
            }
        }
        throw error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiaW50ZXJjZXB0b3JzL2F1dGhlbnRpY2F0aW9uLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBS3RDLFlBQVksR0FBVyxHQUFHOztJQUMxQixpQkFBaUIsR0FBVyxHQUFHOzs7SUFHL0IsbUJBQW1CLEdBQVcsR0FBRzs7SUFDakMsZUFBZSxHQUFXLEdBQUc7QUFFbkM7SUFBQTtJQXlCQSxDQUFDOzs7OztJQXRCQywwREFBZTs7OztJQUFmLFVBQWdCLEtBQVU7UUFDeEIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRTtZQUNqQyxpRUFBaUU7WUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQzFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsb0RBQW9ELENBQUM7Z0JBQ3ZFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7U0FDRjtRQUNELE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCx5REFBYzs7OztJQUFkLFVBQWUsVUFBMkI7UUFBMUMsaUJBVUM7UUFUQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ3BCLFVBQVU7Ozs7UUFBQyxVQUFDLENBQU07WUFDaEIsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxZQUFZLGlCQUFpQixFQUFFO2dCQUNsQyxxQ0FBcUM7Z0JBQ3RDLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF4QkYsVUFBVTs7SUF5QlgsdUNBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSVRkSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG4vKiA0WFggZXJyb3JzICovXG5jb25zdCBVTkFVVEhPUklaRUQ6IG51bWJlciA9IDQwMTtcbmNvbnN0IFBBWUxPQURfVE9PX0xBUkdFOiBudW1iZXIgPSA0MTM7XG5cbi8qIDVYWCBlcnJvcnMgKi9cbmNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEU6IG51bWJlciA9IDUwMztcbmNvbnN0IEdBVEVXQVlfVElNRU9VVDogbnVtYmVyID0gNTA0O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBJVGRIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIG9uUmVzcG9uc2VFcnJvcihlcnJvcjogYW55KTogYW55IHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSBVTkFVVEhPUklaRUQpIHtcbiAgICAgIC8vIGlmIGxvZ2dlZCBpbiwgZ28gYWhlYWQgYW4gZXhwaXJlIHRoZSBjb29rZSBhbmQgcmVsb2FkIHRoZSBwYWdlXG4gICAgICBpZiAoIWVycm9yLnVybC5pbmNsdWRlcygnL3Rva2VuL3ZhbGlkaXR5JykpIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ1hTUkYtVE9LRU49O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH0gXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBoYW5kbGVSZXNwb25zZShvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgZXJyb3IgYW5kIGRvIHNvbWV0aGluZ1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gZG8gc29tZXRoaW5nIGlmIGl0cyByZXNwb25zZSBlcnJvclxuICAgICAgICAgcmV0dXJuIHRoaXMub25SZXNwb25zZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iXX0=