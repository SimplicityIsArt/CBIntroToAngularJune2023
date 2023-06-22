import { Component } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members-page',
  template: `
    <h2>Members</h2>

    <table>
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
          <td><a [routerLink]="'' + member.id">{{ member.id }}</a></td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? 'Active' : 'Inactive' }}</td>
        </tr>
      </tbody>
    </table>


  `,
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent {

  constructor(public memberService: MemberService) {

  }
}
