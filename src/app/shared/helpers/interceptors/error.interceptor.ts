import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ErrorResponse } from "../../models/res/error.reponse";
import { supportMessage } from "../../constants/error.constant";

export class ErrorInterceptor implements HttpInterceptor{
  response: ErrorResponse  = { succeeded: false}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return next.handle(req).pipe(
      catchError((e: HttpErrorResponse) => {
          this.response = {
            succeeded: false,
            code: e.status,
            message: `An unexpected error occured. ${supportMessage}`
          }
          return throwError(() => this.response);
      })
     )
  }

}
