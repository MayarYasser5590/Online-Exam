import { AuthService } from './../../../../../../projects/auth/src/lib/auth.service';
import { Component, inject, OnDestroy } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { Router, RouterLink} from "@angular/router";
import { ReactiveFormsModule ,FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";
import { Subscription } from 'rxjs';
import { AuthFooterComponent } from "../../components/ui/auth-footer/auth-footer";
import { PASSWORD_PATTERN } from '../../components/business/pass-regex';
@Component({
  selector: 'app-register',
  imports: [Header, ReactiveFormsModule, RouterLink , InputErrorMessage, ErrorResponseMsg, AuthFooterComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnDestroy {
   private readonly authService = inject(AuthService);
   private readonly router = inject(Router);
   isLoading : boolean = false;
   msgError : string = ""
   registerSubscribe : Subscription = new Subscription();

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null , [Validators.required , Validators.minLength(3) ]),
    lastName: new FormControl(null , [Validators.required , Validators.minLength(3)]),
    username: new FormControl(null , [Validators.required , Validators.minLength(3)]),
    email: new FormControl(null , [Validators.required ,Validators.email]),
    phone: new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password: new FormControl(null , [Validators.required , Validators.pattern(PASSWORD_PATTERN)]),
    rePassword: new FormControl(null , [Validators.required]),
 } , {validators : this.confirmPassword})

confirmPassword(group: AbstractControl) {
  const password = group.get('password');
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
 submitRegisterForm(){
  if (this.registerForm.valid) {
    this.isLoading = true;
   this.registerSubscribe = this.authService.signUp(this.registerForm.value).subscribe({
      next: (res) => {
    if(res.message === 'success'){
      this.router.navigate(['/login']);
    }
    this.isLoading = false;
    console.log(res);
      },
      error: (err : HttpErrorResponse) => {
        this.isLoading = false;
        console.log(err.error.message);
        this.msgError = err.error.message;
      }
    });
  }else{
        this.registerForm.markAllAsTouched();
  }
}

 ngOnDestroy(): void {
    this.registerSubscribe.unsubscribe()
 }
}