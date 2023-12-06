import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Profile } from "../../models/user/profile.model";
import { AuthService } from "src/app/services/auth.service";
import { inject } from "@angular/core";

export const UserResolver: ResolveFn<Profile> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, auth: AuthService = inject(AuthService)) => {
    const user$ = auth.User();
    return user$
  }