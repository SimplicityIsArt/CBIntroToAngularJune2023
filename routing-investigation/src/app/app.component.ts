import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ title | titlecase }}</h1>
      <a routerLink = "home">Home</a> |
      <a routerLink = "about">About</a> |
      <a routerLink = "contact">Contact</a> |
      <hr>
      <router-outlet></router-outlet>
    </div>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing investigation';
}
