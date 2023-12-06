import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { CloudinaryModule } from '@cloudinary/ng';
import { Router } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
export const getToken = () => {
  return sessionStorage.getItem("token");
}

const jwtOptions: JwtModuleOptions = {
  config: {
    tokenGetter: getToken,
    allowedDomains: ["localhost:5214"],
    disallowedRoutes: []

  }
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloudinaryModule,
    AuthModule,
    DashboardModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    initFlowbite();
    const token: string | null = sessionStorage.getItem("token")
    if(token && typeof token === 'string' && token.trim() !== '')
    {
       this.router.navigate(['dashboard'])
    }
  }
}

