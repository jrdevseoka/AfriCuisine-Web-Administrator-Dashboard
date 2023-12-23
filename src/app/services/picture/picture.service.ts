import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "src/app/env/env.config";
import { Picture } from "src/app/shared/models/picture/picture.model";
import { PostResponse } from "src/app/shared/res/post.response";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  endpoint = `${enviroment.server}/pictures/profile`

  constructor(private http: HttpClient) {}
  setProfilePicture(body: Picture)
   {
     return this.http.post<PostResponse>(this.endpoint, body)
   }
}
