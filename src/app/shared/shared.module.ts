import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {SearchCardComponent} from './components/cards/search-card/search-card.component';
import {CardModule} from 'primeng/card';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import {RouterModule} from '@angular/router';
import {ProgressSpinnerModule} from 'primeng/primeng';
import {LaddaModule} from 'angular2-ladda';

const cards = [
  SearchCardComponent
];

const components = [
  ...cards
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    DynamicFormModule,
    ProgressSpinnerModule,
    LaddaModule
  ],
  exports: [
    ButtonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    LaddaModule,
    ...components
  ]
})
export class SharedModule {
}
