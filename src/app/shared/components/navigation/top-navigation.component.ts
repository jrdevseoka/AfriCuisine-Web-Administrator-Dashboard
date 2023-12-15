import { Component, OnInit } from "@angular/core";
import { Profile } from "../../models/user/profile.model";
import { Router } from "@angular/router";
import { JWTService } from "src/app/services/jwt.service";

@Component({
  selector: 'Top-Navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {
  user: Profile
  constructor(private router: Router, private readonly jwt: JWTService) {
    this.user = { name: '', id: '', email: '', role: '' }
  }
  ngOnInit(): void {
    const claims = this.jwt.getJwtClaims(this.jwt.token)
    this.user = this.jwt.mapClaimsToProfile(claims)
  }
  logOut() {
    sessionStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
