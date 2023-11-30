import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { PasswordResetComponent } from './modules/auth/password/reset/reset-password.component';
import { PasswordUpdateComponent } from './modules/auth/password/update/update-password.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'reset-password', component: PasswordResetComponent },
      { path: 'update-password', component: PasswordUpdateComponent }
    ],
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
