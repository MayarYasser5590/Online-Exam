import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Sidebar } from "../../pages/sidebar/sidebar";

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayout {
router = inject(Router);
ngAfterViewInit() {
  initFlowbite();

  this.router.events.subscribe(() => {
    initFlowbite();
  });
}

}
