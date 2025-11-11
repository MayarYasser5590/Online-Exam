import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ReactiveFormsModule ,FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { AuthFlow } from '../../services/auth-flow';

@Component({
  selector: 'app-forget-password',
  imports: [Header, MainButton, RouterLink, ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
  router = inject(Router);
  flowService = inject(AuthFlow);
  forgetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null),
 })

 submitForgetPassForm(){
  console.log(this.forgetPassForm.value);
    if (this.forgetPassForm.valid) {
      this.flowService.startFlow();           
      this.router.navigate(['/verifyOTP']);  
    } else {
      console.log('Please enter a valid email');
    }
  }

 }

