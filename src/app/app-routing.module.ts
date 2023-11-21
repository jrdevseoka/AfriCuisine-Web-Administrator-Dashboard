import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCategoryComponent } from './modules/categories/recipe-category/recipe-category.component';
import { IngredientCategoryComponent } from './modules/categories/ingredient-category/ingredient-category.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{
  title: 'Africuisine Admin | Ingredient Categories',
  path: 'ingredient-categories',
  component: IngredientCategoryComponent
},
{
  title: 'Africuisine Admin | Home',
  path: '',
  component: DashboardComponent
},
{
  title: 'Africuisine Admin | Recipe Categories',
  path: 'recipe-categories',
  component: RecipeCategoryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
