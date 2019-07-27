import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {SearchCardComponent} from './components/cards/search-card/search-card.component';
import {CardModule} from "primeng/card";

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
    SharedRoutingModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    ButtonModule,
    MenuModule,
    MenubarModule,
    CardModule,
    ...components
  ]
})
export class SharedModule {
}
