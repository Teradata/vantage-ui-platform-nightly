/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TdMediaService } from '@covalent/core/media';
export class VantageToastService {
    /**
     * @param {?} _snackBarService
     * @param {?} _media
     */
    constructor(_snackBarService, _media) {
        this._snackBarService = _snackBarService;
        this._media = _media;
    }
    /**
     * @param {?} message
     * @param {?=} time
     * @return {?}
     */
    open(message, time = 3000) {
        if (message) {
            this._snackBarService.open(message, undefined, {
                duration: time,
                horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
            });
        }
    }
}
VantageToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageToastService.ctorParameters = () => [
    { type: MatSnackBar },
    { type: TdMediaService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageToastService.prototype._snackBarService;
    /**
     * @type {?}
     * @private
     */
    VantageToastService.prototype._media;
}
/**
 * @param {?} parent
 * @param {?} snackBar
 * @param {?} media
 * @return {?}
 */
export function VANTAGE_TOAST_PROVIDER_FACTORY(parent, snackBar, media) {
    return parent || new VantageToastService(snackBar, media);
}
/** @type {?} */
export const VANTAGE_TOAST_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageToastService,
    deps: [[new Optional(), new SkipSelf(), VantageToastService], MatSnackBar, [new Optional(), TdMediaService]],
    useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHdEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsWUFBb0IsZ0JBQTZCLEVBQzdCLE1BQXNCO1FBRHRCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBYTtRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUFJLENBQUM7Ozs7OztJQUUvQyxJQUFJLENBQUMsT0FBZSxFQUFFLE9BQWUsSUFBSTtRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtnQkFDN0MsUUFBUSxFQUFFLElBQUk7Z0JBQ2Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2pGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBYkYsVUFBVTs7OztZQUpGLFdBQVc7WUFFWCxjQUFjOzs7Ozs7O0lBS1QsK0NBQXFDOzs7OztJQUNyQyxxQ0FBOEI7Ozs7Ozs7O0FBYTVDLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFBRSxRQUFxQixFQUFFLEtBQXFCO0lBQ3pFLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVELENBQUM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM1RyxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbmltcG9ydCB7IFRkTWVkaWFTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvbWVkaWEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZVRvYXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBNYXRTbmFja0JhcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbWVkaWE6IFRkTWVkaWFTZXJ2aWNlKSB7IH1cblxuICBvcGVuKG1lc3NhZ2U6IHN0cmluZywgdGltZTogbnVtYmVyID0gMzAwMCk6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICB0aGlzLl9zbmFja0JhclNlcnZpY2Uub3BlbihtZXNzYWdlLCB1bmRlZmluZWQsIHtcbiAgICAgICAgZHVyYXRpb246IHRpbWUsXG4gICAgICAgIGhvcml6b250YWxQb3NpdGlvbjogdGhpcy5fbWVkaWEgJiYgdGhpcy5fbWVkaWEucXVlcnkoJ2d0LXNtJykgPyAnZW5kJyA6ICdjZW50ZXInLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVE9BU1RfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlVG9hc3RTZXJ2aWNlLCBzbmFja0JhcjogTWF0U25hY2tCYXIsIG1lZGlhOiBUZE1lZGlhU2VydmljZSk6IFZhbnRhZ2VUb2FzdFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVG9hc3RTZXJ2aWNlKHNuYWNrQmFyLCBtZWRpYSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RPQVNUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRvYXN0U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUb2FzdFNlcnZpY2VdLCBNYXRTbmFja0JhciwgW25ldyBPcHRpb25hbCgpLCBUZE1lZGlhU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RPQVNUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19