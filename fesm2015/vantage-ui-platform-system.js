import { Optional, SkipSelf, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __decorate, __param, __metadata } from 'tslib';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TdGET, TdResponse, TdQueryParams, TdParam, TdPOST, TdBody, TdPUT, TdDELETE, TdHttp } from '@covalent/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SystemType = {
    Teradata: 'TERADATA',
    Aster: 'ASTER',
    Presto: 'PRESTO',
};
/** @type {?} */
const VANTAGE_SYSTEMS_TYPES = [
    SystemType.Teradata,
    SystemType.Aster,
    SystemType.Presto,
];
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
    __param(0, TdParam('id')),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "get", null);
__decorate([
    TdPOST({
        path: '/systems',
    }),
    __param(0, TdBody()),
    __param(1, TdResponse()),
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
    __param(0, TdParam('id')),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "delete", null);
__decorate([
    TdPOST({
        path: '/testsystem',
    }),
    __param(0, TdBody()),
    __param(1, TdResponse()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Observable]),
    __metadata("design:returntype", Observable)
], VantageSystemService.prototype, "test", null);
VantageSystemService = __decorate([
    TdHttp({
        baseUrl: '/api/system',
        baseHeaders: new HttpHeaders({ 'Accept': 'application/json' }),
    })
], VantageSystemService);
/**
 * @param {?} parent
 * @return {?}
 */
function VANTAGE_SYSTEM_PROVIDER_FACTORY(parent) {
    return parent || new VantageSystemService();
}
/** @type {?} */
const VANTAGE_SYSTEM_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSystemService,
    deps: [[new Optional(), new SkipSelf(), VantageSystemService]],
    useFactory: VANTAGE_SYSTEM_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VantageSystemModule {
}
VantageSystemModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                providers: [
                    VANTAGE_SYSTEM_PROVIDER,
                ],
            },] }
];

export { SystemType, VANTAGE_SYSTEMS_TYPES, VantageSystemModule, VantageSystemService, VANTAGE_SYSTEM_PROVIDER_FACTORY as ɵa, VANTAGE_SYSTEM_PROVIDER as ɵb };
//# sourceMappingURL=vantage-ui-platform-system.js.map
