import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
export declare class VantageAuthenticationGuard implements CanActivate {
    private _sessionService;
    constructor(_sessionService: VantageSessionService);
    getCookiebyName(name: string): string;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
