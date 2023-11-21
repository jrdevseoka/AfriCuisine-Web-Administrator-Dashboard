import { Component, Input } from '@angular/core';
import { Category } from '../../models/category/category.model';

@Component({
  selector: 'Category-Table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {
   @Input() Category: Category[] = []
   @Input() RowNames: string[] = []
}
