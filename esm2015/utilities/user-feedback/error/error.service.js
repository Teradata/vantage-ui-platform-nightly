/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
export class VantageError {
}
if (false) {
    /** @type {?} */
    VantageError.prototype.message;
    /** @type {?} */
    VantageError.prototype.error;
}
export class VantageErrorService {
    /**
     * @param {?} _dialogService
     * @param {?} _translate
     */
    constructor(_dialogService, _translate) {
        this._dialogService = _dialogService;
        this._translate = _translate;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    open(error) {
        if (error) {
            /** @type {?} */
            const config = {
                id: 'vui-error-dialog' + (error.error !== undefined ? `-${error.error.toString()}` : ''),
                panelClass: 'vui-error-dialog',
                title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                message: error.message,
                disableClose: true,
                closeButton: this._translate.instant('CLOSE'),
            };
            if (error.error) {
                config.message += ` (${error.error.toString()})`;
            }
            if (config.message || config.title) {
                return this._dialogService.openAlert(config);
            }
        }
    }
}
VantageErrorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageErrorService.ctorParameters = () => [
    { type: TdDialogService },
    { type: TranslateService }
];
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
export const VANTAGE_ERROR_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageErrorService,
    deps: [[new Optional(), new SkipSelf(), VantageErrorService], TdDialogService, TranslateService],
    useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svZXJyb3IvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpFLE9BQU8sRUFBRSxlQUFlLEVBQXdDLE1BQU0sd0JBQXdCLENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsTUFBTSxPQUFPLFlBQVk7Q0FHeEI7OztJQUZDLCtCQUFnQjs7SUFDaEIsNkJBQWM7O0FBSWhCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQW9CLGNBQStCLEVBQVUsVUFBNEI7UUFBckUsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUU3RixJQUFJLENBQUMsS0FBbUI7UUFDdEIsSUFBSSxLQUFLLEVBQUU7O2tCQUNILE1BQU0sR0FBaUI7Z0JBQzNCLEVBQUUsRUFBRSxrQkFBa0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4RixVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztnQkFDdEIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7YUFDOUM7WUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7SUFDSCxDQUFDOzs7WUFyQkYsVUFBVTs7OztZQVRGLGVBQWU7WUFFZixnQkFBZ0I7Ozs7Ozs7SUFTWCw2Q0FBdUM7Ozs7O0lBQUUseUNBQW9DOzs7Ozs7OztBQXNCM0YsTUFBTSxVQUFVLDhCQUE4QixDQUM1QyxNQUEyQixFQUMzQixhQUE4QixFQUM5QixTQUEyQjtJQUUzQixPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRSxDQUFDOztBQUVELE1BQU0sT0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztJQUNoRyxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UsIElBbGVydENvbmZpZywgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBWYW50YWdlRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGVycm9yOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlRXJyb3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nU2VydmljZTogVGREaWFsb2dTZXJ2aWNlLCBwcml2YXRlIF90cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgb3BlbihlcnJvcjogVmFudGFnZUVycm9yKTogTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGNvbmZpZzogSUFsZXJ0Q29uZmlnID0ge1xuICAgICAgICBpZDogJ3Z1aS1lcnJvci1kaWFsb2cnICsgKGVycm9yLmVycm9yICE9PSB1bmRlZmluZWQgPyBgLSR7ZXJyb3IuZXJyb3IudG9TdHJpbmcoKX1gIDogJycpLFxuICAgICAgICBwYW5lbENsYXNzOiAndnVpLWVycm9yLWRpYWxvZycsXG4gICAgICAgIHRpdGxlOiB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCgnVEhFUkVfV0FTX0FfUFJPQkxFTScpLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICAgIGNsb3NlQnV0dG9uOiB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCgnQ0xPU0UnKSxcbiAgICAgIH07XG4gICAgICBpZiAoZXJyb3IuZXJyb3IpIHtcbiAgICAgICAgY29uZmlnLm1lc3NhZ2UgKz0gYCAoJHtlcnJvci5lcnJvci50b1N0cmluZygpfSlgO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5tZXNzYWdlIHx8IGNvbmZpZy50aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuQWxlcnQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfRVJST1JfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlRXJyb3JTZXJ2aWNlLFxuICBkaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UsXG4gIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbik6IFZhbnRhZ2VFcnJvclNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlRXJyb3JTZXJ2aWNlKGRpYWxvZ1NlcnZpY2UsIHRyYW5zbGF0ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0VSUk9SX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUVycm9yU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VFcnJvclNlcnZpY2VdLCBUZERpYWxvZ1NlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0VSUk9SX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19