import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as fs from 'fs'
import * as sharp from "sharp";
import { v4 as guid } from 'uuid'
import { ProfilePicture } from "src/app/shared/models/picture/profile-picture.model";
import { BaseReponse } from "src/app/shared/models/res/base.response";
import { AuthService } from "src/app/shared/services/auth.service";
import { PictureService } from "src/app/shared/services/picture.service";
import { enviroment } from "src/app/env/env.config";
@Component({
  selector: 'Upload-Profile-Pic',
  templateUrl: './profile-pic.component.html'
})
export class ProfilePictureComponent {
  form: FormGroup
  picture: string = ''
  response: BaseReponse

  @Input()
  profileActivated: boolean = false
  processed: boolean = false

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private pictureService: PictureService
  ) {

    this.form = this.fb.group({
      picture: [null, Validators.required]
    })

    this.response = { succeeded: false, message: ''}
  }
  async onSubmit() {
    if (this.form.valid) {

      const file = this.form.controls['picture'].value
      const imageData = Buffer.from(file, 'base64')
      const meta = (await sharp(imageData).metadata())
      let  imageName = guid()
      //TODO - Install a uuidv4 package and generate the name of the file
      //TODO -Compress the Image Store the file In folder
      let picture: ProfilePicture = { name: '', path: '', type: '' }
      this.auth.User().subscribe((user) => {
        imageName += `_${user.name.substring(0, 4)}.${meta.format}`
        const path = `${enviroment.profileFolder}/${imageName}`
        picture = { type: meta.format!, name: imageName, path: '', lUser: user.id }
      })
      this.upload(picture)
    }
  }
  upload(picture: ProfilePicture)
  {
     this.pictureService.saveProfilePicture(picture).subscribe({
      next: (res) => {
        this.response = res;
      },
      error: (err) => {
         console.log(err.message)
         this.response.succeeded = false
         this.response.message =
         'An unexpected error occured while updating your profile'
      },
      complete:  () => { this.processed = true}
    })
  }
  onImageSelected(event: any) {
    const file = event.target.files[0]
    this.form.patchValue({
      file: file
    })
  }
}
