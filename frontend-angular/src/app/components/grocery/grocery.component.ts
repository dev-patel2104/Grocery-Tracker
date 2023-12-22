import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { Grocery } from '../../Grocery';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit {
  groceries: Grocery[] = [];
  toBuyItems: Grocery[] = [];
  boughtItems: Grocery[] = [];
  email: string = 'dev2104patel@gmail.com';

  faPlus = faPlus;

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.getGroceries();
  }
  
  private getGroceries() : void {
    this.groceryService.getGroceries(this.email).subscribe((groceries) => {
      this.groceries = groceries;
      this.toBuyItems = groceries.filter((item) => item.status === 'To Buy');
      this.boughtItems = groceries.filter((item) => item.status === 'Bought');
    }
    );
  }
  
  deleteGrocery(grocery: Grocery): void { 
    this.groceryService.deleteGrocery(grocery).subscribe((response) => {
      this.getGroceries();

    })
  }
}
