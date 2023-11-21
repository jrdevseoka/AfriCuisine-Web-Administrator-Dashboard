import { Component, Input } from "@angular/core";
@Component({
  templateUrl: './success-toast.component.html',
  selector: 'Success-Alert'
})
export class SuccessToastComponent {
  @Input() message: string = ''
}
