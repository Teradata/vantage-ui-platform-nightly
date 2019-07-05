(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@vantage/ui-platform/system', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http'], factory) :
    (global = global || self, factory((global.vantage = global.vantage || {}, global.vantage['ui-platform'] = global.vantage['ui-platform'] || {}, global.vantage['ui-platform'].system = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http));
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
    /** @enum {string} */
    var SystemType = {
        Teradata: 'TERADATA',
        Aster: 'ASTER',
        Presto: 'PRESTO',
    };
    /** @type {?} */
    var VANTAGE_SYSTEMS_TYPES = [
        SystemType.Teradata,
        SystemType.Aster,
        SystemType.Presto,
    ];
    var VantageSystemService = /** @class */ (function () {
        function VantageSystemService() {
        }
        /**
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.health = /**
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
        /**
         * @param {?=} params
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.query = /**
         * @param {?=} params
         * @param {?=} response
         * @return {?}
         */
        function (params, response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return {
                    total: +res.headers.get('X-Total'),
                    data: (/** @type {?} */ (res.body)),
                };
            })));
        };
        /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.get = /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response;
        };
        /**
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.create = /**
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        function (system, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.update = /**
         * @param {?} id
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        function (id, system, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.delete = /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response;
        };
        /**
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        VantageSystemService.prototype.test = /**
         * @param {?} system
         * @param {?=} response
         * @return {?}
         */
        function (system, response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return true;
            })));
        };
        __decorate([
            http$1.TdGET({
                path: '/health',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "health", null);
        __decorate([
            http$1.TdGET({
                path: '/systems',
                options: {
                    observe: 'response',
                },
            }),
            __param(0, http$1.TdQueryParams()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [http.HttpParams,
                rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "query", null);
        __decorate([
            http$1.TdGET({
                path: '/systems/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "get", null);
        __decorate([
            http$1.TdPOST({
                path: '/systems',
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "create", null);
        __decorate([
            http$1.TdPUT({
                path: '/systems/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdBody()),
            __param(2, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "update", null);
        __decorate([
            http$1.TdDELETE({
                path: '/systems/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "delete", null);
        __decorate([
            http$1.TdPOST({
                path: '/testsystem',
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSystemService.prototype, "test", null);
        VantageSystemService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/system',
                baseHeaders: new http.HttpHeaders({ 'Accept': 'application/json' }),
            })
        ], VantageSystemService);
        return VantageSystemService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent) {
        return parent || new VantageSystemService();
    }
    /** @type {?} */
    var VANTAGE_SYSTEM_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageSystemService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageSystemService]],
        useFactory: VANTAGE_SYSTEM_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageSystemModule = /** @class */ (function () {
        function VantageSystemModule() {
        }
        VantageSystemModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VANTAGE_SYSTEM_PROVIDER,
                        ],
                    },] }
        ];
        return VantageSystemModule;
    }());

    exports.SystemType = SystemType;
    exports.VANTAGE_SYSTEMS_TYPES = VANTAGE_SYSTEMS_TYPES;
    exports.VantageSystemModule = VantageSystemModule;
    exports.VantageSystemService = VantageSystemService;
    exports.ɵa = VANTAGE_SYSTEM_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_SYSTEM_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vantage-ui-platform-system.umd.js.map
