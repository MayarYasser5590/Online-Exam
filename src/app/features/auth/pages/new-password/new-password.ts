import { Component, inject } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';
import { AuthFlow } from '../../services/auth-flow';

@Component({
  selector: 'app-new-password',
  imports: [Header, MainButton, RouterLink, ReactiveFormsModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss',
})
export class NewPassword {
   router = inject(Router);
  authFlow = inject(AuthFlow);
  resetPassForm: FormGroup = new FormGroup({
    password: new FormControl(null),
    repassword: new FormControl(null),
 })

  ngOnInit() {
  if (!this.authFlow.isFlowActive() || !this.authFlow.isVerified()) {
    this.router.navigate(['/verifyOTP']);
  }
}

 submitResetPassForm(){
  console.log(this.resetPassForm.value);
  this.authFlow.endFlow();
  this.router.navigate(['/login']);
  
 }
}
