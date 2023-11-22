import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Category } from '../../models/category/category.model';

@Component({
  selector: 'Category-Table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    this.pageFilteredCategories();
  }

  @Input() categories: Category[] = [];
  @Input() pageSize: number = 5;

  startFrom: number = 0;
  endIndex: number = 0;
  currentPage: number = 1;
  filteredCategories: Category[] = [];
  totalPages: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories']) {
      this.pageFilteredCategories();
    }
  }
  pageFilteredCategories() {
    this.startFrom = (this.currentPage - 1) * this.pageSize;
    this.endIndex = this.startFrom + this.pageSize;
    this.filteredCategories = this.categories.slice(
      this.startFrom,
      this.endIndex
    );
    this.getTotalPages();
    this.getPageList();
  }
  getTotalPages() {
    this.totalPages = Math.ceil(this.categories.length / this.pageSize);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageFilteredCategories();
    }
  }
  getPageList() {
    const pageList: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageList.push(i);
    }
    return pageList
  }
}
