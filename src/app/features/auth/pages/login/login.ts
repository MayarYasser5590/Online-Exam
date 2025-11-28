import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule ,FormControl, FormGroup, Validators } from '@angular/forms';
import { Header } from '../../components/ui/header/header';
import { HttpErrorResponse } from '@angular/common/http';
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";
import { Subscription } from 'rxjs';
import { AuthFooterComponent } from "../../components/ui/auth-footer/auth-footer";
import { PASSWORD_PATTERN } from '../../components/business/pass-regex';

@Component({
  selector: 'app-login',
  imports: [RouterLink, Header, ReactiveFormsModule, InputErrorMessage, ErrorResponseMsg, AuthFooterComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  msgError: string = '';
  isLoading = false;
  loginSubscribe : Subscription = new Subscription();

loginForm: FormGroup = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(PASSWORD_PATTERN)])
 })

 submitLoginForm(){   
   if (this.loginForm.valid) {
    this.isLoading = true;
   this.loginSubscribe = this.authService.signIn(this.loginForm.value).subscribe({
      next: (res) => {
            if (res.token) {
  localStorage.setItem('token', res.token);
} else {
  console.warn('No token');
}
    if(res.message === 'success'){
      // this.router.navigate(['/home']);
    }
    this.isLoading = false;
      },
      error: (err : HttpErrorResponse) => {
        this.isLoading = false;
        this.msgError = err.error.message;
      }
    });
  }else{
        this.loginForm.markAllAsTouched();
  }
 }

 ngOnDestroy(): void {
     this.loginSubscribe.unsubscribe()
 }
}
