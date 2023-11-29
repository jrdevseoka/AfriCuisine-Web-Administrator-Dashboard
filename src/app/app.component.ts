import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from './shared/services/auth.service';
import { Profile } from './shared/models/user/profile.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'AfriCuisine | Administrator';
  profile: Profile | undefined
  constructor(private router: Router, private authService: AuthService){
    this.profile = { name: '', id:  '', email:'',
      role: {id: '', name: ''}
    }
    this.authService.currentUser.subscribe((profile) => {
      this.profile = profile
    })

  }
  ngOnInit(): void {
    initFlowbite();
  }
  logOut()
  {
    this.authService.logOut('/login')
  }
}
