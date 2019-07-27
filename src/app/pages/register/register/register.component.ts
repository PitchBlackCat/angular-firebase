import {Component, OnInit} from '@angular/core';
import {DynamicFormSettings} from "../../../dynamic-form/interfaces";
import {FormGroup, Validators} from "@angular/forms";
import {UserService} from '../../../features/user/services/user.service';
import {MyValidators} from '../../../shared/MyValidators';
import {Destroyable} from '../../../shared/Destroyable';
import {distinctUntilChanged, map, takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends Destroyable implements OnInit {

  public formSettings: DynamicFormSettings = {
    username: {label: 'username', type: 'text', validators: [Validators.required]},
    email: {label: 'email', type: 'email', validators: [Validators.required, Validators.email]},
    password: {label: 'password', type: 'password', validators: [Validators.required]},
    password2: {
      label: 'password2',
      type: 'password',
      validators: [Validators.required, MyValidators.equalsField('password')]
    }
  };

  public form: FormGroup;

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
    this.userService.register(value.email, value.password);
  }

  loginWithGoogle() {
    this.userService.loginWithGoogle();
  }
}
