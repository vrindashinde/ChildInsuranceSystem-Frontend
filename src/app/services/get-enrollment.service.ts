import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class GetEnrollmentsService {

  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  getEnrollments(): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/api/childpolicyenrollments/child/1`);

  }

  getChilderen(childId:number,policyId:number): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}/api/childpolicyenrollments/${childId}/${policyId}`);

  }

}