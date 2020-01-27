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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbInV0aWxpdHkvdXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUNBQWlDOztBQUFqQyxpQ0FBaUM7O01BRTNCLFFBQVEsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7O01BQzVDLFNBQVMsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7OztBQUVqRCx1Q0FHQzs7O0lBRkMscUNBQWlCOztJQUNqQixxQ0FBaUI7Ozs7Ozs7QUFJbkIsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQXFCO0lBQzdELEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDVCxHQUFHLEVBQUUsU0FBUztLQUNmLENBQUMsQ0FBQyxJQUFJOzs7O0lBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTs7Y0FDbEIsYUFBYSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxhQUFhLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O2NBQ2xDLFNBQVMsR0FBb0IsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRixJQUFJLFNBQVMsRUFBRTtZQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNO2dCQUNyQixjQUFjLEVBQUUsS0FBSztnQkFDckIsSUFBSSxFQUFFO29CQUNKLFFBQVE7b0JBQ1IsUUFBUTtpQkFDVDthQUNGLENBQUMsQ0FBQyxJQUFJOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ1gsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsZUFBZSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTTtJQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDakMsQ0FBQzs7OztBQUVELFNBQVMsZUFBZTtJQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7O0FBRUQsTUFBTSxPQUFPLFdBQVcsR0FBYSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7Ozs7QUFDbEUsTUFBTSxVQUFVLG1CQUFtQjtJQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYztJQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJOzs7O0lBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU87Ozs7O1FBQ3hCLENBQUMsT0FBMEQsRUFBRSxNQUE2QixFQUFFLEVBQUU7O2tCQUN0RixhQUFhLEdBQVEsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEIsT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO2FBQ2xFOztnQkFDRyxLQUFLLEdBQVcsYUFBYSxDQUFDLE1BQU07WUFDeEMsYUFBYSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUN6QyxXQUFXLENBQUMsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUMxQixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ2YsT0FBTztpQkFDUjtnQkFDRCxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFBQyxFQUNILENBQUM7UUFDSixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbmNvbnN0IEJBU0VfVVJMOiBzdHJpbmcgPSBDeXByZXNzLmNvbmZpZygnYmFzZVVybCcpOyAvLyBleDogaHR0cDovL2xvY2FsaG9zdDo0MjAwXG5jb25zdCBMT0dJTl9VUkw6IHN0cmluZyA9IEN5cHJlc3MuZW52KCdsb2dpblVybCcpOyAvLyBleDogaHR0cHM6Ly92YW50YWdlLnVybC5pby9hdXRoXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvZ2luQ3JlZGVudGlhbHMge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vLyBpbnNwaXJlZCBieSBodHRwczovL3Zyb2NrYWkuZ2l0aHViLmlvL2Jsb2cvMjAxNy8xMC8yOC9jeXByZXNzLWtleWNsb2FrLWludHJlZ3JhdGlvbi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBJTG9naW5DcmVkZW50aWFscyk6IHZvaWQge1xuICBjeS5yZXF1ZXN0KHtcbiAgICB1cmw6IExPR0lOX1VSTCxcbiAgfSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGxvZ2luUGFnZUh0bWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGxvZ2luUGFnZUh0bWwuaW5uZXJIVE1MID0gcmVzcG9uc2UuYm9keTtcbiAgICBjb25zdCBsb2dpbkZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGxvZ2luUGFnZUh0bWwucXVlcnlTZWxlY3RvcignI2tjLWZvcm0tbG9naW4nKTtcbiAgICBpZiAobG9naW5Gb3JtKSB7XG4gICAgICBjeS5yZXF1ZXN0KHtcbiAgICAgICAgZm9ybTogdHJ1ZSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHVybDogbG9naW5Gb3JtLmFjdGlvbixcbiAgICAgICAgZm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3JlZGlyZWN0VG9Ib21lKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpOiB2b2lkIHtcbiAgY3kucmVxdWVzdCgnL2FwaS91c2VyL2xvZ291dCcpO1xufVxuXG5mdW5jdGlvbiBfcmVkaXJlY3RUb0hvbWUoKTogdm9pZCB7XG4gIGN5LnZpc2l0KEJBU0VfVVJMKTtcbiAgY3kudXJsKCkuc2hvdWxkKCdub3QuaW5jbHVkZScsIExPR0lOX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnaW5jbHVkZScsIEJBU0VfVVJMKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNTT19DT09LSUVTOiBzdHJpbmdbXSA9IFsnVVNFUl9TU09fSUQnLCAnWFNSRi1UT0tFTiddO1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlTGlzdFNTT0Nvb2tpZXMoKTogdm9pZCB7XG4gIEN5cHJlc3MuQ29va2llcy5kZWZhdWx0cyh7IHdoaXRlbGlzdDogU1NPX0NPT0tJRVMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yQW5ndWxhcigpOiBDeXByZXNzLkNoYWluYWJsZSB7XG4gIGN5LmdldCgnW25nLXZlcnNpb25dJykuc2hvdWxkKCdleGlzdCcpO1xuICByZXR1cm4gY3kud2luZG93KCkudGhlbigod2luOiBXaW5kb3cpID0+IHtcbiAgICByZXR1cm4gbmV3IEN5cHJlc3MuUHJvbWlzZShcbiAgICAgIChyZXNvbHZlOiAodGhlbmFibGVPclJlc3VsdD86IHt9IHwgUHJvbWlzZUxpa2U8e30+KSA9PiB2b2lkLCByZWplY3Q6IChlcnJvcj86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXN0YWJpbGl0aWVzOiBhbnkgPSB3aW5bJ2dldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzJ10oKTtcbiAgICAgICAgaWYgKCF0ZXN0YWJpbGl0aWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ05vIHRlc3RhYmlsaXRpZXMuIElzIEFuZ3VsYXIgbG9hZGVkPycpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IHRlc3RhYmlsaXRpZXMubGVuZ3RoO1xuICAgICAgICB0ZXN0YWJpbGl0aWVzLmZvckVhY2goKHRlc3RhYmlsaXR5OiBhbnkpID0+XG4gICAgICAgICAgdGVzdGFiaWxpdHkud2hlblN0YWJsZSgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfSk7XG59XG4iXX0=