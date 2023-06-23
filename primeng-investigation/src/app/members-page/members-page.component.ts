import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css'], 
  providers: [ MessageService ]
})
export class MembersPageComponent implements OnInit {

  clonedMembers: { [s: string]: Member } = {};
  members!:Member[];

  constructor(public memberService: MemberService, 
              public messageService: MessageService) {
    
  }
  ngOnInit(): void {
    this.members = this.memberService.getAll();
  }

  onRowEditInit(member: Member) {
    this.clonedMembers['' + member.id] = { ...member };
  }

  onRowEditSave(member: Member) {

    delete this.clonedMembers['' + member.id];
    //this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    
    this.memberService.update(member)
 
    this.messageService.add({
      severity: 'info', 
      summary: 'Saved', 
      detail: 'Member record saved'
    });

  }
  onRowEditDelete(member: Member) {
    this.memberService.delete(member.id);

    this.messageService.add({
      severity: 'error', 
      summary: 'Deleted', 
      detail: 'Member record deleted'
    });
  }

  onRowEditCancel(member: Member, index: number) {
    //this.products[index] = this.clonedProducts[product.id as string];

    delete this.clonedMembers['' + member.id];
  }
}
