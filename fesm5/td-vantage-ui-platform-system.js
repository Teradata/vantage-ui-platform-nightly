import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TdGET, TdResponse, TdQueryParams, TdParam, TdPOST, TdBody, TdPUT, TdDELETE, mixinHttp } from '@covalent/http';

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
var VANTAGE_SYSTEMS_TYPES = [SystemType.Teradata, SystemType.Aster, SystemType.Presto];
/**
 * @record
 */
function ISystemAttributes() { }
if (false) {
    /** @type {?|undefined} */
    ISystemAttributes.prototype.attributes;
}
/**
 * @record
 */
function IAbstractSystem() { }
if (false) {
    /** @type {?|undefined} */
    IAbstractSystem.prototype.host;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.port;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.system_type;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.catalog;
    /** @type {?|undefined} */
    IAbstractSystem.prototype.schema;
}
/**
 * @record
 */
function ISystem() { }
if (false) {
    /** @type {?|undefined} */
    ISystem.prototype.attributes;
    /** @type {?|undefined} */
    ISystem.prototype.data_center;
    /** @type {?|undefined} */
    ISystem.prototype.environment;
    /** @type {?|undefined} */
    ISystem.prototype.id;
    /** @type {?|undefined} */
    ISystem.prototype.nickname;
    /** @type {?|undefined} */
    ISystem.prototype.platform_id;
    /** @type {?|undefined} */
    ISystem.prototype.system_attributes;
    /** @type {?|undefined} */
    ISystem.prototype.version;
}
/**
 * @record
 */
function ITestSystem() { }
if (false) {
    /** @type {?|undefined} */
    ITestSystem.prototype.account;
    /** @type {?|undefined} */
    ITestSystem.prototype.default_char_set;
    /** @type {?|undefined} */
    ITestSystem.prototype.default_database;
    /** @type {?|undefined} */
    ITestSystem.prototype.log_mech;
    /** @type {?|undefined} */
    ITestSystem.prototype.password;
    /** @type {?|undefined} */
    ITestSystem.prototype.username;
}
var VantageSystemService = /** @class */ (function (_super) {
    __extends(VantageSystemService, _super);
    function VantageSystemService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(false);
        })), map((/**
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
        return response.pipe(map((/**
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
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return true;
        })));
    };
    VantageSystemService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/health',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "health", null);
    __decorate([
        TdGET({
            path: '/systems',
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
    ], VantageSystemService.prototype, "query", null);
    __decorate([
        TdGET({
            path: '/systems/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "get", null);
    __decorate([
        TdPOST({
            path: '/systems',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "create", null);
    __decorate([
        TdPUT({
            path: '/systems/:id',
        }),
        __param(0, TdParam('id')),
        __param(1, TdBody()),
        __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/systems/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "delete", null);
    __decorate([
        TdPOST({
            path: '/testsystem',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "test", null);
    return VantageSystemService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/system',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
    deps: [[new Optional(), new SkipSelf(), VantageSystemService]],
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_SYSTEM_PROVIDER],
                },] }
    ];
    return VantageSystemModule;
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

export { SystemType, VANTAGE_SYSTEMS_TYPES, VantageSystemModule, VantageSystemService, VANTAGE_SYSTEM_PROVIDER_FACTORY as ɵa, VANTAGE_SYSTEM_PROVIDER as ɵb };
//# sourceMappingURL=td-vantage-ui-platform-system.js.map
