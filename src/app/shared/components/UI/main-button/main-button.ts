import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.html',
  styleUrl: './main-button.scss',
})
export class MainButton {
  label = input<string | null>(null);
  icon = input<string | null>(null);
}
