/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentMessageModule } from '@covalent/core/message';
import { VantageSystemModule } from '@td-vantage/ui-platform/system';
import { TranslateModule } from '@ngx-translate/core';
import { VANTAGE_CONNECTION_PROVIDER } from './connection.service';
import { VANTAGE_DICTIONARY_PROVIDER } from './dictionary.service';
import { VANTAGE_QUERY_PROVIDER } from './query.service';
import { VANTAGE_SPOOLED_QUERY_PROVIDER } from './spooled-query.service';
import { VantageCredentialsDialogComponent } from './credentials-dialog/credentials-dialog.component';
export class VantageSQLEModule {
}
VantageSQLEModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VantageCredentialsDialogComponent],
                exports: [VantageCredentialsDialogComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCardModule,
                    MatButtonModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    MatIconModule,
                    CovalentLoadingModule,
                    CovalentMessageModule,
                    VantageSystemModule,
                    TranslateModule,
                ],
                providers: [
                    VANTAGE_CONNECTION_PROVIDER,
                    VANTAGE_DICTIONARY_PROVIDER,
                    VANTAGE_QUERY_PROVIDER,
                    VANTAGE_SPOOLED_QUERY_PROVIDER,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zcWxlLyIsInNvdXJjZXMiOlsic3FsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBNEJ0RyxNQUFNLE9BQU8saUJBQWlCOzs7WUExQjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQzVDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO29CQUNiLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2hCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCwyQkFBMkI7b0JBQzNCLDJCQUEyQjtvQkFDM0Isc0JBQXNCO29CQUN0Qiw4QkFBOEI7aUJBQy9CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IENvdmFsZW50TG9hZGluZ01vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2xvYWRpbmcnO1xuaW1wb3J0IHsgQ292YWxlbnRNZXNzYWdlTW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvbWVzc2FnZSc7XG5cbmltcG9ydCB7IFZhbnRhZ2VTeXN0ZW1Nb2R1bGUgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0nO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgVkFOVEFHRV9DT05ORUNUSU9OX1BST1ZJREVSIH0gZnJvbSAnLi9jb25uZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVkFOVEFHRV9ESUNUSU9OQVJZX1BST1ZJREVSIH0gZnJvbSAnLi9kaWN0aW9uYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVkFOVEFHRV9RVUVSWV9QUk9WSURFUiB9IGZyb20gJy4vcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBWQU5UQUdFX1NQT09MRURfUVVFUllfUFJPVklERVIgfSBmcm9tICcuL3Nwb29sZWQtcXVlcnkuc2VydmljZSc7XG5cbmltcG9ydCB7IFZhbnRhZ2VDcmVkZW50aWFsc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY3JlZGVudGlhbHMtZGlhbG9nL2NyZWRlbnRpYWxzLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtWYW50YWdlQ3JlZGVudGlhbHNEaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVmFudGFnZUNyZWRlbnRpYWxzRGlhbG9nQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIENvdmFsZW50TG9hZGluZ01vZHVsZSxcbiAgICBDb3ZhbGVudE1lc3NhZ2VNb2R1bGUsXG4gICAgVmFudGFnZVN5c3RlbU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZBTlRBR0VfQ09OTkVDVElPTl9QUk9WSURFUixcbiAgICBWQU5UQUdFX0RJQ1RJT05BUllfUFJPVklERVIsXG4gICAgVkFOVEFHRV9RVUVSWV9QUk9WSURFUixcbiAgICBWQU5UQUdFX1NQT09MRURfUVVFUllfUFJPVklERVIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTUUxFTW9kdWxlIHt9XG4iXX0=