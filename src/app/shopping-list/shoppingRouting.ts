import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { CanAtivedService } from '../auth/can-deatived.service';
const shoppingRoutes: Routes = [
    { path: '', component: ShoppingListComponent ,canActivate:[CanAtivedService]}
    
  ];
@NgModule({
    imports: [RouterModule.forChild(shoppingRoutes)],
    exports: [RouterModule]
  })
  export class shoppingRouteModule {
  
  }