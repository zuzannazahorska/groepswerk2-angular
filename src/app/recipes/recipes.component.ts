import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

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
  ingrRecipes: any;
  filteredRecipe: any;
  name: any | string;
  diets: any;
  allIngrRecipes: any;
  recipe_id: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this._recipes;
    this.recipeDetail;
    this.filteredRecipes;
  }

  ngOnInit() {
    this.dataService.getRecipesFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }

  getAllrecipes() {
    this.dataService.getRecipesFromApi().then((result) => {
      console.log(result);
      this._recipes = result;
    });
  }
  // show instruction of recipe
  // showInst(id: string) {
  //   console.log(id);
  //   this.dataService.getRecipeDetail(id).then((result) => {
  //     console.log(result);
  //     this.recipeDetail = result;
  //     this.router.navigate(['/recipe', id]);
  //   });
  // }

  // show instruction of recipe
  showInst(id: string) {
    console.log(id);
    this.dataService.getRecipeDetail(id).then((result) => {
      console.log(result);
      this.recipeDetail = result;
      this.router.navigate(['/recipe', id]);
    });
  }

  // search recipe
  searchRecipeName() {
    this.dataService.searchRecipe(this.search).then((result) => {
      console.log(result);
      this.ingrRecipes = result;
      this.router.navigate(['/search', this.search]);
      if (result.length === 0) {
        this.toastr.warning('No results found', 'Search');
      } else {
        this.toastr.success(`${result.length} results found`, 'Search');
      }
      this.search = '';
    });
  }
  //receive recipes based on a particular diet
  filterDiet(id: string) {
    this.dataService.getDiet(id).then((result) => {
      console.log(result);
      this.filteredRecipes = result;
      this.router.navigate(['/diet', id]);
    });
  }
}
