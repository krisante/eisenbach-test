import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
        tap(
          (data: any) => {
            if (data.errors) {
              throwError(data);
            }
          }
        ),
        catchError((err: any) => {
            if (window.location.href.indexOf('/edit-user') === -1) {
                return throwError(new Error(err.error.error || err.error));
            }
            this.router.navigate(['/users']);
        })
      );
  }
}
