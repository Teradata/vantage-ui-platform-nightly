/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
/** @type {?} */
const BASE_URL = Cypress.config('baseUrl');
// ex: http://localhost:4200
/** @type {?} */
const LOGIN_URL = Cypress.env('loginUrl');
// inspired by https://vrockai.github.io/blog/2017/10/28/cypress-keycloak-intregration/
/**
 * @param {?} __0
 * @return {?}
 */
function login({ username, password }) {
    cy.visit(BASE_URL);
    cy.url().should('include', LOGIN_URL);
    cy.request({
        url: LOGIN_URL,
    }).then((/**
     * @param {?} response
     * @return {?}
     */
    (response) => {
        /** @type {?} */
        const loginPageHtml = document.createElement('html');
        loginPageHtml.innerHTML = response.body;
        /** @type {?} */
        const loginForm = loginPageHtml.querySelector('#kc-form-login');
        if (!loginForm) {
            return;
        }
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
        () => {
            cy.visit(BASE_URL);
            cy.url().should('not.include', LOGIN_URL);
            cy.url().should('include', BASE_URL);
        }));
    }));
}
/**
 * @return {?}
 */
function logout() {
    cy.visit(BASE_URL);
    cy.visit('/api/user/logout');
    cy.visit(BASE_URL);
    cy.url().should('include', LOGIN_URL);
}

export { login, logout };
//# sourceMappingURL=td-vantage-ui-platform-testing-cypress.js.map
