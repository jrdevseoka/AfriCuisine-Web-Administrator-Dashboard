// auth.module.ts

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AuthModule {}
