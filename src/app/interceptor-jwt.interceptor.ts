import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpParams, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {JwtService} from './jwt.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class InterceptorJwtInterceptor implements HttpInterceptor {

  constructor(public jwtService: JwtService) {}

  // @ts-ignore
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*const token: string | null = localStorage.getItem('token');
    if (token) {
       request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
     }

    if (!request.headers.has('Content-Type')) {
       request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
     }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
       map((event: HttpEvent<any>) => {
         if (event instanceof HttpResponse) {
           console.log('event--->>>', event);
         }
         return event;
       }));*/
    const token = localStorage.getItem('token');
    if (token){
     const cloneReq = request.clone(
       {
         setHeaders: {
           Authorization: `Bearer ${token}`
         }
       }
     );
     return next.handle(cloneReq);
   }else{
     return next.handle(request);
   }
  }
}

export const InterceptorToken = {
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorJwtInterceptor,
  multi: true
};
