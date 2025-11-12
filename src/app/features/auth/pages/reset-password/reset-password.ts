import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  @Output() done = new EventEmitter<void>();
  router = inject(Router);

  resetPassForm = new FormGroup({
    password: new FormControl(null),
    repassword: new FormControl(null),
  });

  submitResetPassForm() {
      this.done.emit(); 
      this.router.navigate(['/login']);

  }
}
