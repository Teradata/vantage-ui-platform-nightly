/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
var VantageError = /** @class */ (function () {
    function VantageError() {
    }
    return VantageError;
}());
export { VantageError };
if (false) {
    /** @type {?} */
    VantageError.prototype.message;
    /** @type {?} */
    VantageError.prototype.error;
}
var VantageErrorService = /** @class */ (function () {
    function VantageErrorService(_dialogService, _translate) {
        this._dialogService = _dialogService;
        this._translate = _translate;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    VantageErrorService.prototype.open = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error) {
            /** @type {?} */
            var config = {
                id: 'vui-error-dialog' + (error.error !== undefined ? "-" + error.error.toString() : ''),
                panelClass: 'vui-error-dialog',
                title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                message: error.message,
                disableClose: true,
                closeButton: this._translate.instant('CLOSE'),
            };
            if (error.error) {
                config.message += " (" + error.error.toString() + ")";
            }
            if (config.message || config.title) {
                return this._dialogService.openAlert(config);
            }
        }
    };
    VantageErrorService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageErrorService.ctorParameters = function () { return [
        { type: TdDialogService },
        { type: TranslateService }
    ]; };
    return VantageErrorService;
}());
export { VantageErrorService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageErrorService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    VantageErrorService.prototype._translate;
}
/**
 * @param {?} parent
 * @param {?} dialogService
 * @param {?} translate
 * @return {?}
 */
export function VANTAGE_ERROR_PROVIDER_FACTORY(parent, dialogService, translate) {
    return parent || new VantageErrorService(dialogService, translate);
}
/** @type {?} */
export var VANTAGE_ERROR_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageErrorService,
    deps: [[new Optional(), new SkipSelf(), VantageErrorService], TdDialogService, TranslateService],
    useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svZXJyb3IvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpFLE9BQU8sRUFBRSxlQUFlLEVBQXdDLE1BQU0sd0JBQXdCLENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFBQTtJQUdBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWdCOztJQUNoQiw2QkFBYzs7QUFHaEI7SUFFRSw2QkFBb0IsY0FBK0IsRUFBVSxVQUE0QjtRQUFyRSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRTdGLGtDQUFJOzs7O0lBQUosVUFBSyxLQUFtQjtRQUN0QixJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsTUFBTSxHQUFpQjtnQkFDM0IsRUFBRSxFQUFFLGtCQUFrQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4RixVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDOUM7WUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQUcsQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7SUFDSCxDQUFDOztnQkFyQkYsVUFBVTs7OztnQkFURixlQUFlO2dCQUVmLGdCQUFnQjs7SUE2QnpCLDBCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksbUJBQW1COzs7Ozs7SUFDbEIsNkNBQXVDOzs7OztJQUFFLHlDQUFvQzs7Ozs7Ozs7QUFzQjNGLE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsTUFBMkIsRUFDM0IsYUFBOEIsRUFDOUIsU0FBMkI7SUFFM0IsT0FBTyxNQUFNLElBQUksSUFBSSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDckUsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sc0JBQXNCLEdBQWE7O0lBRTlDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7SUFDaEcsVUFBVSxFQUFFLDhCQUE4QjtDQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgVGREaWFsb2dTZXJ2aWNlLCBJQWxlcnRDb25maWcsIFRkQWxlcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvY29yZS9kaWFsb2dzJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVmFudGFnZUVycm9yIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBlcnJvcjogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUVycm9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1NlcnZpY2U6IFRkRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBfdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIG9wZW4oZXJyb3I6IFZhbnRhZ2VFcnJvcik6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zdCBjb25maWc6IElBbGVydENvbmZpZyA9IHtcbiAgICAgICAgaWQ6ICd2dWktZXJyb3ItZGlhbG9nJyArIChlcnJvci5lcnJvciAhPT0gdW5kZWZpbmVkID8gYC0ke2Vycm9yLmVycm9yLnRvU3RyaW5nKCl9YCA6ICcnKSxcbiAgICAgICAgcGFuZWxDbGFzczogJ3Z1aS1lcnJvci1kaWFsb2cnLFxuICAgICAgICB0aXRsZTogdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQoJ1RIRVJFX1dBU19BX1BST0JMRU0nKSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxuICAgICAgICBjbG9zZUJ1dHRvbjogdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQoJ0NMT1NFJyksXG4gICAgICB9O1xuICAgICAgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgIGNvbmZpZy5tZXNzYWdlICs9IGAgKCR7ZXJyb3IuZXJyb3IudG9TdHJpbmcoKX0pYDtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcubWVzc2FnZSB8fCBjb25maWcudGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbkFsZXJ0KGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0VSUk9SX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZUVycm9yU2VydmljZSxcbiAgZGlhbG9nU2VydmljZTogVGREaWFsb2dTZXJ2aWNlLFxuICB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4pOiBWYW50YWdlRXJyb3JTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUVycm9yU2VydmljZShkaWFsb2dTZXJ2aWNlLCB0cmFuc2xhdGUpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9FUlJPUl9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VFcnJvclNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlRXJyb3JTZXJ2aWNlXSwgVGREaWFsb2dTZXJ2aWNlLCBUcmFuc2xhdGVTZXJ2aWNlXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9FUlJPUl9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==