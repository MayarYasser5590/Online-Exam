import { AfterViewInit, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { EmailService } from '../../services/email';
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule, RouterLink, ErrorResponseMsg],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOTP implements OnInit {
  @Output() verified = new EventEmitter<void>();

  private readonly emailService = inject(EmailService);
  private readonly authService = inject(AuthService);
  email: string | null = null;
  msgError: string = '';
  isLoading = false;

  ngOnInit(): void {
    this.email = this.emailService.email;
  }

  ngAfterViewInit(): void {
  setTimeout(() => {
    initFlowbite();
  });
}

  otpForm = new FormGroup({
    digit1: new FormControl(''),
    digit2: new FormControl(''),
    digit3: new FormControl(''),
    digit4: new FormControl(''),
    digit5: new FormControl(''),
    digit6: new FormControl(''),
  });

 submitOtpForm() {
  if (this.otpForm.valid) {
    const resetCode = Object.values(this.otpForm.value).join("");
    this.isLoading = true;

    this.authService.verifyResetCode({resetCode}).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.verified.emit(); 
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.msgError = err.error.message;
        console.log("SERVER ERROR:", err.error.message);
      }
    });
  }
}


}
