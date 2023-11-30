import { ErrorResponse } from './../models/res/error.reponse';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "src/app/env/env.config";
import { AuthCommand } from "../models/res/commands/auth/auth.command";
import { AuthResponse } from "../models/res/auth-reponse";
import { BehaviorSubject, Observable, Subject, take, throwError } from "rxjs";
import { Profile } from "../models/user/profile.model";
import { UserService } from "./user.service";
import { QueryItemResponse } from "../models/res/query-item.reponse";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = `${enviroment.apiUrl}/auth`

  private profileSub: BehaviorSubject<Profile>
  public  profile: Observable<Profile>
  user: Profile

  private itemResponse: QueryItemResponse<Profile>
  private errorResponse: ErrorResponse

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService,
    private readonly jwtService: JwtHelperService) {
    this.itemResponse = { item: { email: '', id: '', name: '', }, succeeded: false }
    this.errorResponse = { succeeded: false }
    this.user = { email: '', name: '', id: '' }
    this.profileSub = new BehaviorSubject<Profile>(this.user)
    this.profile = this.profileSub.asObservable()
  }

  signIn(user: AuthCommand) {
    const response = this.http.post<AuthResponse>(this.endpoint, user)
    return response;
  }
  getUserProfile(email: string) {
    this.userService.getProfile(email).subscribe({
      next: (res) => {
        const token: string = sessionStorage.getItem("token")!;
        this.user = { token: token, ...res.item }
        this.profileSub.next(this.user);
      },
      error: (err: ErrorResponse) => {
        this.errorResponse = err
        this.itemResponse.error = this.errorResponse
        throwError(() => this.itemResponse)
      }
    })
  }
  public isUserRestricted = () => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("token")?.trim() != '') {
      const token = sessionStorage.getItem("token")
      if (typeof token == 'string') {
        const decodedToken = this.jwtService.decodeToken(token)
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        return role === 'Restricted'
      }
    }
    return false
  }
  public IsUserSuper = () => {

    if (sessionStorage.getItem("token") && sessionStorage.getItem("token")?.trim() != '') {
      const token = sessionStorage.getItem("token")
      if (typeof token == 'string') {
        const decodedToken = this.jwtService.decodeToken(token)
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        return role === 'Super'
      }
    }
    return false
  }
  getAuthorizedProfile()
  {
     return this.profileSub.value
  }
  public getAuthStatus() {
    let status: boolean = false
    return status
  }
}
