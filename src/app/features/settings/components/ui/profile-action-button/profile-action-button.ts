import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-action-button',
  imports: [NgClass],
  templateUrl: './profile-action-button.html',
  styleUrl: './profile-action-button.scss',
})
export class ProfileActionButton {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() isLoading = false;

  @Input() buttonClass = '';

  @Input() modalTarget?: string;
  @Input() modalToggle?: string;

  @Output() action = new EventEmitter<void>();

}
