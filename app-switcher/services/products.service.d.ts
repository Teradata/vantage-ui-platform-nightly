import { Observable } from 'rxjs';
export interface IVantageAppSwitcherItem {
    id?: string;
    text: string;
    description?: string;
    href: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
    divider?: boolean;
}
declare const VantageProductsService_base: new (...args: any[]) => any;
export declare class VantageProductsService extends VantageProductsService_base {
    private _baseUrlOverride?;
    get basePath(): string;
    constructor(_baseUrlOverride?: string);
    get(): Observable<IVantageAppSwitcherItem[]>;
    getOther(): Observable<IVantageAppSwitcherItem[]>;
}
export {};
