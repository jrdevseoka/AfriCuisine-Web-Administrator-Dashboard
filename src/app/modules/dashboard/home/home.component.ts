import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Profile } from "src/app/shared/models/user/profile.model";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
  profile: Profile
  constructor(private auth: AuthService,
              private route: ActivatedRoute) {
    this.profile = { name: '', email: '', id: ''}
  }
  ngOnInit(): void {
    this.profile = this.route.snapshot.data['profile'];
  }
}
