import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ErrorAlertComponent } from "./components/alerts/error/error-alert.component";
import { PreloaderComponent } from "./components/preloader/preloader.component";
import { TopNavigationComponent } from "./components/navigation/top-navigation.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ErrorAlertComponent, PreloaderComponent, TopNavigationComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ErrorAlertComponent, PreloaderComponent, TopNavigationComponent]
})
export class SharedComponentModule { }

