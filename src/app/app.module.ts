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
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ErrorInterceptor } from './shared/helpers/interceptors/error.interceptor';
import { PreloaderService } from './shared/services/preloader.service';
import { CloudinaryModule } from '@cloudinary/ng';
import { provideRouter } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/dashboard.guard';
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
    SharedComponentModule,
    HttpClientModule,
    AuthModule,
    CloudinaryModule,
    DashboardModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: [PreloaderService, {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
   provideRouter([
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    }
   ])],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}

