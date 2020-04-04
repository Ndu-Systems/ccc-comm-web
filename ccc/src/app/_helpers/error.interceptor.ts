import { Injectable } from '@angular/core';
import { AccountService } from '../_services/account';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(catchError(err => {
        if ([401, 403].indexOf(err.Status) !== -1) {
          this.accountService.signOut();
         }
        const error = err.error.message || err.statusText;
        return throwError(error);
      }));
  }
}
