import { Component, OnInit } from '@angular/core';
import { MemberHttpService } from './member-http.service';
import { Member } from './member.model';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <select size="10" [(ngModel)]="selectedMember">
      <option 
        *ngFor="let member of members"
        [value]="member.id">
        {{ member.name }}
      </option>
    </select>
    <button (click)="onDelete()">Delete</button>

    <button (click)="onAdd()">Add member</button>

    <button (click)="onUpdate()">Update</button>

    <hr>
    {{ selectedMember }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http service investigation';

  members:Member[] = [];
  selectedMember: number = 0;

  onUpdate() {
    // alert("update");

    let member = <Member> this.members.find(member => member.id == this.selectedMember);

    if (member == undefined) return;
    
    member.name = member.name + "!";
    this.httpTestService.update(member)
      .subscribe(member => {

      });
  }

  onAdd() {
    //alert("onAdd()");
    let newMember = new Member(0, "New member", "new.member@gmail.com", true);

    this.httpTestService.add(newMember)
      .subscribe(addedMember => {
        this.members.push(addedMember);
      });
  }

  onDelete() {
    this.httpTestService.delete(this.selectedMember)
      .subscribe(()=>{
        
        let index = this.members.findIndex(
          member => member.id == this.selectedMember);
        this.members.splice(index, 1);
      });
  }

  constructor(public httpTestService: MemberHttpService) {

  }
  ngOnInit(): void {
    this.httpTestService.getAllMembers()
      .subscribe((members:Member[])=>{
        this.members = members;
      })
  }

}
