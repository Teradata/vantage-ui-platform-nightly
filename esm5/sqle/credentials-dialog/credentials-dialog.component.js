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
                        _a.trys.push([0, 5, 6, 7]);
                        this.errorMsg = undefined;
                        // block users from closing the dialog while connecting
                        this._dialogRef.disableClose = true;
                        this._loadingService.register('system.connect');
                        connection = this.connectionType
                            ? { system: this.system, creds: btoa(this.username + ':' + this.password) }
                            : { system: this.system };
                        if (!this._connectionService.exists(connection)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._connectionService.setAsCurrent(connection).toPromise()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this._connectionService.addAndSetAsCurrent(connection).toPromise()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this._dialogRef.close(connection);
                        return [3 /*break*/, 7];
                    case 5:
                        error_1 = _a.sent();
                        this.errorMsg = error_1.message;
                        return [3 /*break*/, 7];
                    case 6:
                        this._connectionAttempt$.next();
                        // allow users to close dialog again
                        this._dialogRef.disableClose = false;
                        this._loadingService.resolve('system.connect');
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3NxbGUvIiwic291cmNlcyI6WyJjcmVkZW50aWFscy1kaWFsb2cvY3JlZGVudGlhbHMtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFXLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakUsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBb0JFLDJDQUNVLFVBQTJELEVBQzNELGtCQUE0QyxFQUM1QyxjQUFvQyxFQUNwQyxlQUFpQyxFQUNqQyxVQUE0QjtRQUo1QixlQUFVLEdBQVYsVUFBVSxDQUFpRDtRQUMzRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTBCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7O1FBbEI5Qix3QkFBbUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNqRSx1QkFBa0IsR0FB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QUFFLEVBQUE7O3dCQUF4RSxTQUF3RSxDQUFDOzs7d0JBRzNFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O3dCQUVsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQUssQ0FBQyxPQUFPLENBQUM7Ozt3QkFFOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNoQyxvQ0FBb0M7d0JBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7Ozs7O0tBRWxEOzs7O0lBRUQsa0RBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkE5RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDA5S0FBa0Q7O2lCQUVuRDs7OztnQkFqQlEsWUFBWTtnQkFLWix3QkFBd0I7Z0JBRGYsb0JBQW9CO2dCQUY3QixnQkFBZ0I7Z0JBU2hCLGdCQUFnQjs7SUFpR3pCLHdDQUFDO0NBQUEsQUEvRkQsSUErRkM7U0ExRlksaUNBQWlDOzs7Ozs7SUFFNUMsZ0VBQWlFOztJQUNqRSwrREFBK0U7O0lBRS9FLDZEQUFrQzs7SUFDbEMscURBQWdDOztJQUVoQyxtREFBZ0I7O0lBQ2hCLDJEQUFnQzs7SUFDaEMscURBQWlCOztJQUNqQixxREFBaUI7O0lBRWpCLHFEQUFpQjs7Ozs7SUFHZix1REFBbUU7Ozs7O0lBQ25FLCtEQUFvRDs7Ozs7SUFDcEQsMkRBQTRDOzs7OztJQUM1Qyw0REFBeUM7Ozs7O0lBQ3pDLHVEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UgfSBmcm9tICdAY292YWxlbnQvY29yZS9sb2FkaW5nJztcblxuaW1wb3J0IHsgSVN5c3RlbSwgVmFudGFnZVN5c3RlbVNlcnZpY2UgfSBmcm9tICdAdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0nO1xuaW1wb3J0IHsgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29ubmVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IElTUUxFQ29ubmVjdGlvbiB9IGZyb20gJy4uL3F1ZXJ5LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnksIG1hcCwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Z1aS1zcWxlLWNyZWRlbnRpYWxzLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jcmVkZW50aWFscy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcmVkZW50aWFscy1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUNyZWRlbnRpYWxzRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyBsaXN0ZW5zIHRvIHRpbWVzIHdlIHRyeSB0byBjb25uZWN0IHJlZ2FyZGxlc3NcbiAgcHJpdmF0ZSBfY29ubmVjdGlvbkF0dGVtcHQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY29ubmVjdGlvbkF0dGVtcHQkOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5fY29ubmVjdGlvbkF0dGVtcHQkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGJhc2ljQXV0aEVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc3lzdGVtcyQ6IE9ic2VydmFibGU8SVN5c3RlbVtdPjtcblxuICBzeXN0ZW06IElTeXN0ZW07XG4gIGNvbm5lY3Rpb25UeXBlOiBib29sZWFuID0gZmFsc2U7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgZXJyb3JNc2c6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWYW50YWdlQ3JlZGVudGlhbHNEaWFsb2dDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgX2Nvbm5lY3Rpb25TZXJ2aWNlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc3lzdGVtU2VydmljZTogVmFudGFnZVN5c3RlbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfbG9hZGluZ1NlcnZpY2U6IFRkTG9hZGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gcHJlcG9wdWxhdGUgY29ubmVjdGlvbiB0eXBlXG4gICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IHRoaXMuYmFzaWNBdXRoRW5hYmxlZDtcbiAgICAvLyBwcmVwIHN5c3RlbXMgb2JzZXJ2YWJsZVxuICAgIGxldCBxdWVyeVBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgcXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcy5hcHBlbmQoJ3N5c3RlbVR5cGUnLCAnVEVSQURBVEEnKTtcbiAgICB0aGlzLnN5c3RlbXMkID0gdGhpcy5fc3lzdGVtU2VydmljZS5xdWVyeShxdWVyeVBhcmFtcykucGlwZShcbiAgICAgIHJldHJ5KDIpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2cgPSB0aGlzLl90cmFuc2xhdGUuaW5zdGFudCgnRVJST1JfUkVUUklFVkVfREFUQScpO1xuICAgICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9KTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXNwOiB7IGRhdGE6IElTeXN0ZW1bXSB9KSA9PiByZXNwLmRhdGEpLFxuICAgICAgdGFwKChzeXN0ZW1zOiBJU3lzdGVtW10pID0+IHtcbiAgICAgICAgaWYgKHN5c3RlbXMgJiYgc3lzdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAvLyBzZWxlY3QgZmlyc3Qgc3lzdGVtIGJ5IGRlZmF1bHQgaWYgbm8gc3lzdGVtIHdhcyBwcmVwb3B1bGF0ZWRcbiAgICAgICAgICBpZiAoIXRoaXMuc3lzdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnN5c3RlbSA9IHN5c3RlbXNbMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIHN5c3RlbSBhbmQgYmFzaWMgYXV0aCBkaXNhYmxlZCwgd2UgdHJ5IHRvIGNvbm5lY3QgdG8gaXQgYXV0b21hZ2ljYWxseVxuICAgICAgICAgIGlmIChzeXN0ZW1zLmxlbmd0aCA9PT0gMSAmJiAhdGhpcy5iYXNpY0F1dGhFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBmaW5hbGxpemUgc3ViamVjdFxuICAgIHRoaXMuX2Nvbm5lY3Rpb25BdHRlbXB0JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY29tcGFyZVN5c3RlbVdpdGgoYTogSVN5c3RlbSwgYjogSVN5c3RlbSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBhICYmIGIgJiYgYS5uaWNrbmFtZSA9PT0gYi5uaWNrbmFtZTtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXJyb3JNc2cgPSB1bmRlZmluZWQ7XG4gICAgICAvLyBibG9jayB1c2VycyBmcm9tIGNsb3NpbmcgdGhlIGRpYWxvZyB3aGlsZSBjb25uZWN0aW5nXG4gICAgICB0aGlzLl9kaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlZ2lzdGVyKCdzeXN0ZW0uY29ubmVjdCcpO1xuICAgICAgY29uc3QgY29ubmVjdGlvbjogSVNRTEVDb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uVHlwZVxuICAgICAgICA/IHsgc3lzdGVtOiB0aGlzLnN5c3RlbSwgY3JlZHM6IGJ0b2EodGhpcy51c2VybmFtZSArICc6JyArIHRoaXMucGFzc3dvcmQpIH1cbiAgICAgICAgOiB7IHN5c3RlbTogdGhpcy5zeXN0ZW0gfTtcblxuICAgICAgaWYgKHRoaXMuX2Nvbm5lY3Rpb25TZXJ2aWNlLmV4aXN0cyhjb25uZWN0aW9uKSkge1xuICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uU2VydmljZS5zZXRBc0N1cnJlbnQoY29ubmVjdGlvbikudG9Qcm9taXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLl9jb25uZWN0aW9uU2VydmljZS5hZGRBbmRTZXRBc0N1cnJlbnQoY29ubmVjdGlvbikudG9Qcm9taXNlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZShjb25uZWN0aW9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2Nvbm5lY3Rpb25BdHRlbXB0JC5uZXh0KCk7XG4gICAgICAvLyBhbGxvdyB1c2VycyB0byBjbG9zZSBkaWFsb2cgYWdhaW5cbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5kaXNhYmxlQ2xvc2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlc29sdmUoJ3N5c3RlbS5jb25uZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iXX0=