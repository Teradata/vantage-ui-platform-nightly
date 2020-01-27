/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="cypress" />
/// <reference types="cypress" />
/// <reference types="cypress" />
import { login, logout, waitForAngular } from '../utility/utility';
import moment from 'moment';
/** @enum {string} */
const TestType = {
    'unit': 'unit',
    'e2e': 'e2e',
};
export { TestType };
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
export class MockUtility {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3V0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS90ZXN0aW5nL2N5cHJlc3MvIiwic291cmNlcyI6WyJtb2NrL21vY2t1dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7O0FBQWpDLGlDQUFpQztBQVlqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEYsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFHMUIsUUFBUyxNQUFNO0lBQ2YsT0FBUSxLQUFLOzs7OztJQUliLE9BQVEsS0FBSztJQUNiLE9BQVEsS0FBSztJQUNiLFFBQVMsTUFBTTtJQUNmLFNBQVUsT0FBTztJQUNqQixVQUFXLFFBQVE7Ozs7O0FBR3JCLHdCQU9DOzs7SUFOQyx3QkFBWTs7SUFDWiwyQkFBZTs7SUFDZiwyQkFBZ0I7O0lBQ2hCLDRCQUFjOztJQUNkLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7QUFHbkIsK0JBTUM7OztJQUxDLGlDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsbUNBQWM7O0lBQ2Qsb0NBQWU7O0lBQ2Ysc0NBQWlCOzs7TUFHYixjQUFjLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDOztNQUU3RixJQUFJLEdBQVcsR0FBRzs7TUFDbEIsS0FBSyxHQUFXLEdBQUc7QUFFekIsTUFBTSxPQUFPLFdBQVc7SUFBeEI7UUFJRSxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUE0TzdCLENBQUM7Ozs7Ozs7Ozs7O0lBL05DLEtBQUssQ0FBQyxRQUFnQixFQUFFLFFBQWtCLEVBQUUsU0FBbUIsRUFBRSxRQUFnQixFQUFFLFNBQWtCLEtBQUs7UUFDeEcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLFFB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QUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixFQUFFLENBQUMsR0FBRyxDQUNKLEtBQUssRUFDTCwwQkFBMEIsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUMvRyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FDSixXQUFXLEVBQ1gscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsRUFDakYsSUFBSSxDQUFDLDJCQUEyQixDQUNqQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixNQUFNLEVBQUUsQ0FBQztTQUNWO0lBQ0gsQ0FBQztDQUNGOzs7SUFoUEMsZ0NBQWtCOztJQUNsQixrREFBMEU7O0lBQzFFLDBDQUFxRDs7SUFDckQsOEJBQXlCOztJQUN6QixnQ0FBMkI7O0lBQzNCLCtCQUFtQjs7SUFDbkIsK0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgbmFtZXNwYWNlIEN5cHJlc3Mge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGludGVyZmFjZSBDaGFpbmFibGUge1xuICAgICAgbm93KGZ1bmM6IHN0cmluZywgLi4uYXJnczogYW55W10pOiBDaGFpbmFibGU8RWxlbWVudD47XG4gICAgfVxuICB9XG59XG5cbmltcG9ydCB7IGxvZ2luLCBsb2dvdXQsIElMb2dpbkNyZWRlbnRpYWxzLCB3YWl0Rm9yQW5ndWxhciB9IGZyb20gJy4uL3V0aWxpdHkvdXRpbGl0eSc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGVudW0gVGVzdFR5cGUge1xuICAndW5pdCcgPSAndW5pdCcsXG4gICdlMmUnID0gJ2UyZScsXG59XG5cbmVudW0gTWV0aG9kcyB7XG4gICdHRVQnID0gJ0dFVCcsXG4gICdQVVQnID0gJ1BVVCcsXG4gICdQT1NUJyA9ICdQT1NUJyxcbiAgJ1BBVENIJyA9ICdQQVRDSCcsXG4gICdERUxFVEUnID0gJ0RFTEVURScsXG59XG5cbmludGVyZmFjZSBJUm91dGVEZWYge1xuICB1cmw6IHN0cmluZztcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHN0YXR1cz86IG51bWJlcjtcbiAgaGVhZGVycz86IGFueTtcbiAgcmVzcG9uc2U/OiBhbnk7XG4gIG9uUmVzcG9uc2U/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJRml4dHVyZVJvdXRlRGVmIHtcbiAgYWxpYXM/OiBzdHJpbmc7XG4gIHN0YXR1cz86IG51bWJlcjtcbiAgaGVhZGVycz86IGFueTtcbiAgcmVzcG9uc2U/OiBhbnk7XG4gIG9uUmVzcG9uc2U/OiBhbnk7XG59XG5cbmNvbnN0IGFsbG93ZWRIZWFkZXJzOiBzdHJpbmdbXSA9IFsnY29udGVudC10eXBlJywgJ3gtbGVuZ3RoJywgJ3gtcGFnZScsICd4LXRvdGFsJywgJ3gtdG90YWwtcGFnZXMnXTtcblxuY29uc3QgUElQRTogc3RyaW5nID0gJ3wnO1xuY29uc3QgU0xBU0g6IHN0cmluZyA9ICcvJztcblxuZXhwb3J0IGNsYXNzIE1vY2tVdGlsaXR5IHtcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcDogTWFwPHN0cmluZywgTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPj47XG4gIHVybE1ldGhvZEZpeHR1cmVNYXA6IE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT47XG4gIG1vY2tpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVjb3JkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHRlc3RUeXBlOiBUZXN0VHlwZTtcbiAgdGVzdE5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogTWV0aG9kIHRoYXQgaGFuZGxlcyBhbGwgYm9pbGVycGxhdGUgd29yayB0byBzZXQgdXAgdGVzdC5cbiAgICpcbiAgICogQHBhcmFtIHRlc3ROYW1lIHRlc3RuYW1lIHVzZWQgdG8gZGV0ZXJtaW5lIGV4aXN0ZW5jZSBvZiB0ZXN0IHNwZWNpZmljIGZpeHR1cmVzIGFuZFxuICAgKiBAcGFyYW0gdGVzdFR5cGUgdW5pdCBvciBlMmVcbiAgICogQHBhcmFtIHRlbXBsYXRlcyBhcnJheSBvZiB0ZW1wbGF0ZXMgdG8gYmUgbG9hZGVkIChlZy4gJ2VtcHR5JyBvciAnZ29sZGVuJylcbiAgICogQHBhcmFtIHVzZXJOYW1lIHVzZXIgbmFtZSBtYXRjaGluZyBmaXh0dXJlIGNvbnRhaW5pbmcgY3JlZGVudGlhbHNcbiAgICogQHBhcmFtIHJlY29yZCBmb3JjZSByZWNvcmRpbmcgZm9yIHRoaXMgdGVzdCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgKi9cbiAgc2V0VXAodGVzdE5hbWU6IHN0cmluZywgdGVzdFR5cGU6IFRlc3RUeXBlLCB0ZW1wbGF0ZXM6IHN0cmluZ1tdLCB1c2VyTmFtZTogc3RyaW5nLCByZWNvcmQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGN5Lm5vdygnbG9nJywgJ1Rlc3Q6ICcgKyB0ZXN0TmFtZSArIFNMQVNIICsgdGVzdFR5cGUpO1xuICAgIHRoaXMudGVzdE5hbWUgPSB0ZXN0TmFtZTtcbiAgICB0aGlzLnRlc3RUeXBlID0gdGVzdFR5cGU7XG5cbiAgICAvLyBTdGFydCBzZXJ2ZXIgdG8gc3VwcG9ydCByb3V0ZXNcbiAgICBjeS5zZXJ2ZXIoKTtcblxuICAgIC8vIENyZWF0ZSB0aW1lc3RhbXAgYW5kIHN0cnVjdHVyZXMgdG8gcmV0YWluIGZpeHR1cmUgZGF0YVxuICAgIHRoaXMudGltZXN0YW1wID0gbW9tZW50KCkuZm9ybWF0KCdMVFMnKTtcbiAgICB0aGlzLnVybE1ldGhvZEZpeHR1cmVNYXAgPSBuZXcgTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPigpO1xuICAgIHRoaXMucmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4+KCk7XG5cbiAgICAvLyBDb25kaXRpb25hbGx5IHR1cm4gb24gcmVjb3JkaW5nXG4gICAgaWYgKEN5cHJlc3MuZW52KCdyZWNvcmQnKSB8fCByZWNvcmQpIHtcbiAgICAgIHRoaXMucmVjb3JkaW5nID0gdHJ1ZTtcblxuICAgICAgY3kubm93KCdsb2cnLCAnUmVjb3JkaW5nLi4uJyk7XG4gICAgICBjeS5yb3V0ZSh7XG4gICAgICAgIHVybDogJy9hcGkvKionLFxuICAgICAgICBvblJlc3BvbnNlOiAoeGhyOiBhbnkpID0+IHRoaXMucmVjb3JkUmVzcG9uc2UoeGhyKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvbmRpdGlvbmFsbHkgdHVybiBvbiBtb2NraW5nXG4gICAgaWYgKEN5cHJlc3MuZW52KCdtb2NrJykgfHwgdGVzdFR5cGUgPT09IFRlc3RUeXBlLnVuaXQpIHtcbiAgICAgIGN5Lm5vdygnbG9nJywgJ01vY2tpbmcuLi4nKTtcbiAgICAgIHRoaXMubW9ja2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJvdXRlcyBmb3IgdXNlciBsb2dvblxuICAgIGlmICh0aGlzLm1vY2tpbmcgJiYgIXRoaXMucmVjb3JkaW5nKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyUm91dGUodXNlck5hbWUpO1xuICAgIH1cbiAgICAvLyBMb2FkIHRlbXBsYXRlIGFuZCB0ZXN0IHNwZWNpZmljIHJvdXRlc1xuICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdGVyUm91dGUoJ3RlbXBsYXRlcy8nICsgdGVtcGxhdGUpO1xuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlKCd0ZW1wbGF0ZXMvJyArIHRlbXBsYXRlICsgU0xBU0ggKyB1c2VyTmFtZSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlclJvdXRlKCd0ZXN0c3BlY2lmaWMvJyArIHRlc3ROYW1lKTtcblxuICAgIC8vIEFkZCBuZXcgcm91dGUgY29tbWFuZCB0aGF0IGFsdGVycyBpdHMgYmVoYXZpb3IgYmFzZWQgb24gbW9kZS5cbiAgICAvLyBJZiByZWNvcmRpbmcgb3IgcHJvZHVjdGlvbiwganVzdCB3YWl0LlxuICAgIC8vIElmIG1vY2tpbmcsIGFsbG93IHJldHVybmluZyBtb2NrIHJlc3VsdHMuXG4gICAgQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ3JvdXRlMicsIChyb3V0ZURlZjogSVJvdXRlRGVmKSA9PiB7XG4gICAgICBpZiAoQ3lwcmVzcy5lbnYoJ21vY2snKSkge1xuICAgICAgICBjeS5ub3coJ2xvZycsICdTZXR0aW5nIHJvdXRlIHRvIG1vY2snKTtcbiAgICAgICAgY3kucm91dGUocm91dGVEZWYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3kubm93KCdsb2cnLCAnIFNldHRpbmcgcm91dGUgdG8gYWxpYXMnKTtcbiAgICAgICAgY3kucm91dGUocm91dGVEZWYudXJsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN5LnJvdXRlKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvYXBpL3VzZXIvbG9nb3V0JyxcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgcmVzcG9uc2U6IHt9LFxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGxvZ2luIGJhc2VkIG9uIG1vZGUuXG4gICAgLy8gTW9jaywgYnlwYXNzIGxvZ2luXG4gICAgLy8gT3RoZXJ3aXNlLCBsb2cgaW4gdXNpbmcgY3JlZGVudGlhbHMgZnJvbSBmaXh0dXJlLlxuICAgIGlmICh0aGlzLm1vY2tpbmcgJiYgIXRoaXMucmVjb3JkaW5nKSB7XG4gICAgICBjeS52aXNpdCgnLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjeS5maXh0dXJlKCdjcmVkZW50aWFscy8nICsgdXNlck5hbWUpLnRoZW4oKGNyZWRlbnRpYWxzOiBJTG9naW5DcmVkZW50aWFscykgPT4ge1xuICAgICAgICBsb2dpbihjcmVkZW50aWFscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciBwYWdlIHRvIGxvYWRcbiAgICB3YWl0Rm9yQW5ndWxhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2NvdmVyIGFueSBtb2NrIGRhdGEgZml4dHVyZXMgdW5kZXIgdGhlIHNwZWNpZmllZCBkaXJlY3RvcnkgaGllcmFyY2h5XG4gICAqIGFuZCByZWdpc3RlciBhc3NvY2lhdGVkIGN5LnJvdXRlcy5cbiAgICpcbiAgICogQHBhcmFtIGZpbGVuYW1lIGZpeHR1cmUgZmlsZW5hbWVcbiAgICovXG4gIHJlZ2lzdGVyUm91dGUoZGlyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGZpbGUgZXhpc3RzLlxuICAgIGNvbnN0IG1vY2tEYXRhRmlsZTogc3RyaW5nID0gZGlyICsgJy9tb2NrZGF0YS5qc29uJztcbiAgICBjeS5leGVjKCdpZiBbIC1mIGN5cHJlc3MvZml4dHVyZXMvJyArIG1vY2tEYXRhRmlsZSArICcgXTsgdGhlbiBscyBjeXByZXNzL2ZpeHR1cmVzLycgKyBtb2NrRGF0YUZpbGUgKyAnOyBmaScpLnRoZW4oXG4gICAgICAocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0cy5zdGRvdXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY3kuZml4dHVyZShtb2NrRGF0YUZpbGUpLnRoZW4oKGJ5VVJMUm91dGVzTWFwOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+PikgPT4ge1xuICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBmaWxlIHByb2Nlc3NpbmcgVVJML21ldGhvZCBtYXBwaW5nc1xuICAgICAgICAgIC8vIEZpbGUgaXMgYSBtYXAgd2l0aCBVUkwgYXMgdGhlIGtleS4gVmFsdWVzIGFyZSBtYXBzXG4gICAgICAgICAgLy8gaW4gdHVybiwgd2hlcmUgZWFjaCBtYXAgaGFzIG1ldGhvZCBhcyB0aGUga2V5IHZhbHVlLlxuICAgICAgICAgIC8vIFRoZSB2YWx1ZSBvZiB0aGVzZSBpbnRlcm5hbCBtYXBzIGlzIGFuIGFycmF5IG9mIHJlc3BvbnNlcy5cbiAgICAgICAgICBPYmplY3Qua2V5cyhieVVSTFJvdXRlc01hcCkuZm9yRWFjaCgodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ5TWV0aG9kUm91dGVzTWFwOiBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+ID0gYnlVUkxSb3V0ZXNNYXBbdXJsXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ5TWV0aG9kUm91dGVzTWFwKS5mb3JFYWNoKChtZXRob2Q6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmaXh0dXJlUm91dGVEZWZzOiBJRml4dHVyZVJvdXRlRGVmW10gPSBieU1ldGhvZFJvdXRlc01hcFttZXRob2RdO1xuICAgICAgICAgICAgICBjb25zdCB1cmxNZXRob2RLZXk6IHN0cmluZyA9IHVybCArIFBJUEUgKyBtZXRob2Q7XG4gICAgICAgICAgICAgIGxldCBmaXJzdFJvdXRlRGVmOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZpeHR1cmVSb3V0ZURlZnMuZm9yRWFjaCgoZml4dHVyZVJvdXRlRGVmOiBJRml4dHVyZVJvdXRlRGVmKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gS25vd24gbW9ja3Mgc3VwZXJjZWRlIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vY2tpbmcpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVybE1ldGhvZEZpeHR1cmVNYXAuZ2V0KHVybE1ldGhvZEtleSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybE1ldGhvZEZpeHR1cmVNYXAuc2V0KHVybE1ldGhvZEtleSwgW10pO1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvdXRlRGVmID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMudXJsTWV0aG9kRml4dHVyZU1hcC5nZXQodXJsTWV0aG9kS2V5KS5wdXNoKGZpeHR1cmVSb3V0ZURlZik7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFJvdXRlRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb2NrUm91dGUodXJsLCBtZXRob2QsIGZpeHR1cmVSb3V0ZURlZik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlY29yZGluZykge1xuICAgICAgICAgICAgICAgICAgLy8gb25SZXNwb25zZSByZWNvcmRzIFhIUiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVEZWY6IElSb3V0ZURlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzcG9uc2U6ICh4aHI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkUmVzcG9uc2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGN5Lm5vdygnbG9nJywgJ1JlZ2lzdGVyaW5nIHJlY29yZGluZyByb3V0ZTonKTtcbiAgICAgICAgICAgICAgICAgIGN5Lm5vdygnbG9nJywgJ3VybC9tZXRob2Q6ICcgKyB1cmwgKyBTTEFTSCArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICBjeS5yb3V0ZShyb3V0ZURlZikuYXMoZml4dHVyZVJvdXRlRGVmLmFsaWFzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVEZWY6IElSb3V0ZURlZiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBjeS5ub3coJ2xvZycsICdSZWdpc3RlcmluZyBhbGlhcyByb3V0ZTonKTtcbiAgICAgICAgICAgICAgICAgIGN5Lm5vdygnbG9nJywgJ3VybC9tZXRob2Q6ICcgKyB1cmwgKyBTTEFTSCArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICBjeS5ub3coJ2xvZycsICdhbGlhczogJyArIGZpeHR1cmVSb3V0ZURlZi5hbGlhcyk7XG4gICAgICAgICAgICAgICAgICBjeS5yb3V0ZShyb3V0ZURlZikuYXMoZml4dHVyZVJvdXRlRGVmLmFsaWFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXJNb2NrUm91dGUodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBmaXh0dXJlUm91dGVEZWY6IElGaXh0dXJlUm91dGVEZWYpOiB2b2lkIHtcbiAgICBjb25zdCByb3V0ZURlZjogSVJvdXRlRGVmID0ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kLFxuICAgICAgc3RhdHVzOiBmaXh0dXJlUm91dGVEZWYuc3RhdHVzLFxuICAgICAgaGVhZGVyczogZml4dHVyZVJvdXRlRGVmLmhlYWRlcnMsXG4gICAgICByZXNwb25zZTogZml4dHVyZVJvdXRlRGVmLnJlc3BvbnNlLFxuICAgICAgb25SZXNwb25zZTogKHhocjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVVJMOiBVUkwgPSBuZXcgVVJMKHhoci51cmwpO1xuICAgICAgICBjb25zdCByZXNwb25zZUtleTogc3RyaW5nID0gcmVzcG9uc2VVUkwucGF0aG5hbWUgKyBQSVBFICsgeGhyLm1ldGhvZDtcbiAgICAgICAgY29uc3QgZml4dHVyZVJvdXRlRGVmczogSUZpeHR1cmVSb3V0ZURlZltdID0gdGhpcy51cmxNZXRob2RGaXh0dXJlTWFwLmdldChyZXNwb25zZUtleSk7XG4gICAgICAgIC8vIElmIG1vcmUgcm91dGVzIGV4aXN0LCBzaGlmdCBvbGQgZml4dHVyZSwgYW5kIHJlLWFzc2lnblxuICAgICAgICBpZiAoZml4dHVyZVJvdXRlRGVmcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZml4dHVyZVJvdXRlRGVmcy5zaGlmdCgpO1xuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRGaXh0dXJlUm91dGVEZWY6IElGaXh0dXJlUm91dGVEZWYgPSBmaXh0dXJlUm91dGVEZWZzWzBdO1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb2NrUm91dGUodXJsLCBtZXRob2QsIHVwZGF0ZWRGaXh0dXJlUm91dGVEZWYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjeS5ub3coJ2xvZycsICdSZWdpc3RlcmluZyBtb2NrIHJvdXRlOicpO1xuICAgIGN5Lm5vdygnbG9nJywgJ3VybC9tZXRob2Q6ICcgKyB1cmwgKyBTTEFTSCArIG1ldGhvZCk7XG4gICAgY3kubm93KCdsb2cnLCAnYWxpYXM6ICcgKyBmaXh0dXJlUm91dGVEZWYuYWxpYXMpO1xuICAgIGN5Lm5vdygnbG9nJywgJ3N0YXR1czogJyArIGZpeHR1cmVSb3V0ZURlZi5zdGF0dXMpO1xuICAgIGN5Lm5vdygnbG9nJywgJ2hlYWRlcnM6ICcgKyBKU09OLnN0cmluZ2lmeShmaXh0dXJlUm91dGVEZWYuaGVhZGVycykpO1xuICAgIGN5Lm5vdygnbG9nJywgJ3Jlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkoZml4dHVyZVJvdXRlRGVmLnJlc3BvbnNlKSk7XG4gICAgY3kucm91dGUocm91dGVEZWYpLmFzKGZpeHR1cmVSb3V0ZURlZi5hbGlhcyk7XG4gIH1cblxuICByZWNvcmRSZXNwb25zZSh4aHI6IGFueSk6IHZvaWQge1xuICAgIC8vIE1hbmlwdWxhdGUgVVJMIHZhbHVlIHRvIHN0cmlwIGhvc3QgaW5mb1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0geGhyLnVybC5zdWJzdHJpbmcoQ3lwcmVzcy5jb25maWcoJ2Jhc2VVcmwnKS5sZW5ndGgpO1xuICAgIGNvbnN0IG1ldGhvZDogc3RyaW5nID0geGhyLm1ldGhvZDtcblxuICAgIC8vIFJlbW92ZSBibGFjayBsaXN0ZWQgaGVhZGVyc1xuICAgIGNvbnN0IGhlYWRlcnM6IGFueSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHhoci5yZXNwb25zZS5oZWFkZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGFsbG93ZWRIZWFkZXJzLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcbiAgICAgICAgaGVhZGVyc1trZXldID0geGhyLnJlc3BvbnNlLmhlYWRlcnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpeHR1cmVSb3V0ZURlZjogSUZpeHR1cmVSb3V0ZURlZiA9IHtcbiAgICAgIGFsaWFzOiB1cmwgKyBQSVBFICsgbWV0aG9kLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UuYm9keSxcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLnJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcFt1cmxdKSB7XG4gICAgICB0aGlzLnJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcFt1cmxdID0ge307XG4gICAgfVxuICAgIGNvbnN0IGJ5TWV0aG9kTWFwOiBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+ID0gdGhpcy5yZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXBbdXJsXTtcbiAgICBpZiAoIWJ5TWV0aG9kTWFwW21ldGhvZF0pIHtcbiAgICAgIGJ5TWV0aG9kTWFwW21ldGhvZF0gPSBbXTtcbiAgICB9XG4gICAgY3kubm93KCdsb2cnLCAnUmVjb3JkaW5nIHJlc3BvbnNlOicpO1xuICAgIGN5Lm5vdygnbG9nJywgJ3VybC9tZXRob2Q6ICcgKyB1cmwgKyBTTEFTSCArIG1ldGhvZCk7XG4gICAgY3kubm93KCdsb2cnLCAncmVzcG9uc2U6ICcgKyBKU09OLnN0cmluZ2lmeShmaXh0dXJlUm91dGVEZWYpKTtcbiAgICBieU1ldGhvZE1hcFttZXRob2RdLnB1c2goZml4dHVyZVJvdXRlRGVmKTtcbiAgfVxuXG4gIHRlYXJEb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlY29yZGluZykge1xuICAgICAgY3kubm93KFxuICAgICAgICAnbG9nJyxcbiAgICAgICAgJ1dyaXRpbmcgcmVjb3JkIGZpeHR1cmU6ICcgKyAnY3lwcmVzcy9yZWNvcmRpbmdzLycgKyB0aGlzLnRlc3ROYW1lICsgU0xBU0ggKyB0aGlzLnRpbWVzdGFtcCArICcvbW9ja2RhdGEuanNvbicsXG4gICAgICApO1xuICAgICAgY3kubm93KFxuICAgICAgICAnd3JpdGVGaWxlJyxcbiAgICAgICAgJ2N5cHJlc3MvcmVjb3JkaW5ncy8nICsgdGhpcy50ZXN0TmFtZSArIFNMQVNIICsgdGhpcy50aW1lc3RhbXAgKyAnL21vY2tkYXRhLmpzb24nLFxuICAgICAgICB0aGlzLnJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcCxcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2NraW5nKSB7XG4gICAgICBsb2dvdXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==