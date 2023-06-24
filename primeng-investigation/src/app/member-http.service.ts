import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {

  url = "http://localhost:3000/members";

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http:HttpClient) {
  }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }

  add(member: Member): Observable<Member> {
    return this.http.post<Member>(this.url, member);
  }

  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.url}/${member.id}`, member);
  }
}
