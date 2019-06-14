import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonsComponent} from "./lessons/lessons.component";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Login } from './login/login.component';

 const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'menu',
        component: UserDashboardComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
