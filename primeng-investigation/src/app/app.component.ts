import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
          <h2><i class="pi pi-users"></i></h2>
      </ng-template>
    </p-menubar>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'primeng investigation';

  items!: MenuItem[];

  constructor(public memberService: MemberService,
    public router: Router) {

  }
  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        command: () => {
          this.router.navigate(['home']);
        }
      },
      {
        label: 'About',
        command: () => {
          this.router.navigate(['about']);
        }
      },
      {
        label: 'Contact Us',
        command: () => {
          this.router.navigate(['contact']);
        }
      },
      {
        label: 'Members',
        command: () => {
          this.router.navigate(['members']);
        }
      }
    ];
  }

}
