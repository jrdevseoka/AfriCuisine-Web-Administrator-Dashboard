import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { enviroment } from "src/app/env/env.config";
import { AuthService } from "src/app/services/users/auth.service";
import { AuthCommand } from "src/app/shared/commands/auth.command";
import { AuthResponse } from "src/app/shared/res/auth.response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  reponse: AuthResponse

  processed: boolean
  submitting: boolean
  constructor(
    private fb: FormBuilder,
    private readonly auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

    this.processed = false
    this.submitting = false
    this.reponse = { token: '', succeeded: false }
  }

  onSubmit() {
    this.submitting = true
    this.processed = false
    if (this.loginForm.valid) {
      const command = this.mapToAuthCommand(this.loginForm)
      this.auth.signInWithEmailAndPassword(command).subscribe({
        next: (response) => {
          this.reponse = response
        },
        error: (err) => {
          console.log(JSON.stringify(err))
          this.reponse.message = 'An uexpected error occured while attempting to sign you in.' + enviroment.message
        },
        complete: () => {
          this.submitting = false
          this.processed = true
          if(this.reponse.succeeded)
          {
              this.router.navigate(['dashboard']);
          }
        }
      })
    }
    this.checkFormValidity(this.loginForm.invalid)
  }
  ngOnInit(): void {
    const navigationXtras = this.router.getCurrentNavigation()?.extras
    if (navigationXtras) {
      if (navigationXtras.state) {
        const res = navigationXtras.state['response']
        this.reponse = {
          succeeded: res.succeeded,
          message: res.message,
          token: ''
        }
        this.processed = true
      }
    }
  }
  private checkFormValidity(valid: boolean) {
    if (valid && this.submitting) {
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
  show() {
    return this.processed && !this.reponse.succeeded && this.reponse.message?.trim() !== ''
  }
}
