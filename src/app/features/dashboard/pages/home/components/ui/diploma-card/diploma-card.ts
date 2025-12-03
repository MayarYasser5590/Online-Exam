import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-diploma-card',
  imports: [],
  templateUrl: './diploma-card.html',
  styleUrl: './diploma-card.scss',
})
export class DiplomaCard {
  image = signal('');
  alt = signal('');
  title = signal('');

  @Input() set imageInput(value: string) {
    this.image.set(value);
  }

  @Input() set altInput(value: string) {
    this.alt.set(value);
  }

  @Input() set titleInput(value: string) {
    this.title.set(value);
  }

}
