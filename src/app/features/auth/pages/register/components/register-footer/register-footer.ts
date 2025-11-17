import { Component, input } from '@angular/core';
import { MainButton } from "../../../../../../shared/components/UI/main-button/main-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-footer',
  imports: [MainButton , RouterLink],
  templateUrl: './register-footer.html',
  styleUrl: './register-footer.scss',
})
export class RegisterFooter {
    isLoading = input<boolean>(false); // 👈 Signal Input
}
