import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'message',
  template: `
    <div 
      (click)="onClick()"
      [ngClass]="message.read ? 'read' : 'unread'"
    >
      <h2>{{ message.title }}</h2>
      <p *ngIf="!message.read">{{ message.text }}</p>
      {{ message.read }}

      <button (click)="onDelete()">delete</button>
    </div>
    `,
  styleUrls: ['./message.component.css'],

})
export class MessageComponent {

  @Input() message:Message = new Message("","", false);
  @Output() delete = new EventEmitter();

  ///@Input() title = "This is the title";
  //@Input() text = "This is the text";
  //@Input() read = false;

  onDelete() {
    this.delete.emit(this.message);
  }
  onClick() {
    this.message.read = !this.message.read;
  }
}
