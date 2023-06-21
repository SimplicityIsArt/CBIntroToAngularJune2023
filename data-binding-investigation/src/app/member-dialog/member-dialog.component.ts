import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'member-dialog',
  template: `
    <div class="pt-modal-bg" *ngIf="show">
      <div class="pt-modal">
        <h2>{{ title }}</h2>
        <member 
          [member]="editingMember" 
          (memberChange)="onSave($event)"
          [editing]="true"
          (cancel)="onCancel()"></member>
      </div>
    </div>  
  
  `,
  styleUrls: ['./member-dialog.component.css']
})
export class MemberDialogComponent implements OnChanges {

  @Input() show = false;
  @Input() title = "Member";
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  
  @Input() member = new Member(0, "xxx", "xxx", false);

  editingMember = new Member(0, "xxx", "xxx", false);

  ngOnChanges(changes: SimpleChanges): void {
    this.editingMember = new Member(
      this.member.id, 
      this.member.name, 
      this.member.email, 
      this.member.active);
  }

  onSave(member: Member) {
    this.save.emit(member);
  }
  onCancel() {
    this.cancel.emit();
  }
}

