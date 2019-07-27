import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuyerDashboardComponent} from './buyer-dashboard/buyer-dashboard.component';
import {SellerDashboardComponent} from './seller-dashboard/seller-dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {UserModule} from '../../features/user/user.module';
import {DynamicFormModule} from '../../dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [BuyerDashboardComponent, SellerDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    UserModule,
    DynamicFormModule
  ]
})
export class DashboardModule {
}
