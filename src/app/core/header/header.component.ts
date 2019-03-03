import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { StroageServicesService } from 'src/app/shared/stroage-services.service';
import { authSerive } from 'src/app/auth/auth.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent {
  title :String ="Home";
  constructor(private stroageService:StroageServicesService, private authSerive:authSerive, private router:Router)
  {

  }
  isAuthicated()
  {
    return this.authSerive.isAuthicated();
  }
  saveData()
  {
    this.stroageService.storeRecipe().subscribe();
     
  }
  fetchData()
  {
    this.stroageService.retriveRecipe();
  }
  logout()
  {
    this.authSerive.logOut();
    this.router.navigate(["../"]);

  }
}
