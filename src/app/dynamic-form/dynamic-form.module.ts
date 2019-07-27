import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule, PasswordModule} from "primeng/primeng";


@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {
}
