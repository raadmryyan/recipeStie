import {NgModule} from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { authticationRouting } from './authtication.routingModule';

@NgModule({
  declarations :[
    SignupComponent,
    SinginComponent
  ] , 
  imports :[
      FormsModule ,
      CommonModule,
      authticationRouting
  ]
})
export class authticationModule{



}