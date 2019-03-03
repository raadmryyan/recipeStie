import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { authSerive } from './auth.service.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CanAtivedService implements CanActivate ,CanActivateChild {

  constructor( private authSerive:authSerive , private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot , status:RouterStateSnapshot):Observable<boolean>| Promise<boolean> |boolean
  {
    return this.authSerive.isAuthicated();
  }
  canActivateChild(route:ActivatedRouteSnapshot , status:RouterStateSnapshot)
  {
    if(this.authSerive.isAuthicated())
    {
      return true;
    }
    this.router.navigate["../"];
  }
}
