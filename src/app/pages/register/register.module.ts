import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register/register.component';
import {TabViewModule} from 'primeng/primeng';
import {DynamicFormModule} from '../../dynamic-form/dynamic-form.module';
import {CardModule} from 'primeng/card';
import {SharedModule} from '../../shared/shared.module';
import {UserModule} from '../../features/user/user.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DynamicFormModule,
    CardModule,
    SharedModule,
    UserModule
  ]
})
export class RegisterModule {
}
