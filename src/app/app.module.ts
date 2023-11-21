import { initFlowbite } from 'flowbite';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeCategoryComponent } from './modules/categories/recipe-category/recipe-category.component';
import { IngredientCategoryComponent } from './modules/categories/ingredient-category/ingredient-category.component';
import { CategoryTableComponent } from './shared/components/category-table/category-table.component';
import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';
import { TopNavigationComponent } from './shared/components/navigation/top/top-navigation.component';
import { SideNavigationComponent } from './shared/components/navigation/side/side-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './shared/components/shared-component.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RecipeCategoryComponent,
    IngredientCategoryComponent,
    CategoryTableComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {
     initFlowbite();
  }
}
