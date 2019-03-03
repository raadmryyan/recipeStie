import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { CanAtivedService } from '../auth/can-deatived.service';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CanDeactivateGuard } from '../can-deactivated.service';
import { CommonModule } from '@angular/common';


const RecipeRoute :Routes=[
    { path: '', component: RecipesComponent, canActivateChild:[CanAtivedService]  ,children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canDeactivate:[CanDeactivateGuard]},
      ] }, 
];
@NgModule({
    imports: [
      RouterModule.forChild(RecipeRoute)],
      exports :[
          RouterModule
      ]
})
export class recipesRoutingModule
{

}