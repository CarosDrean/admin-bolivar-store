import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(LoginService);
    const headers = new HttpHeaders({
      'x-token': authService.getToken()
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone);
  }

  private driveError(error: HttpErrorResponse) {
    return throwError('Hubo un error: ' + error);
  }
}
