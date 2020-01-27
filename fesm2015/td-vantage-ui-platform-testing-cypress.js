import moment from 'moment';

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
function login({ username, password }) {
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
        if (loginForm) {
            cy.request({
                form: true,
                method: 'POST',
                url: loginForm.action,
                followRedirect: false,
                body: {
                    username,
                    password,
                },
            }).then((/**
             * @return {?}
             */
            () => {
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
const SSO_COOKIES = ['USER_SSO_ID', 'XSRF-TOKEN'];
/**
 * @return {?}
 */
function whiteListSSOCookies() {
    Cypress.Cookies.defaults({ whitelist: SSO_COOKIES });
}
/**
 * @return {?}
 */
function waitForAngular() {
    cy.get('[ng-version]').should('exist');
    return cy.window().then((/**
     * @param {?} win
     * @return {?}
     */
    (win) => {
        return new Cypress.Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const testabilities = win['getAllAngularTestabilities']();
            if (!testabilities) {
                return reject(new Error('No testabilities. Is Angular loaded?'));
            }
            /** @type {?} */
            let count = testabilities.length;
            testabilities.forEach((/**
             * @param {?} testability
             * @return {?}
             */
            (testability) => testability.whenStable((/**
             * @return {?}
             */
            () => {
                count--;
                if (count !== 0) {
                    return;
                }
                resolve();
            }))));
        }));
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TestType = {
    'unit': 'unit',
    'e2e': 'e2e',
};
/** @enum {string} */
const Methods = {
    'GET': 'GET',
    'PUT': 'PUT',
    'POST': 'POST',
    'PATCH': 'PATCH',
    'DELETE': 'DELETE',
};
/**
 * @record
 */
function IRouteDef() { }
if (false) {
    /** @type {?} */
    IRouteDef.prototype.url;
    /** @type {?} */
    IRouteDef.prototype.method;
    /** @type {?|undefined} */
    IRouteDef.prototype.status;
    /** @type {?|undefined} */
    IRouteDef.prototype.headers;
    /** @type {?|undefined} */
    IRouteDef.prototype.response;
    /** @type {?|undefined} */
    IRouteDef.prototype.onResponse;
}
/**
 * @record
 */
function IFixtureRouteDef() { }
if (false) {
    /** @type {?|undefined} */
    IFixtureRouteDef.prototype.alias;
    /** @type {?|undefined} */
    IFixtureRouteDef.prototype.status;
    /** @type {?|undefined} */
    IFixtureRouteDef.prototype.headers;
    /** @type {?|undefined} */
    IFixtureRouteDef.prototype.response;
    /** @type {?|undefined} */
    IFixtureRouteDef.prototype.onResponse;
}
/** @type {?} */
const allowedHeaders = ['content-type', 'x-length', 'x-page', 'x-total', 'x-total-pages'];
/** @type {?} */
const PIPE = '|';
/** @type {?} */
const SLASH = '/';
class MockUtility {
    constructor() {
        this.mocking = false;
        this.recording = false;
    }
    /**
     * Method that handles all boilerplate work to set up test.
     *
     * @param {?} testName testname used to determine existence of test specific fixtures and
     * @param {?} testType unit or e2e
     * @param {?} templates array of templates to be loaded (eg. 'empty' or 'golden')
     * @param {?} userName user name matching fixture containing credentials
     * @param {?=} record force recording for this test, default is false
     * @return {?}
     */
    setUp(testName, testType, templates, userName, record = false) {
        cy.now('log', 'Test: ' + testName + SLASH + testType);
        this.testName = testName;
        this.testType = testType;
        // Start server to support routes
        cy.server();
        // Create timestamp and structures to retain fixture data
        this.timestamp = moment().format('LTS');
        this.urlMethodFixtureMap = new Map();
        this.recordedURLMethodFixtureMap = new Map();
        // Conditionally turn on recording
        if (Cypress.env('record') || record) {
            this.recording = true;
            cy.now('log', 'Recording...');
            cy.route({
                url: '/api/**',
                onResponse: (/**
                 * @param {?} xhr
                 * @return {?}
                 */
                (xhr) => this.recordResponse(xhr)),
            });
        }
        // Conditionally turn on mocking
        if (Cypress.env('mock') || testType === TestType.unit) {
            cy.now('log', 'Mocking...');
            this.mocking = true;
        }
        // Add routes for user logon
        if (this.mocking && !this.recording) {
            this.registerRoute(userName);
        }
        // Load template and test specific routes
        templates.forEach((/**
         * @param {?} template
         * @return {?}
         */
        (template) => {
            this.registerRoute('templates/' + template);
            this.registerRoute('templates/' + template + SLASH + userName);
        }));
        this.registerRoute('testspecific/' + testName);
        // Add new route command that alters its behavior based on mode.
        // If recording or production, just wait.
        // If mocking, allow returning mock results.
        Cypress.Commands.add('route2', (/**
         * @param {?} routeDef
         * @return {?}
         */
        (routeDef) => {
            if (Cypress.env('mock')) {
                cy.now('log', 'Setting route to mock');
                cy.route(routeDef);
            }
            else {
                cy.now('log', ' Setting route to alias');
                cy.route(routeDef.url);
            }
        }));
        cy.route({
            method: 'GET',
            url: '/api/user/logout',
            status: 200,
            response: {},
        });
        // Handle login based on mode.
        // Mock, bypass login
        // Otherwise, log in using credentials from fixture.
        if (this.mocking && !this.recording) {
            cy.visit('/');
        }
        else {
            cy.fixture('credentials/' + userName).then((/**
             * @param {?} credentials
             * @return {?}
             */
            (credentials) => {
                login(credentials);
            }));
        }
        // Wait for page to load
        waitForAngular();
    }
    /**
     * Discover any mock data fixtures under the specified directory hierarchy
     * and register associated cy.routes.
     *
     * @param {?} dir
     * @return {?}
     */
    registerRoute(dir) {
        // Check to see if the file exists.
        /** @type {?} */
        const mockDataFile = dir + '/mockdata.json';
        cy.exec('if [ -f cypress/fixtures/' + mockDataFile + ' ]; then ls cypress/fixtures/' + mockDataFile + '; fi').then((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
            if (!results.stdout) {
                return;
            }
            cy.fixture(mockDataFile).then((/**
             * @param {?} byURLRoutesMap
             * @return {?}
             */
            (byURLRoutesMap) => {
                // Iterate through file processing URL/method mappings
                // File is a map with URL as the key. Values are maps
                // in turn, where each map has method as the key value.
                // The value of these internal maps is an array of responses.
                Object.keys(byURLRoutesMap).forEach((/**
                 * @param {?} url
                 * @return {?}
                 */
                (url) => {
                    /** @type {?} */
                    const byMethodRoutesMap = byURLRoutesMap[url];
                    Object.keys(byMethodRoutesMap).forEach((/**
                     * @param {?} method
                     * @return {?}
                     */
                    (method) => {
                        /** @type {?} */
                        const fixtureRouteDefs = byMethodRoutesMap[method];
                        /** @type {?} */
                        const urlMethodKey = url + PIPE + method;
                        /** @type {?} */
                        let firstRouteDef = false;
                        fixtureRouteDefs.forEach((/**
                         * @param {?} fixtureRouteDef
                         * @return {?}
                         */
                        (fixtureRouteDef) => {
                            // Known mocks supercede recording
                            if (this.mocking) {
                                if (this.urlMethodFixtureMap.get(urlMethodKey) === undefined) {
                                    this.urlMethodFixtureMap.set(urlMethodKey, []);
                                    firstRouteDef = true;
                                }
                                this.urlMethodFixtureMap.get(urlMethodKey).push(fixtureRouteDef);
                                if (firstRouteDef) {
                                    this.registerMockRoute(url, method, fixtureRouteDef);
                                }
                            }
                            else if (this.recording) {
                                // onResponse records XHR response
                                /** @type {?} */
                                const routeDef = {
                                    method,
                                    url,
                                    onResponse: (/**
                                     * @param {?} xhr
                                     * @return {?}
                                     */
                                    (xhr) => {
                                        this.recordResponse(xhr);
                                    }),
                                };
                                cy.now('log', 'Registering recording route:');
                                cy.now('log', 'url/method: ' + url + SLASH + method);
                                cy.route(routeDef).as(fixtureRouteDef.alias);
                            }
                            else {
                                /** @type {?} */
                                const routeDef = {
                                    method,
                                    url,
                                };
                                cy.now('log', 'Registering alias route:');
                                cy.now('log', 'url/method: ' + url + SLASH + method);
                                cy.now('log', 'alias: ' + fixtureRouteDef.alias);
                                cy.route(routeDef).as(fixtureRouteDef.alias);
                            }
                        }));
                    }));
                }));
            }));
        }));
    }
    /**
     * @param {?} url
     * @param {?} method
     * @param {?} fixtureRouteDef
     * @return {?}
     */
    registerMockRoute(url, method, fixtureRouteDef) {
        /** @type {?} */
        const routeDef = {
            url,
            method,
            status: fixtureRouteDef.status,
            headers: fixtureRouteDef.headers,
            response: fixtureRouteDef.response,
            onResponse: (/**
             * @param {?} xhr
             * @return {?}
             */
            (xhr) => {
                /** @type {?} */
                const responseURL = new URL(xhr.url);
                /** @type {?} */
                const responseKey = responseURL.pathname + PIPE + xhr.method;
                /** @type {?} */
                const fixtureRouteDefs = this.urlMethodFixtureMap.get(responseKey);
                // If more routes exist, shift old fixture, and re-assign
                if (fixtureRouteDefs.length > 1) {
                    fixtureRouteDefs.shift();
                    /** @type {?} */
                    const updatedFixtureRouteDef = fixtureRouteDefs[0];
                    this.registerMockRoute(url, method, updatedFixtureRouteDef);
                }
            }),
        };
        cy.now('log', 'Registering mock route:');
        cy.now('log', 'url/method: ' + url + SLASH + method);
        cy.now('log', 'alias: ' + fixtureRouteDef.alias);
        cy.now('log', 'status: ' + fixtureRouteDef.status);
        cy.now('log', 'headers: ' + JSON.stringify(fixtureRouteDef.headers));
        cy.now('log', 'response: ' + JSON.stringify(fixtureRouteDef.response));
        cy.route(routeDef).as(fixtureRouteDef.alias);
    }
    /**
     * @param {?} xhr
     * @return {?}
     */
    recordResponse(xhr) {
        // Manipulate URL value to strip host info
        /** @type {?} */
        const url = xhr.url.substring(Cypress.config('baseUrl').length);
        /** @type {?} */
        const method = xhr.method;
        // Remove black listed headers
        /** @type {?} */
        const headers = {};
        Object.keys(xhr.response.headers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (allowedHeaders.indexOf(key) !== -1) {
                headers[key] = xhr.response.headers[key];
            }
        }));
        /** @type {?} */
        const fixtureRouteDef = {
            alias: url + PIPE + method,
            status: xhr.status,
            headers,
            response: xhr.response.body,
        };
        if (!this.recordedURLMethodFixtureMap[url]) {
            this.recordedURLMethodFixtureMap[url] = {};
        }
        /** @type {?} */
        const byMethodMap = this.recordedURLMethodFixtureMap[url];
        if (!byMethodMap[method]) {
            byMethodMap[method] = [];
        }
        cy.now('log', 'Recording response:');
        cy.now('log', 'url/method: ' + url + SLASH + method);
        cy.now('log', 'response: ' + JSON.stringify(fixtureRouteDef));
        byMethodMap[method].push(fixtureRouteDef);
    }
    /**
     * @return {?}
     */
    tearDown() {
        if (this.recording) {
            cy.now('log', 'Writing record fixture: ' + 'cypress/recordings/' + this.testName + SLASH + this.timestamp + '/mockdata.json');
            cy.now('writeFile', 'cypress/recordings/' + this.testName + SLASH + this.timestamp + '/mockdata.json', this.recordedURLMethodFixtureMap);
        }
        if (!this.mocking) {
            logout();
        }
    }
}
if (false) {
    /** @type {?} */
    MockUtility.prototype.timestamp;
    /** @type {?} */
    MockUtility.prototype.recordedURLMethodFixtureMap;
    /** @type {?} */
    MockUtility.prototype.urlMethodFixtureMap;
    /** @type {?} */
    MockUtility.prototype.mocking;
    /** @type {?} */
    MockUtility.prototype.recording;
    /** @type {?} */
    MockUtility.prototype.testType;
    /** @type {?} */
    MockUtility.prototype.testName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MockUtility, SSO_COOKIES, TestType, login, logout, waitForAngular, whiteListSSOCookies };
//# sourceMappingURL=td-vantage-ui-platform-testing-cypress.js.map
