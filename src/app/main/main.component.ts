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
  fridgeList!: string[];
  shoppingList!: string[];
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
      console.log(result);
      this.ingredients = result;
    });
  }
  addToFridgeList(ingredient: string) {
    this.fridgeList.push(ingredient);
    console.log(this.fridgeList);
    this.toastr.success('Item has been added!');
    this.search = '';
  }
  addToShoppingList(ingredient: string) {
    this.shoppingList.push(ingredient);
    console.log(this.shoppingList);
    this.toastr.success('Item has been added!');
  }
  ngOnInit() {}
  deleteIngredientFridge(i: number) {
    this.fridgeList.splice(i, 1);
    console.log(this.fridgeList);
    this.toastr.success('Item has been deleted!');
  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
