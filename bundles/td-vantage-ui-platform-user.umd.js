(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/user', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].user = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http));
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

    exports.LDAPEncription = LDAPEncription;
    exports.VantageGroupService = VantageGroupService;
    exports.VantageLDAPService = VantageLDAPService;
    exports.VantageUserModule = VantageUserModule;
    exports.VantageUserService = VantageUserService;
    exports.ɵa = VANTAGE_LDAP_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_LDAP_PROVIDER;
    exports.ɵc = VANTAGE_GROUP_PROVIDER_FACTORY;
    exports.ɵd = VANTAGE_GROUP_PROVIDER;
    exports.ɵe = VANTAGE_USER_PROVIDER_FACTORY;
    exports.ɵf = VANTAGE_USER_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=td-vantage-ui-platform-user.umd.js.map
