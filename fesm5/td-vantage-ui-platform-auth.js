import { Optional, SkipSelf, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate, __param, __metadata, __awaiter, __generator } from 'tslib';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { TdPOST, TdBody, TdResponse, TdHttp, TdGET, TdParam } from '@covalent/http';

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
        return response.pipe(map((/**
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
        TdPOST({
            path: '/token',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdBody()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageTokenService.prototype, "create", null);
    VantageTokenService = __decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
    deps: [[new Optional(), new SkipSelf(), VantageTokenService]],
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
            return this._get().pipe(switchMap((/**
             * @param {?} sessionUser
             * @return {?}
             */
            function (sessionUser) {
                return _this._getUser(sessionUser.user).pipe(tap((/**
                 * @param {?} u
                 * @return {?}
                 */
                function (u) {
                    _this._user = Object.assign({}, sessionUser, u);
                })));
            })));
        }
        else {
            return of(this._user);
        }
    };
    /**
     * @return {?}
     */
    VantageSessionService.prototype.logout = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, this._logout().toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        window.location.reload();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.body;
        })));
    };
    /**
     * @private
     * @param {?=} response
     * @return {?}
     */
    VantageSessionService.prototype._logout = /**
     * @private
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res;
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
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(error);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return (/** @type {?} */ (res.body));
        })));
    };
    __decorate([
        TdPOST({
            path: '/token/validity?fields=user,groups',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_get", null);
    __decorate([
        TdGET({
            path: '/logout?session=true',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_logout", null);
    __decorate([
        TdGET({
            path: '/users/:username',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdParam('username')),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSessionService.prototype, "_getUser", null);
    VantageSessionService = __decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({
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
    deps: [[new Optional(), new SkipSelf(), VantageSessionService]],
    useFactory: VANTAGE_SESSION_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VantageAuthenticationGuard = /** @class */ (function () {
    function VantageAuthenticationGuard(_sessionService) {
        this._sessionService = _sessionService;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    VantageAuthenticationGuard.prototype.getCookiebyName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
        return !!pair ? pair[1] : undefined;
    };
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
        return __awaiter(this, void 0, void 0, function () {
            var xsrfToken, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xsrfToken = this.getCookiebyName('XSRF-TOKEN');
                        if (!!xsrfToken) return [3 /*break*/, 1];
                        window.location.href = '/start-login';
                        return [2 /*return*/, false];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._sessionService.getInfo().toPromise()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this._sessionService.logout();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    VantageAuthenticationGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageAuthenticationGuard.ctorParameters = function () { return [
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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
var UNAUTHORIZED = 401;
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
        if (error.status === UNAUTHORIZED) {
            // expire the xsrf cookie and reload page
            document.cookie = 'XSRF-TOKEN=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            window.location.reload();
        }
        return error;
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
        return observable.pipe(catchError((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            // check error and do something
            if (e instanceof HttpErrorResponse) {
                // do something if its response error
                return _this.onResponseError(e);
            }
        })));
    };
    VantageAuthenticationInterceptor.decorators = [
        { type: Injectable }
    ];
    return VantageAuthenticationInterceptor;
}());

export { VANTAGE_SESSION_PROVIDER, VANTAGE_SESSION_PROVIDER_FACTORY, VANTAGE_TOKEN_PROVIDER, VANTAGE_TOKEN_PROVIDER_FACTORY, VantageAuthenticationGuard, VantageAuthenticationInterceptor, VantageAuthenticationModule, VantageSessionService, VantageTokenService };
//# sourceMappingURL=td-vantage-ui-platform-auth.js.map
