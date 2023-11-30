import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/navigation/side/top-navigation.component';
import { TopNavComponent } from './components/navigation/top/top-navigation.component';
import { ErrorAlertComponent } from './components/alerts/error/error.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SideNavComponent, TopNavComponent, ErrorAlertComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideNavComponent, TopNavComponent, ErrorAlertComponent],
})
export class SharedComponentModule {}
