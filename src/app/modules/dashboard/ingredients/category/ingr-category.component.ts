import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { enviroment } from "src/app/env/env.config";
import { IngrCategoryService } from "src/app/services/ingredients/ingr-category.service";
import { AuthService } from "src/app/services/users/auth.service";
import { CategoryCommand } from "src/app/shared/commands/category.command";
import { Category } from "src/app/shared/models/ingredient/category.model";
import { Profile } from "src/app/shared/models/user/profile.model";
import { PostResponse } from "src/app/shared/res/post.response";

@Component({
  selector: 'app-ingredient-category',
  templateUrl: './ingr-category.component.html'
})
export class IngredientCategoryComponent implements OnInit, OnChanges {

  categories: Category[] | undefined
  user: Profile | undefined
  categoryForm: FormGroup
  response: PostResponse

  submitting: boolean = false
  processed: boolean =  false

  constructor(private auth: AuthService, private categoryService: IngrCategoryService,
    private fb: FormBuilder
    ){
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
    this.response = { succeeded: false}
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit(): void {
    this.auth.user$.subscribe((user) =>{
      if(typeof user !== 'undefined')
      {
         this.user = user
      }
    })
    this.categoryService.getCategories().subscribe({
      next: (res) => {
         if(res.succeeded)
         {
            this.categories = res.items
         }
      },
      error: (err) => {
         this.response.message = 'An unexpected error occured while updating the categories table.'
         this.response.succeeded = false
      }
     })
  }
  onSubmit()
  {
     if(this.categoryForm.valid)
     {
        const category = this.mapFormToCommand()
        this.categoryService.create(category).subscribe({
          next: (response) => {
            this.response = response
          },
          error: (err) => {
            console.log(JSON.stringify(err))
            this.response.message = 'An unexpected error occured while creating a category.' + enviroment.message
            this.submitting = false
            this.processed = true
          },
          complete: () => {
            if(this.response.succeeded)
            {
               this.response.message =  'You have successfully added a new category - ' + category.name
            }
            this.submitting = false
            this.processed = true
          }
        })
     }
     if(this.categoryForm.invalid &&  !this.submitting)
     {
      this.response.message = 'You are not all'
      this.submitting = false
      this.processed = true
     }
  }
  get controls()
  {
     return this.categoryForm.controls
  }
  private mapFormToCommand() : CategoryCommand
  {
      return {
        description: this.controls[''].value,
        name: this.controls[''].value,
        luserupdate: this.user!.id!
      }
  }
}
