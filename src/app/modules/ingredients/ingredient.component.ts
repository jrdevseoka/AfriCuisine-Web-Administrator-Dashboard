import { BaseResponse } from './../../shared/models/res/base.response';
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { constant } from 'src/app/shared/constants/constant.config';
import { Category } from "src/app/shared/models/category/category.model";
import { Ingredient } from "src/app/shared/models/ingredient/ingredient.model";
import { IngredientCategoryService } from "src/app/shared/services/ingredient-category.service";
import { IngredientService } from "src/app/shared/services/ingredient.service";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html'
})
export class IngredientComponent implements OnInit, OnChanges {
  ingredients: Ingredient[] = []
  categories: Category[] = []
  ingredientForm: FormGroup;

  ingredient: Ingredient | undefined
  category: Category | undefined
  reponse: BaseResponse | undefined

  message: string = ''
  formProcessed: boolean;
  succeeded: boolean = false;

  constructor(private fb: FormBuilder,
    private readonly ingredientService: IngredientService,
    private readonly ingrCategoryService: IngredientCategoryService) {
    this.ingredientForm = this.fb.group({
      name: ['', Validators.required],
      lcategory: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.formProcessed = false
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["ingredients"]) {
      this.getIngredients();
      this.getIngredientCategories()
    }
  }
  getIngredientCategories()
  {
       this.ingrCategoryService.getCategories().subscribe({
         next: (res) => {
             if(res.items.length > 0)
             {
               this.categories = res.items
             }
         },
         error: (err) => {
           this.message = "An error occured while retrieving the ingredient categories, refresh your browser. " + constant.supportMessage
         }
       });
  }
  ngOnInit(): void {
    this.getIngredients()
    this.getIngredientCategories()
    this.formProcessed = false
  }
  onSubmit() {

    let category: any
    const fk_category = this.ingredientForm.get('lcategory')?.value
    this.ingrCategoryService.getCategoryById(fk_category).subscribe({
      next: (res) => {
        if (res.succeeded) {
          this.category = {
            description: res.item.description,
            name: res.item.name,
            link: res.item.link
          }
          category = this.category
        }
      },
      error: (err) => {
        this.message = `An unexpected error occured while trying to add ingredient, refresh the browser and try again. ${constant.supportMessage}`,
        this.succeeded = false
        this.formProcessed = true
      },
      complete: () => {
        this.create(fk_category);
      }
    });
  }
  getIngredients() {
    this.ingredientService.getIngredients().subscribe(
      {
        next: (res) => {
            this.ingredients = res.items
            this.reponse = {
               message: res.message,
               succeeded: res.succeeded
        }
        }
      })
  }
  create(lcategory: string) {
    if (this.category) {
      this.ingredient = {
        name: this.ingredientForm.get('name')?.value,
        lcategory: lcategory,
        description: this.ingredientForm.get('description')?.value
      }
      this.ingredientService.create(this.ingredient).subscribe({
        next: (res) => {
          this.message = res.message
          this.succeeded = res.succeeded
          this.formProcessed = true
          this.ingredientForm.reset()
        },
        error: (err) => {
          this.message = `An unexpected error occured while trying to add ingredient, refresh the browser and try again. ${constant.supportMessage}`,
          this.succeeded = false
          this.formProcessed = true
        }
      })
    }
  }
}
