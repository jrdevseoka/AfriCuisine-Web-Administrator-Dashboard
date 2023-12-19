import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'Category-Modal',
  templateUrl: './category-modal.component.html'
})
export class CategoryModalComponent {

  @Input() title: string = ''

  categoryForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit()
  {

  }
}
