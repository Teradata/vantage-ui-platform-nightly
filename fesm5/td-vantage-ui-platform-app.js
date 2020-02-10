import { Injectable, Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __extends, __decorate, __param, __metadata } from 'tslib';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { TdGET, TdQueryParams, TdResponse, TdParam, TdPOST, TdBody, TdPATCH, TdDELETE, mixinHttp } from '@covalent/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
var VantageAppService = /** @class */ (function (_super) {
    __extends(VantageAppService, _super);
    function VantageAppService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return true;
        })));
    };
    VantageAppService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/apps',
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
    ], VantageAppService.prototype, "query", null);
    __decorate([
        TdGET({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppService.prototype, "get", null);
    __decorate([
        TdPOST({
            path: '/apps',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppService.prototype, "create", null);
    __decorate([
        TdPATCH({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdBody()), __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppService.prototype, "delete", null);
    __decorate([
        TdPOST({
            path: '/apps/:id/container',
        }),
        __param(0, TdParam('id')),
        __param(1, TdBody()),
        __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, FormData,
            Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppService.prototype, "uploadFile", null);
    return VantageAppService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/app',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
    deps: [[new Optional(), new SkipSelf(), VantageAppService]],
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
var VantageTagsService = /** @class */ (function (_super) {
    __extends(VantageTagsService, _super);
    function VantageTagsService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    VantageTagsService.decorators = [
        { type: Injectable }
    ];
    __decorate([
        TdGET({
            path: '/tags',
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
    ], VantageTagsService.prototype, "query", null);
    return VantageTagsService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/app',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
    deps: [[new Optional(), new SkipSelf(), VantageTagsService]],
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [VANTAGE_APP_PROVIDER, VANTAGE_TAGS_PROVIDER],
                },] }
    ];
    return VantageAppModule;
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

export { AppType, VantageAppModule, VantageAppService, VantageTagsService, VANTAGE_APP_PROVIDER_FACTORY as ɵa, VANTAGE_APP_PROVIDER as ɵb, VANTAGE_TAGS_PROVIDER_FACTORY as ɵc, VANTAGE_TAGS_PROVIDER as ɵd };
//# sourceMappingURL=td-vantage-ui-platform-app.js.map
