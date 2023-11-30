import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { PasswordResetComponent } from "./password/reset/reset-password.component";
import { PasswordUpdateComponent } from "./password/update/update-password.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedComponentModule } from "src/app/shared/shared-component.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent, PasswordResetComponent, PasswordUpdateComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, SharedComponentModule],
  exports: [LoginComponent, PasswordResetComponent, PasswordUpdateComponent]
})
export class AuthModule { }