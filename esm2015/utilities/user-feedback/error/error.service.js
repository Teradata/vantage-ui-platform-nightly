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
            let config = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3V0aWxpdGllcy8iLCJzb3VyY2VzIjpbInVzZXItZmVlZGJhY2svZXJyb3IvZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpFLE9BQU8sRUFBRSxlQUFlLEVBQXdDLE1BQU0sd0JBQXdCLENBQUM7QUFFL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsTUFBTSxPQUFPLFlBQVk7Q0FHeEI7OztJQUZDLCtCQUFnQjs7SUFDaEIsNkJBQWM7O0FBSWhCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBRTlCLFlBQW9CLGNBQStCLEVBQy9CLFVBQTRCO1FBRDVCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRXBELElBQUksQ0FBQyxLQUFtQjtRQUN0QixJQUFJLEtBQUssRUFBRTs7Z0JBQ0wsTUFBTSxHQUFpQjtnQkFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO2dCQUNyRCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ3RCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7YUFDbEQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDbEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5QztTQUNGO0lBQ0gsQ0FBQzs7O1lBckJGLFVBQVU7Ozs7WUFURixlQUFlO1lBRWYsZ0JBQWdCOzs7Ozs7O0lBVVgsNkNBQXVDOzs7OztJQUN2Qyx5Q0FBb0M7Ozs7Ozs7O0FBcUJsRCxNQUFNLFVBQVUsOEJBQThCLENBQzVDLE1BQTJCLEVBQUUsYUFBOEIsRUFBRSxTQUEyQjtJQUN4RixPQUFPLE1BQU0sSUFBSSxJQUFJLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNyRSxDQUFDOztBQUVELE1BQU0sT0FBTyxzQkFBc0IsR0FBYTs7SUFFOUMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztJQUNoRyxVQUFVLEVBQUUsOEJBQThCO0NBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UsIElBbGVydENvbmZpZywgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBWYW50YWdlRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGVycm9yOiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlRXJyb3JTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBvcGVuKGVycm9yOiBWYW50YWdlRXJyb3IpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbGV0IGNvbmZpZzogSUFsZXJ0Q29uZmlnID0ge1xuICAgICAgICB0aXRsZTogdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQoJ1RIRVJFX1dBU19BX1BST0JMRU0nKSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxuICAgICAgICBjbG9zZUJ1dHRvbjogdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQoJ0NMT1NFJyksXG4gICAgICB9O1xuICAgICAgaWYgKGVycm9yLmVycm9yKSB7XG4gICAgICAgIGNvbmZpZy5tZXNzYWdlICs9IGAgKCR7ZXJyb3IuZXJyb3IudG9TdHJpbmcoKX0pYDtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcubWVzc2FnZSB8fCBjb25maWcudGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbkFsZXJ0KGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfRVJST1JfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBWYW50YWdlRXJyb3JTZXJ2aWNlLCBkaWFsb2dTZXJ2aWNlOiBUZERpYWxvZ1NlcnZpY2UsIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSk6IFZhbnRhZ2VFcnJvclNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlRXJyb3JTZXJ2aWNlKGRpYWxvZ1NlcnZpY2UsIHRyYW5zbGF0ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0VSUk9SX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUVycm9yU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VFcnJvclNlcnZpY2VdLCBUZERpYWxvZ1NlcnZpY2UsIFRyYW5zbGF0ZVNlcnZpY2VdLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0VSUk9SX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19