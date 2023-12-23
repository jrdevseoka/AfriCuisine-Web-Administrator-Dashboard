import { Injectable } from "@angular/core";
import { Profile } from "../../shared/models/user/profile.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "src/app/shared/res/auth.response";
import { enviroment } from "src/app/env/env.config";

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  private endpoint = `${enviroment.server}/auth/refresh`
  constructor(private jwt: JwtHelperService, private http: HttpClient) {}

  get token() {
    const token = sessionStorage.getItem("token");
    if (token && typeof token === 'string' && token.trim() !== '') {
      return token
    }
    return ''
  }
  setToken(token: string)
  {
     sessionStorage.setItem("token", token)
  }
  mapClaimsToProfile(claims: any) : Profile
  {
    if(claims)
    {
      return {
        email: claims.email,
        id: claims.nameid,
        name: claims.unique_name,
        role: claims.role,
        picture: claims.picture
      }
    }
    return {}
  }
  getJwtClaims(token: string)
  {
     return this.jwt.decodeToken(token)
  }
  get tokenValid() : boolean {
    const token = this.token
    if (typeof token !== 'string' || token.trim() === '') {
      return false;
    }
    const isTokenValid = !this.jwt.isTokenExpired(token);
    return isTokenValid
  }
}
