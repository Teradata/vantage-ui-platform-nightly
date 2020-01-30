/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdParam, TdBody, TdQueryParams, TdResponse, TdGET, TdPOST, TdDELETE, TdPATCH } from '@covalent/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/** @enum {string} */
var AppType = {
    SQL: 'sql',
    BTEQ: 'bteq',
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
    VantageAppService = __decorate([
        TdHttp({
            baseUrl: '/api/app',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
        })
    ], VantageAppService);
    return VantageAppService;
}());
export { VantageAppService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_APP_PROVIDER_FACTORY(parent) {
    return parent || new VantageAppService();
}
/** @type {?} */
export var VANTAGE_APP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAppService,
    deps: [[new Optional(), new SkipSelf(), VantageAppService]],
    useFactory: VANTAGE_APP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hcHAvIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR25DLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQW9DQzs7O0lBbkNDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLDZCQUFnQzs7SUFDaEMscUJBQWU7O0lBQ2Ysc0JBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QsMkJBQXFCOztJQUNyQiwrQkFBeUI7O0lBQ3pCLG9CQUFjOztJQUNkLDRCQUFzQjs7SUFDdEIsNEJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0Isc0JBQWdCOztJQUNoQixvQkFBYzs7SUFDZCxzQkFBeUI7O0lBQ3pCLHNCQUFpQjs7SUFDakIsOEJBQXFCOztJQUNyQix3QkFBZTs7SUFDZixtQ0FBNkI7O0lBQzdCLHdCQUFrQjs7SUFDbEIsMkJBQXFCOztJQUNyQix3QkFBa0I7O0lBQ2xCLHdCQUFrQjs7SUFDbEIsMEJBQW9COztJQUNwQix5QkFBb0I7O0lB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VUFBVTt3Q0FBUyxVQUFVO21EQUV2RjtJQUtEO1FBSEMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBRUMsV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDYixXQUFBLE1BQU0sRUFBRSxDQUFBO1FBQ1IsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBRE8sUUFBUTtZQUNILFVBQVU7d0NBQ2xDLFVBQVU7dURBTVo7SUE5RFUsaUJBQWlCO1FBTDdCLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxVQUFVO1lBQ25CLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FFVyxpQkFBaUIsQ0ErRDdCO0lBQUQsd0JBQUM7Q0FBQSxJQUFBO1NBL0RZLGlCQUFpQjs7Ozs7QUFpRTlCLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxNQUF5QjtJQUNwRSxPQUFPLE1BQU0sSUFBSSxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDM0MsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQWE7O0lBRTVDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRCxVQUFVLEVBQUUsNEJBQTRCO0NBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVGRIdHRwLCBUZFBhcmFtLCBUZEJvZHksIFRkUXVlcnlQYXJhbXMsIFRkUmVzcG9uc2UsIFRkR0VULCBUZFBPU1QsIFRkREVMRVRFLCBUZFBBVENIIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBTUUwgPSAnc3FsJyxcbiAgQlRFUSA9ICdidGVxJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcCB7XG4gIGFwcF9pZD86IHN0cmluZztcbiAgYXBwX3R5cGU/OiBBcHBUeXBlO1xuICBhcHBfY29kZT86IHN0cmluZztcbiAgY29sbGFib3JhdG9ycz86IElBcHBQZXJtaXNzaW9ucztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGNvbmZpZz86IGFueTtcbiAgY3B1cz86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRvY2tlckltYWdlTmFtZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaW5zdGFsbF90aW1lPzogc3RyaW5nO1xuICBpbnN0YWxsZWRfYnk/OiBzdHJpbmc7XG4gIGxhc3RfdXBkYXRlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX3RpbWU/OiBzdHJpbmc7XG4gIG1lbW9yeT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgb3duZXJzPzogSUFwcFBlcm1pc3Npb25zO1xuICBwdWJsaWM/OiBib29sZWFuO1xuICByZXN1bHRzX2NvbmZpZz86IGFueTtcbiAgdmVyc2lvbnM/OiBhbnk7XG4gIGxhc3RfdmVyc2lvbl9zdGF0dXM/OiBzdHJpbmc7XG4gIGRhdGFiYXNlPzogc3RyaW5nO1xuICBzeXN0ZW1fbmFtZT86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBwYXJhbV9uYW1lPzogc3RyaW5nO1xuICBlcGhlbWVyYWw/OiBib29sZWFuO1xuICBjYW5fZXhlY3V0ZT86IGJvb2xlYW47XG4gIHdlYl9yb290Pzogc3RyaW5nO1xuICBhY2Nlc3NfdXJsPzogc3RyaW5nO1xuICB0YWdfbmFtZXM/OiBhbnlbXTtcbiAgZXhwb3NlZFBvcnRzPzogYW55W107XG4gIHN5c3RlbV9pZD86IHN0cmluZztcbiAgY29udGFpbmVyUG9ydD86IG51bWJlcjtcbiAgZmF2b3JpdGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBDb25maWd1cmF0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgdHlwZT86ICd0ZXh0JyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nIHwgJ2RhdGUnO1xuICBtaW4/OiBudW1iZXIgfCBEYXRlO1xuICBtYXg/OiBudW1iZXIgfCBEYXRlO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGRlZmF1bHQ/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFBlcm1pc3Npb25zIHtcbiAgdXNlcnM/OiBzdHJpbmdbXTtcbiAgZ3JvdXBzPzogc3RyaW5nW107XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9hcHAnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBcHBbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXBwW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQvY29udGFpbmVyJyxcbiAgfSlcbiAgcHVibGljIHVwbG9hZEZpbGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FQUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUFwcFNlcnZpY2UpOiBWYW50YWdlQXBwU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBcHBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FQUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VBcHBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFwcFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BUFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=