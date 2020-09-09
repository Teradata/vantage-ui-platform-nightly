import { Provider } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from '@covalent/core/dynamic-menu';
export interface IHelpAssets {
    [name: string]: {
        links: IMenuItem[];
        learn?: IMenuItem[];
    };
}
declare const VantageAssetsService_base: new (...args: any[]) => any;
export declare class VantageAssetsService extends VantageAssetsService_base {
    /**
     * Retrieve the help JSON definition asset
     */
    getHelpJSON(response?: Observable<HttpResponse<any>>): Observable<IHelpAssets>;
}
export declare function VANTAGE_ASSETS_PROVIDER_FACTORY(parent: VantageAssetsService): VantageAssetsService;
export declare const VANTAGE_ASSETS_PROVIDER: Provider;
export {};
