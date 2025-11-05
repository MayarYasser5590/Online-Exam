import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  imports: [Header, MainButton, RouterLink, ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {
forgetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null),
 })

 submitForgetPassForm(){
  console.log(this.forgetPassForm.value);
  
 }
}
