import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../../Grocery';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrl: './grocery-card.component.css'
})
export class GroceryCardComponent implements OnInit {
  @Input() grocery: Grocery = {} as Grocery;
  @Output() onDeleteGrocery: EventEmitter<Grocery> = new EventEmitter();

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  isAlertOpen = false;
  email: string = "";
  showExpiry: boolean | any = false;
  onDelete(grocery: Grocery) {
    this.onDeleteGrocery.emit(grocery);
  }

  constructor(private groceryService: GroceryService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
    if (this.grocery.expiry_date == null || this.grocery.expiry_date == '') {
      this.showExpiry = false;
    } else {
      this.showExpiry = true;
    }
  }

  onEdit(grocery: Grocery) {

    console.log(grocery);
    grocery.email = this.email;
    this.groceryService.editGrocery(grocery).subscribe((response) => {
      console.log(response);
      this.grocery = grocery;
    })

  }
  setAlert(value: boolean) {
    this.isAlertOpen = value;
  }
}
