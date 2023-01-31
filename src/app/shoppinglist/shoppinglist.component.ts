import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  shoppingList!: any[];
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  deleteIngredientFromShoppingList(ingredient_id: number) {
    const user_id = localStorage.getItem('userId');
    fetch(
      `http://127.0.0.1:8000/api/ingredient_user/${user_id}/${ingredient_id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          ingredient_id: ingredient_id,
        }),
      }
    )
      .then((response) => response.json())
      .then(
        (json) =>
          (this.shoppingList = this.shoppingList.filter(
            (item) => item.ingredient_id !== ingredient_id
            
          ))
          
      );
      console.log(this.shoppingList)
  }

  ngOnInit() {
    this.getShoppingList();
  }

  getShoppingList() {
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
}
