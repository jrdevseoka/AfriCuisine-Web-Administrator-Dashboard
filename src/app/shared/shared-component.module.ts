import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/navigation/side/top-navigation.component';
import { TopNavComponent } from './components/navigation/top/top-navigation.component';
import { ErrorAlertComponent } from './components/alerts/error/error.component';
@NgModule({
  declarations: [SideNavComponent, TopNavComponent, ErrorAlertComponent],
  exports: [SideNavComponent, TopNavComponent, ErrorAlertComponent],
})
export class SharedComponentModule {}
