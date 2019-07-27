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
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {UserModule} from '../features/user/user.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';

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
    LaddaModule,
    AngularFirestoreModule,
    UserModule
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
