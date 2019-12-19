/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TdHttp, TdGET, TdPOST, TdPATCH, TdDELETE, TdParam, TdBody, TdResponse } from '@covalent/http';
/** @enum {string} */
var LDAPEncription = {
    None: 'NONE',
};
export { LDAPEncription };
/**
 * @record
 */
export function ILDAPConfig() { }
if (false) {
    /** @type {?|undefined} */
    ILDAPConfig.prototype.allowed_groups;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.config_id;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.connectionUrl;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.email_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.encryption;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.group_id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.groups_base_dn;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.id_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.member_of_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.name_field;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.port;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_pass;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.search_user;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.server;
    /** @type {?|undefined} */
    ILDAPConfig.prototype.url;
}
var VantageLDAPService = /** @class */ (function () {
    function VantageLDAPService() {
    }
    /**
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.query = /**
     * @param {?=} response
     * @return {?}
     */
    function (response) {
        return response;
    };
    /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    VantageLDAPService.prototype.create = /**
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
    VantageLDAPService.prototype.update = /**
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
    VantageLDAPService.prototype.delete = /**
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
    VantageLDAPService.prototype.test = /**
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    function (body, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.status === 200;
        })));
    };
    __decorate([
        TdGET({
            path: '/',
        }),
        __param(0, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "query", null);
    __decorate([
        TdPOST({
            path: '/',
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "create", null);
    __decorate([
        TdPATCH({
            path: '/:id',
        }),
        __param(0, TdParam('id')),
        __param(1, TdBody()),
        __param(2, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "update", null);
    __decorate([
        TdDELETE({
            path: '/:id',
        }),
        __param(0, TdParam('id')), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "delete", null);
    __decorate([
        TdPOST({
            path: '/verify',
            options: {
                observe: 'response',
            },
        }),
        __param(0, TdBody()), __param(1, TdResponse()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Observable]),
        __metadata("design:returntype", Observable)
    ], VantageLDAPService.prototype, "test", null);
    VantageLDAPService = __decorate([
        TdHttp({
            baseUrl: '/api/user/ldap/config',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
        })
    ], VantageLDAPService);
    return VantageLDAPService;
}());
export { VantageLDAPService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_LDAP_PROVIDER_FACTORY(parent) {
    return parent || new VantageLDAPService();
}
/** @type {?} */
export var VANTAGE_LDAP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageLDAPService,
    deps: [[new Optional(), new SkipSelf(), VantageLDAPService]],
    useFactory: VANTAGE_LDAP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbImxkYXAvbGRhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFTLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUc1RyxNQUFPLE1BQU07Ozs7OztBQUdmLGlDQWtCQzs7O0lBakJDLHFDQUEwQjs7SUFDMUIsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLG9DQUF1Qjs7SUFDdkIsa0NBQXFCOztJQUNyQixpQ0FBNEI7O0lBQzVCLHFDQUF3Qjs7SUFDeEIscUNBQXdCOztJQUN4QiwrQkFBa0I7O0lBQ2xCLG1DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixpQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLGtDQUFxQjs7SUFDckIsa0NBQXFCOztJQUNyQiw2QkFBZ0I7O0lBQ2hCLDBCQUFhOzs7O0lBcURmLENBQUM7Ozs7O0lBMUNDLGtDQUFLOzs7O0lBQUwsVUFBb0IsUUFBb0M7UUFDdEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsbUNBQU07Ozs7O0lBQU4sVUFBaUIsSUFBaUIsRUFBZ0IsUUFBa0M7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUtELG1DQUFNOzs7Ozs7SUFBTixVQUNpQixFQUFtQixFQUN4QixJQUFpQixFQUNiLFFBQWtDO1FBRWhELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELG1DQUFNOzs7OztJQUFOLFVBQXNCLEVBQW1CLEVBQWdCLFFBQTJCO1FBQ2xGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQVFELGlDQUFJOzs7OztJQUFKLFVBQWUsSUFBaUIsRUFBZ0IsUUFBOEI7UUFDNUUsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFRO1lBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQXpDRDtRQUhDLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQztRQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQWtCLFVBQVU7bURBRXBFO0lBS0Q7UUFIQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUM7UUFDTSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXFCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQWdCLFVBQVU7b0RBRWhHO0lBS0Q7UUFIQyxPQUFPLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7UUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7UUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOzt5REFBWSxVQUFVO3dDQUNsQyxVQUFVO29EQUVaO0lBS0Q7UUFIQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7UUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUFTLFVBQVU7b0RBRWhHO0lBUUQ7UUFOQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFDSSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXFCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQVksVUFBVTtrREFNMUY7SUE3Q1Usa0JBQWtCO1FBSjlCLE1BQU0sQ0FBQztZQUNOLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDN0QsQ0FBQztPQUNXLGtCQUFrQixDQThDOUI7SUFBRCx5QkFBQztDQUFBLElBQUE7U0E5Q1ksa0JBQWtCOzs7OztBQWdEL0IsTUFBTSxVQUFVLDZCQUE2QixDQUFDLE1BQTBCO0lBQ3RFLE9BQU8sTUFBTSxJQUFJLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQUM1QyxDQUFDOztBQUVELE1BQU0sS0FBTyxxQkFBcUIsR0FBYTs7SUFFN0MsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELFVBQVUsRUFBRSw2QkFBNkI7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZEh0dHAsIFRkR0VULCBUZFBVVCwgVGRQT1NULCBUZFBBVENILCBUZERFTEVURSwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBMREFQRW5jcmlwdGlvbiB7XG4gIE5vbmUgPSAnTk9ORScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxEQVBDb25maWcge1xuICBhbGxvd2VkX2dyb3Vwcz86IHN0cmluZ1tdO1xuICBiYXNlX2RuPzogc3RyaW5nO1xuICBjb25maWdfaWQ/OiBudW1iZXI7XG4gIGNvbm5lY3Rpb25Vcmw/OiBzdHJpbmc7XG4gIGVtYWlsX2ZpZWxkPzogc3RyaW5nO1xuICBlbmNyeXB0aW9uPzogTERBUEVuY3JpcHRpb247XG4gIGdyb3VwX2lkX2ZpZWxkPzogc3RyaW5nO1xuICBncm91cHNfYmFzZV9kbj86IHN0cmluZztcbiAgaWRfZmllbGQ/OiBzdHJpbmc7XG4gIG1lbWJlcl9maWVsZD86IHN0cmluZztcbiAgbWVtYmVyX29mX2ZpZWxkPzogc3RyaW5nO1xuICBuYW1lX2ZpZWxkPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzZWFyY2hfcGFzcz86IHN0cmluZztcbiAgc2VhcmNoX3VzZXI/OiBzdHJpbmc7XG4gIHNlcnZlcj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlci9sZGFwL2NvbmZpZycsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcbn0pXG5leHBvcnQgY2xhc3MgVmFudGFnZUxEQVBTZXJ2aWNlIHtcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnLycsXG4gIH0pXG4gIHF1ZXJ5KEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElMREFQQ29uZmlnW10+KTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZ1tdPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy8nLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElMREFQQ29uZmlnLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4pOiBPYnNlcnZhYmxlPElMREFQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUEFUQ0goe1xuICAgIHBhdGg6ICcvOmlkJyxcbiAgfSlcbiAgdXBkYXRlKFxuICAgIEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgQFRkQm9keSgpIGJvZHk6IElMREFQQ29uZmlnLFxuICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElMREFQQ29uZmlnPixcbiAgKTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZERFTEVURSh7XG4gICAgcGF0aDogJy86aWQnLFxuICB9KVxuICBkZWxldGUoQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyB8IG51bWJlciwgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8dm9pZD4pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnL3ZlcmlmeScsXG4gICAgb3B0aW9uczoge1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcbiAgICB9LFxuICB9KVxuICB0ZXN0KEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8Ym9vbGVhbj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgPT09IDIwMDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfTERBUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUxEQVBTZXJ2aWNlKTogVmFudGFnZUxEQVBTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUxEQVBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0xEQVBfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlTERBUFNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlTERBUFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9MREFQX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19