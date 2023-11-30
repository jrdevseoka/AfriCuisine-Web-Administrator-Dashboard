import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from './shared/shared-component.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { AuthGuard } from './shared/guards/auth.guard';
export const getToken = () => {
  return localStorage.getItem("token");
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
    SharedComponentModule,
    HttpClientModule,
    AuthModule,
    JwtModule.forRoot(jwtOptions)

  ],

  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

