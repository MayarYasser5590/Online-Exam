import { Component, inject, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../../../../../../projects/auth/src/lib/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog',
  imports: [DialogModule , ButtonModule],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog implements OnDestroy {
  showDeleteDialog = false;
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router);

  deleteAccountSubscribe : Subscription = new Subscription();

  open() {
    this.showDeleteDialog = true;
  }

  close() {
    this.showDeleteDialog = false;
  }

  deleteMyAccount() {
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
   ngOnDestroy(): void {
    this.deleteAccountSubscribe.unsubscribe()
 }
}
