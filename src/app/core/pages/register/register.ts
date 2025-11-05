import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [Header, MainButton, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    userName: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    password: new FormControl(null),
    repassword: new FormControl(null),
 })

 submitRegisterForm(){
  console.log(this.registerForm.value);
  
 }
}
