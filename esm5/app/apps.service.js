/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsiYXBwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBRTdFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFHcEgsS0FBTSxLQUFLO0lBQ1gsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNO0lBQ2IsUUFBUyxRQUFROzs7Ozs7QUFHbkIsMEJBb0NDOzs7SUFuQ0Msc0JBQWdCOztJQUNoQix3QkFBbUI7O0lBQ25CLHdCQUFrQjs7SUFDbEIsNkJBQWdDOztJQUNoQyxxQkFBZTs7SUFDZixzQkFBYTs7SUFDYixvQkFBYzs7SUFDZCwyQkFBcUI7O0lBQ3JCLCtCQUF5Qjs7SUFDekIsb0JBQWM7O0lBQ2QsNEJBQXNCOztJQUN0Qiw0QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixzQkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLHNCQUF5Qjs7SUFDekIsc0JBQWlCOztJQUNqQiw4QkFBcUI7O0lBQ3JCLHdCQUFlOztJQUNmLG1DQUE2Qjs7SUFDN0Isd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFrQjs7SUFDbEIsd0JBQWtCOztJQUNsQiwwQkFBb0I7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RUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUFTLFVBQVU7b0RBRXZGO0lBS0Q7UUFIQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUscUJBQXFCO1NBQzVCLENBQUM7UUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7UUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFETyxRQUFRO1lBQ0gsVUFBVTt3Q0FDbEMsVUFBVTt3REFNWjtJQTlEVSxrQkFBa0I7UUFMOUIsTUFBTSxDQUFDO1lBQ04sT0FBTyxFQUFFLFVBQVU7WUFDbkIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDN0QsQ0FBQztPQUVXLGtCQUFrQixDQStEOUI7SUFBRCx5QkFBQztDQUFBLElBQUE7U0EvRFksa0JBQWtCOzs7OztBQWlFL0IsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE1BQTBCO0lBQ3RFLE9BQU8sTUFBTSxJQUFJLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUM1QyxDQUFDOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FBYTs7SUFFN0MsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELFVBQVUsRUFBRSw2QkFBNkI7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUEFUQ0gsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGVudW0gQXBwVHlwZSB7XG4gIFNRTCA9ICdzcWwnLFxuICBCVEVRID0gJ2J0ZXEnLFxuICBKQVZBID0gJ2phdmEnLFxuICBDVVNUT00gPSAnY3VzdG9tJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwIHtcbiAgYXBwX2lkPzogc3RyaW5nO1xuICBhcHBfdHlwZT86IEFwcFR5cGU7XG4gIGFwcF9jb2RlPzogc3RyaW5nO1xuICBjb2xsYWJvcmF0b3JzPzogSUFwcFBlcm1pc3Npb25zO1xuICBjb2xvcj86IHN0cmluZztcbiAgY29uZmlnPzogYW55O1xuICBjcHVzPzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZG9ja2VySW1hZ2VOYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnN0YWxsX3RpbWU/OiBzdHJpbmc7XG4gIGluc3RhbGxlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX2J5Pzogc3RyaW5nO1xuICBsYXN0X3VwZGF0ZWRfdGltZT86IHN0cmluZztcbiAgbWVtb3J5PzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBvd25lcnM/OiBJQXBwUGVybWlzc2lvbnM7XG4gIHB1YmxpYz86IGJvb2xlYW47XG4gIHJlc3VsdHNfY29uZmlnPzogYW55O1xuICB2ZXJzaW9ucz86IGFueTtcbiAgbGFzdF92ZXJzaW9uX3N0YXR1cz86IHN0cmluZztcbiAgZGF0YWJhc2U/OiBzdHJpbmc7XG4gIHN5c3RlbV9uYW1lPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBhcmFtX25hbWU/OiBzdHJpbmc7XG4gIGVwaGVtZXJhbD86IGJvb2xlYW47XG4gIGNhbl9leGVjdXRlPzogYm9vbGVhbjtcbiAgd2ViX3Jvb3Q/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmw/OiBzdHJpbmc7XG4gIHRhZ19uYW1lcz86IGFueVtdO1xuICBleHBvc2VkUG9ydHM/OiBhbnlbXTtcbiAgc3lzdGVtX2lkPzogc3RyaW5nO1xuICBjb250YWluZXJQb3J0PzogbnVtYmVyO1xuICBmYXZvcml0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZ3VyYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogJ3RleHQnIHwgJ251bWJlcicgfCAnYm9vbGVhbicgfCAnZGF0ZSc7XG4gIG1pbj86IG51bWJlciB8IERhdGU7XG4gIG1heD86IG51bWJlciB8IERhdGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgZGVmYXVsdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwUGVybWlzc2lvbnMge1xuICB1c2Vycz86IHN0cmluZ1tdO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL2FwcCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcHNTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBcHBbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXBwW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQvY29udGFpbmVyJyxcbiAgfSlcbiAgcHVibGljIHVwbG9hZEZpbGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FQUFNfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VBcHBzU2VydmljZSk6IFZhbnRhZ2VBcHBzU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBcHBzU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9BUFBTX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUFwcHNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFwcHNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfQVBQU19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==