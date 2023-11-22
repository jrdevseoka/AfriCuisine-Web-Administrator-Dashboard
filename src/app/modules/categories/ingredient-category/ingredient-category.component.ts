import { Category } from './../../../shared/models/category/category.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/shared/services/communication.service';
import { IngredientCategoryService } from 'src/app/shared/services/ingredient-category.service';

@Component({
  selector: 'app-ingredient-category',
  templateUrl: './ingredient-category.component.html',
  styleUrls: ['./ingredient-category.component.css'],
})
export class IngredientCategoryComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  category: Category = { name: '', description: '' };
  message: string = '';
  processed: boolean = false;
  succeeded: boolean = false;
  catIngredientForm: FormGroup = this.formBuilder.group({});
  private subscription: Subscription;

  constructor(
    private readonly categoryService: IngredientCategoryService,
    private readonly formBuilder: FormBuilder,
    private readonly communicationService: CommunicationService
  ) {
    this.subscription = this.communicationService.notifyParent$.subscribe(() => {
      this.getCategories();
    })
  }
  ngOnDestroy(): void {
     if(this.subscription)
     {
       this.subscription.unsubscribe
     }
  }
  ngOnInit(): void {
    this.processed = false;
    this.getCategories();
    this.catIngredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.items;
      this.succeeded = res.succeeded;
    });
  }
}
