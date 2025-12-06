import { Component } from '@angular/core';
import { DashboardPagesContainer } from "../../shared/dashboard-pages-container/dashboard-pages-container";
import { Back } from "../../shared/back/back";
import { DashboardHeader } from "../../layout/dashboard-header/dashboard-header";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountSidebar } from "./components/ui/account-sidebar/account-sidebar";
import { Profile } from "./profile/profile";
import { ChangePassword } from "./change-password/change-password";

@Component({
  selector: 'app-account-settings',
  imports: [DashboardPagesContainer, Back, DashboardHeader, AccountSidebar, Profile, ChangePassword, RouterLink],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss',
})
export class AccountSettings {
currentStep: 'profile' | 'changePass' = 'profile';

changeStep(step:'profile' | 'changePass') {
  this.currentStep = step;
}

continue() {
  this.currentStep = 'changePass';
}

done() {
  this.currentStep = 'profile';
}

}
