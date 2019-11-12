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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svZXJyb3IvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpFLE9BQU8sRUFBRSxlQUFlLEVBQXdDLE1BQU0sd0JBQXdCLENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQ7SUFBQTtJQUdBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsK0JBQWdCOztJQUNoQiw2QkFBYzs7QUFHaEI7SUFFRSw2QkFBb0IsY0FBK0IsRUFBVSxVQUE0QjtRQUFyRSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRTdGLGtDQUFJOzs7O0lBQUosVUFBSyxLQUFtQjtRQUN0QixJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsTUFBTSxHQUFpQjtnQkFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2dCQUNyRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxPQUFPLElBQUksT0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFHLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QztTQUNGO0lBQ0gsQ0FBQzs7Z0JBbkJGLFVBQVU7Ozs7Z0JBVEYsZUFBZTtnQkFFZixnQkFBZ0I7O0lBMkJ6QiwwQkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLG1CQUFtQjs7Ozs7O0lBQ2xCLDZDQUF1Qzs7Ozs7SUFBRSx5Q0FBb0M7Ozs7Ozs7O0FBb0IzRixNQUFNLFVBQVUsOEJBQThCLENBQzVDLE1BQTJCLEVBQzNCLGFBQThCLEVBQzlCLFNBQTJCO0lBRTNCLE9BQU8sTUFBTSxJQUFJLElBQUksbUJBQW1CLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7O0FBRUQsTUFBTSxLQUFPLHNCQUFzQixHQUFhOztJQUU5QyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO0lBQ2hHLFVBQVUsRUFBRSw4QkFBOEI7Q0FDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRkRGlhbG9nU2VydmljZSwgSUFsZXJ0Q29uZmlnLCBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvZGlhbG9ncyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VFcnJvciB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZXJyb3I6IG51bWJlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VFcnJvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgX3RyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBvcGVuKGVycm9yOiBWYW50YWdlRXJyb3IpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgY29uc3QgY29uZmlnOiBJQWxlcnRDb25maWcgPSB7XG4gICAgICAgIHRpdGxlOiB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCgnVEhFUkVfV0FTX0FfUFJPQkxFTScpLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICAgIGNsb3NlQnV0dG9uOiB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCgnQ0xPU0UnKSxcbiAgICAgIH07XG4gICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgY29uZmlnLm1lc3NhZ2UgKz0gYCAoJHtlcnJvci5lcnJvci50b1N0cmluZygpfSlgO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5tZXNzYWdlIHx8IGNvbmZpZy50aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuQWxlcnQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfRVJST1JfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlRXJyb3JTZXJ2aWNlLFxuICBkaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UsXG4gIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbik6IFZhbnRhZ2VFcnJvclNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlRXJyb3JTZXJ2aWNlKGRpYWxvZ1NlcnZpY2UsIHRyYW5zbGF0ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0VSUk9SX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUVycm9yU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VFcnJvclNlcnZpY2VdLCBUZERpYWxvZ1NlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0VSUk9SX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19