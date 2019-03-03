import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authSerive } from '../auth.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
 MessageError:string="";

 
  constructor(private serive:authSerive , private router:Router ) { }

  ngOnInit() {
  }
  submit(signinForm:NgForm)
  {
    this.serive.signIn(signinForm.value.email,signinForm.value.password)
    .catch((error:String)=>
    {
    this.MessageError=<string>error;
    });
  }
  signUp()
  {
       this.router.navigate(['/signup']);
  }
}
