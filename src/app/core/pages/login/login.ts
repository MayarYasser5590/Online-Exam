import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { Header } from "../shared/components/ui/header/header";
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainButton, Header , ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
 })

 submitLoginForm(){
  console.log(this.loginForm.value);
  
 }
}
