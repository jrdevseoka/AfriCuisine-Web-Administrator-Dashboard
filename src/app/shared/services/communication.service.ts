import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private notifyComponentSource = new Subject<void>()
  notifyParent$ = this.notifyComponentSource.asObservable()
  notify() {
    this.notifyComponentSource.next()
  }
}
