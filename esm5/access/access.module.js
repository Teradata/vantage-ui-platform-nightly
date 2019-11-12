/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VantageBlockRootAccessGuard } from './guards/block-root-access.guard';
import { VantageBlockUserAccessGuard } from './guards/block-user-access.guard';
var VantageAccessModule = /** @class */ (function () {
    function VantageAccessModule() {
    }
    VantageAccessModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VantageBlockRootAccessGuard, VantageBlockUserAccessGuard],
                },] }
    ];
    return VantageAccessModule;
}());
export { VantageAccessModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FjY2Vzcy8iLCJzb3VyY2VzIjpbImFjY2Vzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBQUE7SUFJa0MsQ0FBQzs7Z0JBSmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLDJCQUEyQixDQUFDO2lCQUN0RTs7SUFDaUMsMEJBQUM7Q0FBQSxBQUpuQyxJQUltQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVmFudGFnZUJsb2NrUm9vdEFjY2Vzc0d1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYmxvY2stcm9vdC1hY2Nlc3MuZ3VhcmQnO1xuaW1wb3J0IHsgVmFudGFnZUJsb2NrVXNlckFjY2Vzc0d1YXJkIH0gZnJvbSAnLi9ndWFyZHMvYmxvY2stdXNlci1hY2Nlc3MuZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVmFudGFnZUJsb2NrUm9vdEFjY2Vzc0d1YXJkLCBWYW50YWdlQmxvY2tVc2VyQWNjZXNzR3VhcmRdLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlQWNjZXNzTW9kdWxlIHt9XG4iXX0=