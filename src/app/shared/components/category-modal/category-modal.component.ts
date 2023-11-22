import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category/category.model';
import { IngredientCategoryService } from '../../services/ingredient-category.service';
import { RecipeCategoryService } from '../../services/recipe-category.service';
import { CommunicationService } from '../../services/communication.service';

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
    private readonly recipeService: RecipeCategoryService,
    private readonly communincationService: CommunicationService
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
      const supportMessage: string = `Try again. If the issue persist contact our support team support@africuisine.com`;
      this.category.name = this.form.controls['name'].value
      this.category.description = this.form.controls['description'].value
      if (this.isModalIngredient == 'true') {
        this.ingredientService.create(this.category).subscribe({
          next: (res) => {
            this.message = res.message
            this.succeeded = res.succeeded
            this.form.reset()
          },
          error: (error) => {
            this.message = `An unexpected error occured while attempting to ingredient recipe categories. ${supportMessage}`
            this.succeeded = false
            this.formProcessed = true
          },
          complete: () => { this.formProcessed = true }
        });
      }
      if (this.isModalIngredient == 'false') {
        this.recipeService.create(this.category).subscribe({
          next: (res) => {
            this.message = res.message
            this.succeeded = res.succeeded
            this.form.reset()
          },
          error: (error) => {
            this.message = `An unexpected error occured while attempting to create recipe categories. ${supportMessage}`
            this.succeeded = false
            this.formProcessed = true
          },
          complete: () => { this.formProcessed = true; this.communincationService.notify() }
        })
      }
    }
    const success = document.getElementById('')
  }
}
