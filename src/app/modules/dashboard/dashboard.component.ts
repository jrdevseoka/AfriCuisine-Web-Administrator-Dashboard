import { AuthResponse } from './../../shared/res/auth.response';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "src/app/shared/models/user/profile.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  user: Profile

  constructor(private route: ActivatedRoute,
    private router: Router) {
      this.user = this.route.snapshot.data['user']
      if (this.user && typeof this.user !== 'undefined') {
        sessionStorage.setItem("claims", JSON.stringify(this.user))
        this.router.navigate(['/dashboard/home'])
      }
      this.setStateAndErrorMessage(this.user)
  }
  ngOnInit(): void {

  }
  private setStateAndErrorMessage(user: Profile) {
    if (!user) {
      const response: AuthResponse = {token: '',  succeeded: false, message: 'Unexpected error occured while fetching user details' }
      sessionStorage.removeItem("token")
      this.router.navigate(['/auth/login'], { state: { response: response}})
      return;
    }
  }
}
