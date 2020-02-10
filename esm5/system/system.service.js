/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPUT, TdPOST, TdDELETE, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
/** @enum {string} */
var SystemType = {
    Teradata: 'TERADATA',
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
export { SystemType };
/** @type {?} */
export var VANTAGE_SYSTEMS_TYPES = [SystemType.Teradata, SystemType.Aster, SystemType.Presto];
/**
 * @record
 */
export function ISystemAttributes() { }
if (false) {
    /** @type {?|undefined} */
    ISystemAttributes.prototype.attributes;
}
/**
 * @record
 */
export function IAbstractSystem() { }
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
export function ISystem() { }
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
export function ITestSystem() { }
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
export { VantageSystemService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent) {
    return parent || new VantageSystemService();
}
/** @type {?} */
export var VANTAGE_SYSTEM_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSystemService,
    deps: [[new Optional(), new SkipSelf(), VantageSystemService]],
    useFactory: VANTAGE_SYSTEM_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFTckgsVUFBVyxVQUFVO0lBQ3JCLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7OztBQUduQixNQUFNLEtBQU8scUJBQXFCLEdBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUM7Ozs7QUFFN0csdUNBRUM7OztJQURDLHVDQUFpQjs7Ozs7QUFHbkIscUNBTUM7OztJQUxDLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLHNDQUF5Qjs7SUFDekIsa0NBQWlCOztJQUNqQixpQ0FBZ0I7Ozs7O0FBR2xCLDZCQVNDOzs7SUFSQyw2QkFBb0I7O0lBQ3BCLDhCQUFxQjs7SUFDckIsOEJBQXFCOztJQUNyQixxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsb0NBQXNDOztJQUN0QywwQkFBaUI7Ozs7O0FBR25CLGlDQU9DOzs7SUFOQyw4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QUNSLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lEQUFZLFVBQVU7d0NBQ2xDLFVBQVU7c0RBRVo7SUFLRDtRQUhDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7UUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFjLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQVMsVUFBVTtzREFFdkY7SUFLRDtRQUhDLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUM7UUFDSSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXVCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQXNCLFVBQVU7b0RBTXRHO0lBQ0gsMkJBQUM7Q0FBQSxBQWpGRCxDQUMwQyxTQUFTO0lBQUM7SUFBTyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFBUixLQUFVO0lBQzVELE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUMsR0E2RUQ7U0FoRlksb0JBQW9COzs7OztBQWtGakMsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sS0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRQVVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuLypcbiAqIFRoZXNlIGludGVyZmFjZXMgYXJlIGR1cGxpY2F0ZWQgaW4gdGhlIHN5c3RlbSBhbmQgdGhlIHF1ZXJ5IHNlcnZpY2UuXG4gKiBIb3dldmVyLCB3aXRoaW4gdGhlIHN5c3RlbSBzZXJ2aWNlLCBTeXN0ZW1UeXBlIGluY2x1ZGVzIEFzdGVyICYgUHJlc3RvLlxuICogV2hlcmVhcyBpbiB0aGUgcXVlcnkgc2VydmljZSwgdGhleSBhcmUgZXhjbHVkZWQuXG4gKiBUT0RPOiBEUlkgdGhpcyB1cFxuICovXG5leHBvcnQgZW51bSBTeXN0ZW1UeXBlIHtcbiAgVGVyYWRhdGEgPSAnVEVSQURBVEEnLFxuICBBc3RlciA9ICdBU1RFUicsXG4gIFByZXN0byA9ICdQUkVTVE8nLFxufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1TX1RZUEVTOiBTeXN0ZW1UeXBlW10gPSBbU3lzdGVtVHlwZS5UZXJhZGF0YSwgU3lzdGVtVHlwZS5Bc3RlciwgU3lzdGVtVHlwZS5QcmVzdG9dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0U3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYWNjb3VudD86IHN0cmluZztcbiAgZGVmYXVsdF9jaGFyX3NldD86IHN0cmluZztcbiAgZGVmYXVsdF9kYXRhYmFzZT86IHN0cmluZztcbiAgbG9nX21lY2g/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3N5c3RlbScsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJU3lzdGVtW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVN5c3RlbVtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvc3lzdGVtcycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgc3lzdGVtOiBJU3lzdGVtLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBVVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLFxuICAgIEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4sXG4gICk6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdGVzdHN5c3RlbScsXG4gIH0pXG4gIHRlc3QoQFRkQm9keSgpIHN5c3RlbTogSVRlc3RTeXN0ZW0sIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKTogVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3lzdGVtU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU3lzdGVtU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19