import { Component } from '@angular/core';
import { Header } from "../shared/components/ui/header/header";
import { MainButton } from "../../../shared/components/UI/main-button/main-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-password',
  imports: [Header, MainButton, RouterLink],
  templateUrl: './new-password.html',
  styleUrl: './new-password.scss',
})
export class NewPassword {

}
