/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPUT, TdPOST, TdDELETE, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
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
var VantageSystemService = /** @class */ (function () {
    function VantageSystemService() {
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
    tslib_1.__decorate([
        TdGET({
            path: '/health',
        }),
        tslib_1.__param(0, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "health", null);
    tslib_1.__decorate([
        TdGET({
            path: '/systems',
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
    ], VantageSystemService.prototype, "query", null);
    tslib_1.__decorate([
        TdGET({
            path: '/systems/:id',
        }),
        tslib_1.__param(0, TdParam('id')), tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "get", null);
    tslib_1.__decorate([
        TdPOST({
            path: '/systems',
        }),
        tslib_1.__param(0, TdBody()), tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "create", null);
    tslib_1.__decorate([
        TdPUT({
            path: '/systems/:id',
        }),
        tslib_1.__param(0, TdParam('id')),
        tslib_1.__param(1, TdBody()),
        tslib_1.__param(2, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "update", null);
    tslib_1.__decorate([
        TdDELETE({
            path: '/systems/:id',
        }),
        tslib_1.__param(0, TdParam('id')), tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "delete", null);
    tslib_1.__decorate([
        TdPOST({
            path: '/testsystem',
        }),
        tslib_1.__param(0, TdBody()), tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "test", null);
    VantageSystemService = tslib_1.__decorate([
        TdHttp({
            baseUrl: '/api/system',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
        })
    ], VantageSystemService);
    return VantageSystemService;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUdsSCxVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sS0FBTyxxQkFBcUIsR0FBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7OztBQUU3Ryx1Q0FFQzs7O0lBREMsdUNBQWlCOzs7OztBQUduQixxQ0FNQzs7O0lBTEMsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsc0NBQXlCOztJQUN6QixrQ0FBaUI7O0lBQ2pCLGlDQUFnQjs7Ozs7QUFHbEIsNkJBU0M7OztJQVJDLDZCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7O0lBQ3JCLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQixvQ0FBc0M7O0lBQ3RDLDBCQUFpQjs7Ozs7QUFHbkIsaUNBT0M7OztJQU5DLDhCQUFpQjs7SUFD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O2dEQUNsQyxVQUFVO3NEQUVaO0lBS0Q7UUFIQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsY0FBYztTQUNyQixDQUFDO1FBQ00sbUJBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsbUJBQUEsVUFBVSxFQUFFLENBQUE7O3lEQUFZLFVBQVU7Z0RBQVMsVUFBVTtzREFFdkY7SUFLRDtRQUhDLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUM7UUFDSSxtQkFBQSxNQUFNLEVBQUUsQ0FBQSxFQUF1QixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7eURBQVksVUFBVTtnREFBc0IsVUFBVTtvREFNdEc7SUE1RVUsb0JBQW9CO1FBSmhDLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1NBQzdELENBQUM7T0FDVyxvQkFBb0IsQ0E2RWhDO0lBQUQsMkJBQUM7Q0FBQSxJQUFBO1NBN0VZLG9CQUFvQjs7Ozs7QUErRWpDLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxNQUE0QjtJQUMxRSxPQUFPLE1BQU0sSUFBSSxJQUFJLG9CQUFvQixFQUFFLENBQUM7QUFDOUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sdUJBQXVCLEdBQWE7O0lBRS9DLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM5RCxVQUFVLEVBQUUsK0JBQStCO0NBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSwgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUFVULCBUZFBPU1QsIFRkREVMRVRFLCBUZFBhcmFtLCBUZEJvZHksIFRkUmVzcG9uc2UsIFRkUXVlcnlQYXJhbXMgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIFN5c3RlbVR5cGUge1xuICBUZXJhZGF0YSA9ICdURVJBREFUQScsXG4gIEFzdGVyID0gJ0FTVEVSJyxcbiAgUHJlc3RvID0gJ1BSRVNUTycsXG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NZU1RFTVNfVFlQRVM6IFN5c3RlbVR5cGVbXSA9IFtTeXN0ZW1UeXBlLlRlcmFkYXRhLCBTeXN0ZW1UeXBlLkFzdGVyLCBTeXN0ZW1UeXBlLlByZXN0b107XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN5c3RlbUF0dHJpYnV0ZXMge1xuICBhdHRyaWJ1dGVzPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFN5c3RlbSB7XG4gIGhvc3Q/OiBzdHJpbmc7XG4gIHBvcnQ/OiBudW1iZXI7XG4gIHN5c3RlbV90eXBlPzogU3lzdGVtVHlwZTtcbiAgY2F0YWxvZz86IHN0cmluZztcbiAgc2NoZW1hPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW0gZXh0ZW5kcyBJQWJzdHJhY3RTeXN0ZW0ge1xuICBhdHRyaWJ1dGVzPzogc3RyaW5nO1xuICBkYXRhX2NlbnRlcj86IHN0cmluZztcbiAgZW52aXJvbm1lbnQ/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBuaWNrbmFtZT86IHN0cmluZztcbiAgcGxhdGZvcm1faWQ/OiBudW1iZXI7XG4gIHN5c3RlbV9hdHRyaWJ1dGVzPzogSVN5c3RlbUF0dHJpYnV0ZXM7XG4gIHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RTeXN0ZW0gZXh0ZW5kcyBJQWJzdHJhY3RTeXN0ZW0ge1xuICBhY2NvdW50Pzogc3RyaW5nO1xuICBkZWZhdWx0X2NoYXJfc2V0Pzogc3RyaW5nO1xuICBkZWZhdWx0X2RhdGFiYXNlPzogc3RyaW5nO1xuICBsb2dfbWVjaD86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIHVzZXJuYW1lPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvc3lzdGVtJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU3lzdGVtU2VydmljZSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9oZWFsdGgnLFxuICB9KVxuICBoZWFsdGgoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiAhIXJlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvc3lzdGVtcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICBxdWVyeShcbiAgICBAVGRRdWVyeVBhcmFtcygpIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+LFxuICApOiBPYnNlcnZhYmxlPHsgdG90YWw6IG51bWJlcjsgZGF0YTogSVN5c3RlbVtdIH0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElTeXN0ZW1bXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvc3lzdGVtcy86aWQnLFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyB8IG51bWJlciwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4pOiBPYnNlcnZhYmxlPElTeXN0ZW0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIHN5c3RlbTogSVN5c3RlbSwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4pOiBPYnNlcnZhYmxlPElTeXN0ZW0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQVVQoe1xuICAgIHBhdGg6ICcvc3lzdGVtcy86aWQnLFxuICB9KVxuICB1cGRhdGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICBAVGRCb2R5KCkgc3lzdGVtOiBJU3lzdGVtLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTeXN0ZW0+LFxuICApOiBPYnNlcnZhYmxlPElTeXN0ZW0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvc3lzdGVtcy86aWQnLFxuICB9KVxuICBkZWxldGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8dm9pZD4pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3Rlc3RzeXN0ZW0nLFxuICB9KVxuICB0ZXN0KEBUZEJvZHkoKSBzeXN0ZW06IElUZXN0U3lzdGVtLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlU3lzdGVtU2VydmljZSk6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZVN5c3RlbVNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVN5c3RlbVNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU3lzdGVtU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1NZU1RFTV9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==