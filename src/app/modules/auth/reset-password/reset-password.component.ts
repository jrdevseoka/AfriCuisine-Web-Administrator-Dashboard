import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PasswordValidator } from './../../../shared/helpers/validators/password-mismatch.validator';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from 'src/app/services/users/password.service';
import { UpdatePasswordCommand } from 'src/app/shared/commands/update-password.command';
import { PostResponse } from 'src/app/shared/res/post.response';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup
  response: PostResponse

  processed: boolean = false
  submitting: boolean = false

  constructor(private readonly fb: FormBuilder, private password: PasswordService,
    private route: ActivatedRoute, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      token: [],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), PasswordValidator.passwordMatch]]
    })
    this.response = { succeeded: false }
  }
  ngOnInit(): void {
    const token: string = this.route.snapshot.queryParams['token']
    this.resetPasswordForm.patchValue({ 'token': token })
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const command = this.mapFormToPasswordCommand()
      this.password.updatePassword(command).subscribe({
        next: (response) => {
          this.response = response
        },
        error: (err: HttpErrorResponse) => {
          console.log(JSON.stringify(err))
          this.processed = true
          this.submitting = false
        },
        complete: () => {
          this.processed = true
          this.submitting = false
        }
      })
    }
    if (this.resetPasswordForm.invalid && this.processed) {
      this.response.message = 'You are not allowed to submit an empty form'
      this.processed = true
      this.submitting = false
    }
  }
  get controls() {
    return this.resetPasswordForm.controls
  }
  private mapFormToPasswordCommand(): UpdatePasswordCommand {
    return {
      token: this.controls['token'].value,
      password: this.controls['password'].value,
      email: this.controls['username'].value
    }
  }
}
