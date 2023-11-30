import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  submtting: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remmbered: [false, Validators.required],
    });
    this.processed = false;
    this.reponse = { token: '', succeeded: false};
  }

  onSubmit() {
    const form: AuthCommand = {
      password: this.form.get('password')?.value,
      username: this.form.get('username')?.value,
      remembered: this.form.get('remembered')?.value,
    };
    if (this.form.invalid) {
      (this.reponse.message = 'Invalid user credentials'),
      (this.reponse.succeeded = false);
      this.submtting = false;
      this.processed = true;
    }
    this.processed = false;
    if(this.form.valid)
    {
      this.submtting = true
      this.authService.signIn(form).subscribe({
        next: (res) => {
          this.reponse = res
          sessionStorage.setItem('token', this.reponse.token);
          this.authService.getUserProfile(form.username)
        },
        error: (e) => {
          this.reponse = e
          this.processed = true;
        },
        complete: () => {
          this.processed = true;
          if(this.reponse.succeeded)
          {
            this.form.reset();
            this.router.navigate(['dashboard']);
            this.submtting = false
          }
        },
      });
    }
  }
}
