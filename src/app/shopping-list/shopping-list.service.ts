import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  isExitItm:boolean=false;
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientErrorExist= new Subject<String>();
  editIngredient= new Subject<number>();
  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(index:number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    
    for (var i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name == ingredient.name) {
        this.isExitItm=true;
        this.ingredientErrorExist.next(ingredient.name);
        break;
      }
  }
    if (!this.isExitItm)
    {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    }
    this.isExitItm=false;
  
}
  updateIngredientById(index:number, newIngredient:Ingredient)
  {

    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients=[];
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredientByIndex(index:number)
  {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients);
  }
}
