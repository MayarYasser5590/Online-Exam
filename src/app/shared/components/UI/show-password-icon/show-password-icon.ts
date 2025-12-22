import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-password-icon',
  imports: [],
  templateUrl: './show-password-icon.html',
  styleUrl: './show-password-icon.scss',
})
export class ShowPasswordIcon {
  @Input() isVisible = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
