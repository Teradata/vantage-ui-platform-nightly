(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/user', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].user = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http));
}(this, (function (exports, core, common, http, rxjs, operators, http$1) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

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

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var LDAPEncription = {
        None: 'NONE',
    };
    /**
     * @record
     */
    function ILDAPConfig() { }
    if (false) {
        /** @type {?|undefined} */
        ILDAPConfig.prototype.allowed_groups;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.base_dn;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.config_id;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.connectionUrl;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.email_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.encryption;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.group_id_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.groups_base_dn;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.id_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.member_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.member_of_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.name_field;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.port;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.search_pass;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.search_user;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.server;
        /** @type {?|undefined} */
        ILDAPConfig.prototype.url;
    }
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
                return res.status === 200;
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
            __param(0, http$1.TdBody()), __param(1, http$1.TdResponse()),
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
            __param(0, http$1.TdParam('id')), __param(1, http$1.TdResponse()),
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
            __param(0, http$1.TdBody()), __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageLDAPService.prototype, "test", null);
        VantageLDAPService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user/ldap/config',
                baseHeaders: new http.HttpHeaders({ Accept: 'application/json' }),
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
    /**
     * @record
     */
    function IUser() { }
    if (false) {
        /** @type {?|undefined} */
        IUser.prototype.username;
        /** @type {?|undefined} */
        IUser.prototype.password;
        /** @type {?|undefined} */
        IUser.prototype.email;
        /** @type {?|undefined} */
        IUser.prototype.local;
        /** @type {?|undefined} */
        IUser.prototype.admin;
        /** @type {?|undefined} */
        IUser.prototype.groups;
        /** @type {?|undefined} */
        IUser.prototype.display_name;
        /** @type {?|undefined} */
        IUser.prototype.access_token;
        /** @type {?|undefined} */
        IUser.prototype.expires_at;
    }
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
                return res.body;
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
            __param(0, http$1.TdParam('username')), __param(1, http$1.TdResponse()),
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
    /**
     * @record
     */
    function IGroup() { }
    if (false) {
        /** @type {?|undefined} */
        IGroup.prototype.name;
        /** @type {?|undefined} */
        IGroup.prototype.description;
        /** @type {?|undefined} */
        IGroup.prototype.id;
        /** @type {?|undefined} */
        IGroup.prototype.display_name;
        /** @type {?|undefined} */
        IGroup.prototype.users;
    }
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
                        imports: [common.CommonModule],
                        providers: [VANTAGE_LDAP_PROVIDER, VANTAGE_USER_PROVIDER, VANTAGE_GROUP_PROVIDER],
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

})));
//# sourceMappingURL=td-vantage-ui-platform-user.umd.js.map
