import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import Profile from "./profile/profile";
import { ChangePassword } from "./change-password/change-password";
import { DashboardPagesContainer } from '../../../dashboard/shared/dashboard-pages-container/dashboard-pages-container';
import { DashboardHeader } from '../../../dashboard/layout/dashboard-header/dashboard-header';
import { AccountSidebar } from '../../components/ui/account-sidebar/account-sidebar';
import { Back } from '../../../dashboard/shared/back/back';

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
