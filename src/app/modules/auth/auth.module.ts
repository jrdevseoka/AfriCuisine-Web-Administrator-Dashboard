// auth.module.ts

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedComponentModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './reset-password/forgot-password/forgot-password.component';
import { TokenGuard } from 'src/app/shared/helpers/guards/token.guard';

const routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Admin Dashboard | Sign In' },
      {path: 'forgot-password', component: ForgotPasswordComponent, title: 'Admin Dashboard | Reset Password'},
      { path: 'reset-password', component: ResetPasswordComponent , canActivate: [TokenGuard], title: 'Admin Dashboard | Update Password'},
    ],
  },
];
@NgModule({
  declarations: [AuthComponent,ForgotPasswordComponent ,LoginComponent, ResetPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, SharedComponentModule],
})
export class AuthModule { }
