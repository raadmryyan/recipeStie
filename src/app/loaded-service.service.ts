import { Injectable } from '@angular/core';
import { CanLoad, ActivatedRouteSnapshot, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authSerive } from './auth/auth.service.service';

@Injectable({
  providedIn: 'root'
})

export class LoadedServiceService implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    if(this.authSerive.isAuthicated())
    {
      return true;
    }
    this.router.navigate["../"];
  }
  constructor(private authSerive:authSerive , private router:Router) { }
}
