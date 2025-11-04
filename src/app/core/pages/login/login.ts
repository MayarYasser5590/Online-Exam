import { Component } from '@angular/core';
import { AuthLayout } from "../../layout/auth-layout/auth-layout";
import { RouterLink } from '@angular/router';
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { Header } from "../shared/components/ui/header/header";

@Component({
  selector: 'app-login',
  imports: [RouterLink, MainButton, Header],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
