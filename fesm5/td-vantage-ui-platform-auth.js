import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, catchError, timeout, finalize } from 'rxjs/operators';
import { TdPOST, TdBody, TdResponse, mixinHttp, TdGET, TdParam } from '@covalent/http';
import { Router } from '@angular/router';
import { showPreLoader, hidePreLoader } from '@td-vantage/ui-platform/utilities';

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
var VantageTokenService = /** @class */ (function (_super) {
    __extends(VantageTokenService, _super);
    function VantageTokenService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    VantageTokenService.decorators = [
        { type: Injectable }
    ];
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
    return VantageTokenService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
var VantageSessionService = /** @class */ (function (_super) {
    __extends(VantageSessionService, _super);
    function VantageSessionService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return response.pipe(map((/**
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
            return res.body;
        })));
    };
    VantageSessionService.decorators = [
        { type: Injectable }
    ];
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
    return VantageSessionService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user',
    baseHeaders: new HttpHeaders({
        Accept: 'application/json',
    }),
})));
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
    deps: [[new Optional(), new SkipSelf(), VantageSessionService]],
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
        showPreLoader();
        return this._sessionService.getInfo().pipe(timeout(5000), catchError((/**
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
        })), map((/**
         * @return {?}
         */
        function () { return true; })), finalize((/**
         * @return {?}
         */
        function () { return hidePreLoader(); })));
    };
    VantageAuthenticationGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    VantageAuthenticationGuard.ctorParameters = function () { return [
        { type: Router },
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { VANTAGE_SESSION_PROVIDER, VANTAGE_SESSION_PROVIDER_FACTORY, VANTAGE_TOKEN_PROVIDER, VANTAGE_TOKEN_PROVIDER_FACTORY, VantageAuthenticationGuard, VantageAuthenticationInterceptor, VantageAuthenticationModule, VantageSessionService, VantageTokenService };
//# sourceMappingURL=td-vantage-ui-platform-auth.js.map
