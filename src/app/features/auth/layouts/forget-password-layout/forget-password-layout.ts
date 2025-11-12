import { Component } from '@angular/core';
import { RequestResetEmail } from "../../pages/request-reset-email/request-reset-email";
import { VerifyOTP } from "../../pages/verify-otp/verify-otp";
import { ResetPassword } from "../../pages/reset-password/reset-password";

@Component({
  selector: 'app-forget-password-layout',
  standalone: true,
  imports: [VerifyOTP, ResetPassword, RequestResetEmail],
  templateUrl: './forget-password-layout.html',
  styleUrl: './forget-password-layout.scss',
})
export class ForgetPasswordLayout {
  currentStep: 'email' | 'verify' | 'reset' = 'email';

  continue() {
    this.currentStep = 'verify';
  }

  verified() {
  this.currentStep = 'reset'; 
}


  done() {
    this.currentStep = 'email';
  }
}
