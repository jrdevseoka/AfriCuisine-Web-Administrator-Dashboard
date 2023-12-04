import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
class Permission {
  constructor(private router: Router,
    private auth: AuthService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token: string | null = sessionStorage.getItem("token");
    if (typeof token === 'string' && token.trim() !== '') {
      return this.auth.IsLoggedIn(token)
    }
    return false
  }
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const permission: Permission = inject(Permission)
  return permission.canActivate(next, state)
}
export const DashboardGuard: CanActivateChildFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const permission: Permission = inject(Permission)
  return permission.canActivate(next, state)
}
