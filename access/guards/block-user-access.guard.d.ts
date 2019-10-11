import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VantageSessionService, VantageAuthenticationGuard } from '@td-vantage/ui-platform/auth';
/**
 * Guard that checks if the user is a normal user (`admin` flag `false`)
 * to block access into a particular route.
 * If `admin` flag is `false`, then we redirect to `/`
 */
export declare class VantageBlockUserAccessGuard implements CanActivate {
    private _authGuard;
    private _sessionService;
    constructor(_authGuard: VantageAuthenticationGuard, _sessionService: VantageSessionService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
