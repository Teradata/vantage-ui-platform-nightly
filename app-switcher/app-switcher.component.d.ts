import { ChangeDetectorRef } from '@angular/core';
import { IVantageAppSwitcherItem } from './services/products.service';
import { VantageAppSwitcherMenuComponent } from './app-switcher-menu/app-switcher-menu.component';
export declare class VantageAppSwitcherComponent {
    private _changeDetectorRef;
    products: IVantageAppSwitcherItem[];
    otherProducts: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    appSwitcherMenu: VantageAppSwitcherMenuComponent;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    menuClosed(): void;
}
