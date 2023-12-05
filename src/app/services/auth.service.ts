import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, from, of, switchMap } from "rxjs";
import { Profile } from "../shared/models/user/profile.model";
import { UserService } from "./user.service";
import { AuthCommand } from "../shared/commands/auth.command";
import { AuthResponse } from "../shared/res/auth.response";
import { enviroment } from "../env/env.config";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = `${enviroment.apiUri}/auth`

  private profileSub: BehaviorSubject<Profile>
  private user: Profile

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) {
    this.user = { email: '', name: '', id: '' }
    this.profileSub = this.profileSub = new BehaviorSubject<Profile>(this.user)
  }
  signInWithEmailAndPassword(command: AuthCommand): Observable<AuthResponse> {
    return from(
      this.http.post<AuthResponse>(this.endpoint, command).pipe(
        switchMap(async (res) => {
          if (res.succeeded) {
            sessionStorage.setItem('token', res.token);
            const data = await this.userService.getAuthorizedUser(command.username);
            this.profileSub.next(data.item);
          }
          return res;
        }),
        catchError((error) => {
          console.error('Error signing in:', error);
          const response: AuthResponse = {
            token: '',
            message: 'An unexpected error occurred while attempting to sign-in. ' + enviroment.supportMessage,
            succeeded: false,
          };
          return of(response);
        })
      )
    )
  }
  User = () => {
    return this.profileSub.value
  }
  public isUserSuper = () => {
    const token = this.getJWToken()
    const claims = this.jwtService.decodeToken(token)
    return claims.role == 'Super'
  }
  public isUserRestricted = () => {
    const token = this.getJWToken()
    const claims = this.jwtService.decodeToken(token)
    return claims.role == 'Restricted'
  }
  getJWToken(): string {
    const token = sessionStorage.getItem("token");
    if (token && typeof token === 'string' && token.trim() !== '') {
      return token;
    }
    return '';
  }

}
