(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@covalent/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/app', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@covalent/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].app = {}), global.ng.core, global.ng.common, global.ng.common.http, global.covalent.http, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, http, http$1, rxjs, operators) { 'use strict';

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
    var AppType = {
        SQL: 'sql',
        BTEQ: 'bteq',
        CUSTOM: 'custom',
    };
    /**
     * @record
     */
    function IApp() { }
    if (false) {
        /** @type {?|undefined} */
        IApp.prototype.app_id;
        /** @type {?|undefined} */
        IApp.prototype.app_type;
        /** @type {?|undefined} */
        IApp.prototype.app_code;
        /** @type {?|undefined} */
        IApp.prototype.app_state;
        /** @type {?|undefined} */
        IApp.prototype.collaborators;
        /** @type {?|undefined} */
        IApp.prototype.color;
        /** @type {?|undefined} */
        IApp.prototype.config;
        /** @type {?|undefined} */
        IApp.prototype.cpus;
        /** @type {?|undefined} */
        IApp.prototype.description;
        /** @type {?|undefined} */
        IApp.prototype.dockerImageName;
        /** @type {?|undefined} */
        IApp.prototype.icon;
        /** @type {?|undefined} */
        IApp.prototype.install_time;
        /** @type {?|undefined} */
        IApp.prototype.installed_by;
        /** @type {?|undefined} */
        IApp.prototype.last_updated_by;
        /** @type {?|undefined} */
        IApp.prototype.last_updated_time;
        /** @type {?|undefined} */
        IApp.prototype.memory;
        /** @type {?|undefined} */
        IApp.prototype.name;
        /** @type {?|undefined} */
        IApp.prototype.owners;
        /** @type {?|undefined} */
        IApp.prototype.public;
        /** @type {?|undefined} */
        IApp.prototype.results_config;
        /** @type {?|undefined} */
        IApp.prototype.versions;
        /** @type {?|undefined} */
        IApp.prototype.last_version_status;
        /** @type {?|undefined} */
        IApp.prototype.database;
        /** @type {?|undefined} */
        IApp.prototype.system_name;
        /** @type {?|undefined} */
        IApp.prototype.username;
        /** @type {?|undefined} */
        IApp.prototype.password;
        /** @type {?|undefined} */
        IApp.prototype.param_name;
        /** @type {?|undefined} */
        IApp.prototype.ephemeral;
        /** @type {?|undefined} */
        IApp.prototype.can_execute;
        /** @type {?|undefined} */
        IApp.prototype.web_root;
        /** @type {?|undefined} */
        IApp.prototype.access_url;
        /** @type {?|undefined} */
        IApp.prototype.tag_names;
        /** @type {?|undefined} */
        IApp.prototype.exposedPorts;
        /** @type {?|undefined} */
        IApp.prototype.system_id;
        /** @type {?|undefined} */
        IApp.prototype.containerPort;
        /** @type {?|undefined} */
        IApp.prototype.favorite;
    }
    /**
     * @record
     */
    function IAppConfiguration() { }
    if (false) {
        /** @type {?} */
        IAppConfiguration.prototype.id;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.name;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.type;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.min;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.max;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.required;
        /** @type {?|undefined} */
        IAppConfiguration.prototype.default;
    }
    /**
     * @record
     */
    function IAppPermissions() { }
    if (false) {
        /** @type {?|undefined} */
        IAppPermissions.prototype.users;
        /** @type {?|undefined} */
        IAppPermissions.prototype.groups;
    }
    var VantageAppService = /** @class */ (function () {
        function VantageAppService() {
        }
        /**
         * @param {?=} params
         * @param {?=} response
         * @return {?}
         */
        VantageAppService.prototype.query = /**
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
        VantageAppService.prototype.get = /**
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
        VantageAppService.prototype.create = /**
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
        VantageAppService.prototype.update = /**
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
        VantageAppService.prototype.delete = /**
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        function (id, response) {
            return response;
        };
        /**
         * @param {?} id
         * @param {?} formData
         * @param {?=} response
         * @return {?}
         */
        VantageAppService.prototype.uploadFile = /**
         * @param {?} id
         * @param {?} formData
         * @param {?=} response
         * @return {?}
         */
        function (id, formData, response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return true;
            })));
        };
        VantageAppService.decorators = [
            { type: core.Injectable }
        ];
        __decorate([
            http$1.TdGET({
                path: '/apps',
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
        ], VantageAppService.prototype, "query", null);
        __decorate([
            http$1.TdGET({
                path: '/apps/:id',
            }),
            __param(0, http$1.TdParam('id')), __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAppService.prototype, "get", null);
        __decorate([
            http$1.TdPOST({
                path: '/apps',
            }),
            __param(0, http$1.TdBody()), __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAppService.prototype, "create", null);
        __decorate([
            http$1.TdPATCH({
                path: '/apps/:id',
            }),
            __param(0, http$1.TdParam('id')), __param(1, http$1.TdBody()), __param(2, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAppService.prototype, "update", null);
        __decorate([
            http$1.TdDELETE({
                path: '/apps/:id',
            }),
            __param(0, http$1.TdParam('id')), __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAppService.prototype, "delete", null);
        __decorate([
            http$1.TdPOST({
                path: '/apps/:id/container',
            }),
            __param(0, http$1.TdParam('id')),
            __param(1, http$1.TdBody()),
            __param(2, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, FormData,
                rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageAppService.prototype, "uploadFile", null);
        VantageAppService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/app',
                baseHeaders: new http.HttpHeaders({ Accept: 'application/json' }),
            })
        ], VantageAppService);
        return VantageAppService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_APP_PROVIDER_FACTORY(parent) {
        return parent || new VantageAppService();
    }
    /** @type {?} */
    var VANTAGE_APP_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageAppService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageAppService]],
        useFactory: VANTAGE_APP_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITag() { }
    if (false) {
        /** @type {?|undefined} */
        ITag.prototype.tag_id;
        /** @type {?|undefined} */
        ITag.prototype.tag;
    }
    var VantageTagsService = /** @class */ (function () {
        function VantageTagsService() {
        }
        /**
         * @param {?=} params
         * @param {?=} response
         * @return {?}
         */
        VantageTagsService.prototype.query = /**
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
        VantageTagsService.decorators = [
            { type: core.Injectable }
        ];
        __decorate([
            http$1.TdGET({
                path: '/tags',
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
        ], VantageTagsService.prototype, "query", null);
        VantageTagsService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/app',
                baseHeaders: new http.HttpHeaders({ Accept: 'application/json' }),
            })
        ], VantageTagsService);
        return VantageTagsService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_TAGS_PROVIDER_FACTORY(parent) {
        return parent || new VantageTagsService();
    }
    /** @type {?} */
    var VANTAGE_TAGS_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageTagsService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageTagsService]],
        useFactory: VANTAGE_TAGS_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAppModule = /** @class */ (function () {
        function VantageAppModule() {
        }
        VantageAppModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [VANTAGE_APP_PROVIDER, VANTAGE_TAGS_PROVIDER],
                    },] }
        ];
        return VantageAppModule;
    }());

    exports.AppType = AppType;
    exports.VantageAppModule = VantageAppModule;
    exports.VantageAppService = VantageAppService;
    exports.VantageTagsService = VantageTagsService;
    exports.ɵa = VANTAGE_APP_PROVIDER_FACTORY;
    exports.ɵb = VANTAGE_APP_PROVIDER;
    exports.ɵc = VANTAGE_TAGS_PROVIDER_FACTORY;
    exports.ɵd = VANTAGE_TAGS_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-app.umd.js.map
