/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VANTAGE_TOKEN_PROVIDER } from './token/token.service';
import { VANTAGE_SESSION_PROVIDER } from './session/session.service';
import { VantageAuthenticationGuard } from './guards/authentication.guard';
export class VantageAuthenticationModule {
}
VantageAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [VANTAGE_TOKEN_PROVIDER, VANTAGE_SESSION_PROVIDER, VantageAuthenticationGuard],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTTNFLE1BQU0sT0FBTywyQkFBMkI7OztZQUp2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQzthQUMxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBWQU5UQUdFX1RPS0VOX1BST1ZJREVSIH0gZnJvbSAnLi90b2tlbi90b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUiB9IGZyb20gJy4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBWYW50YWdlQXV0aGVudGljYXRpb25HdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2F1dGhlbnRpY2F0aW9uLmd1YXJkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1ZBTlRBR0VfVE9LRU5fUFJPVklERVIsIFZBTlRBR0VfU0VTU0lPTl9QUk9WSURFUiwgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmRdLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25Nb2R1bGUge31cbiJdfQ==