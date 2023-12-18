import { PasswordValidator } from './../../../shared/helpers/validators/password-mismatch.validator';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from 'src/app/services/users/password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup
  constructor(private readonly fb: FormBuilder, private password: PasswordService,
  private route: ActivatedRoute, private router: Router)
  {
     this.resetPasswordForm =  this.fb.group({
      token: [],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, PasswordValidator.passwordMatch]]
     })
  }
  ngOnInit(): void {
    const token: string = this.route.snapshot.queryParams['token']
  }
  onSubmit()
  {
     if(this.resetPasswordForm.valid)
     {

     }
  }
}
