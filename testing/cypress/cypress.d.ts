export interface ILoginCredentials {
    username: string;
    password: string;
}
export declare function login({ username, password }: ILoginCredentials): void;
export declare function logout(): void;
