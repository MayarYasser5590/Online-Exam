import { Component, AfterViewInit, inject, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { AuthModel } from '../../../../../../projects/auth/src/lib/interfaces/AuthModel';
import { Subscription } from 'rxjs';
import { SidebarLink } from "../../shared/sidebar-link/sidebar-link";
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarLink , RouterLink , MenuModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit , OnDestroy {
  readonly authService = inject(AuthService);
  userInfo : AuthModel = {} 
  private readonly router = inject(Router);
  userInitial : string = '';
  items: MenuItem[] = [];
  userInfoSubscribe : Subscription = new Subscription();
  logOutSubscribe : Subscription = new Subscription();

  ngOnInit(): void {
    this.getLoggedUserInfo();
    this.popUp();
  }
  

 popUp(){
     this.items = [
  {
    label: 'Account',
    image: './assets/user-round.png',
    routerLink: 'account'
  },
  {
    separator: true
  },
  {
    label: 'Logout',
    image: './assets/log-out.png',
    command: () => this.logOut(),
  }
];

  }
 

  getLoggedUserInfo(){
    this.userInfoSubscribe = this.authService.getLoggedUserInfo().subscribe({
      next:(res) => {
        this.userInfo = res;
        this.userInitial = res.firstName
        ? res.firstName.charAt(0).toUpperCase() : '';

      }
    })
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
     this.userInfoSubscribe.unsubscribe();
     this.logOutSubscribe.unsubscribe();
 }
}
