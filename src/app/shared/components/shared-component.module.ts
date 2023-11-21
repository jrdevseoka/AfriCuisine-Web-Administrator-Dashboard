import { NgModule } from "@angular/core";
import { TopNavigationComponent } from "./navigation/top/top-navigation.component";
import { SideNavigationComponent } from "./navigation/side/side-navigation.component";
import { RouterModule } from "@angular/router";
import { ContentLayoutComponent } from "./content-layout/content-layout-component";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SuccessToastComponent } from "./category-modal/toasts/success-toast/success-toast.component";
import { ErrorToastComponent } from "./category-modal/toasts/error-toast/error-toast.component";
import { CommonModule } from "@angular/common";
import { EmptyStateComponent } from "./empty-state/empty-state.component";
import { PageHeaderComponent } from "./page-header/page-header.component";

@NgModule({
  declarations: [TopNavigationComponent, SideNavigationComponent, ContentLayoutComponent, CategoryModalComponent, SuccessToastComponent, ErrorToastComponent, EmptyStateComponent, PageHeaderComponent],
  exports: [TopNavigationComponent, SideNavigationComponent, ContentLayoutComponent, CategoryModalComponent, SuccessToastComponent, ErrorToastComponent, EmptyStateComponent, PageHeaderComponent],
  imports:[RouterModule, ReactiveFormsModule, CommonModule]
})
export class SharedComponentModule {}
