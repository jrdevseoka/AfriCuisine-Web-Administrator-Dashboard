import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from "flowbite";
import { enviroment } from "src/app/env/env.config";
import { PasswordService } from "src/app/services/users/password.service";
import { ForgotPasswordCommand } from "src/app/shared/commands/forgot-password.command";
import { AuthResponse } from "src/app/shared/res/auth.response";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-passoword.component.html'
})
export class ForgotPasswordComponent {
  form: FormGroup
  response: AuthResponse

  submitting: boolean = false
  processed: boolean = false

  constructor(private readonly fb: FormBuilder, private password: PasswordService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.response = { succeeded: false, token: '' }
  }
  onSubmit() {
    if (this.form.valid) {
      const body: ForgotPasswordCommand = { uri: enviroment.uiUri, email: this.email }
      this.password.forgotPassword(body).subscribe({
        next: (response) => {
          this.response = response
        },
        error: (err) => {
          console.log(JSON.stringify(err))
          this.response.message = `An unexpected error occured. ${enviroment.message}`
          this.submitting = false
          this.processed = true
        },
        complete: () => {
          this.submitting = false
          this.processed = true
        }
      })
    }
  }
  get email() {
    return this.form.controls['email'].value
  }
}
