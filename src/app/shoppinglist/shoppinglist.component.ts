import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent {
  shoppingList!: string[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.shoppingList = this.dataService.getShoppingList();
    console.log(this.shoppingList);
  }
}
