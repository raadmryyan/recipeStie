import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        DropdownDirective
    ],
    imports:[
       CommonModule
    ],
    exports:[
        DropdownDirective
    ]
})
export class SharedModule{

}