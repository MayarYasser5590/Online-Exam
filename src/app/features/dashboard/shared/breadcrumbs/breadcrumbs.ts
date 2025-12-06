import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html'
})
export class Breadcrumbs {

  segments: { label: string; url: string }[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumbs());
  }

  buildBreadcrumbs() {
  let url = '';
  const parts = this.router.url.split('/').filter(part => part && part.toLowerCase() !== 'home');

  this.segments = parts.map(part => {
    url += '/' + part;
    return { label: this.formatLabel(part), url };
  });
}

private formatLabel(text: string): string {
  return text
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

}
