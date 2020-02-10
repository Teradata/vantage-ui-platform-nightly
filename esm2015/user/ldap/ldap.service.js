/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPOST, TdPATCH, TdDELETE, TdParam, TdBody, TdResponse } from '@covalent/http';
/** @enum {string} */
const LDAPEncription = {
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
export class VantageLDAPService extends mixinHttp(class {
}, {
    baseUrl: '/api/user/ldap/config',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
}) {
    /**
     * @param {?=} response
     * @return {?}
     */
    query(response) {
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
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    test(body, response) {
        return response.pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return res.status === 200;
        })));
    }
}
VantageLDAPService.decorators = [
    { type: Injectable }
];
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
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_LDAP_PROVIDER_FACTORY(parent) {
    return parent || new VantageLDAPService();
}
/** @type {?} */
export const VANTAGE_LDAP_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageLDAPService,
    deps: [[new Optional(), new SkipSelf(), VantageLDAPService]],
    useFactory: VANTAGE_LDAP_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbImxkYXAvbGRhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFHeEcsTUFBTyxNQUFNOzs7Ozs7QUFHZixpQ0FrQkM7OztJQWpCQyxxQ0FBMEI7O0lBQzFCLDhCQUFpQjs7SUFDakIsZ0NBQW1COztJQUNuQixvQ0FBdUI7O0lBQ3ZCLGtDQUFxQjs7SUFDckIsaUNBQTRCOztJQUM1QixxQ0FBd0I7O0lBQ3hCLHFDQUF3Qjs7SUFDeEIsK0JBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIsaUNBQW9COztJQUNwQiwyQkFBYzs7SUFDZCxrQ0FBcUI7O0lBQ3JCLGtDQUFxQjs7SUFDckIsNkJBQWdCOztJQUNoQiwwQkFBYTs7QUFJZixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBUyxDQUFDO0NBQVEsRUFBRTtJQUMxRCxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0NBQzdELENBQUM7Ozs7O0lBSUEsS0FBSyxDQUFlLFFBQW9DO1FBQ3RELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBVyxJQUFpQixFQUFnQixRQUFrQztRQUNsRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBS0QsTUFBTSxDQUNXLEVBQW1CLEVBQ3hCLElBQWlCLEVBQ2IsUUFBa0M7UUFFaEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFnQixFQUFtQixFQUFnQixRQUEyQjtRQUNsRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFRRCxJQUFJLENBQVcsSUFBaUIsRUFBZ0IsUUFBOEI7UUFDNUUsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQWpERixVQUFVOztBQVFUO0lBSEMsS0FBSyxDQUFDO1FBQ0wsSUFBSSxFQUFFLEdBQUc7S0FDVixDQUFDO0lBQ0ssV0FBQSxVQUFVLEVBQUUsQ0FBQTs7cUNBQVksVUFBVTtvQ0FBa0IsVUFBVTsrQ0FFcEU7QUFLRDtJQUhDLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUNNLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBcUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBZ0IsVUFBVTtnREFFaEc7QUFLRDtJQUhDLE9BQU8sQ0FBQztRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUVDLFdBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2IsV0FBQSxNQUFNLEVBQUUsQ0FBQTtJQUNSLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FEQUFZLFVBQVU7b0NBQ2xDLFVBQVU7Z0RBRVo7QUFLRDtJQUhDLFFBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUNNLFdBQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQXVCLFdBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7b0NBQVMsVUFBVTtnREFFaEc7QUFRRDtJQU5DLE1BQU0sQ0FBQztRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLFVBQVU7U0FDcEI7S0FDRixDQUFDO0lBQ0ksV0FBQSxNQUFNLEVBQUUsQ0FBQSxFQUFxQixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFZLFVBQVU7OENBTTFGOzs7OztBQUdILE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRQT1NULCBUZFBBVENILCBUZERFTEVURSwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBMREFQRW5jcmlwdGlvbiB7XG4gIE5vbmUgPSAnTk9ORScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxEQVBDb25maWcge1xuICBhbGxvd2VkX2dyb3Vwcz86IHN0cmluZ1tdO1xuICBiYXNlX2RuPzogc3RyaW5nO1xuICBjb25maWdfaWQ/OiBudW1iZXI7XG4gIGNvbm5lY3Rpb25Vcmw/OiBzdHJpbmc7XG4gIGVtYWlsX2ZpZWxkPzogc3RyaW5nO1xuICBlbmNyeXB0aW9uPzogTERBUEVuY3JpcHRpb247XG4gIGdyb3VwX2lkX2ZpZWxkPzogc3RyaW5nO1xuICBncm91cHNfYmFzZV9kbj86IHN0cmluZztcbiAgaWRfZmllbGQ/OiBzdHJpbmc7XG4gIG1lbWJlcl9maWVsZD86IHN0cmluZztcbiAgbWVtYmVyX29mX2ZpZWxkPzogc3RyaW5nO1xuICBuYW1lX2ZpZWxkPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzZWFyY2hfcGFzcz86IHN0cmluZztcbiAgc2VhcmNoX3VzZXI/OiBzdHJpbmc7XG4gIHNlcnZlcj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUxEQVBTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXIvbGRhcC9jb25maWcnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy8nLFxuICB9KVxuICBxdWVyeShAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZ1tdPik6IE9ic2VydmFibGU8SUxEQVBDb25maWdbXT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUxEQVBDb25maWc+KTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgIEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4sXG4gICk6IE9ic2VydmFibGU8SUxEQVBDb25maWc+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvOmlkJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcgfCBudW1iZXIsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy92ZXJpZnknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgdGVzdChAVGRCb2R5KCkgYm9keTogSUxEQVBDb25maWcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzID09PSAyMDA7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0xEQVBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VMREFQU2VydmljZSk6IFZhbnRhZ2VMREFQU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VMREFQU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9MREFQX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUxEQVBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUxEQVBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfTERBUF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==