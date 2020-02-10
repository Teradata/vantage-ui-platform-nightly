/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mixinHttp, TdGET, TdPOST, TdPATCH, TdDELETE, TdParam, TdBody, TdResponse } from '@covalent/http';
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
var VantageLDAPService = /** @class */ (function (_super) {
    __extends(VantageLDAPService, _super);
    function VantageLDAPService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    return VantageLDAPService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/user/ldap/config',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbImxkYXAvbGRhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUFHeEcsTUFBTyxNQUFNOzs7Ozs7QUFHZixpQ0FrQkM7OztJQWpCQyxxQ0FBMEI7O0lBQzFCLDhCQUFpQjs7SUFDakIsZ0NBQW1COztJQUNuQixvQ0FBdUI7O0lBQ3ZCLGtDQUFxQjs7SUFDckIsaUNBQTRCOztJQUM1QixxQ0FBd0I7O0lBQ3hCLHFDQUF3Qjs7SUFDeEIsK0JBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLHNDQUF5Qjs7SUFDekIsaUNBQW9COztJQUNwQiwyQkFBYzs7SUFDZCxrQ0FBcUI7O0lBQ3JCLGtDQUFxQjs7SUFDckIsNkJBQWdCOztJQUNoQiwwQkFBYTs7QUFHZjtJQUN3QyxzQ0FHdEM7SUFKRjs7SUFrREEsQ0FBQzs7Ozs7SUExQ0Msa0NBQUs7Ozs7SUFBTCxVQUFvQixRQUFvQztRQUN0RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxtQ0FBTTs7Ozs7SUFBTixVQUFpQixJQUFpQixFQUFnQixRQUFrQztRQUNsRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBS0QsbUNBQU07Ozs7OztJQUFOLFVBQ2lCLEVBQW1CLEVBQ3hCLElBQWlCLEVBQ2IsUUFBa0M7UUFFaEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBS0QsbUNBQU07Ozs7O0lBQU4sVUFBc0IsRUFBbUIsRUFBZ0IsUUFBMkI7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBUUQsaUNBQUk7Ozs7O0lBQUosVUFBZSxJQUFpQixFQUFnQixRQUE4QjtRQUM1RSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQVE7WUFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFqREYsVUFBVTs7SUFRVDtRQUhDLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQztRQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3lDQUFZLFVBQVU7d0NBQWtCLFVBQVU7bURBRXBFO0lBS0Q7UUFIQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsR0FBRztTQUNWLENBQUM7UUFDTSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXFCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQWdCLFVBQVU7b0RBRWhHO0lBS0Q7UUFIQyxPQUFPLENBQUM7WUFDUCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7UUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7UUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOzt5REFBWSxVQUFVO3dDQUNsQyxVQUFVO29EQUVaO0lBS0Q7UUFIQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7UUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOztpREFBWSxVQUFVO3dDQUFTLFVBQVU7b0RBRWhHO0lBUUQ7UUFOQyxNQUFNLENBQUM7WUFDTixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsVUFBVTthQUNwQjtTQUNGLENBQUM7UUFDSSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXFCLFdBQUEsVUFBVSxFQUFFLENBQUE7O2lEQUFZLFVBQVU7d0NBQVksVUFBVTtrREFNMUY7SUFDSCx5QkFBQztDQUFBLEFBbERELENBQ3dDLFNBQVM7SUFBQztJQUFPLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUFSLEtBQVU7SUFDMUQsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQyxXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDLEdBOENEO1NBakRZLGtCQUFrQjs7Ozs7QUFtRC9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZEdFVCwgVGRQT1NULCBUZFBBVENILCBUZERFTEVURSwgVGRQYXJhbSwgVGRCb2R5LCBUZFJlc3BvbnNlIH0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBMREFQRW5jcmlwdGlvbiB7XG4gIE5vbmUgPSAnTk9ORScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxEQVBDb25maWcge1xuICBhbGxvd2VkX2dyb3Vwcz86IHN0cmluZ1tdO1xuICBiYXNlX2RuPzogc3RyaW5nO1xuICBjb25maWdfaWQ/OiBudW1iZXI7XG4gIGNvbm5lY3Rpb25Vcmw/OiBzdHJpbmc7XG4gIGVtYWlsX2ZpZWxkPzogc3RyaW5nO1xuICBlbmNyeXB0aW9uPzogTERBUEVuY3JpcHRpb247XG4gIGdyb3VwX2lkX2ZpZWxkPzogc3RyaW5nO1xuICBncm91cHNfYmFzZV9kbj86IHN0cmluZztcbiAgaWRfZmllbGQ/OiBzdHJpbmc7XG4gIG1lbWJlcl9maWVsZD86IHN0cmluZztcbiAgbWVtYmVyX29mX2ZpZWxkPzogc3RyaW5nO1xuICBuYW1lX2ZpZWxkPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzZWFyY2hfcGFzcz86IHN0cmluZztcbiAgc2VhcmNoX3VzZXI/OiBzdHJpbmc7XG4gIHNlcnZlcj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFudGFnZUxEQVBTZXJ2aWNlIGV4dGVuZHMgbWl4aW5IdHRwKGNsYXNzIHt9LCB7XG4gIGJhc2VVcmw6ICcvYXBpL3VzZXIvbGRhcC9jb25maWcnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy8nLFxuICB9KVxuICBxdWVyeShAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZ1tdPik6IE9ic2VydmFibGU8SUxEQVBDb25maWdbXT4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvJyxcbiAgfSlcbiAgY3JlYXRlKEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZywgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUxEQVBDb25maWc+KTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShcbiAgICBAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgIEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4sXG4gICk6IE9ic2VydmFibGU8SUxEQVBDb25maWc+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRERUxFVEUoe1xuICAgIHBhdGg6ICcvOmlkJyxcbiAgfSlcbiAgZGVsZXRlKEBUZFBhcmFtKCdpZCcpIGlkOiBzdHJpbmcgfCBudW1iZXIsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy92ZXJpZnknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgdGVzdChAVGRCb2R5KCkgYm9keTogSUxEQVBDb25maWcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBpcGUoXG4gICAgICBtYXAoKHJlczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzID09PSAyMDA7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWQU5UQUdFX0xEQVBfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFZhbnRhZ2VMREFQU2VydmljZSk6IFZhbnRhZ2VMREFQU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFZhbnRhZ2VMREFQU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9MREFQX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZUxEQVBTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVmFudGFnZUxEQVBTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IFZBTlRBR0VfTERBUF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiJdfQ==