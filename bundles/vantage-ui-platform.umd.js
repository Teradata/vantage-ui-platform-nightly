(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http'), require('@covalent/core/dialogs'), require('@ngx-translate/core'), require('@angular/material/snack-bar'), require('@covalent/core/media')) :
    typeof define === 'function' && define.amd ? define('@vantage/ui-platform', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http', '@covalent/core/dialogs', '@ngx-translate/core', '@angular/material/snack-bar', '@covalent/core/media'], factory) :
    (global = global || self, factory((global.vantage = global.vantage || {}, global.vantage['ui-platform'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http, global.covalent.core.dialogs, global['ngx-translate'].core, global.ng.material['snack-bar'], global.covalent.core.media));
}(this, function (exports, core, common, http, rxjs, operators, http$1, dialogs, core$1, snackBar, media) { 'use strict';

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
    var VantageAuditService = /** @class */ (function () {
        function VantageAuditService() {
        }
        /**
         * @param {?=} params
         * @param {?=} response
         * @return {?}
         */
        VantageAuditService.prototype.query = /**
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
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        VantageAuditService.prototype.create = /**
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        function (body, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageAuditService.prototype.get = /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response;
        };
        /**
         * @param {?=} response
         * @return {?}
         */
        VantageAuditService.prototype.health = /**
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
            http$1.TdGET({
                path: '/audit/messages',
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
        ], VantageAuditService.prototype, "query", null);
        __decorate([
            http$1.TdPOST({
                path: '/audit/messages',
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAuditService.prototype, "create", null);
        __decorate([
            http$1.TdGET({
                path: '/audit/messages/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAuditService.prototype, "get", null);
        __decorate([
            http$1.TdGET({
                path: '/health',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAuditService.prototype, "health", null);
        VantageAuditService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/audit',
                baseHeaders: new http.HttpHeaders({ 'Accept': 'application/json' }),
            })
        ], VantageAuditService);
        return VantageAuditService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_AUDIT_PROVIDER_FACTORY(parent) {
        return parent || new VantageAuditService();
    }
    /** @type {?} */
    var VANTAGE_AUDIT_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageAuditService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageAuditService]],
        useFactory: VANTAGE_AUDIT_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAuditModule = /** @class */ (function () {
        function VantageAuditModule() {
        }
        VantageAuditModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VANTAGE_AUDIT_PROVIDER,
                        ],
                    },] }
        ];
        return VantageAuditModule;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var LDAPEncription = {
        None: 'NONE',
    };
    var VantageLDAPService = /** @class */ (function () {
        function VantageLDAPService() {
        }
        /**
         * @param {?=} response
         * @return {?}
         */
        VantageLDAPService.prototype.query = /**
         * @param {?=} response
         * @return {?}
         */
        function (response) {
            return response;
        };
        /**
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        VantageLDAPService.prototype.create = /**
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        function (body, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        VantageLDAPService.prototype.update = /**
         * @param {?} id
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        function (id, body, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageLDAPService.prototype.delete = /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response;
        };
        /**
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        VantageLDAPService.prototype.test = /**
         * @param {?} body
         * @param {?=} response
         * @return {?}
         */
        function (body, response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.status === 200 ? true : false;
            })));
        };
        __decorate([
            http$1.TdGET({
                path: '/',
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "query", null);
        __decorate([
            http$1.TdPOST({
                path: '/',
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "create", null);
        __decorate([
            http$1.TdPATCH({
                path: '/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdBody()),
            __param(2, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "update", null);
        __decorate([
            http$1.TdDELETE({
                path: '/:id',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "delete", null);
        __decorate([
            http$1.TdPOST({
                path: '/verify',
                options: {
                    observe: 'response',
                },
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "test", null);
        VantageLDAPService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user/ldap/config',
                baseHeaders: new http.HttpHeaders({ 'Accept': 'application/json' }),
            })
        ], VantageLDAPService);
        return VantageLDAPService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_LDAP_PROVIDER_FACTORY(parent) {
        return parent || new VantageLDAPService();
    }
    /** @type {?} */
    var VANTAGE_LDAP_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageLDAPService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageLDAPService]],
        useFactory: VANTAGE_LDAP_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageUserService = /** @class */ (function () {
        function VantageUserService() {
        }
        /**
         * get all users
         */
        /**
         * get all users
         * @param {?=} queryParams
         * @param {?=} response
         * @return {?}
         */
        VantageUserService.prototype.query = /**
         * get all users
         * @param {?=} queryParams
         * @param {?=} response
         * @return {?}
         */
        function (queryParams, response) {
            return response.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return rxjs.of(error);
            })), operators.map((/**
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
         * gets a single users information
         */
        /**
         * gets a single users information
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageUserService.prototype.get = /**
         * gets a single users information
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return rxjs.of(error);
            })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return (/** @type {?} */ (res.body));
            })));
        };
        __decorate([
            http$1.TdGET({
                path: '/users',
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
        ], VantageUserService.prototype, "query", null);
        __decorate([
            http$1.TdGET({
                path: '/users/:username',
                options: {
                    observe: 'response',
                },
            }),
            __param(0, http$1.TdParam('username')),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageUserService.prototype, "get", null);
        VantageUserService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user',
                baseHeaders: new http.HttpHeaders({
                    Accept: 'application/json',
                }),
            })
        ], VantageUserService);
        return VantageUserService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_USER_PROVIDER_FACTORY(parent) {
        return parent || new VantageUserService();
    }
    /** @type {?} */
    var VANTAGE_USER_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageUserService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageUserService]],
        useFactory: VANTAGE_USER_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageGroupService = /** @class */ (function () {
        function VantageGroupService() {
        }
        /**
         * get groups in paginated form via query string
         */
        /**
         * get groups in paginated form via query string
         * @param {?=} queryParams
         * @param {?=} response
         * @return {?}
         */
        VantageGroupService.prototype.query = /**
         * get groups in paginated form via query string
         * @param {?=} queryParams
         * @param {?=} response
         * @return {?}
         */
        function (queryParams, response) {
            return response.pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return rxjs.of(error);
            })), operators.map((/**
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
        __decorate([
            http$1.TdGET({
                path: '/groups',
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
        ], VantageGroupService.prototype, "query", null);
        VantageGroupService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user',
                baseHeaders: new http.HttpHeaders({
                    Accept: 'application/json',
                }),
            })
        ], VantageGroupService);
        return VantageGroupService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_GROUP_PROVIDER_FACTORY(parent) {
        return parent || new VantageGroupService();
    }
    /** @type {?} */
    var VANTAGE_GROUP_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageGroupService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageGroupService]],
        useFactory: VANTAGE_GROUP_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageUserModule = /** @class */ (function () {
        function VantageUserModule() {
        }
        VantageUserModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VANTAGE_LDAP_PROVIDER,
                            VANTAGE_USER_PROVIDER,
                            VANTAGE_GROUP_PROVIDER,
                        ],
                    },] }
        ];
        return VantageUserModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageError = /** @class */ (function () {
        function VantageError() {
        }
        return VantageError;
    }());
    var VantageErrorService = /** @class */ (function () {
        function VantageErrorService(_dialogService, _translate) {
            this._dialogService = _dialogService;
            this._translate = _translate;
        }
        /**
         * @param {?} error
         * @return {?}
         */
        VantageErrorService.prototype.open = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error) {
                /** @type {?} */
                var config = {
                    title: this._translate.instant('THERE_WAS_A_PROBLEM'),
                    message: error.message,
                    disableClose: true,
                    closeButton: this._translate.instant('CLOSE'),
                };
                if (error.error) {
                    config.message += " (" + error.error.toString() + ")";
                }
                if (config.message || config.title) {
                    return this._dialogService.openAlert(config);
                }
            }
        };
        VantageErrorService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageErrorService.ctorParameters = function () { return [
            { type: dialogs.TdDialogService },
            { type: core$1.TranslateService }
        ]; };
        return VantageErrorService;
    }());
    /**
     * @param {?} parent
     * @param {?} dialogService
     * @param {?} translate
     * @return {?}
     */
    function VANTAGE_ERROR_PROVIDER_FACTORY(parent, dialogService, translate) {
        return parent || new VantageErrorService(dialogService, translate);
    }
    /** @type {?} */
    var VANTAGE_ERROR_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageErrorService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageErrorService], dialogs.TdDialogService, core$1.TranslateService],
        useFactory: VANTAGE_ERROR_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageToastService = /** @class */ (function () {
        function VantageToastService(_snackBarService, _media) {
            this._snackBarService = _snackBarService;
            this._media = _media;
        }
        /**
         * @param {?} message
         * @param {?=} time
         * @return {?}
         */
        VantageToastService.prototype.open = /**
         * @param {?} message
         * @param {?=} time
         * @return {?}
         */
        function (message, time) {
            if (time === void 0) { time = 3000; }
            if (message) {
                this._snackBarService.open(message, undefined, {
                    duration: time,
                    horizontalPosition: this._media && this._media.query('gt-sm') ? 'end' : 'center',
                });
            }
        };
        VantageToastService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageToastService.ctorParameters = function () { return [
            { type: snackBar.MatSnackBar },
            { type: media.TdMediaService }
        ]; };
        return VantageToastService;
    }());
    /**
     * @param {?} parent
     * @param {?} snackBar
     * @param {?} media
     * @return {?}
     */
    function VANTAGE_TOAST_PROVIDER_FACTORY(parent, snackBar, media) {
        return parent || new VantageToastService(snackBar, media);
    }
    /** @type {?} */
    var VANTAGE_TOAST_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageToastService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageToastService], snackBar.MatSnackBar, [new core.Optional(), media.TdMediaService]],
        useFactory: VANTAGE_TOAST_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageUserFeedbackModule = /** @class */ (function () {
        function VantageUserFeedbackModule() {
        }
        VantageUserFeedbackModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            snackBar.MatSnackBarModule,
                            dialogs.CovalentDialogsModule,
                            media.CovalentMediaModule,
                        ],
                        providers: [
                            VANTAGE_ERROR_PROVIDER,
                            VANTAGE_TOAST_PROVIDER,
                        ],
                    },] }
        ];
        return VantageUserFeedbackModule;
    }());

    exports.LDAPEncription = LDAPEncription;
    exports.SystemType = SystemType;
    exports.VANTAGE_SYSTEMS_TYPES = VANTAGE_SYSTEMS_TYPES;
    exports.VantageAuditModule = VantageAuditModule;
    exports.VantageAuditService = VantageAuditService;
    exports.VantageError = VantageError;
    exports.VantageErrorService = VantageErrorService;
    exports.VantageGroupService = VantageGroupService;
    exports.VantageLDAPService = VantageLDAPService;
    exports.VantageNotificationModule = VantageNotificationModule;
    exports.VantageSMTPService = VantageSMTPService;
    exports.VantageSystemModule = VantageSystemModule;
    exports.VantageSystemService = VantageSystemService;
    exports.VantageToastService = VantageToastService;
    exports.VantageUserFeedbackModule = VantageUserFeedbackModule;
    exports.VantageUserModule = VantageUserModule;
    exports.VantageUserService = VantageUserService;
    exports.ɵa = VANTAGE_AUDIT_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_AUDIT_PROVIDER;
    exports.ɵc = VANTAGE_SMTP_PROVIDER_FACTORY;
    exports.ɵd = VANTAGE_SMTP_PROVIDER;
    exports.ɵe = VANTAGE_SYSTEM_PROVIDER_FACTORY;
    exports.ɵf = VANTAGE_SYSTEM_PROVIDER;
    exports.ɵg = VANTAGE_LDAP_PROVIDER_FACTORY;
    exports.ɵh = VANTAGE_LDAP_PROVIDER;
    exports.ɵi = VANTAGE_GROUP_PROVIDER_FACTORY;
    exports.ɵj = VANTAGE_GROUP_PROVIDER;
    exports.ɵk = VANTAGE_USER_PROVIDER_FACTORY;
    exports.ɵl = VANTAGE_USER_PROVIDER;
    exports.ɵm = VANTAGE_ERROR_PROVIDER_FACTORY;
    exports.ɵn = VANTAGE_ERROR_PROVIDER;
    exports.ɵo = VANTAGE_TOAST_PROVIDER_FACTORY;
    exports.ɵp = VANTAGE_TOAST_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vantage-ui-platform.umd.js.map
