/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VANTAGE_TOKEN_PROVIDER } from './token/token.service';
import { VANTAGE_SESSION_PROVIDER } from './session/session.service';
import { VantageAuthenticationGuard } from './guards/authentication.guard';
var VantageAuthenticationModule = /** @class */ (function () {
    function VantageAuthenticationModule() {
    }
    VantageAuthenticationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_TOKEN_PROVIDER, VANTAGE_SESSION_PROVIDER, VantageAuthenticationGuard],
                },] }
    ];
    return VantageAuthenticationModule;
}());
export { VantageAuthenticationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTNFO0lBQUE7SUFJMEMsQ0FBQzs7Z0JBSjFDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixDQUFDO2lCQUMxRjs7SUFDeUMsa0NBQUM7Q0FBQSxBQUozQyxJQUkyQztTQUE5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVkFOVEFHRV9UT0tFTl9QUk9WSURFUiB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBWQU5UQUdFX1NFU1NJT05fUFJPVklERVIgfSBmcm9tICcuL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoZW50aWNhdGlvbi5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtWQU5UQUdFX1RPS0VOX1BST1ZJREVSLCBWQU5UQUdFX1NFU1NJT05fUFJPVklERVIsIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkXSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uTW9kdWxlIHt9XG4iXX0=