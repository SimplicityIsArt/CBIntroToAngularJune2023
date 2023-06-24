import { Injectable } from '@angular/core';
import { MemberHttpService } from './member-http.service';
import { Member } from './member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private memberHttpService: MemberHttpService) { }

  getAll(): Observable<Member[]> {
    return this.memberHttpService.getAllMembers();
  }

  update(memberToUpdate: Member): Observable<Member> {
    return this.memberHttpService.update(memberToUpdate);
  }

  delete(id: number): Observable<{}> {
    return this.memberHttpService.delete(id);
  }

  add(memberToAdd: Member): Observable<Member> {
    return this.memberHttpService.add(memberToAdd);
  }
}
