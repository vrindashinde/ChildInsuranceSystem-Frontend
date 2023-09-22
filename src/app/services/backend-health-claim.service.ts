import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthClaim } from '../classes/HealthClaim';

@Injectable({
  providedIn: 'root'
})
export class BackendHealthClaimService {

  constructor(private httpClient:HttpClient) { 
  }

  getHealthClaims(childId:number):Observable<any>{
    return this.httpClient.get(`http://localhost:8090/api/v1/healthclaims/${childId}`,{responseType:"json"});
  }

  postHealthClaim(newHealthClaim:HealthClaim,childId:number):Observable<any>{
    return this.httpClient.post(`http://localhost:8090/api/v1/healthclaim/${childId}/1`,newHealthClaim);
  }

 
}
