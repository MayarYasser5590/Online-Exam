import { Component, AfterViewInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../../../../projects/auth/src/lib/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements AfterViewInit {
  private readonly router = inject(Router);
  readonly authService = inject(AuthService);
  

  ngAfterViewInit() {
    initFlowbite(); 
  }

  login(){
    this.authService.logOut().subscribe({
      next:(res)=>{
        console.log(res);
        
      },
      error:(err) =>{
        console.log(err);
        
      }
    })
  }
  logOut(){
     localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
