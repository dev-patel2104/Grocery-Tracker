import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grocery } from '../../Grocery';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-grocery-card',
  templateUrl: './grocery-card.component.html',
  styleUrl: './grocery-card.component.css'
})
export class GroceryCardComponent implements OnInit 
{
  @Input() grocery: Grocery = {} as Grocery;
  @Output() onDeleteGrocery: EventEmitter<Grocery> = new EventEmitter();

  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  onDelete(grocery : Grocery)
  {
    this.onDeleteGrocery.emit(grocery);
  }

  constructor() {}

  ngOnInit(): void {}
}
