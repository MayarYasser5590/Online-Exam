import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule, RouterLink, InputErrorMessage, ErrorResponseMsg],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  @Output() done = new EventEmitter<void>();
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);
    msgError: string = '';
    isLoading = false;

  resetPassForm = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email]),
    newPassword: new FormControl(null , [Validators.required , Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  });

  submitResetPassForm() {

    if (this.resetPassForm.valid) {
    this.isLoading = true;
    this.authService.resetPassword(this.resetPassForm.value).subscribe({
      next: (res) => {
        if(res.message === 'success'){
         this.router.navigate(['/login']);
         console.log(res);
         
    }
      this.isLoading = false;
      },
      error: (err : HttpErrorResponse) => {
        this.isLoading = false;
        this.msgError = err.error.message;
        console.log(err.error.message);
        
      }
    });
  }else{
        this.resetPassForm.markAllAsTouched();
  }

  }
}
