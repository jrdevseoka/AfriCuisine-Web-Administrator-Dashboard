import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Profile } from "../../models/user/profile.model";
import { AuthService } from "../../services/auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { QueryItemResponse } from "../../models/res/query-item.reponse";

export const ProfileResolver: ResolveFn<QueryItemResponse<Profile>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth =  inject(AuthService)
  const jwt =   inject(JwtHelperService)
  const token = sessionStorage.getItem("token")
  const claims = jwt.decodeToken(token!);
  return auth.getUserProfile(claims.email);
}
