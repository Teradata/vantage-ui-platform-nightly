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

export { login, logout };
//# sourceMappingURL=td-vantage-ui-platform-testing-cypress.js.map
