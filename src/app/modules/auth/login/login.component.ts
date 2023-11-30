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
      this.processed = true;
    }
    this.processed = false;

    this.authService.signIn(form).subscribe({
      next: (res) => {
        this.reponse = res
        localStorage.setItem('token', this.reponse.token);
        this.authService.setAuthState(res.succeeded)
        this.authService.getAuthorizedUserProfile(form.username)
      },
      error: (e) => {
        (this.reponse = e), (this.processed = true);
      },
      complete: () => {
        this.processed = true;
        if(this.reponse.succeeded)
        {
          this.router.navigate(['dashboard']);
        }
      },
    });
  }
}
