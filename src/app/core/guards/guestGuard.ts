import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";


@Injectable({ providedIn: 'root' })

export class GuestGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | UrlTree{
        if(!this.authService.isLoggedIn){
            return true;
        }
        return this.router.createUrlTree(["/"])
    }
}