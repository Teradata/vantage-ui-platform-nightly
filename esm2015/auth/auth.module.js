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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdmFudGFnZS91aS1wbGF0Zm9ybS9hdXRoLyIsInNvdXJjZXMiOlsiYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBWTNFLE1BQU0sT0FBTywyQkFBMkI7OztZQVZ2QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QiwwQkFBMEI7aUJBQzNCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVkFOVEFHRV9UT0tFTl9QUk9WSURFUiB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBWQU5UQUdFX1NFU1NJT05fUFJPVklERVIgfSBmcm9tICcuL3Nlc3Npb24vc2Vzc2lvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVmFudGFnZUF1dGhlbnRpY2F0aW9uR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoZW50aWNhdGlvbi5ndWFyZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZBTlRBR0VfVE9LRU5fUFJPVklERVIsXG4gICAgVkFOVEFHRV9TRVNTSU9OX1BST1ZJREVSLFxuICAgIFZhbnRhZ2VBdXRoZW50aWNhdGlvbkd1YXJkLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXV0aGVudGljYXRpb25Nb2R1bGUge1xuXG59XG4iXX0=