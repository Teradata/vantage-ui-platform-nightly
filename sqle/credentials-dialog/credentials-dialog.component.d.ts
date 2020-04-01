import { OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TdLoadingService } from '@covalent/core/loading';
import { ISystem, VantageSystemService } from '@td-vantage/ui-platform/system';
import { VantageConnectionService } from '../connection.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
export declare class VantageCredentialsDialogComponent implements OnInit, OnDestroy {
    private _dialogRef;
    private _connectionService;
    private _systemService;
    private _loadingService;
    private _translate;
    private _connectionAttempt$;
    connectionAttempt$: Observable<void>;
    basicAuthEnabled: boolean;
    systems$: Observable<ISystem[]>;
    system: ISystem;
    connectionType: boolean;
    username: string;
    password: string;
    errorMsg: string;
    constructor(_dialogRef: MatDialogRef<VantageCredentialsDialogComponent>, _connectionService: VantageConnectionService, _systemService: VantageSystemService, _loadingService: TdLoadingService, _translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    compareSystemWith(a: ISystem, b: ISystem): boolean;
    connect(): Promise<void>;
    cancel(): void;
}
