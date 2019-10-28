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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3lwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbImN5cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQzs7QUFBakMsaUNBQWlDOztJQUUzQixRQUFRLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztJQUM1QyxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7QUFFakQsdUNBR0M7OztJQUZDLHFDQUFpQjs7SUFDakIscUNBQWlCOzs7Ozs7O0FBSW5CLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBeUM7UUFBdkMsc0JBQVEsRUFBRSxzQkFBUTtJQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ1QsR0FBRyxFQUFFLFNBQVM7S0FDZixDQUFDLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsUUFBYTs7WUFDZCxhQUFhLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2pFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFDbEMsU0FBUyxHQUFvQixhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hGLElBQUksU0FBUyxFQUFFO1lBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU07Z0JBQ3JCLGNBQWMsRUFBRSxLQUFLO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osUUFBUSxVQUFBO29CQUNSLFFBQVEsVUFBQTtpQkFDVDthQUNGLENBQUMsQ0FBQyxJQUFJOzs7WUFBQztnQkFDTixlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxlQUFlLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxNQUFNO0lBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7O0FBRUQsU0FBUyxlQUFlO0lBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmNvbnN0IEJBU0VfVVJMOiBzdHJpbmcgPSBDeXByZXNzLmNvbmZpZygnYmFzZVVybCcpOyAvLyBleDogaHR0cDovL2xvY2FsaG9zdDo0MjAwXG5jb25zdCBMT0dJTl9VUkw6IHN0cmluZyA9IEN5cHJlc3MuZW52KCdsb2dpblVybCcpOyAvLyBleDogaHR0cHM6Ly92YW50YWdlLnVybC5pby9hdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luQ3JlZGVudGlhbHMge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vLyBpbnNwaXJlZCBieSBodHRwczovL3Zyb2NrYWkuZ2l0aHViLmlvL2Jsb2cvMjAxNy8xMC8yOC9jeXByZXNzLWtleWNsb2FrLWludHJlZ3JhdGlvbi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBJTG9naW5DcmVkZW50aWFscyk6IHZvaWQge1xuICBjeS5yZXF1ZXN0KHtcbiAgICB1cmw6IExPR0lOX1VSTCxcbiAgfSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxvZ2luUGFnZUh0bWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGxvZ2luUGFnZUh0bWwuaW5uZXJIVE1MID0gcmVzcG9uc2UuYm9keTtcbiAgICBjb25zdCBsb2dpbkZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGxvZ2luUGFnZUh0bWwucXVlcnlTZWxlY3RvcignI2tjLWZvcm0tbG9naW4nKTtcbiAgICBpZiAobG9naW5Gb3JtKSB7XG4gICAgICBjeS5yZXF1ZXN0KHtcbiAgICAgICAgZm9ybTogdHJ1ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogbG9naW5Gb3JtLmFjdGlvbixcbiAgICAgICAgZm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpOiB2b2lkIHtcbiAgY3kucmVxdWVzdCgnL2FwaS91c2VyL2xvZ291dCcpO1xufVxuXG5mdW5jdGlvbiBfcmVkaXJlY3RUb0hvbWUoKTogdm9pZCB7XG4gIGN5LnZpc2l0KEJBU0VfVVJMKTtcbiAgY3kudXJsKCkuc2hvdWxkKCdub3QuaW5jbHVkZScsIExPR0lOX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnaW5jbHVkZScsIEJBU0VfVVJMKTtcbn1cbiJdfQ==