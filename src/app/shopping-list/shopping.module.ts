import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { shoppingRouteModule } from './shoppingRouting';

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        shoppingRouteModule
    ]
})
export class shoppingMoudule{


}