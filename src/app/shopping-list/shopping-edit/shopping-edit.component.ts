import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  editMode=false;
  buttonName:String="ADD";
  @ViewChild('shoppingForm') shoppingForm:NgForm;
  editSubscription:Subscription;
  ingredientIndex:number;
  alreadyExist:String='';
  editedIngredient:Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription=this.slService.editIngredient.subscribe((number:number)=>{
      this.editMode=true;
      this.ingredientIndex=number;
      this.editedIngredient=this.slService.getIngredientByIndex(this.ingredientIndex);
      this.shoppingForm.setValue({
        name:this.editedIngredient.name ,
        amount:this.editedIngredient.amount
      });
    });
    this.slService.ingredientErrorExist.subscribe(
      (error:string)=>
      {
        this.alreadyExist=error;
      }
    );
    this.alreadyExist='';

  }
  ngOnDestroy()
  {
    this.editSubscription.unsubscribe();
    
  }

  onSubmit(form:NgForm) {
    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    if (this.editMode)
    {
      this.slService.updateIngredientById(this.ingredientIndex,newIngredient);
    }
    else {
    this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    this.shoppingForm.reset();
    
  }
  rest()
  {
    this.shoppingForm.reset();
    this.editMode=false;
  }
  onDelete()
  {
    this.rest();
    this.slService.deleteIngredientByIndex(this.ingredientIndex);
  }
}
