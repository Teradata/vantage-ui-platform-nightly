(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/common', ['exports', '@angular/core'], factory) :
	(global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].common = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */
	/** @type {?} */
	var VANTAGE_BASE_URL_TOKEN = new core.InjectionToken('vantage-base-url-token');

	exports.VANTAGE_BASE_URL_TOKEN = VANTAGE_BASE_URL_TOKEN;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-common.umd.js.map
