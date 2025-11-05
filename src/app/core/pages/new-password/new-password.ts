import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule ,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  imports: [Header, MainButton, RouterLink, ReactiveFormsModule],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss',
})
export class NewPassword {
resetPassForm: FormGroup = new FormGroup({
    password: new FormControl(null),
    repassword: new FormControl(null),
 })

 submitResetPassForm(){
  console.log(this.resetPassForm.value);
  
 }
}
