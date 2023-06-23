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

  delete(id: number) {
    
    return this.http.delete(`${this.url}/${id}`);
  }

  add(member: Member): Observable<Member> {

    return this.http.post<Member>(
      this.url, 
      member);
  }

  update(member: Member): Observable<Member> {

    return this.http.put<Member>(
      `${this.url}/${member.id}`, 
      member
    );
  }
}



    // Asynchronous calls
/*
    //#1 - callback function
    $.getJSON(url, function(data) { 


      $.getJSON(url2, function(data){


        $.getJSON(url3, function(data){

        });
      })
    });
*/
    /*
    // callbacks often end up with a callback in a callback ...


    // #2 - promise

    doAsyncOperation()
      .then(function(){})
      .catch(function(){})
      .doAyncOperation2()
      .then()
      .catch()


  // we can chain functions that create promises together
  // avoid the callback hell problem

  // #3 - Observable

    doAsyncOpertation()
      .subscribe(function(){});

  // an Observable will not make the asynchronous call
  // UNTIL somebody subscribes to the get the result.



    */
