import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuyerDashboardComponent} from './buyer-dashboard/buyer-dashboard.component';
import {SellerDashboardComponent} from './seller-dashboard/seller-dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'account'},
  {path: 'account', component: BuyerDashboardComponent},
  {path: 'seller', component: SellerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
