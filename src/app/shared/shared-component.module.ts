import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/navigation/side/top-navigation.component';
import { TopNavComponent } from './components/navigation/top/top-navigation.component';
@NgModule({
  declarations: [SideNavComponent, TopNavComponent],
  exports: [SideNavComponent, TopNavComponent],
})
export class SharedComponentModule {}
