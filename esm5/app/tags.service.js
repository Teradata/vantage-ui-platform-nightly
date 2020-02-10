/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __extends, __metadata, __param } from "tslib";
import { Optional, SkipSelf, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { mixinHttp, TdQueryParams, TdResponse, TdGET } from '@covalent/http';
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
var VantageTagsService = /** @class */ (function (_super) {
    __extends(VantageTagsService, _super);
    function VantageTagsService() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    __decorate([
        TdGET({
            path: '/tags',
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
    ], VantageTagsService.prototype, "query", null);
    return VantageTagsService;
}(mixinHttp(/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}()), {
    baseUrl: '/api/app',
    baseHeaders: new HttpHeaders({ Accept: 'application/json' }),
})));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRkLXZhbnRhZ2UvdWktcGxhdGZvcm0vYXBwLyIsInNvdXJjZXMiOlsidGFncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQVksVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBRTdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVyQywwQkFHQzs7O0lBRkMsc0JBQWdCOztJQUNoQixtQkFBYTs7QUFHZjtJQUN3QyxzQ0FHdEM7SUFKRjs7SUF3QkEsQ0FBQzs7Ozs7O0lBYkMsa0NBQUs7Ozs7O0lBQUwsVUFDbUIsTUFBbUIsRUFDdEIsUUFBd0M7UUFFdEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUNsQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFzQjtZQUN6QixPQUFPO2dCQUNMLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsSUFBSSxFQUFFLG1CQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUE7YUFDdkIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkF2QkYsVUFBVTs7SUFXVDtRQU5DLEtBQUssQ0FBQztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQztRQUVDLFdBQUEsYUFBYSxFQUFFLENBQUE7UUFDZixXQUFBLFVBQVUsRUFBRSxDQUFBOzt5Q0FEYSxVQUFVO1lBQ1gsVUFBVTt3Q0FDbEMsVUFBVTttREFTWjtJQUNILHlCQUFDO0NBQUEsQUF4QkQsQ0FDd0MsU0FBUztJQUFDO0lBQU8sQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBQVIsS0FBVTtJQUMxRCxPQUFPLEVBQUUsVUFBVTtJQUNuQixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztDQUM3RCxDQUFDLEdBb0JEO1NBdkJZLGtCQUFrQjs7Ozs7QUF5Qi9CLE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPLE1BQU0sSUFBSSxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8scUJBQXFCLEdBQWE7O0lBRTdDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1RCxVQUFVLEVBQUUsNkJBQTZCO0NBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFNraXBTZWxmLCBQcm92aWRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgbWl4aW5IdHRwLCBUZFF1ZXJ5UGFyYW1zLCBUZFJlc3BvbnNlLCBUZEdFVCB9IGZyb20gJ0Bjb3ZhbGVudC9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWcge1xuICB0YWdfaWQ/OiBzdHJpbmc7XG4gIHRhZz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbnRhZ2VUYWdzU2VydmljZSBleHRlbmRzIG1peGluSHR0cChjbGFzcyB7fSwge1xuICBiYXNlVXJsOiAnL2FwaS9hcHAnLFxuICBiYXNlSGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSksXG59KSB7XG4gIEBUZEdFVCh7XG4gICAgcGF0aDogJy90YWdzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxuICAgIH0sXG4gIH0pXG4gIHF1ZXJ5KFxuICAgIEBUZFF1ZXJ5UGFyYW1zKCkgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICBAVGRSZXNwb25zZSgpIHJlc3BvbnNlPzogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj4sXG4gICk6IE9ic2VydmFibGU8eyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJVGFnW10gfT4ge1xuICAgIHJldHVybiByZXNwb25zZS5waXBlKFxuICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG90YWw6ICtyZXMuaGVhZGVycy5nZXQoJ1gtVG90YWwnKSxcbiAgICAgICAgICBkYXRhOiA8SVRhZ1tdPnJlcy5ib2R5LFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVkFOVEFHRV9UQUdTX1BST1ZJREVSX0ZBQ1RPUlkocGFyZW50OiBWYW50YWdlVGFnc1NlcnZpY2UpOiBWYW50YWdlVGFnc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBWYW50YWdlVGFnc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZBTlRBR0VfVEFHU19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFZhbnRhZ2VUYWdzU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFZhbnRhZ2VUYWdzU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBWQU5UQUdFX1RBR1NfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=