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
  arg0: string = '';
  search: any;
  searchRecip: any;
  recipeDetail: any;
  diet: any;

  recipes: any;
  filteredRecipes: any;
  image: any;
  id: any;
  recipe: any;

  constructor(private dataService: DataService, private router: Router) {
    this._recipes;
    this.recipeDetail;
    this.filteredRecipes;
  }

  // ngOnInit() {
  //   this.dataService.getRecipesFromApi().then((result) => {
  //     console.log(result);
  //     this._recipes = result;
  //   });
  // }

  ngOnInit() {}

  getAllrecipes() {
    this.dataService.getRecipesFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }

  showInst(id: string) {
    console.log(id);
    this.dataService.getRecipeDetail(id).then((result) => {
      console.log(result);
      this.recipeDetail = result;
      this.router.navigate(['/recipe', id]);
    });
  }

  searchRecipes() {
    this.dataService.getDietFromApi(this.search).then((result) => {
      console.log(result);
    });
  }

  filterDiet(id: string) {
    this.dataService.getDiet(id).then((result) => {
      console.log(result);
      this.filteredRecipes = result;
    });
  }

  // showImage(id: any) {
  //   this.dataService.getImage(id).then((result) => {
  //     this.image = result;
  //   });
  // }
}
