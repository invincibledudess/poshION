import {Component} from '@angular/core';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  showAllOrders = false;
  constructor() {}

  toggleOrderStatusVisibility() {
    this.showAllOrders = !this.showAllOrders;
    console.log(this.showAllOrders);
  }
}
