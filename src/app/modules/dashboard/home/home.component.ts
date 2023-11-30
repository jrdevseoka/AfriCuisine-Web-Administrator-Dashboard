import { Component } from "@angular/core";
import { Profile } from "src/app/shared/models/user/profile.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  profile: Profile
  constructor(private auth: AuthService) {
    this.profile = { name: '', email: '', id: ''}
  }
  ngOnInit(): void {
  }
}
