import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-register',
  imports: [Header, MainButton, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
