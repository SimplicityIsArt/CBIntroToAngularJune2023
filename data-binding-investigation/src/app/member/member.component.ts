import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'member',
  template: `
    <div>
      <table *ngIf="!editing">
        <tr><td>Id</td><td>{{ member.id }}</td></tr>
        <tr><td>Name</td><td>{{ member.name }}</td></tr>
        <tr><td>Email</td><td>{{ member.email }}</td></tr>
        <tr><td>Active</td><td>{{ member.active ? "Active" : "Inactive" }}</td></tr>
      </table>

      <div *ngIf="editing">
        <input [value]="editingMember.id" readonly/><br>
        <input [(ngModel)]="editingMember.name"/><br>
        <input [(ngModel)]="editingMember.email"/><br>
        <input type="checkbox" [(ngModel)]="editingMember.active"/><br>

      </div>
      <button *ngIf="!editing" (click)="onEdit()">Edit</button>
      <button *ngIf="editing" (click)="onSave()">Save</button>
      <button *ngIf="editing" (click)="onCancel()">Cancel</button>
      <button *ngIf="!editing" (click)="onDelete()">Delete</button>
    </div>
  `,
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnChanges {

  @Input() member: Member = new Member(0, "", "", false);

  @Output() memberChange = new EventEmitter();
  @Output() deleteMember = new EventEmitter();
  @Output() cancel = new EventEmitter();
  
  editingMember: Member = new Member(0, "", "", false);
  @Input() editing = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.editingMember = new Member(this.member.id, 
      this.member.name, 
      this.member.email, 
      this.member.active);
  }
 
  onDelete() {
    this.deleteMember.emit(this.member);
  }

  onEdit() {
    this.editing = !this.editing;

  }
  onSave() {
    this.member = this.editingMember;
    this.memberChange.emit(this.member);
    
    /*
    this.member.name = this.editingMember.name;
    this.member.email = this.editingMember.email;
    this.member.active = this.editingMember.active;
    */

    this.editing = false;
  }
  onCancel() {
    this.cancel.emit();
    this.editing = false;
  }
}
