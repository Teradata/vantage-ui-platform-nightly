/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, SkipSelf } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TdHttp, TdGET, TdPOST, TdPATCH, TdDELETE, TdParam, TdBody, TdResponse, } from '@covalent/http';
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
            return res.status === 200 ? true : false;
        })));
    }
};
tslib_1.__decorate([
    TdGET({
        path: '/',
    }),
    tslib_1.__param(0, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "query", null);
tslib_1.__decorate([
    TdPOST({
        path: '/',
    }),
    tslib_1.__param(0, TdBody()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "create", null);
tslib_1.__decorate([
    TdPATCH({
        path: '/:id',
    }),
    tslib_1.__param(0, TdParam('id')),
    tslib_1.__param(1, TdBody()),
    tslib_1.__param(2, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "update", null);
tslib_1.__decorate([
    TdDELETE({
        path: '/:id',
    }),
    tslib_1.__param(0, TdParam('id')),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "delete", null);
tslib_1.__decorate([
    TdPOST({
        path: '/verify',
        options: {
            observe: 'response',
        },
    }),
    tslib_1.__param(0, TdBody()),
    tslib_1.__param(1, TdResponse()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Observable]),
    tslib_1.__metadata("design:returntype", Observable)
], VantageLDAPService.prototype, "test", null);
VantageLDAPService = tslib_1.__decorate([
    TdHttp({
        baseUrl: '/api/user/ldap/config',
        baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRhcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vdXNlci8iLCJzb3VyY2VzIjpbImxkYXAvbGRhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixPQUFPLEVBQ1AsUUFBUSxFQUNSLE9BQU8sRUFDUCxNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7OztJQUd0QixNQUFPLE1BQU07Ozs7OztBQUdmLGlDQWtCQzs7O0lBakJDLHFDQUEwQjs7SUFDMUIsOEJBQWlCOztJQUNqQixnQ0FBbUI7O0lBQ25CLG9DQUF1Qjs7SUFDdkIsa0NBQXFCOztJQUNyQixpQ0FBNEI7O0lBQzVCLHFDQUF3Qjs7SUFDeEIscUNBQXdCOztJQUN4QiwrQkFBa0I7O0lBQ2xCLG1DQUFzQjs7SUFDdEIsc0NBQXlCOztJQUN6QixpQ0FBb0I7O0lBQ3BCLDJCQUFjOztJQUNkLGtDQUFxQjs7SUFDckIsa0NBQXFCOztJQUNyQiw2QkFBZ0I7O0lBQ2hCLDBCQUFhOztJQU9GLGtCQUFrQixTQUFsQixrQkFBa0I7Ozs7O0lBSzdCLEtBQUssQ0FBZSxRQUFvQztRQUN0RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFLRCxNQUFNLENBQVcsSUFBaUIsRUFDYixRQUFrQztRQUNyRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBS0QsTUFBTSxDQUFnQixFQUFtQixFQUN2QixJQUFpQixFQUNiLFFBQWtDO1FBQ3RELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUtELE1BQU0sQ0FBZ0IsRUFBbUIsRUFDbkIsUUFBMkI7UUFDL0MsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBUUQsSUFBSSxDQUFXLElBQWlCLEVBQ2IsUUFBOEI7UUFDL0MsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTNDQztJQUhDLEtBQUssQ0FBQztRQUNMLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQztJQUNLLG1CQUFBLFVBQVUsRUFBRSxDQUFBOzs2Q0FBWSxVQUFVOzRDQUFrQixVQUFVOytDQUVwRTtBQUtEO0lBSEMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLEdBQUc7S0FDVixDQUFDO0lBQ00sbUJBQUEsTUFBTSxFQUFFLENBQUE7SUFDUixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7cURBQVksVUFBVTs0Q0FBZ0IsVUFBVTtnREFFbkU7QUFLRDtJQUhDLE9BQU8sQ0FBQztRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQztJQUNNLG1CQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNaLG1CQUFBLE1BQU0sRUFBRSxDQUFBO0lBQ1IsbUJBQUEsVUFBVSxFQUFFLENBQUE7OzZEQUFZLFVBQVU7NENBQWdCLFVBQVU7Z0RBRXBFO0FBS0Q7SUFIQyxRQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsTUFBTTtLQUNiLENBQUM7SUFDTSxtQkFBQSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDWixtQkFBQSxVQUFVLEVBQUUsQ0FBQTs7cURBQVksVUFBVTs0Q0FBUyxVQUFVO2dEQUU3RDtBQVFEO0lBTkMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGLENBQUM7SUFDSSxtQkFBQSxNQUFNLEVBQUUsQ0FBQTtJQUNSLG1CQUFBLFVBQVUsRUFBRSxDQUFBOztxREFBWSxVQUFVOzRDQUFZLFVBQVU7OENBTTdEO0FBL0NVLGtCQUFrQjtJQUo5QixNQUFNLENBQUM7UUFDTixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQy9ELENBQUM7R0FDVyxrQkFBa0IsQ0FnRDlCO1NBaERZLGtCQUFrQjs7Ozs7QUFrRC9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgVGRIdHRwLFxuICBUZEdFVCxcbiAgVGRQVVQsXG4gIFRkUE9TVCxcbiAgVGRQQVRDSCxcbiAgVGRERUxFVEUsXG4gIFRkUGFyYW0sXG4gIFRkQm9keSxcbiAgVGRSZXNwb25zZSxcbn0gZnJvbSAnQGNvdmFsZW50L2h0dHAnO1xuXG5leHBvcnQgZW51bSBMREFQRW5jcmlwdGlvbiB7XG4gIE5vbmUgPSAnTk9ORScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxEQVBDb25maWcge1xuICBhbGxvd2VkX2dyb3Vwcz86IHN0cmluZ1tdO1xuICBiYXNlX2RuPzogc3RyaW5nO1xuICBjb25maWdfaWQ/OiBudW1iZXI7XG4gIGNvbm5lY3Rpb25Vcmw/OiBzdHJpbmc7XG4gIGVtYWlsX2ZpZWxkPzogc3RyaW5nO1xuICBlbmNyeXB0aW9uPzogTERBUEVuY3JpcHRpb247XG4gIGdyb3VwX2lkX2ZpZWxkPzogc3RyaW5nO1xuICBncm91cHNfYmFzZV9kbj86IHN0cmluZztcbiAgaWRfZmllbGQ/OiBzdHJpbmc7XG4gIG1lbWJlcl9maWVsZD86IHN0cmluZztcbiAgbWVtYmVyX29mX2ZpZWxkPzogc3RyaW5nO1xuICBuYW1lX2ZpZWxkPzogc3RyaW5nO1xuICBwb3J0PzogbnVtYmVyO1xuICBzZWFyY2hfcGFzcz86IHN0cmluZztcbiAgc2VhcmNoX3VzZXI/OiBzdHJpbmc7XG4gIHNlcnZlcj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5AVGRIdHRwKHtcbiAgYmFzZVVybDogJy9hcGkvdXNlci9sZGFwL2NvbmZpZycsXG4gIGJhc2VIZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxufSlcbmV4cG9ydCBjbGFzcyBWYW50YWdlTERBUFNlcnZpY2Uge1xuICBcbiAgQFRkR0VUKHtcbiAgICBwYXRoOiAnLycsXG4gIH0pXG4gIHF1ZXJ5KEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPElMREFQQ29uZmlnW10+KTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZ1tdPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy8nLFxuICB9KVxuICBjcmVhdGUoQFRkQm9keSgpIGJvZHk6IElMREFQQ29uZmlnLFxuICAgICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8SUxEQVBDb25maWc+KTogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4ge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBUZFBBVENIKHtcbiAgICBwYXRoOiAnLzppZCcsXG4gIH0pXG4gIHVwZGF0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgICAgICAgIEBUZEJvZHkoKSBib2R5OiBJTERBUENvbmZpZyxcbiAgICAgICAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxJTERBUENvbmZpZz4pOiBPYnNlcnZhYmxlPElMREFQQ29uZmlnPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkREVMRVRFKHtcbiAgICBwYXRoOiAnLzppZCcsXG4gIH0pXG4gIGRlbGV0ZShAVGRQYXJhbSgnaWQnKSBpZDogc3RyaW5nIHwgbnVtYmVyLFxuICAgICAgICAgIEBUZFJlc3BvbnNlKCkgcmVzcG9uc2U/OiBPYnNlcnZhYmxlPHZvaWQ+KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQFRkUE9TVCh7XG4gICAgcGF0aDogJy92ZXJpZnknLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgfSxcbiAgfSlcbiAgdGVzdChAVGRCb2R5KCkgYm9keTogSUxEQVBDb25maWcsXG4gICAgICAgQFRkUmVzcG9uc2UoKSByZXNwb25zZT86IE9ic2VydmFibGU8Ym9vbGVhbj4pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gcmVzcG9uc2UucGlwZShcbiAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMgPT09IDIwMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZBTlRBR0VfTERBUF9QUk9WSURFUl9GQUNUT1JZKHBhcmVudDogVmFudGFnZUxEQVBTZXJ2aWNlKTogVmFudGFnZUxEQVBTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVmFudGFnZUxEQVBTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBWQU5UQUdFX0xEQVBfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBWYW50YWdlTERBUFNlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlTERBUFNlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9MREFQX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19