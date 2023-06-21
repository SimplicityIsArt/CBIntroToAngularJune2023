import { Component, Input } from '@angular/core';
import { AccordionItem } from '../accordion-item.model';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <accordion-panel 
        *ngFor="let item of items" 
        [item]="item"
        (expanded)="onExpanded($event)">

      </accordion-panel>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() items: AccordionItem[] = [];

  onExpanded(expandedItem: AccordionItem) {

    this.items.forEach(item => {

      // close all items except for the on that just expanded
      if (item != expandedItem) {
        item.expanded = false;
      }
    })

  }
}
