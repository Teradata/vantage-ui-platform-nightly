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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHdEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsWUFBb0IsZ0JBQTZCLEVBQVUsTUFBc0I7UUFBN0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFFckYsSUFBSSxDQUFDLE9BQWUsRUFBRSxPQUFlLElBQUk7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7Z0JBQzdDLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUTthQUNqRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQVhGLFVBQVU7Ozs7WUFKRixXQUFXO1lBRVgsY0FBYzs7Ozs7OztJQUlULCtDQUFxQzs7Ozs7SUFBRSxxQ0FBOEI7Ozs7Ozs7O0FBWW5GLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFDM0IsUUFBcUIsRUFDckIsS0FBcUI7SUFFckIsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzVHLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuaW1wb3J0IHsgVGRNZWRpYVNlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvY29yZS9tZWRpYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlVG9hc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXJTZXJ2aWNlOiBNYXRTbmFja0JhciwgcHJpdmF0ZSBfbWVkaWE6IFRkTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG9wZW4obWVzc2FnZTogc3RyaW5nLCB0aW1lOiBudW1iZXIgPSAzMDAwKTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuX3NuYWNrQmFyU2VydmljZS5vcGVuKG1lc3NhZ2UsIHVuZGVmaW5lZCwge1xuICAgICAgICBkdXJhdGlvbjogdGltZSxcbiAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiB0aGlzLl9tZWRpYSAmJiB0aGlzLl9tZWRpYS5xdWVyeSgnZ3Qtc20nKSA/ICdlbmQnIDogJ2NlbnRlcicsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfVE9BU1RfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlVG9hc3RTZXJ2aWNlLFxuICBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gIG1lZGlhOiBUZE1lZGlhU2VydmljZSxcbik6IFZhbnRhZ2VUb2FzdFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVG9hc3RTZXJ2aWNlKHNuYWNrQmFyLCBtZWRpYSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1RPQVNUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVRvYXN0U2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUb2FzdFNlcnZpY2VdLCBNYXRTbmFja0JhciwgW25ldyBPcHRpb25hbCgpLCBUZE1lZGlhU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RPQVNUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19