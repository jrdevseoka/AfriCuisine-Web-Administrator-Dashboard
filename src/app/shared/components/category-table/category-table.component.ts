import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {
   @Input() Category: any[] = []
   @Input() RowNames: string[] = []
}
