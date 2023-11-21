import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category/category.model';
import { IngredientCategoryService } from '../../services/ingredient-category.service';
import { RecipeCategoryService } from '../../services/recipe-category.service';

@Component({
  selector: 'Category-Modal',
  templateUrl: './category-modal.component.html',
})
export class CategoryModalComponent implements OnInit {
  @Input() isModalIngredient: string = '';
  @Input() modalTitle: string = '';
  @Input() buttonText: string = '';



  form!: FormGroup;
  category: Category = { name: '', description: '' };
  message: string = ''
  succeeded: boolean = false;
  formProcessed: boolean;
  categories: Category[] = []

  constructor(
    private readonly fb: FormBuilder,
    private readonly ingredientService: IngredientCategoryService,
    private readonly recipeService: RecipeCategoryService
  ) {
    this.formProcessed = false
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

  }
  save() {
    if (this.form.valid) {
      this.category.name = this.form.controls['name'].value
      this.category.description = this.form.controls['description'].value
      if (this.isModalIngredient == 'true') {
        var response = this.ingredientService.create(this.category);
        this.message = this.message,
        this.succeeded = this.succeeded
      }
      if(this.isModalIngredient == 'false')
      {
         this.recipeService.create(this.category).subscribe((res) => {
            this.message = res.message,
            this.succeeded = res.succeeded
         })
      }
    }
    const success = document.getElementById('')
  }
}
