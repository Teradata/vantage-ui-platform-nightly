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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbInV0aWxpdHkvdXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUNBQWlDOztBQUFqQyxpQ0FBaUM7O0lBRTNCLFFBQVEsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7O0lBQzVDLFNBQVMsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7OztBQUVqRCx1Q0FHQzs7O0lBRkMscUNBQWlCOztJQUNqQixxQ0FBaUI7Ozs7Ozs7QUFJbkIsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQUF5QztRQUF2QyxzQkFBUSxFQUFFLHNCQUFRO0lBQ3hDLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDVCxHQUFHLEVBQUUsU0FBUztLQUNmLENBQUMsQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQyxRQUFhOztZQUNkLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUNsQyxTQUFTLEdBQW9CLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaEYsSUFBSSxTQUFTLEVBQUU7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxTQUFTLENBQUMsTUFBTTtnQkFDckIsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSixRQUFRLFVBQUE7b0JBQ1IsUUFBUSxVQUFBO2lCQUNUO2FBQ0YsQ0FBQyxDQUFDLElBQUk7OztZQUFDO2dCQUNOLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLGVBQWUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE1BQU07SUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7QUFFRCxTQUFTLGVBQWU7SUFDdEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QyxDQUFDOztBQUVELE1BQU0sS0FBTyxXQUFXLEdBQWEsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDOzs7O0FBQ2xFLE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLGNBQWM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSTs7OztJQUFDLFVBQUMsR0FBVztRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU87Ozs7O1FBQ3hCLFVBQUMsT0FBMEQsRUFBRSxNQUE2Qjs7Z0JBQ2xGLGFBQWEsR0FBUSxHQUFHLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNsQixPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7YUFDbEU7O2dCQUNHLEtBQUssR0FBVyxhQUFhLENBQUMsTUFBTTtZQUN4QyxhQUFhLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsV0FBZ0I7Z0JBQ3JDLE9BQUEsV0FBVyxDQUFDLFVBQVU7OztnQkFBQztvQkFDckIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO3dCQUNmLE9BQU87cUJBQ1I7b0JBQ0QsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQyxFQUFDO1lBTkYsQ0FNRSxFQUNILENBQUM7UUFDSixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmNvbnN0IEJBU0VfVVJMOiBzdHJpbmcgPSBDeXByZXNzLmNvbmZpZygnYmFzZVVybCcpOyAvLyBleDogaHR0cDovL2xvY2FsaG9zdDo0MjAwXG5jb25zdCBMT0dJTl9VUkw6IHN0cmluZyA9IEN5cHJlc3MuZW52KCdsb2dpblVybCcpOyAvLyBleDogaHR0cHM6Ly92YW50YWdlLnVybC5pby9hdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luQ3JlZGVudGlhbHMge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vLyBpbnNwaXJlZCBieSBodHRwczovL3Zyb2NrYWkuZ2l0aHViLmlvL2Jsb2cvMjAxNy8xMC8yOC9jeXByZXNzLWtleWNsb2FrLWludHJlZ3JhdGlvbi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBJTG9naW5DcmVkZW50aWFscyk6IHZvaWQge1xuICBjeS5yZXF1ZXN0KHtcbiAgICB1cmw6IExPR0lOX1VSTCxcbiAgfSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxvZ2luUGFnZUh0bWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGxvZ2luUGFnZUh0bWwuaW5uZXJIVE1MID0gcmVzcG9uc2UuYm9keTtcbiAgICBjb25zdCBsb2dpbkZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGxvZ2luUGFnZUh0bWwucXVlcnlTZWxlY3RvcignI2tjLWZvcm0tbG9naW4nKTtcbiAgICBpZiAobG9naW5Gb3JtKSB7XG4gICAgICBjeS5yZXF1ZXN0KHtcbiAgICAgICAgZm9ybTogdHJ1ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogbG9naW5Gb3JtLmFjdGlvbixcbiAgICAgICAgZm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpOiB2b2lkIHtcbiAgY3kucmVxdWVzdCgnL2FwaS91c2VyL2xvZ291dCcpO1xufVxuXG5mdW5jdGlvbiBfcmVkaXJlY3RUb0hvbWUoKTogdm9pZCB7XG4gIGN5LnZpc2l0KEJBU0VfVVJMKTtcbiAgY3kudXJsKCkuc2hvdWxkKCdub3QuaW5jbHVkZScsIExPR0lOX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnaW5jbHVkZScsIEJBU0VfVVJMKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNTT19DT09LSUVTOiBzdHJpbmdbXSA9IFsnVVNFUl9TU09fSUQnLCAnWFNSRi1UT0tFTiddO1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlTGlzdFNTT0Nvb2tpZXMoKTogdm9pZCB7XG4gIEN5cHJlc3MuQ29va2llcy5kZWZhdWx0cyh7IHdoaXRlbGlzdDogU1NPX0NPT0tJRVMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yQW5ndWxhcigpOiBDeXByZXNzLkNoYWluYWJsZSB7XG4gIGN5LmdldCgnW25nLXZlcnNpb25dJykuc2hvdWxkKCdleGlzdCcpO1xuICByZXR1cm4gY3kud2luZG93KCkudGhlbigod2luOiBXaW5kb3cpID0+IHtcbiAgICByZXR1cm4gbmV3IEN5cHJlc3MuUHJvbWlzZShcbiAgICAgIChyZXNvbHZlOiAodGhlbmFibGVPclJlc3VsdD86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkLCByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXN0YWJpbGl0aWVzOiBhbnkgPSB3aW5bJ2dldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzJ10oKTtcbiAgICAgICAgaWYgKCF0ZXN0YWJpbGl0aWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ05vIHRlc3RhYmlsaXRpZXMuIElzIEFuZ3VsYXIgbG9hZGVkPycpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IHRlc3RhYmlsaXRpZXMubGVuZ3RoO1xuICAgICAgICB0ZXN0YWJpbGl0aWVzLmZvckVhY2goKHRlc3RhYmlsaXR5OiBhbnkpID0+XG4gICAgICAgICAgdGVzdGFiaWxpdHkud2hlblN0YWJsZSgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfSk7XG59XG4iXX0=