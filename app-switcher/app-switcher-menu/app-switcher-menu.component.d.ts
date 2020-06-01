import { ElementRef } from '@angular/core';
import { IVantageAppSwitcherItem } from '../services/products.service';
export declare class VantageAppSwitcherMenuComponent {
    private elRef;
    products: IVantageAppSwitcherItem[];
    otherProducts: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    constructor(elRef: ElementRef);
    _blockEvent(event: Event): void;
    scrollToBottom(): void;
}
