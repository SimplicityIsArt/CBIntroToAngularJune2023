import { Injectable } from '@angular/core';
import { MemberHttpService } from './interfaces/member-http.service';
import { Observable } from 'rxjs';
import { IMember } from './members-page/member.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private memberHttpService: MemberHttpService) { }

  getAll(): Observable<IMember[]> {
    return this.memberHttpService.getAllMembers();
  }

  update(memberToUpdate: IMember): Observable<IMember> {
    return this.memberHttpService.update(memberToUpdate);
  }

  delete(id: number): Observable<{}> {
    return this.memberHttpService.delete(id);
  }

  add(memberToAdd: IMember): Observable<IMember> {
    return this.memberHttpService.add(memberToAdd);
  }
}
