import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { PasswordResetComponent } from './modules/auth/password/reset/reset-password.component';
import { PasswordUpdateComponent } from './modules/auth/password/update/update-password.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProfileResolver } from './shared/helpers/resolvers/profile.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'reset-password', component: PasswordResetComponent },
      { path: 'update-password', component: PasswordUpdateComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    resolve: { profile: ProfileResolver },
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
