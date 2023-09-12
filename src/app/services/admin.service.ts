import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../classes/Admin';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(adminlogin: Admin):Observable<any>{

    
    return this.http.post("http://localhost:8080/api/v1/admin/login", adminlogin);

  }


}
