import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";
import { IngrCategoryComponent } from "./ingredients/categories/ingr-category.component";
import { IngredientComponent } from "./ingredients/ingredients/ingredient.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'ingredient-categories', component: IngrCategoryComponent},
      {path: 'ingredients', component: IngredientComponent},
      {path: '', pathMatch: "full", redirectTo: '/home'},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule {}
