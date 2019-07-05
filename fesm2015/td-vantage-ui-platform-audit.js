import { Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate, __param, __metadata } from 'tslib';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TdGET, TdQueryParams, TdResponse, TdPOST, TdBody, TdParam, TdHttp } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let VantageAuditService = class VantageAuditService {
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
     * @param {?} body
     * @param {?=} response
     * @return {?}
     */
    create(body, response) {
        return response;
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
};
__decorate([
    TdGET({
        path: '/audit/messages',
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
], VantageAuditService.prototype, "query", null);
__decorate([
    TdPOST({
        path: '/audit/messages',
    }),
    __param(0, TdBody()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "create", null);
__decorate([
    TdGET({
        path: '/audit/messages/:id',
    }),
    __param(0, TdParam('id')),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "get", null);
__decorate([
    TdGET({
        path: '/health',
    }),
    __param(0, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Observable]),
    __metadata("design:returntype", Observable)
], VantageAuditService.prototype, "health", null);
VantageAuditService = __decorate([
    TdHttp({
        baseUrl: '/api/audit',
        baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
    })
], VantageAuditService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_AUDIT_PROVIDER_FACTORY(parent) {
    return parent || new VantageAuditService();
}
/** @type {?} */
const VANTAGE_AUDIT_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageAuditService,
    deps: [[new Optional(), new SkipSelf(), VantageAuditService]],
    useFactory: VANTAGE_AUDIT_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageAuditModule {
}
VantageAuditModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                providers: [
                    VANTAGE_AUDIT_PROVIDER,
                ],
            },] }
];

export { VantageAuditModule, VantageAuditService, VANTAGE_AUDIT_PROVIDER_FACTORY as ɵa, VANTAGE_AUDIT_PROVIDER as ɵb };
//# sourceMappingURL=td-vantage-ui-platform-audit.js.map
