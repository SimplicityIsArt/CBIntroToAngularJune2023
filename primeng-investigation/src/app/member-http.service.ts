import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http.get<Member[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  add(member: Member): Observable<Member> {
    return this.http.post<Member>(this.url, member).pipe(
      catchError(this.handleError)
    );
  }

  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.url}/${member.id}`, member).pipe(
      catchError(this.handleError)
    );
  }

  // error handler
  private handleError(error: any) {
    console.error('Something went wrong: ', error);
    return throwError(error.message || 'Internal server error. Please try again later.');
  }
}
