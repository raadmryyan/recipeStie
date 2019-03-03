import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authSerive } from '../auth.service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  MessageError='';
  constructor(private authSerive:authSerive) { }

  ngOnInit() {
  }
  submit(signInForm:NgForm)
  {
     this.authSerive.signUp(signInForm.value.email,signInForm.value.password).catch
     ((error)=> {
     this.MessageError=error['message'];
     });;
  }

}
