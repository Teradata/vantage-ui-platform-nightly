/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TdMediaService } from '@covalent/core/media';
var VantageToastService = /** @class */ (function () {
    function VantageToastService(_snackBarService, _media) {
        this._snackBarService = _snackBarService;
        this._media = _media;
    }
    /**
     * @param {?} message
     * @param {?=} time
     * @return {?}
     */
    VantageToastService.prototype.open = /**
     * @param {?} message
     * @param {?=} time
     * @return {?}
     */
    function (message, time) {
        if (time === void 0) { time = 3000; }
        if (message) {
            this._snackBarService.open(message, undefined, {
                duration: time,
                horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
            });
        }
    };
    VantageToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageToastService.ctorParameters = function () { return [
        { type: MatSnackBar },
        { type: TdMediaService }
    ]; };
    return VantageToastService;
}());
export { VantageToastService };
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
export var VANTAGE_TOAST_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageToastService,
    deps: [[new Optional(), new SkipSelf(), VantageToastService], MatSnackBar, [new Optional(), TdMediaService]],
    useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFFRSw2QkFBb0IsZ0JBQTZCLEVBQVUsTUFBc0I7UUFBN0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7SUFFckYsa0NBQUk7Ozs7O0lBQUosVUFBSyxPQUFlLEVBQUUsSUFBbUI7UUFBbkIscUJBQUEsRUFBQSxXQUFtQjtRQUN2QyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtnQkFDN0MsUUFBUSxFQUFFLElBQUk7Z0JBQ2Qsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQ2pGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBWEYsVUFBVTs7OztnQkFKRixXQUFXO2dCQUVYLGNBQWM7O0lBY3ZCLDBCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksbUJBQW1COzs7Ozs7SUFDbEIsK0NBQXFDOzs7OztJQUFFLHFDQUE4Qjs7Ozs7Ozs7QUFZbkYsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixRQUFxQixFQUNyQixLQUFxQjtJQUVyQixPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxDQUFDOztBQUVELE1BQU0sS0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDNUcsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG5pbXBvcnQgeyBUZE1lZGlhU2VydmljZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL21lZGlhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUb2FzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbmFja0JhclNlcnZpY2U6IE1hdFNuYWNrQmFyLCBwcml2YXRlIF9tZWRpYTogVGRNZWRpYVNlcnZpY2UpIHt9XG5cbiAgb3BlbihtZXNzYWdlOiBzdHJpbmcsIHRpbWU6IG51bWJlciA9IDMwMDApOiB2b2lkIHtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgdGhpcy5fc25hY2tCYXJTZXJ2aWNlLm9wZW4obWVzc2FnZSwgdW5kZWZpbmVkLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aW1lLFxuICAgICAgICBob3Jpem9udGFsUG9zaXRpb246IHRoaXMuX21lZGlhICYmIHRoaXMuX21lZGlhLnF1ZXJ5KCdndC1zbScpID8gJ2VuZCcgOiAnY2VudGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9UT0FTVF9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFZhbnRhZ2VUb2FzdFNlcnZpY2UsXG4gIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgbWVkaWE6IFRkTWVkaWFTZXJ2aWNlLFxuKTogVmFudGFnZVRvYXN0U2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VUb2FzdFNlcnZpY2Uoc25hY2tCYXIsIG1lZGlhKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVE9BU1RfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlVG9hc3RTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVRvYXN0U2VydmljZV0sIE1hdFNuYWNrQmFyLCBbbmV3IE9wdGlvbmFsKCksIFRkTWVkaWFTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfVE9BU1RfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=