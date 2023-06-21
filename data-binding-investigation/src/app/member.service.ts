import { Injectable } from '@angular/core';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  members = [
    new Member(1, "Alice", "alice@gmail.com", false), 
    new Member(2, "Bob", "bob@gmail.com", true),
    new Member(3, "Carol", "carol@gmail.com", false) 
  ];

  constructor() { }

  getAll(): Member[] {
    return this.members;
  }

  update(memberToUpdate: Member) {
    let index = this.members.findIndex(member=>member.id == memberToUpdate.id);
    this.members.splice(index, 1, memberToUpdate);
  }

  delete(id: number) {
    let index = this.members.findIndex(member=>member.id == id);
    this.members.splice(index, 1);
    
  }

  /**
   * 
   * @param memberToAdd 
   * @returns the newly added member including the assigned id
   */
  add(memberToAdd: Member): Member {

    console.log("running the add");
    // find maximum id from the current list
    let maxId = this.members.reduce(
      (max, current) => current.id > max ? current.id : max, 
      this.members.length > 0 ? this.members[0].id : 0);
  
    memberToAdd.id = maxId + 1;
    this.members.push(memberToAdd);

    return memberToAdd;
  }

}
