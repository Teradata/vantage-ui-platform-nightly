import { RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
export declare enum VantageTheme {
    DARK = "dark-theme",
    LIGHT = "light-theme"
}
export declare class VantageThemeService {
    private _document;
    private rendererFactory;
    private _renderer2;
    private readonly _activeThemeSubject;
    readonly activeTheme$: Observable<VantageTheme>;
    constructor(_document: any, rendererFactory: RendererFactory2);
    private activeTheme;
    readonly darkThemeIsActive: boolean;
    readonly lightThemeIsActive: boolean;
    applyLightTheme(): void;
    applyDarkTheme(): void;
    private applyTheme;
}
