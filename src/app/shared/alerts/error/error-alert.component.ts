import { AfterContentChecked, AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Dismiss, DismissOptions, InstanceOptions, initDismisses } from "flowbite";

@Component({
  selector: 'Error-Alert',
  templateUrl: './error-alert.component.html'
})
export class ErrorAlertComponent implements AfterContentChecked {

  @Input() message: string = ''
  ngAfterContentChecked(): void {
    if (this.message && this.message.trim() !== '') {
      initDismisses()

      const $alertEl = document.getElementById('error-alert')
      const $closeAlertEl = document.getElementById('close-error-alert')

      const options: DismissOptions = {
        transition: 'transition-opacity',
        duration: 1000,
        timing: 'ease-out',
      }
      const instanceOpts: InstanceOptions = {
        id: 'error-alert',
        override: true
      }
      const dismiss = new Dismiss($alertEl, $closeAlertEl, options, instanceOpts)
    }
  }
}
