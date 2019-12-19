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
let VantageLDAPService = class VantageLDAPService {
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
export { VantageLDAPService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbImxkYXAvbGRhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFTLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztJQUc1RyxNQUFPLE1BQU07Ozs7OztBQUdmLGlDQWtCQzs7O0lBakJDLHFDQUEwQjs7SUFDMUIsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLG9DQUF1Qjs7SUFDdkIsa0NBQXFCOztJQUNyQixpQ0FBNEI7O0lBQzVCLHFDQUF3Qjs7SUFDeEIscUNBQXdCOztJQUN4QiwrQkFBa0I7O0lBQ2xCLG1DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixpQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLGtDQUFxQjs7SUFDckIsa0NBQXFCOztJQUNyQiw2QkFBZ0I7O0lBQ2hCLDBCQUFhOztJQU9GLGtCQUFrQixTQUFsQixrQkFBa0I7Ozs7O0lBSTdCLEtBQUssQ0FBZSxRQUFvQztRQUN0RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQVcsSUFBaUIsRUFBZ0IsUUFBa0M7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7OztJQUtELE1BQU0sQ0FDVyxFQUFtQixFQUN4QixJQUFpQixFQUNiLFFBQWtDO1FBRWhELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBZ0IsRUFBbUIsRUFBZ0IsUUFBMkI7UUFDbEYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBUUQsSUFBSSxDQUFXLElBQWlCLEVBQWdCLFFBQThCO1FBQzVFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTFDQztJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUNLLFdBQUEsVUFBVSxFQUFFLENBQUE7O3FDQUFZLFVBQVU7b0NBQWtCLFVBQVU7K0NBRXBFO0FBS0Q7SUFIQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsR0FBRztLQUNWLENBQUM7SUFDTSxXQUFBLE1BQU0sRUFBRSxDQUFBLEVBQXFCLFdBQUEsVUFBVSxFQUFFLENBQUE7OzZDQUFZLFVBQVU7b0NBQWdCLFVBQVU7Z0RBRWhHO0FBS0Q7SUFIQyxPQUFPLENBQUM7UUFDUCxJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFFQyxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLFdBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixXQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVO29DQUNsQyxVQUFVO2dEQUVaO0FBS0Q7SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFDTSxXQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUF1QixXQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVO29DQUFTLFVBQVU7Z0RBRWhHO0FBUUQ7SUFOQyxNQUFNLENBQUM7UUFDTixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxVQUFVO1NBQ3BCO0tBQ0YsQ0FBQztJQUNJLFdBQUEsTUFBTSxFQUFFLENBQUEsRUFBcUIsV0FBQSxVQUFVLEVBQUUsQ0FBQTs7NkNBQVksVUFBVTtvQ0FBWSxVQUFVOzhDQU0xRjtBQTdDVSxrQkFBa0I7SUFKOUIsTUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUM3RCxDQUFDO0dBQ1csa0JBQWtCLENBOEM5QjtTQTlDWSxrQkFBa0I7Ozs7O0FBZ0QvQixNQUFNLFVBQVUsNkJBQTZCLENBQUMsTUFBMEI7SUFDdEUsT0FBTyxNQUFNLElBQUksSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQzVDLENBQUM7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQixHQUFhOztJQUU3QyxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDNUQsVUFBVSxFQUFFLDZCQUE2QjtDQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRHRVQsIFRkUFVULCBUZFBPU1QsIFRkUEFUQ0gsIFRkREVMRVRFLCBUZFBhcmFtLCBUZEJvZHksIFRkUmVzcG9uc2UgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmV4cG9ydCBlbnVtIExEQVBFbmNyaXB0aW9uIHtcbiAgTm9uZSA9ICdOT05FJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTERBUENvbmZpZyB7XG4gIGFsbG93ZWRfZ3JvdXBzPzogc3RyaW5nW107XG4gIGJhc2VfZG4/OiBzdHJpbmc7XG4gIGNvbmZpZ19pZD86IG51bWJlcjtcbiAgY29ubmVjdGlvblVybD86IHN0cmluZztcbiAgZW1haWxfZmllbGQ/OiBzdHJpbmc7XG4gIGVuY3J5cHRpb24/OiBMREFQRW5jcmlwdGlvbjtcbiAgZ3JvdXBfaWRfZmllbGQ/OiBzdHJpbmc7XG4gIGdyb3Vwc19iYXNlX2RuPzogc3RyaW5nO1xuICBpZF9maWVsZD86IHN0cmluZztcbiAgbWVtYmVyX2ZpZWxkPzogc3RyaW5nO1xuICBtZW1iZXJfb2ZfZmllbGQ/OiBzdHJpbmc7XG4gIG5hbWVfZmllbGQ/OiBzdHJpbmc7XG4gIHBvcnQ/OiBudW1iZXI7XG4gIHNlYXJjaF9wYXNzPzogc3RyaW5nO1xuICBzZWFyY2hfdXNlcj86IHN0cmluZztcbiAgc2VydmVyPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS91c2VyL2xkYXAvY29uZmlnJyxcbiAgYmFzZUhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlTERBUFNlcnZpY2Uge1xuICBAVGRHRVQoe1xuICAgIHBhdGg6ICcvJyxcbiAgfSlcbiAgcXVlcnkoQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUxEQVBDb25maWdbXT4pOiBPYnNlcnZhYmxlPElMREFQQ29uZmlnW10+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQT1NUKHtcbiAgICBwYXRoOiAnLycsXG4gIH0pXG4gIGNyZWF0ZShAVGRCb2R5KCkgYm9keTogSUxEQVBDb25maWcsIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElMREFQQ29uZmlnPik6IE9ic2VydmFibGU8SUxEQVBDb25maWc+IHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBAVGRQQVRDSCh7XG4gICAgcGF0aDogJy86aWQnLFxuICB9KVxuICB1cGRhdGUoXG4gICAgQFRkUGFyYW0oJ2lkJykgaWQ6IHN0cmluZyB8IG51bWJlcixcbiAgICBAVGRCb2R5KCkgYm9keTogSUxEQVBDb25maWcsXG4gICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUxEQVBDb25maWc+LFxuICApOiBPYnNlcnZhYmxlPElMREFQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTx2b2lkPik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBPU1Qoe1xuICAgIHBhdGg6ICcvdmVyaWZ5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHRlc3QoQFRkQm9keSgpIGJvZHk6IElMREFQQ29uZmlnLCBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxib29sZWFuPik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyA9PT0gMjAwO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9MREFQX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlTERBUFNlcnZpY2UpOiBWYW50YWdlTERBUFNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlTERBUFNlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfTERBUF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VMREFQU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VMREFQU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX0xEQVBfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=