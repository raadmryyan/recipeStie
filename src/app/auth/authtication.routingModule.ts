import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { SignupComponent } from './signup/signup.component';


const route:Routes=[
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    {path:'signup' , component:SignupComponent},
    {path:'signin' , component:SinginComponent}
];
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class authticationRouting{

}