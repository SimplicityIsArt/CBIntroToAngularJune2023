import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {

  url = "http://localhost:3000/members";

  constructor(private http: HttpClient) {
  }

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url).pipe(
      tap(() => console.log('Fetched all members')),
      retry(3),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(() => console.log(`Deleted member id=${id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  add(member: Member): Observable<Member> {
    return this.http.post<Member>(this.url, member).pipe(
      tap((newMember) => console.log(`Added member with id=${newMember.id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  update(member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.url}/${member.id}`, member).pipe(
      tap(() => console.log(`Updated member id=${member.id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  // error handler
  private handleError(error: HttpErrorResponse) {
    console.error('Something went wrong: ', error);
    return throwError(() => new Error(error.message || 'Internal server error. Please try again later.'));
  }
}
