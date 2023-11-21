import { Component, Input } from "@angular/core";

@Component({
  selector: 'Page-Header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {
  @Input() Title: string = ''
}
