import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MainComponent } from './main/main.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'shoppinglist', component: ShoppinglistComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
