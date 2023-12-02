import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { QueryItemResponse } from "../models/res/query-item.reponse";
import { Profile } from "../models/user/profile.model";
import { enviroment } from "src/app/env/env.config";
import { BaseReponse } from "../models/res/base.response";
import { ProfilePicture } from "../models/picture/profile-picture.model";

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private endpoint = `${enviroment.apiUrl}/users/`
  constructor(private http: HttpClient) {}

  getProfile(email: string)
  {
     return this.http.get<QueryItemResponse<Profile>>(`${this.endpoint}profile?username=${email}`)
  }
}
