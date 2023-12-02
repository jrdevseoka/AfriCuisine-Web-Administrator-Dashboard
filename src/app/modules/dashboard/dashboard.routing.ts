import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";
import { IngrCategoryComponent } from "./ingredients/categories/ingr-category.component";
import { IngredientComponent } from "./ingredients/ingredients/ingredient.component";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: HomeComponent ,},
      { path: 'ingredient-categories', component: IngrCategoryComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' } // Redirect to 'dashboard/home'
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
