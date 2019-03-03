import { Component, OnInit } from '@angular/core';
import * as firbase from "firebase"
import { authSerive } from './auth/auth.service.service';
import { StroageServicesService } from './shared/stroage-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  ngOnInit(){
       firbase.initializeApp({
        apiKey: "AIzaSyA25VKYi9ip2toRLp_eWeVYYMQNUy-E6Dk",
        authDomain: "recipe-data-40b20.firebaseapp.com",
       });
      
  }
  constructor(private authSerive :authSerive){
   
  }
  isAuthicated()
  {
    return this.authSerive.isAuthicated();
  }
  }
  
  
 
