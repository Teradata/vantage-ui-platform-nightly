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
            // if logged in, go ahead an expire the cooke and reload the page
            if (!error.url.includes('/token/validity')) {
                document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.reload();
            }
        }
        throw error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiaW50ZXJjZXB0b3JzL2F1dGhlbnRpY2F0aW9uLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O01BS3RDLFlBQVksR0FBVyxHQUFHOztNQUMxQixpQkFBaUIsR0FBVyxHQUFHOzs7TUFHL0IsbUJBQW1CLEdBQVcsR0FBRzs7TUFDakMsZUFBZSxHQUFXLEdBQUc7QUFHbkMsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7SUFFM0MsZUFBZSxDQUFDLEtBQVU7UUFDeEIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFlBQVksRUFBRTtZQUNqQyxpRUFBaUU7WUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQzFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsb0RBQW9ELENBQUM7Z0JBQ3ZFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDMUI7U0FDRjtRQUNELE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsVUFBMkI7UUFDeEMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUNwQixVQUFVOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNwQiwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ2xDLHFDQUFxQztnQkFDdEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXhCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElUZEh0dHBJbnRlcmNlcHRvciB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuLyogNFhYIGVycm9ycyAqL1xuY29uc3QgVU5BVVRIT1JJWkVEOiBudW1iZXIgPSA0MDE7XG5jb25zdCBQQVlMT0FEX1RPT19MQVJHRTogbnVtYmVyID0gNDEzO1xuXG4vKiA1WFggZXJyb3JzICovXG5jb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFOiBudW1iZXIgPSA1MDM7XG5jb25zdCBHQVRFV0FZX1RJTUVPVVQ6IG51bWJlciA9IDUwNDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkludGVyY2VwdG9yIGltcGxlbWVudHMgSVRkSHR0cEludGVyY2VwdG9yIHtcblxuICBvblJlc3BvbnNlRXJyb3IoZXJyb3I6IGFueSk6IGFueSB7XG4gICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gVU5BVVRIT1JJWkVEKSB7XG4gICAgICAvLyBpZiBsb2dnZWQgaW4sIGdvIGFoZWFkIGFuIGV4cGlyZSB0aGUgY29va2UgYW5kIHJlbG9hZCB0aGUgcGFnZVxuICAgICAgaWYgKCFlcnJvci51cmwuaW5jbHVkZXMoJy90b2tlbi92YWxpZGl0eScpKSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdYU1JGLVRPS0VOPTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9IFxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgaGFuZGxlUmVzcG9uc2Uob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZTogYW55KSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGVycm9yIGFuZCBkbyBzb21ldGhpbmdcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIC8vIGRvIHNvbWV0aGluZyBpZiBpdHMgcmVzcG9uc2UgZXJyb3JcbiAgICAgICAgIHJldHVybiB0aGlzLm9uUmVzcG9uc2VFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19