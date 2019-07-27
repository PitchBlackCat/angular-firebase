import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {DynamicFormSettings} from "../interfaces";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReplaySubject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @ViewChild('container', {read: ViewContainerRef, static: true}) container;
  @Input() public settings: DynamicFormSettings;
  public form$: ReplaySubject<FormGroup> = new ReplaySubject<FormGroup>(1);
  private destroy$: EventEmitter<void> = new EventEmitter<void>();
  @Output() public readonly form = this.form$.pipe(
    takeUntil(this.destroy$)
  );

  constructor(private fb: FormBuilder) {
  }

  ngOnDestroy(): void {
    this.destroy$.emit();
  }

  ngOnInit() {
    this.parseSettings();
  }

  private parseSettings() {
    if (!this.settings)
      return;

    const groupSettings = {};
    for (const key of Object.keys(this.settings)) {
      const item = this.settings[key];
      groupSettings[key] = [item.default || null, item.validators || []];
    }
    const group = this.fb.group(groupSettings);
    this.form$.next(group);
  }
}
