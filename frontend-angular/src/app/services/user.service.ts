import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {User} from '../User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://grocery-tracker-2p8l.onrender.com';
  constructor(private http : HttpClient) { }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.url}/users/${email}`)
  }

  addUser(user: User) : Observable<any> {
    return this.http.put<any>(`${this.url}/users`, user, httpOptions);
  }
}
