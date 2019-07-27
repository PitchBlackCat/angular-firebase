import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from '../../../features/user/services/user.service';
import {FormGroup, Validators} from '@angular/forms';
import {DynamicFormSettings} from '../../../dynamic-form/interfaces';
import {Printer, PrinterService} from '../../../shared/services/http/printer.service';
import {Observable} from 'rxjs/index';
import {delay, takeUntil, tap} from 'rxjs/internal/operators';
import {Destroyable} from '../../../shared/Destroyable';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent extends Destroyable implements OnInit {

  public form: FormGroup;
  public loading = false;
  public printers$: Observable<Printer[]>;

  public printerSettings: DynamicFormSettings = {
    name: {label: 'name', type: 'text', default: 'Mijn printer', validators: [Validators.required]},
    width: {label: 'max width', type: 'number', default: 200, validators: [Validators.required]},
    height: {label: 'max height', type: 'number', default: 200, validators: [Validators.required]},
    depth: {label: 'max depth', type: 'number', default: 200, validators: [Validators.required]},
    nozzle_sizes: {label: 'nozzle sizes', default: '', type: 'text', validators: []},
    materials: {label: 'materials', default: '', type: 'text', validators: []}
  };

  constructor(public userService: UserService, public printerService: PrinterService, private ref: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.printers$ = this.printerService.getMyPrinters().pipe(
      takeUntil(this.destroy$),
    );

    this.printers$.pipe(delay(100))
      .subscribe(() => this.ref.detectChanges());
  }

  addPrinter() {
    for (const control in this.form.controls) {
      this.form.controls[control].updateValueAndValidity();
    }

    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    this.loading = true;
    this.printerService.addPrinter({
      name: value.name,
      height: value.height,
      width: value.width,
      depth: value.depth
    }).then(
      () => this.loading = false,
      () => this.loading = false
    );
  }

  delete(printer: Printer) {
    this.loading = true;
    this.printerService.deletePrinter(printer.$key).then(() => this.loading = false);
  }

}
