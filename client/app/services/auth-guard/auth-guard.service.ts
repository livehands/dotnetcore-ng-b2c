import { Injectable } from '@angular/core';
import {
    CanActivate, Router, ActivatedRouteSnapshot,
    RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route
} from '@angular/router';
import { MsalService } from '../msal/msal.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: MsalService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {

        const url = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {

        if (this.authService.isOnline()) {
            return true;
        }

        //this.authService.loginRedirectUrl = url;
        this.router.navigate(['/']);

        return false;
    }
}
