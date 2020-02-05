(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http'), require('@angular/router'), require('@td-vantage/ui-platform/utilities')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/auth', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http', '@angular/router', '@td-vantage/ui-platform/utilities'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].auth = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http, global.ng.router, global['td-vantage']['ui-platform'].utilities));
}(this, (function (exports, core, common, http, rxjs, operators, http$1, router, utilities) { 'use strict';

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
    /**
     * @record
     */
    function IToken() { }
    if (false) {
        /** @type {?|undefined} */
        IToken.prototype.access_token;
        /** @type {?|undefined} */
        IToken.prototype.refresh_token;
        /** @type {?|undefined} */
        IToken.prototype.expires_at;
        /** @type {?|undefined} */
        IToken.prototype.token_type;
        /** @type {?|undefined} */
        IToken.prototype.expires_in;
        /** @type {?|undefined} */
        IToken.prototype.token_in;
    }
    var VantageTokenService = /** @class */ (function () {
        function VantageTokenService() {
        }
        /**
         * @param {?} user
         * @param {?=} response
         * @return {?}
         */
        VantageTokenService.prototype.create = /**
         * @param {?} user
         * @param {?=} response
         * @return {?}
         */
        function (user, response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var data = res.body;
                /** @type {?} */
                var token = res.headers.get('X-AUTH-TOKEN') || data.access_token;
                return { data: data, token: token };
            })));
        };
        __decorate([
            http$1.TdPOST({
                path: '/token',
                options: {
                    observe: 'response',
                },
            }),
            __param(0, http$1.TdBody()),
            __param(1, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageTokenService.prototype, "create", null);
        VantageTokenService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user',
                baseHeaders: new http.HttpHeaders({ Accept: 'application/json' }),
            })
        ], VantageTokenService);
        return VantageTokenService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_TOKEN_PROVIDER_FACTORY(parent) {
        return parent || new VantageTokenService();
    }
    /** @type {?} */
    var VANTAGE_TOKEN_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageTokenService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageTokenService]],
        useFactory: VANTAGE_TOKEN_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ISessionUser() { }
    if (false) {
        /** @type {?|undefined} */
        ISessionUser.prototype.user;
        /** @type {?|undefined} */
        ISessionUser.prototype.valid;
        /** @type {?|undefined} */
        ISessionUser.prototype.admin;
        /** @type {?|undefined} */
        ISessionUser.prototype.groups;
        /** @type {?|undefined} */
        ISessionUser.prototype.expires_at;
    }
    var VantageSessionService = /** @class */ (function () {
        function VantageSessionService() {
        }
        Object.defineProperty(VantageSessionService.prototype, "user", {
            get: /**
             * @return {?}
             */
            function () {
                return this._user;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VantageSessionService.prototype.getInfo = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._user) {
                return this._get().pipe(operators.switchMap((/**
                 * @param {?} sessionUser
                 * @return {?}
                 */
                function (sessionUser) {
                    return _this._getUser(sessionUser.user).pipe(operators.tap((/**
                     * @param {?} u
                     * @return {?}
                     */
                    function (u) {
                        _this._user = Object.assign({}, sessionUser, u);
                    })));
                })));
            }
            else {
                return rxjs.of(this._user);
            }
        };
        /**
         * @return {?}
         */
        VantageSessionService.prototype.logout = /**
         * @return {?}
         */
        function () {
            window.location.href = '/api/user/logout?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000);
        };
        /**
         * gets the current sso logged in users information
         */
        /**
         * gets the current sso logged in users information
         * @private
         * @param {?=} response
         * @return {?}
         */
        VantageSessionService.prototype._get = /**
         * gets the current sso logged in users information
         * @private
         * @param {?=} response
         * @return {?}
         */
        function (response) {
            return response.pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.body;
            })));
        };
        /**
         * gets a single users information
         */
        /**
         * gets a single users information
         * @private
         * @param {?} id
         * @param {?=} response
         * @return {?}
         */
        VantageSessionService.prototype._getUser = /**
         * gets a single users information
         * @private
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
            http$1.TdPOST({
                path: '/token/validity?fields=user,groups',
                options: {
                    observe: 'response',
                },
            }),
            __param(0, http$1.TdResponse()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [rxjs.Observable]),
            __metadata("design:returntype", rxjs.Observable)
        ], VantageSessionService.prototype, "_get", null);
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
        ], VantageSessionService.prototype, "_getUser", null);
        VantageSessionService = __decorate([
            http$1.TdHttp({
                baseUrl: '/api/user',
                baseHeaders: new http.HttpHeaders({
                    Accept: 'application/json',
                }),
            })
        ], VantageSessionService);
        return VantageSessionService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageSessionService.prototype._user;
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    function VANTAGE_SESSION_PROVIDER_FACTORY(parent) {
        return parent || new VantageSessionService();
    }
    /** @type {?} */
    var VANTAGE_SESSION_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageSessionService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageSessionService]],
        useFactory: VANTAGE_SESSION_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var UNAUTHORIZED = 401;
    var VantageAuthenticationGuard = /** @class */ (function () {
        function VantageAuthenticationGuard(_router, _sessionService) {
            this._router = _router;
            this._sessionService = _sessionService;
        }
        /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        VantageAuthenticationGuard.prototype.canActivate = /**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        function (next, state) {
            var _this = this;
            utilities.showPreLoader();
            return this._sessionService.getInfo().pipe(operators.timeout(5000), operators.catchError((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // if not logged in, go ahead and log in...otherwise logout
                // append the current path so we get redirected back upon login
                e.status === UNAUTHORIZED
                    ? (window.location.href = '/start-login?nonce=' + Math.floor(1000000000 + Math.random() * 9000000000))
                    : _this._sessionService.logout();
                throw e;
            })), operators.map((/**
             * @return {?}
             */
            function () { return true; })), operators.finalize((/**
             * @return {?}
             */
            function () { return utilities.hidePreLoader(); })));
        };
        VantageAuthenticationGuard.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageAuthenticationGuard.ctorParameters = function () { return [
            { type: router.Router },
            { type: VantageSessionService }
        ]; };
        return VantageAuthenticationGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageAuthenticationGuard.prototype._router;
        /**
         * @type {?}
         * @private
         */
        VantageAuthenticationGuard.prototype._sessionService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAuthenticationModule = /** @class */ (function () {
        function VantageAuthenticationModule() {
        }
        VantageAuthenticationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [VANTAGE_TOKEN_PROVIDER, VANTAGE_SESSION_PROVIDER, VantageAuthenticationGuard],
                    },] }
        ];
        return VantageAuthenticationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* 4XX errors */
    /** @type {?} */
    var UNAUTHORIZED$1 = 401;
    /** @type {?} */
    var PAYLOAD_TOO_LARGE = 413;
    /* 5XX errors */
    /** @type {?} */
    var SERVICE_UNAVAILABLE = 503;
    /** @type {?} */
    var GATEWAY_TIMEOUT = 504;
    var VantageAuthenticationInterceptor = /** @class */ (function () {
        function VantageAuthenticationInterceptor() {
        }
        /**
         * @param {?} error
         * @return {?}
         */
        VantageAuthenticationInterceptor.prototype.onResponseError = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error.status === UNAUTHORIZED$1 && !error.url.includes('/token/validity')) {
                // if logged in, go ahead an expire the cooke and reload the page
                document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.reload();
            }
            throw error;
        };
        /**
         * @param {?} observable
         * @return {?}
         */
        VantageAuthenticationInterceptor.prototype.handleResponse = /**
         * @param {?} observable
         * @return {?}
         */
        function (observable) {
            var _this = this;
            return observable.pipe(operators.catchError((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // check error and do something
                if (e instanceof http.HttpErrorResponse) {
                    // do something if its response error
                    return _this.onResponseError(e);
                }
            })));
        };
        VantageAuthenticationInterceptor.decorators = [
            { type: core.Injectable }
        ];
        return VantageAuthenticationInterceptor;
    }());

    exports.VANTAGE_SESSION_PROVIDER = VANTAGE_SESSION_PROVIDER;
    exports.VANTAGE_SESSION_PROVIDER_FACTORY = VANTAGE_SESSION_PROVIDER_FACTORY;
    exports.VANTAGE_TOKEN_PROVIDER = VANTAGE_TOKEN_PROVIDER;
    exports.VANTAGE_TOKEN_PROVIDER_FACTORY = VANTAGE_TOKEN_PROVIDER_FACTORY;
    exports.VantageAuthenticationGuard = VantageAuthenticationGuard;
    exports.VantageAuthenticationInterceptor = VantageAuthenticationInterceptor;
    exports.VantageAuthenticationModule = VantageAuthenticationModule;
    exports.VantageSessionService = VantageSessionService;
    exports.VantageTokenService = VantageTokenService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-auth.umd.js.map
