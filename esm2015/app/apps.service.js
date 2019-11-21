/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
const AppType = {
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
let VantageAppsService = class VantageAppsService {
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    query(params, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return {
                total: +res.headers.get('X-Total'),
                data: (/** @type {?} */ (res.body)),
            };
        })));
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    get(id, response) {
        return response;
    }
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    update(id, body, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?=} response
     * @return {?}
     */
    delete(id, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?} formData
     * @param {?=} response
     * @return {?}
     */
    uploadFile(id, formData, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return true;
        })));
    }
};
VantageAppsService.decorators = [
    { type: Injectable }
];
tslib_1.__decorate([
    TdGET({
        path: '/apps',
        options: {
            observe: 'response',
        },
    }),
    tslib_1.__param(0, TdQueryParams()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [HttpParams,
        Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "query", null);
tslib_1.__decorate([
    TdGET({
        path: '/apps/:id',
    }),
    tslib_1.__param(0, TdParam('id')), tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "get", null);
tslib_1.__decorate([
    TdPOST({
        path: '/apps',
    }),
    tslib_1.__param(0, TdBody()), tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "create", null);
tslib_1.__decorate([
    TdPATCH({
        path: '/apps/:id',
    }),
    tslib_1.__param(0, TdParam('id')), tslib_1.__param(1, TdBody()), tslib_1.__param(2, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "update", null);
tslib_1.__decorate([
    TdDELETE({
        path: '/apps/:id',
    }),
    tslib_1.__param(0, TdParam('id')), tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "delete", null);
tslib_1.__decorate([
    TdPOST({
        path: '/apps/:id/container',
    }),
    tslib_1.__param(0, TdParam('id')),
    tslib_1.__param(1, TdBody()),
    tslib_1.__param(2, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, FormData,
        Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageAppsService.prototype, "uploadFile", null);
VantageAppsService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/app',
        baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
    })
], VantageAppsService);
export { VantageAppsService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_APPS_PROVIDER_FACTORY(parent) {
    return parent || new VantageAppsService();
}
/** @type {?} */
export const VANTAGE_APPS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAppsService,
    deps: [[new Optional(), new SkipSelf(), VantageAppsService]],
    useFactory: VANTAGE_APPS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsiYXBwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3BILEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQW1DQzs7O0lBbENDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLDZCQUFnQzs7SUFDaEMscUJBQWU7O0lBQ2Ysc0JBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QsMkJBQXFCOztJQUNyQiwrQkFBeUI7O0lBQ3pCLG9CQUFjOztJQUNkLDRCQUFzQjs7SUFDdEIsNEJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0Isc0JBQWdCOztJQUNoQixvQkFBYzs7SUFDZCxzQkFBeUI7O0lBQ3pCLHNCQUFpQjs7SUFDakIsOEJBQXFCOztJQUNyQix3QkFBZTs7SUFDZixtQ0FBNkI7O0lBQzdCLHdCQUFrQjs7SUFDbEIsMkJBQXFCOztJQUNyQix3QkFBa0I7O0lBQ2xCLHdCQUFrQjs7SUFDbEIsMEJB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UyxVQUFVO2dEQUV2RjtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLHFCQUFxQjtLQUM1QixDQUFDO0lBRUMsbUJBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2IsbUJBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7cURBRE8sUUFBUTtRQUNILFVBQVU7NENBQ2xDLFVBQVU7b0RBTVo7QUE5RFUsa0JBQWtCO0lBTDlCLE1BQU0sQ0FBQztRQUNOLE9BQU8sRUFBRSxVQUFVO1FBQ25CLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQzdELENBQUM7R0FFVyxrQkFBa0IsQ0ErRDlCO1NBL0RZLGtCQUFrQjs7Ozs7QUFpRS9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoQykgMjAxNi0yMDE3IGJ5IFRlcmFkYXRhIENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVEVSQURBVEEgQ09SUE9SQVRJT04gQ09ORklERU5USUFMIEFORCBUUkFERSBTRUNSRVRcbiAqL1xuaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFBPU1QsIFRkREVMRVRFLCBUZFBBVENILCBUZFBhcmFtLCBUZEJvZHksIFRkUmVzcG9uc2UsIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBTUUwgPSAnc3FsJyxcbiAgQlRFUSA9ICdidGVxJyxcbiAgSkFWQSA9ICdqYXZhJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcCB7XG4gIGFwcF9pZD86IHN0cmluZztcbiAgYXBwX3R5cGU/OiBBcHBUeXBlO1xuICBhcHBfY29kZT86IHN0cmluZztcbiAgY29sbGFib3JhdG9ycz86IElBcHBQZXJtaXNzaW9ucztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvbmZpZz86IGFueTtcbiAgY3B1cz86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRvY2tlckltYWdlTmFtZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW5zdGFsbF90aW1lPzogc3RyaW5nO1xuICBpbnN0YWxsZWRfYnk/OiBzdHJpbmc7XG4gIGxhc3RfdXBkYXRlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX3RpbWU/OiBzdHJpbmc7XG4gIG1lbW9yeT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgb3duZXJzPzogSUFwcFBlcm1pc3Npb25zO1xuICBwdWJsaWM/OiBib29sZWFuO1xuICByZXN1bHRzX2NvbmZpZz86IGFueTtcbiAgdmVyc2lvbnM/OiBhbnk7XG4gIGxhc3RfdmVyc2lvbl9zdGF0dXM/OiBzdHJpbmc7XG4gIGRhdGFiYXNlPzogc3RyaW5nO1xuICBzeXN0ZW1fbmFtZT86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwYXJhbV9uYW1lPzogc3RyaW5nO1xuICBlcGhlbWVyYWw/OiBib29sZWFuO1xuICBjYW5fZXhlY3V0ZT86IGJvb2xlYW47XG4gIHdlYl9yb290Pzogc3RyaW5nO1xuICBhY2Nlc3NfdXJsPzogc3RyaW5nO1xuICB0YWdfbmFtZXM/OiBhbnlbXTtcbiAgZXhwb3NlZFBvcnRzPzogYW55W107XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgY29udGFpbmVyUG9ydD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQ29uZmlndXJhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHR5cGU/OiAndGV4dCcgfCAnbnVtYmVyJyB8ICdib29sZWFuJyB8ICdkYXRlJztcbiAgbWluPzogbnVtYmVyIHwgRGF0ZTtcbiAgbWF4PzogbnVtYmVyIHwgRGF0ZTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBkZWZhdWx0PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBQZXJtaXNzaW9ucyB7XG4gIHVzZXJzPzogc3RyaW5nW107XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvYXBwJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXBwc1NlcnZpY2Uge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvYXBwcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBxdWVyeShcbiAgICBAVGRRdWVyeVBhcmFtcygpIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPHsgdG90YWw6IG51bWJlcjsgZGF0YTogSUFwcFtdIH0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElBcHBbXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQnLFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElBcHAsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUEFUQ0goe1xuICAgIHBhdGg6ICcvYXBwcy86aWQnLFxuICB9KVxuICB1cGRhdGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQFRkQm9keSgpIGJvZHk6IElBcHAsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzLzppZC9jb250YWluZXInLFxuICB9KVxuICBwdWJsaWMgdXBsb2FkRmlsZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLFxuICAgIEBUZEJvZHkoKSBmb3JtRGF0YTogRm9ybURhdGEsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfQVBQU19QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUFwcHNTZXJ2aWNlKTogVmFudGFnZUFwcHNTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUFwcHNTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FQUFNfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXBwc1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlQXBwc1NlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BUFBTX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19