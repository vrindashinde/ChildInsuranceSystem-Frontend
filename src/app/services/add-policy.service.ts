import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPolicyService {
  private apiUrl = 'http://localhost:8090'; 

  constructor(private http: HttpClient) { }

  addPolicy(policyData: any) {
    return this.http.post(`${this.apiUrl}/policies/add`, policyData);
  }
  
  getPolicies() {
    return this.http.get(`${this.apiUrl}/policies/`);
  }
  
}