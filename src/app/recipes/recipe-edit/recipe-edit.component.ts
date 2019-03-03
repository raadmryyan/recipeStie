import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CanDeactivateGuard } from 'src/app/can-deactivated.service';
import {Http, Headers} from '@angular/http'
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit , CanDeactivateGuard {
  id: number;
  editMode = false;
  recipeForm:FormGroup;
  savedCheck=false;
  forBiddenNames=['fuck', 'dirty'];

  constructor(private route: ActivatedRoute , private recipeService:RecipeService , 
    private _route:ActivatedRoute , private _router:Router , private http:HttpClient ) { }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;

        }
      );
      this.initForm();
  }
  private initForm()
  {
    let recipeName="";
    let recipeImage='';
    let recipeDecription='';
    let id=null;
    let recipeIngredients= new FormArray([]);
    if (this.editMode)
    {
     const recipe:Recipe = this.recipeService.getRecipe(this.id) ;
     recipeName=recipe.name;
     recipeImage=recipe.imagePath;
     recipeDecription=recipe.description;
     id=recipe.id;
     if (recipe.ingredients.length !=0)
     {
       for (let ingredient of recipe.ingredients)
       {
         recipeIngredients.push(new FormGroup({
           'name' : new FormControl(ingredient.name, [Validators.required,this.forbiddenNameChecks.bind(this)]),
           'amount' :new FormControl (ingredient.amount , [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
         }));
       }
     }
    
    
    }
    this.recipeForm= new FormGroup({ 
       'id':new FormControl (id),
       'name': new FormControl (recipeName,[Validators.required,this.forbiddenNameChecks.bind(this)]),
       'imagePath': new FormControl(recipeImage,[Validators.required]),
       'description': new FormControl(recipeDecription,[Validators.required]),
       'ingredients': recipeIngredients

    });

  }
  forbiddenNameChecks(control :FormControl) : {[s: string ]: boolean }
  { 
      for(let val of this.forBiddenNames)
      {
      if(control.value.trim().toLowerCase().indexOf(val) !=-1)
      {
        return {"nameForbidden": true };
      }
    }
      return null;
  }
  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
    const recipe:Recipe = this.recipeService.getRecipe(this.id) ;
    if (!this.savedCheck && this.editMode &&(this.recipeForm.get('name').value !== recipe.name ||
    this.recipeForm.get('imagePath').value !== recipe.imagePath ||
    this.recipeForm.get('description').value !== recipe.description  ||
    this.recipeForm.get('ingredients').value.length !==recipe.ingredients.length))
    {
      return confirm("Leaving this page will discard unsaved changes.");
    }
    return true;
  
  }
  
 
  onSubmit()
  {
    // const newrecipe = new Recipe(this.recipeForm.value['name'], 
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'] ,
    // this.recipeForm.value["ingredients"]);
    console.log(this.recipeForm);
     this.savedCheck=true;
    if (this.editMode)
    {
      this.recipeService.updateRecipeById(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addNewRecipe(this.recipeForm.value);
    }
    this.savedCheck=true;
      this._router.navigate(["../"],{relativeTo:this._route});
     
  }

  onAddIngredient()
  {
     (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        "name": new FormControl(null,Validators.required),
        "amount": new FormControl(null,[Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
  }
  onCancel()
  {
    this._router.navigate(["../"] , {relativeTo:this._route});
  }

  onDeleteIngredient(index:number)
  {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
 

}
