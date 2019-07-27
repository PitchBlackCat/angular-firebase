import {Component, OnInit} from '@angular/core';
import {UserService} from '../../features/user/services/user.service';
import {User} from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public collapsed = true;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.userService.logout();
  }
}
