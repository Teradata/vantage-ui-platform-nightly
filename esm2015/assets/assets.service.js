/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { map, catchError } from 'rxjs/operators';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { mixinHttp, TdGET, TdResponse } from '@covalent/http';
import { Observable, of } from 'rxjs';
/**
 * @record
 */
export function IHelpAssets() { }
export class VantageAssetsService extends mixinHttp(class {
}, {
    baseUrl: '/ui-assets',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
}) {
    /**
     * Retrieve the help JSON definition asset
     * @param {?=} response
     * @return {?}
     */
    getHelpJSON(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.body;
        })));
    }
}
VantageAssetsService.decorators = [
    { type: Injectable }
];
__decorate([
    TdGET({
        path: '/json/help/help.json',
        options: {
            observe: 'response',
        },
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageAssetsService.prototype, "getHelpJSON", null);
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_ASSETS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAssetsService();
}
/** @type {?} */
export const VANTAGE_ASSETS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAssetsService,
    deps: [[new Optional(), new SkipSelf(), VantageAssetsService]],
    useFactory: VANTAGE_ASSETS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hc3NldHMvIiwic291cmNlcyI6WyJhc3NldHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFJdEMsaUNBS0M7QUFHRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUM1RCxPQUFPLEVBQUUsWUFBWTtJQUNyQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUM7UUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQixDQUFDO0NBQ0gsQ0FBQzs7Ozs7O0lBVUEsV0FBVyxDQUFlLFFBQXdDO1FBQ2hFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBZSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLENBQUMsR0FBOEIsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBekJGLFVBQVU7O0FBZ0JUO0lBTkMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFDVyxXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FBWSxVQUFVO29DQUFzQixVQUFVO3VEQVM5RTs7Ozs7QUFHSCxNQUFNLFVBQVUsK0JBQStCLENBQUMsTUFBNEI7SUFDMUUsT0FBTyxNQUFNLElBQUksSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQzlDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHVCQUF1QixHQUFhOztJQUUvQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUQsVUFBVSxFQUFFLCtCQUErQjtDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtaXhpbkh0dHAsIFRkR0VULCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSU1lbnVJdGVtIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZHluYW1pYy1tZW51JztcblxuZXhwb3J0IGludGVyZmFjZSBJSGVscEFzc2V0cyB7XG4gIFtuYW1lOiBzdHJpbmddOiB7XG4gICAgbGlua3M6IElNZW51SXRlbVtdO1xuICAgIGxlYXJuPzogSU1lbnVJdGVtW107XG4gIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXNzZXRzU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL3VpLWFzc2V0cycsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9KSxcbn0pIHtcbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSBoZWxwIEpTT04gZGVmaW5pdGlvbiBhc3NldFxuICAgKi9cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2pzb24vaGVscC9oZWxwLmpzb24nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgZ2V0SGVscEpTT04oQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxJSGVscEFzc2V0cz4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihlcnJvcik7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SUhlbHBBc3NldHM+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfQVNTRVRTX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlQXNzZXRzU2VydmljZSk6IFZhbnRhZ2VBc3NldHNTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUFzc2V0c1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQVNTRVRTX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUFzc2V0c1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQXNzZXRzU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0FTU0VUU19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==