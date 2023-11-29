import {  NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { FeatureModule } from "./feature.module";
import { DashboardLayoutComponent } from "../shared/components/layout/dashboard/dashboard-layout.component";
import { IngredientCategoryComponent } from "./ingredients/ingredient-category.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'ingredient', component: IngredientCategoryComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
