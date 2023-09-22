import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  private baseUrl = 'http://localhost:8090/api/v1/parents'; // Replace with your backend API URL

  private baseUrlofParent = 'http://localhost:8090/api/v1/user';

  constructor(private http: HttpClient) { }


  // getChildByChildId(parentId: number, childId: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${parentId}/children/child/${childId}`);
  // }

  getAllChildrenByParentId(parentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${parentId}/children/getAllChildren/`);
  }



  addChildByParentId(parentId: number, newChild: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${parentId}/children`, newChild);
  }        

  // updateChildByChildId(parentId: number, child: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${parentId}/children`, child);
  // }

  // updateChildStatus(childId: number, active: boolean): Observable<any> {
  //   return this.http.patch(`${this.baseUrl}/children/${childId}/status?active=${active}`, {});
  // }




}
