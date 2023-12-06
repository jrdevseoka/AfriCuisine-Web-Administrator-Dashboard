import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorAlertComponent } from "./alerts/error/error-alert.component";
import { PreloaderComponent } from "./components/preloader/preloader.component";

@NgModule({
  declarations: [ErrorAlertComponent, PreloaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ErrorAlertComponent, PreloaderComponent]
})
export class SharedComponentModule { }

