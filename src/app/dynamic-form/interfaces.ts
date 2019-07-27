import {ValidatorFn} from "@angular/forms";

export interface DynamicFormSettings {
  [key: string]: DynamicFormItem;
}

export interface DynamicFormItem {
  type: string;
  label: string;
  validators?: ValidatorFn[];
  default?: any;
  icon?: string;
  options?: { key: string, value: any }[];
}
