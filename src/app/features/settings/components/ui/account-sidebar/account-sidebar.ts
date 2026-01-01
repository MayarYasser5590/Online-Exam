import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../../../../projects/auth/src/public-api';
import { Subscription } from 'rxjs';
import { AccountSidebarAction } from "../account-sidebar-action/account-sidebar-action";

type AccountStep = 'profile' | 'changePass';
@Component({
  selector: 'app-account-sidebar',
  imports: [AccountSidebarAction],
  templateUrl: './account-sidebar.html',
  styleUrl: './account-sidebar.scss',
})
export class AccountSidebar implements OnDestroy {
  private readonly router = inject(Router);
  readonly authService = inject(AuthService);
  logOutSubscribe : Subscription = new Subscription();


@Input() currentStep!: AccountStep;

@Output() changeStep = new EventEmitter<AccountStep>();

go(step: AccountStep) {
  this.changeStep.emit(step);
}

  logOut(){
    this.logOutSubscribe = this.authService.logOut().subscribe({
      next:(res)=>{
           if(res.message === 'success'){
          localStorage.removeItem('token');
          this.router.navigate(['/login']);

      }
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
