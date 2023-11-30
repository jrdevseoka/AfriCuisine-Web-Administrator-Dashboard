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
  constructor(private auth: AuthService) {
    this.profile = { name: '', email: '', id: ''}
  }
  ngOnInit(): void {
    this.profile = this.auth.getAuthorizedProfile()
  }
}
