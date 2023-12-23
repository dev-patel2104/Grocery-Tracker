import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  email: string = "";
  password: string = "";
  minLength: number = 8;
  message: string = "";
  isLoading: boolean = false;

  faKey = faKey;
  faEnvelope = faEnvelope;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  validateEmail(): boolean {
    this.messageReset();
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u.test(this.email) ? true : false;
  }

  validatePassword(): boolean {
    this.messageReset();
    if (this.password.length >= this.minLength) {
      return true;
    }
    else {
      return false;
    }
  }

  messageReset(): void {
    if(this.email.length >= 1 && this.password.length >=1)
    {
      this.message = '';
    }
  }

  onLogin(): void {
    console.log("you are trying to log in")
    const passwordHash = MD5(this.password).toString();
    this.isLoading = true;
    this.userService.getUserByEmail(this.email).subscribe((response) => {
      if (response.error) {
        this.email = '';
        this.message = "No such email exist";
      }
      else if (response && response.password === passwordHash) {
        // Password is correct, store the email in local storage

        localStorage.setItem('email', this.email);
        
        this.router.navigate(['/groceries']);
      } else {
        this.password = '';
        this.message = "Invalid Password";
      }
      console.log(response);
      this.isLoading = false;
    })
  }
}
