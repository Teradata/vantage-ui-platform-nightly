import { RendererFactory2, Provider } from '@angular/core';
import { Observable } from 'rxjs';
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
    readonly activeTheme$: Observable<VantageTheme>;
    readonly darkTheme$: Observable<boolean>;
    readonly lightTheme$: Observable<boolean>;
    constructor(rendererFactory: RendererFactory2, _document: any);
    private get _activeTheme();
    private set _activeTheme(value);
    get darkThemeIsActive(): boolean;
    get lightThemeIsActive(): boolean;
    activeTheme(): VantageTheme;
    applyLightTheme(): void;
    applyDarkTheme(): void;
    toggleTheme(): void;
    map(mapObject: IVantageThemeMap, fallback?: any): Observable<any>;
    private applyTheme;
}
export declare function VANTAGE_THEME_PROVIDER_FACTORY(parent: VantageThemeService, rendererFactory: RendererFactory2, _document: any): VantageThemeService;
export declare const VANTAGE_THEME_PROVIDER: Provider;
