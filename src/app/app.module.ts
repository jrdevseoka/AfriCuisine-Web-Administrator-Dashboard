import {  HttpClientModule } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from './shared/shared-component.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardLayoutComponent } from './shared/components/layout/dashboard/dashboard-layout.component';
import { AuthenticationLayoutComponent } from './shared/components/layout/login/auth-layout.component';
import { FeatureModule } from './modules/feature.module';
@NgModule({
  declarations: [
    AppComponent, DashboardLayoutComponent, AuthenticationLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    HttpClientModule,
    AuthModule,
    FeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {
     initFlowbite();
  }
}
