import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { EmailService } from '../../services/email';
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";
import { Subscription } from 'rxjs';
import { AuthFooterComponent } from "../../components/ui/auth-footer/auth-footer";
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [Header, ReactiveFormsModule, RouterLink, ErrorResponseMsg, AuthFooterComponent , InputOtpModule],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOTP implements OnInit , OnDestroy {
  @Output() verified = new EventEmitter<void>();

  private readonly emailService = inject(EmailService);
  private readonly authService = inject(AuthService);
  email: string | null = null;
  msgError: string = '';
  isLoading = false;
  VerifyCodeSubscribe : Subscription = new Subscription();
    resendSubscribe: Subscription = new Subscription();
  resendSuccess = false;
  disableResend = false;
  countdown = 0;
  intervalId: any;




  ngOnInit(): void {
this.email = this.emailService.getEmail();
  }


  otpForm = new FormGroup({
  otp: new FormControl('')
});


submitOtpForm() {
  if (this.otpForm.valid) {
    const resetCode = this.otpForm.value.otp;
    this.isLoading = true;

    this.VerifyCodeSubscribe = this.authService
      .verifyResetCode({ resetCode })
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.verified.emit();
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.msgError = err.error.message;
        }
      });
  }
}


startCountdown(seconds: number) {
  this.countdown = seconds;

  this.intervalId = setInterval(() => {
    this.countdown--;

    if (this.countdown === 0) {
      this.disableResend = false;
      clearInterval(this.intervalId);
    }
  }, 1000);
}



resendOtp() {
  if (!this.email || this.disableResend) return;

  this.msgError = '';
  this.resendSuccess = false;
  this.disableResend = true;

  this.startCountdown(30);

  this.resendSubscribe = this.authService
    .forgotPassword({ email: this.email })
    .subscribe({
      next: () => {
        this.resendSuccess = true;
      },
      error: (err: HttpErrorResponse) => {
        this.msgError = err.error.message;
      }
    });
}



 ngOnDestroy(): void {
  this.VerifyCodeSubscribe.unsubscribe();
  this.resendSubscribe.unsubscribe();
  clearInterval(this.intervalId);
}

}
