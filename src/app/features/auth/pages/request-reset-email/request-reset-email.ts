import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";
import { EmailService } from '../../services/email';

@Component({
  selector: 'app-request-reset-email',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule, RouterLink, InputErrorMessage, ErrorResponseMsg],
  templateUrl: './request-reset-email.html',
  styleUrl: './request-reset-email.scss',
})
export class RequestResetEmail{
  @Output() continue = new EventEmitter<void>();
  private readonly authService = inject(AuthService);
  private readonly emailService = inject(EmailService)
  msgError: string = '';
  isLoading = false;

  forgetPassForm = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email]),
  });

  submitForgetPassForm() {
    if (this.forgetPassForm.valid) {
    this.isLoading = true;
    const email: string = this.forgetPassForm.get('email')?.value ?? '';
    this.emailService.email = email;
    this.authService.forgotPassword(this.forgetPassForm.value).subscribe({
      next: (res) => {
            this.isLoading = false;
         if(res.message === 'success'){
            this.continue.emit(); 
                }
      },
      error: (err : HttpErrorResponse) => {
        this.isLoading = false;
        this.msgError = err.error.message;
      }
    });
  }
  }

}
