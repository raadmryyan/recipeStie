import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { StroageServicesService } from 'src/app/shared/stroage-services.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit  , OnDestroy{
  recipes: Recipe[];
  recipeSubscrption:Subscription;
  search:String="";
  criterion :any='name';

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute, private serviceStroage:StroageServicesService) {
  }

  ngOnInit() {
    this.serviceStroage.retriveRecipe();
    this.recipes = this.recipeService.getRecipes();

   this.recipeSubscrption= this.recipeService.changesRecipe.subscribe(
      (recipe:Recipe[])=>
      {
        this.recipes=recipe;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy()
  {
    this.recipeSubscrption.unsubscribe();
  }
}
