(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/theme', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].theme = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var THEME_LOCAL_STORAGE_KEY = 'vantage.theme';
    /** @enum {string} */
    var VantageTheme = {
        DARK: 'dark-theme',
        LIGHT: 'light-theme',
    };
    /**
     * @record
     */
    function IVantageThemeMap() { }
    if (false) {
        /* Skipping unnamed member:
        [VantageTheme.DARK]?: any;*/
        /* Skipping unnamed member:
        [VantageTheme.LIGHT]?: any;*/
    }
    var VantageThemeService = /** @class */ (function () {
        function VantageThemeService(rendererFactory, _document) {
            var _this = this;
            this.rendererFactory = rendererFactory;
            this._document = _document;
            this._activeThemeSubject = new rxjs.BehaviorSubject((/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY))));
            this.activeTheme$ = this._activeThemeSubject.asObservable();
            this.darkTheme$ = this._activeThemeSubject
                .asObservable()
                .pipe(operators.map((/**
             * @param {?} theme
             * @return {?}
             */
            function (theme) { return theme === VantageTheme.DARK; })));
            this.lightTheme$ = this._activeThemeSubject
                .asObservable()
                .pipe(operators.map((/**
             * @param {?} theme
             * @return {?}
             */
            function (theme) { return theme === VantageTheme.LIGHT; })));
            this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
            rxjs.fromEvent(window, 'storage')
                .pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.key === THEME_LOCAL_STORAGE_KEY; })))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.applyTheme((/** @type {?} */ (event.newValue))); }));
        }
        Object.defineProperty(VantageThemeService.prototype, "_activeTheme", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this._activeThemeSubject.getValue();
            },
            set: /**
             * @private
             * @param {?} theme
             * @return {?}
             */
            function (theme) {
                this._activeThemeSubject.next(theme);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VantageThemeService.prototype, "darkThemeIsActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeTheme === VantageTheme.DARK;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VantageThemeService.prototype, "lightThemeIsActive", {
            get: /**
             * @return {?}
             */
            function () {
                return this._activeTheme === VantageTheme.LIGHT;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        VantageThemeService.prototype.activeTheme = /**
         * @return {?}
         */
        function () {
            return this._activeTheme;
        };
        /**
         * @return {?}
         */
        VantageThemeService.prototype.applyLightTheme = /**
         * @return {?}
         */
        function () {
            this.applyTheme(VantageTheme.LIGHT);
        };
        /**
         * @return {?}
         */
        VantageThemeService.prototype.applyDarkTheme = /**
         * @return {?}
         */
        function () {
            this.applyTheme(VantageTheme.DARK);
        };
        /**
         * @return {?}
         */
        VantageThemeService.prototype.toggleTheme = /**
         * @return {?}
         */
        function () {
            this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
        };
        /**
         * @param {?} mapObject
         * @param {?=} fallback
         * @return {?}
         */
        VantageThemeService.prototype.map = /**
         * @param {?} mapObject
         * @param {?=} fallback
         * @return {?}
         */
        function (mapObject, fallback) {
            return this.activeTheme$.pipe(operators.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return (value in mapObject ? mapObject[value] : fallback); })));
        };
        /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        VantageThemeService.prototype.applyTheme = /**
         * @private
         * @param {?} theme
         * @return {?}
         */
        function (theme) {
            this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
            localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
            this._renderer2.addClass(this._document.querySelector('html'), theme);
            this._activeTheme = (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
        };
        VantageThemeService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        VantageThemeService.ctorParameters = function () { return [
            { type: core.RendererFactory2 },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        return VantageThemeService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        VantageThemeService.prototype._renderer2;
        /**
         * @type {?}
         * @private
         */
        VantageThemeService.prototype._activeThemeSubject;
        /** @type {?} */
        VantageThemeService.prototype.activeTheme$;
        /** @type {?} */
        VantageThemeService.prototype.darkTheme$;
        /** @type {?} */
        VantageThemeService.prototype.lightTheme$;
        /**
         * @type {?}
         * @private
         */
        VantageThemeService.prototype.rendererFactory;
        /**
         * @type {?}
         * @private
         */
        VantageThemeService.prototype._document;
    }
    /**
     * @param {?} parent
     * @param {?} rendererFactory
     * @param {?} _document
     * @return {?}
     */
    function VANTAGE_THEME_PROVIDER_FACTORY(parent, rendererFactory, _document) {
        return parent || new VantageThemeService(rendererFactory, _document);
    }
    /** @type {?} */
    var VANTAGE_THEME_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: VantageThemeService,
        deps: [[new core.Optional(), new core.SkipSelf(), VantageThemeService], [core.RendererFactory2], [common.DOCUMENT]],
        useFactory: VANTAGE_THEME_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VantageThemeModule = /** @class */ (function () {
        function VantageThemeModule() {
        }
        VantageThemeModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [VANTAGE_THEME_PROVIDER],
                    },] }
        ];
        return VantageThemeModule;
    }());

    exports.VANTAGE_THEME_PROVIDER = VANTAGE_THEME_PROVIDER;
    exports.VANTAGE_THEME_PROVIDER_FACTORY = VANTAGE_THEME_PROVIDER_FACTORY;
    exports.VantageTheme = VantageTheme;
    exports.VantageThemeModule = VantageThemeModule;
    exports.VantageThemeService = VantageThemeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-theme.umd.js.map
