import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { enviroment } from 'src/app/env/env.config';
import { AuthResponse } from 'src/app/shared/models/res/auth-reponse';
import { AuthCommand } from 'src/app/shared/models/res/commands/auth/auth.command';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;
  processed: boolean;
  reponse: AuthResponse;
  submitting: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remebered: [false, Validators.required],
    });
    this.processed = false;
    this.reponse = { token: '', succeeded: false };
  }

  onSubmit() {
    if (this.form.invalid) {
      this.reponse.message = 'Invalid user credentials';
      this.reponse.succeeded = false;
      this.submitting = false;
      this.processed = true;
      return;
    }

    this.processed = false;
    const form: AuthCommand = {
      password: this.form.get('password')?.value,
      username: this.form.get('username')?.value,
      remembered: this.form.get('remembered')?.value,
    };
    this.authService.signInWithEmailAndPassword(form).subscribe({
      next: (response) => {
        this.reponse = response
        sessionStorage.setItem('token', this.reponse.token);
        this.submitting = true
      },
      error: (err) => {
        this.processed = true
        this.reponse.succeeded = false;
        this.reponse.token = ''
        this.reponse.message = `An unexpected error occured while attempting to sign in. ${enviroment.supportMessage}`
      },
      complete: () => {
        this.processed = true
        if (this.reponse.succeeded) {
          this.authService.getUserProfile(form.username).subscribe({
            error: () => {
              this.processed = true
              sessionStorage.removeItem('token');
              this.reponse.succeeded = false;
              this.reponse.token = ''
              this.reponse.message = `An unexpected error occured while attempting to sign in. ${enviroment.supportMessage}`
            }
          })
          this.router.navigate(['dashboard'])
          this.submitting = false
        }
        else
        {
          this.reponse.message = 'Invalid user credentials'
        }
        this.form.reset()
      }
    })
  }
}
