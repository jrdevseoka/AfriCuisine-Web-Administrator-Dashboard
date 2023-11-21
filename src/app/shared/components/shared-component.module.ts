import { NgModule } from "@angular/core";
import { TopNavigationComponent } from "./navigation/top/top-navigation.component";
import { SideNavigationComponent } from "./navigation/side/side-navigation.component";

@NgModule({
  declarations: [TopNavigationComponent, SideNavigationComponent],
  exports: [TopNavigationComponent, SideNavigationComponent]

})
export class SharedComponentModule {}
