import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorAlertComponent } from "./alerts/error/error-alert.component";

@NgModule({
  declarations: [ErrorAlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ErrorAlertComponent]
})
export class SharedComponentModule{}

