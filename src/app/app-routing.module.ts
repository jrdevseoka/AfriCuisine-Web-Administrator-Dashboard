import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './shared/helpers/guards/dashboard.guard';
import { UserResolver } from './shared/helpers/resolvers/user.resolver';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IngredientComponent } from './modules/ingredient/ingredient.component';
import { IngredientCategoryComponent } from './modules/ingredient/ingr-categories/ingredient-category.component';
import { RecipeCategoryComponent } from './modules/recipe/recipe-category/recipe-category.component';
import { RecipeComponent } from './modules/recipe/recipe.component';
import { UsersComponent } from './modules/users/users.component';
import { EditProfileComponent } from './modules/users/edit-profile/edit-profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('../app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { user: UserResolver },
    canActivate: [DashboardGuard],
    children: [
      { path: 'ingr-categories', component: IngredientCategoryComponent, title: 'Africuisine | Ingredient Categories' },
      { path: 'ingredients', component: IngredientCategoryComponent, title: 'Africuisine | Ingredients' },
      { path: 'recipe-categories', component: RecipeCategoryComponent, title: 'Africuisine | Recipe Categories' },
      { path: 'recipes', component: RecipeComponent, title: 'Africuisine | Recipes' },
      {
        path: 'users', component: UsersComponent, title: 'Africuisine | Users',
        children: [
          { path: 'edit-profile', component: EditProfileComponent, title: 'Africuisine | Edit Profile' }
        ]
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
