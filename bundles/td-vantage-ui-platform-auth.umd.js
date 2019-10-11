(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@covalent/http'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/auth', ['exports', '@angular/core', '@angular/common', '@angular/common/http', 'rxjs', 'rxjs/operators', '@covalent/http', '@angular/router'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].auth = {}), global.ng.core, global.ng.common, global.ng.common.http, global.rxjs, global.rxjs.operators, global.covalent.http, global.ng.router));
}(this, function (exports, core, common, http, rxjs, operators, http$1, router) { 'use strict';

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
                baseHeaders: new http.HttpHeaders({ 'Accept': 'application/json' }),
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
            window.location.href = '/api/user/logout';
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
                return (/** @type {?} */ (res.body));
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
            return this._sessionService.getInfo().pipe(operators.timeout(5000)).pipe(operators.catchError((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // if not logged in, go ahead and log in...otherwise logout
                // append the current path so we get redirected back upon login
                (e.status === UNAUTHORIZED) ? window.location.href = '/start-login' : _this._sessionService.logout();
                throw e;
            })), operators.map((/**
             * @return {?}
             */
            function () {
                return true;
            })));
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageAuthenticationModule = /** @class */ (function () {
        function VantageAuthenticationModule() {
        }
        VantageAuthenticationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        providers: [
                            VANTAGE_TOKEN_PROVIDER,
                            VANTAGE_SESSION_PROVIDER,
                            VantageAuthenticationGuard,
                        ],
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
            if (error.status === UNAUTHORIZED$1) {
                // if logged in, go ahead an expire the cooke and reload the page
                if (!error.url.includes('/token/validity')) {
                    document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    window.location.reload();
                }
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

}));
//# sourceMappingURL=td-vantage-ui-platform-auth.umd.js.map
