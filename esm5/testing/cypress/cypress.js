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
    cy.visit(BASE_URL);
    cy.url().should('include', LOGIN_URL);
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
        if (!loginForm) {
            return;
        }
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
            cy.visit(BASE_URL);
            cy.url().should('not.include', LOGIN_URL);
            cy.url().should('include', BASE_URL);
        }));
    }));
}
/**
 * @return {?}
 */
export function logout() {
    cy.visit(BASE_URL);
    cy.visit('/api/user/logout');
    cy.visit(BASE_URL);
    cy.url().should('include', LOGIN_URL);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3lwcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZC12YW50YWdlL3VpLXBsYXRmb3JtL3Rlc3RpbmcvY3lwcmVzcy8iLCJzb3VyY2VzIjpbImN5cHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUFpQzs7QUFBakMsaUNBQWlDOztJQUUzQixRQUFRLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7OztJQUM1QyxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7QUFFakQsdUNBR0M7OztJQUZDLHFDQUFpQjs7SUFDakIscUNBQWlCOzs7Ozs7O0FBSW5CLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBeUM7UUFBdkMsc0JBQVEsRUFBRSxzQkFBUTtJQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDVCxHQUFHLEVBQUUsU0FBUztLQUNmLENBQUMsQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQyxRQUFhOztZQUNkLGFBQWEsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakUsYUFBYSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUNsQyxTQUFTLEdBQW9CLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU87U0FDUjtRQUNELEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3JCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDLENBQUMsSUFBSTs7O1FBQUM7WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUM7QUFDTCxDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE1BQU07SUFDcEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN4QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuY29uc3QgQkFTRV9VUkw6IHN0cmluZyA9IEN5cHJlc3MuY29uZmlnKCdiYXNlVXJsJyk7IC8vIGV4OiBodHRwOi8vbG9jYWxob3N0OjQyMDBcbmNvbnN0IExPR0lOX1VSTDogc3RyaW5nID0gQ3lwcmVzcy5lbnYoJ2xvZ2luVXJsJyk7IC8vIGV4OiBodHRwczovL3ZhbnRhZ2UudXJsLmlvL2F1dGhcblxuZXhwb3J0IGludGVyZmFjZSBJTG9naW5DcmVkZW50aWFscyB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vdnJvY2thaS5naXRodWIuaW8vYmxvZy8yMDE3LzEwLzI4L2N5cHJlc3Mta2V5Y2xvYWstaW50cmVncmF0aW9uL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IElMb2dpbkNyZWRlbnRpYWxzKTogdm9pZCB7XG4gIGN5LnZpc2l0KEJBU0VfVVJMKTtcbiAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgTE9HSU5fVVJMKTtcbiAgY3kucmVxdWVzdCh7XG4gICAgdXJsOiBMT0dJTl9VUkwsXG4gIH0pLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICBjb25zdCBsb2dpblBhZ2VIdG1sOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwnKTtcbiAgICBsb2dpblBhZ2VIdG1sLmlubmVySFRNTCA9IHJlc3BvbnNlLmJvZHk7XG4gICAgY29uc3QgbG9naW5Gb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBsb2dpblBhZ2VIdG1sLnF1ZXJ5U2VsZWN0b3IoJyNrYy1mb3JtLWxvZ2luJyk7XG4gICAgaWYgKCFsb2dpbkZvcm0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3kucmVxdWVzdCh7XG4gICAgICBmb3JtOiB0cnVlLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB1cmw6IGxvZ2luRm9ybS5hY3Rpb24sXG4gICAgICBmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG4gICAgICBib2R5OiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGN5LnZpc2l0KEJBU0VfVVJMKTtcbiAgICAgIGN5LnVybCgpLnNob3VsZCgnbm90LmluY2x1ZGUnLCBMT0dJTl9VUkwpO1xuICAgICAgY3kudXJsKCkuc2hvdWxkKCdpbmNsdWRlJywgQkFTRV9VUkwpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpOiB2b2lkIHtcbiAgY3kudmlzaXQoQkFTRV9VUkwpO1xuICBjeS52aXNpdCgnL2FwaS91c2VyL2xvZ291dCcpO1xuICBjeS52aXNpdChCQVNFX1VSTCk7XG4gIGN5LnVybCgpLnNob3VsZCgnaW5jbHVkZScsIExPR0lOX1VSTCk7XG59XG4iXX0=