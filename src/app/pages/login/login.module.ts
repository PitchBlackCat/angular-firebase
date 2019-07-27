import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../../shared/shared.module';
import {UserModule} from '../../features/user/user.module';
import {CardModule} from 'primeng/card';
import {DynamicFormModule} from '../../dynamic-form/dynamic-form.module';
import {ProgressSpinnerModule} from 'primeng/primeng';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DynamicFormModule,
    CardModule,
    SharedModule,
    UserModule,
    ProgressSpinnerModule,
  ]
})
export class LoginModule { }
