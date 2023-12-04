import { Component, Input, OnInit } from "@angular/core";
import { Modal, ModalOptions, initModals, modalBackdrop, modalPlacement } from "flowbite";
import { ProfilePicture } from "../../models/picture/profile-picture.model";

@Component({
  selector: 'Upload-Profile-Picture',
  templateUrl: './profile-pic.component.html'
})
export class ProfilePictureComponent implements OnInit {
  @Input() picture: ProfilePicture | undefined
  constructor() {
    this.picture = { name: '', path: '', type: '' }
  }
  ngOnInit(): void {
    if (!this.picture) {
      initModals()
      const profileEl = document.getElementById('upload-profile-picture')
      const placement: modalPlacement = 'center'
      const backdrop: modalBackdrop = 'dynamic'
      const options = {
        placement: placement,
        backdrop: backdrop,
        backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
        closable: false
      }
      const instanceOpts = {
        id: 'upload-profile-picture',
        override: true
      }
      const modal = new Modal(profileEl, options, instanceOpts)
      modal.show()
    }
  }
}
