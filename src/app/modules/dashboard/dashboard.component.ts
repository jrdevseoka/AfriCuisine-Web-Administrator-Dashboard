import { Component, OnInit } from "@angular/core";
import { Profile } from "src/app/shared/models/user/profile.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { initFlowbite } from "flowbite";
import { ActivatedRoute, Data } from "@angular/router";
import { PreloaderService } from "src/app/shared/services/preloader.service";

@Component({
  templateUrl: './dashboard.component.html',
  selector: 'app-dashboard'
})
export class DashboardComponent implements OnInit {
  profile: Profile
  completed: boolean = false
  constructor(private route: ActivatedRoute,
    private readonly preloader: PreloaderService) {
      this.profile = {name: '', id: '', email: ''}
  }
  async ngOnInit(): Promise<void> {
    this.profile = await this.route.snapshot.data['profile']
    this.completed = true
  }
}
