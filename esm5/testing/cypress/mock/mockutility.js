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
var TestType = {
    'unit': 'unit',
    'e2e': 'e2e',
};
export { TestType };
/** @enum {string} */
var Methods = {
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
var allowedHeaders = ['content-type', 'x-length', 'x-page', 'x-total', 'x-total-pages'];
/** @type {?} */
var PIPE = '|';
/** @type {?} */
var SLASH = '/';
var MockUtility = /** @class */ (function () {
    function MockUtility() {
        this.mocking = false;
        this.recording = false;
    }
    /**
     * Method that handles all boilerplate work to set up test.
     *
     * @param testName testname used to determine existence of test specific fixtures and
     * @param testType unit or e2e
     * @param templates array of templates to be loaded (eg. 'empty' or 'golden')
     * @param userName user name matching fixture containing credentials
     * @param record force recording for this test, default is false
     */
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
    MockUtility.prototype.setUp = /**
     * Method that handles all boilerplate work to set up test.
     *
     * @param {?} testName testname used to determine existence of test specific fixtures and
     * @param {?} testType unit or e2e
     * @param {?} templates array of templates to be loaded (eg. 'empty' or 'golden')
     * @param {?} userName user name matching fixture containing credentials
     * @param {?=} record force recording for this test, default is false
     * @return {?}
     */
    function (testName, testType, templates, userName, record) {
        var _this = this;
        if (record === void 0) { record = false; }
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
                function (xhr) { return _this.recordResponse(xhr); }),
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
        function (template) {
            _this.registerRoute('templates/' + template);
            _this.registerRoute('templates/' + template + SLASH + userName);
        }));
        this.registerRoute('testspecific/' + testName);
        // Add new route command that alters its behavior based on mode.
        // If recording or production, just wait.
        // If mocking, allow returning mock results.
        Cypress.Commands.add('route2', (/**
         * @param {?} routeDef
         * @return {?}
         */
        function (routeDef) {
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
            function (credentials) {
                login(credentials);
            }));
        }
        // Wait for page to load
        waitForAngular();
    };
    /**
     * Discover any mock data fixtures under the specified directory hierarchy
     * and register associated cy.routes.
     *
     * @param filename fixture filename
     */
    /**
     * Discover any mock data fixtures under the specified directory hierarchy
     * and register associated cy.routes.
     *
     * @param {?} dir
     * @return {?}
     */
    MockUtility.prototype.registerRoute = /**
     * Discover any mock data fixtures under the specified directory hierarchy
     * and register associated cy.routes.
     *
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        var _this = this;
        // Check to see if the file exists.
        /** @type {?} */
        var mockDataFile = dir + '/mockdata.json';
        cy.exec('if [ -f cypress/fixtures/' + mockDataFile + ' ]; then ls cypress/fixtures/' + mockDataFile + '; fi').then((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (!results.stdout) {
                return;
            }
            cy.fixture(mockDataFile).then((/**
             * @param {?} byURLRoutesMap
             * @return {?}
             */
            function (byURLRoutesMap) {
                // Iterate through file processing URL/method mappings
                // File is a map with URL as the key. Values are maps
                // in turn, where each map has method as the key value.
                // The value of these internal maps is an array of responses.
                Object.keys(byURLRoutesMap).forEach((/**
                 * @param {?} url
                 * @return {?}
                 */
                function (url) {
                    /** @type {?} */
                    var byMethodRoutesMap = byURLRoutesMap[url];
                    Object.keys(byMethodRoutesMap).forEach((/**
                     * @param {?} method
                     * @return {?}
                     */
                    function (method) {
                        /** @type {?} */
                        var fixtureRouteDefs = byMethodRoutesMap[method];
                        /** @type {?} */
                        var urlMethodKey = url + PIPE + method;
                        /** @type {?} */
                        var firstRouteDef = false;
                        fixtureRouteDefs.forEach((/**
                         * @param {?} fixtureRouteDef
                         * @return {?}
                         */
                        function (fixtureRouteDef) {
                            // Known mocks supercede recording
                            if (_this.mocking) {
                                if (_this.urlMethodFixtureMap.get(urlMethodKey) === undefined) {
                                    _this.urlMethodFixtureMap.set(urlMethodKey, []);
                                    firstRouteDef = true;
                                }
                                _this.urlMethodFixtureMap.get(urlMethodKey).push(fixtureRouteDef);
                                if (firstRouteDef) {
                                    _this.registerMockRoute(url, method, fixtureRouteDef);
                                }
                            }
                            else if (_this.recording) {
                                // onResponse records XHR response
                                /** @type {?} */
                                var routeDef = {
                                    method: method,
                                    url: url,
                                    onResponse: (/**
                                     * @param {?} xhr
                                     * @return {?}
                                     */
                                    function (xhr) {
                                        _this.recordResponse(xhr);
                                    }),
                                };
                                cy.now('log', 'Registering recording route:');
                                cy.now('log', 'url/method: ' + url + SLASH + method);
                                cy.route(routeDef).as(fixtureRouteDef.alias);
                            }
                            else {
                                /** @type {?} */
                                var routeDef = {
                                    method: method,
                                    url: url,
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
    };
    /**
     * @param {?} url
     * @param {?} method
     * @param {?} fixtureRouteDef
     * @return {?}
     */
    MockUtility.prototype.registerMockRoute = /**
     * @param {?} url
     * @param {?} method
     * @param {?} fixtureRouteDef
     * @return {?}
     */
    function (url, method, fixtureRouteDef) {
        var _this = this;
        /** @type {?} */
        var routeDef = {
            url: url,
            method: method,
            status: fixtureRouteDef.status,
            headers: fixtureRouteDef.headers,
            response: fixtureRouteDef.response,
            onResponse: (/**
             * @param {?} xhr
             * @return {?}
             */
            function (xhr) {
                /** @type {?} */
                var responseURL = new URL(xhr.url);
                /** @type {?} */
                var responseKey = responseURL.pathname + PIPE + xhr.method;
                /** @type {?} */
                var fixtureRouteDefs = _this.urlMethodFixtureMap.get(responseKey);
                // If more routes exist, shift old fixture, and re-assign
                if (fixtureRouteDefs.length > 1) {
                    fixtureRouteDefs.shift();
                    /** @type {?} */
                    var updatedFixtureRouteDef = fixtureRouteDefs[0];
                    _this.registerMockRoute(url, method, updatedFixtureRouteDef);
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
    };
    /**
     * @param {?} xhr
     * @return {?}
     */
    MockUtility.prototype.recordResponse = /**
     * @param {?} xhr
     * @return {?}
     */
    function (xhr) {
        // Manipulate URL value to strip host info
        /** @type {?} */
        var url = xhr.url.substring(Cypress.config('baseUrl').length);
        /** @type {?} */
        var method = xhr.method;
        // Remove black listed headers
        /** @type {?} */
        var headers = {};
        Object.keys(xhr.response.headers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (allowedHeaders.indexOf(key) !== -1) {
                headers[key] = xhr.response.headers[key];
            }
        }));
        /** @type {?} */
        var fixtureRouteDef = {
            alias: url + PIPE + method,
            status: xhr.status,
            headers: headers,
            response: xhr.response.body,
        };
        if (!this.recordedURLMethodFixtureMap[url]) {
            this.recordedURLMethodFixtureMap[url] = {};
        }
        /** @type {?} */
        var byMethodMap = this.recordedURLMethodFixtureMap[url];
        if (!byMethodMap[method]) {
            byMethodMap[method] = [];
        }
        cy.now('log', 'Recording response:');
        cy.now('log', 'url/method: ' + url + SLASH + method);
        cy.now('log', 'response: ' + JSON.stringify(fixtureRouteDef));
        byMethodMap[method].push(fixtureRouteDef);
    };
    /**
     * @return {?}
     */
    MockUtility.prototype.tearDown = /**
     * @return {?}
     */
    function () {
        if (this.recording) {
            cy.now('log', 'Writing record fixture: ' + 'cypress/recordings/' + this.testName + SLASH + this.timestamp + '/mockdata.json');
            cy.now('writeFile', 'cypress/recordings/' + this.testName + SLASH + this.timestamp + '/mockdata.json', this.recordedURLMethodFixtureMap);
        }
        if (!this.mocking) {
            logout();
        }
    };
    return MockUtility;
}());
export { MockUtility };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3V0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS90ZXN0aW5nL2N5cHJlc3MvIiwic291cmNlcyI6WyJtb2NrL21vY2t1dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7O0FBQWpDLGlDQUFpQztBQVlqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEYsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFHMUIsUUFBUyxNQUFNO0lBQ2YsT0FBUSxLQUFLOzs7OztJQUliLE9BQVEsS0FBSztJQUNiLE9BQVEsS0FBSztJQUNiLFFBQVMsTUFBTTtJQUNmLFNBQVUsT0FBTztJQUNqQixVQUFXLFFBQVE7Ozs7O0FBR3JCLHdCQU9DOzs7SUFOQyx3QkFBWTs7SUFDWiwyQkFBZTs7SUFDZiwyQkFBZ0I7O0lBQ2hCLDRCQUFjOztJQUNkLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7QUFHbkIsK0JBTUM7OztJQUxDLGlDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsbUNBQWM7O0lBQ2Qsb0NBQWU7O0lBQ2Ysc0NBQWlCOzs7SUFHYixjQUFjLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDOztJQUU3RixJQUFJLEdBQVcsR0FBRzs7SUFDbEIsS0FBSyxHQUFXLEdBQUc7QUFFekI7SUFBQTtRQUlFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQTRPN0IsQ0FBQztJQXhPQzs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7Ozs7OztJQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFrQixFQUFFLFNBQW1CLEVBQUUsUUFBZ0IsRUFBRSxNQUF1QjtRQUExRyxpQkEwRUM7UUExRWtGLHVCQUFBLEVBQUEsY0FBdUI7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LENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixFQUFFLENBQUMsR0FBRyxDQUNKLEtBQUssRUFDTCwwQkFBMEIsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUMvRyxDQUFDO1lBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FDSixXQUFXLEVBQ1gscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsRUFDakYsSUFBSSxDQUFDLDJCQUEyQixDQUNqQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixNQUFNLEVBQUUsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQWpQRCxJQWlQQzs7OztJQWhQQyxnQ0FBa0I7O0lBQ2xCLGtEQUEwRTs7SUFDMUUsMENBQXFEOztJQUNyRCw4QkFBeUI7O0lBQ3pCLGdDQUEyQjs7SUFDM0IsK0JBQW1COztJQUNuQiwrQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBuYW1lc3BhY2UgQ3lwcmVzcyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgaW50ZXJmYWNlIENoYWluYWJsZSB7XG4gICAgICBub3coZnVuYzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IENoYWluYWJsZTxFbGVtZW50PjtcbiAgICB9XG4gIH1cbn1cblxuaW1wb3J0IHsgbG9naW4sIGxvZ291dCwgSUxvZ2luQ3JlZGVudGlhbHMsIHdhaXRGb3JBbmd1bGFyIH0gZnJvbSAnLi4vdXRpbGl0eS91dGlsaXR5JztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZW51bSBUZXN0VHlwZSB7XG4gICd1bml0JyA9ICd1bml0JyxcbiAgJ2UyZScgPSAnZTJlJyxcbn1cblxuZW51bSBNZXRob2RzIHtcbiAgJ0dFVCcgPSAnR0VUJyxcbiAgJ1BVVCcgPSAnUFVUJyxcbiAgJ1BPU1QnID0gJ1BPU1QnLFxuICAnUEFUQ0gnID0gJ1BBVENIJyxcbiAgJ0RFTEVURScgPSAnREVMRVRFJyxcbn1cblxuaW50ZXJmYWNlIElSb3V0ZURlZiB7XG4gIHVybDogc3RyaW5nO1xuICBtZXRob2Q6IHN0cmluZztcbiAgc3RhdHVzPzogbnVtYmVyO1xuICBoZWFkZXJzPzogYW55O1xuICByZXNwb25zZT86IGFueTtcbiAgb25SZXNwb25zZT86IGFueTtcbn1cblxuaW50ZXJmYWNlIElGaXh0dXJlUm91dGVEZWYge1xuICBhbGlhcz86IHN0cmluZztcbiAgc3RhdHVzPzogbnVtYmVyO1xuICBoZWFkZXJzPzogYW55O1xuICByZXNwb25zZT86IGFueTtcbiAgb25SZXNwb25zZT86IGFueTtcbn1cblxuY29uc3QgYWxsb3dlZEhlYWRlcnM6IHN0cmluZ1tdID0gWydjb250ZW50LXR5cGUnLCAneC1sZW5ndGgnLCAneC1wYWdlJywgJ3gtdG90YWwnLCAneC10b3RhbC1wYWdlcyddO1xuXG5jb25zdCBQSVBFOiBzdHJpbmcgPSAnfCc7XG5jb25zdCBTTEFTSDogc3RyaW5nID0gJy8nO1xuXG5leHBvcnQgY2xhc3MgTW9ja1V0aWxpdHkge1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgcmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+PjtcbiAgdXJsTWV0aG9kRml4dHVyZU1hcDogTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPjtcbiAgbW9ja2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICByZWNvcmRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGVzdFR5cGU6IFRlc3RUeXBlO1xuICB0ZXN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCBoYW5kbGVzIGFsbCBib2lsZXJwbGF0ZSB3b3JrIHRvIHNldCB1cCB0ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0gdGVzdE5hbWUgdGVzdG5hbWUgdXNlZCB0byBkZXRlcm1pbmUgZXhpc3RlbmNlIG9mIHRlc3Qgc3BlY2lmaWMgZml4dHVyZXMgYW5kXG4gICAqIEBwYXJhbSB0ZXN0VHlwZSB1bml0IG9yIGUyZVxuICAgKiBAcGFyYW0gdGVtcGxhdGVzIGFycmF5IG9mIHRlbXBsYXRlcyB0byBiZSBsb2FkZWQgKGVnLiAnZW1wdHknIG9yICdnb2xkZW4nKVxuICAgKiBAcGFyYW0gdXNlck5hbWUgdXNlciBuYW1lIG1hdGNoaW5nIGZpeHR1cmUgY29udGFpbmluZyBjcmVkZW50aWFsc1xuICAgKiBAcGFyYW0gcmVjb3JkIGZvcmNlIHJlY29yZGluZyBmb3IgdGhpcyB0ZXN0LCBkZWZhdWx0IGlzIGZhbHNlXG4gICAqL1xuICBzZXRVcCh0ZXN0TmFtZTogc3RyaW5nLCB0ZXN0VHlwZTogVGVzdFR5cGUsIHRlbXBsYXRlczogc3RyaW5nW10sIHVzZXJOYW1lOiBzdHJpbmcsIHJlY29yZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgY3kubm93KCdsb2cnLCAnVGVzdDogJyArIHRlc3ROYW1lICsgU0xBU0ggKyB0ZXN0VHlwZSk7XG4gICAgdGhpcy50ZXN0TmFtZSA9IHRlc3ROYW1lO1xuICAgIHRoaXMudGVzdFR5cGUgPSB0ZXN0VHlwZTtcblxuICAgIC8vIFN0YXJ0IHNlcnZlciB0byBzdXBwb3J0IHJvdXRlc1xuICAgIGN5LnNlcnZlcigpO1xuXG4gICAgLy8gQ3JlYXRlIHRpbWVzdGFtcCBhbmQgc3RydWN0dXJlcyB0byByZXRhaW4gZml4dHVyZSBkYXRhXG4gICAgdGhpcy50aW1lc3RhbXAgPSBtb21lbnQoKS5mb3JtYXQoJ0xUUycpO1xuICAgIHRoaXMudXJsTWV0aG9kRml4dHVyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+KCk7XG4gICAgdGhpcy5yZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXAgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPj4oKTtcblxuICAgIC8vIENvbmRpdGlvbmFsbHkgdHVybiBvbiByZWNvcmRpbmdcbiAgICBpZiAoQ3lwcmVzcy5lbnYoJ3JlY29yZCcpIHx8IHJlY29yZCkge1xuICAgICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xuXG4gICAgICBjeS5ub3coJ2xvZycsICdSZWNvcmRpbmcuLi4nKTtcbiAgICAgIGN5LnJvdXRlKHtcbiAgICAgICAgdXJsOiAnL2FwaS8qKicsXG4gICAgICAgIG9uUmVzcG9uc2U6ICh4aHI6IGFueSkgPT4gdGhpcy5yZWNvcmRSZXNwb25zZSh4aHIpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29uZGl0aW9uYWxseSB0dXJuIG9uIG1vY2tpbmdcbiAgICBpZiAoQ3lwcmVzcy5lbnYoJ21vY2snKSB8fCB0ZXN0VHlwZSA9PT0gVGVzdFR5cGUudW5pdCkge1xuICAgICAgY3kubm93KCdsb2cnLCAnTW9ja2luZy4uLicpO1xuICAgICAgdGhpcy5tb2NraW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcm91dGVzIGZvciB1c2VyIGxvZ29uXG4gICAgaWYgKHRoaXMubW9ja2luZyAmJiAhdGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZSh1c2VyTmFtZSk7XG4gICAgfVxuICAgIC8vIExvYWQgdGVtcGxhdGUgYW5kIHRlc3Qgc3BlY2lmaWMgcm91dGVzXG4gICAgdGVtcGxhdGVzLmZvckVhY2goKHRlbXBsYXRlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZSgndGVtcGxhdGVzLycgKyB0ZW1wbGF0ZSk7XG4gICAgICB0aGlzLnJlZ2lzdGVyUm91dGUoJ3RlbXBsYXRlcy8nICsgdGVtcGxhdGUgKyBTTEFTSCArIHVzZXJOYW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZ2lzdGVyUm91dGUoJ3Rlc3RzcGVjaWZpYy8nICsgdGVzdE5hbWUpO1xuXG4gICAgLy8gQWRkIG5ldyByb3V0ZSBjb21tYW5kIHRoYXQgYWx0ZXJzIGl0cyBiZWhhdmlvciBiYXNlZCBvbiBtb2RlLlxuICAgIC8vIElmIHJlY29yZGluZyBvciBwcm9kdWN0aW9uLCBqdXN0IHdhaXQuXG4gICAgLy8gSWYgbW9ja2luZywgYWxsb3cgcmV0dXJuaW5nIG1vY2sgcmVzdWx0cy5cbiAgICBDeXByZXNzLkNvbW1hbmRzLmFkZCgncm91dGUyJywgKHJvdXRlRGVmOiBJUm91dGVEZWYpID0+IHtcbiAgICAgIGlmIChDeXByZXNzLmVudignbW9jaycpKSB7XG4gICAgICAgIGN5Lm5vdygnbG9nJywgJ1NldHRpbmcgcm91dGUgdG8gbW9jaycpO1xuICAgICAgICBjeS5yb3V0ZShyb3V0ZURlZik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjeS5ub3coJ2xvZycsICcgU2V0dGluZyByb3V0ZSB0byBhbGlhcycpO1xuICAgICAgICBjeS5yb3V0ZShyb3V0ZURlZi51cmwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3kucm91dGUoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9hcGkvdXNlci9sb2dvdXQnLFxuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICByZXNwb25zZToge30sXG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgbG9naW4gYmFzZWQgb24gbW9kZS5cbiAgICAvLyBNb2NrLCBieXBhc3MgbG9naW5cbiAgICAvLyBPdGhlcndpc2UsIGxvZyBpbiB1c2luZyBjcmVkZW50aWFscyBmcm9tIGZpeHR1cmUuXG4gICAgaWYgKHRoaXMubW9ja2luZyAmJiAhdGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgIGN5LnZpc2l0KCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN5LmZpeHR1cmUoJ2NyZWRlbnRpYWxzLycgKyB1c2VyTmFtZSkudGhlbigoY3JlZGVudGlhbHM6IElMb2dpbkNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgIGxvZ2luKGNyZWRlbnRpYWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIHBhZ2UgdG8gbG9hZFxuICAgIHdhaXRGb3JBbmd1bGFyKCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzY292ZXIgYW55IG1vY2sgZGF0YSBmaXh0dXJlcyB1bmRlciB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeSBoaWVyYXJjaHlcbiAgICogYW5kIHJlZ2lzdGVyIGFzc29jaWF0ZWQgY3kucm91dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsZW5hbWUgZml4dHVyZSBmaWxlbmFtZVxuICAgKi9cbiAgcmVnaXN0ZXJSb3V0ZShkaXI6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZmlsZSBleGlzdHMuXG4gICAgY29uc3QgbW9ja0RhdGFGaWxlOiBzdHJpbmcgPSBkaXIgKyAnL21vY2tkYXRhLmpzb24nO1xuICAgIGN5LmV4ZWMoJ2lmIFsgLWYgY3lwcmVzcy9maXh0dXJlcy8nICsgbW9ja0RhdGFGaWxlICsgJyBdOyB0aGVuIGxzIGN5cHJlc3MvZml4dHVyZXMvJyArIG1vY2tEYXRhRmlsZSArICc7IGZpJykudGhlbihcbiAgICAgIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHRzLnN0ZG91dCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjeS5maXh0dXJlKG1vY2tEYXRhRmlsZSkudGhlbigoYnlVUkxSb3V0ZXNNYXA6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4+KSA9PiB7XG4gICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGZpbGUgcHJvY2Vzc2luZyBVUkwvbWV0aG9kIG1hcHBpbmdzXG4gICAgICAgICAgLy8gRmlsZSBpcyBhIG1hcCB3aXRoIFVSTCBhcyB0aGUga2V5LiBWYWx1ZXMgYXJlIG1hcHNcbiAgICAgICAgICAvLyBpbiB0dXJuLCB3aGVyZSBlYWNoIG1hcCBoYXMgbWV0aG9kIGFzIHRoZSBrZXkgdmFsdWUuXG4gICAgICAgICAgLy8gVGhlIHZhbHVlIG9mIHRoZXNlIGludGVybmFsIG1hcHMgaXMgYW4gYXJyYXkgb2YgcmVzcG9uc2VzLlxuICAgICAgICAgIE9iamVjdC5rZXlzKGJ5VVJMUm91dGVzTWFwKS5mb3JFYWNoKCh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnlNZXRob2RSb3V0ZXNNYXA6IE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4gPSBieVVSTFJvdXRlc01hcFt1cmxdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnlNZXRob2RSb3V0ZXNNYXApLmZvckVhY2goKG1ldGhvZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpeHR1cmVSb3V0ZURlZnM6IElGaXh0dXJlUm91dGVEZWZbXSA9IGJ5TWV0aG9kUm91dGVzTWFwW21ldGhvZF07XG4gICAgICAgICAgICAgIGNvbnN0IHVybE1ldGhvZEtleTogc3RyaW5nID0gdXJsICsgUElQRSArIG1ldGhvZDtcbiAgICAgICAgICAgICAgbGV0IGZpcnN0Um91dGVEZWY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgZml4dHVyZVJvdXRlRGVmcy5mb3JFYWNoKChmaXh0dXJlUm91dGVEZWY6IElGaXh0dXJlUm91dGVEZWYpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBLbm93biBtb2NrcyBzdXBlcmNlZGUgcmVjb3JkaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubW9ja2luZykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXJsTWV0aG9kRml4dHVyZU1hcC5nZXQodXJsTWV0aG9kS2V5KSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXJsTWV0aG9kRml4dHVyZU1hcC5zZXQodXJsTWV0aG9kS2V5LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um91dGVEZWYgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy51cmxNZXRob2RGaXh0dXJlTWFwLmdldCh1cmxNZXRob2RLZXkpLnB1c2goZml4dHVyZVJvdXRlRGVmKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0Um91dGVEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1vY2tSb3V0ZSh1cmwsIG1ldGhvZCwgZml4dHVyZVJvdXRlRGVmKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVjb3JkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAvLyBvblJlc3BvbnNlIHJlY29yZHMgWEhSIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZURlZjogSVJvdXRlRGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgb25SZXNwb25zZTogKHhocjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRSZXNwb25zZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgY3kubm93KCdsb2cnLCAnUmVnaXN0ZXJpbmcgcmVjb3JkaW5nIHJvdXRlOicpO1xuICAgICAgICAgICAgICAgICAgY3kubm93KCdsb2cnLCAndXJsL21ldGhvZDogJyArIHVybCArIFNMQVNIICsgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgIGN5LnJvdXRlKHJvdXRlRGVmKS5hcyhmaXh0dXJlUm91dGVEZWYuYWxpYXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZURlZjogSVJvdXRlRGVmID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGN5Lm5vdygnbG9nJywgJ1JlZ2lzdGVyaW5nIGFsaWFzIHJvdXRlOicpO1xuICAgICAgICAgICAgICAgICAgY3kubm93KCdsb2cnLCAndXJsL21ldGhvZDogJyArIHVybCArIFNMQVNIICsgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgIGN5Lm5vdygnbG9nJywgJ2FsaWFzOiAnICsgZml4dHVyZVJvdXRlRGVmLmFsaWFzKTtcbiAgICAgICAgICAgICAgICAgIGN5LnJvdXRlKHJvdXRlRGVmKS5hcyhmaXh0dXJlUm91dGVEZWYuYWxpYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICByZWdpc3Rlck1vY2tSb3V0ZSh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGZpeHR1cmVSb3V0ZURlZjogSUZpeHR1cmVSb3V0ZURlZik6IHZvaWQge1xuICAgIGNvbnN0IHJvdXRlRGVmOiBJUm91dGVEZWYgPSB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2QsXG4gICAgICBzdGF0dXM6IGZpeHR1cmVSb3V0ZURlZi5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiBmaXh0dXJlUm91dGVEZWYuaGVhZGVycyxcbiAgICAgIHJlc3BvbnNlOiBmaXh0dXJlUm91dGVEZWYucmVzcG9uc2UsXG4gICAgICBvblJlc3BvbnNlOiAoeGhyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VVUkw6IFVSTCA9IG5ldyBVUkwoeGhyLnVybCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlS2V5OiBzdHJpbmcgPSByZXNwb25zZVVSTC5wYXRobmFtZSArIFBJUEUgKyB4aHIubWV0aG9kO1xuICAgICAgICBjb25zdCBmaXh0dXJlUm91dGVEZWZzOiBJRml4dHVyZVJvdXRlRGVmW10gPSB0aGlzLnVybE1ldGhvZEZpeHR1cmVNYXAuZ2V0KHJlc3BvbnNlS2V5KTtcbiAgICAgICAgLy8gSWYgbW9yZSByb3V0ZXMgZXhpc3QsIHNoaWZ0IG9sZCBmaXh0dXJlLCBhbmQgcmUtYXNzaWduXG4gICAgICAgIGlmIChmaXh0dXJlUm91dGVEZWZzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBmaXh0dXJlUm91dGVEZWZzLnNoaWZ0KCk7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZEZpeHR1cmVSb3V0ZURlZjogSUZpeHR1cmVSb3V0ZURlZiA9IGZpeHR1cmVSb3V0ZURlZnNbMF07XG4gICAgICAgICAgdGhpcy5yZWdpc3Rlck1vY2tSb3V0ZSh1cmwsIG1ldGhvZCwgdXBkYXRlZEZpeHR1cmVSb3V0ZURlZik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGN5Lm5vdygnbG9nJywgJ1JlZ2lzdGVyaW5nIG1vY2sgcm91dGU6Jyk7XG4gICAgY3kubm93KCdsb2cnLCAndXJsL21ldGhvZDogJyArIHVybCArIFNMQVNIICsgbWV0aG9kKTtcbiAgICBjeS5ub3coJ2xvZycsICdhbGlhczogJyArIGZpeHR1cmVSb3V0ZURlZi5hbGlhcyk7XG4gICAgY3kubm93KCdsb2cnLCAnc3RhdHVzOiAnICsgZml4dHVyZVJvdXRlRGVmLnN0YXR1cyk7XG4gICAgY3kubm93KCdsb2cnLCAnaGVhZGVyczogJyArIEpTT04uc3RyaW5naWZ5KGZpeHR1cmVSb3V0ZURlZi5oZWFkZXJzKSk7XG4gICAgY3kubm93KCdsb2cnLCAncmVzcG9uc2U6ICcgKyBKU09OLnN0cmluZ2lmeShmaXh0dXJlUm91dGVEZWYucmVzcG9uc2UpKTtcbiAgICBjeS5yb3V0ZShyb3V0ZURlZikuYXMoZml4dHVyZVJvdXRlRGVmLmFsaWFzKTtcbiAgfVxuXG4gIHJlY29yZFJlc3BvbnNlKHhocjogYW55KTogdm9pZCB7XG4gICAgLy8gTWFuaXB1bGF0ZSBVUkwgdmFsdWUgdG8gc3RyaXAgaG9zdCBpbmZvXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB4aHIudXJsLnN1YnN0cmluZyhDeXByZXNzLmNvbmZpZygnYmFzZVVybCcpLmxlbmd0aCk7XG4gICAgY29uc3QgbWV0aG9kOiBzdHJpbmcgPSB4aHIubWV0aG9kO1xuXG4gICAgLy8gUmVtb3ZlIGJsYWNrIGxpc3RlZCBoZWFkZXJzXG4gICAgY29uc3QgaGVhZGVyczogYW55ID0ge307XG4gICAgT2JqZWN0LmtleXMoeGhyLnJlc3BvbnNlLmhlYWRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoYWxsb3dlZEhlYWRlcnMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB4aHIucmVzcG9uc2UuaGVhZGVyc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZml4dHVyZVJvdXRlRGVmOiBJRml4dHVyZVJvdXRlRGVmID0ge1xuICAgICAgYWxpYXM6IHVybCArIFBJUEUgKyBtZXRob2QsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICBoZWFkZXJzLFxuICAgICAgcmVzcG9uc2U6IHhoci5yZXNwb25zZS5ib2R5LFxuICAgIH07XG5cbiAgICBpZiAoIXRoaXMucmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwW3VybF0pIHtcbiAgICAgIHRoaXMucmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwW3VybF0gPSB7fTtcbiAgICB9XG4gICAgY29uc3QgYnlNZXRob2RNYXA6IE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4gPSB0aGlzLnJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcFt1cmxdO1xuICAgIGlmICghYnlNZXRob2RNYXBbbWV0aG9kXSkge1xuICAgICAgYnlNZXRob2RNYXBbbWV0aG9kXSA9IFtdO1xuICAgIH1cbiAgICBjeS5ub3coJ2xvZycsICdSZWNvcmRpbmcgcmVzcG9uc2U6Jyk7XG4gICAgY3kubm93KCdsb2cnLCAndXJsL21ldGhvZDogJyArIHVybCArIFNMQVNIICsgbWV0aG9kKTtcbiAgICBjeS5ub3coJ2xvZycsICdyZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KGZpeHR1cmVSb3V0ZURlZikpO1xuICAgIGJ5TWV0aG9kTWFwW21ldGhvZF0ucHVzaChmaXh0dXJlUm91dGVEZWYpO1xuICB9XG5cbiAgdGVhckRvd24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVjb3JkaW5nKSB7XG4gICAgICBjeS5ub3coXG4gICAgICAgICdsb2cnLFxuICAgICAgICAnV3JpdGluZyByZWNvcmQgZml4dHVyZTogJyArICdjeXByZXNzL3JlY29yZGluZ3MvJyArIHRoaXMudGVzdE5hbWUgKyBTTEFTSCArIHRoaXMudGltZXN0YW1wICsgJy9tb2NrZGF0YS5qc29uJyxcbiAgICAgICk7XG4gICAgICBjeS5ub3coXG4gICAgICAgICd3cml0ZUZpbGUnLFxuICAgICAgICAnY3lwcmVzcy9yZWNvcmRpbmdzLycgKyB0aGlzLnRlc3ROYW1lICsgU0xBU0ggKyB0aGlzLnRpbWVzdGFtcCArICcvbW9ja2RhdGEuanNvbicsXG4gICAgICAgIHRoaXMucmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1vY2tpbmcpIHtcbiAgICAgIGxvZ291dCgpO1xuICAgIH1cbiAgfVxufVxuIl19