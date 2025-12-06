import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-account-sidebar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './account-sidebar.html',
  styleUrl: './account-sidebar.scss',
})
export class AccountSidebar {

  @Input() currentStep!: 'profile' | 'changePass';

@Output() changeStep = new EventEmitter<'profile' | 'changePass'>();

go(step: 'profile' | 'changePass') {
  this.changeStep.emit(step);
}
}
