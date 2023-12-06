// auth.module.ts

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedComponentModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      // { path: 'update-password', component: PasswordUpdateComponent },
    ],
  },
];
@NgModule({
  declarations: [AuthComponent, LoginComponent, ResetPasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, SharedComponentModule],
})
export class AuthModule { }
