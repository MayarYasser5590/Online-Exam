import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { Router, RouterLink } from '@angular/router';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { AuthFlow } from '../../services/auth-flow';
import { FormControl, FormGroup , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verify-otp',
  imports: [Header, RouterLink, MainButton , ReactiveFormsModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOTP implements OnInit {
  router = inject(Router);
  authFlow = inject(AuthFlow);

  otpForm: FormGroup = new FormGroup({
    digit1: new FormControl(''),
    digit2: new FormControl(''),
    digit3: new FormControl(''),
    digit4: new FormControl(''),
    digit5: new FormControl(''),
    digit6: new FormControl(''),
  });

  ngOnInit() {
    if (!this.authFlow.isFlowActive()) {
      this.router.navigate(['/forgetPassword']);
    }
  }

  submitOtpForm() {

      this.authFlow.markVerified();
      this.router.navigate(['/resetPassword']);
      console.log('Please enter a valid 6-digit OTP');
}
  }
