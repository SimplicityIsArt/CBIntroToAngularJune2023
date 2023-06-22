import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title | titlecase }}</h1>
      <a routerLink = "home"
        routerLinkActive="activeLink">Home</a> |
      <a routerLink = "about"
        routerLinkActive="activeLink">About</a> |
      <a routerLink = "contact"
        routerLinkActive="activeLink">Contact</a> |
      <a routerLink = "members"
        routerLinkActive="activeLink">Members</a> |        
      <hr>
      <router-outlet></router-outlet>
    </div>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing investigation';
}
