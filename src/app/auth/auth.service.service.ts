import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { StroageServicesService } from '../shared/stroage-services.service';
@Injectable({
  providedIn: 'root'
})
export class authSerive {
  errorMessage="";
  token;
  SuccessMessage='';

  constructor(private router:Router) { }

  signUp(mail :string , password:string)
  {

     return firebase.auth().createUserWithEmailAndPassword(mail,password).then(
      (respons)=>
      {
        
        this.router.navigate(['./']);
        this.SuccessMessage="Successful , Congratulations! "

      }
     );
   
  }
  signIn(mail :string , password:string)
  {
     return firebase.auth().signInWithEmailAndPassword(mail,password).then(
      (respons)=>
      {
        this.token=this.getToken();
        this.SuccessMessage=""
        this.router.navigate(['../welcome']);
       

      }
    );;
  }
  getToken()
  {
     firebase.auth().currentUser.getIdToken().then(
      (token:string) =>
      {
        this.token=token;
      }
    ).catch(error=>console.log("Error --->"+error));
    return this.token;
  }
  isAuthicated()
  {
    //console.log("--->"+this.token != null);
    return this.token != null;
    
  }
  logOut()
  {
    firebase.auth().signOut();
 
    this.token=null;
  
  }
}
