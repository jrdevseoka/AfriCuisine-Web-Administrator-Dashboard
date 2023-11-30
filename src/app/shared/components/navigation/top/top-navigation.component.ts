import { Component, Input } from "@angular/core";
import { Profile } from "src/app/shared/models/user/profile.model";

@Component({
  selector: 'Top-Navigation',
  templateUrl: './top-navigation.component.html'
})
export class TopNavComponent {
  @Input() user: Profile
  constructor()
  {
    this.user = {id: '', name: '', email: ''}
  }
}
