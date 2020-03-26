import { VantageThemeService } from '@td-vantage/ui-platform/theme';
export interface IVantageAppSwitcherItem {
    text: string;
    href: string;
    icon?: string;
    svgIcon?: string;
    divider?: boolean;
}
export declare class VantageAppSwitcherComponent {
    _themeService: VantageThemeService;
    productList: IVantageAppSwitcherItem[];
    exploreMoreLink: string;
    constructor(_themeService: VantageThemeService);
}
