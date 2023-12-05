import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { AuthCommand } from "src/app/shared/commands/auth.command";
import { AuthResponse } from "src/app/shared/res/auth.response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup

  reponse: AuthResponse

  processed: boolean
  submitting: boolean
  succeeded: boolean = false
  constructor(
    private fb: FormBuilder,
    private readonly auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.processed = false
    this.submitting = false
    this.reponse = { token: '', succeeded: false }
  }
  onSubmit() {
    this.submitting = true
    this.processed = false

    this.checkFormValidity(this.loginForm.invalid)
    const command = this.mapToAuthCommand(this.loginForm)
    this.auth.signInWithEmailAndPassword(command).subscribe((res) => {
       this.reponse = res
       this.succeeded = res.succeeded
       if(res.succeeded)
       {
        this.submitting = false
        this.processed = true
        this.router.navigate(['dashboard']);
       }
       this.submitting = false
       this.processed = true
    })

  }
  private checkFormValidity(valid: boolean) {
    if (valid) {
      this.reponse.message = 'Invalid username or password';
      this.reponse.succeeded = false;
      this.submitting = false;
      this.processed = true;
      return;
    }
  }
  private mapToAuthCommand(form: FormGroup) {
    const command: AuthCommand = {
      password: form.get('password')?.value,
      username: form.get('username')?.value,
    }
    return command
  }
}
