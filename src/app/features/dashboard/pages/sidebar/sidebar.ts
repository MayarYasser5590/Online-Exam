import { Component, AfterViewInit, inject, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';
import { AuthModel } from '../../../../../../projects/auth/src/lib/interfaces/AuthModel';
import { Subscription } from 'rxjs';
import { SidebarLink } from "../../shared/sidebar-link/sidebar-link";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, SidebarLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit , AfterViewInit , OnDestroy {
  readonly authService = inject(AuthService);
  userInfo : AuthModel = {} 
  private readonly router = inject(Router);
  userInitial : string = '';
  userInfoSubscribe : Subscription = new Subscription();
  logOutSubscribe : Subscription = new Subscription();

  ngOnInit(): void {
    this.getLoggedUserInfo()
  }

  ngAfterViewInit() {
    initFlowbite(); 
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
