import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  ingredients: any;
  search: any;
  fridgeList!: string[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService
  ) {}

  getAllIngredients() {
    this.dataService.getIngredientsFromApi(this.search).then((result) => {
      console.log(result);
      this.ingredients = result;
    });
  }

  addToFridgeList(ingredient: string) {
    this.dataService.addToFridgeList(ingredient);
  }
  addToShoppingList(ingredient: string) {
    this.dataService.addToShoppingList(ingredient);
  }

  ngOnInit() {}

  deleteIngredientFridge(name: string) {
    let deleteIngredient = name;
    this.fridgeList = this.fridgeList.filter(
      (item) => item !== deleteIngredient
    );
    console.log(this.fridgeList);
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
