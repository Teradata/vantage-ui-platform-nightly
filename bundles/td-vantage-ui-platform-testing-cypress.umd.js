(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@td-vantage/ui-platform/testing/cypress', ['exports'], factory) :
    (global = global || self, factory((global['td-vantage'] = global['td-vantage'] || {}, global['td-vantage']['ui-platform'] = global['td-vantage']['ui-platform'] || {}, global['td-vantage']['ui-platform'].testing = global['td-vantage']['ui-platform'].testing || {}, global['td-vantage']['ui-platform'].testing.cypress = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /// <reference types="cypress" />
    /// <reference types="cypress" />
    /// <reference types="cypress" />
    /** @type {?} */
    var BASE_URL = Cypress.config('baseUrl');
    // ex: http://localhost:4200
    /** @type {?} */
    var LOGIN_URL = Cypress.env('loginUrl');
    /**
     * @record
     */
    function ILoginCredentials() { }
    if (false) {
        /** @type {?} */
        ILoginCredentials.prototype.username;
        /** @type {?} */
        ILoginCredentials.prototype.password;
    }
    // inspired by https://vrockai.github.io/blog/2017/10/28/cypress-keycloak-intregration/
    /**
     * @param {?} __0
     * @return {?}
     */
    function login(_a) {
        var username = _a.username, password = _a.password;
        cy.request({
            url: LOGIN_URL,
        }).then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var loginPageHtml = document.createElement('html');
            loginPageHtml.innerHTML = response.body;
            /** @type {?} */
            var loginForm = loginPageHtml.querySelector('#kc-form-login');
            if (loginForm) {
                cy.request({
                    form: true,
                    method: 'POST',
                    url: loginForm.action,
                    followRedirect: false,
                    body: {
                        username: username,
                        password: password,
                    },
                }).then((/**
                 * @return {?}
                 */
                function () {
                    _redirectToHome();
                }));
            }
            else {
                _redirectToHome();
            }
        }));
    }
    /**
     * @return {?}
     */
    function logout() {
        cy.request('/api/user/logout');
    }
    /**
     * @return {?}
     */
    function _redirectToHome() {
        cy.visit(BASE_URL);
        cy.url().should('not.include', LOGIN_URL);
        cy.url().should('include', BASE_URL);
    }
    /** @type {?} */
    var SSO_COOKIES = ['USER_SSO_ID', 'XSRF-TOKEN'];
    /**
     * @return {?}
     */
    function whiteListSSOCookies() {
        Cypress.Cookies.defaults({ whitelist: SSO_COOKIES });
    }

    exports.SSO_COOKIES = SSO_COOKIES;
    exports.login = login;
    exports.logout = logout;
    exports.whiteListSSOCookies = whiteListSSOCookies;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=td-vantage-ui-platform-testing-cypress.umd.js.map
