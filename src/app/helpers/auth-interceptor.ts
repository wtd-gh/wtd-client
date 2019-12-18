import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/internal/operators';
import { of, Observable } from 'rxjs';
import { QUOTE_URL } from '../config/server';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();
    if (token) {
      if (req.url === QUOTE_URL) {
        return next.handle(req);
      } else {
        const authRequest = req.clone({
          headers: req.headers.set('x-auth', token)
        });
        return next.handle(authRequest);
      }
    } else {
      return next.handle(req).pipe(catchError((err: any, caught: any) => {
        console.log(err);
        return of(err);
      }));
    }
  }
}
