import { Component, Input } from "@angular/core";

@Component({
  templateUrl: './success-alert.component.html',
  selector: 'Success-Alert',
})
export class SuccesAlertComponent {
  @Input() message: string = ''
}
