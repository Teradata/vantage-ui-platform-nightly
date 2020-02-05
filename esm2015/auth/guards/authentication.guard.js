/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
import { timeout, catchError, map, finalize } from 'rxjs/operators';
import { showPreLoader, hidePreLoader } from '@td-vantage/ui-platform/utilities';
/** @type {?} */
const UNAUTHORIZED = 401;
export class VantageAuthenticationGuard {
    /**
     * @param {?} _router
     * @param {?} _sessionService
     */
    constructor(_router, _sessionService) {
        this._router = _router;
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        showPreLoader();
        return this._sessionService.getInfo().pipe(timeout(5000), catchError((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            // if not logged in, go ahead and log in...otherwise logout
            // append the current path so we get redirected back upon login
            e.status === UNAUTHORIZED
                ? (window.location.href = '/start-login?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000))
                : this._sessionService.logout();
            throw e;
        })), map((/**
         * @return {?}
         */
        () => true)), finalize((/**
         * @return {?}
         */
        () => hidePreLoader())));
    }
}
VantageAuthenticationGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageAuthenticationGuard.ctorParameters = () => [
    { type: Router },
    { type: VantageSessionService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageAuthenticationGuard.prototype._router;
    /**
     * @type {?}
     * @private
     */
    VantageAuthenticationGuard.prototype._sessionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBNEQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O01BRTNFLFlBQVksR0FBVyxHQUFHO0FBR2hDLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBQ3JDLFlBQW9CLE9BQWUsRUFBVSxlQUFzQztRQUEvRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXVCO0lBQUcsQ0FBQzs7Ozs7O0lBRXZGLFdBQVcsQ0FBQyxJQUE0QixFQUFFLEtBQTBCO1FBQ2xFLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixVQUFVOzs7O1FBQUMsQ0FBQyxDQUFvQixFQUFFLEVBQUU7WUFDbEMsMkRBQTJEO1lBQzNELCtEQUErRDtZQUMvRCxDQUFDLENBQUMsTUFBTSxLQUFLLFlBQVk7Z0JBQ3ZCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztnQkFDdEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEMsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUMsRUFDRixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFDZixRQUFROzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNoQyxDQUFDO0lBQ0osQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7WUFSd0QsTUFBTTtZQUNoRSxxQkFBcUI7Ozs7Ozs7SUFTaEIsNkNBQXVCOzs7OztJQUFFLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBWYW50YWdlU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aW1lb3V0LCBjYXRjaEVycm9yLCBtYXAsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgc2hvd1ByZUxvYWRlciwgaGlkZVByZUxvYWRlciB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcyc7XG5cbmNvbnN0IFVOQVVUSE9SSVpFRDogbnVtYmVyID0gNDAxO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9zZXNzaW9uU2VydmljZTogVmFudGFnZVNlc3Npb25TZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgc2hvd1ByZUxvYWRlcigpO1xuICAgIHJldHVybiB0aGlzLl9zZXNzaW9uU2VydmljZS5nZXRJbmZvKCkucGlwZShcbiAgICAgIHRpbWVvdXQoNTAwMCksXG4gICAgICBjYXRjaEVycm9yKChlOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBpZiBub3QgbG9nZ2VkIGluLCBnbyBhaGVhZCBhbmQgbG9nIGluLi4ub3RoZXJ3aXNlIGxvZ291dFxuICAgICAgICAvLyBhcHBlbmQgdGhlIGN1cnJlbnQgcGF0aCBzbyB3ZSBnZXQgcmVkaXJlY3RlZCBiYWNrIHVwb24gbG9naW5cbiAgICAgICAgZS5zdGF0dXMgPT09IFVOQVVUSE9SSVpFRFxuICAgICAgICAgID8gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdGFydC1sb2dpbj9ub25jZT0nICsgTWF0aC5mbG9vcigxMDAwMDAwMDAwICsgTWF0aC5yYW5kb20oKSAqIDkwMDAwMDAwMDApKVxuICAgICAgICAgIDogdGhpcy5fc2Vzc2lvblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiB0cnVlKSxcbiAgICAgIGZpbmFsaXplKCgpID0+IGhpZGVQcmVMb2FkZXIoKSksXG4gICAgKTtcbiAgfVxufVxuIl19