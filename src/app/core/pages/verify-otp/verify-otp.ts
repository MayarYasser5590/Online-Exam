import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { RouterLink } from "@angular/router";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";

@Component({
  selector: 'app-verify-otp',
  imports: [Header, RouterLink, MainButton],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOTP {

}
