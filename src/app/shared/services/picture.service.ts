import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/env/env.config';
import { ProfilePicture } from '../models/picture/profile-picture.model';
import { BaseReponse } from '../models/res/base.response';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private endpoint: string = `${enviroment.apiUrl}pictures`;

  constructor(private readonly http: HttpClient) {}

  saveProfilePicture(picture: ProfilePicture)
  {
     return this.http.post<BaseReponse>(`${this.endpoint}/profile`, picture);
  }
  uploadToFolder(file:any, path:string)
  {

  }
}
