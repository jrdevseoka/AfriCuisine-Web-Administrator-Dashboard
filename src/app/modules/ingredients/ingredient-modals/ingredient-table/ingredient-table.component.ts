import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient/ingredient.model';
import { IngredientService } from 'src/app/shared/services/ingredient.service';

@Component({
  selector: 'Table-Ingredient',
  templateUrl: './ingredient-table.component.html',
})
export class TableIngredientComponent implements OnInit, OnChanges {
  filteredIngredients: Ingredient[] = [];
  @Input() ingredients: Ingredient[] = [];
  @Input() pageSize: number = 5;

  currentPage: number = 1;
  totalPages: number = 1;
  startFrom: number = 0;
  endIndex: number = 0;
  ngOnInit(): void {
    this.getFilteredIngredients();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collections']) {
      this.getFilteredIngredients();
    }
  }
  getFilteredIngredients() {
    this.startFrom = (this.currentPage - 1) * this.pageSize;
    this.endIndex = this.startFrom + this.pageSize;
    if (this.endIndex > this.ingredients.length) {
      this.endIndex -= 1;
    }
    this.filteredIngredients = this.ingredients.slice(
      this.startFrom,
      this.endIndex
    );
    this.getTotalPages();
    this.pageList();
  }
  getTotalPages() {
    this.totalPages = Math.ceil(this.ingredients.length / this.pageSize);
  }
  page(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getFilteredIngredients();
    }
  }
  pageList(): number[] {
    const list: number[] = [];
    for (let i = 1; i < this.totalPages; i++) {
      list.push(i);
    }
    return list;
  }
}
