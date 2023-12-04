import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";
import { IngrCategoryComponent } from "./ingredients/categories/ingr-category.component";
import { IngredientComponent } from "./ingredients/ingredients/ingredient.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedComponentModule } from "src/app/shared/shared-component.module";
import { DashboardRoutingModule } from "./dashboard.routing";
import { AuthGuard } from "src/app/shared/guards/dashboard.guard";

@NgModule({
  declarations: [DashboardComponent, HomeComponent, IngrCategoryComponent, IngredientComponent],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, ReactiveFormsModule, SharedComponentModule],
})
export class DashboardModule {}
