import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category/category.model';
import { RecipeCategoryService } from 'src/app/shared/services/recipe-category.service';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.css']
})
export class RecipeCategoryComponent {
  categories: Category[] = []
  category: Category = { name: '', description: '' }
  message: string = ''
  processed: boolean = false
  succeeded: boolean = false
  catIngredientForm: FormGroup
  constructor(private readonly categoryService: RecipeCategoryService,
    private readonly formBuilder: FormBuilder) {
    this.catIngredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.processed = false
    this.getCategories()
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.items
      this.succeeded = res.succeeded
    })
  }

}
