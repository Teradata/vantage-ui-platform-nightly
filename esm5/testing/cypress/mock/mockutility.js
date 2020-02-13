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
            ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].forEach((/**
             * @param {?} method
             * @return {?}
             */
            function (method) {
                cy.route({
                    url: '**',
                    method: method,
                    onResponse: (/**
                     * @param {?} xhr
                     * @return {?}
                     */
                    function (xhr) {
                        _this.recordResponse(xhr);
                    }),
                });
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja3V0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGQtdmFudGFnZS91aS1wbGF0Zm9ybS90ZXN0aW5nL2N5cHJlc3MvIiwic291cmNlcyI6WyJtb2NrL21vY2t1dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQ0FBaUM7O0FBQWpDLGlDQUFpQztBQVlqQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEYsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7SUFHMUIsUUFBUyxNQUFNO0lBQ2YsT0FBUSxLQUFLOzs7OztJQUliLE9BQVEsS0FBSztJQUNiLE9BQVEsS0FBSztJQUNiLFFBQVMsTUFBTTtJQUNmLFNBQVUsT0FBTztJQUNqQixVQUFXLFFBQVE7Ozs7O0FBR3JCLHdCQU9DOzs7SUFOQyx3QkFBWTs7SUFDWiwyQkFBZTs7SUFDZiwyQkFBZ0I7O0lBQ2hCLDRCQUFjOztJQUNkLDZCQUFlOztJQUNmLCtCQUFpQjs7Ozs7QUFHbkIsK0JBTUM7OztJQUxDLGlDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsbUNBQWM7O0lBQ2Qsb0NBQWU7O0lBQ2Ysc0NBQWlCOzs7SUFHYixjQUFjLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDOztJQUU3RixJQUFJLEdBQVcsR0FBRzs7SUFDbEIsS0FBSyxHQUFXLEdBQUc7QUFFekI7SUFBQTtRQUlFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQWlQN0IsQ0FBQztJQTdPQzs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7SUFDSCwyQkFBSzs7Ozs7Ozs7OztJQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFrQixFQUFFLFNBQW1CLEVBQUUsUUFBZ0IsRUFBRSxNQUF1QjtRQUExRyxpQkErRUM7UUEvRWtGLHVCQUFBLEVBQUEsY0FBdUI7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QyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQ0osS0FBSyxFQUNMLDBCQUEwQixHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQy9HLENBQUM7WUFDRixFQUFFLENBQUMsR0FBRyxDQUNKLFdBQVcsRUFDWCxxQkFBcUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixFQUNqRixJQUFJLENBQUMsMkJBQTJCLENBQ2pDLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdFBELElBc1BDOzs7O0lBclBDLGdDQUFrQjs7SUFDbEIsa0RBQTBFOztJQUMxRSwwQ0FBcUQ7O0lBQ3JELDhCQUF5Qjs7SUFDekIsZ0NBQTJCOztJQUMzQiwrQkFBbUI7O0lBQ25CLCtCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIG5hbWVzcGFjZSBDeXByZXNzIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpbnRlcmZhY2UgQ2hhaW5hYmxlIHtcbiAgICAgIG5vdyhmdW5jOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogQ2hhaW5hYmxlPEVsZW1lbnQ+O1xuICAgIH1cbiAgfVxufVxuXG5pbXBvcnQgeyBsb2dpbiwgbG9nb3V0LCBJTG9naW5DcmVkZW50aWFscywgd2FpdEZvckFuZ3VsYXIgfSBmcm9tICcuLi91dGlsaXR5L3V0aWxpdHknO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBlbnVtIFRlc3RUeXBlIHtcbiAgJ3VuaXQnID0gJ3VuaXQnLFxuICAnZTJlJyA9ICdlMmUnLFxufVxuXG5lbnVtIE1ldGhvZHMge1xuICAnR0VUJyA9ICdHRVQnLFxuICAnUFVUJyA9ICdQVVQnLFxuICAnUE9TVCcgPSAnUE9TVCcsXG4gICdQQVRDSCcgPSAnUEFUQ0gnLFxuICAnREVMRVRFJyA9ICdERUxFVEUnLFxufVxuXG5pbnRlcmZhY2UgSVJvdXRlRGVmIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIGhlYWRlcnM/OiBhbnk7XG4gIHJlc3BvbnNlPzogYW55O1xuICBvblJlc3BvbnNlPzogYW55O1xufVxuXG5pbnRlcmZhY2UgSUZpeHR1cmVSb3V0ZURlZiB7XG4gIGFsaWFzPzogc3RyaW5nO1xuICBzdGF0dXM/OiBudW1iZXI7XG4gIGhlYWRlcnM/OiBhbnk7XG4gIHJlc3BvbnNlPzogYW55O1xuICBvblJlc3BvbnNlPzogYW55O1xufVxuXG5jb25zdCBhbGxvd2VkSGVhZGVyczogc3RyaW5nW10gPSBbJ2NvbnRlbnQtdHlwZScsICd4LWxlbmd0aCcsICd4LXBhZ2UnLCAneC10b3RhbCcsICd4LXRvdGFsLXBhZ2VzJ107XG5cbmNvbnN0IFBJUEU6IHN0cmluZyA9ICd8JztcbmNvbnN0IFNMQVNIOiBzdHJpbmcgPSAnLyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrVXRpbGl0eSB7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXA6IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4+O1xuICB1cmxNZXRob2RGaXh0dXJlTWFwOiBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+O1xuICBtb2NraW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHJlY29yZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICB0ZXN0VHlwZTogVGVzdFR5cGU7XG4gIHRlc3ROYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIGJvaWxlcnBsYXRlIHdvcmsgdG8gc2V0IHVwIHRlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB0ZXN0TmFtZSB0ZXN0bmFtZSB1c2VkIHRvIGRldGVybWluZSBleGlzdGVuY2Ugb2YgdGVzdCBzcGVjaWZpYyBmaXh0dXJlcyBhbmRcbiAgICogQHBhcmFtIHRlc3RUeXBlIHVuaXQgb3IgZTJlXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZXMgYXJyYXkgb2YgdGVtcGxhdGVzIHRvIGJlIGxvYWRlZCAoZWcuICdlbXB0eScgb3IgJ2dvbGRlbicpXG4gICAqIEBwYXJhbSB1c2VyTmFtZSB1c2VyIG5hbWUgbWF0Y2hpbmcgZml4dHVyZSBjb250YWluaW5nIGNyZWRlbnRpYWxzXG4gICAqIEBwYXJhbSByZWNvcmQgZm9yY2UgcmVjb3JkaW5nIGZvciB0aGlzIHRlc3QsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICovXG4gIHNldFVwKHRlc3ROYW1lOiBzdHJpbmcsIHRlc3RUeXBlOiBUZXN0VHlwZSwgdGVtcGxhdGVzOiBzdHJpbmdbXSwgdXNlck5hbWU6IHN0cmluZywgcmVjb3JkOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjeS5ub3coJ2xvZycsICdUZXN0OiAnICsgdGVzdE5hbWUgKyBTTEFTSCArIHRlc3RUeXBlKTtcbiAgICB0aGlzLnRlc3ROYW1lID0gdGVzdE5hbWU7XG4gICAgdGhpcy50ZXN0VHlwZSA9IHRlc3RUeXBlO1xuXG4gICAgLy8gU3RhcnQgc2VydmVyIHRvIHN1cHBvcnQgcm91dGVzXG4gICAgY3kuc2VydmVyKCk7XG5cbiAgICAvLyBDcmVhdGUgdGltZXN0YW1wIGFuZCBzdHJ1Y3R1cmVzIHRvIHJldGFpbiBmaXh0dXJlIGRhdGFcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG1vbWVudCgpLmZvcm1hdCgnTFRTJyk7XG4gICAgdGhpcy51cmxNZXRob2RGaXh0dXJlTWFwID0gbmV3IE1hcDxzdHJpbmcsIElGaXh0dXJlUm91dGVEZWZbXT4oKTtcbiAgICB0aGlzLnJlY29yZGVkVVJMTWV0aG9kRml4dHVyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBJRml4dHVyZVJvdXRlRGVmW10+PigpO1xuXG4gICAgLy8gQ29uZGl0aW9uYWxseSB0dXJuIG9uIHJlY29yZGluZ1xuICAgIGlmIChDeXByZXNzLmVudigncmVjb3JkJykgfHwgcmVjb3JkKSB7XG4gICAgICB0aGlzLnJlY29yZGluZyA9IHRydWU7XG5cbiAgICAgIGN5Lm5vdygnbG9nJywgJ1JlY29yZGluZy4uLicpO1xuICAgICAgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnUEFUQ0gnLCAnREVMRVRFJ10uZm9yRWFjaCgobWV0aG9kOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY3kucm91dGUoe1xuICAgICAgICAgIHVybDogJyoqJyxcbiAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgb25SZXNwb25zZTogKHhocjogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFJlc3BvbnNlKHhocik7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDb25kaXRpb25hbGx5IHR1cm4gb24gbW9ja2luZ1xuICAgIGlmIChDeXByZXNzLmVudignbW9jaycpIHx8IHRlc3RUeXBlID09PSBUZXN0VHlwZS51bml0KSB7XG4gICAgICBjeS5ub3coJ2xvZycsICdNb2NraW5nLi4uJyk7XG4gICAgICB0aGlzLm1vY2tpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByb3V0ZXMgZm9yIHVzZXIgbG9nb25cbiAgICBpZiAodGhpcy5tb2NraW5nICYmICF0aGlzLnJlY29yZGluZykge1xuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlKHVzZXJOYW1lKTtcbiAgICB9XG4gICAgLy8gTG9hZCB0ZW1wbGF0ZSBhbmQgdGVzdCBzcGVjaWZpYyByb3V0ZXNcbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaCgodGVtcGxhdGU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZWdpc3RlclJvdXRlKCd0ZW1wbGF0ZXMvJyArIHRlbXBsYXRlKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJSb3V0ZSgndGVtcGxhdGVzLycgKyB0ZW1wbGF0ZSArIFNMQVNIICsgdXNlck5hbWUpO1xuICAgIH0pO1xuICAgIHRoaXMucmVnaXN0ZXJSb3V0ZSgndGVzdHNwZWNpZmljLycgKyB0ZXN0TmFtZSk7XG5cbiAgICAvLyBBZGQgbmV3IHJvdXRlIGNvbW1hbmQgdGhhdCBhbHRlcnMgaXRzIGJlaGF2aW9yIGJhc2VkIG9uIG1vZGUuXG4gICAgLy8gSWYgcmVjb3JkaW5nIG9yIHByb2R1Y3Rpb24sIGp1c3Qgd2FpdC5cbiAgICAvLyBJZiBtb2NraW5nLCBhbGxvdyByZXR1cm5pbmcgbW9jayByZXN1bHRzLlxuICAgIEN5cHJlc3MuQ29tbWFuZHMuYWRkKCdyb3V0ZTInLCAocm91dGVEZWY6IElSb3V0ZURlZikgPT4ge1xuICAgICAgaWYgKEN5cHJlc3MuZW52KCdtb2NrJykpIHtcbiAgICAgICAgY3kubm93KCdsb2cnLCAnU2V0dGluZyByb3V0ZSB0byBtb2NrJyk7XG4gICAgICAgIGN5LnJvdXRlKHJvdXRlRGVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN5Lm5vdygnbG9nJywgJyBTZXR0aW5nIHJvdXRlIHRvIGFsaWFzJyk7XG4gICAgICAgIGN5LnJvdXRlKHJvdXRlRGVmLnVybCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjeS5yb3V0ZSh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2FwaS91c2VyL2xvZ291dCcsXG4gICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIHJlc3BvbnNlOiB7fSxcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBsb2dpbiBiYXNlZCBvbiBtb2RlLlxuICAgIC8vIE1vY2ssIGJ5cGFzcyBsb2dpblxuICAgIC8vIE90aGVyd2lzZSwgbG9nIGluIHVzaW5nIGNyZWRlbnRpYWxzIGZyb20gZml4dHVyZS5cbiAgICBpZiAodGhpcy5tb2NraW5nICYmICF0aGlzLnJlY29yZGluZykge1xuICAgICAgY3kudmlzaXQoJy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3kuZml4dHVyZSgnY3JlZGVudGlhbHMvJyArIHVzZXJOYW1lKS50aGVuKChjcmVkZW50aWFsczogSUxvZ2luQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgbG9naW4oY3JlZGVudGlhbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gV2FpdCBmb3IgcGFnZSB0byBsb2FkXG4gICAgd2FpdEZvckFuZ3VsYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb3ZlciBhbnkgbW9jayBkYXRhIGZpeHR1cmVzIHVuZGVyIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5IGhpZXJhcmNoeVxuICAgKiBhbmQgcmVnaXN0ZXIgYXNzb2NpYXRlZCBjeS5yb3V0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlbmFtZSBmaXh0dXJlIGZpbGVuYW1lXG4gICAqL1xuICByZWdpc3RlclJvdXRlKGRpcjogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBmaWxlIGV4aXN0cy5cbiAgICBjb25zdCBtb2NrRGF0YUZpbGU6IHN0cmluZyA9IGRpciArICcvbW9ja2RhdGEuanNvbic7XG4gICAgY3kuZXhlYygnaWYgWyAtZiBjeXByZXNzL2ZpeHR1cmVzLycgKyBtb2NrRGF0YUZpbGUgKyAnIF07IHRoZW4gbHMgY3lwcmVzcy9maXh0dXJlcy8nICsgbW9ja0RhdGFGaWxlICsgJzsgZmknKS50aGVuKFxuICAgICAgKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdHMuc3Rkb3V0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGN5LmZpeHR1cmUobW9ja0RhdGFGaWxlKS50aGVuKChieVVSTFJvdXRlc01hcDogTWFwPHN0cmluZywgTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPj4pID0+IHtcbiAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZmlsZSBwcm9jZXNzaW5nIFVSTC9tZXRob2QgbWFwcGluZ3NcbiAgICAgICAgICAvLyBGaWxlIGlzIGEgbWFwIHdpdGggVVJMIGFzIHRoZSBrZXkuIFZhbHVlcyBhcmUgbWFwc1xuICAgICAgICAgIC8vIGluIHR1cm4sIHdoZXJlIGVhY2ggbWFwIGhhcyBtZXRob2QgYXMgdGhlIGtleSB2YWx1ZS5cbiAgICAgICAgICAvLyBUaGUgdmFsdWUgb2YgdGhlc2UgaW50ZXJuYWwgbWFwcyBpcyBhbiBhcnJheSBvZiByZXNwb25zZXMuXG4gICAgICAgICAgT2JqZWN0LmtleXMoYnlVUkxSb3V0ZXNNYXApLmZvckVhY2goKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBieU1ldGhvZFJvdXRlc01hcDogTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPiA9IGJ5VVJMUm91dGVzTWFwW3VybF07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhieU1ldGhvZFJvdXRlc01hcCkuZm9yRWFjaCgobWV0aG9kOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZml4dHVyZVJvdXRlRGVmczogSUZpeHR1cmVSb3V0ZURlZltdID0gYnlNZXRob2RSb3V0ZXNNYXBbbWV0aG9kXTtcbiAgICAgICAgICAgICAgY29uc3QgdXJsTWV0aG9kS2V5OiBzdHJpbmcgPSB1cmwgKyBQSVBFICsgbWV0aG9kO1xuICAgICAgICAgICAgICBsZXQgZmlyc3RSb3V0ZURlZjogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAgICAgICBmaXh0dXJlUm91dGVEZWZzLmZvckVhY2goKGZpeHR1cmVSb3V0ZURlZjogSUZpeHR1cmVSb3V0ZURlZikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEtub3duIG1vY2tzIHN1cGVyY2VkZSByZWNvcmRpbmdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2NraW5nKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy51cmxNZXRob2RGaXh0dXJlTWFwLmdldCh1cmxNZXRob2RLZXkpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cmxNZXRob2RGaXh0dXJlTWFwLnNldCh1cmxNZXRob2RLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RSb3V0ZURlZiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnVybE1ldGhvZEZpeHR1cmVNYXAuZ2V0KHVybE1ldGhvZEtleSkucHVzaChmaXh0dXJlUm91dGVEZWYpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoZmlyc3RSb3V0ZURlZikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW9ja1JvdXRlKHVybCwgbWV0aG9kLCBmaXh0dXJlUm91dGVEZWYpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIG9uUmVzcG9uc2UgcmVjb3JkcyBYSFIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRGVmOiBJUm91dGVEZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICBvblJlc3BvbnNlOiAoeGhyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZFJlc3BvbnNlKHhocik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBjeS5ub3coJ2xvZycsICdSZWdpc3RlcmluZyByZWNvcmRpbmcgcm91dGU6Jyk7XG4gICAgICAgICAgICAgICAgICBjeS5ub3coJ2xvZycsICd1cmwvbWV0aG9kOiAnICsgdXJsICsgU0xBU0ggKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgICAgY3kucm91dGUocm91dGVEZWYpLmFzKGZpeHR1cmVSb3V0ZURlZi5hbGlhcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRGVmOiBJUm91dGVEZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgY3kubm93KCdsb2cnLCAnUmVnaXN0ZXJpbmcgYWxpYXMgcm91dGU6Jyk7XG4gICAgICAgICAgICAgICAgICBjeS5ub3coJ2xvZycsICd1cmwvbWV0aG9kOiAnICsgdXJsICsgU0xBU0ggKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgICAgY3kubm93KCdsb2cnLCAnYWxpYXM6ICcgKyBmaXh0dXJlUm91dGVEZWYuYWxpYXMpO1xuICAgICAgICAgICAgICAgICAgY3kucm91dGUocm91dGVEZWYpLmFzKGZpeHR1cmVSb3V0ZURlZi5hbGlhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTW9ja1JvdXRlKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZml4dHVyZVJvdXRlRGVmOiBJRml4dHVyZVJvdXRlRGVmKTogdm9pZCB7XG4gICAgY29uc3Qgcm91dGVEZWY6IElSb3V0ZURlZiA9IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIHN0YXR1czogZml4dHVyZVJvdXRlRGVmLnN0YXR1cyxcbiAgICAgIGhlYWRlcnM6IGZpeHR1cmVSb3V0ZURlZi5oZWFkZXJzLFxuICAgICAgcmVzcG9uc2U6IGZpeHR1cmVSb3V0ZURlZi5yZXNwb25zZSxcbiAgICAgIG9uUmVzcG9uc2U6ICh4aHI6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZVVSTDogVVJMID0gbmV3IFVSTCh4aHIudXJsKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VLZXk6IHN0cmluZyA9IHJlc3BvbnNlVVJMLnBhdGhuYW1lICsgUElQRSArIHhoci5tZXRob2Q7XG4gICAgICAgIGNvbnN0IGZpeHR1cmVSb3V0ZURlZnM6IElGaXh0dXJlUm91dGVEZWZbXSA9IHRoaXMudXJsTWV0aG9kRml4dHVyZU1hcC5nZXQocmVzcG9uc2VLZXkpO1xuICAgICAgICAvLyBJZiBtb3JlIHJvdXRlcyBleGlzdCwgc2hpZnQgb2xkIGZpeHR1cmUsIGFuZCByZS1hc3NpZ25cbiAgICAgICAgaWYgKGZpeHR1cmVSb3V0ZURlZnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGZpeHR1cmVSb3V0ZURlZnMuc2hpZnQoKTtcbiAgICAgICAgICBjb25zdCB1cGRhdGVkRml4dHVyZVJvdXRlRGVmOiBJRml4dHVyZVJvdXRlRGVmID0gZml4dHVyZVJvdXRlRGVmc1swXTtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW9ja1JvdXRlKHVybCwgbWV0aG9kLCB1cGRhdGVkRml4dHVyZVJvdXRlRGVmKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY3kubm93KCdsb2cnLCAnUmVnaXN0ZXJpbmcgbW9jayByb3V0ZTonKTtcbiAgICBjeS5ub3coJ2xvZycsICd1cmwvbWV0aG9kOiAnICsgdXJsICsgU0xBU0ggKyBtZXRob2QpO1xuICAgIGN5Lm5vdygnbG9nJywgJ2FsaWFzOiAnICsgZml4dHVyZVJvdXRlRGVmLmFsaWFzKTtcbiAgICBjeS5ub3coJ2xvZycsICdzdGF0dXM6ICcgKyBmaXh0dXJlUm91dGVEZWYuc3RhdHVzKTtcbiAgICBjeS5ub3coJ2xvZycsICdoZWFkZXJzOiAnICsgSlNPTi5zdHJpbmdpZnkoZml4dHVyZVJvdXRlRGVmLmhlYWRlcnMpKTtcbiAgICBjeS5ub3coJ2xvZycsICdyZXNwb25zZTogJyArIEpTT04uc3RyaW5naWZ5KGZpeHR1cmVSb3V0ZURlZi5yZXNwb25zZSkpO1xuICAgIGN5LnJvdXRlKHJvdXRlRGVmKS5hcyhmaXh0dXJlUm91dGVEZWYuYWxpYXMpO1xuICB9XG5cbiAgcmVjb3JkUmVzcG9uc2UoeGhyOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBNYW5pcHVsYXRlIFVSTCB2YWx1ZSB0byBzdHJpcCBob3N0IGluZm9cbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHhoci51cmwuc3Vic3RyaW5nKEN5cHJlc3MuY29uZmlnKCdiYXNlVXJsJykubGVuZ3RoKTtcbiAgICBjb25zdCBtZXRob2Q6IHN0cmluZyA9IHhoci5tZXRob2Q7XG5cbiAgICAvLyBSZW1vdmUgYmxhY2sgbGlzdGVkIGhlYWRlcnNcbiAgICBjb25zdCBoZWFkZXJzOiBhbnkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh4aHIucmVzcG9uc2UuaGVhZGVycykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChhbGxvd2VkSGVhZGVycy5pbmRleE9mKGtleSkgIT09IC0xKSB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHhoci5yZXNwb25zZS5oZWFkZXJzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaXh0dXJlUm91dGVEZWY6IElGaXh0dXJlUm91dGVEZWYgPSB7XG4gICAgICBhbGlhczogdXJsICsgUElQRSArIG1ldGhvZCxcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgIGhlYWRlcnMsXG4gICAgICByZXNwb25zZTogeGhyLnJlc3BvbnNlLmJvZHksXG4gICAgfTtcblxuICAgIGlmICghdGhpcy5yZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXBbdXJsXSkge1xuICAgICAgdGhpcy5yZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXBbdXJsXSA9IHt9O1xuICAgIH1cbiAgICBjb25zdCBieU1ldGhvZE1hcDogTWFwPHN0cmluZywgSUZpeHR1cmVSb3V0ZURlZltdPiA9IHRoaXMucmVjb3JkZWRVUkxNZXRob2RGaXh0dXJlTWFwW3VybF07XG4gICAgaWYgKCFieU1ldGhvZE1hcFttZXRob2RdKSB7XG4gICAgICBieU1ldGhvZE1hcFttZXRob2RdID0gW107XG4gICAgfVxuICAgIGN5Lm5vdygnbG9nJywgJ1JlY29yZGluZyByZXNwb25zZTonKTtcbiAgICBjeS5ub3coJ2xvZycsICd1cmwvbWV0aG9kOiAnICsgdXJsICsgU0xBU0ggKyBtZXRob2QpO1xuICAgIGN5Lm5vdygnbG9nJywgJ3Jlc3BvbnNlOiAnICsgSlNPTi5zdHJpbmdpZnkoZml4dHVyZVJvdXRlRGVmKSk7XG4gICAgYnlNZXRob2RNYXBbbWV0aG9kXS5wdXNoKGZpeHR1cmVSb3V0ZURlZik7XG4gIH1cblxuICB0ZWFyRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWNvcmRpbmcpIHtcbiAgICAgIGN5Lm5vdyhcbiAgICAgICAgJ2xvZycsXG4gICAgICAgICdXcml0aW5nIHJlY29yZCBmaXh0dXJlOiAnICsgJ2N5cHJlc3MvcmVjb3JkaW5ncy8nICsgdGhpcy50ZXN0TmFtZSArIFNMQVNIICsgdGhpcy50aW1lc3RhbXAgKyAnL21vY2tkYXRhLmpzb24nLFxuICAgICAgKTtcbiAgICAgIGN5Lm5vdyhcbiAgICAgICAgJ3dyaXRlRmlsZScsXG4gICAgICAgICdjeXByZXNzL3JlY29yZGluZ3MvJyArIHRoaXMudGVzdE5hbWUgKyBTTEFTSCArIHRoaXMudGltZXN0YW1wICsgJy9tb2NrZGF0YS5qc29uJyxcbiAgICAgICAgdGhpcy5yZWNvcmRlZFVSTE1ldGhvZEZpeHR1cmVNYXAsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9ja2luZykge1xuICAgICAgbG9nb3V0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=