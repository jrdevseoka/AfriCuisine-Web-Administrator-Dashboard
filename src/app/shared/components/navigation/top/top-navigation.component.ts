import { Component, Input, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Profile } from "src/app/shared/models/user/profile.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'Top-Navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavComponent {
  @Input() user: Profile = {id: '', name: '', email: ''}
  constructor(
    private auth: AuthService,
    private jwt: JwtHelperService)
  {
  }
}
