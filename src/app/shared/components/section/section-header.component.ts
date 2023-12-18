import { Component, Input } from "@angular/core";
@Component({
  selector: 'Section-Header',
  templateUrl: './section-header.component.html'
})
export class SectionHeaderComponent {
  @Input() title: string = ''
  @Input() buttonText: string = ''
  @Input() subtitle: string = ''
}
