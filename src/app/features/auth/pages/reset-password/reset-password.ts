import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";
import { Subscription } from 'rxjs';
import { AuthFooterComponent } from "../../components/ui/auth-footer/auth-footer";
import { PASSWORD_PATTERN } from '../../components/business/pass-regex';
import { EmailService } from '../../services/email';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [Header, ReactiveFormsModule, RouterLink, InputErrorMessage, ErrorResponseMsg, AuthFooterComponent],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword implements OnDestroy {
  @Output() done = new EventEmitter<void>();
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);
    msgError: string = '';
    isLoading = false;
    private readonly emailService = inject(EmailService);
    email: string | null = null;
    resetPassSubscribe : Subscription = new Subscription();


ngOnInit() {
  this.email = this.emailService.getEmail();
}


  resetPassForm = new FormGroup({
    newPassword: new FormControl(null  , [Validators.required , Validators.pattern(PASSWORD_PATTERN)]),
    rePassword: new FormControl(null , [Validators.required]),
  }, {validators : this.confirmPassword});

confirmPassword(group: AbstractControl) {
  const password = group.get('newPassword');
  const rePassword = group.get('rePassword');

  if (!password || !rePassword) return null;

  if (rePassword.value !== password.value) {
    rePassword.setErrors({ mismatch: true });
    return { mismatch: true };
  } else {
    if (rePassword.errors) {
      delete rePassword.errors['mismatch'];
      if (Object.keys(rePassword.errors).length === 0) {
        rePassword.setErrors(null);
      }
    }
    return null;
  }
}

  submitResetPassForm() {

    if (this.resetPassForm.valid) {
    this.isLoading = true;
    const payload = {
    email: this.email,
    newPassword: this.resetPassForm.get('newPassword')?.value!
  };
    this.resetPassSubscribe = this.authService.resetPassword(payload).subscribe({
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

   ngOnDestroy(): void {
     this.resetPassSubscribe.unsubscribe()
 }
}
