import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../../../../../projects/auth/src/public-api';
import { ErrorResponseMsg } from "../../../../auth/components/ui/error-response-msg/error-response-msg";
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorResponseMsg],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit , OnDestroy {

    @Output() continue = new EventEmitter<void>();
  private readonly authService = inject(AuthService)

  isLoading : boolean = false;
  msgError : string = '';
  isSuccess :string = ''
  private readonly router = inject(Router);
  userDataSubscribe : Subscription = new Subscription();
  editProfileSubscribe : Subscription = new Subscription();
  deleteAccountSubscribe : Subscription = new Subscription();

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    initFlowbite();
    this.loadUserData();
  }

  loadUserData() {
    this.userDataSubscribe = this.authService.getLoggedUserInfo().subscribe({
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
        this.msgError = "Failed ... Try Again Later";        
      }
    });
  }

  submitProfile() {
        this.isLoading = true;
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.editProfile();
  }

  deleteMyAccount(){
   this.deleteAccountSubscribe = this.authService.deleteMyAccount().subscribe({
      next:(res)=>{
            localStorage.removeItem('token');
           this.router.navigate(['/login']);
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }

  editProfile(){
  this.editProfileSubscribe = this.authService.editProfile(this.profileForm.value).subscribe({
      next: (res) => {
        if(res.message === 'success'){

         this.isSuccess = "Changes saved successfully.";
        }
                this.isLoading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.msgError = 'failed .. please try again later';
        this.isLoading = false;
      }
    })
}
 ngOnDestroy(): void {
    this.userDataSubscribe.unsubscribe()
    this.editProfileSubscribe.unsubscribe()
    this.deleteAccountSubscribe.unsubscribe()

 }
}
