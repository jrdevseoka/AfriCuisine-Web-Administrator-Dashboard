import { PostResponse } from 'src/app/shared/res/post.response';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JWTService } from 'src/app/services/users/jwt.service';
import { Picture } from '../../models/picture/picture.model';
import { PictureService } from 'src/app/services/picture/picture.service';
import { AuthService } from 'src/app/services/users/auth.service';
import { AuthResponse } from '../../res/auth.response';
import { enviroment } from 'src/app/env/env.config';

@Component({
  selector: 'Upload-Pic',
  templateUrl: './upload-picture.component.html',
})
export class UploadPictureComponent {
  pictureForm: FormGroup;

  file: Picture | undefined;
  response: PostResponse | AuthResponse

  email: string = ''
  processed: boolean = false
  submitting: boolean = false

  constructor(
    private jwt: JWTService,
    private fb: FormBuilder,
    private picture: PictureService,
    private auth: AuthService
  ) {
    this.pictureForm = this.fb.group({
      picture: ['', [Validators.required]],
    });
    this.response = {} as PostResponse
  }
  onSubmit() {
    this.submitting = true
    if (this.pictureForm.valid) {
      this.picture.setProfilePicture(this.file!).subscribe({
        next: (response) => {
          this.response = response
        },
        error: (err) => {
          console.log(JSON.stringify(err))
          this.response.message = `Unexpected error occured while uploading picture. ${enviroment.message}`
          this.submitting == false
          this.processed = true
        },
        complete: () => {
          this.submitting == false
          this.processed = true
          this.pictureForm.reset();
        }
      })
    }
  }
  onFileUpload(event: any) {
    const file = event.target.files[0];
    var claims = this.jwt.getJwtClaims(sessionStorage.getItem('token')!);
    const path: string = `assets/uploads/profile-pic/${file.name}`;
    if (file.name) {
      this.email = claims.email
      this.file = {
        name: file.name,
        type: file.type,
        path: path,
        lUser: claims.nameid,
      };
      this.pictureForm.controls['picture'].patchValue(file);
    }
  }
  later() {
    sessionStorage.setItem('activate-profile-modal', JSON.stringify(true));
  }
}
