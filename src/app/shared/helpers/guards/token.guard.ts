import { Inject, Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "src/app/services/users/auth.service";

@Injectable({
  providedIn: 'root'
})
class Permission {

  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token: string = route.queryParams['token']
    if(typeof token === 'undefined')
    {
       this.router.navigate([''])
    }
    return true
  }
}

export const TokenGuard: CanActivateFn =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
     const permission: Permission =  inject(Permission)
     const tokenExist: boolean =  permission.canActivate(route, state)
     return tokenExist
}
