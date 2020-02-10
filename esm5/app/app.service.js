/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { mixinHttp, TdParam, TdBody, TdQueryParams, TdResponse, TdGET, TdPOST, TdDELETE, TdPATCH, } from '@covalent/http';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hcHAvIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQ0wsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixPQUFPLEdBQ1IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR25DLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQXFDQzs7O0lBcENDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLHlCQUFtQjs7SUFDbkIsNkJBQWdDOztJQUNoQyxxQkFBZTs7SUFDZixzQkFBYTs7SUFDYixvQkFBYzs7SUFDZCwyQkFBcUI7O0lBQ3JCLCtCQUF5Qjs7SUFDekIsb0JBQWM7O0lBQ2QsNEJBQXNCOztJQUN0Qiw0QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixzQkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLHNCQUF5Qjs7SUFDekIsc0JBQWlCOztJQUNqQiw4QkFBcUI7O0lBQ3JCLHdCQUFlOztJQUNmLG1DQUE2Qjs7SUFDN0Isd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFrQjs7SUFDbEIsd0JBQWtCOztJQUNsQiwwQkFBb0I7O0lB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QUFBLEVBQWMsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBQVksVUFBVTt3Q0FBUyxVQUFVO21EQUV2RjtJQUtEO1FBSEMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLHFCQUFxQjtTQUM1QixDQUFDO1FBRUMsV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDYixXQUFBLE1BQU0sRUFBRSxDQUFBO1FBQ1IsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7aURBRE8sUUFBUTtZQUNILFVBQVU7d0NBQ2xDLFVBQVU7dURBTVo7SUFDSCx3QkFBQztDQUFBLEFBbkVELENBQ3VDLFNBQVM7SUFBQztJQUFPLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUFSLEtBQVU7SUFDekQsT0FBTyxFQUFFLFVBQVU7SUFDbkIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7Q0FDN0QsQ0FBQyxHQStERDtTQWxFWSxpQkFBaUI7Ozs7O0FBb0U5QixNQUFNLFVBQVUsNEJBQTRCLENBQUMsTUFBeUI7SUFDcEUsT0FBTyxNQUFNLElBQUksSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQzNDLENBQUM7O0FBRUQsTUFBTSxLQUFPLG9CQUFvQixHQUFhOztJQUU1QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsVUFBVSxFQUFFLDRCQUE0QjtDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7XG4gIG1peGluSHR0cCxcbiAgVGRQYXJhbSxcbiAgVGRCb2R5LFxuICBUZFF1ZXJ5UGFyYW1zLFxuICBUZFJlc3BvbnNlLFxuICBUZEdFVCxcbiAgVGRQT1NULFxuICBUZERFTEVURSxcbiAgVGRQQVRDSCxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBTUUwgPSAnc3FsJyxcbiAgQlRFUSA9ICdidGVxJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcCB7XG4gIGFwcF9pZD86IHN0cmluZztcbiAgYXBwX3R5cGU/OiBBcHBUeXBlO1xuICBhcHBfY29kZT86IHN0cmluZztcbiAgYXBwX3N0YXRlPzogc3RyaW5nO1xuICBjb2xsYWJvcmF0b3JzPzogSUFwcFBlcm1pc3Npb25zO1xuICBjb2xvcj86IHN0cmluZztcbiAgY29uZmlnPzogYW55O1xuICBjcHVzPzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZG9ja2VySW1hZ2VOYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnN0YWxsX3RpbWU/OiBzdHJpbmc7XG4gIGluc3RhbGxlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX2J5Pzogc3RyaW5nO1xuICBsYXN0X3VwZGF0ZWRfdGltZT86IHN0cmluZztcbiAgbWVtb3J5PzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBvd25lcnM/OiBJQXBwUGVybWlzc2lvbnM7XG4gIHB1YmxpYz86IGJvb2xlYW47XG4gIHJlc3VsdHNfY29uZmlnPzogYW55O1xuICB2ZXJzaW9ucz86IGFueTtcbiAgbGFzdF92ZXJzaW9uX3N0YXR1cz86IHN0cmluZztcbiAgZGF0YWJhc2U/OiBzdHJpbmc7XG4gIHN5c3RlbV9uYW1lPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBhcmFtX25hbWU/OiBzdHJpbmc7XG4gIGVwaGVtZXJhbD86IGJvb2xlYW47XG4gIGNhbl9leGVjdXRlPzogYm9vbGVhbjtcbiAgd2ViX3Jvb3Q/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmw/OiBzdHJpbmc7XG4gIHRhZ19uYW1lcz86IGFueVtdO1xuICBleHBvc2VkUG9ydHM/OiBhbnlbXTtcbiAgc3lzdGVtX2lkPzogc3RyaW5nO1xuICBjb250YWluZXJQb3J0PzogbnVtYmVyO1xuICBmYXZvcml0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZ3VyYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogJ3RleHQnIHwgJ251bWJlcicgfCAnYm9vbGVhbicgfCAnZGF0ZSc7XG4gIG1pbj86IG51bWJlciB8IERhdGU7XG4gIG1heD86IG51bWJlciB8IERhdGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgZGVmYXVsdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwUGVybWlzc2lvbnMge1xuICB1c2Vycz86IHN0cmluZ1tdO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL2FwcCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBcHBbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXBwW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQvY29udGFpbmVyJyxcbiAgfSlcbiAgcHVibGljIHVwbG9hZEZpbGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FQUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUFwcFNlcnZpY2UpOiBWYW50YWdlQXBwU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBcHBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FQUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VBcHBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFwcFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BUFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=