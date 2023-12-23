import { AfterViewChecked, AfterViewInit, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InstanceOptions, Modal, ModalInterface, ModalOptions } from "flowbite";
import { JWTService } from "src/app/services/users/jwt.service";
import { Profile } from "src/app/shared/models/user/profile.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  user: Profile
  constructor(private route: ActivatedRoute, private jwt: JWTService) {
    this.user = this.route.snapshot.data['user']
    sessionStorage.setItem("claims", JSON.stringify(this.user))
  }
  ngAfterViewInit(): void {
    if (!this.user.picture) {
      const activateModal = Boolean(sessionStorage.getItem("activate-profile-modal")) || false;
      if (!activateModal) {
        const modalEl: HTMLElement = document.querySelector('#upload-pic-modal')!
        if (modalEl && typeof modalEl !== 'undefined') {
          const modalOpts: ModalOptions = {
            placement: 'center',
            backdropClasses: 'bg-dark-soul',
            closable: false,
            onShow: () => {
              console.log('Modal Should be showing');
            }
          }
          const instanceOpts: InstanceOptions = {
            id: 'upload-pic-modal',
            override: true
          }
          const modal = new Modal(modalEl, modalOpts, instanceOpts)
          modal.show()
        }
      }
    }
  }

}
