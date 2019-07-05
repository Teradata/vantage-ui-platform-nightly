(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/notification', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].notification = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http));
}(this, function (exports, core, common, http, rxjs, operators, http$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageSMTPService = /** @class */ (function () {
        function VantageSMTPService() {
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
            return response.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return rxjs.of(false);
            })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return !!res;
            })));
        };
        __decorate([
            http$1.TdPUT({
                path: '/smtp-config',
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSMTPService.prototype, "create", null);
        __decorate([
            http$1.TdGET({
                path: '/smtp-config',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSMTPService.prototype, "query", null);
        __decorate([
            http$1.TdDELETE({
                path: '/smtp-config',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSMTPService.prototype, "delete", null);
        __decorate([
            http$1.TdGET({
                path: '/health',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSMTPService.prototype, "health", null);
        VantageSMTPService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/notification',
                baseHeaders: new http.HttpHeaders({ 'Accept': 'application/json' }),
            })
        ], VantageSMTPService);
        return VantageSMTPService;
    }());
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
        deps: [[new core.Optional(), new core.SkipSelf(), VantageSMTPService]],
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VANTAGE_SMTP_PROVIDER,
                        ],
                    },] }
        ];
        return VantageNotificationModule;
    }());

    exports.VantageNotificationModule = VantageNotificationModule;
    exports.VantageSMTPService = VantageSMTPService;
    exports.ɵa = VANTAGE_SMTP_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_SMTP_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=td-vantage-ui-platform-notification.umd.js.map
