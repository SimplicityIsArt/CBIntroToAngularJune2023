import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { IMember } from './member.interface';


@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class MembersPageComponent implements OnInit {
  @ViewChild('cd') confirmDialog: any;

  members: IMember[] = [];
  statuses: SelectItem[] = [];
  clonedMembers: { [s: string]: IMember } = {};

  constructor(
    private memberService: MemberService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.memberService.getAll().subscribe({
      next: (members) => (this.members = members),
      error: (error) => console.error('Error: ' + error)
    });

    this.statuses = [
      { label: 'Active', value: true },
      { label: 'Inactive', value: false }
    ];
  }

  onRowEditInit(member: IMember) {
    this.clonedMembers[member.id] = { ...member };
  }

  onRowEditSave(member: IMember) {
    this.memberService.update(member).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Saved Successfully', detail: 'Member is updated' });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Could not update member' });
        console.error('Error: ' + error);
      }
    });
  }

  onRowEditCancel(member: IMember, index: number) {
    this.members[index] = this.clonedMembers[member.id];
    delete this.clonedMembers[member.id];
    this.messageService.add({ severity: 'warn', summary: 'Canceled', detail: 'Changes were canceled' });
  }

  onRowEditDelete(member: IMember) {
    this.confirmationService.confirm({
      header: 'Delete Confirmation',
      message: 'Do you want to delete this member?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Confirm',
      rejectLabel: 'Cancel',
      accept: () => {
        this.memberService.delete(member.id).subscribe({
          next: () => {
            const index = this.members.indexOf(member);
            this.members.splice(index, 1);
            this.messageService.add({ severity: 'error', summary: 'Deleted', detail: 'Member is deleted' });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Could not delete member' });
            console.error('Error: ' + error);
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'warn', summary: 'Canceled', detail: 'Delete operation canceled' });
      }
    });
  }

}
