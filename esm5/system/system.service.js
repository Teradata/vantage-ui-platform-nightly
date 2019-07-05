/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdHttp, TdGET, TdPUT, TdPOST, TdDELETE, TdParam, TdBody, TdResponse, TdQueryParams, } from '@covalent/http';
/** @enum {string} */
var SystemType = {
    Teradata: 'TERADATA',
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
export { SystemType };
/** @type {?} */
export var VANTAGE_SYSTEMS_TYPES = [
    SystemType.Teradata,
    SystemType.Aster,
    SystemType.Presto,
];
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
        tslib_1.__param(0, TdParam('id')),
        tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "get", null);
    tslib_1.__decorate([
        TdPOST({
            path: '/systems',
        }),
        tslib_1.__param(0, TdBody()),
        tslib_1.__param(1, TdResponse()),
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
        tslib_1.__param(0, TdParam('id')),
        tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "delete", null);
    tslib_1.__decorate([
        TdPOST({
            path: '/testsystem',
        }),
        tslib_1.__param(0, TdBody()),
        tslib_1.__param(1, TdResponse()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Observable]),
        tslib_1.__metadata("design:returntype", Observable)
    ], VantageSystemService.prototype, "test", null);
    VantageSystemService = tslib_1.__decorate([
        TdHttp({
            baseUrl: '/api/system',
            baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS9zeXN0ZW0vIiwic291cmNlcyI6WyJzeXN0ZW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFtQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhHLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxFQUNQLE1BQU0sRUFDTixVQUFVLEVBQ1YsYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7OztJQUd0QixVQUFXLFVBQVU7SUFDckIsT0FBUSxPQUFPO0lBQ2YsUUFBUyxRQUFROzs7O0FBR25CLE1BQU0sS0FBTyxxQkFBcUIsR0FBaUI7SUFDakQsVUFBVSxDQUFDLFFBQVE7SUFDbkIsVUFBVSxDQUFDLEtBQUs7SUFDaEIsVUFBVSxDQUFDLE1BQU07Q0FDbEI7Ozs7QUFFRCx1Q0FFQzs7O0lBREMsdUNBQWlCOzs7OztBQUduQixxQ0FNQzs7O0lBTEMsK0JBQWM7O0lBQ2QsK0JBQWM7O0lBQ2Qsc0NBQXlCOztJQUN6QixrQ0FBaUI7O0lBQ2pCLGlDQUFnQjs7Ozs7QUFHbEIsNkJBU0M7OztJQVJDLDZCQUFvQjs7SUFDcEIsOEJBQXFCOztJQUNyQiw4QkFBcUI7O0lBQ3JCLHFCQUFZOztJQUNaLDJCQUFrQjs7SUFDbEIsOEJBQXFCOztJQUNyQixvQ0FBc0M7O0lBQ3RDLDBCQUFpQjs7Ozs7QUFHbkIsaUNBT0M7OztJQU5DLDhCQUFpQjs7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Z0RBQVksVUFBVTtzREFFaEU7SUFLRDtRQUhDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7UUFDTSxtQkFBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDWixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7eURBQVksVUFBVTtnREFBUyxVQUFVO3NEQUU3RDtJQUtEO1FBSEMsTUFBTSxDQUFDO1lBQ04sSUFBSSxFQUFFLGFBQWE7U0FDcEIsQ0FBQztRQUNJLG1CQUFBLE1BQU0sRUFBRSxDQUFBO1FBQ1AsbUJBQUEsVUFBVSxFQUFFLENBQUE7O3lEQUFZLFVBQVU7Z0RBQXNCLFVBQVU7b0RBTXhFO0lBN0VVLG9CQUFvQjtRQUpoQyxNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsYUFBYTtZQUN0QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUMvRCxDQUFDO09BQ1csb0JBQW9CLENBOEVoQztJQUFELDJCQUFDO0NBQUEsSUFBQTtTQTlFWSxvQkFBb0I7Ozs7O0FBZ0ZqQyxNQUFNLFVBQVUsK0JBQStCLENBQUMsTUFBNEI7SUFDMUUsT0FBTyxNQUFNLElBQUksSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQzlDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFhOztJQUUvQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUQsVUFBVSxFQUFFLCtCQUErQjtDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBUZEh0dHAsXG4gIFRkR0VULFxuICBUZFBVVCxcbiAgVGRQT1NULFxuICBUZERFTEVURSxcbiAgVGRQYXJhbSxcbiAgVGRCb2R5LFxuICBUZFJlc3BvbnNlLFxuICBUZFF1ZXJ5UGFyYW1zLFxufSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIFN5c3RlbVR5cGUge1xuICBUZXJhZGF0YSA9ICdURVJBREFUQScsXG4gIEFzdGVyID0gJ0FTVEVSJyxcbiAgUHJlc3RvID0gJ1BSRVNUTycsXG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX1NZU1RFTVNfVFlQRVM6IFN5c3RlbVR5cGVbXSA9IFtcbiAgU3lzdGVtVHlwZS5UZXJhZGF0YSxcbiAgU3lzdGVtVHlwZS5Bc3RlcixcbiAgU3lzdGVtVHlwZS5QcmVzdG8sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTeXN0ZW1BdHRyaWJ1dGVzIHtcbiAgYXR0cmlidXRlcz86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RTeXN0ZW0ge1xuICBob3N0Pzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzeXN0ZW1fdHlwZT86IFN5c3RlbVR5cGU7XG4gIGNhdGFsb2c/OiBzdHJpbmc7XG4gIHNjaGVtYT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYXR0cmlidXRlcz86IHN0cmluZztcbiAgZGF0YV9jZW50ZXI/OiBzdHJpbmc7XG4gIGVudmlyb25tZW50Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgbmlja25hbWU/OiBzdHJpbmc7XG4gIHBsYXRmb3JtX2lkPzogbnVtYmVyO1xuICBzeXN0ZW1fYXR0cmlidXRlcz86IElTeXN0ZW1BdHRyaWJ1dGVzO1xuICB2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZXN0U3lzdGVtIGV4dGVuZHMgSUFic3RyYWN0U3lzdGVtIHtcbiAgYWNjb3VudD86IHN0cmluZztcbiAgZGVmYXVsdF9jaGFyX3NldD86IHN0cmluZztcbiAgZGVmYXVsdF9kYXRhYmFzZT86IHN0cmluZztcbiAgbG9nX21lY2g/OiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICB1c2VybmFtZT86IHN0cmluZztcbn1cblxuQFRkSHR0cCh7XG4gIGJhc2VVcmw6ICcvYXBpL3N5c3RlbScsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlU3lzdGVtU2VydmljZSB7XG5cbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnL2hlYWx0aCcsXG4gIH0pXG4gIGhlYWx0aChAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgfSksXG4gICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuICEhcmVzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICAgICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8e3RvdGFsOiBudW1iZXIsIGRhdGE6IElTeXN0ZW1bXX0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRvdGFsOiArcmVzLmhlYWRlcnMuZ2V0KCdYLVRvdGFsJyksXG4gICAgICAgICAgZGF0YTogPElTeXN0ZW1bXT5yZXMuYm9keSxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvc3lzdGVtcy86aWQnLFxuICB9KVxuICBnZXQoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyB8IG51bWJlcixcbiAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4pOiBPYnNlcnZhYmxlPElTeXN0ZW0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3N5c3RlbXMnLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIHN5c3RlbTogSVN5c3RlbSxcbiAgICAgICAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJU3lzdGVtPik6IE9ic2VydmFibGU8SVN5c3RlbT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBVVCh7XG4gICAgcGF0aDogJy9zeXN0ZW1zLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nLFxuICAgICAgICAgIEBUZEJvZHkoKSBzeXN0ZW06IElTeXN0ZW0sXG4gICAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SVN5c3RlbT4pOiBPYnNlcnZhYmxlPElTeXN0ZW0+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvc3lzdGVtcy86aWQnLFxuICB9KVxuICBkZWxldGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyxcbiAgICAgICAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdGVzdHN5c3RlbScsXG4gIH0pXG4gIHRlc3QoQFRkQm9keSgpIHN5c3RlbTogSVRlc3RTeXN0ZW0sXG4gICAgICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TWVNURU1fUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlKTogVmFudGFnZVN5c3RlbVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3lzdGVtU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TWVNURU1fUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlU3lzdGVtU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VTeXN0ZW1TZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfU1lTVEVNX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19