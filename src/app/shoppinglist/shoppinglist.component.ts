import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent {
  shoppingList!: any[];
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const user_id = localStorage.getItem('userId');
    const list = 'shoppinglist';
    fetch(`http://127.0.0.1:8000/api/ingredient_user/${user_id}/${list}`)
      .then((response) => response.json())
      .then((data) => {
        this.shoppingList = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteIngredientFromShoppingList(name: string) {
    let ingredientToRemove = name;
    this.shoppingList = this.shoppingList.filter(
      (item) => item !== ingredientToRemove
    );
    console.log(this.shoppingList);
    this.toastr.success('Item has been deleted!');
  }
}
