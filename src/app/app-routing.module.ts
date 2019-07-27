import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './core/guards/auth-guard.service';


const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)},
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)},
  {path: 'search', loadChildren: () => import('./pages/search-results/search-results.module').then(mod => mod.SearchResultsModule)},
  {path: 'register', loadChildren: () => import('./pages/register/register.module').then(mod => mod.RegisterModule)},
  {
    path: 'search-results',
    loadChildren: () => import('./pages/search-results/search-results.module').then(mod => mod.SearchResultsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
