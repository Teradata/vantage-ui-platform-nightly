import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { VantageSessionService } from '../session/session.service';
export declare class VantageAuthenticationGuard implements CanActivate {
    private _router;
    private _sessionService;
    constructor(_router: Router, _sessionService: VantageSessionService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
}
