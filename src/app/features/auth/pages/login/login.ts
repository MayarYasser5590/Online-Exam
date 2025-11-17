import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule ,FormControl, FormGroup, Validators } from '@angular/forms';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { Header } from '../../components/ui/header/header';
import { HttpErrorResponse } from '@angular/common/http';
import { InputErrorMessage } from "../../components/ui/input-error-message/input-error-message";
import { ErrorResponseMsg } from "../../components/ui/error-response-msg/error-response-msg";

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainButton, Header, ReactiveFormsModule, InputErrorMessage, ErrorResponseMsg],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  msgError: string = '';
  isLoading = false;

loginForm: FormGroup = new FormGroup({
    email: new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required])
 })

 submitLoginForm(){   
   if (this.loginForm.valid) {
    this.isLoading = true;
    this.authService.signIn(this.loginForm.value).subscribe({
      next: (res) => {
        
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
}
