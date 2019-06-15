import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

    currentRoute: string;
    hideLogout: boolean;
    constructor(private swUpdate: SwUpdate, private router: Router, public loginService: LoginService) {
        
    }

    ngOnInit() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }
            });
            this.hideLogout = this.loginService.getIsUserLoggedIn();
        }
    }

    logoutUser() {
        this.router.navigate(['']);
    }
}

