import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';


import { LoadedServiceService } from './loaded-service.service';
import { WelcomeComponent } from './core/header/welcome/welcome.component';

const appRoutes: Routes = [

  { path: 'shopping-list',loadChildren:'./shopping-list/shopping.module#shoppingMoudule' ,canLoad:[LoadedServiceService]},
   {path:'welcome',component:WelcomeComponent},
   {path:"recipes",loadChildren:'./recipes/recipes.module#recipesModule',canLoad:[LoadedServiceService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
