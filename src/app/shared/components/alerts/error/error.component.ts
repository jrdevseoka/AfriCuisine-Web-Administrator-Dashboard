import { Component, Input } from "@angular/core";

@Component({
  selector: 'Error-Alert',
  templateUrl: './error.component.html'
})
export class ErrorAlertComponent {
  @Input() message: string = ''
}
