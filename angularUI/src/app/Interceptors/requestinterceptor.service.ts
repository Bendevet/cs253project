import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestinterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var authReq :HttpRequest<any>;
    authReq = req;
    return next.handle(authReq).pipe(
      tap(
        success=>{
      if(authReq.url=="http://localhost:8080/login"){
         this.injector.get(Router).navigateByUrl('home');
      }

    },
    err=>{
      // if(err.status===500){
      //   this.injector.get(Router).navigate(['../']);
      // }
      // if(err.status===401){
      //   this.injector.get(Router).navigate(['../']);
      // }

      // if(err.status===404){
      //   this.injector.get(Router).navigate(['../home']);
      // }
     
      // this.injector.get(Router).navigateByUrl('login');
    }));
  }


}
