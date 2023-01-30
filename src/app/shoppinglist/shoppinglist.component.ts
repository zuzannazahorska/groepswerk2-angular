import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent {
  shoppingList!: string[];
  constructor(
    private dataService: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.shoppingList = this.dataService.getShoppingList();
    console.log(this.shoppingList);
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
