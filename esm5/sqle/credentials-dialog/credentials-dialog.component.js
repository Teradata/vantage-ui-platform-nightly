/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __generator } from "tslib";
import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { TdLoadingService } from '@covalent/core/loading';
import { VantageSystemService } from '@td-vantage/ui-platform/system';
import { VantageConnectionService } from '../connection.service';
import { Subject, of } from 'rxjs';
import { retry, map, tap, catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
var VantageCredentialsDialogComponent = /** @class */ (function () {
    function VantageCredentialsDialogComponent(_dialogRef, _connectionService, _systemService, _loadingService, _translate) {
        this._dialogRef = _dialogRef;
        this._connectionService = _connectionService;
        this._systemService = _systemService;
        this._loadingService = _loadingService;
        this._translate = _translate;
        // listens to times we try to connect regardless
        this._connectionAttempt$ = new Subject();
        this.connectionAttempt$ = this._connectionAttempt$.asObservable();
        this.basicAuthEnabled = false;
        this.connectionType = false;
    }
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // prepopulate connection type
        this.connectionType = this.basicAuthEnabled;
        // prep systems observable
        /** @type {?} */
        var queryParams = new HttpParams();
        queryParams = queryParams.append('systemType', 'TERADATA');
        this.systems$ = this._systemService.query(queryParams).pipe(retry(2), catchError((/**
         * @return {?}
         */
        function () {
            _this.errorMsg = _this._translate.instant('ERROR_RETRIEVE_DATA');
            return of({ data: [] });
        })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return resp.data; })), tap((/**
         * @param {?} systems
         * @return {?}
         */
        function (systems) {
            if (systems && systems.length) {
                // select first system by default if no system was prepopulated
                if (!_this.system) {
                    _this.system = systems[0];
                }
                // if there is only one system and basic auth disabled, we try to connect to it automagically
                if (systems.length === 1 && !_this.basicAuthEnabled) {
                    _this.connect();
                }
            }
        })));
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // finallize subject
        this._connectionAttempt$.complete();
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.compareSystemWith = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        return a && b && a.nickname === b.nickname;
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.connect = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        this.errorMsg = undefined;
                        // block users from closing the dialog while connecting
                        this._dialogRef.disableClose = true;
                        this._loadingService.register('system.connect');
                        connection = this.connectionType
                            ? { system: this.system, creds: btoa(this.username + ':' + this.password) }
                            : { system: this.system };
                        return [4 /*yield*/, this._connectionService.connect(connection).toPromise()];
                    case 1:
                        _a.sent();
                        this._dialogRef.close(connection);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        this.errorMsg = error_1.message;
                        return [3 /*break*/, 4];
                    case 3:
                        this._connectionAttempt$.next();
                        // allow users to close dialog again
                        this._dialogRef.disableClose = false;
                        this._loadingService.resolve('system.connect');
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    VantageCredentialsDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close();
    };
    VantageCredentialsDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'vui-sqle-credentials-dialog',
                    template: "<div layout=\"column\" layout-fill>\n  <ng-template tdLoading=\"system.connect\" tdLoadingStrategy=\"overlay\">\n    <div *tdLoading=\"let systems; until: systems$ | async\" flex layout=\"column\">\n      <mat-card-title>{{ 'CREATE_CONNECTION' | translate }}</mat-card-title>\n      <div *ngIf=\"errorMsg\">\n        <td-message [sublabel]=\"errorMsg\" color=\"warn\" id=\"vui-credentials-dialog-invalid-message\"></td-message>\n      </div>\n      <mat-card-content class=\"pad-top pad-right-xs pad-bottom pad-left-xs\" flex>\n        <form #form=\"ngForm\">\n          <ng-container *ngIf=\"systems?.length\">\n            <div layout=\"row\">\n              <mat-form-field class=\"vui-credentials-dialog-system\" appearance=\"outline\" flex>\n                <mat-label>\n                  {{ 'SYSTEM' | translate }}\n                </mat-label>\n                <mat-select\n                  id=\"vui-credentials-dialog-system-select\"\n                  [(ngModel)]=\"system\"\n                  name=\"system\"\n                  [compareWith]=\"compareSystemWith\"\n                  required\n                >\n                  <mat-select-trigger>\n                    <div class=\"mat-body-1\">{{ system.nickname }}</div>\n                    <div class=\"mat-caption tc\">{{ system.host }}:{{ system.port }}</div>\n                  </mat-select-trigger>\n                  <mat-option\n                    [id]=\"'vui-credentials-dialog-' + sys.nickname\"\n                    *ngFor=\"let sys of systems\"\n                    [value]=\"sys\"\n                    class=\"vui-credentials-dialog-system-option\"\n                  >\n                    <div class=\"mat-body-1\">{{ sys.nickname }}</div>\n                    <div class=\"mat-caption\">{{ sys.host }}:{{ sys.port }}</div>\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"basicAuthEnabled\" id=\"vui-credentials-dialog-connection\">\n              <div class=\"push-bottom\">\n                <mat-radio-group\n                  id=\"vui-credentials-dialog-connection-radio\"\n                  #radioGroup=\"matRadioGroup\"\n                  [(ngModel)]=\"connectionType\"\n                  name=\"connection\"\n                  layout=\"column\"\n                >\n                  <mat-radio-button class=\"push-xs\" [value]=\"false\">\n                    {{ 'USE_CURRENT_SESSION' | translate }}\n                  </mat-radio-button>\n                  <mat-radio-button class=\"push-xs\" [value]=\"true\">\n                    {{ 'ENTER_CREDENTIALS' | translate }}\n                  </mat-radio-button>\n                </mat-radio-group>\n              </div>\n              <ng-container *ngIf=\"connectionType\">\n                <div layout=\"row\">\n                  <mat-form-field appearance=\"outline\" flex>\n                    <mat-label>\n                      {{ 'USERNAME' | translate }}\n                    </mat-label>\n                    <input\n                      id=\"vui-credentials-dialog-username-input\"\n                      matInput\n                      (keyup.enter)=\"form.form.valid && connect()\"\n                      type=\"text\"\n                      [(ngModel)]=\"username\"\n                      name=\"username\"\n                      required\n                      cdkFocusInitial\n                    />\n                  </mat-form-field>\n                </div>\n                <div layout=\"row\">\n                  <mat-form-field appearance=\"outline\" flex>\n                    <mat-label>\n                      {{ 'PASSWORD' | translate }}\n                    </mat-label>\n                    <input\n                      id=\"vui-credentials-dialog-password-input\"\n                      matInput\n                      (keyup.enter)=\"form.form.valid && connect()\"\n                      type=\"password\"\n                      [(ngModel)]=\"password\"\n                      name=\"password\"\n                      required\n                    />\n                  </mat-form-field>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n          <div\n            *ngIf=\"systems && systems.length === 0\"\n            id=\"vui-credentials-dialog-empty-state\"\n            layout=\"column\"\n            layout-align=\"center center\"\n            flex\n            class=\"bgc-surface tc-grey-500 mat-typography pad-lg\"\n            [style.height.%]=\"100\"\n          >\n            <mat-icon matListAvatar class=\"text-super push-bottom\">dns</mat-icon>\n            <h2>{{ 'NO_SYSTEMS' | translate }}</h2>\n            <h3 class=\"text-center\">{{ 'NO_SYSTEMS.NOTE' | translate }}</h3>\n          </div>\n        </form>\n      </mat-card-content>\n      <div layout=\"row\" layout-align=\"end center\" class=\"pull-right-lg\">\n        <button\n          id=\"vui-credentials-dialog-cancel-button\"\n          mat-button\n          class=\"text-upper push-right-sm\"\n          (click)=\"cancel()\"\n        >\n          {{ 'CANCEL' | translate }}\n        </button>\n        <button\n          id=\"vui-credentials-dialog-connect-button\"\n          mat-raised-button\n          [disabled]=\"!form.valid || !systems || systems?.length === 0\"\n          color=\"primary\"\n          class=\"text-upper\"\n          (click)=\"connect()\"\n        >\n          {{ 'CONNECT' | translate }}\n        </button>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                    styles: ["::ng-deep .vui-credentials-dialog-system .mat-form-field-infix{padding:.4em 0 .6em}::ng-deep .vui-credentials-dialog-system.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-6%)}::ng-deep .vui-credentials-dialog-system .vui-credentials-dialog-system-option .mat-option-text{line-height:14px}"]
                }] }
    ];
    /** @nocollapse */
    VantageCredentialsDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: VantageConnectionService },
        { type: VantageSystemService },
        { type: TdLoadingService },
        { type: TranslateService }
    ]; };
    return VantageCredentialsDialogComponent;
}());
export { VantageCredentialsDialogComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._connectionAttempt$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.connectionAttempt$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.basicAuthEnabled;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.systems$;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.system;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.connectionType;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.username;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.password;
    /** @type {?} */
    VantageCredentialsDialogComponent.prototype.errorMsg;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._dialogRef;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._connectionService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._systemService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._loadingService;
    /**
     * @type {?}
     * @private
     */
    VantageCredentialsDialogComponent.prototype._translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJjcmVkZW50aWFscy1kaWFsb2cvY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFXLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakUsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBb0JFLDJDQUNVLFVBQTJELEVBQzNELGtCQUE0QyxFQUM1QyxjQUFvQyxFQUNwQyxlQUFpQyxFQUNqQyxVQUE0QjtRQUo1QixlQUFVLEdBQVYsVUFBVSxDQUFpRDtRQUMzRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7O1FBbEI5Qix3QkFBbUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNqRSx1QkFBa0IsR0FB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QyxJQUFJLEVBQUUsQ0FBQzt3QkFDaEMsb0NBQW9DO3dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Ozs7OztLQUVsRDs7OztJQUVELGtEQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBeEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QywwOUtBQWtEOztpQkFFbkQ7Ozs7Z0JBakJRLFlBQVk7Z0JBS1osd0JBQXdCO2dCQURmLG9CQUFvQjtnQkFGN0IsZ0JBQWdCO2dCQVNoQixnQkFBZ0I7O0lBMkZ6Qix3Q0FBQztDQUFBLEFBekZELElBeUZDO1NBcEZZLGlDQUFpQzs7Ozs7O0lBRTVDLGdFQUFpRTs7SUFDakUsK0RBQStFOztJQUUvRSw2REFBa0M7O0lBQ2xDLHFEQUFnQzs7SUFFaEMsbURBQWdCOztJQUNoQiwyREFBZ0M7O0lBQ2hDLHFEQUFpQjs7SUFDakIscURBQWlCOztJQUVqQixxREFBaUI7Ozs7O0lBR2YsdURBQW1FOzs7OztJQUNuRSwrREFBb0Q7Ozs7O0lBQ3BELDJEQUE0Qzs7Ozs7SUFDNUMsNERBQXlDOzs7OztJQUN6Qyx1REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvbG9hZGluZyc7XG5cbmltcG9ydCB7IElTeXN0ZW0sIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlIH0gZnJvbSAnQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3lzdGVtJztcbmltcG9ydCB7IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL2Nvbm5lY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJU1FMRUNvbm5lY3Rpb24gfSBmcm9tICcuLi9xdWVyeS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJldHJ5LCBtYXAsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2dWktc3FsZS1jcmVkZW50aWFscy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VDcmVkZW50aWFsc0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gbGlzdGVucyB0byB0aW1lcyB3ZSB0cnkgdG8gY29ubmVjdCByZWdhcmRsZXNzXG4gIHByaXZhdGUgX2Nvbm5lY3Rpb25BdHRlbXB0JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGNvbm5lY3Rpb25BdHRlbXB0JDogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuX2Nvbm5lY3Rpb25BdHRlbXB0JC5hc09ic2VydmFibGUoKTtcblxuICBiYXNpY0F1dGhFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHN5c3RlbXMkOiBPYnNlcnZhYmxlPElTeXN0ZW1bXT47XG5cbiAgc3lzdGVtOiBJU3lzdGVtO1xuICBjb25uZWN0aW9uVHlwZTogYm9vbGVhbiA9IGZhbHNlO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGVycm9yTXNnOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VmFudGFnZUNyZWRlbnRpYWxzRGlhbG9nQ29tcG9uZW50PixcbiAgICBwcml2YXRlIF9jb25uZWN0aW9uU2VydmljZTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3N5c3RlbVNlcnZpY2U6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlLFxuICAgIHByaXZhdGUgX2xvYWRpbmdTZXJ2aWNlOiBUZExvYWRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIHByZXBvcHVsYXRlIGNvbm5lY3Rpb24gdHlwZVxuICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSB0aGlzLmJhc2ljQXV0aEVuYWJsZWQ7XG4gICAgLy8gcHJlcCBzeXN0ZW1zIG9ic2VydmFibGVcbiAgICBsZXQgcXVlcnlQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuICAgIHF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMuYXBwZW5kKCdzeXN0ZW1UeXBlJywgJ1RFUkFEQVRBJyk7XG4gICAgdGhpcy5zeXN0ZW1zJCA9IHRoaXMuX3N5c3RlbVNlcnZpY2UucXVlcnkocXVlcnlQYXJhbXMpLnBpcGUoXG4gICAgICByZXRyeSgyKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICB0aGlzLmVycm9yTXNnID0gdGhpcy5fdHJhbnNsYXRlLmluc3RhbnQoJ0VSUk9SX1JFVFJJRVZFX0RBVEEnKTtcbiAgICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW10gfSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzcDogeyBkYXRhOiBJU3lzdGVtW10gfSkgPT4gcmVzcC5kYXRhKSxcbiAgICAgIHRhcCgoc3lzdGVtczogSVN5c3RlbVtdKSA9PiB7XG4gICAgICAgIGlmIChzeXN0ZW1zICYmIHN5c3RlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gc2VsZWN0IGZpcnN0IHN5c3RlbSBieSBkZWZhdWx0IGlmIG5vIHN5c3RlbSB3YXMgcHJlcG9wdWxhdGVkXG4gICAgICAgICAgaWYgKCF0aGlzLnN5c3RlbSkge1xuICAgICAgICAgICAgdGhpcy5zeXN0ZW0gPSBzeXN0ZW1zWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzeXN0ZW0gYW5kIGJhc2ljIGF1dGggZGlzYWJsZWQsIHdlIHRyeSB0byBjb25uZWN0IHRvIGl0IGF1dG9tYWdpY2FsbHlcbiAgICAgICAgICBpZiAoc3lzdGVtcy5sZW5ndGggPT09IDEgJiYgIXRoaXMuYmFzaWNBdXRoRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gZmluYWxsaXplIHN1YmplY3RcbiAgICB0aGlzLl9jb25uZWN0aW9uQXR0ZW1wdCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNvbXBhcmVTeXN0ZW1XaXRoKGE6IElTeXN0ZW0sIGI6IElTeXN0ZW0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gYSAmJiBiICYmIGEubmlja25hbWUgPT09IGIubmlja25hbWU7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVycm9yTXNnID0gdW5kZWZpbmVkO1xuICAgICAgLy8gYmxvY2sgdXNlcnMgZnJvbSBjbG9zaW5nIHRoZSBkaWFsb2cgd2hpbGUgY29ubmVjdGluZ1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZWdpc3Rlcignc3lzdGVtLmNvbm5lY3QnKTtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb246IElTUUxFQ29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvblR5cGVcbiAgICAgICAgPyB7IHN5c3RlbTogdGhpcy5zeXN0ZW0sIGNyZWRzOiBidG9hKHRoaXMudXNlcm5hbWUgKyAnOicgKyB0aGlzLnBhc3N3b3JkKSB9XG4gICAgICAgIDogeyBzeXN0ZW06IHRoaXMuc3lzdGVtIH07XG4gICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uU2VydmljZS5jb25uZWN0KGNvbm5lY3Rpb24pLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKGNvbm5lY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fY29ubmVjdGlvbkF0dGVtcHQkLm5leHQoKTtcbiAgICAgIC8vIGFsbG93IHVzZXJzIHRvIGNsb3NlIGRpYWxvZyBhZ2FpblxuICAgICAgdGhpcy5fZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IGZhbHNlO1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVzb2x2ZSgnc3lzdGVtLmNvbm5lY3QnKTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==