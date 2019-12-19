/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
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
    VantageSystemService = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUdsSCxVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sS0FBTyxxQkFBcUIsR0FBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7OztBQUU3Ryx1Q0FFQzs7O0lBREMsdUNBQWlCOzs7OztBQUduQixxQ0FNQzs7O0lBTEMsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsc0NBQXlCOztJQUN6QixrQ0FBaUI7O0lBQ2pCLGlDQUFnQjs7Ozs7QUFHbEIsNkJBU0M7OztJQVJDLDZCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7O0lBQ3JCLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQixvQ0FBc0M7O0lBQ3RDLDBCQUFpQjs7Ozs7QUFHbkIsaUNBT0M7OztJQU5DLDhCQUFpQjs7SUFD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QVU7c0RBRVo7SUFLRDtRQUhDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7UUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFjLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQVMsVUFBVTtzREFFdkY7SUFLRDtRQUhDLE1BQU0sQ0FBQztZQUNOLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUM7UUFDSSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXVCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQXNCLFVBQVU7b0RBTXRHO0lBNUVVLG9CQUFvQjtRQUpoQyxNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUM3RCxDQUFDO09BQ1csb0JBQW9CLENBNkVoQztJQUFELDJCQUFDO0NBQUEsSUFBQTtTQTdFWSxvQkFBb0I7Ozs7O0FBK0VqQyxNQUFNLFVBQVUsK0JBQStCLENBQUMsTUFBNEI7SUFDMUUsT0FBTyxNQUFNLElBQUksSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQzlDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFhOztJQUUvQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUQsVUFBVSxFQUFFLCtCQUErQjtDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFBVVCwgVGRQT1NULCBUZERFTEVURSwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlLCBUZFF1ZXJ5UGFyYW1zIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBTeXN0ZW1UeXBlIHtcbiAgVGVyYWRhdGEgPSAnVEVSQURBVEEnLFxuICBBc3RlciA9ICdBU1RFUicsXG4gIFByZXN0byA9ICdQUkVTVE8nLFxufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1TX1RZUEVTOiBTeXN0ZW1UeXBlW10gPSBbU3lzdGVtVHlwZS5UZXJhZGF0YSwgU3lzdGVtVHlwZS5Bc3RlciwgU3lzdGVtVHlwZS5QcmVzdG9dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0U3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYWNjb3VudD86IHN0cmluZztcbiAgZGVmYXVsdF9jaGFyX3NldD86IHN0cmluZztcbiAgZGVmYXVsdF9kYXRhYmFzZT86IHN0cmluZztcbiAgbG9nX21lY2g/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3N5c3RlbScsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElTeXN0ZW1bXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJU3lzdGVtW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcgfCBudW1iZXIsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTeXN0ZW0+KTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTeXN0ZW0+KTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUFVUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKFxuICAgIEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsXG4gICAgQFRkQm9keSgpIHN5c3RlbTogSVN5c3RlbSxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPixcbiAgKTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90ZXN0c3lzdGVtJyxcbiAgfSlcbiAgdGVzdChAVGRCb2R5KCkgc3lzdGVtOiBJVGVzdFN5c3RlbSwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NZU1RFTV9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVN5c3RlbVNlcnZpY2UpOiBWYW50YWdlU3lzdGVtU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NZU1RFTV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVN5c3RlbVNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=