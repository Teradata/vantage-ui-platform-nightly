/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TdHttp, TdGET, TdPOST, TdDELETE, TdPATCH, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
/** @enum {string} */
var AppType = {
    SQL: 'sql',
    BTEQ: 'bteq',
    JAVA: 'java',
    CUSTOM: 'custom',
};
export { AppType };
/**
 * @record
 */
export function IApp() { }
if (false) {
    /** @type {?|undefined} */
    IApp.prototype.app_id;
    /** @type {?|undefined} */
    IApp.prototype.app_type;
    /** @type {?|undefined} */
    IApp.prototype.app_code;
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
export function IAppConfiguration() { }
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
export function IAppPermissions() { }
if (false) {
    /** @type {?|undefined} */
    IAppPermissions.prototype.users;
    /** @type {?|undefined} */
    IAppPermissions.prototype.groups;
}
var VantageAppsService = /** @class */ (function () {
    function VantageAppsService() {
    }
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    VantageAppsService.prototype.query = /**
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
    VantageAppsService.prototype.get = /**
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
    VantageAppsService.prototype.create = /**
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
    VantageAppsService.prototype.update = /**
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
    VantageAppsService.prototype.delete = /**
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
    VantageAppsService.prototype.uploadFile = /**
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
    VantageAppsService.decorators = [
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
    ], VantageAppsService.prototype, "query", null);
    __decorate([
        TdGET({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppsService.prototype, "get", null);
    __decorate([
        TdPOST({
            path: '/apps',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppsService.prototype, "create", null);
    __decorate([
        TdPATCH({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdBody()), __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppsService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/apps/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageAppsService.prototype, "delete", null);
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
    ], VantageAppsService.prototype, "uploadFile", null);
    VantageAppsService = __decorate([
        TdHttp({
            baseUrl: '/api/app',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
        })
    ], VantageAppsService);
    return VantageAppsService;
}());
export { VantageAppsService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_APPS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAppsService();
}
/** @type {?} */
export var VANTAGE_APPS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAppsService,
    deps: [[new Optional(), new SkipSelf(), VantageAppsService]],
    useFactory: VANTAGE_APPS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsiYXBwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3BILEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQW9DQzs7O0lBbkNDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLDZCQUFnQzs7SUFDaEMscUJBQWU7O0lBQ2Ysc0JBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QsMkJBQXFCOztJQUNyQiwrQkFBeUI7O0lBQ3pCLG9CQUFjOztJQUNkLDRCQUFzQjs7SUFDdEIsNEJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0Isc0JBQWdCOztJQUNoQixvQkFBYzs7SUFDZCxzQkFBeUI7O0lBQ3pCLHNCQUFpQjs7SUFDakIsOEJBQXFCOztJQUNyQix3QkFBZTs7SUFDZixtQ0FBNkI7O0lBQzdCLHdCQUFrQjs7SUFDbEIsMkJBQXFCOztJQUNyQix3QkFBa0I7O0lBQ2xCLHdCQUFrQjs7SUFDbEIsMEJB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QUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBUyxVQUFVO29EQUV2RjtJQUtEO1FBSEMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBRUMsV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDYixXQUFBLE1BQU0sRUFBRSxDQUFBO1FBQ1IsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBRE8sUUFBUTtZQUNILFVBQVU7d0NBQ2xDLFVBQVU7d0RBTVo7SUE5RFUsa0JBQWtCO1FBTDlCLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FFVyxrQkFBa0IsQ0ErRDlCO0lBQUQseUJBQUM7Q0FBQSxJQUFBO1NBL0RZLGtCQUFrQjs7Ozs7QUFpRS9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFBPU1QsIFRkREVMRVRFLCBUZFBBVENILCBUZFBhcmFtLCBUZEJvZHksIFRkUmVzcG9uc2UsIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBTUUwgPSAnc3FsJyxcbiAgQlRFUSA9ICdidGVxJyxcbiAgSkFWQSA9ICdqYXZhJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcCB7XG4gIGFwcF9pZD86IHN0cmluZztcbiAgYXBwX3R5cGU/OiBBcHBUeXBlO1xuICBhcHBfY29kZT86IHN0cmluZztcbiAgY29sbGFib3JhdG9ycz86IElBcHBQZXJtaXNzaW9ucztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvbmZpZz86IGFueTtcbiAgY3B1cz86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRvY2tlckltYWdlTmFtZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW5zdGFsbF90aW1lPzogc3RyaW5nO1xuICBpbnN0YWxsZWRfYnk/OiBzdHJpbmc7XG4gIGxhc3RfdXBkYXRlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX3RpbWU/OiBzdHJpbmc7XG4gIG1lbW9yeT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgb3duZXJzPzogSUFwcFBlcm1pc3Npb25zO1xuICBwdWJsaWM/OiBib29sZWFuO1xuICByZXN1bHRzX2NvbmZpZz86IGFueTtcbiAgdmVyc2lvbnM/OiBhbnk7XG4gIGxhc3RfdmVyc2lvbl9zdGF0dXM/OiBzdHJpbmc7XG4gIGRhdGFiYXNlPzogc3RyaW5nO1xuICBzeXN0ZW1fbmFtZT86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwYXJhbV9uYW1lPzogc3RyaW5nO1xuICBlcGhlbWVyYWw/OiBib29sZWFuO1xuICBjYW5fZXhlY3V0ZT86IGJvb2xlYW47XG4gIHdlYl9yb290Pzogc3RyaW5nO1xuICBhY2Nlc3NfdXJsPzogc3RyaW5nO1xuICB0YWdfbmFtZXM/OiBhbnlbXTtcbiAgZXhwb3NlZFBvcnRzPzogYW55W107XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgY29udGFpbmVyUG9ydD86IG51bWJlcjtcbiAgZmF2b3JpdGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBDb25maWd1cmF0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgdHlwZT86ICd0ZXh0JyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nIHwgJ2RhdGUnO1xuICBtaW4/OiBudW1iZXIgfCBEYXRlO1xuICBtYXg/OiBudW1iZXIgfCBEYXRlO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGRlZmF1bHQ/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFBlcm1pc3Npb25zIHtcbiAgdXNlcnM/OiBzdHJpbmdbXTtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9hcHAnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBzU2VydmljZSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJQXBwW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SUFwcFtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgYm9keTogSUFwcCwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQQVRDSCh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRCb2R5KCkgYm9keTogSUFwcCwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQnLFxuICB9KVxuICBkZWxldGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkL2NvbnRhaW5lcicsXG4gIH0pXG4gIHB1YmxpYyB1cGxvYWRGaWxlKFxuICAgIEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsXG4gICAgQFRkQm9keSgpIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9BUFBTX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlQXBwc1NlcnZpY2UpOiBWYW50YWdlQXBwc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQXBwc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfQVBQU19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VBcHBzU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VBcHBzU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0FQUFNfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=