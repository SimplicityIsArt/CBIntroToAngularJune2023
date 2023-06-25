import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { IMember } from '../members-page/member.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {

  url = "http://localhost:3000/members";

  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.url).pipe(
      tap(() => console.log('Fetched all members')),
      retry(3),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<{}> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url).pipe(
      tap(() => console.log(`Deleted member id=${id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  add(member: IMember): Observable<IMember> {
    return this.http.post<IMember>(this.url, member).pipe(
      tap((newMember: IMember) => console.log(`Added member with id=${newMember.id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  update(member: IMember): Observable<IMember> {
    const url = `${this.url}/${member.id}`;
    return this.http.put<IMember>(url, member).pipe(
      tap(() => console.log(`Updated member id=${member.id}`)),
      retry(3),
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    // Log to console
    console.error(errorMessage);

    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}
