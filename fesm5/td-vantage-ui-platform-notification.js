import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TdPUT, TdBody, TdResponse, TdGET, TdDELETE, mixinHttp } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISMTPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.port;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.reply_address;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_username;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.smtp_password;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.use_ssl;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.anon_logon;
    /** @type {?|undefined} */
    ISMTPConfig.prototype.server_timeout;
}
var VantageSMTPService = /** @class */ (function (_super) {
    __extends(VantageSMTPService, _super);
    function VantageSMTPService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.create = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.query = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.delete = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageSMTPService.prototype.health = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return !!res;
        })));
    };
    VantageSMTPService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdPUT({
            path: '/smtp-config',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "create", null);
    __decorate([
        TdGET({
            path: '/smtp-config',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "query", null);
    __decorate([
        TdDELETE({
            path: '/smtp-config',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "delete", null);
    __decorate([
        TdGET({
            path: '/health',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSMTPService.prototype, "health", null);
    return VantageSMTPService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/notification',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_SMTP_PROVIDER_FACTORY(parent) {
    return parent || new VantageSMTPService();
}
/** @type {?} */
var VANTAGE_SMTP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSMTPService,
    deps: [[new Optional(), new SkipSelf(), VantageSMTPService]],
    useFactory: VANTAGE_SMTP_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageNotificationModule = /** @class */ (function () {
    function VantageNotificationModule() {
    }
    VantageNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_SMTP_PROVIDER],
                },] }
    ];
    return VantageNotificationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VantageNotificationModule, VantageSMTPService, VANTAGE_SMTP_PROVIDER_FACTORY as ɵa, VANTAGE_SMTP_PROVIDER as ɵb };
//# sourceMappingURL=td-vantage-ui-platform-notification.js.map
