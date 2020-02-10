/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { mixinHttp, TdParam, TdBody, TdQueryParams, TdResponse, TdGET, TdPOST, TdDELETE, TdPATCH, } from '@covalent/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/** @enum {string} */
const AppType = {
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
export class VantageAppService extends mixinHttp(class {
}, {
    baseUrl: '/api/app',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
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
}
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
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_APP_PROVIDER_FACTORY(parent) {
    return parent || new VantageAppService();
}
/** @type {?} */
export const VANTAGE_APP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAppService,
    deps: [[new Optional(), new SkipSelf(), VantageAppService]],
    useFactory: VANTAGE_APP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9hcHAvIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQ0wsU0FBUyxFQUNULE9BQU8sRUFDUCxNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixPQUFPLEdBQ1IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR25DLEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQXFDQzs7O0lBcENDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLHlCQUFtQjs7SUFDbkIsNkJBQWdDOztJQUNoQyxxQkFBZTs7SUFDZixzQkFBYTs7SUFDYixvQkFBYzs7SUFDZCwyQkFBcUI7O0lBQ3JCLCtCQUF5Qjs7SUFDekIsb0JBQWM7O0lBQ2QsNEJBQXNCOztJQUN0Qiw0QkFBc0I7O0lBQ3RCLCtCQUF5Qjs7SUFDekIsaUNBQTJCOztJQUMzQixzQkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLHNCQUF5Qjs7SUFDekIsc0JBQWlCOztJQUNqQiw4QkFBcUI7O0lBQ3JCLHdCQUFlOztJQUNmLG1DQUE2Qjs7SUFDN0Isd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFrQjs7SUFDbEIsd0JBQWtCOztJQUNsQiwwQkFBb0I7O0lBQ3BCLHlCQUFvQjs7SUFDcEIsMkJBQXNCOztJQUN0Qix3QkFBa0I7O0lBQ2xCLDBCQUFvQjs7SUFDcEIseUJBQWtCOztJQUNsQiw0QkFBcUI7O0lBQ3JCLHlCQUFtQjs7SUFDbkIsNkJBQXVCOztJQUN2Qix3QkFBbUI7Ozs7O0FBR3JCLHVDQVFDOzs7SUFQQywrQkFBVzs7SUFDWCxpQ0FBYzs7SUFDZCxpQ0FBOEM7O0lBQzlDLGdDQUFvQjs7SUFDcEIsZ0NBQW9COztJQUNwQixxQ0FBbUI7O0lBQ25CLG9DQUFjOzs7OztBQUdoQixxQ0FHQzs7O0lBRkMsZ0NBQWlCOztJQUNqQixpQ0FBa0I7O0FBSXBCLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTLENBQUM7Q0FBUSxFQUFFO0lBQ3pELE9BQU8sRUFBRSxVQUFVO0lBQ25CLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUM7Ozs7OztJQU9BLEtBQUssQ0FDYyxNQUFtQixFQUN0QixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDdkIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxHQUFHLENBQWdCLEVBQVUsRUFBZ0IsUUFBMkI7UUFDdEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFXLElBQVUsRUFBZ0IsUUFBMkI7UUFDcEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUtELE1BQU0sQ0FBZ0IsRUFBVSxFQUFZLElBQVUsRUFBZ0IsUUFBMkI7UUFDL0YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFnQixFQUFVLEVBQWdCLFFBQTJCO1FBQ3pFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFLTSxVQUFVLENBQ0EsRUFBVSxFQUNmLFFBQWtCLEVBQ2QsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBbEVGLFVBQVU7O0FBV1Q7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FEYSxVQUFVO1FBQ1gsVUFBVTtvQ0FDbEMsVUFBVTs4Q0FTWjtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FBQztJQUNHLFdBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBUyxVQUFVOzRDQUVwRjtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE9BQU87S0FDZCxDQUFDO0lBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFjLFdBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7b0NBQVMsVUFBVTsrQ0FFbEY7QUFLRDtJQUhDLE9BQU8sQ0FBQztRQUNQLElBQUksRUFBRSxXQUFXO0tBQ2xCLENBQUM7SUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFjLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBYyxXQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVO29DQUFTLFVBQVU7K0NBRTdHO0FBS0Q7SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsV0FBVztLQUNsQixDQUFDO0lBQ00sV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBYyxXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFTLFVBQVU7K0NBRXZGO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUscUJBQXFCO0tBQzVCLENBQUM7SUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FETyxRQUFRO1FBQ0gsVUFBVTtvQ0FDbEMsVUFBVTttREFNWjs7Ozs7QUFHSCxNQUFNLFVBQVUsNEJBQTRCLENBQUMsTUFBeUI7SUFDcEUsT0FBTyxNQUFNLElBQUksSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQzNDLENBQUM7O0FBRUQsTUFBTSxPQUFPLG9CQUFvQixHQUFhOztJQUU1QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsVUFBVSxFQUFFLDRCQUE0QjtDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7XG4gIG1peGluSHR0cCxcbiAgVGRQYXJhbSxcbiAgVGRCb2R5LFxuICBUZFF1ZXJ5UGFyYW1zLFxuICBUZFJlc3BvbnNlLFxuICBUZEdFVCxcbiAgVGRQT1NULFxuICBUZERFTEVURSxcbiAgVGRQQVRDSCxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBTUUwgPSAnc3FsJyxcbiAgQlRFUSA9ICdidGVxJyxcbiAgQ1VTVE9NID0gJ2N1c3RvbScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcCB7XG4gIGFwcF9pZD86IHN0cmluZztcbiAgYXBwX3R5cGU/OiBBcHBUeXBlO1xuICBhcHBfY29kZT86IHN0cmluZztcbiAgYXBwX3N0YXRlPzogc3RyaW5nO1xuICBjb2xsYWJvcmF0b3JzPzogSUFwcFBlcm1pc3Npb25zO1xuICBjb2xvcj86IHN0cmluZztcbiAgY29uZmlnPzogYW55O1xuICBjcHVzPzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZG9ja2VySW1hZ2VOYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnN0YWxsX3RpbWU/OiBzdHJpbmc7XG4gIGluc3RhbGxlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX2J5Pzogc3RyaW5nO1xuICBsYXN0X3VwZGF0ZWRfdGltZT86IHN0cmluZztcbiAgbWVtb3J5PzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBvd25lcnM/OiBJQXBwUGVybWlzc2lvbnM7XG4gIHB1YmxpYz86IGJvb2xlYW47XG4gIHJlc3VsdHNfY29uZmlnPzogYW55O1xuICB2ZXJzaW9ucz86IGFueTtcbiAgbGFzdF92ZXJzaW9uX3N0YXR1cz86IHN0cmluZztcbiAgZGF0YWJhc2U/OiBzdHJpbmc7XG4gIHN5c3RlbV9uYW1lPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBhcmFtX25hbWU/OiBzdHJpbmc7XG4gIGVwaGVtZXJhbD86IGJvb2xlYW47XG4gIGNhbl9leGVjdXRlPzogYm9vbGVhbjtcbiAgd2ViX3Jvb3Q/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmw/OiBzdHJpbmc7XG4gIHRhZ19uYW1lcz86IGFueVtdO1xuICBleHBvc2VkUG9ydHM/OiBhbnlbXTtcbiAgc3lzdGVtX2lkPzogc3RyaW5nO1xuICBjb250YWluZXJQb3J0PzogbnVtYmVyO1xuICBmYXZvcml0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZ3VyYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogJ3RleHQnIHwgJ251bWJlcicgfCAnYm9vbGVhbicgfCAnZGF0ZSc7XG4gIG1pbj86IG51bWJlciB8IERhdGU7XG4gIG1heD86IG51bWJlciB8IERhdGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgZGVmYXVsdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwUGVybWlzc2lvbnMge1xuICB1c2Vycz86IHN0cmluZ1tdO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VBcHBTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL2FwcCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBcHBbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXBwW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQvY29udGFpbmVyJyxcbiAgfSlcbiAgcHVibGljIHVwbG9hZEZpbGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FQUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUFwcFNlcnZpY2UpOiBWYW50YWdlQXBwU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBcHBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0FQUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VBcHBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFwcFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9BUFBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=