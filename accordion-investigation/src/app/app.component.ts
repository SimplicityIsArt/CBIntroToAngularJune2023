import { Component } from '@angular/core';
import { AccordionItem } from './accordion-item.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <accordion [items]="items">
    </accordion>

    <hr>

    <accordion [items]="newsItems">
    </accordion>

    <hr>
    {{ price | currency:'EUR':'symbol' }} <br>


    {{ today | date:'long' | uppercase }} <br>


    <button (click)="summaryLength = summaryLength+10">+</button>
    <button (click)="summaryLength = summaryLength-10">-</button>
    
    {{ text | summary:summaryLength }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accordion Investigation';

  price = 1.23456;

  summaryLength = 25;

  today = new Date();

  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea doloremque dolore dolorum totam corrupti accusamus sunt aperiam quis debitis, hic sed dolores tempora, esse nisi excepturi inventore aut quibusdam! Molestiae?";

  items = [
    new AccordionItem("this is item 1", "This is item 1", true), 
    new AccordionItem("Item 2", "This is item 2", false), 
    new AccordionItem("Item 3", "This is item 3", false), 
    new AccordionItem("Item 4", "This is item 4", false)
  ];
  newsItems = [
    new AccordionItem("News Item 1", "This is News item 1", true), 
    new AccordionItem("News Item 2", "This is News item 2", false), 
    new AccordionItem("News Item 3", "This is News item 3", false), 
    new AccordionItem("News Item 4", "This is News item 4", false)
  ];
}
