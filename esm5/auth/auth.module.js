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
                    imports: [
                        CommonModule,
                    ],
                    providers: [
                        VANTAGE_TOKEN_PROVIDER,
                        VANTAGE_SESSION_PROVIDER,
                        VantageAuthenticationGuard,
                    ],
                },] }
    ];
    return VantageAuthenticationModule;
}());
export { VantageAuthenticationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTNFO0lBQUE7SUFZQSxDQUFDOztnQkFaQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QiwwQkFBMEI7cUJBQzNCO2lCQUNGOztJQUdELGtDQUFDO0NBQUEsQUFaRCxJQVlDO1NBRlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFZBTlRBR0VfVE9LRU5fUFJPVklERVIgfSBmcm9tICcuL3Rva2VuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSIH0gZnJvbSAnLi9zZXNzaW9uL3Nlc3Npb24uc2VydmljZSc7XG5cbmltcG9ydCB7IFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYXV0aGVudGljYXRpb24uZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBWQU5UQUdFX1RPS0VOX1BST1ZJREVSLFxuICAgIFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUixcbiAgICBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUF1dGhlbnRpY2F0aW9uTW9kdWxlIHtcblxufVxuIl19