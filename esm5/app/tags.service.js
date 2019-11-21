/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { TdHttp, TdQueryParams, TdResponse, TdGET } from '@covalent/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function ITag() { }
if (false) {
    /** @type {?|undefined} */
    ITag.prototype.tag_id;
    /** @type {?|undefined} */
    ITag.prototype.tag;
}
var VantageTagsService = /** @class */ (function () {
    function VantageTagsService() {
    }
    /**
     * @param {?=} params
     * @param {?=} response
     * @return {?}
     */
    VantageTagsService.prototype.query = /**
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
    VantageTagsService.decorators = [
        { type: Injectable }
    ];
    tslib_1.__decorate([
        TdGET({
            path: '/tags',
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
    ], VantageTagsService.prototype, "query", null);
    VantageTagsService = tslib_1.__decorate([
        TdHttp({
            baseUrl: '/api/app',
            baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
        })
    ], VantageTagsService);
    return VantageTagsService;
}());
export { VantageTagsService };
/**
 * @param {?} parent
 * @return {?}
 */
export function VANTAGE_TAGS_PROVIDER_FACTORY(parent) {
    return parent || new VantageTagsService();
}
/** @type {?} */
export var VANTAGE_TAGS_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: VantageTagsService,
    deps: [[new Optional(), new SkipSelf(), VantageTagsService]],
    useFactory: VANTAGE_TAGS_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsidGFncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUlBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFZLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFckMsMEJBR0M7OztJQUZDLHNCQUFnQjs7SUFDaEIsbUJBQWE7Ozs7SUE0QmYsQ0FBQzs7Ozs7O0lBYkMsa0NBQUs7Ozs7O0lBQUwsVUFDbUIsTUFBbUIsRUFDdEIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFzQjtZQUN6QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDdkIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwQkYsVUFBVTs7SUFRVDtRQU5DLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUVDLG1CQUFBLGFBQWEsRUFBRSxDQUFBO1FBQ2YsbUJBQUEsVUFBVSxFQUFFLENBQUE7O2lEQURhLFVBQVU7WUFDWCxVQUFVO2dEQUNsQyxVQUFVO21EQVNaO0lBbkJVLGtCQUFrQjtRQUw5QixNQUFNLENBQUM7WUFDTixPQUFPLEVBQUUsVUFBVTtZQUNuQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztTQUM3RCxDQUFDO09BRVcsa0JBQWtCLENBb0I5QjtJQUFELHlCQUFDO0NBQUEsSUFBQTtTQXBCWSxrQkFBa0I7Ozs7O0FBc0IvQixNQUFNLFVBQVUsNkJBQTZCLENBQUMsTUFBMEI7SUFDdEUsT0FBTyxNQUFNLElBQUksSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBQzVDLENBQUM7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUFhOztJQUU3QyxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDNUQsVUFBVSxFQUFFLDZCQUE2QjtDQUMxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYtMjAxNyBieSBUZXJhZGF0YSBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRFUkFEQVRBIENPUlBPUkFUSU9OIENPTkZJREVOVElBTCBBTkQgVFJBREUgU0VDUkVUXG4gKi9cbmltcG9ydCB7IE9wdGlvbmFsLCBTa2lwU2VsZiwgUHJvdmlkZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFRkSHR0cCwgVGRRdWVyeVBhcmFtcywgVGRSZXNwb25zZSwgVGRHRVQgfSBmcm9tICdAY292YWxlbnQvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGFnIHtcbiAgdGFnX2lkPzogc3RyaW5nO1xuICB0YWc/OiBzdHJpbmc7XG59XG5cbkBUZEh0dHAoe1xuICBiYXNlVXJsOiAnL2FwaS9hcHAnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUYWdzU2VydmljZSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy90YWdzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJVGFnW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVRhZ1tdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9UQUdTX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlVGFnc1NlcnZpY2UpOiBWYW50YWdlVGFnc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVGFnc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVEFHU19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUYWdzU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUYWdzU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RBR1NfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=