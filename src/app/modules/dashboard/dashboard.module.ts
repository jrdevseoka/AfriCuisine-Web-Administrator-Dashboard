import { SharedComponentModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardGuard } from 'src/app/shared/helpers/guards/dashboard.guard';
import { UserResolver } from 'src/app/shared/helpers/resolvers/user.resolver';
import { StatisticComponent } from './statistics/statistics.component';
import { IngredientCategoryComponent } from './ingredients/category/ingr-category.component';
const routes: Routes =
[
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'home', component: StatisticComponent},
      {path: 'ingredient-categories', component: IngredientCategoryComponent, title: 'Africusine Dashboard | Ingredient Categories'},
      {path: '**', redirectTo: 'home'}
    ]
  }
]
@NgModule({
   declarations: [DashboardComponent, StatisticComponent, IngredientCategoryComponent],
   providers: [],
   imports: [CommonModule, ReactiveFormsModule, SharedComponentModule, RouterModule.forChild(routes)]
})
export class DashboardModule {}
