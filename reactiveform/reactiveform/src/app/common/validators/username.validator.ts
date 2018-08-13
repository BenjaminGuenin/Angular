import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true }
      // key, value - the value can be an object, here it is only true.
    return null;
  }
}
