import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail-page',
  template: `
    <h2>Member Detail</h2>

    which member???

    {{ id }}
    {{ member | json }}
  
  `,
  styleUrls: ['./member-detail-page.component.css']
})
export class MemberDetailPageComponent implements OnInit {

  id: number = 0;
  member: Member = new Member(0, "", "", false);

  constructor(public route: ActivatedRoute, public memberService: MemberService) {
    
  }
  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params["id"];
        this.member = <Member> this.memberService.get(this.id);
      });

  }
}
