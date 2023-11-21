import { Category } from './../../../shared/models/category/category.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientCategoryService } from 'src/app/shared/services/ingredient-category.service';

@Component({
  selector: 'app-ingredient-category',
  templateUrl: './ingredient-category.component.html',
  styleUrls: ['./ingredient-category.component.css']
})
export class IngredientCategoryComponent implements OnInit {
  categories: Category[] = []
  category: Category = { name: '', description: '' }
  message: string = ''
  processed: boolean = false
  succeeded: boolean = false
  catIngredientForm: FormGroup
  constructor(private readonly categoryService: IngredientCategoryService,
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
