import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(
  controlName: string,
  matchControlName: string
) {
  return (group: AbstractControl): ValidationErrors | null => {

    const password = group.get(controlName);
    const rePassword = group.get(matchControlName);

    if (!password || !rePassword) return null;

    if (rePassword.value !== password.value) {
      rePassword.setErrors({ mismatch: true });
      return { mismatch: true };
    } else {
      if (rePassword.errors) {
        delete rePassword.errors['mismatch'];
        if (Object.keys(rePassword.errors).length === 0) {
          rePassword.setErrors(null);
        }
      }
      return null;
    }
  };
}
