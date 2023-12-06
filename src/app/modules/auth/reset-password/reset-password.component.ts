import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup
  constructor(private readonly fb: FormBuilder)
  {
     this.resetPasswordForm =  this.fb.group({
      username: ['', Validators.required]
     })
  }
  onSubmit()
  {

  }
}
