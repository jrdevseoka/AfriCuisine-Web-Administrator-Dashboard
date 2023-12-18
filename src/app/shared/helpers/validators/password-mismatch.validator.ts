import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
  static passwordMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value
    const confirmPassword = control.get('confirmpassword')?.value
    return password === confirmPassword ? null : { 'passwordMismatch': true }
  }
}
