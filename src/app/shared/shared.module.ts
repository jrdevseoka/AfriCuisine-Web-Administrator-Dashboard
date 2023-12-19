import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorAlertComponent } from './components/alerts/error/error-alert.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { TopNavigationComponent } from './components/navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SuccesAlertComponent } from './components/alerts/success/success-alert.component';
import { SideNavigationComponent } from './components/navigation/side-navigation.component';
import { TableComponent } from './components/table/table.component';
import { SectionHeaderComponent } from './components/section/section-header.component';
import { CategoryModalComponent } from './components/modals/category/category-modal.component';

@NgModule({
  declarations: [
    ErrorAlertComponent,
    PreloaderComponent,
    TopNavigationComponent,
    SuccesAlertComponent,
    SideNavigationComponent,
    TableComponent,
    CategoryModalComponent,
    SectionHeaderComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ErrorAlertComponent,
    PreloaderComponent,
    TopNavigationComponent,
    SuccesAlertComponent,
    SideNavigationComponent,
    TableComponent,
    CategoryModalComponent,
    SectionHeaderComponent
  ],
})
export class SharedComponentModule {}
