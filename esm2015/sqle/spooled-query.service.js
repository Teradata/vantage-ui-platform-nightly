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
        return this.queryService.querySystem(this.connectionService.current, Object.assign(Object.assign({}, payload), { spooledResultSet: true })).pipe(tap((/**
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
        (id) => this.queryService.getQuery(this.connectionService.current, id.toString()).pipe(map((/**
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
        ([id]) => this.queryService.getQueryResult(this.connectionService.current, id).pipe(map((/**
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
        this.queryService.deleteQuery(this.connectionService.current, queryId).subscribe(undefined, (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bvb2xlZC1xdWVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vc3FsZS8iLCJzb3VyY2VzIjpbInNwb29sZWQtcXVlcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWtDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFdEYsaUNBR0M7OztJQUZDLGdDQUFXOztJQUNYLDJDQUFzQjs7O01BR2xCLFlBQVksR0FBVyxLQUFLOztNQUM1QixhQUFhLEdBQVcsSUFBSTs7O0lBR2hDLFFBQVMsUUFBUTtJQUNqQixTQUFVLFNBQVM7SUFDbkIsV0FBWSxXQUFXO0lBQ3ZCLFlBQWEsWUFBWTtJQUN6QixVQUFXLFVBQVU7SUFDckIsa0JBQW1CLGtCQUFrQjs7QUFJdkMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBSXJDLFlBQ1UsaUJBQTJDLEVBQzNDLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTnJDLGdCQUFX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Q0FBc0MsQ0FDcEQsTUFBa0MsRUFDbEMsaUJBQTJDLEVBQzNDLFlBQWlDLEVBQ2pDLFNBQTJCO0lBRTNCLE9BQU8sTUFBTSxJQUFJLElBQUksMEJBQTBCLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzlGLENBQUM7O0FBRUQsTUFBTSxPQUFPLDhCQUE4QixHQUFhOztJQUV0RCxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLElBQUksRUFBRTtRQUNKLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDBCQUEwQixDQUFDO1FBQzVELHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsZ0JBQWdCO0tBQ2pCO0lBQ0QsVUFBVSxFQUFFLHNDQUFzQztDQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhwYW5kLCBtYXAsIG1hcFRvLCBza2lwV2hpbGUsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZhbnRhZ2VDb25uZWN0aW9uU2VydmljZSB9IGZyb20gJy4vY29ubmVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFZhbnRhZ2VRdWVyeVNlcnZpY2UsIElRdWVyeVBheWxvYWQsIElRdWVyeVJlc3VsdFNldCB9IGZyb20gJy4vcXVlcnkuc2VydmljZSc7XG5cbmludGVyZmFjZSBJU3Bvb2xlZFF1ZXJ5RXJyb3IgZXh0ZW5kcyBIdHRwRXJyb3JSZXNwb25zZSB7XG4gIGlkOiBzdHJpbmc7XG4gIGRldGFpbE1lc3NhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgTUFYX0lOVEVSVkFMOiBudW1iZXIgPSAxMDAwMDtcbmNvbnN0IEJBU0VfSU5URVJWQUw6IG51bWJlciA9IDIwMDA7XG5cbmVudW0gU3Bvb2xlZFF1ZXJ5U3RhdGUge1xuICBRVUVVRUQgPSAnUVVFVUVEJyxcbiAgUEVORElORyA9ICdQRU5ESU5HJyxcbiAgU1VCTUlUVEVEID0gJ1NVQk1JVFRFRCcsXG4gIFJFU1BPTkRJTkcgPSAnUkVTUE9ORElORycsXG4gIFNQT09MSU5HID0gJ1NQT09MSU5HJyxcbiAgUkVTVUxUX1NFVF9SRUFEWSA9ICdSRVNVTFRfU0VUX1JFQURZJyxcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VTcG9vbGVkUXVlcnlTZXJ2aWNlIHtcbiAgcXVlcnlTdGF0dXM6IEJlaGF2aW9yU3ViamVjdDxTcG9vbGVkUXVlcnlTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNwb29sZWRRdWVyeVN0YXRlPih1bmRlZmluZWQpO1xuICBxdWVyeVN0YXR1cyQ6IE9ic2VydmFibGU8U3Bvb2xlZFF1ZXJ5U3RhdGU+ID0gdGhpcy5xdWVyeVN0YXR1cy5hc09ic2VydmFibGUoKTtcbiAgcXVlcnlTdGFjazogc3RyaW5nW10gPSBbXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25uZWN0aW9uU2VydmljZTogVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcXVlcnlTZXJ2aWNlOiBWYW50YWdlUXVlcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICApIHt9XG5cbiAgY2FuY2VsTGFzdFF1ZXJ5KCk6IHZvaWQge1xuICAgIGNvbnN0IHRoaXNRdWVyeTogc3RyaW5nID0gdGhpcy5xdWVyeVN0YWNrLnBvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlU3Bvb2xlZFF1ZXJ5KHRoaXNRdWVyeSk7XG4gIH1cblxuICBnZXRSdW5uaW5nSW5mbygpOiBPYnNlcnZhYmxlPFNwb29sZWRRdWVyeVN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTdGF0dXMkO1xuICB9XG5cbiAgcXVlcnlTeXN0ZW0ocGF5bG9hZDogSVF1ZXJ5UGF5bG9hZCk6IE9ic2VydmFibGU8SVF1ZXJ5UmVzdWx0U2V0PiB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnlTZXJ2aWNlLnF1ZXJ5U3lzdGVtKHRoaXMuY29ubmVjdGlvblNlcnZpY2UuY3VycmVudCwgeyAuLi5wYXlsb2FkLCBzcG9vbGVkUmVzdWx0U2V0OiB0cnVlIH0pLnBpcGUoXG4gICAgICB0YXAoKHJlczogYW55KSA9PiB0aGlzLnF1ZXJ5U3RhY2sucHVzaChyZXMuaWQpKSxcbiAgICAgIHN3aXRjaE1hcCgocmVzOiBhbnkpID0+IHRoaXMuZXhwb25lbnRpYWxCYWNrT2ZmSW50ZXJ2YWwoTUFYX0lOVEVSVkFMLCByZXMuaWQpKSxcbiAgICAgIHN3aXRjaE1hcCgoaWQ6IG51bWJlcikgPT5cbiAgICAgICAgdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnkodGhpcy5jb25uZWN0aW9uU2VydmljZS5jdXJyZW50LCBpZC50b1N0cmluZygpKS5waXBlKFxuICAgICAgICAgIG1hcCgocXVlcnk6IGFueSkgPT4gcXVlcnkucXVlcnlTdGF0ZSksXG4gICAgICAgICAgdGFwKCh2YWw6IGFueSkgPT4gdGhpcy5xdWVyeVN0YXR1cy5uZXh0KHZhbCkpLFxuICAgICAgICAgIG1hcCgodmFsOiBhbnkpID0+IFtpZCwgdmFsXSksXG4gICAgICAgICksXG4gICAgICApLFxuICAgICAgc2tpcFdoaWxlKChbaWQsIHN0YXR1c106IFtzdHJpbmcsIFNwb29sZWRRdWVyeVN0YXRlXSkgPT4gc3RhdHVzICE9PSBTcG9vbGVkUXVlcnlTdGF0ZS5SRVNVTFRfU0VUX1JFQURZKSxcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKFtpZF06IFtzdHJpbmcsIFNwb29sZWRRdWVyeVN0YXRlXSkgPT5cbiAgICAgICAgdGhpcy5xdWVyeVNlcnZpY2UuZ2V0UXVlcnlSZXN1bHQodGhpcy5jb25uZWN0aW9uU2VydmljZS5jdXJyZW50LCBpZCkucGlwZShcbiAgICAgICAgICBtYXAoKHZhbDogSVF1ZXJ5UmVzdWx0U2V0KSA9PiBbaWQsIHZhbF0pLFxuICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLnF1ZXJ5U3RhY2sucG9wKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKHJlczogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHtcbiAgICAgICAgICAgICAgLi4ucmVzLFxuICAgICAgICAgICAgICAuLi57IGlkIH0sXG4gICAgICAgICAgICAgIGRldGFpbE1lc3NhZ2U6IGBFcnJvciAke3Jlcy5lcnJvci5lcnJvcn06ICR7cmVzLmVycm9yLm1lc3NhZ2V9YCxcbiAgICAgICAgICAgIH0gYXMgSVNwb29sZWRRdWVyeUVycm9yKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBtYXAoKFtpZCwgcmVzdWx0c106IFtzdHJpbmcsIElRdWVyeVJlc3VsdFNldF0pID0+IHJlc3VsdHMpLFxuICAgICk7XG4gIH1cblxuICBleHBvbmVudGlhbEJhY2tPZmZJbnRlcnZhbChtYXhJbnRlcnZhbDogbnVtYmVyLCByZXR1cm5WYWw6IGFueSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG9mKDApLnBpcGUoXG4gICAgICBleHBhbmQoKGl0ZXJhdGlvbjogbnVtYmVyKSA9PiB0aW1lcih0aGlzLmNhbGNJbnRlcnZhbChpdGVyYXRpb24sIG1heEludGVydmFsKSkucGlwZShtYXBUbyhpdGVyYXRpb24gKyAxKSkpLFxuICAgICAgbWFwVG8ocmV0dXJuVmFsKSxcbiAgICApO1xuICB9XG5cbiAgY2FsY0ludGVydmFsKGl0ZXJhdGlvbjogbnVtYmVyLCBtYXhJbnRlcnZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBleHBvOiBudW1iZXIgPSAxLjQ7XG4gICAgY29uc3QgaW50ZXJ2YWw6IG51bWJlciA9IE1hdGgucG93KGV4cG8sIGl0ZXJhdGlvbikgKiBCQVNFX0lOVEVSVkFMO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKGludGVydmFsLCBtYXhJbnRlcnZhbCk7XG4gIH1cblxuICBkZWxldGVTcG9vbGVkUXVlcnkocXVlcnlJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5xdWVyeVNlcnZpY2UuZGVsZXRlUXVlcnkodGhpcy5jb25uZWN0aW9uU2VydmljZS5jdXJyZW50LCBxdWVyeUlkKS5zdWJzY3JpYmUodW5kZWZpbmVkLCAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ1NQT09MRURfUVVFUllfQ09VTERfTk9UX0JFX0RFTEVURUQnLCB7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnIpIH0pKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2UsXG4gIGNvbm5lY3Rpb25TZXJ2aWNlOiBWYW50YWdlQ29ubmVjdGlvblNlcnZpY2UsXG4gIHF1ZXJ5U2VydmljZTogVmFudGFnZVF1ZXJ5U2VydmljZSxcbiAgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuKTogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlU3Bvb2xlZFF1ZXJ5U2VydmljZShjb25uZWN0aW9uU2VydmljZSwgcXVlcnlTZXJ2aWNlLCB0cmFuc2xhdGUpO1xufVxuXG5leHBvcnQgY29uc3QgVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVmFudGFnZVNwb29sZWRRdWVyeVNlcnZpY2UsXG4gIGRlcHM6IFtcbiAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBWYW50YWdlU3Bvb2xlZFF1ZXJ5U2VydmljZV0sXG4gICAgVmFudGFnZUNvbm5lY3Rpb25TZXJ2aWNlLFxuICAgIFZhbnRhZ2VRdWVyeVNlcnZpY2UsXG4gICAgVHJhbnNsYXRlU2VydmljZSxcbiAgXSxcbiAgdXNlRmFjdG9yeTogVkFOVEFHRV9TUE9PTEVEX1FVRVJZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19