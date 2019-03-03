import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { shortenPipe } from '../shorten.pipe';
import { FilterPipe } from '../filter.pipe';
import { CommonModule } from '@angular/common';
import { recipesRoutingModule } from './recipes.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations :[
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        shortenPipe,
        FilterPipe
    ],
    imports:[
        CommonModule,
        recipesRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule ]
      
})
 
export class recipesModule {


}