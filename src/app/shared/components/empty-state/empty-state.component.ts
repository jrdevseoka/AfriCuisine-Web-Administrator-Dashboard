import { Component, Input } from "@angular/core";

@Component({
     templateUrl: './empty-state.component.html',
     selector: 'empty-state'
})
export class EmptyStateComponent {
  @Input() Message: string  = ''
}
