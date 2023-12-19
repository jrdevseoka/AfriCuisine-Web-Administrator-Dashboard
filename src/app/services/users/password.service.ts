import { Injectable } from "@angular/core";
import { ForgotPasswordCommand } from "../../shared/commands/forgot-password.command";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../../shared/res/auth.response";
import { enviroment } from "../../env/env.config";
import { PostResponse } from "src/app/shared/res/post.response";
import { UpdatePasswordCommand } from "src/app/shared/commands/update-password.command";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  endpoint: string = `${enviroment.server}/resetpassword`
  constructor(private http: HttpClient){}

  forgotPassword(body: ForgotPasswordCommand)
  {
    const response = this.http.post<AuthResponse>(`${this.endpoint}/send-email`, body)
    return response
  }
  updatePassword(body: UpdatePasswordCommand)
  {
    return this.http.post<PostResponse>(`${this.endpoint}/update`, body)
  }

}
