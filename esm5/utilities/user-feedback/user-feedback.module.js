/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentMediaModule } from '@covalent/core/media';
import { VANTAGE_ERROR_PROVIDER } from './error/error.service';
import { VANTAGE_TOAST_PROVIDER } from './toast/toast.service';
var VantageUserFeedbackModule = /** @class */ (function () {
    function VantageUserFeedbackModule() {
    }
    VantageUserFeedbackModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatSnackBarModule,
                        CovalentDialogsModule,
                        CovalentMediaModule,
                    ],
                    providers: [
                        VANTAGE_ERROR_PROVIDER,
                        VANTAGE_TOAST_PROVIDER,
                    ],
                },] }
    ];
    return VantageUserFeedbackModule;
}());
export { VantageUserFeedbackModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1mZWVkYmFjay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS91dGlsaXRpZXMvIiwic291cmNlcyI6WyJ1c2VyLWZlZWRiYWNrL3VzZXItZmVlZGJhY2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUvRDtJQUFBO0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7aUJBQ0Y7O0lBR0QsZ0NBQUM7Q0FBQSxBQWRELElBY0M7U0FGWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbmltcG9ydCB7IENvdmFsZW50RGlhbG9nc01vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2RpYWxvZ3MnO1xuaW1wb3J0IHsgQ292YWxlbnRNZWRpYU1vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL21lZGlhJztcblxuaW1wb3J0IHsgVkFOVEFHRV9FUlJPUl9QUk9WSURFUiB9IGZyb20gJy4vZXJyb3IvZXJyb3Iuc2VydmljZSc7XG5pbXBvcnQgeyBWQU5UQUdFX1RPQVNUX1BST1ZJREVSIH0gZnJvbSAnLi90b2FzdC90b2FzdC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBDb3ZhbGVudERpYWxvZ3NNb2R1bGUsXG4gICAgQ292YWxlbnRNZWRpYU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVkFOVEFHRV9FUlJPUl9QUk9WSURFUixcbiAgICBWQU5UQUdFX1RPQVNUX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlVXNlckZlZWRiYWNrTW9kdWxlIHtcblxufVxuIl19