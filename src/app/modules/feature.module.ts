import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from "@angular/common";
import { FeatureRoutingModule } from "./feature.routing";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FeatureRoutingModule]
})
export class FeatureModule {}
