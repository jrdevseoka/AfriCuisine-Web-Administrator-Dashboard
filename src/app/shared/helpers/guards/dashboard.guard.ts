import { Inject, Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: 'root'
})
class Permission {
  constructor(private auth: AuthService,
    private jwt: JwtHelperService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.auth.isAuthorized()
  }
}

export const DashboardGuard: CanActivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
     const permission: Permission =  inject(Permission)
     const authorized: boolean =  permission.canActivate(route, state)
     return authorized
}
