import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  ingredients: any;
  search: any;
  fridgeList!: any[];
  shoppingList!: number[];
  ingredientid: number = 0;
  allIngrRecipes: any;
  list_item: string = 'fridgelist';
  user_id: any = localStorage.getItem('userId');

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService,
    private toastr: ToastrService
  ) {
    this.fridgeList = [];
    this.shoppingList = [];
  }
  getAllIngredients() {
    this.dataService.getIngredientsFromApi(this.search).then((result) => {
      if (result.length === 0) {
        console.log('Ingredient not found');
        this.toastr.error('Ingredient not found');
      } else {
        console.log(result);
        this.ingredients = result;
      }
    });
  }
  addToFridgeList(ingredient_id: number) {
    console.log(this.ingredients[0].name);
    const user_id = localStorage.getItem('userId');
    const list = 'fridgeList';

    fetch('http://127.0.0.1:8000/api/ingredient_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        ingredient_id: ingredient_id,
        list: list,
      }),
    })
      .then((response) => {
        if (response.status === 400) {
          return response.json().then((error) => {
            this.toastr.error(
              `You already have ${this.ingredients[0].name} in your Freego!`
            );
            return response.json();
          });
        }
        return response.json();
      })

      .then((json) => {
        this.toastr.success(
          `${this.ingredients[0].name} has been added to your Freego!`
        );
        this.getFridgeList();
      });
    this.search = '';
  }

  getFridgeList() {
    const user_id = localStorage.getItem('userId');
    const list = 'fridgeList';
    fetch(`http://127.0.0.1:8000/api/ingredient_user/${user_id}/${list}`)
      .then((response) => response.json())
      .then((data) => {
        this.fridgeList = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addToShoppingList(ingredient_id: number) {
    const user_id = localStorage.getItem('userId');
    const list = 'shoppinglist';

    fetch('http://127.0.0.1:8000/api/ingredient_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        ingredient_id: ingredient_id,
        list: list,
      }),
    })
      .then((response) => {
        if (response.status === 400) {
          return response.json().then((error) => {
            this.toastr.error(
              `You already have ${this.ingredients[0].name} in your Freego!`
            );
            return response.json();
          });
        }
        return response.json();
      })

      .then((json) => {
        this.toastr.success(
          `${this.ingredients[0].name} has been added to your Freego!`
        );
        this.getFridgeList();
      });
    this.search = '';
  }

  ngOnInit() {
    this.getFridgeList();
  }

  // deleteIngredientFridge(i: number) {
  //   this.fridgeList.splice(i, 1);
  //   console.log(this.fridgeList);
  //   this.toastr.error('Ingredient has been deleted!');
  // }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  //search all recipes based on particular ingredients
  filterRecipes() {
    this.dataService
      .recipesUser(this.user_id, this.list_item)
      .then((result) => {
        console.log(result);
        this.allIngrRecipes = result;
        if (result.length === 0) {
          this.toastr.warning('No recipes found', 'Search');
        } else {
          this.toastr.success(`${result.length} results found`, 'Search');
        }
      });
  }

  deleteIngredientFridge(ingredient_id: number) {
    console.log(ingredient_id);
    console.log('hellow');
    const user_id = localStorage.getItem('userId');
    const list = 'fridgeList';
    fetch(
      `http://127.0.0.1:8000/api/ingredient_user/${user_id}/${ingredient_id}/${list}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          ingredient_id: ingredient_id,
          list: list,
        }),
      }
    )
      .then((response) => console.log(response))
      .then((json) => this.getFridgeList());
    this.toastr.error('Item has been deleted!');
  }
}
