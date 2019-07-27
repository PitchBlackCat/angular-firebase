import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {UserModule} from '../features/user/user.module';
import {AuthGuardService} from './guards/auth-guard.service';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthGuardService]
})
export class CoreModule {

}
