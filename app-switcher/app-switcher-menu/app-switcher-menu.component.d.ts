import { VantageThemeService } from '@td-vantage/ui-platform/theme';
export interface IVantageAppSwitcherItem {
    text: string;
    href: string;
    icon?: string;
    svgIcon?: string;
    iconClasses?: string[];
    divider?: boolean;
}
export declare class VantageAppSwitcherMenuComponent {
    _themeService: VantageThemeService;
    products: IVantageAppSwitcherItem[];
    otherProducts: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    constructor(_themeService: VantageThemeService);
    _blockEvent(event: Event): void;
}
