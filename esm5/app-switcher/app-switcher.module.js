/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CovalentMenuModule } from '@covalent/core/menu';
import { TranslateModule } from '@ngx-translate/core';
import { VantageThemeModule } from '@td-vantage/ui-platform/theme';
import { VantageAppSwitcherMenuComponent } from './app-switcher-menu/app-switcher-menu.component';
import { VantageAppSwitcherComponent } from './app-switcher.component';
var VantageAppSwitcherModule = /** @class */ (function () {
    function VantageAppSwitcherModule() {
    }
    VantageAppSwitcherModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                    imports: [
                        CommonModule,
                        MatMenuModule,
                        MatIconModule,
                        MatButtonModule,
                        MatDividerModule,
                        /* covalent modules */
                        CovalentMenuModule,
                        /* third party deps */
                        TranslateModule.forChild(),
                        /* vantage modules */
                        VantageThemeModule,
                    ],
                    providers: [],
                    exports: [VantageAppSwitcherComponent, VantageAppSwitcherMenuComponent],
                },] }
    ];
    return VantageAppSwitcherModule;
}());
export { VantageAppSwitcherModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN3aXRjaGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL2FwcC1zd2l0Y2hlci8iLCJzb3VyY2VzIjpbImFwcC1zd2l0Y2hlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVuRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RTtJQUFBO0lBcUJ1QyxDQUFDOztnQkFyQnZDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSwrQkFBK0IsQ0FBQztvQkFDNUUsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUVoQixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFFbEIsc0JBQXNCO3dCQUN0QixlQUFlLENBQUMsUUFBUSxFQUFFO3dCQUUxQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsK0JBQStCLENBQUM7aUJBQ3hFOztJQUNzQywrQkFBQztDQUFBLEFBckJ4QyxJQXFCd0M7U0FBM0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5pbXBvcnQgeyBDb3ZhbGVudE1lbnVNb2R1bGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9tZW51JztcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFZhbnRhZ2VUaGVtZU1vZHVsZSB9IGZyb20gJ0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3RoZW1lJztcblxuaW1wb3J0IHsgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXN3aXRjaGVyLW1lbnUvYXBwLXN3aXRjaGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFZhbnRhZ2VBcHBTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXN3aXRjaGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1ZhbnRhZ2VBcHBTd2l0Y2hlckNvbXBvbmVudCwgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuXG4gICAgLyogY292YWxlbnQgbW9kdWxlcyAqL1xuICAgIENvdmFsZW50TWVudU1vZHVsZSxcblxuICAgIC8qIHRoaXJkIHBhcnR5IGRlcHMgKi9cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQoKSxcblxuICAgIC8qIHZhbnRhZ2UgbW9kdWxlcyAqL1xuICAgIFZhbnRhZ2VUaGVtZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZXhwb3J0czogW1ZhbnRhZ2VBcHBTd2l0Y2hlckNvbXBvbmVudCwgVmFudGFnZUFwcFN3aXRjaGVyTWVudUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTd2l0Y2hlck1vZHVsZSB7fVxuIl19