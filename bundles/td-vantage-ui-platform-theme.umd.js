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
            this.preferDarkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            /** @type {?} */
            var initialValue = this.localStorageTheme() || this.checkOSPreference();
            this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
            this._activeThemeSubject = new rxjs.BehaviorSubject(initialValue);
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
            // apply initial theme
            this.applyTheme(initialValue, false);
            // observe media query change events
            /** @type {?} */
            var mediaObserver = rxjs.fromEventPattern(this.preferDarkMediaQuery.addListener.bind(this.preferDarkMediaQuery), this.preferDarkMediaQuery.removeListener.bind(this.preferDarkMediaQuery)).pipe(operators.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return event.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
            })));
            // account for storage events in other browser tabs
            /** @type {?} */
            var storageObserver = rxjs.fromEvent(window, 'storage').pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event.key === THEME_LOCAL_STORAGE_KEY; })), operators.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return (event.newValue ? ((/** @type {?} */ (event.newValue))) : _this.checkOSPreference()); })));
            // apply theme on storage or media query change
            rxjs.merge(storageObserver, mediaObserver).subscribe((/**
             * @param {?} theme
             * @return {?}
             */
            function (theme) { return _this.applyTheme(theme); }));
            // account for cached navigation
            // needed for Firefox BFCache
            window.addEventListener('pageshow', (/**
             * @param {?} pageTransition
             * @return {?}
             */
            function (pageTransition) {
                /** @type {?} */
                var localStorageTheme = _this.localStorageTheme();
                /** @type {?} */
                var localStorageDiffersActiveTheme = localStorageTheme && localStorageTheme !== _this._activeTheme;
                if (pageTransition.persisted && localStorageDiffersActiveTheme) {
                    _this.applyTheme(localStorageTheme);
                }
            }));
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
            return this.applyTheme(VantageTheme.LIGHT);
        };
        /**
         * @return {?}
         */
        VantageThemeService.prototype.applyDarkTheme = /**
         * @return {?}
         */
        function () {
            return this.applyTheme(VantageTheme.DARK);
        };
        /**
         * @return {?}
         */
        VantageThemeService.prototype.toggleTheme = /**
         * @return {?}
         */
        function () {
            return this._activeTheme === VantageTheme.DARK ? this.applyLightTheme() : this.applyDarkTheme();
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
         * @return {?}
         */
        VantageThemeService.prototype.localStorageTheme = /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (localStorage.getItem(THEME_LOCAL_STORAGE_KEY)));
        };
        /**
         * @private
         * @param {?} theme
         * @param {?=} saveSetting
         * @return {?}
         */
        VantageThemeService.prototype.applyTheme = /**
         * @private
         * @param {?} theme
         * @param {?=} saveSetting
         * @return {?}
         */
        function (theme, saveSetting) {
            if (saveSetting === void 0) { saveSetting = true; }
            this._renderer2.removeClass(this._document.querySelector('html'), theme === VantageTheme.DARK ? VantageTheme.LIGHT : VantageTheme.DARK);
            this._renderer2.addClass(this._document.querySelector('html'), theme);
            if (saveSetting) {
                localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
            }
            return (this._activeTheme = theme);
        };
        /**
         * @private
         * @return {?}
         */
        VantageThemeService.prototype.checkOSPreference = /**
         * @private
         * @return {?}
         */
        function () {
            // it should now be light-by-default
            return this.preferDarkMediaQuery.matches ? VantageTheme.DARK : VantageTheme.LIGHT;
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
        /**
         * @type {?}
         * @private
         */
        VantageThemeService.prototype.preferDarkMediaQuery;
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

    exports.THEME_LOCAL_STORAGE_KEY = THEME_LOCAL_STORAGE_KEY;
    exports.VANTAGE_THEME_PROVIDER = VANTAGE_THEME_PROVIDER;
    exports.VANTAGE_THEME_PROVIDER_FACTORY = VANTAGE_THEME_PROVIDER_FACTORY;
    exports.VantageTheme = VantageTheme;
    exports.VantageThemeModule = VantageThemeModule;
    exports.VantageThemeService = VantageThemeService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-theme.umd.js.map
