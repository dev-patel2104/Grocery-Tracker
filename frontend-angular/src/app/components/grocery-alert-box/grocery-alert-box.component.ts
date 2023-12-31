import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Grocery } from '../../Grocery';

@Component({
  selector: 'app-grocery-alert-box',
  templateUrl: './grocery-alert-box.component.html',
  styleUrl: './grocery-alert-box.component.css'
})
export class GroceryAlertBoxComponent implements OnInit {

  @Output() onAddGrocery: EventEmitter<Grocery> = new EventEmitter();
  @Output() onUpdateGrocery: EventEmitter<Grocery> = new EventEmitter();
  @Output() onCloseDialog: EventEmitter<void> = new EventEmitter();
  @Input() grocery: Grocery = {} as Grocery;
  @Input() showExpiry: boolean | any = null;
  name: string = "";
  category: string = "";
  quantity: string = "";
  status: string = "";
  expiry_date: string = "";

  ngOnInit(): void {
   
    console.log(this.grocery);
    try{
      if (this.grocery && this.grocery.expiry_date!='') {
        const tempDate: Date = new Date();
        tempDate.setTime(this.grocery.expiry_date as unknown as number);
        this.grocery.expiry_date = tempDate.toISOString().split('T')[0]
      }
    }catch(e){
    }

  }

  onSubmit(): void {
    if (this.grocery && this.grocery.expiry_date) {
      const tempDate = new Date(this.grocery.expiry_date).getTime().toString();
      this.grocery.expiry_date = tempDate;
    }
    if (!this.grocery.name || !this.grocery.category || !this.grocery.quantity || !this.grocery.status) {
      alert('Please add value to the fields');
      return;
    }
    console.log(this.name);
   

    this.onAddGrocery.emit(this.grocery);
    this.closeDialog();
  }
  onUpdate(): void {
    if (this.grocery && this.grocery.expiry_date!='') {
      const tempDate = new Date(this.grocery.expiry_date as string).getTime().toString();
      this.grocery.expiry_date = tempDate;
    }
    if (!this.grocery.name || !this.grocery.category || !this.grocery.quantity || !this.grocery.status) {
      console.log(this.grocery);

      alert('Please add value to the fields');
      return;
    }
    console.log(this.grocery.name);
   
    this.onUpdateGrocery.emit(this.grocery);
    this.closeDialog();
  }
  closeDialog(): void {
    this.onCloseDialog.emit();
  }
}
