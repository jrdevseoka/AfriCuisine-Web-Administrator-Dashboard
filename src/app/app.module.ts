import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeCategoryComponent } from './modules/categories/recipe-category/recipe-category.component';
import { IngredientCategoryComponent } from './modules/categories/ingredient-category/ingredient-category.component';
import { CategoryTableComponent } from './shared/components/category-table/category-table.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './shared/components/shared-component.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IngredientComponent } from './modules/ingredients/ingredient.component';
import { IngredientModule } from './modules/ingredients/ingredient.module';
import { FeatureModule } from './modules/feature.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    HttpClientModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {
     initFlowbite();
  }
}
