import { Component, Input, OnInit } from "@angular/core";
import { Profile } from "../../models/user/profile.model";
import { Router } from "@angular/router";
import { JWTService } from "src/app/services/users/jwt.service";

@Component({
  selector: 'Top-Navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent {
  @Input() user: Profile | undefined
  constructor(private router: Router, private readonly jwt: JWTService) {

  }
  logOut() {
    sessionStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
