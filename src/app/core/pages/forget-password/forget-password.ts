import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forget-password',
  imports: [Header, MainButton, RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.scss',
})
export class ForgetPassword {

}
