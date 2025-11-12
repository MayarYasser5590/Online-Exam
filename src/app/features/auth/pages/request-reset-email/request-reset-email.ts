import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../components/ui/header/header';
import { MainButton } from '../../../../shared/components/UI/main-button/main-button';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-request-reset-email',
  standalone: true,
  imports: [Header, MainButton, ReactiveFormsModule, RouterLink],
  templateUrl: './request-reset-email.html',
  styleUrl: './request-reset-email.scss',
})
export class RequestResetEmail {
  @Output() continue = new EventEmitter<void>();

  forgetPassForm = new FormGroup({
    email: new FormControl(null),
  });

  submitForgetPassForm() {
    if (this.forgetPassForm.valid) {
      this.continue.emit(); 
    } else {
      console.log('Please enter a valid email');
    }
  }
}
