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
export function login({ username, password }) {
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
export const SSO_COOKIES = ['USER_SSO_ID', 'XSRF-TOKEN'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3lwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbImN5cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQzs7QUFBakMsaUNBQWlDOztNQUUzQixRQUFRLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztNQUM1QyxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7QUFFakQsdUNBR0M7OztJQUZDLHFDQUFpQjs7SUFDakIscUNBQWlCOzs7Ozs7O0FBSW5CLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFxQjtJQUM3RCxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ1QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUMsSUFBSTs7OztJQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7O2NBQ2xCLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztjQUNsQyxTQUFTLEdBQW9CLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaEYsSUFBSSxTQUFTLEVBQUU7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDckIsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSixRQUFRO29CQUNSLFFBQVE7aUJBQ1Q7YUFDRixDQUFDLENBQUMsSUFBSTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNYLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLGVBQWUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE1BQU07SUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7QUFFRCxTQUFTLGVBQWU7SUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDOztBQUVELE1BQU0sT0FBTyxXQUFXLEdBQWEsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDOzs7O0FBQ2xFLE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGNBQWM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSTs7OztJQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7UUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPOzs7OztRQUN4QixDQUFDLE9BQTBELEVBQUUsTUFBNkIsRUFBRSxFQUFFOztrQkFDdEYsYUFBYSxHQUFRLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xCLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQzthQUNsRTs7Z0JBQ0csS0FBSyxHQUFXLGFBQWEsQ0FBQyxNQUFNO1lBQ3hDLGFBQWEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxXQUFnQixFQUFFLEVBQUUsQ0FDekMsV0FBVyxDQUFDLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDMUIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO29CQUNmLE9BQU87aUJBQ1I7Z0JBQ0QsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsRUFDSCxDQUFDO1FBQ0osQ0FBQyxFQUNGLENBQUM7SUFDSixDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG5jb25zdCBCQVNFX1VSTDogc3RyaW5nID0gQ3lwcmVzcy5jb25maWcoJ2Jhc2VVcmwnKTsgLy8gZXg6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMFxuY29uc3QgTE9HSU5fVVJMOiBzdHJpbmcgPSBDeXByZXNzLmVudignbG9naW5VcmwnKTsgLy8gZXg6IGh0dHBzOi8vdmFudGFnZS51cmwuaW8vYXV0aFxuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dpbkNyZWRlbnRpYWxzIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly92cm9ja2FpLmdpdGh1Yi5pby9ibG9nLzIwMTcvMTAvMjgvY3lwcmVzcy1rZXljbG9hay1pbnRyZWdyYXRpb24vXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogSUxvZ2luQ3JlZGVudGlhbHMpOiB2b2lkIHtcbiAgY3kucmVxdWVzdCh7XG4gICAgdXJsOiBMT0dJTl9VUkwsXG4gIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICBjb25zdCBsb2dpblBhZ2VIdG1sOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICBsb2dpblBhZ2VIdG1sLmlubmVySFRNTCA9IHJlc3BvbnNlLmJvZHk7XG4gICAgY29uc3QgbG9naW5Gb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBsb2dpblBhZ2VIdG1sLnF1ZXJ5U2VsZWN0b3IoJyNrYy1mb3JtLWxvZ2luJyk7XG4gICAgaWYgKGxvZ2luRm9ybSkge1xuICAgICAgY3kucmVxdWVzdCh7XG4gICAgICAgIGZvcm06IHRydWUsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICB1cmw6IGxvZ2luRm9ybS5hY3Rpb24sXG4gICAgICAgIGZvbGxvd1JlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIF9yZWRpcmVjdFRvSG9tZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9yZWRpcmVjdFRvSG9tZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQoKTogdm9pZCB7XG4gIGN5LnJlcXVlc3QoJy9hcGkvdXNlci9sb2dvdXQnKTtcbn1cblxuZnVuY3Rpb24gX3JlZGlyZWN0VG9Ib21lKCk6IHZvaWQge1xuICBjeS52aXNpdChCQVNFX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnbm90LmluY2x1ZGUnLCBMT0dJTl9VUkwpO1xuICBjeS51cmwoKS5zaG91bGQoJ2luY2x1ZGUnLCBCQVNFX1VSTCk7XG59XG5cbmV4cG9ydCBjb25zdCBTU09fQ09PS0lFUzogc3RyaW5nW10gPSBbJ1VTRVJfU1NPX0lEJywgJ1hTUkYtVE9LRU4nXTtcbmV4cG9ydCBmdW5jdGlvbiB3aGl0ZUxpc3RTU09Db29raWVzKCk6IHZvaWQge1xuICBDeXByZXNzLkNvb2tpZXMuZGVmYXVsdHMoeyB3aGl0ZWxpc3Q6IFNTT19DT09LSUVTIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvckFuZ3VsYXIoKTogQ3lwcmVzcy5DaGFpbmFibGUge1xuICBjeS5nZXQoJ1tuZy12ZXJzaW9uXScpLnNob3VsZCgnZXhpc3QnKTtcbiAgcmV0dXJuIGN5LndpbmRvdygpLnRoZW4oKHdpbjogV2luZG93KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDeXByZXNzLlByb21pc2UoXG4gICAgICAocmVzb2x2ZTogKHRoZW5hYmxlT3JSZXN1bHQ/OiB7fSB8IFByb21pc2VMaWtlPHt9PikgPT4gdm9pZCwgcmVqZWN0OiAoZXJyb3I/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgICAgY29uc3QgdGVzdGFiaWxpdGllczogYW55ID0gd2luWydnZXRBbGxBbmd1bGFyVGVzdGFiaWxpdGllcyddKCk7XG4gICAgICAgIGlmICghdGVzdGFiaWxpdGllcykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdObyB0ZXN0YWJpbGl0aWVzLiBJcyBBbmd1bGFyIGxvYWRlZD8nKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSB0ZXN0YWJpbGl0aWVzLmxlbmd0aDtcbiAgICAgICAgdGVzdGFiaWxpdGllcy5mb3JFYWNoKCh0ZXN0YWJpbGl0eTogYW55KSA9PlxuICAgICAgICAgIHRlc3RhYmlsaXR5LndoZW5TdGFibGUoKCkgPT4ge1xuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICk7XG4gIH0pO1xufVxuIl19