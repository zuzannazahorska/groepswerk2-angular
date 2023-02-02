import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MainComponent } from './main/main.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AuthGuard } from './auth.guard';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { DietComponent } from './recipes/diet/diet.component';
import { SearchComponent } from './recipes/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] },
  { path: 'recipes/:id', component: RecipeComponent, canActivate: [AuthGuard] },
  {
    path: 'diet/:id',
    component: DietComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:name',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  {
    path: 'shoppinglist',
    component: ShoppinglistComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
