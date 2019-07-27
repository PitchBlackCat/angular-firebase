import {FormControl} from '@angular/forms';

export class MyValidators {
  public static equalsField(other: string) {
    return (control: FormControl) => {
      {
        const isEmpty = !control.value;
        const equals = control.parent && control.value === control.parent.controls[other].value;
        if (isEmpty || equals) {
          return null;
        }

        return {equals: false};
      }
    };
  }
}
