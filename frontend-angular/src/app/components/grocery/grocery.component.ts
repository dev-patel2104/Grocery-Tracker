import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Grocery } from '../../Grocery';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit {
  groceries: Grocery[] = [];
  toBuyItems: Grocery[] = [];
  boughtItems: Grocery[] = [];
  email: string = '';
  isLoading: boolean = true;
  isAlertOpen: boolean = false;
  showExpiry = false;
  faPlus = faPlus;

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.document) {
      this.email = localStorage.getItem('email') || '';
    }
    this.getGroceries();
  }

  private getGroceries(): void {
    this.isLoading = true;
    if (this.email != '') {

      this.groceryService.getGroceries(this.email).subscribe((groceries) => {
        this.groceries = groceries;
        this.toBuyItems = groceries.filter((item) => item.status === 'To Buy');
        this.boughtItems = groceries.filter((item) => item.status === 'Bought');
        this.isLoading = false;
      }
      );
    }
  }

  deleteGrocery(grocery: Grocery): void {
    this.groceryService.deleteGrocery(grocery).subscribe((response) => {

      this.groceries = this.groceries.filter((item) => item.grocery_id !== grocery.grocery_id);
      this.toBuyItems = this.groceries.filter((item) => item.status === 'To Buy');
      this.boughtItems = this.groceries.filter((item) => item.status === 'Bought');

    })
  }

  addGrocery(grocery: Grocery): void {
    console.log(grocery);
    grocery.email = this.email;
    this.groceryService.addGrocery(grocery).subscribe((response) => {
      console.log(response);
      this.getGroceries();
    })
  }

  setAlert(value: boolean): void {
    console.log("Inside toggle");
    this.isAlertOpen = value;
  }
}
