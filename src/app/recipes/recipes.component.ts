import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  searchedRecipes: any = '';
  searchTerm: any;

  _recipes: any = '';
  _recipe: any = '';

  constructor(private dataService: DataService, private router: Router) {
    this._recipes;
  }

  /*ngOnInit() {
    this.dataService.getRecipesFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }*/

  ngOnInit() {}

  getAllrecipes() {
    this.dataService.getRecipesFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }

  search(arg0: any): void {
    console.log(arg0);
    this._recipes = this._recipes.filter(
      (_recipe: { name: string }) => _recipe.name.toLowerCase() === arg0
    );
    console.log(this._recipes);
  }

  /*search(arg0: any): void {
    this.searchedRecipes = this._recipes.filter((_recipe: { name: string }) =>
      _recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(this.searchedRecipes.instruction);
  }*/

  /*showVegan() {
    this.dataService.getVeganFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }*/
}
