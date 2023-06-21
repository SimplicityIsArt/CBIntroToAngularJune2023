import { Component } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <i class="fa fa-users fa-5x"></i>

    <!-- 2 way data binding 
    of custom model class
    to custom component
    !!! this is a big deal
    -->
    <!--
    <member 
      *ngFor="let member of members"
      [member]="member"
      (memberChange)="onChange($event)">
    </member>
    -->


<!--
    <member
      *ngFor="let member of memberService.getAll()"
      [member]="member"
      (memberChange)="onChange($event)"
      (deleteMember)="onDelete($event)">
    </member>
-->

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let member of memberService.getAll()">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="onEdit(member)" class="btn btn-success"><i class="fa fa-edit"></i></button>
            <button (click)="onDelete(member)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <button (click)="onAdd()" class="btn btn-primary"><i class="fa fa-user-plus"></i></button>

    <member-dialog 
      [show]="showDialog"
      (cancel)="showDialog=false"
      (save)="onSave($event)"
      [title]="dialogTitle"
      [member]="editingMember">
    </member-dialog>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data binding investigation';
  editingMember = new Member(0, "","", false);
  showDialog = false;
  dialogTitle = "Add Member";

  constructor(public memberService: MemberService) {
  }

  onEdit(memberToEdit: Member) {
    this.editingMember = memberToEdit;
    this.dialogTitle = "Edit Member";
    this.showDialog = true;
  }

  onAdd() {
    this.editingMember = new Member(0, "", "", false);
    this.dialogTitle = "Add Member";
    this.showDialog = true;
  }
  onSave(member: Member) {

    // is this an Add or an Edit?
    if (member.id == 0) {
      // add the new member
      this.memberService.add(member);
    } else {
      this.memberService.update(member);
    }
    this.showDialog = false;
  }

  onDelete(memberToDelete: Member) {

    if (confirm("are you sure?")) {
      this.memberService.delete(memberToDelete.id);

    }
  }

  onChange(updatedMember: Member) {
    //alert(JSON.stringify(updatedMember));
    //let index = this.members.findIndex(member => member.id == updatedMember.id);
    //this.members.splice(index, 1, updatedMember);

    this.memberService.update(updatedMember);
  }

}


/*
  <div [ngClass]="darkMode ? 'dark' : 'light'">
    <h1>{{ title | titlecase }}</h1>

    DarkMode:<input type="checkbox" [(ngModel)]="darkMode"/> <br>

    <input [value]="name" (keyup)="onChange(txtName.value)" #txtName/>
    <button (click)="name=''">reset</button>

    <br>



    <input [(ngModel)]="country"/>
    <button (click)="country=''">reset</button>    

    <br>
    <input type="number" [(ngModel)]="value"/>
    <br>

    <input type="color" [(ngModel)]="color"/><br>
    <input type="range" [(ngModel)]="value" max="100"/>

    <div class="box" [ngStyle]="{opacity: value/100, backgroundColor:color}">
    </div>
    <br>

    <input type="number" [(ngModel)] = "a"/><br>
    <input type="number" [(ngModel)] = "b"/><br>
    <hr>
    {{ a + b }}

    <hr>
    {{ name }}<br>
    {{ country }}<br>
    {{ value }}<br>
    {{ darkMode }}<br>
    {{ color }}
  </div>


    name = "Aidan";
  country = "Ireland";
  value = 25;
  color = 'red';

  a = 10;
  b = 20;

  darkMode = false;


  onChange(value: string) {
    console.log(value);

    this.name = value;
  }
  */