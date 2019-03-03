import { Injectable } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { Response } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { authSerive } from '../auth/auth.service.service';

@Injectable({
  providedIn: 'root'
})
export class StroageServicesService {
  recipes:Recipe[]=[];
  URL:string = "https://recipe-data-40b20.firebaseio.com/recipes.json";
  constructor(private http:HttpClient , private recipeService:RecipeService , private authSerive:authSerive) { }
  storeRecipe()
  {
    
    const token=this.authSerive.getToken();
       return this.http.put(this.URL,this.recipeService.getRecipes());
      
  }
  retriveRecipe()
  {
    const token=this.authSerive.getToken();
   
     this.http.get<Recipe[]>(this.URL
     ).pipe(map((recipes:Recipe[])=>
     {
        for(let recipe of recipes)
        {
          if (!recipe['ingredients'])
          {
            recipe['ingredients']=[];
          }
        }
        return recipes;
     }),catchError(error => {
      return throwError( 'Something went wrong!' )
     })).subscribe((recipes:Recipe[])=>{
       this.recipeService.setRecipe(recipes);
       
     });

  }
 


}
