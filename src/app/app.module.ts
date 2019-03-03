import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

import { RecipeService } from './recipes/recipe.service';
import { CanDeactivateGuard } from './can-deactivated.service';
import { authticationModule } from './auth/authticationModule';
import { SharedModule } from './shared/shared.module';
import { shoppingMoudule } from './shopping-list/shopping.module';
import { WelcomeComponent } from './core/header/welcome/welcome.component';
import { HeaderComponent } from './core/header/header.component';
import { CoreModule } from './core/core/core.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    authticationModule,
    shoppingMoudule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
