import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private baseUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) { }


  // FOR PARENT

  getParentById(parentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/parent/${parentId}`);
  }

  // addParent(parentId: number, newParent: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/parent/`, newParent);
  // }

  addParent(newParent: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/parent/`, newParent);
  }

}
