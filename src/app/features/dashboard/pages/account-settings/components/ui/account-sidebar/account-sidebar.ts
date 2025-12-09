import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../../../../../../projects/auth/src/lib/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-sidebar',
  imports: [],
  templateUrl: './account-sidebar.html',
  styleUrl: './account-sidebar.scss',
})
export class AccountSidebar implements OnDestroy {
  private readonly router = inject(Router);
  readonly authService = inject(AuthService);
  logOutSubscribe : Subscription = new Subscription();


@Input() currentStep!: 'profile' | 'changePass';

@Output() changeStep = new EventEmitter<'profile' | 'changePass'>();

go(step: 'profile' | 'changePass') {
  this.changeStep.emit(step);
}

  logOut(){
    this.logOutSubscribe = this.authService.logOut().subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err) =>{
        console.log(err);
        
      }
    })
  }

   ngOnDestroy(): void {
     this.logOutSubscribe.unsubscribe()
 }
}
