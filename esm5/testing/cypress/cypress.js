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
export function ILoginCredentials() { }
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
export function login(_a) {
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
export function logout() {
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
export var SSO_COOKIES = ['USER_SSO_ID', 'XSRF-TOKEN'];
/**
 * @return {?}
 */
export function whiteListSSOCookies() {
    Cypress.Cookies.defaults({ whitelist: SSO_COOKIES });
}
/**
 * @return {?}
 */
export function waitForAngular() {
    cy.get('[ng-version]').should('exist');
    return cy.window().then((/**
     * @param {?} win
     * @return {?}
     */
    function (win) {
        return new Cypress.Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var testabilities = win['getAllAngularTestabilities']();
            if (!testabilities) {
                return reject(new Error('No testabilities. Is Angular loaded?'));
            }
            /** @type {?} */
            var count = testabilities.length;
            testabilities.forEach((/**
             * @param {?} testability
             * @return {?}
             */
            function (testability) {
                return testability.whenStable((/**
                 * @return {?}
                 */
                function () {
                    count--;
                    if (count !== 0) {
                        return;
                    }
                    resolve();
                }));
            }));
        }));
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3lwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbImN5cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQzs7QUFBakMsaUNBQWlDOztJQUUzQixRQUFRLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztJQUM1QyxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7QUFFakQsdUNBR0M7OztJQUZDLHFDQUFpQjs7SUFDakIscUNBQWlCOzs7Ozs7O0FBSW5CLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBeUM7UUFBdkMsc0JBQVEsRUFBRSxzQkFBUTtJQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ1QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsUUFBYTs7WUFDZCxhQUFhLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2pFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFDbEMsU0FBUyxHQUFvQixhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hGLElBQUksU0FBUyxFQUFFO1lBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU07Z0JBQ3JCLGNBQWMsRUFBRSxLQUFLO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osUUFBUSxVQUFBO29CQUNSLFFBQVEsVUFBQTtpQkFDVDthQUNGLENBQUMsQ0FBQyxJQUFJOzs7WUFBQztnQkFDTixlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxlQUFlLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxNQUFNO0lBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7O0FBRUQsU0FBUyxlQUFlO0lBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sV0FBVyxHQUFhLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQzs7OztBQUNsRSxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxjQUFjO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFDLEdBQVc7UUFDbEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUN4QixVQUFDLE9BQTBELEVBQUUsTUFBNkI7O2dCQUNsRixhQUFhLEdBQVEsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2FBQ2xFOztnQkFDRyxLQUFLLEdBQVcsYUFBYSxDQUFDLE1BQU07WUFDeEMsYUFBYSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLFdBQWdCO2dCQUNyQyxPQUFBLFdBQVcsQ0FBQyxVQUFVOzs7Z0JBQUM7b0JBQ3JCLEtBQUssRUFBRSxDQUFDO29CQUNSLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTt3QkFDZixPQUFPO3FCQUNSO29CQUNELE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsRUFBQztZQU5GLENBTUUsRUFDSCxDQUFDO1FBQ0osQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb25zdCBCQVNFX1VSTDogc3RyaW5nID0gQ3lwcmVzcy5jb25maWcoJ2Jhc2VVcmwnKTsgLy8gZXg6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMFxuY29uc3QgTE9HSU5fVVJMOiBzdHJpbmcgPSBDeXByZXNzLmVudignbG9naW5VcmwnKTsgLy8gZXg6IGh0dHBzOi8vdmFudGFnZS51cmwuaW8vYXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpbkNyZWRlbnRpYWxzIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly92cm9ja2FpLmdpdGh1Yi5pby9ibG9nLzIwMTcvMTAvMjgvY3lwcmVzcy1rZXljbG9hay1pbnRyZWdyYXRpb24vXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogSUxvZ2luQ3JlZGVudGlhbHMpOiB2b2lkIHtcbiAgY3kucmVxdWVzdCh7XG4gICAgdXJsOiBMT0dJTl9VUkwsXG4gIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICBjb25zdCBsb2dpblBhZ2VIdG1sOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICBsb2dpblBhZ2VIdG1sLmlubmVySFRNTCA9IHJlc3BvbnNlLmJvZHk7XG4gICAgY29uc3QgbG9naW5Gb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBsb2dpblBhZ2VIdG1sLnF1ZXJ5U2VsZWN0b3IoJyNrYy1mb3JtLWxvZ2luJyk7XG4gICAgaWYgKGxvZ2luRm9ybSkge1xuICAgICAgY3kucmVxdWVzdCh7XG4gICAgICAgIGZvcm06IHRydWUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IGxvZ2luRm9ybS5hY3Rpb24sXG4gICAgICAgIGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIF9yZWRpcmVjdFRvSG9tZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZWRpcmVjdFRvSG9tZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKTogdm9pZCB7XG4gIGN5LnJlcXVlc3QoJy9hcGkvdXNlci9sb2dvdXQnKTtcbn1cblxuZnVuY3Rpb24gX3JlZGlyZWN0VG9Ib21lKCk6IHZvaWQge1xuICBjeS52aXNpdChCQVNFX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnbm90LmluY2x1ZGUnLCBMT0dJTl9VUkwpO1xuICBjeS51cmwoKS5zaG91bGQoJ2luY2x1ZGUnLCBCQVNFX1VSTCk7XG59XG5cbmV4cG9ydCBjb25zdCBTU09fQ09PS0lFUzogc3RyaW5nW10gPSBbJ1VTRVJfU1NPX0lEJywgJ1hTUkYtVE9LRU4nXTtcbmV4cG9ydCBmdW5jdGlvbiB3aGl0ZUxpc3RTU09Db29raWVzKCk6IHZvaWQge1xuICBDeXByZXNzLkNvb2tpZXMuZGVmYXVsdHMoeyB3aGl0ZWxpc3Q6IFNTT19DT09LSUVTIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvckFuZ3VsYXIoKTogQ3lwcmVzcy5DaGFpbmFibGUge1xuICBjeS5nZXQoJ1tuZy12ZXJzaW9uXScpLnNob3VsZCgnZXhpc3QnKTtcbiAgcmV0dXJuIGN5LndpbmRvdygpLnRoZW4oKHdpbjogV2luZG93KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDeXByZXNzLlByb21pc2UoXG4gICAgICAocmVzb2x2ZTogKHRoZW5hYmxlT3JSZXN1bHQ/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgICAgY29uc3QgdGVzdGFiaWxpdGllczogYW55ID0gd2luWydnZXRBbGxBbmd1bGFyVGVzdGFiaWxpdGllcyddKCk7XG4gICAgICAgIGlmICghdGVzdGFiaWxpdGllcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdObyB0ZXN0YWJpbGl0aWVzLiBJcyBBbmd1bGFyIGxvYWRlZD8nKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSB0ZXN0YWJpbGl0aWVzLmxlbmd0aDtcbiAgICAgICAgdGVzdGFiaWxpdGllcy5mb3JFYWNoKCh0ZXN0YWJpbGl0eTogYW55KSA9PlxuICAgICAgICAgIHRlc3RhYmlsaXR5LndoZW5TdGFibGUoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICk7XG4gIH0pO1xufVxuIl19