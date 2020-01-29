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
let VantageSystemService = class VantageSystemService {
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
export { VantageSystemService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQVNsSCxVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sT0FBTyxxQkFBcUIsR0FBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7OztBQUU3Ryx1Q0FFQzs7O0lBREMsdUNBQWlCOzs7OztBQUduQixxQ0FNQzs7O0lBTEMsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsc0NBQXlCOztJQUN6QixrQ0FBaUI7O0lBQ2pCLGlDQUFnQjs7Ozs7QUFHbEIsNkJBU0M7OztJQVJDLDZCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7O0lBQ3JCLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQixvQ0FBc0M7O0lBQ3RDLDBCQUFpQjs7Ozs7QUFHbkIsaUNBT0M7OztJQU5DLDhCQUFpQjs7SUFDakIsdUNBQTBCOztJQUMxQix1Q0FBMEI7O0lBQzFCLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztJQUNsQiwrQkFBa0I7O0lBT1Asb0JBQW9CLFNBQXBCLG9CQUFvQjs7Ozs7SUFJL0IsTUFBTSxDQUFlLFFBQXdDO1FBQzNELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsVUFBVTs7OztRQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBQyxFQUNGLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRTtZQUM3QixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBUUQsS0FBSyxDQUNjLE1BQW1CLEVBQ3RCLFFBQXdDO1FBRXRELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFO1lBQzdCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsbUJBQVcsR0FBRyxDQUFDLElBQUksRUFBQTthQUMxQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELEdBQUcsQ0FBZ0IsRUFBbUIsRUFBZ0IsUUFBOEI7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFXLE1BQWUsRUFBZ0IsUUFBOEI7UUFDNUUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUtELE1BQU0sQ0FDVyxFQUFVLEVBQ2YsTUFBZSxFQUNYLFFBQThCO1FBRTVDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBZ0IsRUFBVSxFQUFnQixRQUEyQjtRQUN6RSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxJQUFJLENBQVcsTUFBbUIsRUFBZ0IsUUFBd0M7UUFDeEYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUF6RUM7SUFIQyxLQUFLLENBQUM7UUFDTCxJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0lBQ00sV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBc0IsVUFBVTtrREFTekU7QUFRRDtJQU5DLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7SUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOztxQ0FEYSxVQUFVO1FBQ1gsVUFBVTtvQ0FDbEMsVUFBVTtpREFTWjtBQUtEO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUNHLFdBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQXVCLFdBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7b0NBQVksVUFBVTsrQ0FFaEc7QUFLRDtJQUhDLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7SUFDTSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQW1CLFdBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7b0NBQVksVUFBVTtrREFFMUY7QUFLRDtJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUM7SUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVO29DQUNsQyxVQUFVO2tEQUVaO0FBS0Q7SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ00sV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBYyxXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFTLFVBQVU7a0RBRXZGO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDO0lBQ0ksV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFzQixVQUFVO2dEQU10RztBQTVFVSxvQkFBb0I7SUFKaEMsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLGFBQWE7UUFDdEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7S0FDN0QsQ0FBQztHQUNXLG9CQUFvQixDQTZFaEM7U0E3RVksb0JBQW9COzs7OztBQStFakMsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRIdHRwLCBUZEdFVCwgVGRQVVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuLypcbiAqIFRoZXNlIGludGVyZmFjZXMgYXJlIGR1cGxpY2F0ZWQgaW4gdGhlIHN5c3RlbSBhbmQgdGhlIHF1ZXJ5IHNlcnZpY2UuXG4gKiBIb3dldmVyLCB3aXRoaW4gdGhlIHN5c3RlbSBzZXJ2aWNlLCBTeXN0ZW1UeXBlIGluY2x1ZGVzIEFzdGVyICYgUHJlc3RvLlxuICogV2hlcmVhcyBpbiB0aGUgcXVlcnkgc2VydmljZSwgdGhleSBhcmUgZXhjbHVkZWQuXG4gKiBUT0RPOiBEUlkgdGhpcyB1cFxuICovXG5leHBvcnQgZW51bSBTeXN0ZW1UeXBlIHtcbiAgVGVyYWRhdGEgPSAnVEVSQURBVEEnLFxuICBBc3RlciA9ICdBU1RFUicsXG4gIFByZXN0byA9ICdQUkVTVE8nLFxufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1TX1RZUEVTOiBTeXN0ZW1UeXBlW10gPSBbU3lzdGVtVHlwZS5UZXJhZGF0YSwgU3lzdGVtVHlwZS5Bc3RlciwgU3lzdGVtVHlwZS5QcmVzdG9dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0U3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYWNjb3VudD86IHN0cmluZztcbiAgZGVmYXVsdF9jaGFyX3NldD86IHN0cmluZztcbiAgZGVmYXVsdF9kYXRhYmFzZT86IHN0cmluZztcbiAgbG9nX21lY2g/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3N5c3RlbScsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvaGVhbHRoJyxcbiAgfSlcbiAgaGVhbHRoKEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICB9KSxcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4gISFyZXM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgcXVlcnkoXG4gICAgQFRkUXVlcnlQYXJhbXMoKSBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PixcbiAgKTogT2JzZXJ2YWJsZTx7IHRvdGFsOiBudW1iZXI7IGRhdGE6IElTeXN0ZW1bXSB9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3RhbDogK3Jlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbCcpLFxuICAgICAgICAgIGRhdGE6IDxJU3lzdGVtW10+cmVzLmJvZHksXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgZ2V0KEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcgfCBudW1iZXIsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTeXN0ZW0+KTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElTeXN0ZW0+KTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUFVUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKFxuICAgIEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsXG4gICAgQFRkQm9keSgpIHN5c3RlbTogSVN5c3RlbSxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPixcbiAgKTogT2JzZXJ2YWJsZTxJU3lzdGVtPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMvOmlkJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy90ZXN0c3lzdGVtJyxcbiAgfSlcbiAgdGVzdChAVGRCb2R5KCkgc3lzdGVtOiBJVGVzdFN5c3RlbSwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX1NZU1RFTV9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZVN5c3RlbVNlcnZpY2UpOiBWYW50YWdlU3lzdGVtU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NZU1RFTV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZVN5c3RlbVNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=