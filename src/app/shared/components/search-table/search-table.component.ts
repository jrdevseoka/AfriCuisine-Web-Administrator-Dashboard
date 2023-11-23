import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'Search-Table',
  templateUrl: './search-table.component.html'
})
export class SearchTableComponent implements OnInit, OnChanges {

  @Input() collections: any[] = []

  results: any[] = []

  searchForm: FormGroup

  constructor(private readonly fb: FormBuilder) {
    this.searchForm = this.fb.group({ searchTerm: ['', Validators.required] })
    this.searchForm.get('searchTerm')?.valueChanges.subscribe(() => {
       this.searchResults();
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["collections"]) {
      this.searchResults()
    }
  }

  searchResults() {
    const query: string = this.searchForm.get('searchTerm')?.value
    this.results = this.collections.filter((row) => Object.values(row).some((value) => {
      typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
    }))
  }
  ngOnInit(): void {
    this.formInit();
  }
  formInit() {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    })
  }
}
