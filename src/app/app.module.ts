import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LessonsComponent} from './lessons/lessons.component';

import {LessonsService} from "./services/lessons.service";
import {ReactiveFormsModule} from "@angular/forms";

import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';



import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing.module";
import {NewsletterService} from "./services/newsletter.service";
import {MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Login } from './login/login.component';
import { LoginService } from './login/login.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard';


@NgModule({
    declarations: [
        AppComponent,
        LessonsComponent,
        UserDashboardComponent,
        AdminDashboardComponent,
        Login
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        LessonsService,
        NewsletterService,
        LoginService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
