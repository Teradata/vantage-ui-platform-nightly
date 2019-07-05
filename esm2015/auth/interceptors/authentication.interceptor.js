/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
/* 4XX errors */
/** @type {?} */
const UNAUTHORIZED = 401;
/** @type {?} */
const PAYLOAD_TOO_LARGE = 413;
/* 5XX errors */
/** @type {?} */
const SERVICE_UNAVAILABLE = 503;
/** @type {?} */
const GATEWAY_TIMEOUT = 504;
export class VantageAuthenticationInterceptor {
    /**
     * @param {?} error
     * @return {?}
     */
    onResponseError(error) {
        if (error.status === UNAUTHORIZED) {
            // expire the xsrf cookie and reload page
            document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            window.location.reload();
        }
        return error;
    }
    /**
     * @param {?} observable
     * @return {?}
     */
    handleResponse(observable) {
        return observable.pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            // check error and do something
            if (e instanceof HttpErrorResponse) {
                // do something if its response error
                return this.onResponseError(e);
            }
        })));
    }
}
VantageAuthenticationInterceptor.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiaW50ZXJjZXB0b3JzL2F1dGhlbnRpY2F0aW9uLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O01BS3RDLFlBQVksR0FBVyxHQUFHOztNQUMxQixpQkFBaUIsR0FBVyxHQUFHOzs7TUFHL0IsbUJBQW1CLEdBQVcsR0FBRzs7TUFDakMsZUFBZSxHQUFXLEdBQUc7QUFHbkMsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFFM0MsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRTtZQUNqQyx5Q0FBeUM7WUFDekMsUUFBUSxDQUFDLE1BQU0sR0FBRyxvREFBb0QsQ0FBQztZQUN2RSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxVQUEyQjtRQUN4QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ3BCLFVBQVU7Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3BCLCtCQUErQjtZQUMvQixJQUFJLENBQUMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDbEMscUNBQXFDO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSVRkSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG4vKiA0WFggZXJyb3JzICovXG5jb25zdCBVTkFVVEhPUklaRUQ6IG51bWJlciA9IDQwMTtcbmNvbnN0IFBBWUxPQURfVE9PX0xBUkdFOiBudW1iZXIgPSA0MTM7XG5cbi8qIDVYWCBlcnJvcnMgKi9cbmNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEU6IG51bWJlciA9IDUwMztcbmNvbnN0IEdBVEVXQVlfVElNRU9VVDogbnVtYmVyID0gNTA0O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBJVGRIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIG9uUmVzcG9uc2VFcnJvcihlcnJvcjogYW55KTogYW55IHtcbiAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSBVTkFVVEhPUklaRUQpIHtcbiAgICAgIC8vIGV4cGlyZSB0aGUgeHNyZiBjb29raWUgYW5kIHJlbG9hZCBwYWdlXG4gICAgICBkb2N1bWVudC5jb29raWUgPSAnWFNSRi1UT0tFTj07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0gXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2Uob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGVycm9yIGFuZCBkbyBzb21ldGhpbmdcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIC8vIGRvIHNvbWV0aGluZyBpZiBpdHMgcmVzcG9uc2UgZXJyb3JcbiAgICAgICAgIHJldHVybiB0aGlzLm9uUmVzcG9uc2VFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19