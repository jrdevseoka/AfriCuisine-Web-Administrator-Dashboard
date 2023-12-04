// dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard, DashboardGuard } from 'src/app/shared/guards/dashboard.guard';
import { IngredientComponent } from './ingredients/ingredients/ingredient.component';
import { ProfileResolver } from 'src/app/shared/helpers/resolvers/profile.resolver';

const dashboardRoutes: Routes = [
  { path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [DashboardGuard],
    resolve: { user: ProfileResolver },
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'ingredients', component: IngredientComponent },
    ],
  },
]


@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
