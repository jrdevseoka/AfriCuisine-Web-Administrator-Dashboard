import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/shared/models/user/profile.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { firstValueFrom } from 'rxjs'
import { JwtHelperService } from "@auth0/angular-jwt";
import { getToken } from "src/app/app.module";

@Component({
  templateUrl: './dashboard.component.html',
  selector: 'app-dashboard'
})
export class DashboardComponent implements OnInit {
  profile: Profile
  authStatus: boolean = false
  constructor(private authService: AuthService,
    private jwtService: JwtHelperService) {
    this.profile = { email: '', name: '', id: '' }
  }
  ngOnInit(): void {
    this.authStatus = this.authService.getAuthStatus()
    this.getAuthenticatedProfile()
  }

  getAuthenticatedProfile() {
    if (this.authStatus) {
      const token = getToken()
      if (token) {
        const claim = this.jwtService.decodeToken(token)
         this.profile = this.authService.getAuthorizedUserProfile(claim.email).item
      }
    }
  }

  async getAuthStatus() {
    await firstValueFrom(this.authService.authenticated$).then((status) => {
      this.authStatus = status
    })
  }
  getStoredToken() {
    const token = sessionStorage.getItem('token')
    if(typeof token === 'string' && token.trim() !== '')
    {
      return token
    }
    return null
  }
}
