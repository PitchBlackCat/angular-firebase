import {Component, OnInit} from '@angular/core';
import {DynamicFormSettings} from '../../../../dynamic-form/interfaces';
import {FormGroup, Validators} from '@angular/forms';
import {Destroyable} from '../../../Destroyable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.sass']
})
export class SearchCardComponent extends Destroyable implements OnInit {

  public loading: boolean = false;
  public formSettings: DynamicFormSettings = {
    width: {label: 'width', type: 'number', default: 200, validators: [Validators.required]},
    height: {label: 'height', type: 'number', default: 200, validators: [Validators.required]},
    depth: {label: 'depth', type: 'number', default: 200, validators: [Validators.required]},
    color: {label: 'color', type: 'text', default: 'white', validators: [Validators.required]},
    nozzle_size: {label: 'nozzle_size', default: '', type: 'text', validators: []},
    amount: {label: 'amount', type: 'number', default: 1, validators: [Validators.required]},
    eta: {label: 'eta', type: 'text', default: '', validators: []}
  };

  public form: FormGroup;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
  }

  submit() {
    for (const control in this.form.controls) {
      this.form.controls[control].updateValueAndValidity();
    }

    if (this.form.invalid)
      return;

    this.loading = false;
    const value = this.form.getRawValue();
    this.router.navigate(['search'], {queryParams: value});
  }
}
