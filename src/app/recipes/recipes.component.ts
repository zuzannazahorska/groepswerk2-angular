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
  searchInstr: any;
  instruction: any;
  instructions: any;

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

  searchInst(id: string) {
    console.log(id);
    this.dataService.getRecipeDetail(id).then((result) => {
      console.log(result);
      this.instruction = result;
    });
  }

  /*showVegan() {
    this.dataService.getVeganFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }*/
}
