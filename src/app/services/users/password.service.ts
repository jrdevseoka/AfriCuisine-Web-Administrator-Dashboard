import { Injectable } from "@angular/core";
import { ForgotPasswordCommand } from "../../shared/commands/forgot-password.command";
import { HttpClient } from "@angular/common/http";
import { AuthResponse } from "../../shared/res/auth.response";
import { enviroment } from "../../env/env.config";
import { ResetPasswordComponent } from "src/app/modules/auth/reset-password/reset-password.component";
import { PostResponse } from "src/app/shared/res/post.response";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  endpoint: string = `${enviroment.apiUri}/resetpassword`
  constructor(private http: HttpClient){}

  forgotPassword(body: ForgotPasswordCommand)
  {
    const response = this.http.post<AuthResponse>(`${this.endpoint}/send-email`, body)
    return response
  }
  updatePassword(body: ResetPasswordComponent)
  {
    return this.http.post<PostResponse>(`${this.endpoint}/update`, body)
  }

}
