/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPUT, TdPOST, TdDELETE, TdParam, TdBody, TdResponse, TdQueryParams } from '@covalent/http';
/** @enum {string} */
const SystemType = {
    Teradata: 'TERADATA',
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
export { SystemType };
/** @type {?} */
export const VANTAGE_SYSTEMS_TYPES = [SystemType.Teradata, SystemType.Aster, SystemType.Presto];
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
export class VantageSystemService extends mixinHttp(class {
}, {
    baseUrl: '/api/system',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
    /**
     * @param {?=} response
     * @return {?}
     */
    health(response) {
        return response.pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return of(false);
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return !!res;
        })));
    }
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
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    create(system, response) {
        return response;
    }
    /**
     * @param {?} id
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    update(id, system, response) {
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
     * @param {?} system
     * @param {?=} response
     * @return {?}
     */
    test(system, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return true;
        })));
    }
}
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
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent) {
    return parent || new VantageSystemService();
}
/** @type {?} */
export const VANTAGE_SYSTEM_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSystemService,
    deps: [[new Optional(), new SkipSelf(), VantageSystemService]],
    useFactory: VANTAGE_SYSTEM_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFTckgsVUFBVyxVQUFVO0lBQ3JCLE9BQVEsT0FBTztJQUNmLFFBQVMsUUFBUTs7OztBQUduQixNQUFNLE9BQU8scUJBQXFCLEdBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUM7Ozs7QUFFN0csdUNBRUM7OztJQURDLHVDQUFpQjs7Ozs7QUFHbkIscUNBTUM7OztJQUxDLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLHNDQUF5Qjs7SUFDekIsa0NBQWlCOztJQUNqQixpQ0FBZ0I7Ozs7O0FBR2xCLDZCQVNDOzs7SUFSQyw2QkFBb0I7O0lBQ3BCLDhCQUFxQjs7SUFDckIsOEJBQXFCOztJQUNyQixxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLDhCQUFxQjs7SUFDckIsb0NBQXNDOztJQUN0QywwQkFBaUI7Ozs7O0FBR25CLGlDQU9DOzs7SUFOQyw4QkFBaUI7O0lBQ2pCLHVDQUEwQjs7SUFDMUIsdUNBQTBCOztJQUMxQiwrQkFBa0I7O0lBQ2xCLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztBQUlwQixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUM1RCxPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDOzs7OztJQUlBLE1BQU0sQ0FBZSxRQUF3QztRQUMzRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsRUFDRixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQVFELEtBQUssQ0FDYyxNQUFtQixFQUN0QixRQUF3QztRQUV0RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDMUIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxHQUFHLENBQWdCLEVBQW1CLEVBQWdCLFFBQThCO1FBQ2xGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBVyxNQUFlLEVBQWdCLFFBQThCO1FBQzVFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFLRCxNQUFNLENBQ1csRUFBVSxFQUNmLE1BQWUsRUFDWCxRQUE4QjtRQUU1QyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQWdCLEVBQVUsRUFBZ0IsUUFBMkI7UUFDekUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsSUFBSSxDQUFXLE1BQW1CLEVBQWdCLFFBQXdDO1FBQ3hGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWhGRixVQUFVOztBQVFUO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQztJQUNNLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FDQUFZLFVBQVU7b0NBQXNCLFVBQVU7a0RBU3pFO0FBUUQ7SUFOQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsVUFBVTtRQUNoQixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFFQyxXQUFBLGFBQWEsRUFBRSxDQUFBO0lBQ2YsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBRGEsVUFBVTtRQUNYLFVBQVU7b0NBQ2xDLFVBQVU7aURBU1o7QUFLRDtJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUM7SUFDRyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFZLFVBQVU7K0NBRWhHO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsVUFBVTtLQUNqQixDQUFDO0lBQ00sV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFtQixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFZLFVBQVU7a0RBRTFGO0FBS0Q7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBRUMsV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDYixXQUFBLE1BQU0sRUFBRSxDQUFBO0lBQ1IsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cURBQVksVUFBVTtvQ0FDbEMsVUFBVTtrREFFWjtBQUtEO0lBSEMsUUFBUSxDQUFDO1FBQ1IsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUNNLFdBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBUyxVQUFVO2tEQUV2RjtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLGFBQWE7S0FDcEIsQ0FBQztJQUNJLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBdUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBc0IsVUFBVTtnREFNdEc7Ozs7O0FBR0gsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRQVVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuLypcbiAqIFRoZXNlIGludGVyZmFjZXMgYXJlIGR1cGxpY2F0ZWQgaW4gdGhlIHN5c3RlbSBhbmQgdGhlIHF1ZXJ5IHNlcnZpY2UuXG4gKiBIb3dldmVyLCB3aXRoaW4gdGhlIHN5c3RlbSBzZXJ2aWNlLCBTeXN0ZW1UeXBlIGluY2x1ZGVzIEFzdGVyICYgUHJlc3RvLlxuICogV2hlcmVhcyBpbiB0aGUgcXVlcnkgc2VydmljZSwgdGhleSBhcmUgZXhjbHVkZWQuXG4gKiBUT0RPOiBEUlkgdGhpcyB1cFxuICovXG5leHBvcnQgZW51bSBTeXN0ZW1UeXBlIHtcbiAgVGVyYWRhdGEgPSAnVEVSQURBVEEnLFxuICBBc3RlciA9ICdBU1RFUicsXG4gIFByZXN0byA9ICdQUkVTVE8nLFxufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1TX1RZUEVTOiBTeXN0ZW1UeXBlW10gPSBbU3lzdGVtVHlwZS5UZXJhZGF0YSwgU3lzdGVtVHlwZS5Bc3RlciwgU3lzdGVtVHlwZS5QcmVzdG9dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0U3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYWNjb3VudD86IHN0cmluZztcbiAgZGVmYXVsdF9jaGFyX3NldD86IHN0cmluZztcbiAgZGVmYXVsdF9kYXRhYmFzZT86IHN0cmluZztcbiAgbG9nX21lY2g/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3N5c3RlbScsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJU3lzdGVtW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVN5c3RlbVtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvc3lzdGVtcycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgc3lzdGVtOiBJU3lzdGVtLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBVVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLFxuICAgIEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4sXG4gICk6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdGVzdHN5c3RlbScsXG4gIH0pXG4gIHRlc3QoQFRkQm9keSgpIHN5c3RlbTogSVRlc3RTeXN0ZW0sIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKTogVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3lzdGVtU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU3lzdGVtU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19