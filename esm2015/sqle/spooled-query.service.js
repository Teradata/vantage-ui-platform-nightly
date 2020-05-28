/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, expand, map, mapTo, skipWhile, switchMap, take, tap } from 'rxjs/operators';
import { BehaviorSubject, of, throwError, timer } from 'rxjs';
import { VantageConnectionService } from './connection.service';
import { VantageQueryService } from './query.service';
/**
 * @record
 */
function ISpooledQueryError() { }
if (false) {
    /** @type {?} */
    ISpooledQueryError.prototype.id;
    /** @type {?} */
    ISpooledQueryError.prototype.detailMessage;
}
/** @type {?} */
const MAX_INTERVAL = 10000;
/** @type {?} */
const BASE_INTERVAL = 2000;
/** @enum {string} */
const SpooledQueryState = {
    QUEUED: 'QUEUED',
    PENDING: 'PENDING',
    SUBMITTED: 'SUBMITTED',
    RESPONDING: 'RESPONDING',
    SPOOLING: 'SPOOLING',
    RESULT_SET_READY: 'RESULT_SET_READY',
};
export class VantageSpooledQueryService {
    /**
     * @param {?} connectionService
     * @param {?} queryService
     * @param {?} translate
     */
    constructor(connectionService, queryService, translate) {
        this.connectionService = connectionService;
        this.queryService = queryService;
        this.translate = translate;
        this.queryStatus = new BehaviorSubject(undefined);
        this.queryStatus$ = this.queryStatus.asObservable();
        this.queryStack = [];
    }
    /**
     * @return {?}
     */
    cancelLastQuery() {
        /** @type {?} */
        const thisQuery = this.queryStack.pop();
        return this.deleteSpooledQuery(thisQuery);
    }
    /**
     * @return {?}
     */
    getRunningInfo() {
        return this.queryStatus$;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    querySystem(payload) {
        return this.queryService
            .querySystem(this.connectionService.currentConnection, Object.assign(Object.assign({}, payload), { spooledResultSet: true }))
            .pipe(tap((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.queryStack.push(res.id))), switchMap((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.exponentialBackOffInterval(MAX_INTERVAL, res.id))), switchMap((/**
         * @param {?} id
         * @return {?}
         */
        (id) => this.queryService.getQuery(this.connectionService.currentConnection, id.toString()).pipe(map((/**
         * @param {?} query
         * @return {?}
         */
        (query) => query.queryState)), tap((/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.queryStatus.next(val))), map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => [id, val]))))), skipWhile((/**
         * @param {?} __0
         * @return {?}
         */
        ([id, status]) => status !== SpooledQueryState.RESULT_SET_READY)), take(1), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([id]) => this.queryService.getQueryResult(this.connectionService.currentConnection, id).pipe(map((/**
         * @param {?} val
         * @return {?}
         */
        (val) => [id, val])), tap((/**
         * @return {?}
         */
        () => this.queryStack.pop())), catchError((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            return throwError((/** @type {?} */ (Object.assign(Object.assign(Object.assign({}, res), { id }), { detailMessage: `Error ${res.error.error}: ${res.error.message}` }))));
        }))))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([id, results]) => results)));
    }
    /**
     * @param {?} maxInterval
     * @param {?} returnVal
     * @return {?}
     */
    exponentialBackOffInterval(maxInterval, returnVal) {
        return of(0).pipe(expand((/**
         * @param {?} iteration
         * @return {?}
         */
        (iteration) => timer(this.calcInterval(iteration, maxInterval)).pipe(mapTo(iteration + 1)))), mapTo(returnVal));
    }
    /**
     * @param {?} iteration
     * @param {?} maxInterval
     * @return {?}
     */
    calcInterval(iteration, maxInterval) {
        /** @type {?} */
        const expo = 1.4;
        /** @type {?} */
        const interval = Math.pow(expo, iteration) * BASE_INTERVAL;
        return Math.min(interval, maxInterval);
    }
    /**
     * @param {?} queryId
     * @return {?}
     */
    deleteSpooledQuery(queryId) {
        this.queryService
            .deleteQuery(this.connectionService.currentConnection, queryId)
            .subscribe(undefined, (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            throw new Error(this.translate.instant('SPOOLED_QUERY_COULD_NOT_BE_DELETED', { error: JSON.stringify(err) }));
        }));
    }
}
VantageSpooledQueryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
VantageSpooledQueryService.ctorParameters = () => [
    { type: VantageConnectionService },
    { type: VantageQueryService },
    { type: TranslateService }
];
if (false) {
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStatus;
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStatus$;
    /** @type {?} */
    VantageSpooledQueryService.prototype.queryStack;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.connectionService;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.queryService;
    /**
     * @type {?}
     * @private
     */
    VantageSpooledQueryService.prototype.translate;
}
/**
 * @param {?} parent
 * @param {?} connectionService
 * @param {?} queryService
 * @param {?} translate
 * @return {?}
 */
export function VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY(parent, connectionService, queryService, translate) {
    return parent || new VantageSpooledQueryService(connectionService, queryService, translate);
}
/** @type {?} */
export const VANTAGE_SPOOLED_QUERY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageSpooledQueryService,
    deps: [
        [new Optional(), new SkipSelf(), VantageSpooledQueryService],
        VantageConnectionService,
        VantageQueryService,
        TranslateService,
    ],
    useFactory: VANTAGE_SPOOLED_QUERY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bvb2xlZC1xdWVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbInNwb29sZWQtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWtDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFdEYsaUNBR0M7OztJQUZDLGdDQUFXOztJQUNYLDJDQUFzQjs7O01BR2xCLFlBQVksR0FBVyxLQUFLOztNQUM1QixhQUFhLEdBQVcsSUFBSTs7O0lBR2hDLFFBQVMsUUFBUTtJQUNqQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxXQUFXO0lBQ3ZCLFlBQWEsWUFBWTtJQUN6QixVQUFXLFVBQVU7SUFDckIsa0JBQW1CLGtCQUFrQjs7QUFJdkMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBSXJDLFlBQ1UsaUJBQTJDLEVBQzNDLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTnJDLGdCQUFX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QUFNLFVBQVUsc0NBQXNDLENBQ3BELE1BQWtDLEVBQ2xDLGlCQUEyQyxFQUMzQyxZQUFpQyxFQUNqQyxTQUEyQjtJQUUzQixPQUFPLE1BQU0sSUFBSSxJQUFJLDBCQUEwQixDQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM5RixDQUFDOztBQUVELE1BQU0sT0FBTyw4QkFBOEIsR0FBYTs7SUFFdEQsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQyxJQUFJLEVBQUU7UUFDSixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSwwQkFBMEIsQ0FBQztRQUM1RCx3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtLQUNqQjtJQUNELFVBQVUsRUFBRSxzQ0FBc0M7Q0FDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4cGFuZCwgbWFwLCBtYXBUbywgc2tpcFdoaWxlLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2Nvbm5lY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBWYW50YWdlUXVlcnlTZXJ2aWNlLCBJUXVlcnlQYXlsb2FkLCBJUXVlcnlSZXN1bHRTZXQgfSBmcm9tICcuL3F1ZXJ5LnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgSVNwb29sZWRRdWVyeUVycm9yIGV4dGVuZHMgSHR0cEVycm9yUmVzcG9uc2Uge1xuICBpZDogc3RyaW5nO1xuICBkZXRhaWxNZXNzYWdlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1BWF9JTlRFUlZBTDogbnVtYmVyID0gMTAwMDA7XG5jb25zdCBCQVNFX0lOVEVSVkFMOiBudW1iZXIgPSAyMDAwO1xuXG5lbnVtIFNwb29sZWRRdWVyeVN0YXRlIHtcbiAgUVVFVUVEID0gJ1FVRVVFRCcsXG4gIFBFTkRJTkcgPSAnUEVORElORycsXG4gIFNVQk1JVFRFRCA9ICdTVUJNSVRURUQnLFxuICBSRVNQT05ESU5HID0gJ1JFU1BPTkRJTkcnLFxuICBTUE9PTElORyA9ICdTUE9PTElORycsXG4gIFJFU1VMVF9TRVRfUkVBRFkgPSAnUkVTVUxUX1NFVF9SRUFEWScsXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYW50YWdlU3Bvb2xlZFF1ZXJ5U2VydmljZSB7XG4gIHF1ZXJ5U3RhdHVzOiBCZWhhdmlvclN1YmplY3Q8U3Bvb2xlZFF1ZXJ5U3RhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTcG9vbGVkUXVlcnlTdGF0ZT4odW5kZWZpbmVkKTtcbiAgcXVlcnlTdGF0dXMkOiBPYnNlcnZhYmxlPFNwb29sZWRRdWVyeVN0YXRlPiA9IHRoaXMucXVlcnlTdGF0dXMuYXNPYnNlcnZhYmxlKCk7XG4gIHF1ZXJ5U3RhY2s6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29ubmVjdGlvblNlcnZpY2U6IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHF1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgKSB7fVxuXG4gIGNhbmNlbExhc3RRdWVyeSgpOiB2b2lkIHtcbiAgICBjb25zdCB0aGlzUXVlcnk6IHN0cmluZyA9IHRoaXMucXVlcnlTdGFjay5wb3AoKTtcblxuICAgIHJldHVybiB0aGlzLmRlbGV0ZVNwb29sZWRRdWVyeSh0aGlzUXVlcnkpO1xuICB9XG5cbiAgZ2V0UnVubmluZ0luZm8oKTogT2JzZXJ2YWJsZTxTcG9vbGVkUXVlcnlTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U3RhdHVzJDtcbiAgfVxuXG4gIHF1ZXJ5U3lzdGVtKHBheWxvYWQ6IElRdWVyeVBheWxvYWQpOiBPYnNlcnZhYmxlPElRdWVyeVJlc3VsdFNldD4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VydmljZVxuICAgICAgLnF1ZXJ5U3lzdGVtKHRoaXMuY29ubmVjdGlvblNlcnZpY2UuY3VycmVudENvbm5lY3Rpb24sIHsgLi4ucGF5bG9hZCwgc3Bvb2xlZFJlc3VsdFNldDogdHJ1ZSB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgocmVzOiBhbnkpID0+IHRoaXMucXVlcnlTdGFjay5wdXNoKHJlcy5pZCkpLFxuICAgICAgICBzd2l0Y2hNYXAoKHJlczogYW55KSA9PiB0aGlzLmV4cG9uZW50aWFsQmFja09mZkludGVydmFsKE1BWF9JTlRFUlZBTCwgcmVzLmlkKSksXG4gICAgICAgIHN3aXRjaE1hcCgoaWQ6IG51bWJlcikgPT5cbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VydmljZS5nZXRRdWVyeSh0aGlzLmNvbm5lY3Rpb25TZXJ2aWNlLmN1cnJlbnRDb25uZWN0aW9uLCBpZC50b1N0cmluZygpKS5waXBlKFxuICAgICAgICAgICAgbWFwKChxdWVyeTogYW55KSA9PiBxdWVyeS5xdWVyeVN0YXRlKSxcbiAgICAgICAgICAgIHRhcCgodmFsOiBhbnkpID0+IHRoaXMucXVlcnlTdGF0dXMubmV4dCh2YWwpKSxcbiAgICAgICAgICAgIG1hcCgodmFsOiBhbnkpID0+IFtpZCwgdmFsXSksXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgICAgc2tpcFdoaWxlKChbaWQsIHN0YXR1c106IFtzdHJpbmcsIFNwb29sZWRRdWVyeVN0YXRlXSkgPT4gc3RhdHVzICE9PSBTcG9vbGVkUXVlcnlTdGF0ZS5SRVNVTFRfU0VUX1JFQURZKSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgc3dpdGNoTWFwKChbaWRdOiBbc3RyaW5nLCBTcG9vbGVkUXVlcnlTdGF0ZV0pID0+XG4gICAgICAgICAgdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnlSZXN1bHQodGhpcy5jb25uZWN0aW9uU2VydmljZS5jdXJyZW50Q29ubmVjdGlvbiwgaWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKHZhbDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiBbaWQsIHZhbF0pLFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMucXVlcnlTdGFjay5wb3AoKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgICAgICAgLi4ueyBpZCB9LFxuICAgICAgICAgICAgICAgIGRldGFpbE1lc3NhZ2U6IGBFcnJvciAke3Jlcy5lcnJvci5lcnJvcn06ICR7cmVzLmVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICAgICAgfSBhcyBJU3Bvb2xlZFF1ZXJ5RXJyb3IpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbaWQsIHJlc3VsdHNdOiBbc3RyaW5nLCBJUXVlcnlSZXN1bHRTZXRdKSA9PiByZXN1bHRzKSxcbiAgICAgICk7XG4gIH1cblxuICBleHBvbmVudGlhbEJhY2tPZmZJbnRlcnZhbChtYXhJbnRlcnZhbDogbnVtYmVyLCByZXR1cm5WYWw6IGFueSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG9mKDApLnBpcGUoXG4gICAgICBleHBhbmQoKGl0ZXJhdGlvbjogbnVtYmVyKSA9PiB0aW1lcih0aGlzLmNhbGNJbnRlcnZhbChpdGVyYXRpb24sIG1heEludGVydmFsKSkucGlwZShtYXBUbyhpdGVyYXRpb24gKyAxKSkpLFxuICAgICAgbWFwVG8ocmV0dXJuVmFsKSxcbiAgICApO1xuICB9XG5cbiAgY2FsY0ludGVydmFsKGl0ZXJhdGlvbjogbnVtYmVyLCBtYXhJbnRlcnZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBleHBvOiBudW1iZXIgPSAxLjQ7XG4gICAgY29uc3QgaW50ZXJ2YWw6IG51bWJlciA9IE1hdGgucG93KGV4cG8sIGl0ZXJhdGlvbikgKiBCQVNFX0lOVEVSVkFMO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKGludGVydmFsLCBtYXhJbnRlcnZhbCk7XG4gIH1cblxuICBkZWxldGVTcG9vbGVkUXVlcnkocXVlcnlJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5xdWVyeVNlcnZpY2VcbiAgICAgIC5kZWxldGVRdWVyeSh0aGlzLmNvbm5lY3Rpb25TZXJ2aWNlLmN1cnJlbnRDb25uZWN0aW9uLCBxdWVyeUlkKVxuICAgICAgLnN1YnNjcmliZSh1bmRlZmluZWQsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdTUE9PTEVEX1FVRVJZX0NPVUxEX05PVF9CRV9ERUxFVEVEJywgeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyKSB9KSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2UsXG4gIGNvbm5lY3Rpb25TZXJ2aWNlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIHF1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuKTogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3Bvb2xlZFF1ZXJ5U2VydmljZShjb25uZWN0aW9uU2VydmljZSwgcXVlcnlTZXJ2aWNlLCB0cmFuc2xhdGUpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2UsXG4gIGRlcHM6IFtcbiAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU3Bvb2xlZFF1ZXJ5U2VydmljZV0sXG4gICAgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICAgIFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gICAgVHJhbnNsYXRlU2VydmljZSxcbiAgXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19