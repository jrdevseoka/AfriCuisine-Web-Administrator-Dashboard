import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { enviroment } from "../env/env.config";
import { Profile } from "../shared/models/user/profile.model";
import { ItemReponse } from "../shared/res/item.response"

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private endpoint = `${enviroment.apiUri}/users/`
  constructor(private http: HttpClient) {}

  async getAuthorizedUser(email: string)
  {
     const response = this.http.get<ItemReponse<Profile>>(`${this.endpoint}profile?username=${email}`)
     return await firstValueFrom(response)
  }
}
