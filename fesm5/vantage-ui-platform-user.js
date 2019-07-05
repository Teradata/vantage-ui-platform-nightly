import { Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate, __param, __metadata } from 'tslib';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdGET, TdResponse, TdPOST, TdBody, TdPATCH, TdParam, TdDELETE, TdHttp, TdQueryParams } from '@covalent/http';

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
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.status === 200 ? true : false;
        })));
    };
    __decorate([
        TdGET({
            path: '/',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "query", null);
    __decorate([
        TdPOST({
            path: '/',
        }),
        __param(0, TdBody()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "create", null);
    __decorate([
        TdPATCH({
            path: '/:id',
        }),
        __param(0, TdParam('id')),
        __param(1, TdBody()),
        __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/:id',
        }),
        __param(0, TdParam('id')),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "delete", null);
    __decorate([
        TdPOST({
            path: '/verify',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdBody()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "test", null);
    VantageLDAPService = __decorate([
        TdHttp({
            baseUrl: '/api/user/ldap/config',
            baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
    deps: [[new Optional(), new SkipSelf(), VantageLDAPService]],
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
        TdGET({
            path: '/users',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdQueryParams()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HttpParams,
            Observable]),
        __metadata("design:returntype", Observable)
    ], VantageUserService.prototype, "query", null);
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
    ], VantageUserService.prototype, "get", null);
    VantageUserService = __decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({
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
    deps: [[new Optional(), new SkipSelf(), VantageUserService]],
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
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    };
    __decorate([
        TdGET({
            path: '/groups',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdQueryParams()),
        __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HttpParams,
            Observable]),
        __metadata("design:returntype", Observable)
    ], VantageGroupService.prototype, "query", null);
    VantageGroupService = __decorate([
        TdHttp({
            baseUrl: '/api/user',
            baseHeaders: new HttpHeaders({
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
    deps: [[new Optional(), new SkipSelf(), VantageGroupService]],
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
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

export { LDAPEncription, VantageGroupService, VantageLDAPService, VantageUserModule, VantageUserService, VANTAGE_LDAP_PROVIDER_FACTORY as ɵa, VANTAGE_LDAP_PROVIDER as ɵb, VANTAGE_GROUP_PROVIDER_FACTORY as ɵc, VANTAGE_GROUP_PROVIDER as ɵd, VANTAGE_USER_PROVIDER_FACTORY as ɵe, VANTAGE_USER_PROVIDER as ɵf };
//# sourceMappingURL=vantage-ui-platform-user.js.map
