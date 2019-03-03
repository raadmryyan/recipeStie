import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { StroageServicesService } from '../shared/stroage-services.service';

@Injectable()
export class RecipeService {
  changesRecipe = new Subject<Recipe[]>();

   recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
   
   
    return this.recipes.slice();

    
  }
  setRecipe(Recipe:Recipe [])
  {
    this.recipes=Recipe;
    this.changesRecipe.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  deleteRecipeById(index:number)
  {
       this.recipes.splice(index,1);
       this.changesRecipe.next(this.recipes.slice());

  }
  addNewRecipe(recipe:Recipe)
  { recipe.id=this.genegrateID();
   this.recipes.push(recipe);
   this.changesRecipe.next(this.recipes.slice());
  }
  updateRecipeById(index:number , newRecipe:Recipe)
  {
    let recipe:Recipe = this.recipes[index];
    this.recipes[index]=newRecipe;
    this.changesRecipe.next(this.recipes.slice());

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  genegrateID()
  { if(this.recipes.length ==0)
    {
      return 0;
    }
    else
    {
    let index=this.recipes.length-1;
    let lastId=this.recipes[index].id;
    return lastId+1;
    }
  }

  
}
