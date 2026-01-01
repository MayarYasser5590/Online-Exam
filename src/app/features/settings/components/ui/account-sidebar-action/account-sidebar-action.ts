import { Component, EventEmitter, Input, Output } from '@angular/core';

type AccountStep = 'profile' | 'changePass';
@Component({
  selector: 'app-account-sidebar-action',
  imports: [],
  templateUrl: './account-sidebar-action.html',
  styleUrl: './account-sidebar-action.scss',
})
export class AccountSidebarAction {

  @Input({ required: true }) icon!: string;
  @Input({ required: true }) label!: string;

  @Input({ required: true }) step!: AccountStep;
  @Input({ required: true }) activeStep!: AccountStep;

  @Output() action = new EventEmitter<AccountStep>();

  onClick() {
    this.action.emit(this.step);
  }

}
