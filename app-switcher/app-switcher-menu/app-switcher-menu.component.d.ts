import { ElementRef } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { IVantageAppSwitcherItem } from '../services/products.service';
export declare class VantageAppSwitcherMenuComponent {
    private elRef;
    products: IVantageAppSwitcherItem[];
    otherProducts: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    expansionPanel: MatExpansionPanel;
    constructor(elRef: ElementRef);
    _blockEvent(event: Event): void;
    scrollToBottom(): void;
}
