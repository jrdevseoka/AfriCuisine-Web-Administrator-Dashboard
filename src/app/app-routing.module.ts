import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './shared/components/layout/login/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { PasswordResetComponent } from './modules/auth/password/reset/reset-password.component';
import { FeatureModule } from './modules/feature.module';
const routes: Routes = [
  {
    path: '',
    component: AuthenticationLayoutComponent,
    children: [
      { path: '', component: LoginComponent, redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'reset-password', component: PasswordResetComponent },
      { path: 'update-password', component: PasswordResetComponent }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/feature.module').then((m) => m.FeatureModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes), FeatureModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
