import { RendererFactory2, Provider } from '@angular/core';
import { Observable } from 'rxjs';
export declare const THEME_LOCAL_STORAGE_KEY: string;
export declare enum VantageTheme {
    DARK = "dark-theme",
    LIGHT = "light-theme"
}
export interface IVantageThemeMap {
    [VantageTheme.DARK]?: any;
    [VantageTheme.LIGHT]?: any;
}
export declare class VantageThemeService {
    private rendererFactory;
    private _document;
    private _renderer2;
    private readonly _activeThemeSubject;
    private readonly preferDarkMediaQuery;
    activeTheme$: Observable<VantageTheme>;
    darkTheme$: Observable<boolean>;
    lightTheme$: Observable<boolean>;
    constructor(rendererFactory: RendererFactory2, _document: any);
    private get _activeTheme();
    private set _activeTheme(value);
    get darkThemeIsActive(): boolean;
    get lightThemeIsActive(): boolean;
    activeTheme(): VantageTheme;
    applyLightTheme(): VantageTheme;
    applyDarkTheme(): VantageTheme;
    toggleTheme(): VantageTheme;
    map(mapObject: IVantageThemeMap, fallback?: any): Observable<any>;
    private applyTheme;
    private checkOSPreference;
}
export declare function VANTAGE_THEME_PROVIDER_FACTORY(parent: VantageThemeService, rendererFactory: RendererFactory2, _document: any): VantageThemeService;
export declare const VANTAGE_THEME_PROVIDER: Provider;
