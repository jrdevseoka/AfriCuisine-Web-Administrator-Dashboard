import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { CloudinaryModule } from '@cloudinary/ng';
import { Router } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedComponentModule } from './shared/shared.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RecipeCategoryComponent } from './modules/recipe/recipe-category/recipe-category.component';
import { RecipeComponent } from './modules/recipe/recipe.component';
import { IngredientCategoryComponent } from './modules/ingredient/ingr-categories/ingredient-category.component';
import { IngredientComponent } from './modules/ingredient/ingredient.component';
export const getToken = () => {
  return sessionStorage.getItem("token");
}

const jwtOptions: JwtModuleOptions = {
  config: {
    tokenGetter: getToken,
    allowedDomains: ["localhost:5214"],
    disallowedRoutes: []

  }
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeCategoryComponent,
    RecipeComponent,
    IngredientCategoryComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    HttpClientModule,
    CloudinaryModule,
    AuthModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    initFlowbite();
    const token: string | null = sessionStorage.getItem("token")
    if(token && typeof token === 'string' && token.trim() !== '')
    {
       this.router.navigate(['dashboard'])
    }
  }
}

