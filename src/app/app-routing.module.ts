import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './shared/helpers/guards/dashboard.guard';
import { UserResolver } from './shared/helpers/resolvers/user.resolver';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [DashboardGuard],
    resolve: { user: UserResolver},
    loadChildren: () => import('../app/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
