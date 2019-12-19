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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUdsSCxVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sT0FBTyxxQkFBcUIsR0FBaUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7OztBQUU3Ryx1Q0FFQzs7O0lBREMsdUNBQWlCOzs7OztBQUduQixxQ0FNQzs7O0lBTEMsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsc0NBQXlCOztJQUN6QixrQ0FBaUI7O0lBQ2pCLGlDQUFnQjs7Ozs7QUFHbEIsNkJBU0M7OztJQVJDLDZCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7O0lBQ3JCLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQixvQ0FBc0M7O0lBQ3RDLDBCQUFpQjs7Ozs7QUFHbkIsaUNBT0M7OztJQU5DLDhCQUFpQjs7SUFD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SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDO0lBQ00sV0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBYyxXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFTLFVBQVU7a0RBRXZGO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDO0lBQ0ksV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFzQixVQUFVO2dEQU10RztBQTVFVSxvQkFBb0I7SUFKaEMsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLGFBQWE7UUFDdEIsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7S0FDN0QsQ0FBQztHQUNXLG9CQUFvQixDQTZFaEM7U0E3RVksb0JBQW9COzs7OztBQStFakMsTUFBTSxVQUFVLCtCQUErQixDQUFDLE1BQTRCO0lBQzFFLE9BQU8sTUFBTSxJQUFJLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUM5QyxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTs7SUFFL0MsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlELFVBQVUsRUFBRSwrQkFBK0I7Q0FDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgU2tpcFNlbGYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRIdHRwLCBUZEdFVCwgVGRQVVQsIFRkUE9TVCwgVGRERUxFVEUsIFRkUGFyYW0sIFRkQm9keSwgVGRSZXNwb25zZSwgVGRRdWVyeVBhcmFtcyB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuZXhwb3J0IGVudW0gU3lzdGVtVHlwZSB7XG4gIFRlcmFkYXRhID0gJ1RFUkFEQVRBJyxcbiAgQXN0ZXIgPSAnQVNURVInLFxuICBQcmVzdG8gPSAnUFJFU1RPJyxcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfU1lTVEVNU19UWVBFUzogU3lzdGVtVHlwZVtdID0gW1N5c3RlbVR5cGUuVGVyYWRhdGEsIFN5c3RlbVR5cGUuQXN0ZXIsIFN5c3RlbVR5cGUuUHJlc3RvXTtcblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtQXR0cmlidXRlcyB7XG4gIGF0dHJpYnV0ZXM/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFic3RyYWN0U3lzdGVtIHtcbiAgaG9zdD86IHN0cmluZztcbiAgcG9ydD86IG51bWJlcjtcbiAgc3lzdGVtX3R5cGU/OiBTeXN0ZW1UeXBlO1xuICBjYXRhbG9nPzogc3RyaW5nO1xuICBzY2hlbWE/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN5c3RlbSBleHRlbmRzIElBYnN0cmFjdFN5c3RlbSB7XG4gIGF0dHJpYnV0ZXM/OiBzdHJpbmc7XG4gIGRhdGFfY2VudGVyPzogc3RyaW5nO1xuICBlbnZpcm9ubWVudD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuICBwbGF0Zm9ybV9pZD86IG51bWJlcjtcbiAgc3lzdGVtX2F0dHJpYnV0ZXM/OiBJU3lzdGVtQXR0cmlidXRlcztcbiAgdmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGVzdFN5c3RlbSBleHRlbmRzIElBYnN0cmFjdFN5c3RlbSB7XG4gIGFjY291bnQ/OiBzdHJpbmc7XG4gIGRlZmF1bHRfY2hhcl9zZXQ/OiBzdHJpbmc7XG4gIGRlZmF1bHRfZGF0YWJhc2U/OiBzdHJpbmc7XG4gIGxvZ19tZWNoPzogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbiAgdXNlcm5hbWU/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9zeXN0ZW0nLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJU3lzdGVtW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVN5c3RlbVtdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGdldChAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvc3lzdGVtcycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgc3lzdGVtOiBJU3lzdGVtLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBVVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLFxuICAgIEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4sXG4gICk6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdGVzdHN5c3RlbScsXG4gIH0pXG4gIHRlc3QoQFRkQm9keSgpIHN5c3RlbTogSVRlc3RTeXN0ZW0sIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKTogVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3lzdGVtU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU3lzdGVtU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19