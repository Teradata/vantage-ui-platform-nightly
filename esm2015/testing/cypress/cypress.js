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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3lwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbImN5cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQzs7QUFBakMsaUNBQWlDOztNQUUzQixRQUFRLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztNQUM1QyxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7QUFFakQsdUNBR0M7OztJQUZDLHFDQUFpQjs7SUFDakIscUNBQWlCOzs7Ozs7O0FBSW5CLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFxQjtJQUM3RCxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ1QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUMsSUFBSTs7OztJQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7O2NBQ2xCLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztjQUNsQyxTQUFTLEdBQW9CLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaEYsSUFBSSxTQUFTLEVBQUU7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDckIsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSixRQUFRO29CQUNSLFFBQVE7aUJBQ1Q7YUFDRixDQUFDLENBQUMsSUFBSTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNYLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLGVBQWUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE1BQU07SUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7QUFFRCxTQUFTLGVBQWU7SUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29uc3QgQkFTRV9VUkw6IHN0cmluZyA9IEN5cHJlc3MuY29uZmlnKCdiYXNlVXJsJyk7IC8vIGV4OiBodHRwOi8vbG9jYWxob3N0OjQyMDBcbmNvbnN0IExPR0lOX1VSTDogc3RyaW5nID0gQ3lwcmVzcy5lbnYoJ2xvZ2luVXJsJyk7IC8vIGV4OiBodHRwczovL3ZhbnRhZ2UudXJsLmlvL2F1dGhcblxuZXhwb3J0IGludGVyZmFjZSBJTG9naW5DcmVkZW50aWFscyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vdnJvY2thaS5naXRodWIuaW8vYmxvZy8yMDE3LzEwLzI4L2N5cHJlc3Mta2V5Y2xvYWstaW50cmVncmF0aW9uL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IElMb2dpbkNyZWRlbnRpYWxzKTogdm9pZCB7XG4gIGN5LnJlcXVlc3Qoe1xuICAgIHVybDogTE9HSU5fVVJMLFxuICB9KS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgY29uc3QgbG9naW5QYWdlSHRtbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sJyk7XG4gICAgbG9naW5QYWdlSHRtbC5pbm5lckhUTUwgPSByZXNwb25zZS5ib2R5O1xuICAgIGNvbnN0IGxvZ2luRm9ybTogSFRNTEZvcm1FbGVtZW50ID0gbG9naW5QYWdlSHRtbC5xdWVyeVNlbGVjdG9yKCcja2MtZm9ybS1sb2dpbicpO1xuICAgIGlmIChsb2dpbkZvcm0pIHtcbiAgICAgIGN5LnJlcXVlc3Qoe1xuICAgICAgICBmb3JtOiB0cnVlLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiBsb2dpbkZvcm0uYWN0aW9uLFxuICAgICAgICBmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBfcmVkaXJlY3RUb0hvbWUoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfcmVkaXJlY3RUb0hvbWUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCk6IHZvaWQge1xuICBjeS5yZXF1ZXN0KCcvYXBpL3VzZXIvbG9nb3V0Jyk7XG59XG5cbmZ1bmN0aW9uIF9yZWRpcmVjdFRvSG9tZSgpOiB2b2lkIHtcbiAgY3kudmlzaXQoQkFTRV9VUkwpO1xuICBjeS51cmwoKS5zaG91bGQoJ25vdC5pbmNsdWRlJywgTE9HSU5fVVJMKTtcbiAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgQkFTRV9VUkwpO1xufVxuIl19