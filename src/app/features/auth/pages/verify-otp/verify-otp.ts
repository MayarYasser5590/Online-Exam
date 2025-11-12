import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule , RouterLink],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOTP {
  @Output() verified = new EventEmitter<void>();

  otpForm = new FormGroup({
    digit1: new FormControl(''),
    digit2: new FormControl(''),
    digit3: new FormControl(''),
    digit4: new FormControl(''),
    digit5: new FormControl(''),
    digit6: new FormControl(''),
  });

  submitOtpForm() {
  const otp = Object.values(this.otpForm.value).join('');
  if (otp.length === 6) {
    this.verified.emit(); 
  } else {
    console.log('Invalid OTP');
  }
}

}
