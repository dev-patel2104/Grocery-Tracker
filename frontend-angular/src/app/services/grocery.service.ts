import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Groceries} from '../mock-grocery';
import {Grocery} from '../Grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private url = 'https://grocery-tracker-2p8l.onrender.com';
  constructor(private http : HttpClient) { }

  getGroceries(email : string): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(`${this.url}/grocery/${email}`)
  }

  deleteGrocery(grocery : Grocery): Observable<Grocery> {
    return this.http.delete<Grocery>(`${this.url}/grocery/${grocery.grocery_id}?email=${grocery.email}`);
  } 
}
