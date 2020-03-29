import { VantageThemeService } from '@td-vantage/ui-platform/theme';
import { IVantageAppSwitcherItem } from '../services/products.service';
export declare class VantageAppSwitcherMenuComponent {
    _themeService: VantageThemeService;
    products: IVantageAppSwitcherItem[];
    otherProducts: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    constructor(_themeService: VantageThemeService);
    _blockEvent(event: Event): void;
}
