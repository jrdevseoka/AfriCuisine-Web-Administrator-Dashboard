import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Profile } from "../../models/user/profile.model";
import { AuthService } from "../../services/auth.service";

export const ProfileResolver: ResolveFn<Profile> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth: AuthService =  inject(AuthService)
  const profile = auth.User()
  return profile;
}
