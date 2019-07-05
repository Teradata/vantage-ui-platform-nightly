import { Provider } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TdDialogService, TdAlertDialogComponent } from '@covalent/core/dialogs';
import { TranslateService } from '@ngx-translate/core';
export declare class VantageError {
    message: string;
    error: number;
}
export declare class VantageErrorService {
    private _dialogService;
    private _translate;
    constructor(_dialogService: TdDialogService, _translate: TranslateService);
    open(error: VantageError): MatDialogRef<TdAlertDialogComponent>;
}
export declare function VANTAGE_ERROR_PROVIDER_FACTORY(parent: VantageErrorService, dialogService: TdDialogService, translate: TranslateService): VantageErrorService;
export declare const VANTAGE_ERROR_PROVIDER: Provider;
