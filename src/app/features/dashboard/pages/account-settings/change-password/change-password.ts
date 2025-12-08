import { HttpErrorResponse } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../../auth/components/business/confirm-password.validator';
import { PASSWORD_PATTERN } from '../../../../auth/components/business/pass-regex';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../../projects/auth/src/public-api';
import { InputErrorMessage } from "../../../../auth/components/ui/input-error-message/input-error-message";
import { ErrorResponseMsg } from "../../../../auth/components/ui/error-response-msg/error-response-msg";
import { AuthFooterComponent } from "../../../../auth/components/ui/auth-footer/auth-footer";

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, InputErrorMessage, ErrorResponseMsg, AuthFooterComponent],
  templateUrl: './change-password.html',
  styleUrl: './change-password.scss',
})
export class ChangePassword {
    private readonly authService = inject(AuthService);
    msgError: string = '';
    isLoading = false;
    isSuccess :string = ''
    private readonly router = inject(Router);
    changePassSubscribe : Subscription = new Subscription();


  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(null  , [Validators.required , Validators.pattern(PASSWORD_PATTERN)]),
    password: new FormControl(null  , [Validators.required , Validators.pattern(PASSWORD_PATTERN)]),
    rePassword: new FormControl(null , [Validators.required]),
  }, {validators: confirmPasswordValidator('password', 'rePassword')});


  submitChangePassForm() {

    if (this.changePasswordForm.valid) {
    this.isLoading = true;
    this.changePassSubscribe = this.authService.changePassword(this.changePasswordForm.value).subscribe({
      next: (res) => {
        if(res.message === 'success'){
         console.log(res);
         this.isSuccess = "Password changed successfully. Please log in again.";
         if (res.token) {
            localStorage.removeItem('token');
          }
        setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
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
        this.changePasswordForm.markAllAsTouched();
  }
  }

   ngOnDestroy(): void {
     this.changePassSubscribe.unsubscribe()
 }

}
