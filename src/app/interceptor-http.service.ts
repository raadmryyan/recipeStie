import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authSerive } from './auth/auth.service.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorHttpService implements HttpInterceptor {
  intercept(req:HttpRequest<any> , next:HttpHandler): Observable <HttpEvent<any>>
  {
  //req.params.set("auth",this.authSerive.getToken());
  console.log("---> LOG"+this.authSerive.token);
   const copiedRequest = req.clone({
     params:req.params.set("auth",this.authSerive.token)
   });
  return  next.handle(copiedRequest);
 
  }
  constructor(private authSerive:authSerive){

  }
}
