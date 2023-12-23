import { Component } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'
import { MD5 } from 'crypto-js';
import {User} from '../../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email: string = "";
  password: string = "";
  minLength: number = 8;
  message: string = "";
  isLoading: boolean = false;
  user : User = {} as User;

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

  onRegister(): void {
    console.log("you are trying to log in")
    const passwordHash = MD5(this.password).toString();
    this.isLoading = true;
    this.user.email = this.email;
    this.user.password = passwordHash;

    this.userService.addUser(this.user).subscribe((response) => {
    try {
        if (response.message) {
            this.message = "User with this email already exist";
            this.email = '';
        }
        else {

            localStorage.setItem('email', this.email);
            this.router.navigate(['/groceries']);
        }


    } catch (err) {
        console.error(err);
    }
    this.isLoading = false;
    })
  }
}
