import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../features/user/services/user.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
