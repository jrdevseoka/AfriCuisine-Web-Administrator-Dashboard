import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'Table-Component',
  templateUrl: './table.component.html'
})
export class TableComponent {
  searchForm: FormGroup
 @Input() headers: string[] = []
 collections: any[] = []
  constructor(private fb: FormBuilder){
    this.searchForm = this.fb.group({
      query: ['', [Validators.required]]
    })
  }
  onSubmit(){}
}
