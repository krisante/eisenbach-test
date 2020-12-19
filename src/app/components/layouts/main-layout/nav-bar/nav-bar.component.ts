import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <nav class="navbar bg-primary">
    <a routerLink="'/'"><img src="assets/images/eclogo.jpg" height="30" alt=""></a>
  </nav>
  `
})
export class NavBarComponent {}
