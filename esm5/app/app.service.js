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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hcHAvIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR25DLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQXFDQzs7O0lBcENDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLHlCQUFtQjs7SUFDbkIsNkJBQWdDOztJQUNoQyxxQkFBZTs7SUFDZixzQkFBYTs7SUFDYixvQkFBYzs7SUFDZCwyQkFBcUI7O0lBQ3JCLCtCQUF5Qjs7SUFDekIsb0JBQWM7O0lBQ2QsNEJBQXNCOztJQUN0Qiw0QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixzQkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLHNCQUF5Qjs7SUFDekIsc0JBQWlCOztJQUNqQiw4QkFBcUI7O0lBQ3JCLHdCQUFlOztJQUNmLG1DQUE2Qjs7SUFDN0Isd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFrQjs7SUFDbEIsd0JBQWtCOztJQUNsQiwwQkFBb0I7O0lB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RSxDQUFBOztpREFBWSxVQUFVO3dDQUFTLFVBQVU7bURBRXZGO0lBS0Q7UUFIQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUscUJBQXFCO1NBQzVCLENBQUM7UUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7UUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFETyxRQUFRO1lBQ0gsVUFBVTt3Q0FDbEMsVUFBVTt1REFNWjtJQTlEVSxpQkFBaUI7UUFMN0IsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLFVBQVU7WUFDbkIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDN0QsQ0FBQztPQUVXLGlCQUFpQixDQStEN0I7SUFBRCx3QkFBQztDQUFBLElBQUE7U0EvRFksaUJBQWlCOzs7OztBQWlFOUIsTUFBTSxVQUFVLDRCQUE0QixDQUFDLE1BQXlCO0lBQ3BFLE9BQU8sTUFBTSxJQUFJLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUMzQyxDQUFDOztBQUVELE1BQU0sS0FBTyxvQkFBb0IsR0FBYTs7SUFFNUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNELFVBQVUsRUFBRSw0QkFBNEI7Q0FDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkUGFyYW0sIFRkQm9keSwgVGRRdWVyeVBhcmFtcywgVGRSZXNwb25zZSwgVGRHRVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUEFUQ0ggfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGVudW0gQXBwVHlwZSB7XG4gIFNRTCA9ICdzcWwnLFxuICBCVEVRID0gJ2J0ZXEnLFxuICBDVVNUT00gPSAnY3VzdG9tJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwIHtcbiAgYXBwX2lkPzogc3RyaW5nO1xuICBhcHBfdHlwZT86IEFwcFR5cGU7XG4gIGFwcF9jb2RlPzogc3RyaW5nO1xuICBhcHBfc3RhdGU/OiBzdHJpbmc7XG4gIGNvbGxhYm9yYXRvcnM/OiBJQXBwUGVybWlzc2lvbnM7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjb25maWc/OiBhbnk7XG4gIGNwdXM/OiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkb2NrZXJJbWFnZU5hbWU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGluc3RhbGxfdGltZT86IHN0cmluZztcbiAgaW5zdGFsbGVkX2J5Pzogc3RyaW5nO1xuICBsYXN0X3VwZGF0ZWRfYnk/OiBzdHJpbmc7XG4gIGxhc3RfdXBkYXRlZF90aW1lPzogc3RyaW5nO1xuICBtZW1vcnk/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG93bmVycz86IElBcHBQZXJtaXNzaW9ucztcbiAgcHVibGljPzogYm9vbGVhbjtcbiAgcmVzdWx0c19jb25maWc/OiBhbnk7XG4gIHZlcnNpb25zPzogYW55O1xuICBsYXN0X3ZlcnNpb25fc3RhdHVzPzogc3RyaW5nO1xuICBkYXRhYmFzZT86IHN0cmluZztcbiAgc3lzdGVtX25hbWU/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgcGFyYW1fbmFtZT86IHN0cmluZztcbiAgZXBoZW1lcmFsPzogYm9vbGVhbjtcbiAgY2FuX2V4ZWN1dGU/OiBib29sZWFuO1xuICB3ZWJfcm9vdD86IHN0cmluZztcbiAgYWNjZXNzX3VybD86IHN0cmluZztcbiAgdGFnX25hbWVzPzogYW55W107XG4gIGV4cG9zZWRQb3J0cz86IGFueVtdO1xuICBzeXN0ZW1faWQ/OiBzdHJpbmc7XG4gIGNvbnRhaW5lclBvcnQ/OiBudW1iZXI7XG4gIGZhdm9yaXRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQ29uZmlndXJhdGlvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHR5cGU/OiAndGV4dCcgfCAnbnVtYmVyJyB8ICdib29sZWFuJyB8ICdkYXRlJztcbiAgbWluPzogbnVtYmVyIHwgRGF0ZTtcbiAgbWF4PzogbnVtYmVyIHwgRGF0ZTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBkZWZhdWx0PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBQZXJtaXNzaW9ucyB7XG4gIHVzZXJzPzogc3RyaW5nW107XG4gIGdyb3Vwcz86IHN0cmluZ1tdO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvYXBwJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlQXBwU2VydmljZSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJQXBwW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SUFwcFtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgYm9keTogSUFwcCwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQQVRDSCh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRCb2R5KCkgYm9keTogSUFwcCwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQnLFxuICB9KVxuICBkZWxldGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUFwcD4pOiBPYnNlcnZhYmxlPElBcHA+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkL2NvbnRhaW5lcicsXG4gIH0pXG4gIHB1YmxpYyB1cGxvYWRGaWxlKFxuICAgIEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsXG4gICAgQFRkQm9keSgpIGZvcm1EYXRhOiBGb3JtRGF0YSxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9BUFBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VBcHBTZXJ2aWNlKTogVmFudGFnZUFwcFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlQXBwU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9BUFBfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlQXBwU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VBcHBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfQVBQX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19