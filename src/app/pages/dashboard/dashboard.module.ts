import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuyerDashboardComponent} from './buyer-dashboard/buyer-dashboard.component';
import {SellerDashboardComponent} from './seller-dashboard/seller-dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';


@NgModule({
  declarations: [BuyerDashboardComponent, SellerDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
