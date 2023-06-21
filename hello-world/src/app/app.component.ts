import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>

    <button (click)="onClick()">Clear</button>
    <button (click)="onAdd()">Add</button>


    <message 
      *ngFor="let message of messages" 
      [message]="message"
      (delete)="onDelete($event)">
    </message>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  messages: Message[] = [
    new Message("M1", "This is m1", false), 
    new Message("M2", "This is m2", false), 
    new Message("M3", "This is m3", false)

  ];

  onDelete(messageToDelete: Message) {
    let index = this.messages.findIndex(message => message.title == messageToDelete.title);

    this.messages.splice(index, 1);
  }
  onClick() {
    this.messages = [];
  }
  onAdd() {
    this.messages.push(new Message("New Message", "This is a new message", false));
  }
}
