import { Component, Input } from "@angular/core";

@Component({
     templateUrl: './empty-state.component.html',
     selector: 'Empty-State'
})
export class EmptyStateComponent {
  @Input() message: string  = ''
}
