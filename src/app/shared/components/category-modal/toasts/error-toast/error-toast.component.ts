import { Component, Input } from "@angular/core";

@Component({
  selector: 'Error-Alert',
  templateUrl: './error-toast.component.html'
})
export class ErrorToastComponent{
 @Input() message: string = ''
}
