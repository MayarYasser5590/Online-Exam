import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../../../../../projects/auth/src/public-api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

    @Output() continue = new EventEmitter<void>();
  private readonly authService = inject(AuthService)

  isLoading = false;
  msgError = '';

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.authService.getLoggedUserInfo().subscribe({
      next: (res) => {

        this.profileForm.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          username: res.username,
          email: res.email,
          phone: res.phone
        });
      },
      error: (err: HttpErrorResponse) => {
        this.msgError = err.error.message;
        console.log(this.msgError);
        
      }
    });
  }

  submitProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.authService.editProfile(this.profileForm.value).subscribe({
      next: (res) => {
        console.log('Updated:', res);
      },
      error: (err: HttpErrorResponse) => {
        this.msgError = err.error.message;
        console.log(this.msgError);
        
      }
    })
  }
}
