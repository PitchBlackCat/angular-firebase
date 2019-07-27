import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from '../../features/user/services/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
