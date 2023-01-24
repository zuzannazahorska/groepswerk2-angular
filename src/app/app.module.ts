import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    ShoppinglistComponent,
    RecipesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
