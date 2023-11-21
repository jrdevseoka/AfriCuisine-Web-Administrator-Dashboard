import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/env/env.config';
import { UserLogin } from '../models/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  async signin(_user: UserLogin)
  {
     try
     {
       const urlApi = `${enviroment.apiUrl}/account/login`
       const response = await this.http.post(urlApi, _user)
       return response;
     }
     catch(error: any)
     {
        console.log(error.message)
        return false;
     }
  }
}
