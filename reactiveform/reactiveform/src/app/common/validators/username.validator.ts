import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "path";

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true }
      // key, value - the value can be an object, here it is only true.
    return null;
  }

  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
    // simulate call to a service
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('ok');
        if (control.value === 'mosh')
          resolve ({ shouldBeUnique: true });
        else
          resolve(null);
      }, 2000);
    });
  }
}
