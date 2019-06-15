import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class Login {
  username = new FormControl('');
  password = new FormControl('');
  constructor(private loginService:LoginService, private router: Router) {}

  submit() {
    this.loginService.login({username: this.username.value, password: this.password.value}).subscribe(
        (userDetails) => {
          debugger;
          this.loginService.setIsUserLoggedIn(true);
          if (userDetails['role'] === 'customer') {
            this.router.navigate(['/userDashboard']);
          } else {
            this.router.navigate(['/adminDashboard']);
          }
        },
        err =>  {
          this.loginService.setIsUserLoggedIn(false);
          console.log('Could not send subscription object to server, reason: ', err);
        }
    );
  }
}
