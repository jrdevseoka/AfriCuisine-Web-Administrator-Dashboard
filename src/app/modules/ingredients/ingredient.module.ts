import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddIngredientComponent } from "./ingredient-modals/add-ingredient/add-ingredient.component";
import { IngredientComponent } from "./ingredient.component";
import { TableIngredientComponent } from "./ingredient-modals/ingredient-table/ingredient-table.component";
import { SharedComponentModule } from "../../shared/components/shared-component.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [TableIngredientComponent, AddIngredientComponent, IngredientComponent],
    exports: [TableIngredientComponent, AddIngredientComponent, IngredientComponent],
    imports: [FormsModule, ReactiveFormsModule, RouterModule, SharedComponentModule, CommonModule]
})
export class IngredientModule {}
