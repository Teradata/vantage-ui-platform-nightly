export interface ILoginCredentials {
    username: string;
    password: string;
}
export declare function login({ username, password }: ILoginCredentials): void;
export declare function logout(): void;
export declare const SSO_COOKIES: string[];
export declare function whiteListSSOCookies(): void;
export declare function waitForAngular(): Cypress.Chainable;
