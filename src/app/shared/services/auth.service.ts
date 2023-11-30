import { ErrorResponse } from './../models/res/error.reponse';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "src/app/env/env.config";
import { AuthCommand } from "../models/res/commands/auth/auth.command";
import { AuthResponse } from "../models/res/auth-reponse";
import { BehaviorSubject, Observable, Subject, take } from "rxjs";
import { Profile } from "../models/user/profile.model";
import { UserService } from "./user.service";
import { QueryItemResponse } from "../models/res/query-item.reponse";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = `${enviroment.apiUrl}/auth`

  private authenticatedSub: Subject<boolean>
  public authenticated$: Observable<boolean>

  private itemResponse: QueryItemResponse<Profile>
  private errorResponse: ErrorResponse

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService,
    private readonly jwtService: JwtHelperService) {
    this.authenticatedSub = new Subject<boolean>()
    this.authenticated$ = this.authenticatedSub.asObservable()
    this.itemResponse = { item: { email: '', id: '', name: '', }, succeeded: false}
    this.errorResponse = { succeeded: false }
  }

  signIn(user: AuthCommand) {
    const response = this.http.post<AuthResponse>(this.endpoint, user)
    return response;
  }
  setAuthState = (authenticated: boolean) => {
    this.authenticatedSub.next(authenticated);
  }
  getAuthorizedUserProfile(email: string) {
    this.userService.getProfile(email).subscribe({
      next: (res) => {
        this.itemResponse = res
      },
      error: (err: ErrorResponse) => {
        this.errorResponse = err
        this.itemResponse.error = this.errorResponse
      }
    })
    return this.itemResponse
  }
  public isUserRestricted = () => {
    if(sessionStorage.getItem("token") && sessionStorage.getItem("token")?.trim() != '')
    {
      const token =  sessionStorage.getItem("token")
      if(typeof token == 'string')
      {
        const decodedToken = this.jwtService.decodeToken(token)
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        return role === 'Restricted'
      }
    }
    return false
  }
  public  IsUserSuper = () => {

    if(sessionStorage.getItem("token") && sessionStorage.getItem("token")?.trim() != '')
    {
      const token =  sessionStorage.getItem("token")
      if(typeof token == 'string')
      {
        const decodedToken = this.jwtService.decodeToken(token)
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        return role === 'Super'
      }
    }
    return false
  }
  public getAuthStatus()
  {
      let status: boolean = false
      this.authenticated$.pipe(take(1)).subscribe((st) => {
         status = st
      })
      return status
  }
}
