import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'AfriCuisine | Administrator';
  authenticated: boolean = false
  constructor(private authService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
    initFlowbite();
  }
  logOut() {

  }
}
