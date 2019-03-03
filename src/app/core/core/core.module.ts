import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../header/welcome/welcome.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { CanDeactivateGuard } from 'src/app/can-deactivated.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorHttpService } from 'src/app/interceptor-http.service';

@NgModule({
  declarations: [
    HeaderComponent ,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [ShoppingListService ,RecipeService , CanDeactivateGuard,{
    provide : HTTP_INTERCEPTORS , useClass : InterceptorHttpService , multi:true}]
})
export class CoreModule { }
