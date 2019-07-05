import { Provider } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TdMediaService } from '@covalent/core/media';
export declare class VantageToastService {
    private _snackBarService;
    private _media;
    constructor(_snackBarService: MatSnackBar, _media: TdMediaService);
    open(message: string, time?: number): void;
}
export declare function VANTAGE_TOAST_PROVIDER_FACTORY(parent: VantageToastService, snackBar: MatSnackBar, media: TdMediaService): VantageToastService;
export declare const VANTAGE_TOAST_PROVIDER: Provider;
