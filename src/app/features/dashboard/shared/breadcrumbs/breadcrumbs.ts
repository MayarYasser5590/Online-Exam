import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html'
})
export class Breadcrumbs implements OnDestroy {

  segments: { label: string; url: string }[] = [];
  routerSubscribe : Subscription = new Subscription();

  constructor(private router: Router) {
    this.routerSubscribe = this.router.events
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

 ngOnDestroy(): void {
     this.routerSubscribe.unsubscribe()
 }
}
