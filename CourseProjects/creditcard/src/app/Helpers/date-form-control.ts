import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (
      this.value.length === 2 &&
      !this.value.includes(`/`) &&
      value.length > 2
    ) {
      super.setValue(value.slice(0, 2) + `/` + value[2], {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 2) {
      // we should make sure, that we are invoking original setValue()-method after some code in our overrided version
      super.setValue(value + `/`, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
