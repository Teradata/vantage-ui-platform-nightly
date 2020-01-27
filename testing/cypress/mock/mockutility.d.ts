declare global {
    namespace Cypress {
        interface Chainable {
            now(func: string, ...args: any[]): Chainable<Element>;
        }
    }
}
export declare enum TestType {
    'unit' = "unit",
    'e2e' = "e2e"
}
interface IFixtureRouteDef {
    alias?: string;
    status?: number;
    headers?: any;
    response?: any;
    onResponse?: any;
}
export declare class MockUtility {
    timestamp: string;
    recordedURLMethodFixtureMap: Map<string, Map<string, IFixtureRouteDef[]>>;
    urlMethodFixtureMap: Map<string, IFixtureRouteDef[]>;
    mocking: boolean;
    recording: boolean;
    testType: TestType;
    testName: string;
    /**
     * Method that handles all boilerplate work to set up test.
     *
     * @param testName testname used to determine existence of test specific fixtures and
     * @param testType unit or e2e
     * @param templates array of templates to be loaded (eg. 'empty' or 'golden')
     * @param userName user name matching fixture containing credentials
     * @param record force recording for this test, default is false
     */
    setUp(testName: string, testType: TestType, templates: string[], userName: string, record?: boolean): void;
    /**
     * Discover any mock data fixtures under the specified directory hierarchy
     * and register associated cy.routes.
     *
     * @param filename fixture filename
     */
    registerRoute(dir: string): void;
    registerMockRoute(url: string, method: string, fixtureRouteDef: IFixtureRouteDef): void;
    recordResponse(xhr: any): void;
    tearDown(): void;
}
export {};
