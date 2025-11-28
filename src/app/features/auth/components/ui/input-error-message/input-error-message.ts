import { Component, Input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-error-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-error-message.html',
  styleUrl: './input-error-message.scss',
})
export class InputErrorMessage {
  
  @Input() control!: AbstractControl | null;

  get showError(): boolean {
    return !!this.control && this.control.touched && this.control.invalid;
  }

  get errorMessage(): string {
    if (!this.control || !this.control.errors) return '';

    const errors = this.control.errors;

    if (errors['required']) return 'This field is required';
    if (errors['email']) return 'Please enter a valid email address';
    if (errors['minlength'])
      return `Minimum length is ${errors['minlength'].requiredLength}`;
    if (errors['maxlength'])
      return `Maximum length is ${errors['maxlength'].requiredLength}`;
    if (errors['pattern'])
      return 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character';
    if (errors['mismatch'])
      return 'Password confirmation is incorrect';

    return 'Invalid value';
  }
}
