import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../features/user/services/user.service';
import {FormGroup, Validators} from '@angular/forms';
import {DynamicFormSettings} from '../../../dynamic-form/interfaces';
import {Destroyable} from '../../../shared/Destroyable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Destroyable implements OnInit {

  public formSettings: DynamicFormSettings = {
    email: {label: 'email', type: 'email', validators: [Validators.required, Validators.email]},
    password: {label: 'password', type: 'password', validators: [Validators.required]}
  };

  public form: FormGroup;
  public loading = false;

  constructor(private userService: UserService) {
    super();
  }


  ngOnInit() {

  }

  submit() {
    for (const control in this.form.controls) {
      this.form.controls[control].updateValueAndValidity();
    }

    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    this.loading = true;
    this.userService.login(value.email, value.password).then(
      () => this.loading = false,
      () => this.loading = false
    );
  }

  loginWithGoogle() {
    this.loading = true;
    this.userService.loginWithGoogle().then(
      () => this.loading = false,
      () => this.loading = false
    );
  }

}
