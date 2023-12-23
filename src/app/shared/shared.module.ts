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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UploadPictureComponent } from './components/upload-pic/upload-picture.component';

@NgModule({
  declarations: [
    ErrorAlertComponent,
    PreloaderComponent,
    TopNavigationComponent,
    SuccesAlertComponent,
    SideNavigationComponent,
    TableComponent,
    CategoryModalComponent,
    NotFoundComponent,
    SectionHeaderComponent,
    UploadPictureComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ErrorAlertComponent,
    PreloaderComponent,
    TopNavigationComponent,
    NotFoundComponent,
    SuccesAlertComponent,
    SideNavigationComponent,
    TableComponent,
    CategoryModalComponent,
    SectionHeaderComponent,
    UploadPictureComponent
  ],
})
export class SharedComponentModule {}
