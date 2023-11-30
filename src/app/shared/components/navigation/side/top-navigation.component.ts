import { Component, Input } from "@angular/core";
import { Profile } from "src/app/shared/models/user/profile.model";

@Component({
  selector: 'Side-Navigation',
  templateUrl: './side-navigation.component.html'
})
export class SideNavComponent {
  @Input() user: Profile
  constructor()
  {
    this.user = {id: '', name: '', email: ''}
  }
}
