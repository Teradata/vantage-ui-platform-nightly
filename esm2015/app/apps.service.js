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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsiYXBwcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0lBR3BILEtBQU0sS0FBSztJQUNYLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTs7Ozs7O0FBR25CLDBCQW9DQzs7O0lBbkNDLHNCQUFnQjs7SUFDaEIsd0JBQW1COztJQUNuQix3QkFBa0I7O0lBQ2xCLDZCQUFnQzs7SUFDaEMscUJBQWU7O0lBQ2Ysc0JBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QsMkJBQXFCOztJQUNyQiwrQkFBeUI7O0lBQ3pCLG9CQUFjOztJQUNkLDRCQUFzQjs7SUFDdEIsNEJBQXNCOztJQUN0QiwrQkFBeUI7O0lBQ3pCLGlDQUEyQjs7SUFDM0Isc0JBQWdCOztJQUNoQixvQkFBYzs7SUFDZCxzQkFBeUI7O0lBQ3pCLHNCQUFpQjs7SUFDakIsOEJBQXFCOztJQUNyQix3QkFBZTs7SUFDZixtQ0FBNkI7O0lBQzdCLHdCQUFrQjs7SUFDbEIsMkJBQXFCOztJQUNyQix3QkFBa0I7O0lBQ2xCLHdCQUFrQjs7SUFDbEIsMEJB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REFBWSxVQUFVOzRDQUFTLFVBQVU7Z0RBRXZGO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUscUJBQXFCO0tBQzVCLENBQUM7SUFFQyxtQkFBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDYixtQkFBQSxNQUFNLEVBQUUsQ0FBQTtJQUNSLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztxREFETyxRQUFRO1FBQ0gsVUFBVTs0Q0FDbEMsVUFBVTtvREFNWjtBQTlEVSxrQkFBa0I7SUFMOUIsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLFVBQVU7UUFDbkIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7S0FDN0QsQ0FBQztHQUVXLGtCQUFrQixDQStEOUI7U0EvRFksa0JBQWtCOzs7OztBQWlFL0IsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE1BQTBCO0lBQ3RFLE9BQU8sTUFBTSxJQUFJLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUM1QyxDQUFDOztBQUVELE1BQU0sT0FBTyxxQkFBcUIsR0FBYTs7SUFFN0MsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELFVBQVUsRUFBRSw2QkFBNkI7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChDKSAyMDE2LTIwMTcgYnkgVGVyYWRhdGEgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBURVJBREFUQSBDT1JQT1JBVElPTiBDT05GSURFTlRJQUwgQU5EIFRSQURFIFNFQ1JFVFxuICovXG5pbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFBhcmFtcywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUEFUQ0gsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGVudW0gQXBwVHlwZSB7XG4gIFNRTCA9ICdzcWwnLFxuICBCVEVRID0gJ2J0ZXEnLFxuICBKQVZBID0gJ2phdmEnLFxuICBDVVNUT00gPSAnY3VzdG9tJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwIHtcbiAgYXBwX2lkPzogc3RyaW5nO1xuICBhcHBfdHlwZT86IEFwcFR5cGU7XG4gIGFwcF9jb2RlPzogc3RyaW5nO1xuICBjb2xsYWJvcmF0b3JzPzogSUFwcFBlcm1pc3Npb25zO1xuICBjb2xvcj86IHN0cmluZztcbiAgY29uZmlnPzogYW55O1xuICBjcHVzPzogbnVtYmVyO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZG9ja2VySW1hZ2VOYW1lPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpbnN0YWxsX3RpbWU/OiBzdHJpbmc7XG4gIGluc3RhbGxlZF9ieT86IHN0cmluZztcbiAgbGFzdF91cGRhdGVkX2J5Pzogc3RyaW5nO1xuICBsYXN0X3VwZGF0ZWRfdGltZT86IHN0cmluZztcbiAgbWVtb3J5PzogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBvd25lcnM/OiBJQXBwUGVybWlzc2lvbnM7XG4gIHB1YmxpYz86IGJvb2xlYW47XG4gIHJlc3VsdHNfY29uZmlnPzogYW55O1xuICB2ZXJzaW9ucz86IGFueTtcbiAgbGFzdF92ZXJzaW9uX3N0YXR1cz86IHN0cmluZztcbiAgZGF0YWJhc2U/OiBzdHJpbmc7XG4gIHN5c3RlbV9uYW1lPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHBhcmFtX25hbWU/OiBzdHJpbmc7XG4gIGVwaGVtZXJhbD86IGJvb2xlYW47XG4gIGNhbl9leGVjdXRlPzogYm9vbGVhbjtcbiAgd2ViX3Jvb3Q/OiBzdHJpbmc7XG4gIGFjY2Vzc191cmw/OiBzdHJpbmc7XG4gIHRhZ19uYW1lcz86IGFueVtdO1xuICBleHBvc2VkUG9ydHM/OiBhbnlbXTtcbiAgc3lzdGVtX2lkPzogc3RyaW5nO1xuICBjb250YWluZXJQb3J0PzogbnVtYmVyO1xuICBmYXZvcml0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcENvbmZpZ3VyYXRpb24ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB0eXBlPzogJ3RleHQnIHwgJ251bWJlcicgfCAnYm9vbGVhbicgfCAnZGF0ZSc7XG4gIG1pbj86IG51bWJlciB8IERhdGU7XG4gIG1heD86IG51bWJlciB8IERhdGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgZGVmYXVsdD86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwUGVybWlzc2lvbnMge1xuICB1c2Vycz86IHN0cmluZ1tdO1xuICBncm91cHM/OiBzdHJpbmdbXTtcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL2FwcCcsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUFwcHNTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElBcHBbXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJQXBwW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElBcHA+KTogT2JzZXJ2YWJsZTxJQXBwPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9hcHBzJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnL2FwcHMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZEJvZHkoKSBib2R5OiBJQXBwLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9hcHBzLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJQXBwPik6IE9ic2VydmFibGU8SUFwcD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvYXBwcy86aWQvY29udGFpbmVyJyxcbiAgfSlcbiAgcHVibGljIHVwbG9hZEZpbGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgZm9ybURhdGE6IEZvcm1EYXRhLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0FQUFNfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VBcHBzU2VydmljZSk6IFZhbnRhZ2VBcHBzU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VBcHBzU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9BUFBTX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUFwcHNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUFwcHNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfQVBQU19QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==