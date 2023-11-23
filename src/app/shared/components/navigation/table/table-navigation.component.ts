import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'Table-Navigation',
  templateUrl: './table-navigation.component.html',
})
export class TableNavigationComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['filteredCollections'])
    {
        this.filterMethod;
    }
  }
  @Input() currentPage: number = 1;
  @Input()totalPages: number = 1;
  @Input()startFrom: number = 0;
  @Input() endIndex: number = 0;

  @Input() pageSize: number = 5;
  @Input() collections: any[] = [];
  @Input() filterMethod = function() {}

 @Input() filteredCollections: any[] = [];

  page(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filterMethod()
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
