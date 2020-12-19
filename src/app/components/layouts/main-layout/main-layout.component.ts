import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
  <app-nav-bar></app-nav-bar>
  <div class="container py-4">
    <router-outlet></router-outlet>
  </div>`,
})
export class MainLayoutComponent {}
