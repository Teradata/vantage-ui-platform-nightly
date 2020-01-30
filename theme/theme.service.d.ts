import { RendererFactory2, Provider } from '@angular/core';
import { Observable } from 'rxjs';
export declare enum VantageTheme {
    DARK = "dark-theme",
    LIGHT = "light-theme"
}
export declare class VantageThemeService {
    private rendererFactory;
    private _document;
    private _renderer2;
    private readonly _activeThemeSubject;
    readonly activeTheme$: Observable<VantageTheme>;
    constructor(rendererFactory: RendererFactory2, _document: any);
    private activeTheme;
    readonly darkThemeIsActive: boolean;
    readonly lightThemeIsActive: boolean;
    applyLightTheme(): void;
    applyDarkTheme(): void;
    toggleTheme(): void;
    private applyTheme;
}
export declare function VANTAGE_THEME_PROVIDER_FACTORY(parent: VantageThemeService, rendererFactory: RendererFactory2, _document: any): VantageThemeService;
export declare const VANTAGE_THEME_PROVIDER: Provider;
