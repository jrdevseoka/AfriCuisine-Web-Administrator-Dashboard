import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable, Subject, catchError, from, of, switchMap } from "rxjs";
import { Profile } from "../../shared/models/user/profile.model"
import { AuthCommand } from "../../shared/commands/auth.command"
import { AuthResponse } from "../../shared/res/auth.response"
import { enviroment } from "../../env/env.config"
import { HttpClient } from "@angular/common/http"
import { JWTService } from "./jwt.service";
import { ForgotPasswordCommand } from "../../shared/commands/forgot-password.command";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = `${enviroment.apiUri}/auth`
  private userSubject: BehaviorSubject<Profile | undefined>
  public  user$: Observable<Profile | undefined>

  constructor(
    private http: HttpClient,
    private jwt: JWTService
  ) {
    var claims = this.jwt.getJwtClaims(this.jwt.token)
     const user = this.jwt.mapClaimsToProfile(claims) as Profile | undefined
     this.userSubject = new BehaviorSubject<Profile | undefined>(user)
     this.user$ = this.userSubject.asObservable()
  }
  signInWithEmailAndPassword(command: AuthCommand): Observable<AuthResponse> {
    const response = this.http.post<AuthResponse>(this.endpoint, command)
    return response.pipe(switchMap(res => {
      if(res.succeeded)
      {
        sessionStorage.setItem("token", res.token)
        var claims = this.jwt.getJwtClaims(res.token)
        var user = this.jwt.mapClaimsToProfile(claims)
        this.userSubject.next(user)
      }
      return of(res)
    }))
  }

  public isSuper = () => {
    const claims = this.jwt.getJwtClaims(this.jwt.token)
    return claims.role == 'Super'
  }
  public isRestricted = () => {
    const claims = this.jwt.getJwtClaims(this.jwt.token)
    return claims.role == 'Restricted'
  }
  isAuthorized = () => {
    const isTokenValid = this.jwt.tokenValid
    return isTokenValid
  }
}
